<script lang="ts" setup>
import { DB } from "@/main";
import { onMounted, ref, watch } from "vue";
import { sql } from "@/utils";
import { useRoute } from "vue-router";
import {Guild} from "@/models/Guild";
import GroupBox from "@/components/Utils/GroupBox.vue";
import {DolCharacter} from "@/models/DolCharacter";
import {GuildRank} from "@/models/GuildRank";
import {DataTableHeader, SortItem} from "@/vuetify.types";

const route = useRoute();
const guild = ref<Guild>();
const members = ref<DolCharacter[]>([]);
const ranks = ref<GuildRank[]>([]);
const loading = ref(true);
const search = ref("");
const tableLength = ref(0);
const options = ref<any>({
	groupBy: [],
	groupDesc: [],
	multiSort: true,
	mustSort: false,
	sortBy: [{ key: "AccountName", order: "asc" }],
	page: 1,
	itemsPerPage: 25,
});
const page = ref(1);
const sortBy = ref<SortItem[]>([{ key: "AccountName", order: "asc" }]);

const TableMembersHeaders: DataTableHeader[] = [
  { key: "AccountName", title: "Account Name", align: "start", sortable: true },
  { key: "Name", title: "Character Name", align: "start", sortable: true },
  { key: "Level", title: "Character Level", align: "start", sortable: true },
  { key: "GuildRank", title: "Guild Rank", align: "start", sortable: true, value: item => `${ranks.value.find(r => r.RankLevel === item.GuildRank)?.Title ?? ""} (${item.GuildRank})`}
];

async function load() {
	if (!route.params.id) {
		loading.value = false;
		return;
	}

	const [_guild] = await DB.select({
		table: "guild",
		fields: "*",
		where: sql`GuildID = ${route.params.id}`,
		limit: 1,
	});
	guild.value = _guild.length ? _guild[0] : undefined;

	const [_members, total] = await DB.select({
		table: "dolcharacters",
		fields: ["AccountName", "Name", "Level", "GuildRank"],
		where: sql`GuildID = ${route.params.id}`,
	});
	members.value = _members;
  tableLength.value = total;

	const [_ranks] = await DB.select({
		table: "guildrank",
		fields: ["Title", "RankLevel"],
		where: sql`GuildID = ${route.params.id}`,
	});
	ranks.value = _ranks;

	loading.value = false;
}

onMounted(load);
watch(() => route.params.id, load);
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar>
			<v-toolbar-title>
				{{ guild?.GuildName ?? 'Loading...' }}
			</v-toolbar-title>
		</v-toolbar>
		<v-progress-linear :active="loading" indeterminate/>

		<v-card-text>
			<template v-if="guild">
			<GroupBox title="General">
				<v-row>
					<v-col>
						<v-text-field readonly v-model="guild.Motd" label="MOTD" density="compact"/>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-text-field readonly v-model="guild.Omotd" label="Officier MOTD" density="compact"/>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3">
						<v-text-field readonly v-model="guild.Realm" label="Realm" density="compact"/>
					</v-col>
					<v-col cols="4">
						<v-text-field readonly v-model="guild.GuildBank" label="Guild Bank" density="compact"/>
					</v-col>
					<v-col cols="2">
						<v-checkbox readonly v-model="guild.GuildHouse" true-value="1" false-value="0" label="Has Guild House" density="compact"/>
					</v-col>
					<v-col cols="3">
						<v-text-field readonly v-model="guild.GuildHouseNumber" label="Guild House Number" density="compact"/>
					</v-col>
				</v-row>
			</GroupBox>
			<GroupBox title="Members">
				<v-sheet :elevation="1" rounded>
					<v-data-table
						fixed-header
						:headers="TableMembersHeaders"
						:items="members"
						:items-length="tableLength"
						item-value="AccountName"
						v-model:options="options"
						v-model:page="page"
						:items-per-page="-1"
						v-model:sort-by="sortBy"
						density="compact"
						multi-sort />
				</v-sheet>
			</GroupBox>
			<GroupBox title="Debug">
				<details><summary>Guild</summary>
					<pre>{{ guild }}</pre>
				</details>
				<details><summary>Members</summary>
					<pre>{{ members }}</pre>
				</details>
				<details><summary>GuildRanks</summary>
					<pre>{{ ranks }}</pre>
				</details>
			</GroupBox>
			</template>
		</v-card-text>
	</v-sheet>
</template>
