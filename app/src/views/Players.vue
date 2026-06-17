<script lang="ts" setup>
import { debounce } from "@/debounce";
import { DB } from "@/main";
import { DataTableHeader, SortItem } from "@/vuetify.types";
import { onMounted, ref, watch } from "vue";
import { humanTimeSec } from "@/utils";
import { DaocClasses } from "@/models/DaocClasses";

const headers: DataTableHeader[] = [
	{ key: "AccountName", title: "Account", align: "start", sortable: true },
	{ key: "Name", title: "Name", align: "start", sortable: true },
	{ key: "Level", title: "Level", align: "end", sortable: true },
	{ key: "Race", title: "Race", align: "end", sortable: true },
	{
		key: "Class",
		title: "Class",
		sortable: true,
		value: (item) => DaocClasses.find((cls) => cls.id === item.Class)?.name ?? item.Class,
	},
	{
		key: "GuildID",
		title: "Guild",
		sortable: true,
		value: (item) => guilds.value.find((g) => g.GuildID === item.GuildID)?.GuildName ?? (item.GuildID ? "?" : ""),
	},
	{
		key: "PlayedTime",
		title: "Played time",
		align: "end",
		sortable: true,
		value: (item) => humanTimeSec(item.PlayedTime),
	},
	{
		key: "CreationDate",
		title: "Created at",
		align: "end",
		sortable: true,
		value: (item) => new Date(item.LastPlayed).toLocaleString(),
	},
	{
		key: "LastPlayed",
		title: "Last played at",
		align: "end",
		sortable: true,
		value: (item) => new Date(item.LastPlayed).toLocaleString(),
	},
	{ key: "__actions", title: "", align: "end", sortable: false },
];

const loading = ref(true);
const guilds = ref<any[]>([]);
const players = ref<any[]>([]);
const playerTotal = ref(0);
const search = ref("");
const options = ref<any>({
	groupBy: [],
	groupDesc: [],
	multiSort: true,
	mustSort: false,
	sortBy: [{ key: "Name", order: "asc" }],
	page: 1,
	itemsPerPage: 25,
});
const itemsPerPage = ref(25);
const page = ref(1);
const sortBy = ref<SortItem[]>([{ key: "Name", order: "asc" }]);

const load = debounce(async () => {
	loading.value = true;
	try {
		const [guildRows] = await DB.select({
			table: "guild",
			fields: ["GuildID", "GuildName"],
			limit: 10000,
		});
		guilds.value = guildRows;

		let where = "name like '%'";
		if (search.value) {
			const likeValue = search.value.replace(/'/g, "''");
			where = ["Name", "AccountName"].map((field) => `${field} like '%${likeValue}%'`).join(" OR ");
			const ids = guildRows
				.filter((g) => g.GuildName.toLocaleLowerCase().startsWith(search.value.toLocaleLowerCase()))
				.map((g) => `'${g.GuildID}'`);
			if (ids.length) where += ` OR GuildID IN (${ids.join(",")})`;
		}
		const orderby = options.value.sortBy.map(({ key, order }: { key: string; order: string }) =>
			order === "desc" ? `${key} DESC` : key
		);
		if (orderby.length === 0) orderby.push("Name");
		const offset = options.value.itemsPerPage * (options.value.page - 1);
		const fields = [
			"DOLCharacters_ID",
			"AccountName",
			"Name",
			"Level",
			"Race",
			"Class",
			"LastName",
			"GuildID",
			"CreationDate",
			"LastPlayed",
			"PlayedTime",
		];
		const [playersPage, total] = await DB.select({
			table: "dolcharacters",
			fields,
			where,
			orderby,
			offset,
			limit: itemsPerPage.value,
		});
		players.value = playersPage;
		playerTotal.value = total;
		loading.value = false;
	} catch (err) {
		if (err instanceof Error) alert(`Une erreur est survenue: ${err.message}`);
		else alert(`Une erreur est survenue: ${err}`);
	}
}, 200);

onMounted(load);
watch(options, load);
watch(search, load);
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="Players">
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
			:items="players"
			:items-length="playerTotal"
			item-value="Name"
			v-model:options="options"
			v-model:page="page"
			v-model:items-per-page="itemsPerPage"
			v-model:sort-by="sortBy"
			density="compact"
			multi-sort
		>
			<template #item.Name="{ item }"><router-link :to="{ name: 'player', params: { name: item.Name } }">{{item.Name}}</router-link></template>
		</v-data-table-server>
	</v-sheet>
</template>
