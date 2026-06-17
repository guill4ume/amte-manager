<script lang="ts" setup>
import { debounce } from "@/debounce";
import { DB } from "@/main";
import { DataTableHeader, SortItem } from "@/vuetify.types";
import { onMounted, ref, watch } from "vue";

const headers: DataTableHeader[] = [
	{ key: "MobName", title: "Mob Name", align: "start", sortable: true },
	{ key: "LootTemplateName", title: "Loot Template", align: "start", sortable: true },
	{ key: "DropCount", title: "Drop Count", align: "end", sortable: true },
	{ key: "ItemCount", title: "Items in Template", align: "end", sortable: false },
	{ key: "actions", title: "", sortable: false },
];

const mobLoots = ref<any[]>([]);
const totalCount = ref(0);
const search = ref("");
const searchType = ref<"mob" | "template">("mob");
const options = ref({
	groupBy: [],
	groupDesc: [],
	itemsPerPage: 25,
	multiSort: true,
	mustSort: false,
	page: 1,
	sortBy: [{ key: "MobName", order: "asc" }],
});
const itemsPerPage = ref(25);
const page = ref(1);
const sortBy = ref<SortItem[]>([{ key: "MobName", order: "asc" }]);
const loading = ref(false);

// Cache for item counts per template
const templateItemCounts = ref<Record<string, number>>({});

const load = debounce(async () => {
	loading.value = true;
	try {
		let where = "1";
		if (search.value) {
			const likeValue = search.value.replace(/'/g, "''");
			if (searchType.value === "mob") {
				where = `mlt.MobName LIKE '%${likeValue}%'`;
			} else {
				where = `mlt.LootTemplateName LIKE '%${likeValue}%'`;
			}
		}

		const orderby = options.value.sortBy.map(({ key, order }: { key: string; order: string }) => {
			return order === "desc" ? `mlt.${key} DESC` : `mlt.${key}`;
		});
		if (orderby.length === 0) orderby.push("mlt.MobName");

		const offset = options.value.itemsPerPage * (options.value.page - 1);

		// Get mob loot links
		const [result] = await DB.selectRaw(`
			mlt.MobXLootTemplate_ID,
			mlt.MobName,
			mlt.LootTemplateName,
			mlt.DropCount
			FROM mobxloottemplate mlt
			WHERE ${where}
			ORDER BY ${orderby.join(", ")}
			LIMIT ${offset}, ${options.value.itemsPerPage}
		`);

		// Get total count
		const [countResult] = await DB.selectRaw(`
			COUNT(*) as total
			FROM mobxloottemplate mlt
			WHERE ${where}
		`);

		mobLoots.value = result;
		totalCount.value = countResult[0]?.total || 0;

		// Load item counts for templates
		await loadItemCounts();
	} catch (err) {
		console.error(err);
		alert(`Une erreur est survenue: ${err}`);
	} finally {
		loading.value = false;
	}
});

async function loadItemCounts() {
	const templateNames = [...new Set(mobLoots.value.map((m) => m.LootTemplateName))].filter(
		(name) => !templateItemCounts.value[name]
	);

	if (templateNames.length === 0) return;

	const joinNames = templateNames.map((n) => `'${n.replace(/'/g, "''")}'`).join(",");

	const [result] = await DB.selectRaw(`
		TemplateName, COUNT(*) as ItemCount
		FROM loottemplate
		WHERE TemplateName IN (${joinNames})
		GROUP BY TemplateName
	`);

	for (const row of result) {
		templateItemCounts.value[row.TemplateName] = row.ItemCount;
	}
}

function getItemCount(templateName: string): number {
	return templateItemCounts.value[templateName] || 0;
}

onMounted(load);
watch(options, load);
watch(search, load);
watch(searchType, load);
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="Mob Loot Assignments">
			<v-text-field
				v-model="search"
				prepend-inner-icon="mdi-magnify"
				label="Search by mob name or template name..."
				variant="underlined"
				hide-details
				style="max-width: 300px"
			/>
		</v-toolbar>

		<v-progress-linear :active="loading" indeterminate />
		<v-data-table-server
			fixed-header
			height="calc(100vh - 190px)"
			:headers="headers"
			:items="mobLoots"
			:items-length="totalCount"
			item-value="MobXLootTemplate_ID"
			v-model:options="options"
			v-model:page="page"
			v-model:items-per-page="itemsPerPage"
			v-model:sort-by="sortBy"
			density="compact"
			multi-sort
		>
			<template v-slot:item.LootTemplateName="{ item }">
				<router-link
					:to="{ name: 'lootEdit', params: { id: item.LootTemplateName } }"
					class="text-decoration-none"
				>
					{{ item.LootTemplateName }}
				</router-link>
			</template>

			<template v-slot:item.DropCount="{ item }">
				<v-chip size="small" color="primary">{{ item.DropCount }}</v-chip>
			</template>

			<template v-slot:item.ItemCount="{ item }">
				<v-chip size="small" :color="getItemCount(item.LootTemplateName) > 0 ? 'success' : 'grey'">
					{{ getItemCount(item.LootTemplateName) }} items
				</v-chip>
			</template>

			<template v-slot:item.actions="{ item }">
				<v-btn
					:to="{ name: 'lootEdit', params: { id: item.LootTemplateName } }"
					density="compact"
					icon="mdi-pencil"
					variant="text"
					title="Edit Loot Template"
				/>
			</template>
		</v-data-table-server>
	</v-sheet>
</template>
