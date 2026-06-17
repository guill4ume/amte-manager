<script lang="ts" setup>
import { debounce } from '@/debounce';
import { DB } from '@/main';
import { DataTableHeader, SortItem } from '@/vuetify.types';
import { ref, watch } from 'vue';

const props = defineProps<{
	title: string;
	small?: boolean;
	searchDefault?: string;
	table: string;
	tablePkey: string;
	headers: DataTableHeader[];
	defaultSort: SortItem[];
}>();
watch(() => props.searchDefault, () => search.value = props.searchDefault ?? search.value);

const emit = defineEmits<{
	(event: "select", row: any): void;
}>();

const open = ref(false);
const headers = ref<DataTableHeader[]>([
	...props.headers,
	{ key: "__actions", title: "" },
]);
const rows = ref<any[]>([]);
const rowTotal = ref(0);
const search = ref(props.searchDefault ?? "");
const options = ref({
	groupBy: [],
	groupDesc: [],
	itemsPerPage: 15,
	multiSort: true,
	mustSort: false,
	page: 1,
	sortBy: props.defaultSort,
});
const rowsPerPage = ref(15);
const page = ref(1);
const sortBy = ref<SortItem[]>(props.defaultSort);

const loading = ref(false);

const load = debounce(async () => {
	if (!open.value)
		return;

	loading.value = true;
	try {
		let where = "1";
		if (search.value) {
			const likeValue = search.value.replace(/'/g, "''");
			where = ["Name", "Guild", "Region"]
				.map(field => `${field} like '%${likeValue}%'`)
				.join(" OR ")
				;
		}
		const orderby = sortBy.value.map(({ key, order }) => order === "desc" ? `${key} DESC` : key);
		if (orderby.length === 0)
			orderby.push(...props.defaultSort.map(({ key, order }) => order === "desc" ? `${key} DESC` : key));
		const offset = options.value.itemsPerPage * (options.value.page - 1);
		const [_rows, total] = await DB.select({
			table: props.table,
			fields: props.headers.map(h => `\`${h.key}\``),
			where,
			orderby: orderby.join(","),
			offset,
			limit: options.value.itemsPerPage,
		});
		rows.value = _rows;
		rowTotal.value = total;
		loading.value = false;
	} catch (err) {
		alert(`Error: ${err}`);
	}
});
watch(open, load);
watch(options, load);
watch(search, load);

function select(row: any) {
	emit("select", row);
	open.value = false;
}
</script>

<template>
	<v-dialog v-model="open">
		<template v-slot:activator="{ props }">
			<v-btn v-bind="props" icon="mdi-database-search" density="compact">
			</v-btn>
		</template>

		<v-card v-if="open">
			<v-card-title>
				{{ title }}
				<v-spacer />
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Search"
					single-line
					hide-details />
			</v-card-title>

			<v-card-text>
				<v-data-table-server
					fixed-header
					:headers="headers"
					:items="rows"
					:items-length="rowTotal"
					:item-value="tablePkey"
					v-model:options="options"
					v-model:items-per-page="rowsPerPage"
					v-model:items-page="page"
					v-model:sort-by="sortBy"
					:loading="loading"
					:search="search"
					density="compact"
					multi-sort>
					<template v-slot:item.__actions="{ item }">
						<v-btn color="primary" @click="select(item)" :loading="loading" density="compact" icon="mdi-check" />
					</template>
				</v-data-table-server>
			</v-card-text>

			<v-card-actions>
				<v-spacer />
				<v-btn variant="text" @click="open = false">Cancel</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
