<script lang="ts" setup>
import { debounce } from '@/debounce';
import { DB } from '@/main';
import { DataTableHeader, SortItem } from '@/vuetify.types';
import { ref, watch } from 'vue';
import { DaocItemIcon } from "./DaocIcon";

const props = defineProps({
	small: {
		type: Boolean,
		default: () => false,
	},
});
const emit = defineEmits<{
	(event: "select", id_nb: string, item: any): void;
}>();

const open = ref(false);

const headers: DataTableHeader[] = [
  { key: "icon", title: "", sortable: false },
	{ key: "Id_nb", title: "ID", align: "start", sortable: true },
	{ key: "Name", title: "Name", align: "start", sortable: true },
	{ key: "Level", title: "Level", align: "end", sortable: true },
	{ key: "Model", title: "Model", align: "start", sortable: true },
	{ key: "Price", title: "Price", align: "end", sortable: true },
	{ key: "actions", title: "", sortable: false },
];
const items = ref<any[]>([]);
const itemTotal = ref(0);
const search = ref("");
const options = ref({
	groupBy: [],
	groupDesc: [],
	itemsPerPage: 15,
	multiSort: true,
	mustSort: false,
	page: 1,
	sortBy: [{ key: "Id_nb", order: "asc" }],
});
const itemsPerPage = ref(15);
const page = ref(1);
const sortBy = ref<SortItem[]>([{ key: "Id_nb", order: "asc" }]);

const loading = ref(false);

const load = debounce(async () => {
	if (!open.value)
		return;

	loading.value = true;
	try {
		let where = "1";
		if (search.value) {
			const likeValue = search.value.replace(/'/g, "''");
			where = ["Id_nb", "Name", "Level"]
				.map(field => `${field} like '%${likeValue}%'`)
				.join(" OR ")
			;
		}
		const orderby = options.value.sortBy.map(({ key, order }: {
			key: string;
			order: string;
		}) => order === "desc" ? `${key} DESC` : key);
		if (orderby.length === 0)
			orderby.push("Id_nb");
		const offset = options.value.itemsPerPage * (options.value.page - 1);
		const [_items, total] = await DB.select({
			table: "itemtemplate",
			fields: "Id_nb, Name, Level, Model, Price",
			where,
			orderby,
			offset,
			limit: options.value.itemsPerPage,
		});
		items.value = _items;
		itemTotal.value = total;
		loading.value = false;
	}
	catch (err) {
		alert(`Error: ${err}`);
	}
});
watch(open, load);
watch(options, load);
watch(search, load);

function select(item: any) {
	emit("select", item.Id_nb, item);
	open.value = false;
}
</script>

<template>
	<v-dialog v-model="open" width="1000">
		<template v-slot:activator="{ props }">
			<slot name="activator" :props="props">
				<v-btn v-bind="props" icon="mdi-file-find" density="compact"/>
			</slot>
		</template>

		<v-card v-if="open">
			<v-card-title>
				Search an item template
				<v-spacer/>
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Search"
					single-line
					hide-details/>
			</v-card-title>

			<v-card-text>
				<v-data-table-server
					:headers="headers"
					:items="items"
					:items-length="itemTotal"
					item-key="Id_nb"
					v-model:options="options"
					v-model:items-per-page="itemsPerPage"
					v-model:page="page"
					v-model:sort-by="sortBy"
					:loading="loading"
					density="compact"
					multi-sort>
					<template v-slot:item.icon="{ item }">
						<DaocItemIcon :id="item.Model" />
					</template>
					<template v-slot:item.actions="{ item }">
						<v-btn @click="select(item)" :loading="loading" density="compact" icon="mdi-check" title="Select" />
					</template>
				</v-data-table-server>
			</v-card-text>

			<v-card-actions>
				<v-spacer/>
				<v-btn variant="text" @click="open = false">Cancel</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
