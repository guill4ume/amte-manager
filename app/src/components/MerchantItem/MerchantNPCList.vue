<script setup lang="ts">
import { DataTableHeader, SortItem } from "@/vuetify.types";
import { onMounted, ref, watch } from "vue";
import { DB } from "@/main";
import { sql } from "@/utils";
import DaocMap from "@/components/DaocMap.vue";

interface MerchantItem {
	MerchantItem_ID: string;
	ItemListID: string;
	ItemTemplateID: string;
	PageNumber: string;
	SlotPosition: string;
	template: any;
}

/** [page, slot] */
type Slot = [number, number];

const props = defineProps<{
	itemListId: string;
}>();

const headers: DataTableHeader[] = [
	{ key: "Name", title: "Name", align: "start", sortable: true },
	{ key: "Guild", title: "Guild", align: "start", sortable: true },
	{ key: "ClassType", title: "Type", align: "start", sortable: true },
	{ key: "Region", title: "Region", align: "end", sortable: true },
	{ key: "actions", title: "", sortable: false },
];
const merchants = ref<any[]>([]);
const merchantTotal = ref(0);
const search = ref("");
const options = ref({
	groupBy: [],
	groupDesc: [],
	itemsPerPage: 25,
	multiSort: true,
	mustSort: false,
	page: 1,
	sortBy: [{ key: "Name", order: "asc" }],
});
const itemsPerPage = ref(25);
const page = ref(1);
const sortBy = ref<SortItem[]>([{ key: "Name", order: "asc" }]);
const loading = ref(true);

const showMap = ref(false);
const selectedNpc = ref<any>(undefined);

async function refresh() {
	loading.value = true;
	const [mobs, total] = await DB.select({
		table: "mob",
		fields: "*",
		where: sql`ItemsListTemplateID = ${props.itemListId}`,
		orderby: "Name",
		limit: 10000,
	});
	merchants.value = mobs;
	merchantTotal.value = total;
	loading.value = false;
}

onMounted(refresh);
watch(() => props.itemListId, refresh);
</script>

<template>
	<v-progress-linear :active="loading" indeterminate/>
	<v-data-table-server
		fixed-header
		height="calc(100vh - 190px)"
		:headers="headers"
		:items="merchants"
		:items-length="merchantTotal"
		item-value="Mob_ID"
		v-model:options="options"
		v-model:page="page"
		v-model:items-per-page="itemsPerPage"
		v-model:sort-by="sortBy"
		density="compact"
		multi-sort
	>
		<template v-slot:item.actions="{ item }">
			<v-btn @click="selectedNpc = item; showMap = true;" density="compact" icon="mdi-map-marker"/>
		</template>
	</v-data-table-server>

	<v-dialog v-model="showMap">
		<v-card>
			<v-card-text>
				<DaocMap v-if="showMap && selectedNpc" :map="selectedNpc.Region" :mob-id="selectedNpc.Mob_ID"/>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>
