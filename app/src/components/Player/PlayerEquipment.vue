<script setup lang="ts">
import GroupBox from "@/components/Utils/GroupBox.vue";
import { DaocItemIcon } from "@/components/DaocIcon";
import { DaocProperty, DaocItemSlots } from "@/models/DaocValues";

const props = defineProps<{
	equipment: any[];
}>();

const EQUIPMENT_SLOTS: Record<number, string> = {
	21: "Helm",
	22: "Hands",
	23: "Feet",
	25: "Torso",
	26: "Cloak",
	27: "Legs",
	28: "Arms",
	29: "Necklace",
	32: "Waist",
	33: "Left Wrist",
	34: "Right Wrist",
	35: "Left Ring",
	36: "Right Ring",
	10: "Right Hand",
	11: "Left Hand",
	12: "Two Hand",
	13: "Ranged",
	37: "Mythical",
};

function getSlotName(slot: number): string {
	return EQUIPMENT_SLOTS[slot] || DaocItemSlots.find((s) => s.id === slot)?.name || `Slot ${slot}`;
}

function formatPrice(price: number): string {
	if (!price) return "-";
	const copper = price % 100;
	const silver = Math.floor(price / 100) % 100;
	const gold = Math.floor(price / 10000) % 100;
	const platinum = Math.floor(price / 1000000) % 100;
	const mithril = Math.floor(price / 100000000);
	const parts: string[] = [];
	if (mithril) parts.push(`${mithril}m`);
	if (platinum) parts.push(`${platinum}p`);
	if (gold) parts.push(`${gold}g`);
	if (silver) parts.push(`${silver}s`);
	if (copper) parts.push(`${copper}c`);
	return parts.join(" ") || "0c";
}

function getPropertyName(id: number): string {
	return DaocProperty.find((p) => p.value === id)?.title || `Property ${id}`;
}

function getItemBonuses(item: any): { type: number; value: number }[] {
	if (!item.template) return [];
	const bonuses: { type: number; value: number }[] = [];
	for (let i = 1; i <= 10; i++) {
		const type = item.template[`Bonus${i}Type`];
		const value = item.template[`Bonus${i}`];
		if (type && value) bonuses.push({ type, value });
	}
	if (item.template.ExtraBonusType && item.template.ExtraBonus) {
		bonuses.push({ type: item.template.ExtraBonusType, value: item.template.ExtraBonus });
	}
	return bonuses;
}
</script>

<template>
	<GroupBox title="Equipment">
		<v-table density="compact">
			<thead>
				<tr>
					<th>Slot</th>
					<th></th>
					<th>Item</th>
					<th>Price</th>
					<th>Bonuses</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in equipment" :key="item.SlotPosition">
					<td class="text-grey">{{ getSlotName(item.SlotPosition) }}</td>
					<td>
						<DaocItemIcon v-if="item.Model" :id="item.Model" :size="0.75" />
					</td>
					<td>
						<router-link
							v-if="item.ITemplate_Id"
							:to="{ name: 'item', params: { id: item.ITemplate_Id } }"
						>
							{{ item.template?.Name || item.ITemplate_Id }}
						</router-link>
						<span v-else-if="item.UTemplate_Id">{{ item.template?.Name || item.UTemplate_Id }} <v-chip size="x-small">unique</v-chip></span>
						<span v-else class="text-grey-darken-1">Empty</span>
					</td>
					<td class="text-warning">{{ formatPrice(item.template?.Price) }}</td>
					<td>
						<template v-if="item.template">
							<v-chip
								v-for="bonus in getItemBonuses(item)"
								:key="bonus.type"
								size="x-small"
								class="mr-1"
							>
								+{{ bonus.value }} {{ getPropertyName(bonus.type) }}
							</v-chip>
						</template>
					</td>
				</tr>
			</tbody>
		</v-table>
	</GroupBox>
</template>
