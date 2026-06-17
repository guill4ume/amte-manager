<script lang="ts" setup>
import { DB } from '@/main';
import { DataTableHeader } from '@/vuetify.types';
import { onMounted, ref } from 'vue';

const headers: DataTableHeader[] = [
	{ key: "ID", title: "ID", align: "end", sortable: true },
	{ key: "Name", title: "Name", align: "start", sortable: true },
	{ key: "ResistBody", title: "Body", align: "end", sortable: true },
	{ key: "ResistCold", title: "Cold", align: "end", sortable: true },
	{ key: "ResistCrush", title: "Crush", align: "end", sortable: true },
	{ key: "ResistEnergy", title: "Energy", align: "end", sortable: true },
	{ key: "ResistHeat", title: "Heat", align: "end", sortable: true },
	{ key: "ResistMatter", title: "Matter", align: "end", sortable: true },
	{ key: "ResistNatural", title: "Natural", align: "end", sortable: true },
	{ key: "ResistSlash", title: "Slash", align: "end", sortable: true },
	{ key: "ResistSpirit", title: "Spirit", align: "end", sortable: true },
	{ key: "ResistThrust", title: "Thrust", align: "end", sortable: true },
];
const races = ref<any[]>([]);
const search = ref("");
const loading = ref(true);

onMounted(async () => {
	const [_races] = await DB.select({ table: "race", orderby: "ID", limit: 10000 });
	races.value = _races;
	loading.value = false;
});
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="Races">
			<v-text-field v-model="search" prepend-inner-icon="mdi-magnify" label="Search" variant="underlined" hide-details />
		</v-toolbar>

		<v-progress-linear :active="loading" indeterminate />
		<v-data-table
			fixed-header
			height="calc(100vh - 190px)"
			:headers="headers"
			:items="races"
			:items-per-page="-1"
			:search="search"
			multi-sort
			density="compact"
			hide-default-footer />
	</v-sheet>
</template>
