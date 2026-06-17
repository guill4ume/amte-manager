<script setup lang="ts">
import { computed } from "vue";
import GroupBox from "@/components/Utils/GroupBox.vue";

const props = defineProps<{
	player: any;
	equipmentBonuses: Record<number, number>;
}>();

const STAT_PROPERTIES = [
	{ id: 1, name: "Strength", dbField: "Strength" },
	{ id: 2, name: "Dexterity", dbField: "Dexterity" },
	{ id: 3, name: "Constitution", dbField: "Constitution" },
	{ id: 4, name: "Quickness", dbField: "Quickness" },
	{ id: 5, name: "Intelligence", dbField: "Intelligence" },
	{ id: 6, name: "Piety", dbField: "Piety" },
	{ id: 7, name: "Empathy", dbField: "Empathy" },
	{ id: 8, name: "Charisma", dbField: "Charisma" },
];

const RESIST_PROPERTIES = [
	{ id: 11, name: "Body" },
	{ id: 12, name: "Cold" },
	{ id: 13, name: "Crush" },
	{ id: 14, name: "Energy" },
	{ id: 15, name: "Heat" },
	{ id: 16, name: "Matter" },
	{ id: 17, name: "Slash" },
	{ id: 18, name: "Spirit" },
	{ id: 19, name: "Thrust" },
];

function getBonus(propertyId: number): number {
	return props.equipmentBonuses[propertyId] || 0;
}
</script>

<template>
	<GroupBox title="Character Stats">
		<v-row>
			<v-col cols="12" md="6">
				<v-table density="compact">
					<thead>
						<tr>
							<th>Stat</th>
							<th class="text-right">Base</th>
							<th class="text-right">Bonus</th>
							<th class="text-right">Total</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="stat in STAT_PROPERTIES" :key="stat.id">
							<td>{{ stat.name }}</td>
							<td class="text-right">{{ player[stat.dbField] }}</td>
							<td class="text-right text-success">+{{ getBonus(stat.id) }}</td>
							<td class="text-right font-weight-bold">{{ player[stat.dbField] + getBonus(stat.id) }}</td>
						</tr>
					</tbody>
				</v-table>
			</v-col>
			<v-col cols="12" md="6">
				<v-table density="compact">
					<thead>
						<tr>
							<th>Resist</th>
							<th class="text-right">Bonus</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="resist in RESIST_PROPERTIES" :key="resist.id">
							<td>{{ resist.name }}</td>
							<td class="text-right text-success">+{{ getBonus(resist.id) }}%</td>
						</tr>
					</tbody>
				</v-table>
			</v-col>
		</v-row>
		<v-divider class="my-3" />
		<v-row class="info-grid">
			<v-col cols="6" md="3">
				<div class="info-row">
					<span class="info-label">Health:</span>
					<span class="info-value text-error">{{ player.Health }}</span>
				</div>
			</v-col>
			<v-col cols="6" md="3">
				<div class="info-row">
					<span class="info-label">Mana:</span>
					<span class="info-value text-info">{{ player.Mana }}</span>
				</div>
			</v-col>
			<v-col cols="6" md="3">
				<div class="info-row">
					<span class="info-label">Endurance:</span>
					<span class="info-value text-warning">{{ player.Endurance }}</span>
				</div>
			</v-col>
			<v-col cols="6" md="3">
				<div class="info-row">
					<span class="info-label">Max Endurance:</span>
					<span class="info-value">{{ player.MaxEndurance }}</span>
				</div>
			</v-col>
		</v-row>
	</GroupBox>
</template>

<style scoped>
.info-grid {
	margin: 0 -8px;
}

.info-row {
	display: flex;
	padding: 4px 0;
	gap: 8px;
}

.info-label {
	color: #888;
	min-width: 120px;
	font-weight: 500;
}

.info-value {
	font-weight: 400;
}
</style>
