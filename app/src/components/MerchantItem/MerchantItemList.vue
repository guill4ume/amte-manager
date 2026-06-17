<script setup lang="ts">
import { DaocItemIcon } from "@/components/DaocIcon";
import ItemFind from "@/components/ItemFind.vue";
import { DataTableHeader } from "@/vuetify.types";
import { onMounted, ref, watch } from "vue";
import { DB } from "@/main";
import { sql } from "@/utils";

interface MerchantItem {
	MerchantItem_ID: string;
	ItemListID: string;
	ItemTemplateID: string;
	PageNumber: number;
	SlotPosition: number;
	template: any;
}

/** [page, slot] */
type Slot = [number, number];

const props = defineProps<{
	itemListId: string;
}>();

const headers: DataTableHeader[] = [
	{ key: "ItemTemplateID", title: "Item ID", align: "start", sortable: true },
	{ key: "template.name", title: "Name", align: "start", sortable: true },
	{ key: "template.price", title: "Price", align: "end", sortable: true },
	{ key: "PageNumber", title: "Page", align: "end", sortable: true },
	{ key: "SlotPosition", title: "Slot", align: "end", sortable: true },
	{ key: "actions", title: "", align: "end", sortable: false },
];
const merchantItems = ref<MerchantItem[]>([]);
const loading = ref(true);

async function refresh() {
	loading.value = true;
	const [lists] = await DB.select({
		table: "merchantitem",
		fields: "*",
		where: sql`ItemListID = ${props.itemListId}`,
		orderby: "PageNumber,SlotPosition",
		limit: 10000,
	});
	const [items] = await DB.select({
		table: "itemtemplate",
		fields: "id_nb, name, price, model, level",
		where: `id_nb IN (${lists.map((i) => sql`${i.ItemTemplateID}`).join(",")})`,
		limit: 10000,
	});
	for (const mi of lists) {
		mi.template = items.find((i) => i.id_nb.toLocaleLowerCase() === mi.ItemTemplateID.toLocaleLowerCase()) ?? {
			id_nb: mi.ItemsListTemplateID,
			name: "?? [missing item]",
			price: -1,
		};
		mi.template.price = parseInt(mi.template.price);
	}
	merchantItems.value = lists;
	loading.value = false;
}

async function updateSlots(...slots: Slot[]) {
	// TODO
	await refresh();
	/*
	const pages = Array.from(new Set(slots.map(([p, _]) => p))).map(p => sql`${p}`).join(",");
	const positions = Array.from(new Set(slots.map(([_, p]) => p))).map(p => sql`${p}`).join(",");
	loading.value = true;
	const [items] = await DB.select({
		table: "merchantitem",
		fields: "*",
		where: sql`itemListId = ${props.itemListId} AND PageNumber IN (${raw(pages)}) AND SlotPosition IN (${raw(positions)})`,
	});

	loading.value = false;
	*/
}

function formatPrice(price: number) {
	const arr = [
		((price % 100) + "c").padStart(3, "0"),
		(price < 100 ? "0" : (((price / 100) | 0) % 100) + "s").padStart(3, "0"),
		price < 10000 ? "0" : ((price / 10000) | 0).toLocaleString() + "g",
	].filter((p) => !!p);
	return arr.reverse().join(" ");
}

async function swapSlots([pageA, slotA]: [number, number], [pageB, slotB]: [number, number]) {
	const itemA = merchantItems.value.find((i) => i.PageNumber === pageA && i.SlotPosition === slotA);
	const itemB = merchantItems.value.find((i) => i.PageNumber === pageB && i.SlotPosition === slotB);
	if (itemA) {
		await DB.update(
			"merchantitem",
			{ PageNumber: pageB, SlotPosition: slotB },
			sql`MerchantItem_ID = ${itemA.MerchantItem_ID}`
		);
	}
	if (itemB) {
		await DB.update(
			"merchantitem",
			{ PageNumber: pageA, SlotPosition: slotA },
			sql`MerchantItem_ID = ${itemB.MerchantItem_ID}`
		);
	}
	await updateSlots([pageA, slotA], [pageB, slotB]);
}

