<script lang="ts" setup>
import { debounce } from '@/debounce';
import { DB } from '@/main';
import { DataTableHeader, SortItem } from '@/vuetify.types';
import { ref, watch } from 'vue';

const props = defineProps<{
	small?: boolean;
	searchDefault?: string;
}>();
watch(() => props.searchDefault, () => search.value = props.searchDefault ?? search.value);

const emit = defineEmits<{
	(event: "select", name: string, region: number, npc: any): void;
}>();

const open = ref(false);
const headers: DataTableHeader[] = [
	{ key: "Region", title: "Region", align: "end", sortable: true },
	{ key: "Name", title: "Name", align: "start", sortable: true },
	{ key: "Guild", title: "Guild", align: "start", sortable: true },
	{ key: "Level", title: "Level", align: "end", sortable: true },
	{ key: "actions", title: "", sortable: false },
];
const npcs = ref<any[]>([]);
const npcTotal = ref(0);
const search = ref(props.searchDefault ?? "");
const options = ref({
	groupBy: [],
	groupDesc: [],
	itemsPerPage: 15,
	multiSort: true,
	mustSort: false,
	page: 1,
	sortBy: [{ key: "Region", order: "asc" }, { key: "Name", order: "asc" }],
});
const itemsPerPage = ref(15);
const page = ref(1);
const sortBy = ref<SortItem[]>([{ key: "Region", order: "asc" }, { key: "Name", order: "asc" }]);

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
		const orderby = options.value.sortBy.map(({ key, order }: { key: string; order: string; }) => order === "desc" ? `${key} DESC` : key);
		if (orderby.length === 0)
			orderby.push("Region", "Name");
		const offset = options.value.itemsPerPage * (options.value.page - 1);
		const [_npcs, total] = await DB.select({
			table: "mob",
			fields: "Mob_ID, Region, Name, Guild, Level, X, Y, Z",
			where,
			orderby: orderby.join(","),
			offset,
			limit: options.value.itemsPerPage,
		});
		npcs.value = _npcs;
		npcTotal.value = total;
		loading.value = false;
	} catch (err) {
		alert(`Error: ${err}`);
	}
});
watch(open, load);
watch(options, load);
watch(search, load);

function select(npc: any) {
	emit("select", npc.Name, parseInt(npc.Region), npc);
	open.value = false;
}
</script>

<template>
	<v-dialog v-model="open" width="800">
		<template v-slot:activator="{ props }">
			<v-btn v-bind="props" icon="mdi-account-search" density="compact">
			</v-btn>
		</template>

		<v-card v-if="open">
			<v-card-title>
				Search a NPC
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
					:items="npcs"
					:items-length="npcTotal"
					item-value="Mob_ID"
					v-model:options="options"
					v-model:items-per-page="itemsPerPage"
					v-model:items-page="page"
					v-model:sort-by="sortBy"
					:loading="loading"
					:search="search"
					density="compact"
					multi-sort>
					<template v-slot:item.actions="{ item }">
						<v-btn color="primary" @click="select(item)" :loading="loading" density="compact" icon="mdi-account-check" />
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
