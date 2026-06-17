<script lang="ts" setup>
import { DB } from '@/main';
import { toSQL } from '@/dbconnection';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GroupBox from '@/components/Utils/GroupBox.vue';
import { DaocClasses } from '@/models/DaocClasses';

const route = useRoute();
const router = useRouter();

interface Style {
	StyleID: number;
	ID: number;
	ClassId: number;
	Name: string;
	SpecKeyName: string;
	SpecLevelRequirement: number;
	Icon: number;
	EnduranceCost: number;
	StealthRequirement: boolean;
	OpeningRequirementType: number;
	OpeningRequirementValue: number;
	AttackResultRequirement: number;
	WeaponTypeRequirement: number;
	GrowthOffset: number;
	GrowthRate: number;
	BonusToHit: number;
	BonusToDefense: number;
	TwoHandAnimation: number;
	RandomProc: boolean;
	ArmorHitLocation: number;
}

const defaultStyle: Style = {
	StyleID: 0,
	ID: 0,
	ClassId: 0,
	Name: '',
	SpecKeyName: '',
	SpecLevelRequirement: 1,
	Icon: 0,
	EnduranceCost: 10,
	StealthRequirement: false,
	OpeningRequirementType: 0,
	OpeningRequirementValue: 0,
	AttackResultRequirement: 0,
	WeaponTypeRequirement: 0,
	GrowthOffset: 0,
	GrowthRate: 0,
	BonusToHit: 0,
	BonusToDefense: 0,
	TwoHandAnimation: 0,
	RandomProc: false,
	ArmorHitLocation: 0,
};

const style = ref<Style>({ ...defaultStyle });
const loading = ref(true);
const saveLoading = ref(false);
const isNewRecord = ref(false);

// Style procs (linked spells)
const styleProcs = ref<{ SpellID: number; SpellName: string; Chance: number }[]>([]);

// Available specs
const specializations = ref<{ KeyName: string; Name: string }[]>([]);

// Opening requirement types
const openingRequirementTypes = [
	{ value: 0, title: "None" },
	{ value: 1, title: "Offensive Style (Value = Style ID)" },
	{ value: 2, title: "Defensive Style (Value = Style ID)" },
	{ value: 3, title: "Position: Back" },
	{ value: 4, title: "Position: Side" },
	{ value: 5, title: "Position: Front" },
];

// Attack result requirements
const attackResultRequirements = [
	{ value: 0, title: "Any" },
	{ value: 1, title: "Hit" },
	{ value: 2, title: "Miss" },
	{ value: 3, title: "Parry" },
	{ value: 4, title: "Block" },
	{ value: 5, title: "Evade" },
	{ value: 6, title: "Fumble" },
	{ value: 7, title: "Style" },
];

// Weapon type requirements
const weaponTypeRequirements = [
	{ value: 0, title: "Any" },
	{ value: 1, title: "Crush" },
	{ value: 2, title: "Slash" },
	{ value: 3, title: "Thrust" },
	{ value: 4, title: "Flex (Slash)" },
	{ value: 5, title: "Flex (Crush)" },
	{ value: 6, title: "Polearm (Thrust)" },
	{ value: 7, title: "Polearm (Crush)" },
	{ value: 8, title: "Polearm (Slash)" },
	{ value: 9, title: "Two Hand (Crush)" },
	{ value: 10, title: "Two Hand (Slash)" },
	{ value: 11, title: "Two Hand (Thrust)" },
];

// Armor hit locations
const armorHitLocations = [
	{ value: 0, title: "Normal" },
	{ value: 1, title: "Head" },
	{ value: 2, title: "Arms" },
	{ value: 3, title: "Legs" },
];

const classItems = computed(() =>
	DaocClasses
		.filter(c => c.category !== "Base")
		.map(c => ({ title: `${c.name} (${c.category})`, value: c.id }))
);

async function loadOptions() {
	try {
		const [specs] = await DB.select({
			table: "specialization",
			fields: "KeyName, Name",
			orderby: "Name",
			limit: -1,
		});
		specializations.value = specs;
	} catch (err) {
		console.error("Failed to load options:", err);
	}
}

