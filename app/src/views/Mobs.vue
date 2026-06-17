<script lang="ts" setup>
import { debounce } from "@/debounce";
import { DB } from "@/main";
import { DataTableHeader, SortItem } from "@/vuetify.types";
import { onMounted, onUnmounted, ref, watch, nextTick } from "vue";
import { useTheme } from "vuetify";
import {
	CRS,
	imageOverlay,
	latLng,
	map as LeafletMap,
	Map,
	LatLngBoundsLiteral,
	LatLng,
	Marker,
	marker,
	divIcon,
	LatLngBounds,
} from "leaflet";
import "leaflet/dist/leaflet.css";
import { DaocMapInfo, DaocMaps, DaocMiniMaps } from "@/models/DaocMaps";

const theme = useTheme();

const headers: DataTableHeader[] = [
	{ key: "Mob_ID", title: "ID", align: "end", sortable: true },
	{ key: "Name", title: "Name", align: "start", sortable: true },
	{ key: "Guild", title: "Guild", align: "start", sortable: true },
	{ key: "actions", title: "Actions", sortable: false },
];

const mobs = ref<any[]>([]);
const mobTotal = ref(0);
const search = ref("");
const loading = ref(false);
const editorMode = ref<"list" | "form">("list");
const formLoading = ref(false);
const isEditing = ref(false);

const options = ref({
	groupBy: [],
	groupDesc: [],
	itemsPerPage: 10,
	multiSort: true,
	mustSort: false,
	page: 1,
	sortBy: [{ key: "Mob_ID", order: "desc" }],
});

const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref<SortItem[]>([{ key: "Mob_ID", order: "desc" }]);

const form = ref({
	Mob_ID: null as string | null,
	Name: "",
	Region: 51,
	X: 0,
	Y: 0,
	Z: 1800,
	Heading: 0,
	Model: 10,
	Guild: "",
});

// Leaflet map state
const refMap = ref<HTMLDivElement | null>(null);
let leafletMap: Map | null = null;
let activeMarkers: Marker[] = [];
let tempMarker: Marker | null = null;

// Custom sharp SVG markers
const npcIcon = divIcon({
	className: "npc-marker-icon",
	html: `
		<svg width="24" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24s12-15 12-24c0-6.63-5.37-12-12-12zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#2196F3"/>
			<circle cx="12" cy="12" r="4" fill="#FFFFFF"/>
		</svg>
	`,
	iconSize: [24, 36],
	iconAnchor: [12, 36],
	popupAnchor: [0, -32],
});

const tempIcon = divIcon({
	className: "temp-marker-icon",
	html: `
		<svg width="28" height="42" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24s12-15 12-24c0-6.63-5.37-12-12-12zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#FF5722"/>
			<circle cx="12" cy="12" r="4" fill="#FFFFFF"/>
		</svg>
	`,
	iconSize: [28, 42],
	iconAnchor: [12, 42],
});

function daocToLatLng(npc: { X: string | number; Y: string | number }) {
	return latLng({
		lat: -parseInt(npc.Y as string) / 8192,
		lng: parseInt(npc.X as string) / 8192,
	});
}

function latLngToDaoc(coord: LatLng) {
	return {
		X: coord.lng * 8192,
		Y: coord.lat * -8192,
	};
}

