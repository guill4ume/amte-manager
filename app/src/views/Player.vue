<script setup lang="ts">
import { DB } from "@/main";
import { onMounted, ref, watch } from "vue";
import { sql } from "@/utils";
import { useRoute } from "vue-router";
import { DaocClasses } from "@/models/DaocClasses";
import {
	PlayerInfo,
	PlayerItemsSection,
	PlayerMapSection,
	PlayerQuests,
	PlayerDeathLog,
} from "@/components/Player";

const route = useRoute();
const loading = ref(true);
const player = ref<any>(undefined);

// Get class name by id
function getClassName(id: number): string {
	return DaocClasses.find((c) => c.id === id)?.name || `Class ${id}`;
}

async function load() {
	if (!route.params.name) {
		loading.value = false;
		return;
	}

	loading.value = true;
	try {
		// Load player
		const [_player] = await DB.select({
			table: "dolcharacters",
			fields: "*",
			where: sql`Name = ${route.params.name}`,
			limit: 1,
		});
		player.value = _player.length ? _player[0] : undefined;
	} catch (err) {
		console.error(err);
		if (err instanceof Error) alert(`Error loading player: ${err.message}`);
	}

	loading.value = false;
}

onMounted(load);
watch(() => route.params.name, load);
</script>

<template>
	<v-progress-linear v-if="loading" indeterminate />
	<v-sheet v-else-if="!player" :elevation="1" rounded class="pa-4">
		<v-alert type="error">Player not found</v-alert>
	</v-sheet>
	<v-sheet v-else :elevation="1" rounded>
		<v-toolbar>
			<v-toolbar-title>
				{{ player.Name }}
				<span v-if="player.LastName" class="text-grey">{{ player.LastName }}</span>
				<v-chip size="small" class="ml-2">Level {{ player.Level }} {{ getClassName(player.Class) }}</v-chip>
			</v-toolbar-title>
		</v-toolbar>

		<v-card-text>
			<PlayerInfo :player="player" />

			<PlayerItemsSection :player="player" />

			<PlayerMapSection :player="player" />

			<PlayerQuests :player="player" />

			<PlayerDeathLog :player="player" />
		</v-card-text>
	</v-sheet>
</template>
