<script lang="ts" setup>
import { DB } from '@/main';
import { toSQL } from '@/dbconnection';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GroupBox from '@/components/Utils/GroupBox.vue';
import { DaocDamageType } from '@/models/DaocValues';

const route = useRoute();
const router = useRouter();

interface Spell {
	SpellID: number;
	Spell_ID: string;
	Name: string;
	Description: string;
	Type: string;
	Target: string;
	Range: number;
	Power: number;
	CastTime: number;
	Damage: number;
	DamageType: number;
	Duration: number;
	Frequency: number;
	Pulse: number;
	PulsePower: number;
	Radius: number;
	RecastDelay: number;
	ResurrectHealth: number;
	ResurrectMana: number;
	Value: number;
	Concentration: number;
	LifeDrainReturn: number;
	AmnesiaChance: number;
	Message1: string;
	Message2: string;
	Message3: string;
	Message4: string;
	InstrumentRequirement: number;
	SpellGroup: number;
	EffectGroup: number;
	SubSpellID: number;
	MoveCast: boolean;
	Uninterruptible: boolean;
	IsFocus: boolean;
	SharedTimerGroup: number;
	IsPrimary: boolean;
	IsSecondary: boolean;
	AllowBolt: boolean;
	PackageID: string;
	TooltipId: number;
	ClientEffect: number;
	Icon: number;
}

const defaultSpell: Spell = {
	SpellID: 0,
	Spell_ID: '',
	Name: '',
	Description: '',
	Type: '',
	Target: 'Enemy',
	Range: 1500,
	Power: 0,
	CastTime: 3000,
	Damage: 0,
	DamageType: 0,
	Duration: 0,
	Frequency: 0,
	Pulse: 0,
	PulsePower: 0,
	Radius: 0,
	RecastDelay: 0,
	ResurrectHealth: 0,
	ResurrectMana: 0,
	Value: 0,
	Concentration: 0,
	LifeDrainReturn: 0,
	AmnesiaChance: 0,
	Message1: '',
	Message2: '',
	Message3: '',
	Message4: '',
	InstrumentRequirement: 0,
	SpellGroup: 0,
	EffectGroup: 0,
	SubSpellID: 0,
	MoveCast: false,
	Uninterruptible: false,
	IsFocus: false,
	SharedTimerGroup: 0,
	IsPrimary: false,
	IsSecondary: false,
	AllowBolt: false,
	PackageID: '',
	TooltipId: 0,
	ClientEffect: 0,
	Icon: 0,
};

const spell = ref<Spell>({ ...defaultSpell });
const loading = ref(true);
const saveLoading = ref(false);
const isNewRecord = ref(false);

// Spell lines for this spell
const spellLines = ref<{ LineName: string; Level: number; SpellLineName: string; Spec: string }[]>([]);

// Available spell types and targets
const spellTypes = ref<string[]>([]);
const spellTargets = ref<string[]>([]);
const allSpellLines = ref<{ KeyName: string; Name: string; Spec: string }[]>([]);

const spellTargetOptions = [
	'Self',
	'Pet',
	'Enemy',
	'Realm',
	'Group',
	'Area',
	'Corpse',
	'Cone',
];

async function loadOptions() {
	try {
		const [types] = await DB.select({
			table: "spell",
			fields: "DISTINCT Type",
			where: "Type IS NOT NULL AND Type != ''",
			orderby: "Type",
			limit: -1,
		});
		spellTypes.value = types.map((t: any) => t.Type).filter(Boolean);

		const [targets] = await DB.select({
			table: "spell",
			fields: "DISTINCT Target",
			where: "Target IS NOT NULL AND Target != ''",
			orderby: "Target",
			limit: -1,
		});
		spellTargets.value = targets.map((t: any) => t.Target).filter(Boolean);

		const [lines] = await DB.select({
			table: "spellline",
			fields: "KeyName, Name, Spec",
			orderby: "Name",
			limit: -1,
		});
		allSpellLines.value = lines;
	} catch (err) {
		console.error("Failed to load options:", err);
	}
}

async function loadSpellLines() {
	if (isNewRecord.value || !spell.value.SpellID) return;
	try {
		const [lines] = await DB.select({
			table: "linexspell",
			fields: "LineName, Level",
			where: `SpellID = ${spell.value.SpellID}`,
			orderby: "Level",
			limit: -1,
		});

		// Enrich with spell line info
		spellLines.value = lines.map((l: any) => {
			const lineInfo = allSpellLines.value.find(sl => sl.KeyName === l.LineName);
			return {
				...l,
				SpellLineName: lineInfo?.Name || l.LineName,
				Spec: lineInfo?.Spec || '',
			};
		});
	} catch (err) {
		console.error("Failed to load spell lines:", err);
	}
}

