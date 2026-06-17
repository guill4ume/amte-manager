<script lang="ts" setup>
import { DB } from '@/main';
import { DataTableHeader } from '@/vuetify.types';
import { onMounted, ref } from 'vue';

const headers: DataTableHeader[] = [
	{ key: "ItemListID", title: "Item list ID", align: "start", sortable: true },
	{ key: "count", title: "Nb items", align: "end", sortable: true },
	{ key: "actions", title: "", sortable: false },
];
const lists = ref<any[]>([]);
const search = ref("");
const loading = ref(true);

onMounted(async () => {
	const [_lists] = await DB.select({
		table: "merchantitem",
		fields: "ItemListID, sum(1) as count",
		groupby: "ItemListID",
		orderby: "ItemListID",
		limit: 10000
	});
	lists.value = _lists;
	loading.value = false;
});
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="Merchant item lists">
			<v-text-field v-model="search" prepend-inner-icon="mdi-magnify" label="Search" variant="underlined" hide-details />
		</v-toolbar>

		<v-progress-linear :active="loading" indeterminate />
		<v-data-table
			fixed-header
			height="calc(100vh - 190px)"
			:headers="headers"
			:items="lists"
			:items-per-page="-1"
			:search="search"
			multi-sort
			density="compact"
			hide-default-footer>
			<template v-slot:item.actions="{ item }">
				<v-btn density="compact" :to="{ name: `merchantitem`, params: { id: item.ItemListID || '-' } }" icon="mdi-pencil" />
			</template>
		</v-data-table>
	</v-sheet>
</template>
