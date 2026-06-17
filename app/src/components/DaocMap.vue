<script lang="ts" setup>
import {
	circleMarker,
	CRS,
	imageOverlay,
	latLng,
	map as LeafletMap,
	Map,
	CircleMarkerOptions,
	LatLngBoundsLiteral,
	icon,
	LatLng,
	Marker,
	marker,
	Point,
	LatLngBounds,
} from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-rotatedmarker";
import { Icon } from "leaflet";
import { debounce } from "../debounce";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { DB } from "@/main";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { DaocMapInfo, DaocMaps, DaocMiniMaps } from "@/models/DaocMaps";
import { DaocClasses } from "@/models/DaocClasses";

/* This code is needed to properly load the images in the Leaflet CSS */
delete (Icon as any).Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
	iconRetinaUrl,
	iconUrl,
	shadowUrl,
});

const props = defineProps<{
	map: number | string;
	mobId?: string;
	defaultSearch?: string;
}>();

let leafletMap: Map;
let markers: Record<string, any> = {};
let npcs: any[] = [];

const specificMobs = computed(() => new Set([props.mobId].filter((i) => !!i) as string[]));
const search = ref(props.defaultSearch ?? "");
const npcTypes = ref(["Aggressive", "Peace", "Teleport", "Players"]);
const playerLevel = ref(50);
const loading = ref(false);
const realtime = ref(false);
const selected = ref<any>(undefined);
const debugPos = ref("");

const refMap = ref<HTMLDivElement | null>(null);
const refPopup = ref<HTMLDivElement | null>(null);

function getConLevel(level: number, compareLevel: number) {
	const constep = Math.max(1, (level + 9) / 10) | 0;
	const stepping = 1.0 / constep;
	const leveldiff = level - compareLevel;
	return Math.min(3, Math.max(-3, 0 - leveldiff * stepping)) | 0;
}

const livingFilter = computed(() => {
	let filter = (npc: any) => true;
	if (search.value) {
		const regex = new RegExp(search.value, "i");
		const _filter = filter;
		filter = (npc) => (_filter(npc) && regex.test(npc.Name)) || regex.test(npc.Guild) || regex.test(npc.Level);
	}
	if (npcTypes.value.length) {
		let subFilter = (npc: any) => false;
		if (npcTypes.value.includes("Aggressive")) {
			const _subFilter = subFilter;
			subFilter = (npc) => _subFilter(npc) || ((npc.Flags & 16) === 0 && npc.Realm === 0);
		}
		if (npcTypes.value.includes("Teleport")) {
			const _subFilter = subFilter;
			subFilter = (npc) => _subFilter(npc) || ((npc.Flags & 28) === 28 && npc.Model === 1);
		}
		if (npcTypes.value.includes("Peace")) {
			const _subFilter = subFilter;
			subFilter = (npc) =>
				_subFilter(npc) ||
				(((npc.Flags & 16) !== 0 || npc.Realm !== 0) && ((npc.Flags & 12) !== 12 || npc.Model !== 1));
		}
		if (npcTypes.value.includes("Players")) {
			const _subFilter = subFilter;
			subFilter = (liv) => _subFilter(liv) || liv.Type === 1;
		}

		const _filter = filter;
		filter = (npc) => !specificMobs.value.has(npc.Mob_ID) && _filter(npc) && subFilter(npc);
	}
	return filter;
});

function clearMarkers() {
	for (const m of Object.values(markers)) m.remove();
	markers = {};
}

