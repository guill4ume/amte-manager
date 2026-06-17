<script lang="ts" setup>
import { DB } from "@/main";
import { computed, onMounted, ref, watch } from "vue";
import { DaocItemIcon } from "@/components/DaocIcon";
import { sql } from "@/utils";
import { useRoute } from "vue-router";
import { ItemTemplate } from "@/models/DolTypes";
import GroupBox from "@/components/Utils/GroupBox.vue";
import {
	DaocColors,
	DaocDamageType,
	DaocItemEffects,
	DaocItemExtension,
	DaocItemHand,
	DaocItemObjectTypes,
	DaocItemSlots,
	DaocProperty,
} from "@/models/DaocValues";
import { DaocRealms } from "@/models/DaocClasses";
import { reactive } from "vue";
import {
	calculateItemUtility,
	getBonusUtility,
	getUtilityCategoryName,
	type ItemUtilityResult,
} from "@/utils/itemUtility";

const route = useRoute();
const item = ref<ItemTemplate | undefined>(undefined);
const loading = ref(true);

const _bonusKeys = [
	"Bonus1",
	"Bonus2",
	"Bonus3",
	"Bonus4",
	"Bonus5",
	"Bonus6",
	"Bonus7",
	"Bonus8",
	"Bonus9",
	"Bonus10",
	"ExtraBonus",
] as const;
const bonuses = reactive<{ property: number; category: string; value: number; utility: number }[]>([]);
const itemUtility = ref<ItemUtilityResult | null>(null);

function updateUtility() {
	if (!item.value) {
		itemUtility.value = null;
		return;
	}
	itemUtility.value = calculateItemUtility(item.value);

	// Update each bonus's utility
	for (let i = 0; i < bonuses.length; i++) {
		const bonus = bonuses[i];
		const utilityResult = getBonusUtility(bonus.property, bonus.value);
		bonus.utility = utilityResult.utility;
		bonus.category = getUtilityCategoryName(utilityResult.category);
	}
}

watch(bonuses, () => {
	if (!item.value) return;

	let i = 0;
	for (const { property, value } of bonuses) {
		if (property === 0 || value === 0) continue;
		const key = _bonusKeys[i++];
		item.value[key] = value;
		item.value[`${key}Type`] = property;
	}
	for (; i < _bonusKeys.length; ++i) {
		const key = _bonusKeys[i];
		item.value[key] = 0;
		item.value[`${key}Type`] = 0;
	}

	updateUtility();
}, { deep: true });

// Watch Level and Quality changes to recalculate max imbue points
watch(
	() => [item.value?.Level, item.value?.Quality],
	() => updateUtility()
);

function _updateBonuses() {
	if (!item.value) {
		bonuses.length = 0;
		itemUtility.value = null;
		return;
	}
	bonuses.length = 0;
	for (const key of _bonusKeys) {
		const bonusType = item.value[`${key}Type`];
		const bonusValue = item.value[key];
		if (bonusValue !== 0 || bonusType !== 0) {
			const utilityResult = getBonusUtility(bonusType, bonusValue);
			bonuses.push({
				property: bonusType,
				category: getUtilityCategoryName(utilityResult.category),
				value: bonusValue,
				utility: utilityResult.utility,
			});
		}
	}
	updateUtility();
}

async function load() {
	if (!route.params.id) {
		loading.value = false;
		return;
	}
	const [_item] = await DB.select({
		table: "itemtemplate",
		fields: "*",
		where: sql`Id_nb = ${route.params.id}`,
		limit: 1,
	});
	item.value = _item.length ? _item[0] : undefined;
	_updateBonuses();
	loading.value = false;
}

onMounted(load);
watch(() => route.params.id, load);