async function loadStyleProcs() {
	if (isNewRecord.value || !style.value.StyleID) return;
	try {
		const [procs] = await DB.select({
			table: "stylexspell",
			fields: "SpellID, Chance",
			where: `StyleID = ${style.value.ID} AND ClassID = ${style.value.ClassId}`,
			limit: -1,
		});

		// Get spell names
		if (procs.length > 0) {
			const spellIds = procs.map((p: any) => p.SpellID).join(',');
			const [spells] = await DB.select({
				table: "spell",
				fields: "SpellID, Name",
				where: `SpellID IN (${spellIds})`,
				limit: -1,
			});
			const spellMap: Record<number, string> = {};
			for (const s of spells) {
				spellMap[s.SpellID] = s.Name;
			}

			styleProcs.value = procs.map((p: any) => ({
				SpellID: p.SpellID,
				SpellName: spellMap[p.SpellID] || `Spell ${p.SpellID}`,
				Chance: p.Chance,
			}));
		} else {
			styleProcs.value = [];
		}
	} catch (err) {
		console.error("Failed to load style procs:", err);
	}
}

async function load() {
	loading.value = true;
	try {
		await loadOptions();

		const id = route.params.id;
		if (!id || id === 'new') {
			// Get next available StyleID
			const [maxId] = await DB.select({
				table: "style",
				fields: "MAX(StyleID) as maxId",
				limit: 1,
			});
			const nextId = (maxId[0]?.maxId || 0) + 1;
			style.value = { ...defaultStyle, StyleID: nextId };
			isNewRecord.value = true;
		} else {
			const [_style] = await DB.select({
				table: "style",
				fields: "*",
				where: `StyleID = ${toSQL(id)}`,
				limit: 1,
			});
			if (_style.length) {
				style.value = _style[0];
				isNewRecord.value = false;
				await loadStyleProcs();
			} else {
				style.value = { ...defaultStyle };
				isNewRecord.value = true;
			}
		}
	} catch (err) {
		console.error("Failed to load style:", err);
		alert(`Failed to load style: ${err}`);
	} finally {
		loading.value = false;
	}
}

async function save() {
	if (!style.value.Name) {
		alert("Style name is required");
		return;
	}

	if (!style.value.SpecKeyName) {
		alert("Specialization is required");
		return;
	}

	if (style.value.ClassId === 0) {
		alert("Class is required");
		return;
	}

	saveLoading.value = true;
	try {
		if (isNewRecord.value) {
			// Check if StyleID already exists
			const [existing] = await DB.select({
				table: "style",
				fields: "StyleID",
				where: `StyleID = ${style.value.StyleID}`,
				limit: 1,
			});

			if (existing.length > 0) {
				alert(`StyleID ${style.value.StyleID} already exists. Please choose a different ID.`);
				saveLoading.value = false;
				return;
			}

			await DB.insert("style", style.value);
		} else {
			await DB.update("style", style.value, `StyleID = ${style.value.StyleID}`);
		}
		router.back();
	} catch (err) {
		alert(`Failed to save style: ${err}`);
	} finally {
		saveLoading.value = false;
	}
}

function duplicate() {
	const newStyle = { ...style.value };
	newStyle.Name = `${newStyle.Name} (copy)`;
	style.value = newStyle;
	isNewRecord.value = true;
	// Will need new ID
	DB.select({
		table: "style",
		fields: "MAX(StyleID) as maxId",
		limit: 1,
	}).then(([maxId]) => {
		const nextId = (maxId[0]?.maxId || 0) + 1;
		style.value.StyleID = nextId;
	});
}

function goToSpell(spellId: number) {
	router.push({ name: "spell", params: { id: spellId } });
}

