<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import GroupBox from "@/components/Utils/GroupBox.vue";
import { DataTableHeader } from "@/vuetify.types";
import { DB } from "@/main";

const props = defineProps<{
	player: any;
}>();

const loading = ref(true);
const killsAsKiller = ref<any[]>([]);
const killsAsKilled = ref<any[]>([]);

async function load() {
	if (!props.player) {
		loading.value = false;
		return;
	}

	loading.value = true;
	try {
		// Load death logs (player as killer - only against other players)
		const [_killsAsKiller] = await DB.selectRaw(
			`* FROM deathlog WHERE Killer = '${props.player.Name}' AND KillerClass = 'DOL.GS.GamePlayer' ORDER BY Id DESC LIMIT 10000`
		);
		killsAsKiller.value = _killsAsKiller;

		// Load death logs (player as killed - only killed by other players)
		const [_killsAsKilled] = await DB.selectRaw(
			`* FROM deathlog WHERE Killed = '${props.player.Name}' AND KilledClass = 'DOL.GS.GamePlayer' ORDER BY Id DESC LIMIT 10000`
		);
		killsAsKilled.value = _killsAsKilled;
	} catch (err) {
		console.error("PlayerDeathLog load error:", err);
	}
	loading.value = false;
}

onMounted(load);
watch(() => props.player, load);

const killsHeaders: DataTableHeader[] = [
	{ key: "DeathDate", title: "Date", sortable: true, value: (item) => new Date(item.DeathDate).toLocaleString() },
	{ key: "Killer", title: "Killer", sortable: true },
	{ key: "Killed", title: "Killed", sortable: true },
	{ key: "Region", title: "Region", sortable: true },
];
</script>

<template>
	<!-- Death Log - Kills -->
	<GroupBox :title="`Recent Kills (${killsAsKiller.length})`">
		<v-progress-linear v-if="loading" indeterminate />
		<template v-else>
			<v-data-table
				v-if="killsAsKiller.length"
				:headers="killsHeaders"
				:items="killsAsKiller"
				density="compact"
				:items-per-page="10"
			/>
			<v-alert v-else type="info" density="compact">No PvP kills recorded</v-alert>
		</template>
	</GroupBox>

	<!-- Death Log - Deaths -->
	<GroupBox :title="`Recent Deaths (${killsAsKilled.length})`">
		<v-progress-linear v-if="loading" indeterminate />
		<template v-else>
			<v-data-table
				v-if="killsAsKilled.length"
				:headers="killsHeaders"
				:items="killsAsKilled"
				density="compact"
				:items-per-page="10"
			/>
			<v-alert v-else type="info" density="compact">No PvP deaths recorded</v-alert>
		</template>
	</GroupBox>
</template>
