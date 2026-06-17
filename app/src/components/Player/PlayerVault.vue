<script setup lang="ts">
import GroupBox from "@/components/Utils/GroupBox.vue";
import { DaocItemIcon } from "@/components/DaocIcon";
import { DaocProperty } from "@/models/DaocValues";

const props = defineProps<{
	vault: any[];
}>();

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
	<GroupBox title="Vault">
		<v-table density="compact" v-if="vault.length">
			<thead>
				<tr>
					<th>Slot</th>
					<th></th>
					<th>Item</th>
					<th>Count</th>
					<th>Price</th>
					<th>Bonuses</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in vault" :key="item.SlotPosition">
					<td class="text-grey">{{ item.SlotPosition }}</td>
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
					</td>
					<td>{{ item.Count }}</td>
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
		<v-alert v-else type="info" density="compact">Vault is empty</v-alert>
	</GroupBox>
</template>
