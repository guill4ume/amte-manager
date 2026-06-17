<script lang="ts" setup>
import DaocMap from "@/components/DaocMap.vue";
import { ref, watch } from "vue";
import { DaocMapInfo, DaocMaps } from "@/models/DaocMaps";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const allMaps = Object.values(DaocMaps);

function loadMap(mapId: unknown) {
	if (typeof mapId === "string" && !isNaN(parseInt(mapId))) currentMap.value = DaocMaps[parseInt(mapId)];
}

function getRouteId() {
	let nb = NaN;
	if (typeof route.params.id === "string") nb = parseInt(route.params.id);
	return isNaN(nb) ? 51 : nb;
}

const currentMap = ref(DaocMaps[getRouteId()]);

watch(currentMap, () => router.push({ name: route.name ?? "maps", params: { id: currentMap.value?.id } }));
watch(route, () => loadMap(getRouteId()));
loadMap(!isNaN(getRouteId()) ? getRouteId() : 51);
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="Maps">
			<v-autocomplete
				v-model="currentMap"
				:items="allMaps"
				:item-title="(v: DaocMapInfo) => `${v.id} - ${v.name}`"
				return-object
				prepend-inner-icon="mdi-map"
				label="Region"
				variant="underlined"
				hide-details
			/>
		</v-toolbar>
		<DaocMap v-if="currentMap?.id" :map="currentMap.id" />
	</v-sheet>
</template>
