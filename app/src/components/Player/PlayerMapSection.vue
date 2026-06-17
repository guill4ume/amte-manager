<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import GroupBox from "@/components/Utils/GroupBox.vue";
import PlayerMap from "@/components/PlayerMap.vue";
import { DaocMiniMaps } from "@/models/DaocMaps";
import { DB } from "@/main";

const props = defineProps<{
	player: any;
}>();

const loading = ref(true);
const historicPositions = ref<any[]>([]);
const killsAsKiller = ref<any[]>([]);
const killsAsKilled = ref<any[]>([]);
const selectedMapRegion = ref<number>(1);
const playerMapRef = ref<any>(null);
const timelineRange = ref<[number, number]>([0, 100]);

// Playback controls
const isPlaying = ref(false);
const playbackSpeed = ref(500); // ms between events
const playbackInterval = ref<number | null>(null);
const currentEventIndex = ref(0);

// All events sorted chronologically, with region and coordinates
const allEventsSorted = computed(() => {
	const events: { timestamp: number; type: string; region: number; x: number; y: number; id?: number }[] = [];

	for (const p of historicPositions.value) {
		const d = new Date(p.LastTimeRowUpdated).getTime();
		if (!isNaN(d)) events.push({ timestamp: d, type: "position", region: p.Region, x: p.X, y: p.Y, id: p.Id });
	}
	for (const k of killsAsKiller.value) {
		const d = new Date(k.DeathDate).getTime();
		if (!isNaN(d)) events.push({ timestamp: d, type: "kill", region: k.Region, x: k.X, y: k.Y });
	}
	for (const k of killsAsKilled.value) {
		const d = new Date(k.DeathDate).getTime();
		if (!isNaN(d)) events.push({ timestamp: d, type: "death", region: k.Region, x: k.X, y: k.Y });
	}

	return events.sort((a, b) => a.timestamp - b.timestamp + ((a.id ?? 0) - (b.id ?? 0) / 1000000));
});

function startPlayback() {
	if (isPlaying.value) return;
	isPlaying.value = true;

	// Reset to start if at end
	if (currentEventIndex.value >= allEventsSorted.value.length - 1) {
		currentEventIndex.value = 0;
		timelineRange.value = [0, 0];
	}

	playbackInterval.value = window.setInterval(() => {
		if (currentEventIndex.value < allEventsSorted.value.length) {
			if (currentEventIndex.value > 0) {
				const previous = allEventsSorted.value[currentEventIndex.value - 1];
				let cur = allEventsSorted.value[currentEventIndex.value];
				while (previous.x === cur.x && previous.y === cur.y && previous.type === cur.type && currentEventIndex.value < allEventsSorted.value.length) {
					currentEventIndex.value += 1;
					cur = allEventsSorted.value[currentEventIndex.value];
				}
			}
			const event = allEventsSorted.value[currentEventIndex.value];
			const { min, max } = timelineMinMax.value;
			const range = max - min;
			const percent = range > 0 ? ((event.timestamp - min) / range) * 100 : 100;
			timelineRange.value = [timelineRange.value[0], Math.min(100, percent)];

			// Change region if needed
			if (event.region && selectedMapRegion.value !== event.region) {
				selectedMapRegion.value = event.region;
			}

			// Center and zoom on event if coordinates available
			playerMapRef.value.focus(event.x, event.y, { onlyIfNotVisible: true, duration: playbackSpeed.value - 5 });

			currentEventIndex.value++;
		}

		// Stop at end
		if (currentEventIndex.value >= allEventsSorted.value.length) {
			stopPlayback();
		}
	}, playbackSpeed.value);
}

function stopPlayback() {
	isPlaying.value = false;
	if (playbackInterval.value !== null) {
		clearInterval(playbackInterval.value);
		playbackInterval.value = null;
	}
}

function togglePlayback() {
	if (isPlaying.value) {
		stopPlayback();
	} else {
		startPlayback();
	}
}

function resetPlayback() {
	stopPlayback();
	currentEventIndex.value = 0;
	timelineRange.value = [0, 100];
}

// Restart interval when speed changes during playback
watch(playbackSpeed, () => {
	if (isPlaying.value) {
		stopPlayback();
		startPlayback();
	}
});

onUnmounted(() => {
	stopPlayback();
});

