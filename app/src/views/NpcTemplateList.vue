<script lang="ts" setup>
import { debounce } from "@/debounce";
import { DB } from "@/main";
import { DataTableHeader, SortItem } from "@/vuetify.types";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const headers: DataTableHeader[] = [
	{ key: "TemplateId", title: "TemplateId", align: "end", sortable: true },
	{ key: "Name", title: "Name", align: "start", sortable: true },
	{ key: "GuildName", title: "Guild", align: "start", sortable: true },
	{ key: "Level", title: "Level", align: "start", sortable: true },
	{ key: "actions", title: "", sortable: false },
];
const templates = ref<any[]>([]);
const templateTotal = ref(0);
const search = ref(route.query.search ?? "");
const options = ref({
	groupBy: [],
	groupDesc: [],
	itemsPerPage: 25,
	multiSort: true,
	mustSort: false,
	page: 1,
	sortBy: [{ key: "TemplateId", order: "asc" }],
});
const itemsPerPage = ref(25);
const page = ref(1);
const sortBy = ref<SortItem[]>([
	{ key: "TemplateId", order: "asc" },
	{ key: "Name", order: "asc" },
]);

const loading = ref(false);

const load = debounce(async () => {
	loading.value = true;
	try {
		let where = "1";
		if (typeof search.value == "string") {
			const likeValue = search.value.replace(/'/g, "''");
			where = ["Name", "GuildName", "TemplateId"].map((field) => `${field} like '%${likeValue}%'`).join(" OR ");
		}
		const orderby = options.value.sortBy.map(({ key, order }: { key: string; order: string }) =>
			order === "desc" ? `${key} DESC` : key
		);
		if (orderby.length === 0) orderby.push("TemplateId", "Name");
		const offset = options.value.itemsPerPage * (options.value.page - 1);
		const [_templates, total] = await DB.select({
			table: "npctemplate",
			fields: "NpcTemplate_ID, TemplateId, Name, GuildName, Level",
			where,
			orderby,
			offset,
			limit: options.value.itemsPerPage,
		});
		templates.value = _templates;
		templateTotal.value = total;
		loading.value = false;
	} catch (err) {
		alert(`Une erreur est survenue: ${err}`);
	}
});

onMounted(load);
watch(options, load);
watch(search, load);
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="NPC templates">
			<v-text-field
				v-model="search"
				prepend-inner-icon="mdi-magnify"
				label="Search"
				variant="underlined"
				hide-details
			/>
		</v-toolbar>

		<v-progress-linear :active="loading" indeterminate />
		<v-data-table-server
			fixed-header
			height="calc(100vh - 190px)"
			:headers="headers"
			:items="templates"
			:items-length="templateTotal"
			item-value="NpcTemplate_ID"
			v-model:options="options"
			v-model:page="page"
			v-model:items-per-page="itemsPerPage"
			v-model:sort-by="sortBy"
			density="compact"
			multi-sort
		>
			<template v-slot:item.actions="{ item }">
				<v-btn
					:to="{ name: 'npctemplate', params: { id: item.NpcTemplate_ID } }"
					density="compact"
					icon="mdi-pencil"
				/>
			</template>
		</v-data-table-server>
	</v-sheet>
</template>