const saveLoading = ref(false);
async function save() {
	if (!item.value) return;

	saveLoading.value = true;
	await DB.update("itemtemplate", item.value, sql`Id_nb = ${item.value.Id_nb}`);
	saveLoading.value = false;
}
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar style="position: sticky; top: 0; z-index: 1">
			<v-toolbar-title>
				<DaocItemIcon :id="item?.Model ?? 0" style="position: relative; top: 6px" />
				{{ item?.Name ?? "Loading..." }}
			</v-toolbar-title>

			<v-btn color="primary" @click="save" :loading="saveLoading">Save</v-btn>
		</v-toolbar>
		<v-progress-linear :active="loading" indeterminate />

		<v-card-text>
			<template v-if="item">
				<GroupBox title="General">
					<v-row>
						<v-col>
							<v-text-field v-model="item.Id_nb" label="Template" density="compact" />
						</v-col>
						<v-col>
							<v-text-field v-model="item.Name" label="Name" density="compact" />
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<v-select
								v-model="item.Item_Type"
								:items="DaocItemSlots.map(({ id, name }) => ({ value: id, title: `${id}. ${name}` }))"
								label="Slot"
								density="compact"
							/>
						</v-col>
						<v-col>
							<v-select
								v-model="item.Object_Type"
								:items="DaocItemObjectTypes.map(({ id, name }) => ({ value: id, title: `${id}. ${name}` }))"
								label="Type"
								density="compact"
							/>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.Level"
								label="Level"
								density="compact"
								:rules="[() => (item && item.Level >= 0 && item.Level < 64) || 'Invalid Level']"
							/>
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.LevelRequirement"
								label="Level required"
								density="compact"
								:rules="[
									() =>
										(item && item.LevelRequirement >= 0 && item.LevelRequirement <= 50) || 'Invalid LevelRequirement',
								]"
							/>
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.BonusLevel"
								label="Level bonus"
								density="compact"
								:rules="[() => (item && item.BonusLevel >= 0 && item.BonusLevel < 64) || 'Invalid BonusLevel']"
							/>
						</v-col>

						<v-col cols="2">
							<v-text-field
								v-model.number="item.DPS_AF"
								label="DPS / AF"
								density="compact"
								hint="165 for 16.5 DPS"
								:rules="[() => (item && item.DPS_AF >= 0 && item.DPS_AF < 256) || 'Invalid DPS_AF']"
							/>
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.SPD_ABS"
								label="SPD / ABS"
								density="compact"
								hint="35 for 3.5"
								:rules="[() => (item && item.SPD_ABS >= 0 && item.SPD_ABS < 256) || 'Invalid SPD_ABS']"
							/>
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.Bonus"
								label="Bonus"
								density="compact"
								hint="%"
								:rules="[() => (item && item.Bonus >= 0 && item.Bonus < 256) || 'Invalid Bonus']"
							/>
						</v-col>

						<v-col cols="2">
							<v-text-field
								v-model.number="item.Weight"
								label="Weight"
								density="compact"
								hint="16 for 1.6 lbs"
								:rules="[() => (item && item.Weight >= 0 && item.Weight < 2048) || 'Invalid Weight']"
							/>
						</v-col>
						<v-col cols="2">
							<v-select v-model="item.Realm" :items="DaocRealms" label="Realm" density="compact" />
						</v-col>

						<v-col cols="2">
							<v-text-field
								v-model.number="item.Condition"
								label="Condition"
								density="compact"
								:rules="[
									() => (item && item.Condition >= 0 && item.Condition <= item.MaxCondition) || 'Invalid Condition',
								]"
							/>
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.MaxCondition"
								label="Max condition"
								density="compact"
								:rules="[
									() => (item && item.MaxCondition >= 0 && item.MaxCondition < 1000000) || 'Invalid MaxCondition',
								]"
							/>
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.Durability"
								label="Durability"
								density="compact"
								:rules="[
									() => (item && item.Durability >= 0 && item.Durability <= item.MaxDurability) || 'Invalid Durability',
								]"
							/>
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.MaxDurability"
								label="Max durability"
								density="compact"
								:rules="[
									() => (item && item.MaxDurability >= 0 && item.MaxDurability < 1000000) || 'Invalid MaxDurability',
								]"
							/>
						</v-col>
					</v-row>

					<v-row>
						<v-col cols="2">
							<v-checkbox
								v-model="item.IsPickable"
								:true-value="1"
								:false-value="0"
								label="Is pickable"
								density="compact"
							/>
						</v-col>
						<v-col cols="2">
							<v-checkbox
								v-model="item.IsDropable"
								:true-value="1"
								:false-value="0"
								label="Is dropable"
								density="compact"
							/>
						</v-col>
						<v-col cols="2">
							<v-checkbox
								v-model="item.IsTradable"
								:true-value="1"
								:false-value="0"
								label="Is tradable"
								density="compact"
							/>
						</v-col>
						<v-col cols="2">
							<v-checkbox
								v-model="item.CanDropAsLoot"
								:true-value="1"
								:false-value="0"
								label="Can be loot"
								density="compact"
							/>
						</v-col>
						<v-col cols="2">
							<v-checkbox
								v-model="item.IsIndestructible"
								:true-value="1"
								:false-value="0"
								label="Is indestructible"
								density="compact"
							/>
						</v-col>
						<v-col cols="2">
							<v-checkbox
								v-model="item.IsNotLosingDur"
								:true-value="1"
								:false-value="0"
								label="Is not losing durability"
								density="compact"
							/>
						</v-col>
					</v-row>

					<v-row>
						<v-col cols="3">
							<v-text-field
								v-model.number="item.Quality"
								label="Quality"
								density="compact"
								hint="%"
								:rules="[() => (item && item.Quality >= 0 && item.Quality < 200) || 'Invalid Quality']"
							/>
						</v-col>
						<v-col cols="3">
							<v-text-field
								v-model.number="item.Price"
								label="Price"
								density="compact"
								hint="10020304 for 1p 2g 3s 4c"
								:rules="[() => (item && item.Price >= 0 && item.Price < 10000000000) || 'Invalid Price']"
							/>
						</v-col>
						<v-col cols="3">
							<v-text-field
								v-model.number="item.MaxCount"
								label="Max count"
								density="compact"
								hint="Max stack size"
								:rules="[() => (item && item.MaxCount > 0 && item.MaxCount < 256) || 'Invalid MaxCount']"
							/>
						</v-col>
						<v-col cols="3">
							<v-text-field
								v-model.number="item.PackSize"
								label="Pack size when buying"
								density="compact"
								hint="must be less than 'max count'"
								:rules="[() => (item && item.PackSize > 0 && item.PackSize <= item.MaxCount) || 'Invalid PackSize']"
							/>
						</v-col>
					</v-row>

					<v-row>
						<v-col>
							<v-textarea
								v-model="item.Description"
								label="Description"
								density="compact"
								hint="Less than 1500 characters"
							/>
						</v-col>
					</v-row>
				</GroupBox>

				<GroupBox title="Appearance">
					<v-row>
						<v-col cols="3">
							<v-text-field v-model.number="item.Model" label="Model" density="compact">
								<template v-slot:append>
									<DaocItemIcon :id="item.Model" />
								</template>
							</v-text-field>
						</v-col>

						<v-col cols="3">
							<v-select v-model.number="item.Effect" :items="DaocItemEffects" label="Effect" density="compact" />
						</v-col>
						<v-col cols="3">
							<v-select v-model="item.Color" :items="DaocColors" label="Color" density="compact" />
						</v-col>
						<v-col cols="3">
							<v-select v-model="item.Extension" :items="DaocItemExtension" label="Extension" density="compact" />
						</v-col>
					</v-row>
				</GroupBox>

				<GroupBox title="Only for weapons">
					<v-row>
						<v-col>
							<v-select v-model="item.Hand" :items="DaocItemHand" label="Hand" density="compact" />
						</v-col>
						<v-col>
							<v-select v-model="item.Type_Damage" :items="DaocDamageType" label="Damage type" density="compact" />
						</v-col>
					</v-row>
				</GroupBox>

				<GroupBox title="Magical bonuses">
					<v-alert
						v-if="itemUtility"
						:color="itemUtility.totalUtility > itemUtility.maxImbuePoints ? 'warning' : 'success'"
						variant="tonal"
						density="compact"
						class="mb-4"
					>
						<div class="d-flex justify-space-between align-center">
							<span>
								<strong>Total Utility:</strong> {{ itemUtility.totalUtility }} / {{ itemUtility.maxImbuePoints }}
								<span class="text-caption ml-2">(Level {{ item?.Level }}, Quality {{ item?.Quality }}%)</span>
							</span>
							<v-chip
								:color="itemUtility.totalUtility > itemUtility.maxImbuePoints ? 'warning' : 'success'"
								size="small"
							>
								{{ itemUtility.totalUtility > itemUtility.maxImbuePoints ? 'Over cap!' : 'OK' }}
							</v-chip>
						</div>
						<div v-if="itemUtility.totalUtility > 100 && itemUtility.totalUtility < 1000000" class="text-caption mt-1">
							⚠️ Utility > 100 indicates ToA bonuses or excessive bonuses
						</div>
						<div v-if="itemUtility.totalUtility >= 1000000" class="text-caption mt-1">
							🚫 Utility ≥ 1,000,000 indicates forbidden/special bonuses
						</div>
					</v-alert>

					<v-table class="w-100">
						<thead>
							<tr>
								<th>Category</th>
								<th>Value</th>
								<th>Property</th>
								<th class="text-right">Utility</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="bonus in bonuses">
								<td>{{ bonus.category }}</td>
								<td>
									<v-text-field v-model.number="bonus.value" density="compact" hide-details type="number" />
								</td>
								<td>
									<v-select
										v-model="bonus.property"
										:items="DaocProperty"
										label="Property"
										density="compact"
										hide-details
									/>
								</td>
								<td class="text-right text-mono">
									<v-chip
										:color="bonus.utility >= 1000000 ? 'error' : bonus.utility > 50 ? 'warning' : 'default'"
										size="small"
									>
										{{ bonus.utility >= 1000000 ? '⚠️ Forbidden' : bonus.utility }}
									</v-chip>
								</td>
							</tr>
							<tr v-if="bonuses.length < _bonusKeys.length">
								<td colspan="4" class="text-center">
									<v-btn
										@click="bonuses.push({ property: 0, category: '-', value: 0, utility: 0 })"
										icon="mdi-plus"
										density="compact"
									/>
								</td>
							</tr>
						</tbody>
					</v-table>
				</GroupBox>

				<GroupBox title="Charges & Procs">
					<v-row>
						<v-col cols="2">
							<v-text-field v-model.number="item.SpellID" label="Use 1 - Spell ID" density="compact" />
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.Charges"
								label="Use 1 - Charges"
								density="compact"
								:rules="[() => (item && item.Charges >= 0 && item.Charges <= item.MaxCharges) || 'Invalid Charges']"
							/>
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.MaxCharges"
								label="Use 1 - Max charges"
								density="compact"
								:rules="[() => (item && item.MaxCharges >= 0 && item.MaxCharges <= 3000) || 'Invalid MaxCharges']"
							/>
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.CanUseEvery"
								label="Use timer (seconds)"
								density="compact"
								:rules="[
									() => (item && item.CanUseEvery >= 0 && item.CanUseEvery <= 24 * 3600) || 'Invalid CanUseEvery',
								]"
							/>
						</v-col>

						<v-col cols="2">
							<v-text-field v-model.number="item.ProcSpellID" label="Proc 1 - Spell ID" density="compact" />
						</v-col>
					</v-row>

					<v-row>
						<v-col cols="2">
							<v-text-field v-model.number="item.SpellID1" label="Use 2 - Spell ID" density="compact" />
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.Charges1"
								label="Use 2 - Charges"
								density="compact"
								:rules="[() => (item && item.Charges1 >= 0 && item.Charges1 <= item.MaxCharges1) || 'Invalid Charges1']"
							/>
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.MaxCharges1"
								label="Use 2 - Max charges"
								density="compact"
								:rules="[() => (item && item.MaxCharges1 >= 0 && item.MaxCharges1 <= 3000) || 'Invalid MaxCharges1']"
							/>
						</v-col>

						<v-col cols="2">
							<v-text-field
								v-model.number="item.ProcChance"
								label="Proc chances"
								density="compact"
								:rules="[() => (item && item.ProcChance >= 0 && item.ProcChance <= 100) || 'Invalid ProcChance']"
							/>
						</v-col>
						<v-col cols="2">
							<v-text-field v-model.number="item.ProcSpellID1" label="Proc 2 - Spell ID" density="compact" />
						</v-col>
					</v-row>

					<v-row>
						<v-col cols="2">
							<v-text-field v-model.number="item.PoisonSpellID" label="Poison - Spell ID" density="compact" />
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.PoisonCharges"
								label="Poison - Charges"
								density="compact"
								:rules="[
									() =>
										(item && item.PoisonCharges >= 0 && item.PoisonCharges <= item.PoisonMaxCharges) ||
										'Invalid PoisonCharges',
								]"
							/>
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model.number="item.PoisonMaxCharges"
								label="Poison - Max charges"
								density="compact"
								:rules="[
									() =>
										(item && item.PoisonMaxCharges >= 0 && item.PoisonMaxCharges <= 3000) || 'Invalid PoisonMaxCharges',
								]"
							/>
						</v-col>
					</v-row>
				</GroupBox>

				<GroupBox title="Debug">
					<details>
						<summary>Item</summary>
						<pre>{{ item }}</pre>
					</details>
				</GroupBox>
			</template>
		</v-card-text>
	</v-sheet>
</template>