async function load() {
	if (!props.player) {
		loading.value = false;
		return;
	}

	loading.value = true;
	selectedMapRegion.value = props.player.Region;

	try {
		// Load death logs (player as killer - only against other players)
		const [_killsAsKiller] = await DB.selectRaw(
			`* FROM deathlog WHERE Killer = '${props.player.Name}' AND KillerClass = 'DOL.GS.GamePlayer' ORDER BY Id DESC LIMIT 10000`,
		);
		killsAsKiller.value = _killsAsKiller;

		// Load death logs (player as killed - only killed by other players)
		const [_killsAsKilled] = await DB.selectRaw(
			`* FROM deathlog WHERE Killed = '${props.player.Name}' AND KilledClass = 'DOL.GS.GamePlayer' ORDER BY Id DESC LIMIT 10000`,
		);
		killsAsKilled.value = _killsAsKilled;

		// Load historic positions from rtinformation
		const [_historicPositions] = await DB.selectRaw(
			`* FROM rtinformation WHERE PlayerName = '${props.player.Name}' ORDER BY Id DESC LIMIT 10000`,
		);
		historicPositions.value = _historicPositions;
	} catch (err) {
		console.error("PlayerMapSection load error:", err);
	}
	loading.value = false;
}

onMounted(load);
watch(() => props.player, load);

// Timeline date range computed from data
const timelineMinMax = computed(() => {
	const dates: number[] = [];
	for (const k of killsAsKiller.value) {
		const d = new Date(k.DeathDate).getTime();
		if (!isNaN(d)) dates.push(d);
	}
	for (const k of killsAsKilled.value) {
		const d = new Date(k.DeathDate).getTime();
		if (!isNaN(d)) dates.push(d);
	}
	for (const p of historicPositions.value) {
		const d = new Date(p.LastTimeRowUpdated).getTime();
		if (!isNaN(d)) dates.push(d);
	}
	if (dates.length === 0) return { min: Date.now() - 86400000, max: Date.now() };
	return { min: Math.min(...dates), max: Math.max(...dates) };
});

// Convert slider value (0-100) to actual timestamp
function sliderToTimestamp(value: number): number {
	const { min, max } = timelineMinMax.value;
	return min + ((max - min) * value) / 100;
}

// Format timestamp for display
function formatTimelineDate(value: number): string {
	const ts = sliderToTimestamp(value);
	return new Date(ts).toLocaleDateString();
}

// Filtered data based on timeline range
const filteredHistoricPositions = computed(() => {
	const minTs = sliderToTimestamp(timelineRange.value[0]);
	const maxTs = sliderToTimestamp(timelineRange.value[1]);
	return historicPositions.value.filter((p) => {
		const d = new Date(p.LastTimeRowUpdated).getTime();
		return d >= minTs && d <= maxTs;
	});
});

const filteredKillsAsKiller = computed(() => {
	const minTs = sliderToTimestamp(timelineRange.value[0]);
	const maxTs = sliderToTimestamp(timelineRange.value[1]);
	return killsAsKiller.value.filter((k) => {
		const d = new Date(k.DeathDate).getTime();
		return d >= minTs && d <= maxTs;
	});
});

const filteredKillsAsKilled = computed(() => {
	const minTs = sliderToTimestamp(timelineRange.value[0]);
	const maxTs = sliderToTimestamp(timelineRange.value[1]);
	return killsAsKilled.value.filter((k) => {
		const d = new Date(k.DeathDate).getTime();
		return d >= minTs && d <= maxTs;
	});
});

// Available regions for map selector
const availableRegions = computed(() => {
	const regions = new Set<number>();
	if (props.player) {
		regions.add(props.player.Region);
		if (props.player.BindRegion) regions.add(props.player.BindRegion);
	}
	for (const k of filteredKillsAsKiller.value) regions.add(k.Region);
	for (const k of filteredKillsAsKilled.value) regions.add(k.Region);
	for (const p of filteredHistoricPositions.value) regions.add(p.Region);
	return DaocMiniMaps.filter((m) => regions.has(m.id)).map((m) => ({ value: m.id, title: `Region ${m.id}` }));
});

// Map markers combining all positions
const mapMarkers = computed(() => {
	const markers: any[] = [];
	if (!props.player) return markers;

	// Historic positions path (orange/yellow gradient based on recency)
	const regionPositions = filteredHistoricPositions.value.filter((p) => p.Region === selectedMapRegion.value);
	regionPositions.forEach((pos, index) => {
		// Older positions are more transparent/lighter
		const alpha = 0.3 + (0.7 * index) / Math.max(regionPositions.length - 1, 1);
		markers.push({
			x: pos.X,
			y: pos.Y,
			region: pos.Region,
			color: `rgba(255, 165, 0, ${alpha})`,
			label: `Historic position (${new Date(pos.LastTimeRowUpdated).toLocaleString()})`,
			size: 3,
			isPath: true,
			pathIndex: index,
		});
	});

	// Current position (green)
	markers.push({
		x: props.player.Xpos,
		y: props.player.Ypos,
		region: props.player.Region,
		color: "#00FF00",
		label: `${props.player.Name} (current position)`,
		size: 7,
	});

	// Bind position (blue)
	if (props.player.BindRegion) {
		markers.push({
			x: props.player.BindXpos,
			y: props.player.BindYpos,
			region: props.player.BindRegion,
			color: "#0088FF",
			label: `${props.player.Name} (bind point)`,
			size: 5,
		});
	}

	// Kills (red - where player killed someone)
	for (const kill of filteredKillsAsKiller.value) {
		markers.push({
			x: kill.X,
			y: kill.Y,
			region: kill.Region,
			color: "#FF4444",
			label: `Killed ${kill.Killed} (${new Date(kill.DeathDate).toLocaleString()})`,
			size: 5,
		});
	}

	// Deaths (purple - where player was killed)
	for (const death of filteredKillsAsKilled.value) {
		markers.push({
			x: death.X,
			y: death.Y,
			region: death.Region,
			color: "#AA44FF",
			label: `Killed by ${death.Killer} (${new Date(death.DeathDate).toLocaleString()})`,
			size: 5,
		});
	}

	return markers;
});
</script>

