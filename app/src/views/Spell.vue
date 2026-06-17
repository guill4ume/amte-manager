<script lang="ts" setup>
import { debounce } from "@/debounce";
import { DB } from "@/main";
import { DataTableHeader, SortItem } from "@/vuetify.types";
import { onMounted, ref, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { DaocClasses } from "@/models/DaocClasses";

const router = useRouter();

const headers: DataTableHeader[] = [
	{ key: "SpellID", title: "ID", align: "end", sortable: true },
	{ key: "Name", title: "Name", align: "start", sortable: true },
	{ key: "Type", title: "Type", align: "start", sortable: true },
	{ key: "Target", title: "Target", align: "start", sortable: true },
	{ key: "Range", title: "Range", align: "end", sortable: true },
	{ key: "Value", title: "Value", align: "end", sortable: true },
	{ key: "Power", title: "Power", align: "end", sortable: true },
	{ key: "CastTime", title: "Cast", align: "end", sortable: true },
	{ key: "actions", title: "", align: "end", sortable: false, width: 100 },
];

const loading = ref(true);
const spells = ref<any[]>([]);
const spellTotal = ref(0);
const search = ref("");
const filterType = ref("");
const filterTarget = ref("");
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

// Load spell types for filter dropdown
const spellTypes = ref<string[]>([]);
const spellTargets = ref<string[]>([]);
const specializations = ref<{ KeyName: string; Name: string }[]>([]);

async function loadFilters() {
	try {
		// Load distinct spell types
		const [types] = await DB.select({
			table: "spell",
			fields: "DISTINCT Type",
			where: "Type != ''",
			orderby: "Type",
			limit: -1,
		});
		spellTypes.value = types.map((t: any) => t.Type).filter(Boolean);

		// Load distinct targets
		const [targets] = await DB.select({
			table: "spell",
			fields: "DISTINCT Target",
			where: "Target != ''",
			orderby: "Target",
			limit: -1,
		});
		spellTargets.value = targets.map((t: any) => t.Target).filter(Boolean);

		// Load specializations
		const [specs] = await DB.select({
			table: "specialization",
			fields: "KeyName, Name",
			orderby: "Name",
			limit: -1,
		});
		specializations.value = specs;
	} catch (err) {
		console.error("Failed to load filters:", err);
	}
}

// Get specs for selected class
const classSpecs = computed(() => {
	if (filterClass.value === null) return specializations.value;
	return specializations.value;
});

const classItems = computed(() => [
	{ title: "All classes", value: null },
	...DaocClasses.filter((c) => c.category !== "Base").map((c) => ({ title: `${c.name} (${c.category})`, value: c.id })),
]);

const load = debounce(async () => {
	loading.value = true;
	try {
		const conditions: string[] = ["1=1"];

		if (search.value) {
			const likeValue = search.value.replace(/'/g, "''");
			conditions.push(`(Name LIKE '%${likeValue}%' OR Type LIKE '%${likeValue}%' OR SpellID = '${likeValue}')`);
		}

		if (filterType.value) {
			conditions.push(`Type = '${filterType.value.replace(/'/g, "''")}'`);
		}

		if (filterTarget.value) {
			conditions.push(`Target = '${filterTarget.value.replace(/'/g, "''")}'`);
		}

		// Filter by specialization via spellline and linexspell
		if (filterSpec.value) {
			conditions.push(`SpellID IN (
				SELECT lxs.SpellID FROM linexspell lxs
				JOIN spellline sl ON sl.KeyName = lxs.LineName
				WHERE sl.Spec = '${filterSpec.value.replace(/'/g, "''")}'
			)`);
		}

		// Filter by class via classxspecialization
		if (filterClass.value !== null) {
			conditions.push(`SpellID IN (
				SELECT lxs.SpellID FROM linexspell lxs
				JOIN spellline sl ON sl.KeyName = lxs.LineName
				JOIN classxspecialization cxs ON cxs.SpecKeyName = sl.Spec
				WHERE cxs.ClassID = ${filterClass.value}
			)`);
		}

		const where = conditions.join(" AND ");
		const orderby = options.value.sortBy.map(({ key, order }: { key: string; order: string }) =>
			order === "desc" ? `${key} DESC` : key
		);
		if (orderby.length === 0) orderby.push("Name");
		const offset = Math.max(0, itemsPerPage.value * (page.value - 1));
		const [_spells, total] = await DB.selectRaw(
			`* FROM spell WHERE ${where} ORDER BY ${orderby} LIMIT ${offset}, ${itemsPerPage.value < 0 ? 1000000 : itemsPerPage.value}`
		);
		spells.value = _spells;
		spellTotal.value = total;
		loading.value = false;
	} catch (err) {
		if (err instanceof Error) alert(`An error occurred: ${err.message}`);
		else alert(`An error occurred: ${err}`);
	}
}, 200);

function editSpell(spellId: number) {
	router.push({ name: "spell", params: { id: spellId } });
}

function createSpell() {
	router.push({ name: "spell", params: { id: "new" } });
}

onMounted(() => {
	loadFilters();
	load();
});
watch(options, load);
watch(search, load);
watch(filterType, load);
watch(filterTarget, load);
watch(filterClass, load);
watch(filterSpec, load);
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="Spells">
			<v-text-field
				v-model="search"
				prepend-inner-icon="mdi-magnify"
				label="Search"
				variant="underlined"
				hide-details
				style="max-width: 300px"
				class="mr-4"
			/>
			<v-btn color="primary" prepend-icon="mdi-plus" @click="createSpell">New Spell</v-btn>
		</v-toolbar>

		<v-card-text class="py-2">
			<v-row dense>
				<v-col cols="12" md="3">
					<v-select
						v-model="filterType"
						:items="['', ...spellTypes]"
						label="Filter by Type"
						density="compact"
						clearable
						hide-details
					/>
				</v-col>
				<v-col cols="12" md="3">
					<v-select
						v-model="filterTarget"
						:items="['', ...spellTargets]"
						label="Filter by Target"
						density="compact"
						clearable
						hide-details
					/>
				</v-col>
				<v-col cols="12" md="3">
					<v-select
						v-model="filterClass"
						:items="classItems"
						label="Filter by Class"
						density="compact"
						clearable
						hide-details
					/>
				</v-col>
				<v-col cols="12" md="3">
					<v-select
						v-model="filterSpec"
						:items="[
							{ title: 'All specs', value: '' },
							...specializations.map((s) => ({ title: s.Name, value: s.KeyName })),
						]"
						label="Filter by Spec"
						density="compact"
						clearable
						hide-details
					/>
				</v-col>
			</v-row>
		</v-card-text>

		<v-progress-linear :active="loading" indeterminate />
		<v-data-table-server
			fixed-header
			height="calc(100vh - 260px)"
			:headers="headers"
			:items="spells"
			:items-length="spellTotal"
			item-value="SpellID"
			v-model:options="options"
			v-model:page="page"
			v-model:items-per-page="itemsPerPage"
			v-model:sort-by="sortBy"
			density="compact"
			multi-sort
			hover
			@click:row="(_: any, { item }: any) => editSpell(item.SpellID)"
		>
			<template #item.CastTime="{ item }"> {{ (item.CastTime / 1000).toFixed(1) }}s </template>
			<template #item.actions="{ item }">
				<v-btn size="small" icon="mdi-pencil" variant="text" @click.stop="editSpell(item.SpellID)" />
			</template>
		</v-data-table-server>
	</v-sheet>
</template>