onMounted(load);
watch(() => route.params.id, load);
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar style="position: sticky; top: 0; z-index: 1">
			<v-toolbar-title>
				<v-icon class="mr-2">mdi-sword</v-icon>
				{{ isNewRecord ? 'New Style' : style.Name }}
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
							v-model.number="style.StyleID"
							label="Style ID (DB)"
							density="compact"
							type="number"
							:disabled="!isNewRecord"
						/>
					</v-col>
					<v-col cols="12" md="2">
						<v-text-field
							v-model.number="style.ID"
							label="In-Game ID"
							density="compact"
							type="number"
						/>
					</v-col>
					<v-col cols="12" md="4">
						<v-text-field v-model="style.Name" label="Name" density="compact" />
					</v-col>
					<v-col cols="12" md="4">
						<v-select
							v-model="style.ClassId"
							:items="classItems"
							label="Class"
							density="compact"
						/>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" md="4">
						<v-select
							v-model="style.SpecKeyName"
							:items="specializations.map(s => ({ title: s.Name, value: s.KeyName }))"
							label="Specialization"
							density="compact"
						/>
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field
							v-model.number="style.SpecLevelRequirement"
							label="Spec Level"
							density="compact"
							type="number"
						/>
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field
							v-model.number="style.Icon"
							label="Icon"
							density="compact"
							type="number"
						/>
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field
							v-model.number="style.EnduranceCost"
							label="Endurance Cost"
							density="compact"
							type="number"
						/>
					</v-col>
					<v-col cols="6" md="2">
						<v-checkbox v-model="style.StealthRequirement" label="Stealth Required" density="compact" hide-details />
					</v-col>
				</v-row>
			</GroupBox>

			<GroupBox title="Opening Requirements">
				<v-row>
					<v-col cols="12" md="4">
						<v-select
							v-model="style.OpeningRequirementType"
							:items="openingRequirementTypes"
							label="Opening Type"
							density="compact"
						/>
					</v-col>
					<v-col cols="12" md="4">
						<v-text-field
							v-model.number="style.OpeningRequirementValue"
							label="Opening Value (Style ID for chain)"
							density="compact"
							type="number"
							:disabled="style.OpeningRequirementType === 0"
						/>
					</v-col>
					<v-col cols="12" md="4">
						<v-select
							v-model="style.AttackResultRequirement"
							:items="attackResultRequirements"
							label="Attack Result Required"
							density="compact"
						/>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" md="4">
						<v-select
							v-model="style.WeaponTypeRequirement"
							:items="weaponTypeRequirements"
							label="Weapon Type Required"
							density="compact"
						/>
					</v-col>
				</v-row>
			</GroupBox>

			<GroupBox title="Combat Stats">
				<v-row>
					<v-col cols="6" md="2">
						<v-text-field
							v-model.number="style.GrowthOffset"
							label="Growth Offset"
							density="compact"
							type="number"
							step="0.1"
						/>
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field
							v-model.number="style.GrowthRate"
							label="Growth Rate"
							density="compact"
							type="number"
							step="0.1"
						/>
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field
							v-model.number="style.BonusToHit"
							label="Bonus to Hit"
							density="compact"
							type="number"
						/>
					</v-col>
					<v-col cols="6" md="2">
						<v-text-field
							v-model.number="style.BonusToDefense"
							label="Bonus to Defense"
							density="compact"
							type="number"
						/>
					</v-col>
					<v-col cols="6" md="2">
						<v-select
							v-model="style.ArmorHitLocation"
							:items="armorHitLocations"
							label="Armor Hit Location"
							density="compact"
						/>
					</v-col>
				</v-row>
			</GroupBox>

			<GroupBox title="Animation & Misc">
				<v-row>
					<v-col cols="6" md="3">
						<v-text-field
							v-model.number="style.TwoHandAnimation"
							label="Two Hand Animation"
							density="compact"
							type="number"
						/>
					</v-col>
					<v-col cols="6" md="3">
						<v-checkbox v-model="style.RandomProc" label="Random Proc" density="compact" hide-details />
					</v-col>
				</v-row>
			</GroupBox>

			<GroupBox title="Style Procs (Linked Spells)" v-if="!isNewRecord && styleProcs.length > 0">
				<v-table density="compact">
					<thead>
						<tr>
							<th>Spell ID</th>
							<th>Name</th>
							<th>Chance %</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="proc in styleProcs" :key="proc.SpellID">
							<td>{{ proc.SpellID }}</td>
							<td>{{ proc.SpellName }}</td>
							<td>{{ proc.Chance }}</td>
							<td>
								<v-btn size="small" icon="mdi-arrow-right" variant="text" @click="goToSpell(proc.SpellID)" />
							</td>
						</tr>
					</tbody>
				</v-table>
			</GroupBox>
		</v-card-text>
	</v-sheet>
</template>
