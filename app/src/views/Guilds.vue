<script lang="ts" setup>
import { debounce } from "@/debounce";
import { DB } from "@/main";
import { DataTableHeader, SortItem } from "@/vuetify.types";
import { onMounted, ref, watch } from "vue";
import { Guild } from "@/models/Guild";
import { DaocRealms } from "@/models/DaocClasses";
import GuildEmblem from "@/components/GuildEmblem.vue";

const headers: DataTableHeader[] = [
	{ key: "GuildName", title: "Name", align: "start", sortable: true },
	{
		key: "Realm",
		title: "Realm",
		align: "start",
		sortable: true,
		value: (item) => DaocRealms.find((realm) => realm.value === item.Realm)?.title ?? item.Realm,
	},
	{ key: "actions", title: "", align: "end", sortable: false },
];

const loading = ref(true);
const guilds = ref<Guild[]>([]);
const guildsTotal = ref(0);
const search = ref("");
const options = ref<any>({
	groupBy: [],
	groupDesc: [],
	multiSort: true,
	mustSort: false,
	sortBy: [{ key: "GuildName", order: "asc" }],
	page: 1,
	itemsPerPage: 25,
});
const itemsPerPage = ref(25);
const page = ref(1);
const sortBy = ref<SortItem[]>([{ key: "GuildName", order: "asc" }]);

const load = debounce(async () => {
	loading.value = true;
	try {
		let where = "GuildName like '%'";

		if (search.value) {
			const likeValue = search.value.replace(/'/g, "''");
			where = ["GuildName", "GuildID"].map((field) => `${field} like '%${likeValue}%'`).join(" OR ");
		}

		const offset = options.value.itemsPerPage * (options.value.page - 1);
		const fields = ["GuildID", "GuildName", "Realm", "Emblem"];
		const orderby = options.value.sortBy.map(({ key, order }: { key: string; order: string }) =>
			order === "desc" ? `${key} DESC` : key
		);
		if (orderby.length === 0) orderby.push("GuildName");

		const [guildRows, total] = await DB.select({
			table: "guild",
			fields,
			where,
			orderby,
			offset,
			limit: itemsPerPage.value,
		});

		guildsTotal.value = total;
		guilds.value = guildRows;

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
		<v-toolbar title="Guilds">
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
			:items="guilds"
			:items-length="guildsTotal"
			item-value="GuildName"
			v-model:options="options"
			v-model:page="page"
			v-model:items-per-page="itemsPerPage"
			v-model:sort-by="sortBy"
			density="compact"
			multi-sort
		>
			<template v-slot:item.GuildName="{ item }">
				<guild-emblem :emblem="item.Emblem" style="width: 16px" />
				{{ item.GuildName }}
			</template>
			<template v-slot:item.actions="{ item }">
				<v-btn
					color="default"
					:to="{ name: 'guild', params: { id: item.GuildID } }"
					density="compact"
					icon="mdi-eye"
				/>
			</template>
		</v-data-table-server>
	</v-sheet>
</template>
