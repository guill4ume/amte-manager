<script lang="ts" setup>
import { debounce } from '@/debounce';
import { DB } from '@/main';
import { DataTableHeader, SortItem } from '@/vuetify.types';
import { watch } from 'vue';
import { onMounted, ref } from 'vue';

const headers: DataTableHeader[] = [
	{ key: "Region", title: "Region", align: "end", sortable: true },
	{ key: "Name", title: "Name", align: "start", sortable: true },
	{ key: "Guild", title: "Guild", align: "start", sortable: true },
	{ key: "Level", title: "Level", align: "end", sortable: true },
	{ key: "actions", title: "", sortable: false },
];
const npcs = ref<any[]>([]);
const npcTotal = ref(0);
const search = ref("");
const options = ref({
	groupBy: [],
	groupDesc: [],
	itemsPerPage: 25,
	multiSort: true,
	mustSort: false,
	page: 1,
	sortBy: [],
});
const itemsPerPage = ref(25);
const page = ref(1);
const sortBy = ref<SortItem[]>([{ key: "Region", order: "asc" }, { key: "Name", order: "asc" }]);

const loading = ref(false);
const selectedNPC = ref<any>(null);
const textNPC = ref<any>(null);

const reponses = ref<[string, string][]>([]);

const load = debounce(async () => {
	loading.value = true;
	try {
		let where = "ClassType like '%TextNPC%'";
		if (search.value) {
			const likeValue = search.value.replace(/'/g, "''");
			const searchWhere = ["Name", "Guild", "Region"]
				.map(field => `${field} like '%${likeValue}%'`)
				.join(' OR ');
			where = `ClassType like '%TextNPC%' AND (${searchWhere})`;
		}
		const orderby = options.value.sortBy.map(({ key, order }: { key: string; order: string; }) => order === "desc" ? `${key} DESC` : key);
		if (orderby.length === 0)
			orderby.push("Region", "Name");
		const offset = options.value.itemsPerPage * (options.value.page - 1);
		const [_npcs, total] = await DB.select({
			table: "mob",
			fields: "Mob_ID, Region, Name, Guild, Level",
			where,
			orderby,
			offset,
			limit: options.value.itemsPerPage,
		});
		npcs.value = _npcs;
		npcTotal.value = total;
		loading.value = false;
	}
	catch (err) {
		alert(`Une erreur est survenue: ${err}`);
	}
}, 200);

onMounted(load);
watch(options, load);
watch(search, load);

async function edit(npc: any) {
	selectedNPC.value = npc;
}

async function loadNPC() {
	if (!selectedNPC.value)
		return;
	loading.value = true;
	const [_textNPC] = await DB.select({ table: "textnpc", where: `MobID = '${selectedNPC.value.Mob_ID}'` });
	textNPC.value = _textNPC[0];
	textNPC.value.Text = textNPC.value.Text.replace(/\|/g, "\n");
	reponses.value = textNPC.value.Reponse.split(/;/g).map((r: string) => {
		const idx = r.indexOf("|");
		return [r.substring(0, idx), r.substring(idx + 1).replace(/\|/g, "\n")];
	});
	loading.value = false;
}
watch(selectedNPC, loadNPC);

async function save() {
	reponses.value = reponses.value.filter(([k, _]) => !!k);
	const set = new Set(reponses.value.map(([k, _]) => k));
	if (set.size < reponses.value.length) {
		alert("Impossible de sauvegarder, au moins 2 réponses sont identiques.");
		return;
	}

	loading.value = true;
	await DB.update(
		"textnpc",
		{
			Text: textNPC.value.Text.replace("|", "\n"),
			Reponse: reponses.value.map(([k, t]) => `${k}|${t.replace("|", "\n")}`).filter(r => r !== "\n").join(";"),
		},
		`TextNPC_ID='${textNPC.value.TextNPC_ID}'`
	);
	loading.value = false;
	selectedNPC.value = null;
}
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="TextNPCs">
			<v-text-field v-model="search" prepend-inner-icon="mdi-magnify" label="Search" variant="underlined" hide-details />
		</v-toolbar>

		<v-progress-linear :active="loading" indeterminate />
		<v-data-table-server
			fixed-header
			height="calc(100vh - 190px)"
			:headers="headers"
			:items="npcs"
			item-value="Mob_ID"
			v-model:options="options"
			v-model:items-per-page="itemsPerPage"
			v-model:items-page="page"
			v-model:sort-by="sortBy"
			:items-length="npcTotal"
			:search="search"
			multi-sort
			density="compact"
			hide-default-footer>
			<template v-slot:item.actions="{ item }">
				<v-btn @click="edit(item)" :loading="loading" density="compact" icon="mdi-pencil" />
			</template>
		</v-data-table-server>


		<v-dialog :model-value="!!selectedNPC" persistent @input="selectedNPC = $event ? selectedNPC : undefined">
			<v-card v-if="selectedNPC && textNPC">
				<v-card-title>{{ selectedNPC.Name }} <v-btn variant="text" icon="mdi-close" @click="selectedNPC = undefined" style="float: right" /></v-card-title>
				<v-card-subtitle>{{ selectedNPC.Guild }}</v-card-subtitle>
				<v-card-text>
					<v-row>
						<v-col>
							<v-textarea v-model="textNPC.Text" outlined label="Text" rows="1" hide-details />
						</v-col>
					</v-row>
					<v-row v-for="reponse in reponses">
						<v-col cols="2">
							<v-text-field v-model="reponse[0]" label="Answer" hide-details />
						</v-col>
						<v-col>
							<v-textarea v-model="reponse[1]" outlined label="Answer's text" rows="1" hide-details />
						</v-col>
					</v-row>
					<v-row>
						<v-col class="text-right ma-0 pa-0">
							<v-btn color="success" @click="reponses.push(['', ''])" icon="mdi-plus-circle" density="compact" />
						</v-col>
					</v-row>
				</v-card-text>
				<v-card-actions>
					<v-spacer />
					<v-btn variant="text" @click="selectedNPC = undefined">Cancel</v-btn>
					<v-btn color="primary" @click="save" :loading="loading">Save</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-sheet>
</template>
