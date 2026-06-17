<script lang="ts" setup>
import { debounce } from '@/debounce';
import { DB } from '@/main';
import { DataTableHeader, SortItem } from '@/vuetify.types';
import { onMounted, ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import { DaocClasses } from '@/models/DaocClasses';

const router = useRouter();

const headers: DataTableHeader[] = [
	{ key: "StyleID", title: "ID", align: "end", sortable: true },
	{ key: "ID", title: "Game ID", align: "end", sortable: true },
	{ key: "Name", title: "Name", align: "start", sortable: true },
	{ key: "ClassName", title: "Class", align: "start", sortable: false },
	{ key: "SpecKeyName", title: "Spec", align: "start", sortable: true },
	{ key: "SpecLevelRequirement", title: "Level", align: "end", sortable: true },
	{ key: "EnduranceCost", title: "Endurance", align: "end", sortable: true },
	{ key: "actions", title: "", align: "end", sortable: false, width: 100 },
];

const loading = ref(true);
const styles = ref<any[]>([]);
const styleTotal = ref(0);
const search = ref("");
const filterClass = ref<number | null>(null);
const filterSpec = ref("");

const options = ref<any>({
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

// Load specializations for filter
const specializations = ref<{ KeyName: string; Name: string }[]>([]);

async function loadFilters() {
	try {
		// Load specializations that have styles
		const [specs] = await DB.selectRaw(`KeyName, Name FROM specialization WHERE KeyName IN (SELECT DISTINCT SpecKeyName FROM style) ORDER BY Name`);
		specializations.value = specs;
	} catch (err) {
		console.error("Failed to load filters:", err);
	}
}

const classItems = computed(() => [
	{ title: "All classes", value: null },
	...DaocClasses
		.filter(c => c.category !== "Base")
		.map(c => ({ title: `${c.name} (${c.category})`, value: c.id }))
]);

// Map class ID to name
const classMap = computed(() => {
	const map: Record<number, string> = {};
	for (const c of DaocClasses) {
		map[c.id] = c.name;
	}
	return map;
});

const load = debounce(async () => {
	loading.value = true;
	try {
		const conditions: string[] = ["1=1"];

		if (search.value) {
			const likeValue = search.value.replace(/'/g, "''");
			conditions.push(`(Name LIKE '%${likeValue}%' OR SpecKeyName LIKE '%${likeValue}%' OR StyleID = '${likeValue}')`);
		}

		if (filterClass.value !== null) {
			conditions.push(`ClassId = ${filterClass.value}`);
		}

		if (filterSpec.value) {
			conditions.push(`SpecKeyName = '${filterSpec.value.replace(/'/g, "''")}'`);
		}

		const where = conditions.join(" AND ");
		const orderby = options.value.sortBy.map(({ key, order }: { key: string; order: string; }) => order === "desc" ? `${key} DESC` : key);
		if (orderby.length === 0)
			orderby.push("Name");
		const [_styles, total] = await DB.selectRaw(`* FROM style WHERE ${where} ORDER BY ${orderby}`);

		// Add class names
		styles.value = _styles.map((s: any) => ({
			...s,
			ClassName: classMap.value[s.ClassId] || `Class ${s.ClassId}`,
		}));
		styleTotal.value = total;
		loading.value = false;
	}
	catch (err) {
		if (err instanceof Error)
			alert(`An error occurred: ${err.message}`);
		else
			alert(`An error occurred: ${err}`);
	}
}, 200);

function editStyle(styleId: number) {
	router.push({ name: "style", params: { id: styleId } });
}

function createStyle() {
	router.push({ name: "style", params: { id: "new" } });
}

onMounted(() => {
	loadFilters();
	load();
});
watch(search, load);
watch(filterClass, load);
watch(filterSpec, load);
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="Styles">
			<v-text-field
				v-model="search"
				prepend-inner-icon="mdi-magnify"
				label="Search"
				variant="underlined"
				hide-details
				style="max-width: 300px"
				class="mr-4"
			/>
			<v-btn color="primary" prepend-icon="mdi-plus" @click="createStyle">New Style</v-btn>
		</v-toolbar>

		<v-card-text class="py-2">
			<v-row dense>
				<v-col cols="12" md="4">
					<v-select
						v-model="filterClass"
						:items="classItems"
						label="Filter by Class"
						density="compact"
						clearable
						hide-details
					/>
				</v-col>
				<v-col cols="12" md="4">
					<v-select
						v-model="filterSpec"
						:items="[{ title: 'All specs', value: '' }, ...specializations.map(s => ({ title: s.Name, value: s.KeyName }))]"
						label="Filter by Spec"
						density="compact"
						clearable
						hide-details
					/>
				</v-col>
			</v-row>
		</v-card-text>

		<v-progress-linear :active="loading" indeterminate />
		<v-data-table
			fixed-header
			height="calc(100vh - 260px)"
			:headers="headers"
			:items="styles"
			:items-length="styleTotal"
			item-value="StyleID"
			v-model:options="options"
			v-model:sort-by="sortBy"
			density="compact"
			multi-sort
			hover
			@click:row="(_: any, { item }: any) => editStyle(item.StyleID)"
		>
			<template #item.actions="{ item }">
				<v-btn size="small" icon="mdi-pencil" variant="text" @click.stop="editStyle(item.StyleID)" />
			</template>
		</v-data-table>
	</v-sheet>
</template>