async function load() {
	loading.value = true;
	try {
		await loadOptions();

		const id = route.params.id;
		if (!id || id === 'new') {
			// Get next available SpellID
			const [maxId] = await DB.select({
				table: "spell",
				fields: "MAX(SpellID) as maxId",
				limit: 1,
			});
			const nextId = (maxId[0]?.maxId || 0) + 1;
			spell.value = { ...defaultSpell, SpellID: nextId, Spell_ID: `spell_${nextId}` };
			isNewRecord.value = true;
		} else {
			const [_spell] = await DB.select({
				table: "spell",
				fields: "*",
				where: `SpellID = ${toSQL(id)}`,
				limit: 1,
			});
			if (_spell.length) {
				spell.value = _spell[0];
				isNewRecord.value = false;
				await loadSpellLines();
			} else {
				spell.value = { ...defaultSpell };
				isNewRecord.value = true;
			}
		}
	} catch (err) {
		console.error("Failed to load spell:", err);
		alert(`Failed to load spell: ${err}`);
	} finally {
		loading.value = false;
	}
}

async function save() {
	if (!spell.value.Name) {
		alert("Spell name is required");
		return;
	}

	if (!spell.value.Spell_ID) {
		spell.value.Spell_ID = `spell_${spell.value.SpellID}`;
	}

	saveLoading.value = true;
	try {
		if (isNewRecord.value) {
			// Check if SpellID already exists
			const [existing] = await DB.select({
				table: "spell",
				fields: "SpellID",
				where: `SpellID = ${spell.value.SpellID}`,
				limit: 1,
			});

			if (existing.length > 0) {
				alert(`SpellID ${spell.value.SpellID} already exists. Please choose a different ID.`);
				saveLoading.value = false;
				return;
			}

			await DB.insert("spell", spell.value);
		} else {
			await DB.update("spell", spell.value, `SpellID = ${spell.value.SpellID}`);
		}
		router.back();
	} catch (err) {
		alert(`Failed to save spell: ${err}`);
	} finally {
		saveLoading.value = false;
	}
}

function duplicate() {
	const newSpell = { ...spell.value };
	newSpell.Name = `${newSpell.Name} (copy)`;
	spell.value = newSpell;
	isNewRecord.value = true;
	// Will need new ID
	DB.select({
		table: "spell",
		fields: "MAX(SpellID) as maxId",
		limit: 1,
	}).then(([maxId]) => {
		const nextId = (maxId[0]?.maxId || 0) + 1;
		spell.value.SpellID = nextId;
		spell.value.Spell_ID = `spell_${nextId}`;
	});
}

const castTimeSeconds = computed({
	get: () => spell.value.CastTime / 1000,
	set: (v: number) => { spell.value.CastTime = v * 1000; }
});