async function up(item: MerchantItem) {
	const currentPage = item.PageNumber;
	const currentSlot = item.SlotPosition;
	let newPage = currentPage;
	let newSlot = currentSlot - 1;
	if (newSlot < 0) {
		if (newPage <= 0) return;
		newPage -= 1;
		newSlot = 29;
	}
	await swapSlots([currentPage, currentSlot], [newPage, newSlot]);
}

async function down(item: MerchantItem) {
	const currentPage = item.PageNumber;
	const currentSlot = item.SlotPosition;
	let newPage = currentPage;
	let newSlot = currentSlot + 1;
	if (newSlot >= 30) {
		if (newPage >= 5) return;
		newPage += 1;
		newSlot = 0;
	}
	await swapSlots([currentPage, currentSlot], [newPage, newSlot]);
}

async function remove(item: MerchantItem) {
	await DB.delete("merchantitem", sql`MerchantItem_ID = ${item.MerchantItem_ID}`);
	await updateSlots([item.PageNumber, item.SlotPosition]);
}

async function addItem(slot: Slot, templateId: string, item: any) {
	const u = Date.now().toString(16) + Math.random().toString(16) + "0".repeat(16);
	const guid = [u.substring(0, 8), u.substring(8, 4), "4000-8" + u.substring(13, 3), u.substring(16, 12)].join("-");
	await DB.insert("merchantitem", {
		MerchantItem_ID: guid,
		ItemListID: props.itemListId,
		ItemTemplateID: templateId,
		PageNumber: slot[0],
		SlotPosition: slot[1],
	});
	await updateSlots(slot);
}

onMounted(refresh);
watch(() => props.itemListId, refresh);
</script>

<template>
	<v-progress-linear :active="loading" indeterminate />
	<template v-for="page in [0, 1, 2, 3, 4, 5]" :key="page">
		<h4 class="text-center">Page {{ page }}</h4>
		<v-table density="compact" class="w-100">
			<thead>
				<tr>
					<th style="width: 64px">Slot</th>
					<th style="width: 64px" />
					<th>Item ID</th>
					<th>Name</th>
					<th style="width: 64px">Lev.</th>
					<th style="width: 170px">Price</th>
					<th style="width: calc(16px * 2 + 28px * 4)" />
				</tr>
			</thead>
			<tbody>
				<template v-for="slotPosition in new Array(30).fill(0).map((_, i) => i)">
					<template
						v-for="item in merchantItems.filter((i) => i.PageNumber === page && i.SlotPosition === slotPosition)"
						:key="page * 100 + slotPosition + item.template.id_nb"
					>
						<tr>
							<td>{{ slotPosition }}</td>
							<td style="position: relative">
								<DaocItemIcon :id="parseInt(item.template.model)" :size="0.75" style="position: relative; top: 4px" />
							</td>
							<td>{{ item.template.id_nb }}</td>
							<td>{{ item.template.name }}</td>
							<td class="text-mono text-right">{{ item.template.level }}</td>
							<td class="text-mono text-right">
								{{ formatPrice(item.template.price) }}
							</td>
							<td>
								<v-btn
									color="default"
									:to="{ name: 'item', params: { id: item.ItemTemplateID } }"
									icon="mdi-eye"
									density="compact"
								/>
								<v-btn color="default" @click="up(item)" icon="mdi-chevron-up" density="compact" />
								<v-btn color="default" @click="down(item)" icon="mdi-chevron-down" density="compact" />
								<v-btn color="default" @click="remove(item)" icon="mdi-close" density="compact" />
							</td>
						</tr>
					</template>
					<tr v-if="merchantItems.every((i) => i.PageNumber !== page || i.SlotPosition !== slotPosition)">
						<td>{{ slotPosition }}</td>
						<td />
						<td colspan="4" class="text-center">-- empty slot --</td>
						<td>
							<ItemFind small @select="(id_nb, item) => addItem([page, slotPosition], id_nb, item)">
								<template v-slot:activator="{ props }">
									<v-btn v-bind="props" color="default" icon="mdi-plus" density="compact" />
								</template>
							</ItemFind>
						</td>
					</tr>
				</template>
			</tbody>
		</v-table>
	</template>
</template>

<style scoped></style>