const load = debounce(async () => {
	loading.value = true;
	try {
		// Filter ONLY Region 51 and player-created NPCs (NPCTemplateID = -99)
		let where = "Region = 51 AND NPCTemplateID = -99";
		if (search.value) {
			const likeValue = search.value.replace(/'/g, "''");
			where += ` AND (Name like '%${likeValue}%' OR Guild like '%${likeValue}%')`;
		}
		const orderby = options.value.sortBy.map(({ key, order }: { key: string; order: string }) =>
			order === "desc" ? `${key} DESC` : key
		);
		if (orderby.length === 0) orderby.push("Mob_ID DESC");
		const offset = options.value.itemsPerPage * (options.value.page - 1);
		const [_mobs, total] = await DB.select({
			table: "mob",
			fields: "Mob_ID, Region, Name, Guild, Level, X, Y, Z, Heading, Model, ClassType",
			where,
			orderby: orderby.join(","),
			offset,
			limit: options.value.itemsPerPage,
		});
		mobs.value = _mobs;
		mobTotal.value = total;

		// Refresh the markers on the map
		refreshMapMarkers();
	} catch (err) {
		console.error("Failed to load mobs:", err);
	} finally {
		loading.value = false;
	}
});

async function initMap() {
	if (!refMap.value) return;

	if (leafletMap) {
		leafletMap.off();
		leafletMap.remove();
		leafletMap = null;
	}

	if (refMap.value && (refMap.value as any)._leaflet_id) {
		delete (refMap.value as any)._leaflet_id;
	}

	// Focus on Region 51 (Avalon)
	const current = DaocMiniMaps.find((r) => r.id === 51);
	if (!current) {
		console.error("Region 51 map info not found");
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

	// Register click listener to capture coordinates in form mode
	leafletMap.on("click", (ev) => {
		if (editorMode.value === "form") {
			const { X, Y } = latLngToDaoc(ev.latlng);
			form.value.X = Math.round(X);
			form.value.Y = Math.round(Y);
			updateTempMarker(ev.latlng);
		}
	});

	refreshMapMarkers();
}

function refreshMapMarkers() {
	if (!leafletMap) return;

	// Clear previous markers
	for (const m of activeMarkers) {
		m.remove();
	}
	activeMarkers = [];

	// Draw new markers
	for (const mob of mobs.value) {
		const pos = daocToLatLng(mob);
		const m = marker(pos, { icon: npcIcon, title: mob.Name });
		m.bindPopup(`
			<div class="pa-1">
				<h4 class="font-weight-bold">${mob.Name}</h4>
				<span class="text-caption">${mob.Guild ? `Guild: ${mob.Guild}` : 'No Guild'}</span><br/>
				<span class="text-caption">Loc: X: ${Math.round(mob.X)}, Y: ${Math.round(mob.Y)}, Z: ${Math.round(mob.Z)}</span>
			</div>
		`);
		m.addTo(leafletMap);
		activeMarkers.push(m);
	}
}

function updateTempMarker(latlng: LatLng) {
	if (!leafletMap) return;

	if (tempMarker) {
		tempMarker.setLatLng(latlng);
	} else {
		tempMarker = marker(latlng, {
			icon: tempIcon,
			draggable: true,
			title: "Placement Target (Drag me)",
		});
		tempMarker.on("dragend", (ev) => {
			const position = ev.target.getLatLng();
			const { X, Y } = latLngToDaoc(position);
			form.value.X = Math.round(X);
			form.value.Y = Math.round(Y);
		});
		tempMarker.addTo(leafletMap);
	}
}

function clearTempMarker() {
	if (tempMarker) {
		tempMarker.remove();
		tempMarker = null;
	}
}

function openNewEditor() {
	isEditing.value = false;
	form.value = {
		Mob_ID: null,
		Name: "",
		Region: 51,
		X: 534000, // Reasonable default coordinates for Region 51
		Y: 549000,
		Z: 1800,
		Heading: 0,
		Model: 10,
		Guild: "",
	};
	editorMode.value = "form";
	// Place temporary marker on map at default location
	const defaultPos = daocToLatLng(form.value);
	updateTempMarker(defaultPos);
	leafletMap?.panTo(defaultPos);
}

function openEditEditor(npc: any) {
	isEditing.value = true;
	form.value = {
		Mob_ID: npc.Mob_ID,
		Name: npc.Name,
		Region: parseInt(npc.Region) || 51,
		X: parseInt(npc.X) || 0,
		Y: parseInt(npc.Y) || 0,
		Z: parseInt(npc.Z) || 0,
		Heading: parseInt(npc.Heading) || 0,
		Model: parseInt(npc.Model) || 10,
		Guild: npc.Guild || "",
	};
	editorMode.value = "form";
	// Place temporary marker on map at edit location
	const editPos = daocToLatLng(form.value);
	updateTempMarker(editPos);
	leafletMap?.panTo(editPos);
}

function cancelEditor() {
	editorMode.value = "list";
	clearTempMarker();
}

async function saveNpc() {
	if (!form.value.Name) {
		alert("Please enter a name for the NPC");
		return;
	}

	formLoading.value = true;
	try {
		// Enforce safety rules: Level 1, DOL.GS.GameNPC, Size 50, TemplateID -1
		const npcData = {
			Name: form.value.Name,
			Region: 51, // Always focus on Region 51
			X: form.value.X,
			Y: form.value.Y,
			Z: form.value.Z,
			Heading: form.value.Heading,
			Model: form.value.Model,
			ClassType: "DOL.GS.GameNPC",
			Level: 1,
			Size: 50,
			Guild: form.value.Guild,
			Flags: 0,
			NPCTemplateID: -99,
		};

		if (isEditing.value && form.value.Mob_ID) {
			await DB.update("mob", npcData, `Mob_ID = '${form.value.Mob_ID}'`);
		} else {
			await DB.insert("mob", npcData);
		}
		editorMode.value = "list";
		clearTempMarker();
		load();
	} catch (err) {
		alert(`Error saving NPC: ${err}`);
	} finally {
		formLoading.value = false;
	}
}

async function removeNpc(npc: any) {
	if (!confirm(`Are you sure you want to delete NPC "${npc.Name}" (ID: ${npc.Mob_ID})?`)) {
		return;
	}
	loading.value = true;
	try {
		await DB.delete("mob", `Mob_ID = '${npc.Mob_ID}'`);
		load();
	} catch (err) {
		alert(`Error deleting NPC: ${err}`);
		loading.value = false;
	}
}

function handleRowClick(event: any, row: any) {
	const npc = row.item;
	if (npc && leafletMap) {
		const pos = daocToLatLng(npc);
		leafletMap.panTo(pos);
		leafletMap.setZoom(8);
		// Highlight or open popup for the marker
		const matchedMarker = activeMarkers.find((m) => {
			const latlng = m.getLatLng();
			return Math.abs(latlng.lat - pos.lat) < 0.0001 && Math.abs(latlng.lng - pos.lng) < 0.0001;
		});
		if (matchedMarker) {
			matchedMarker.openPopup();
		}
	}
}

function onImageError(event: Event) {
	const img = event.target as HTMLImageElement;
	// Gray question mark icon fallback
	img.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='%239E9E9E'><rect width='100' height='100' fill='%23EEEEEE'/><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z'/></svg>";
}

onMounted(() => {
	initMap();
	load();
});

watch(options, load);
watch(search, load);
</script>

<template>
	<v-sheet :elevation="1" rounded class="pa-4">
		<v-row>
			<!-- Left Column: Interactive Map -->
			<v-col cols="12" lg="8">
				<v-card class="elevation-2" height="100%">
					<v-card-title class="d-flex align-center py-2 px-4 border-bottom">
						<v-icon color="primary" class="mr-2">mdi-map-marker-radius</v-icon>
						<span class="font-weight-bold text-subtitle-1">Interactive Map (Region 51 - Avalon)</span>
						<v-spacer />
						<span v-if="editorMode === 'form'" class="text-caption text-orange-darken-3 font-weight-bold">
							📍 Click the map to set location or drag the orange marker
						</span>
					</v-card-title>
					<v-card-text class="pa-0">
						<div ref="refMap" class="map-view" />
					</v-card-text>
				</v-card>
			</v-col>

			<!-- Right Column: List or Form Editor -->
			<v-col cols="12" lg="4">
				<!-- LIST MODE -->
				<v-card v-if="editorMode === 'list'" class="elevation-2" height="100%">
					<v-card-title class="d-flex align-center py-2 px-4 border-bottom">
						<span class="font-weight-bold text-subtitle-1">My Spawned NPCs</span>
						<v-spacer />
						<v-btn color="primary" size="small" prepend-icon="mdi-plus" @click="openNewEditor">
							New PNJ/NPC
						</v-btn>
					</v-card-title>
					<v-card-text class="pa-3">
						<v-text-field
							v-model="search"
							prepend-inner-icon="mdi-magnify"
							label="Filter list..."
							variant="outlined"
							density="compact"
							hide-details
							clearable
							class="mb-3"
						/>

						<v-progress-linear :active="loading" indeterminate color="primary" class="mb-2" />

						<v-data-table-server
							fixed-header
							height="400px"
							:headers="headers"
							:items="mobs"
							:items-length="mobTotal"
							item-value="Mob_ID"
							v-model:options="options"
							v-model:page="page"
							v-model:items-per-page="itemsPerPage"
							v-model:sort-by="sortBy"
							density="compact"
							class="elevation-0"
							@click:row="handleRowClick"
							no-data-text="No player NPCs created yet in Region 51"
						>
							<template v-slot:item.actions="{ item }">
								<div class="d-flex justify-end">
									<v-btn
										color="primary"
										variant="text"
										icon="mdi-pencil"
										density="compact"
										@click.stop="openEditEditor(item)"
										title="Edit NPC"
										class="mr-1"
									/>
									<v-btn
										color="error"
										variant="text"
										icon="mdi-delete"
										density="compact"
										@click.stop="removeNpc(item)"
										title="Delete NPC"
									/>
								</div>
							</template>
						</v-data-table-server>
					</v-card-text>
				</v-card>

				<!-- FORM MODE -->
				<v-card v-else class="elevation-2" height="100%">
					<v-card-title class="d-flex align-center py-2 px-4 border-bottom">
						<span class="font-weight-bold text-subtitle-1">{{ isEditing ? 'Edit NPC' : 'Create New NPC' }}</span>
					</v-card-title>
					<v-card-text class="pa-4 flex-grow-1 overflow-y-auto" style="max-height: 520px;">
						<!-- Real-time visual preview card -->
						<v-card variant="outlined" class="pa-2 mb-4 d-flex flex-column align-center justify-center position-relative" style="height: 160px; background-color: rgba(0,0,0,0.02); border-color: rgba(0,0,0,0.12);">
							<span class="text-caption text-grey position-absolute" style="top: 4px; left: 8px;">NPC Model Preview</span>
							<img 
								v-if="form.Model" 
								:src="'/npcs/' + form.Model + '.jpg'" 
								@error="onImageError"
								style="max-height: 130px; max-width: 100%; object-fit: contain; border-radius: 4px;" 
							/>
							<div v-else class="text-caption text-grey">No model ID input</div>
						</v-card>

						<v-row dense>
							<v-col cols="12">
								<v-text-field v-model="form.Name" label="NPC Name *" placeholder="Guard, Merchant, etc." variant="outlined" density="comfortable" class="mb-2" hide-details />
							</v-col>
							<v-col cols="12">
								<v-text-field v-model="form.Guild" label="Guild / Title" placeholder="Paladins of Tyr" variant="outlined" density="comfortable" class="mb-2" hide-details />
							</v-col>
							<v-col cols="6">
								<v-text-field v-model.number="form.Model" type="number" label="Model ID" variant="outlined" density="comfortable" class="mb-2" hide-details />
							</v-col>
							<v-col cols="6">
								<v-text-field v-model.number="form.Heading" type="number" label="Heading (0-4096)" variant="outlined" density="comfortable" class="mb-2" hide-details />
							</v-col>
							<v-col cols="6">
								<v-text-field v-model.number="form.X" type="number" label="X Coordinate" readonly variant="filled" density="comfortable" class="mb-2" hide-details />
							</v-col>
							<v-col cols="6">
								<v-text-field v-model.number="form.Y" type="number" label="Y Coordinate" readonly variant="filled" density="comfortable" class="mb-2" hide-details />
							</v-col>
							<v-col cols="12">
								<v-text-field v-model.number="form.Z" type="number" label="Z Coordinate (Elevation)" variant="outlined" density="comfortable" class="mb-2" hide-details hint="Default is 1800. Adjust based on elevation." persistent-hint />
							</v-col>
						</v-row>
					</v-card-text>
					<v-card-actions class="pa-4 border-top">
						<v-btn variant="text" @click="cancelEditor" :disabled="formLoading">Cancel</v-btn>
						<v-spacer />
						<v-btn color="primary" variant="elevated" @click="saveNpc" :loading="formLoading">
							{{ isEditing ? 'Update NPC' : 'Place NPC' }}
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-sheet>
</template>

<style>
.map-view {
	height: 550px;
	width: 100%;
	background-color: #0f1015;
}
.border-bottom {
	border-bottom: 1px solid rgba(var(--v-border-color), 0.12);
}
.border-top {
	border-top: 1px solid rgba(var(--v-border-color), 0.12);
}
.npc-marker-icon, .temp-marker-icon {
	background: transparent;
	border: none;
}
</style>