onMounted(load);
watch(() => route.params.id, load);
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar style="position: sticky; top: 0; z-index: 1">
			<v-toolbar-title>
				<v-icon class="mr-2">mdi-flash</v-icon>
				{{ isNewRecord ? 'New Spell' : spell.Name }}
			</v-toolbar-title>

			<v-btn v-if="!isNewRecord" color="secondary" class="mr-2" @click="duplicate">Duplicate</v-btn>
			<v-btn color="primary" @click="save" :loading="saveLoading">Save</v-btn>
		</v-toolbar>
		<v-progress-linear :active="loading" indeterminate />

		<v-card-text v-if="!loading">
			<GroupBox title="General">
				<v-row>
					<v-col cols="12" md="2">
						<v-text-field
							v-model.number="spell.SpellID"
							label="Spell ID"
							density="compact"
							type="number"
							:disabled="!isNewRecord"
						/>
					</v-col>
					<v-col cols="12" md="4">
						<v-text-field v-model="spell.Spell_ID" label="Internal ID" density="compact" />
					</v-col>
					<v-col cols="12" md="6">
						<v-text-field v-model="spell.Name" label="Name" density="compact" />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<v-textarea v-model="spell.Description" label="Description" density="compact" rows="2" auto-grow />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" md="4">
						<v-combobox
							v-model="spell.Type"
							:items="spellTypes"
							label="Type"
							density="compact"
						/>
					</v-col>
					<v-col cols="12" md="4">
						<v-combobox
							v-model="spell.Target"
							:items="[...new Set([...spellTargetOptions, ...spellTargets])]"
							label="Target"
							density="compact"
						/>
					</v-col>
					<v-col cols="12" md="4">
						<v-select
							v-model="spell.DamageType"
							:items="DaocDamageType"
							label="Damage Type"
							density="compact"
						/>
					</v-col>
				</v-row>
			</GroupBox>

			<GroupBox title="Stats">
				<v-row>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.Range" label="Range" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.Radius" label="Radius" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.Power" label="Power" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="castTimeSeconds" label="Cast Time (s)" density="compact" type="number" step="0.1" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.Duration" label="Duration (ms)" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.RecastDelay" label="Recast (ms)" density="compact" type="number" />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.Damage" label="Damage" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.Value" label="Value" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.Concentration" label="Concentration" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.LifeDrainReturn" label="Life Drain Return" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.AmnesiaChance" label="Amnesia Chance" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.Frequency" label="Frequency" density="compact" type="number" />
					</v-col>
				</v-row>
			</GroupBox>

			<GroupBox title="Pulse">
				<v-row>
					<v-col cols="6" md="3">
						<v-text-field v-model.number="spell.Pulse" label="Pulse" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="3">
						<v-text-field v-model.number="spell.PulsePower" label="Pulse Power" density="compact" type="number" />
					</v-col>
				</v-row>
			</GroupBox>

			<GroupBox title="Resurrection">
				<v-row>
					<v-col cols="6" md="3">
						<v-text-field v-model.number="spell.ResurrectHealth" label="Resurrect Health %" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="3">
						<v-text-field v-model.number="spell.ResurrectMana" label="Resurrect Mana %" density="compact" type="number" />
					</v-col>
				</v-row>
			</GroupBox>

			<GroupBox title="Groups & Effects">
				<v-row>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.SpellGroup" label="Spell Group" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.EffectGroup" label="Effect Group" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.SharedTimerGroup" label="Shared Timer Group" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.SubSpellID" label="Sub Spell ID" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field v-model.number="spell.InstrumentRequirement" label="Instrument Req" density="compact" type="number" />
					</v-col>
				</v-row>
			</GroupBox>

			<GroupBox title="Visual">
				<v-row>
					<v-col cols="6" md="3">
						<v-text-field v-model.number="spell.ClientEffect" label="Client Effect" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="3">
						<v-text-field v-model.number="spell.Icon" label="Icon" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="3">
						<v-text-field v-model.number="spell.TooltipId" label="Tooltip ID" density="compact" type="number" />
					</v-col>
					<v-col cols="6" md="3">
						<v-text-field v-model="spell.PackageID" label="Package ID" density="compact" />
					</v-col>
				</v-row>
			</GroupBox>

			<GroupBox title="Flags">
				<v-row>
					<v-col cols="6" md="2">
						<v-checkbox v-model="spell.MoveCast" label="Move Cast" density="compact" hide-details />
					</v-col>
					<v-col cols="6" md="2">
						<v-checkbox v-model="spell.Uninterruptible" label="Uninterruptible" density="compact" hide-details />
					</v-col>
					<v-col cols="6" md="2">
						<v-checkbox v-model="spell.IsFocus" label="Is Focus" density="compact" hide-details />
					</v-col>
					<v-col cols="6" md="2">
						<v-checkbox v-model="spell.IsPrimary" label="Is Primary" density="compact" hide-details />
					</v-col>
					<v-col cols="6" md="2">
						<v-checkbox v-model="spell.IsSecondary" label="Is Secondary" density="compact" hide-details />
					</v-col>
					<v-col cols="6" md="2">
						<v-checkbox v-model="spell.AllowBolt" label="Allow Bolt" density="compact" hide-details />
					</v-col>
				</v-row>
			</GroupBox>

			<GroupBox title="Messages">
				<v-row>
					<v-col cols="12" md="6">
						<v-text-field v-model="spell.Message1" label="Message 1 (You cast)" density="compact" />
					</v-col>
					<v-col cols="12" md="6">
						<v-text-field v-model="spell.Message2" label="Message 2 (Target hit)" density="compact" />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" md="6">
						<v-text-field v-model="spell.Message3" label="Message 3 (Others see)" density="compact" />
					</v-col>
					<v-col cols="12" md="6">
						<v-text-field v-model="spell.Message4" label="Message 4 (Expire)" density="compact" />
					</v-col>
				</v-row>
			</GroupBox>

			<GroupBox title="Spell Lines" v-if="!isNewRecord && spellLines.length > 0">
				<v-table density="compact">
					<thead>
						<tr>
							<th>Line</th>
							<th>Spec</th>
							<th>Level</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="line in spellLines" :key="line.LineName">
							<td>{{ line.SpellLineName }}</td>
							<td>{{ line.Spec }}</td>
							<td>{{ line.Level }}</td>
						</tr>
					</tbody>
				</v-table>
			</GroupBox>
		</v-card-text>
	</v-sheet>
</template>