<template>
	<GroupBox title="Map - Positions & Death Events">
		<v-progress-linear v-if="loading" indeterminate />
		<template v-else>
			<v-row class="mb-2">
				<v-col cols="12" md="4">
					<v-select
						v-model="selectedMapRegion"
						:items="availableRegions"
						label="Select Region"
						density="compact"
						hide-details
					/>
				</v-col>
				<v-col cols="12" md="8">
					<div class="d-flex align-center flex-wrap ga-3">
						<div class="d-flex align-center">
							<span class="legend-dot" style="background: #00ff00"></span>
							<span class="text-caption">Current Position</span>
						</div>
						<div class="d-flex align-center">
							<span class="legend-dot" style="background: #0088ff"></span>
							<span class="text-caption">Bind Point</span>
						</div>
						<div class="d-flex align-center">
							<span class="legend-dot" style="background: #ffa500"></span>
							<span class="text-caption">Historic Path</span>
						</div>
						<div class="d-flex align-center">
							<span class="legend-dot" style="background: #ff4444"></span>
							<span class="text-caption">Kills</span>
						</div>
						<div class="d-flex align-center">
							<span class="legend-dot" style="background: #aa44ff"></span>
							<span class="text-caption">Deaths</span>
						</div>
					</div>
				</v-col>
			</v-row>
			<!-- Timeline Range Slider -->
			<v-row class="mb-2">
				<v-col cols="12">
					<div class="d-flex align-center ga-2">
						<v-btn
							:icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
							size="small"
							variant="tonal"
							:color="isPlaying ? 'warning' : 'success'"
							@click="togglePlayback"
						/>
						<v-btn icon="mdi-stop" size="small" variant="tonal" @click="resetPlayback" />
						<v-select
							v-model="playbackSpeed"
							:items="[
								{ value: 1000, title: '1s' },
								{ value: 500, title: '500ms' },
								{ value: 250, title: '250ms' },
								{ value: 100, title: '100ms' },
							]"
							label="Delay"
							density="compact"
							hide-details
							style="max-width: 100px"
						/>
						<span class="text-caption text-grey">{{ formatTimelineDate(timelineRange[0]) }}</span>
						<v-range-slider
							v-model="timelineRange"
							:min="0"
							:max="100"
							:step="1"
							density="compact"
							hide-details
							thumb-label
							class="flex-grow-1"
							@update:model-value="stopPlayback"
						>
							<template #thumb-label="{ modelValue }">
								{{ formatTimelineDate(modelValue) }}
							</template>
						</v-range-slider>
						<span class="text-caption text-grey">{{ formatTimelineDate(timelineRange[1]) }}</span>
					</div>
					<div class="text-caption text-center text-grey mt-1">
						Timeline filter: {{ formatTimelineDate(timelineRange[0]) }} - {{ formatTimelineDate(timelineRange[1]) }} ({{
							filteredHistoricPositions.length
						}}
						positions, {{ filteredKillsAsKiller.length }} kills, {{ filteredKillsAsKilled.length }} deaths)
						<span v-if="isPlaying || currentEventIndex > 0">
							— Event {{ currentEventIndex }}/{{ allEventsSorted.length }}</span
						>
					</div>
				</v-col>
			</v-row>
			<PlayerMap
				v-if="availableRegions.length > 0"
				ref="playerMapRef"
				:region="selectedMapRegion"
				:markers="mapMarkers"
				:height="400"
			/>
			<v-alert v-else type="info" density="compact">No map data available</v-alert>
		</template>
	</GroupBox>
</template>

<style scoped>
.legend-dot {
	width: 12px;
	height: 12px;
	border-radius: 50%;
	margin-right: 6px;
}
</style>