async function initMap() {
	if (!refMap.value || !props.map) return;

	loading.value = true;
	if (leafletMap) {
		npcs.length = 0;
		try {
			leafletMap.off();
			leafletMap.remove();
		} catch (e) {
			console.error("Error removing leafletMap:", e);
		}
		leafletMap = null as any;
		await new Promise((r) => setTimeout(r, 50));
	}

	if (refMap.value && (refMap.value as any)._leaflet_id) {
		delete (refMap.value as any)._leaflet_id;
	}

	const current = DaocMiniMaps.find((r) => r.id === ((props.map as any) | 0));
	if (!current) {
		loading.value = false;
		console.error("map not found", props.map);
		return;
	}

	leafletMap = LeafletMap(refMap.value, {
		crs: CRS.Simple,
		minZoom: 3,
		maxZoom: 13,
		preferCanvas: true,
	});

	const map = DaocMaps[current.id];
	let mapBounds: LatLngBoundsLiteral = [
		[1000, 10000],
		[-1000, -1000],
	];
	const tiles: DaocMapInfo["tiles"] = [];
	for (const zone of current.zones) {
		let bounds: LatLngBoundsLiteral = [
			[-(zone.offsetY + zone.height) / 8192, zone.offsetX / 8192],
			[-(zone.offsetY / 8192), (zone.offsetX + zone.width) / 8192],
		];
		const tile = map.tiles.find((t) => t.src === zone.src);
		if (tile) tiles.push(tile);

		if (bounds[0].every((i) => i === 0) && bounds[1].every((i) => i === 0)) {
			bounds = tile?.bounds ?? bounds;
		} else {
			const add = tile?.bounds ?? [
				[0, 0],
				[0, 0],
			];
			// add zone offsets
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

	leafletMap.on("mousemove", (ev) => {
		const { X, Y } = latLngToDaoc(ev.latlng);
		let [lx, ly] = [X / 8192, Y / 8192];
		const zone = current.zones.find(
			(z) => z.offsetX <= lx && lx < z.offsetX + (z.width || 8) && z.offsetY <= ly && ly < z.offsetY + (z.height || 8)
		);
		if (zone) [lx, ly] = [X - zone.offsetX, Y - zone.offsetY];
		const tile = tiles.find((t) => new LatLngBounds(t.bounds).contains(ev.latlng));
		if (tile)
			[lx, ly] = [X - latLngToDaoc(new LatLng(...tile.bounds[0])).X, Y - latLngToDaoc(new LatLng(...tile.bounds[1])).Y];
		const zoneId = (zone?.src ?? tile?.src ?? "maps/.jpg").substring(6).substring(0, 3);
		const loc = zone || tile ? `loc x:${lx}, y:${ly}, z:${zoneId}` : "";
		debugPos.value = `gloc x:${X}, y:${Y} ${loc}`;
	});
}

const refreshMarkers = () => {
	let getMarkerProps = (npc: any): CircleMarkerOptions => ({
		fill: true,
		fillOpacity: 1,
		weight: 1,
		color: npc.Flags & 16 || npc.Realm !== 0 ? "#0e0" : "#111",
		fillColor: (npc.Flags & 16) === 0 && npc.Realm === 0 ? "#b02b2b" : "#00b0c7",
		radius: Math.min(15, Math.max(5, npc.Level / 10)),
	});
	if (playerLevel.value > 0) {
		const colors = ["#8e8e8e", "#45da45", "#1b1bdb", "#e4e441", "#db9d40", "#e62828", "#7f20f1"];
		const _getMarkerProps = getMarkerProps;
		getMarkerProps = (npc) => {
			const conlvl = getConLevel(playerLevel.value, parseInt(npc.Level)); // -3 to 3
			return {
				..._getMarkerProps(npc),
				fillColor: (npc.Flags & 16) === 0 && npc.Realm === 0 ? colors[conlvl + 3] ?? "#0bcccc" : "#00b0c7",
				radius: 6,
			};
		};
	}
	if (specificMobs.value.size > 0) {
		const _getMarkerProps = getMarkerProps;
		getMarkerProps = (npc) => {
			if (!specificMobs.value.has(npc.Mob_ID)) return _getMarkerProps(npc);
			return {
				..._getMarkerProps(npc),
				fillColor: "#ffffff",
				radius: 15,
				weight: 1,
			};
		};
	}

	for (const npc of npcs.filter(livingFilter.value)) {
		if (npc.Mob_ID in markers) continue;
		const marker = circleMarker(daocToLatLng(npc), getMarkerProps(npc))
			.addTo(leafletMap)
			.bindPopup(() => {
				selected.value = npc;
				return refPopup.value as any;
			});
		markers[npc.Mob_ID] = marker;
	}
	for (const npc of npcs.filter((npc) => specificMobs.value.has(npc.Mob_ID))) {
		if (npc.Mob_ID in markers) continue;

		const marker = circleMarker(daocToLatLng(npc), getMarkerProps(npc))
			.addTo(leafletMap)
			.bindPopup(() => {
				selected.value = npc;
				return refPopup.value as any;
			});
		markers[npc.Mob_ID] = marker;
	}
};

const livings = ref<Record<string, any>>({});
const players = ref<Record<string, any>>({});
const groups = ref<{ InternalID: string; leader: boolean }[][]>([]);
const guilds: Record<string, any> = {};
const playersExpanded = ref(true);

const connectedPlayers = computed(() => {
	return Object.values(livings.value)
		.filter((liv: any) => liv.Type === 1 && liv.Region == props.map)
		.map((liv: any) => ({
			...liv,
			...players.value[liv.InternalID],
		}))
		.sort((a, b) => a.Name.localeCompare(b.Name));
});

function selectPlayer(player: any) {
	const m = markers[player.InternalID];
	if (m) {
		const pos = latLng({
			lat: -parseInt(player.Position.Y) / 8192,
			lng: parseInt(player.Position.X) / 8192,
		});
		leafletMap.panTo(pos);
		m.openPopup();
	}
}

let updateRealtimeInterval: any;
let websocket: WebSocket | undefined;
const refresh = debounce(async () => {
	clearMarkers();

	const resp = await DB.select({
		table: "mob",
		fields: "Mob_ID, Name, Guild, Level, X, Y, Flags, Model, Realm, ClassType, NPCTemplateID, AggroLevel, AggroRange",
		where: `Region = ${props.map}`,
		offset: 0,
		limit: 200000,
	});
	npcs = resp[0] || [];

	if (!realtime.value) {
		if (websocket) {
			websocket.close();
			websocket = undefined;
		}

		refreshMarkers();
		loading.value = false;
		return;
	}

	for (const m of Object.values(markers)) m.remove();
	markers = {};
	if (!websocket) {
		try {
			let url = `${DB.url}/world/ws`.replace("http", "ws");
			if (!/^ws/.test(url))
				url = `${document.location.protocol}//${document.location.host}${url}`.replace("http", "ws");
			websocket = new WebSocket(url);
			websocket.onopen = () => {
				const mapId = typeof props.map === "string" ? parseInt(props.map) : props.map;
				websocket?.send(JSON.stringify({ Action: "listen", Regions: [mapId] }));
				websocket?.send(JSON.stringify({ Action: "refresh" }));
			};
		} catch (ex) {
			console.error(ex);
		}
	} else {
		const mapId = typeof props.map === "string" ? parseInt(props.map) : props.map;
		websocket?.send(JSON.stringify({ Action: "listen", Regions: [mapId] }));
		websocket?.send(JSON.stringify({ Action: "refresh" }));
	}
	if (!websocket) throw new Error("Error with websocket");

	let createCircleMarker = (pos: LatLng, liv: any, fromDb: any) =>
		circleMarker(pos, {
			fill: true,
			fillOpacity: 1,
			weight: liv.Type === 1 ? 1 : 1,
			color: liv.Type === 1 ? "#001" : fromDb.Flags & 16 || fromDb.Realm !== 0 ? "#0e0" : "#111",
			fillColor: liv.Type === 1 ? "#EEEE11" : (fromDb.Flags & 16) === 0 && fromDb.Realm === 0 ? "#b02b2b" : "#00b0c7",
			radius: liv.Type === 1 ? 6 : 5,
		});

	const arrowIcon = icon({
		iconUrl: "mapIcon/icon.svg",
		iconSize: new Point(15, 15),
	});
	let createArrowMarker = (pos: LatLng, liv: any, fromDb: any) => {
		const m: any = marker(pos, { icon: arrowIcon, zIndexOffset: 10 - liv.Type });
		m.setRotationOrigin("center");
		return m;
	};

	websocket.onmessage = async (ev) => {
		const { events, objects } = JSON.parse(ev.data);
		for (const event of events) {
			switch (event.Event) {
				case "delete":
					const marker: Marker = markers[event.ID];
					if (!marker) break;
					marker.remove();
					delete markers[event.ID];
					break;
				case "group":
					groups.value = event.Groups;
					break;
			}
		}
		for (const liv of objects) {
			livings.value[liv.InternalID] = liv;
			if (liv.Region != props.map) continue;
			const npc = npcs.find((n) => n.Mob_ID === liv.InternalID);
			if (liv.Type === 2 && (!npc || !livingFilter.value(npc))) continue;

			const pos = latLng({
				lat: -parseInt(liv.Position.Y) / 8192,
				lng: parseInt(liv.Position.X) / 8192,
			});

			let marker = markers[liv.InternalID];
			if (!marker) {
				marker = createCircleMarker(pos, liv, npc)
					.addTo(leafletMap)
					.bindPopup(() => {
						selected.value = {
							...livings.value[liv.InternalID],
							...liv,
							...npc,
							...players.value[liv.InternalID],
						};
						return refPopup.value as any;
					});
				markers[liv.InternalID] = marker;
			}
			marker.setLatLng(pos);
			// marker.setRotationAngle((liv.Heading * 360) / 4096 + 90);

			if (selected.value?.InternalID === liv.InternalID) selected.value = { ...selected.value, ...liv, ...npc };
		}

		await new Promise((r) => setTimeout(r, 200));
		websocket?.send(JSON.stringify({ Action: "update" }));
	};

	if (!updateRealtimeInterval) {
		let last = Date.now();
		updateRealtimeInterval = setInterval(() => {
			const dt = Date.now() - last;
			last = Date.now();
			for (const liv of Object.values(livings.value)) {
				if (liv.Velocity.X === 0 || liv.Velocity.Y === 0) continue;
				liv.Position.X += liv.Velocity.X * dt;
				liv.Position.Y += liv.Velocity.Y * dt;
				const pos = latLng({
					lat: -parseInt(liv.Position.Y) / 8192,
					lng: parseInt(liv.Position.X) / 8192,
				});
				markers[liv.InternalID]?.setLatLng(pos);
			}
		}, 10);
	}

	loading.value = false;
}, 200);

const refreshLight = () => {
	if (realtime.value) {
		refresh();
	} else {
		clearMarkers();
		refreshMarkers();
	}
};

onMounted(async () => {
	await initMap();
	await refresh();

	// Load players
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
	const [rows] = await DB.select({
		table: "dolcharacters",
		fields,
		limit: 50000,
	});
	players.value = Object.fromEntries(rows.map((r) => [r.DOLCharacters_ID, r]));

	const [guildRows] = await DB.select({
		table: "guild",
		fields: ["GuildID", "GuildName"],
		limit: 50000,
	});
	for (const g of guildRows) guilds[g.GuildID] = g;
});
onUnmounted(() => {
	realtime.value = false;
	if (websocket) {
		websocket.close();
		websocket = undefined;
	}
	clearMarkers();
	clearInterval(updateRealtimeInterval);
});
watch([search, npcTypes, playerLevel], refreshLight);
watch(
	() => props.map,
	async () => {
		await initMap();
		await refresh();
	}
);
watch(
	() => props.defaultSearch,
	() => (search.value = props.defaultSearch != null ? props.defaultSearch : search.value)
);
watch(() => props.mobId, refreshMarkers);
watch(realtime, refresh);

function daocToLatLng(npc: { X: string; Y: string }) {
	// return latLng({
	// 	lat: 108 - (parseInt(npc.Y) / 8192),
	// 	lng: parseInt(npc.X) / 8192,
	// });
	return latLng({
		lat: -parseInt(npc.Y) / 8192,
		lng: parseInt(npc.X) / 8192,
	});
}
function latLngToDaoc(coord: LatLng) {
	return {
		X: coord.lng * 8192,
		Y: coord.lat * -8192,
	};
}

const selectedGroup = computed(() => {
	if (selected.value?.Type !== 1) return undefined;
	const group = groups.value.find((g) => g.find((m) => m.InternalID === selected.value.InternalID));
	if (!group) return undefined;
	return group.map((m) => ({
		member: {
			...players.value[m.InternalID],
			...livings.value[m.InternalID],
		},
		leader: m.leader,
	}));
});
</script>

<template>
	<div>
		<v-row>
			<v-col sm="5">
				<v-text-field
					v-model="search"
					prepend-inner-icon="mdi-magnify"
					label="Search"
					variant="underlined"
					hide-details
				/>
			</v-col>
			<v-col sm="3">
				<v-select
					label="NPC Types"
					multiple
					:items="['Aggressive', 'Peace', 'Teleport', 'Players']"
					v-model="npcTypes"
					hide-details
					variant="underlined"
				/>
			</v-col>
			<v-col sm="2">
				<v-text-field
					label="Player level"
					type="number"
					v-model.number="playerLevel"
					hide-details
					variant="underlined"
				/>
			</v-col>
			<v-col sm="2">
				<v-checkbox label="Realtime" v-model="realtime" hide-details />
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-progress-linear :active="loading" indeterminate />
				<div class="map-container">
					<div ref="refMap" class="map-view" />
					<div v-if="realtime && connectedPlayers.length > 0" class="players-panel">
						<div class="players-header" @click="playersExpanded = !playersExpanded">
							<v-icon size="small">{{ playersExpanded ? "mdi-chevron-down" : "mdi-chevron-right" }}</v-icon>
							<span>Players ({{ connectedPlayers.length }})</span>
						</div>
						<v-expand-transition>
							<div v-show="playersExpanded" class="players-list">
								<div
									v-for="player in connectedPlayers"
									:key="player.InternalID"
									class="player-item"
									:class="{ selected: selected?.InternalID === player.InternalID }"
									@click="selectPlayer(player)"
								>
									<span class="player-name">{{ player.Name }}</span>
									<span class="player-level">{{ player.Level }}</span>
									<div class="player-bars">
										<div class="health-bar" :style="{ width: player.Health + '%' }"></div>
									</div>
								</div>
							</div>
						</v-expand-transition>
					</div>
				</div>
				<div>{{ debugPos }}</div>
			</v-col>
		</v-row>

		<div style="display: none">
			<div ref="refPopup" style="min-width: 187px">
				<template v-if="!selected"> Nothing selected </template>
				<template v-else-if="!('Type' in selected) || selected.Type === 2">
					<strong> {{ selected.Name }} </strong>
					<br />
					<span v-if="selected.Guild"> {{ selected.Guild }} <br /></span>
					<em v-if="selected.NPCTemplateID > 0">
						(Lv. {{ selected.Level }}, {{ selected.ClassType }},
						<router-link :to="{ name: 'npctemplateList', query: { search: selected.NPCTemplateID } }" target="_blank">
							{{ selected.NPCTemplateID }}
						</router-link>
						)
					</em>
					<em v-else>(Lv. {{ selected.Level }}, {{ selected.ClassType }})</em>
					<br />
					<img :src="`/npcs/${selected.Model}.jpg`" style="display: block; margin: auto; max-height: 128px" />
				</template>
				<template v-else-if="selected.Type === 1">
					<router-link :to="{ name: 'player', params: { name: selected.Name } }">
						{{ selected.Name }} {{ selected.LastName ?? "" }}
					</router-link>
					(acc: {{ selected.AccountName }})
					<br />
					<span v-if="selected.GuildID"> {{ guilds[selected.GuildID]?.GuildName }} <br /></span>
					<em> (Lv. {{ selected.Level }}, {{ DaocClasses.find(({id}) => id === selected.Class)?.name }}) </em>
					<br />
					<v-progress-linear v-model="selected.Health" :max="100" color="#EE2222" />
					<v-progress-linear v-model="selected.Endu" :max="100" color="#22EE22" />
					<v-progress-linear v-model="selected.Mana" :max="100" color="#EEEE22" />
					<template v-if="selectedGroup">
						Groupe :<br />
						<table style="width: 100%">
							<tr v-for="char in selectedGroup">
								<td style="width: 50px">
									<v-progress-linear v-model="char.member.Health" :max="100" color="#EE2222" />
									<v-progress-linear v-model="char.member.Endu" :max="100" color="#22EE22" />
									<v-progress-linear v-model="char.member.Mana" :max="100" color="#EEEE22" />
								</td>
								<td>{{ char.member.Name }}</td>
								<td>{{ char.member.Level }}</td>
							</tr>
						</table>
					</template>
				</template>
			</div>
		</div>
	</div>
</template>

<style scoped>
.map-container {
	position: relative;
	height: 400px;
	min-height: 400px;
}

.map-view {
	height: 100%;
	min-height: 400px;
	z-index: 1;
}

.players-panel {
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.8);
	border-radius: 4px;
	min-width: 140px;
	max-width: 180px;
	font-size: 0.8em;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.players-header {
	display: flex;
	align-items: center;
	gap: 4px;
	padding: 4px 8px;
	cursor: pointer;
	user-select: none;
	color: #fff;
	font-weight: 500;
}

.players-header:hover {
	background: rgba(255, 255, 255, 0.1);
}

.players-list {
	max-height: 150px;
	overflow-y: auto;
}

.player-item {
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 3px 8px;
	cursor: pointer;
	color: #eee;
	border-left: 2px solid transparent;
}

.player-item:hover {
	background: rgba(255, 255, 255, 0.1);
}

.player-item.selected {
	background: rgba(238, 238, 17, 0.2);
	border-left-color: #eeee11;
}

.player-name {
	flex: 1;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.player-level {
	color: #aaa;
	font-size: 0.85em;
}

.player-bars {
	width: 30px;
	height: 4px;
	background: #333;
	border-radius: 2px;
	overflow: hidden;
}

.health-bar {
	height: 100%;
	background: #ee2222;
	transition: width 0.3s;
}
</style>
