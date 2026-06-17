<script lang="ts" setup>
import { toSQL } from "@/dbconnection";
import { BaseQuestDB } from "@/models/Quest";
import QuestEditor from "@/components/QuestEditor.vue";
import { DataTableHeader } from "@/vuetify.types";
import { ref } from "vue";
import { onMounted } from "vue";
import { DB } from "@/main";

const headers: DataTableHeader[] = [
	{ key: "Id", title: "ID", align: "end", sortable: true },
	{ key: "NpcRegion", title: "Region", align: "end", sortable: true },
	{ key: "Name", title: "Name", align: "start", sortable: true },
	{ key: "MinLevel", title: "MinLevel", align: "end", sortable: true },
	{ key: "MaxLevel", title: "MaxLevel", align: "end", sortable: true },
	{ key: "actions", title: "", sortable: false },
];
const quests = ref<BaseQuestDB[]>([]);
const search = ref("");
const loading = ref(true);

const selectedQuest = ref<BaseQuestDB>();

async function load() {
	loading.value = true;
	const [_quests] = await DB.select({
		table: "dataquestjson",
		orderby: "MinLevel,Name",
		limit: -1,
	});
	quests.value = _quests;
	loading.value = false;
}
onMounted(load);

async function remove(quest: BaseQuestDB) {
	if (
		!confirm(
			`It will definitively remove the quest "${quest.Name}" from the database and player's advances. Are you sure?`
		)
	)
		return;
	await DB.delete("dataquestjson", `Id = ${toSQL(quest.Id)}`);
	await DB.delete("characterxdataquest", `DataQuestID = ${toSQL(quest.Id)}`, 5000);
	return load();
}
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="Quests">
			<v-text-field
				v-model="search"
				prepend-inner-icon="mdi-magnify"
				label="Search"
				variant="underlined"
				hide-details
			/>
		</v-toolbar>

		<v-row>
			<v-col class="text-right">
				<v-btn :to="{ name: 'quest', params: { id: -1 } }" variant="outlined" color="primary"> New quest </v-btn>
			</v-col>
		</v-row>

		<v-progress-linear :active="loading" indeterminate />
		<v-data-table
			fixed-header
			height="calc(100vh - 190px)"
			:headers="headers"
			:items="quests"
			item-key="ID"
			:items-per-page="-1"
			:search="search"
			density="compact"
			multi-sort
			disable-pagination
			hide-default-footer
		>
			<template v-slot:item.actions="{ item }">
				<v-btn
					color="default"
					:to="{ name: 'quest', params: { id: item.Id } }"
					density="compact"
					icon="mdi-pencil"
				/>
				<v-btn color="error" @click="remove(item)" density="compact" icon="mdi-delete" />
			</template>
		</v-data-table>

		<v-dialog :value="!!selectedQuest" @input="selectedQuest = $event ? selectedQuest : undefined">
			<QuestEditor
				v-if="selectedQuest"
				:questDB="selectedQuest"
				@cancel="selectedQuest = undefined"
				@saved="selectedQuest = undefined"
			/>
		</v-dialog>
	</v-sheet>
</template>
