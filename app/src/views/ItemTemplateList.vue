<script lang="ts" setup>
import { DB } from '@/main';
import { DataTableHeader, SortItem } from '@/vuetify.types';
import { onMounted, ref, watch } from 'vue';
import { debounce } from "@/debounce";
import { DaocItemIcon } from "@/components/DaocIcon";

const headers: DataTableHeader[] = [
  { key: "icon", title: "", sortable: false },
	{ key: "Id_nb", title: "Item ID", align: "start", sortable: true },
	{ key: "Name", title: "Name", align: "start", sortable: true },
	{ key: "Level", title: "Level", align: "end", sortable: true },
	{ key: "Price", title: "Price", align: "end", sortable: true },
	{ key: "actions", title: "", align: "end", sortable: false },
];
const items = ref<any[]>([]);
const itemTotal = ref(0);
const search = ref("");
const options = ref({
	groupBy: [],
	groupDesc: [],
	itemsPerPage: 25,
	multiSort: true,
	mustSort: false,
	page: 1,
	sortBy: [{ key: "Id_nb", order: "asc" }],
});
const itemsPerPage = ref(25);
const page = ref(1);
const sortBy = ref<SortItem[]>([{ key: "Id_nb", order: "asc" }]);

const loading = ref(true);

const load = debounce(async () => {
	loading.value = true;
	try {
		let where = "1";
		if (search.value) {
			const likeValue = search.value.replace(/'/g, "''");
			where = ["Id_nb", "Name"]
				.map(field => `${field} like '%${likeValue}%'`)
				.join(' OR ');
		}
		const orderby = options.value.sortBy.map(({ key, order }: {
			key: string;
			order: string;
		}) => order === "desc" ? `${key} DESC` : key);
		if (orderby.length === 0)
			orderby.push("Id_nb");
		const offset = options.value.itemsPerPage * (options.value.page - 1);
		const [_templates, total] = await DB.select({
			table: "itemtemplate",
			fields: "*",
			where,
			orderby,
			offset,
			limit: options.value.itemsPerPage,
		});
		items.value = _templates;
		itemTotal.value = total;
		loading.value = false;
	}
	catch (err) {
		alert(`Une erreur est survenue: ${err}`);
	}
});

onMounted(load);
watch(options, load);
watch(search, load);
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="Item list">
			<v-text-field v-model="search" prepend-inner-icon="mdi-magnify" label="Search" variant="underlined" hide-details/>
		</v-toolbar>

		<v-progress-linear :active="loading" indeterminate/>
		<v-data-table-server
			fixed-header
			height="calc(100vh - 190px)"
			:headers="headers"
			:items="items"
			:items-length="itemTotal"
			item-value="Id_nb"
			v-model:options="options"
			v-model:page="page"
			v-model:items-per-page="itemsPerPage"
			v-model:sort-by="sortBy"
			density="compact"
			multi-sort
		>
			<template v-slot:item.icon="{ item }">
				<DaocItemIcon :id="item.Model" :size=".75" style="position: relative; top: 4px" />
			</template>
			<template v-slot:item.actions="{ item }">
				<v-btn
					:to="{ name: 'item', params: { id: item.Id_nb } }"
					density="compact"
					icon="mdi-pencil"
				/>
			</template>
		</v-data-table-server>

	</v-sheet>
</template>
