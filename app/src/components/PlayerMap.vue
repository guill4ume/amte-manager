<script lang="ts" setup>
import {
	circleMarker,
	CRS,
	imageOverlay,
	latLng,
	map as LeafletMap,
	Map,
	LatLngBoundsLiteral,
	Marker,
	polyline,
	Polyline,
} from "leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { onMounted, ref, watch, computed } from "vue";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { DaocMaps, DaocMiniMaps } from "@/models/DaocMaps";

delete (Icon as any).Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
	iconRetinaUrl,
	iconUrl,
	shadowUrl,
});

interface MapMarker {
	x: number;
	y: number;
	region: number;
	color: string;
	label?: string;
	icon?: string;
	size?: number;
	isPath?: boolean;
	pathIndex?: number;
}

const props = defineProps<{
	region: number;
	markers?: MapMarker[];
	height?: string | number;
}>();

let leafletMap: Map | null = null;
let markerObjects: (Marker | any)[] = [];
let pathLine: Polyline | null = null;

const refMap = ref<HTMLDivElement | null>(null);
const loading = ref(false);
const currentRegion = ref<number | null>(null);

const filteredMarkers = computed(() => {
	return (props.markers || []).filter((m) => m.region === props.region);
});

function clearMarkers() {
	for (const m of markerObjects) m.remove();
	markerObjects = [];
	if (pathLine) {
		pathLine.remove();
		pathLine = null;
	}
}

function daocToLatLng(x: number, y: number) {
	return latLng({
		lat: -y / 8192,
		lng: x / 8192,
	});
}

async function initMap() {
	if (!refMap.value || !props.region) return;

	loading.value = true;
	if (leafletMap) {
		leafletMap.off();
		leafletMap.remove();
		leafletMap = null;
		await new Promise((r) => setTimeout(r, 50));
	}

	const current = DaocMiniMaps.find((r) => r.id === props.region);
	if (!current) {
		loading.value = false;
		return;
	}

	currentRegion.value = props.region;

	leafletMap = LeafletMap(refMap.value, {
		crs: CRS.Simple,
		minZoom: 2,
		maxZoom: 10,
		preferCanvas: true,
	});

	const map = DaocMaps[current.id];
	let mapBounds: LatLngBoundsLiteral = [
		[1000, 10000],
		[-1000, -1000],
	];

	for (const zone of current.zones) {
		let bounds: LatLngBoundsLiteral = [
			[-(zone.offsetY + zone.height) / 8192, zone.offsetX / 8192],
			[-(zone.offsetY / 8192), (zone.offsetX + zone.width) / 8192],
		];
		const tile = map?.tiles?.find((t) => t.src === zone.src);

		if (bounds[0].every((i) => i === 0) && bounds[1].every((i) => i === 0)) {
			bounds = tile?.bounds ?? bounds;
		} else {
			const add = tile?.bounds ?? [
				[0, 0],
				[0, 0],
			];
			bounds[0][0] += add[1][0];
			bounds[0][1] += add[0][1];
			bounds[1][0] += add[1][0];
			bounds[1][1] += add[0][1];
		}
		imageOverlay(zone.src, bounds).addTo(leafletMap);
		mapBounds = [
			[Math.min(bounds[0][0], mapBounds[0][0]), Math.min(bounds[0][1], mapBounds[0][1])],
			[Math.max(bounds[1][0], mapBounds[1][0]), Math.max(bounds[1][1], mapBounds[1][1])],
		];
	}
	leafletMap.fitBounds(mapBounds);

	addMarkers();
	loading.value = false;
}

function addMarkers() {
	if (!leafletMap) return;
	clearMarkers();

	// Separate path markers and regular markers
	const pathMarkers = filteredMarkers.value.filter(m => m.isPath).sort((a, b) => (a.pathIndex || 0) - (b.pathIndex || 0));
	const regularMarkers = filteredMarkers.value.filter(m => !m.isPath);

	// Draw the path line connecting historic positions
	if (pathMarkers.length > 1) {
		const pathPoints = pathMarkers.map(m => daocToLatLng(m.x, m.y));
		pathLine = polyline(pathPoints, {
			color: '#FFA500',
			weight: 2,
			opacity: 0.6,
			dashArray: '5, 5',
		}).addTo(leafletMap);
	}

	// Add regular markers
	for (const m of regularMarkers) {
		const pos = daocToLatLng(m.x, m.y);
		const size = m.size || 8;

		const markerObj = circleMarker(pos, {
			fill: true,
			fillOpacity: 0.9,
			weight: 2,
			color: m.color,
			fillColor: m.color,
			radius: size,
		}).addTo(leafletMap);

		if (m.label) {
			markerObj.bindTooltip(m.label, { permanent: false, direction: "top" });
		}

		markerObjects.push(markerObj);
	}
}

function focus(x: number, y: number, options: { zoom?: number; duration?: number; onlyIfNotVisible?: boolean; } = {}) {
	if (!leafletMap) return;
	const pos = daocToLatLng(x, y);
	if (!leafletMap.getBounds().contains(pos))
		leafletMap.flyTo(pos, options.zoom ?? leafletMap.getZoom(), { animate: true, duration: (options.duration ?? 250) / 1000 });
}

defineExpose({
	focus,
});

onMounted(initMap);
watch(() => props.region, initMap);
watch(() => props.markers, addMarkers, { deep: true });
</script>

<template>
	<div class="player-map-container" :style="{ height: typeof height === 'number' ? height + 'px' : (height || '300px') }">
		<v-progress-linear v-if="loading" indeterminate class="map-loading" />
		<div ref="refMap" class="player-map-view" />
	</div>
</template>

<style scoped>
.player-map-container {
	position: relative;
	width: 100%;
	border-radius: 4px;
	overflow: hidden;
}

.player-map-view {
	height: 100%;
	width: 100%;
	z-index: 1;
}

.map-loading {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
}
</style>
