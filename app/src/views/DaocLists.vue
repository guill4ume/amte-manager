<script lang="ts" setup>
import { DataTableHeader } from "@/vuetify.types";
import { onMounted, ref } from "vue";
import { DaocClasses } from "@/models/DaocClasses";
import { DaocItemSlots, DaocItemObjectTypes, DaocColors } from "@/models/DaocValues";

const lists: { title: string; items: unknown[]; headers: DataTableHeader[]; }[] = [
	{
		title: "Classes",
		items: DaocClasses,
		headers: [
			{ key: "id", title: "ID", align: "end", sortable: true },
			{ key: "category", title: "Category", align: "start", sortable: true },
			{ key: "name", title: "Name", align: "start", sortable: true },
		],
	},
	{
		title: "Item slots (Item Type)",
		items: DaocItemSlots,
		headers: [
			{ key: "id", title: "ID", align: "end", sortable: true },
			{ key: "name", title: "Name", align: "start", sortable: true },
		],
	},
	{
		title: "Item \"Object\" Type",
		items: DaocItemObjectTypes,
		headers: [
			{ key: "id", title: "ID", align: "end", sortable: true },
			{ key: "name", title: "Name", align: "start", sortable: true },
		],
	},
	{
		title: "Colors",
		items: DaocColors,
		headers: [
			{ key: "value", title: "ID", align: "end", sortable: true },
			{ key: "title", title: "Name", align: "start", sortable: true },
			{ key: "color", title: "", sortable: false },
		],
	}
];

const currentListIdx = ref(0);
const search = ref("");

onMounted(async () => {
});
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar>
			<v-toolbar-title>
				<v-tabs v-model="currentListIdx" center-active>
					<template v-for="(list, idx) in lists" :key="idx">
						<v-tab :value="idx">{{ list.title }}</v-tab>
					</template>
				</v-tabs>
			</v-toolbar-title>

			<v-text-field v-model="search" prepend-inner-icon="mdi-magnify" label="Search" variant="underlined" hide-details/>
		</v-toolbar>

		<v-data-table
			fixed-header
			height="calc(100vh - 190px)"
			:headers="lists[currentListIdx].headers"
			:items="lists[currentListIdx].items"
			:items-per-page="-1"
			:search="search"
			multi-sort
			density="compact"
			hide-default-footer
		>
			<template v-slot:item.color="{ item }">
				<div :style="`width: 16px; height: 16px; background-color: ${item.color}; border: 1px solid gray;`"/>
			</template>
		</v-data-table>

	</v-sheet>
</template>
