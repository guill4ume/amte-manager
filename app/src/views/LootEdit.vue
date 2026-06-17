<script lang="ts" setup>
import { toSQL } from "@/dbconnection";
import { DB } from "@/main";
import { LootTemplate, MobXLootTemplate, generateLootTemplateId, generateMobXLootTemplateId } from "@/models/Loot";
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import ItemAutocomplete from "@/components/ItemAutocomplete.vue";
import { DaocItemIcon } from "@/components/DaocIcon";
import { debounce } from "@/debounce";

const router = useRouter();
const route = useRoute();

const templateName = ref("");
const isNewTemplate = ref(false);
const loading = ref(true);

const lootItems = ref<LootTemplate[]>([]);
const mobLinks = ref<MobXLootTemplate[]>([]);
const itemDetails = ref<Record<string, any>>({});

const newItem = ref({
	ItemTemplateID: "",
	Chance: 100,
	Count: 1,
});

// New mob link form
const newMobName = ref("");
const newDropCount = ref(1);

// Mob search
const mobSearch = ref("");
const mobSearchResults = ref<any[]>([]);
const mobSearchLoading = ref(false);

onMounted(async () => {
	loading.value = true;
	try {
		const id = route.params.id as string;

		if (id === "__new__") {
			isNewTemplate.value = true;
			templateName.value = "";
			lootItems.value = [];
			mobLinks.value = [];
		} else {
			templateName.value = id;
			isNewTemplate.value = false;

			// Load loot items
			const [items] = await DB.select({
				table: "loottemplate",
				fields: "*",
				where: `TemplateName = ${toSQL(id)}`,
				orderby: "ItemTemplateID",
				limit: -1,
			});
			lootItems.value = items;

			// Load mob links
			const [mobs] = await DB.select({
				table: "mobxloottemplate",
				fields: "*",
				where: `LootTemplateName = ${toSQL(id)}`,
				orderby: "MobName",
				limit: -1,
			});
			mobLinks.value = mobs;

			// Load item details
			await loadItemDetails();
		}
	} catch (err) {
		console.error("Failed to load loot template:", err);
	} finally {
		loading.value = false;
	}
});

async function loadItemDetails() {
	const itemIds = lootItems.value.map((i) => i.ItemTemplateID).filter((id) => id && !itemDetails.value[id]);
	if (itemIds.length === 0) return;

	const joinIds = itemIds.map((i) => `'${i.replace(/'/g, "''")}'`).join(",");
	const [items] = await DB.select({
		table: "itemtemplate",
		fields: "Id_nb, Name, Model, Level",
		where: `Id_nb IN (${joinIds})`,
		limit: -1,
	});

	for (const item of items) {
		itemDetails.value[item.Id_nb] = item;
	}
}

function getItemName(itemId: string): string {
	return itemDetails.value[itemId]?.Name || itemId;
}

function getItemModel(itemId: string): number {
	return itemDetails.value[itemId]?.Model || 0;
}

// Add new item to template
async function addItem() {
	if (!newItem.value.ItemTemplateID || !templateName.value) {
		alert("Please select an item and ensure template name is set.");
		return;
	}

	// Check if item already exists in template
	const existing = lootItems.value.find((i) => i.ItemTemplateID === newItem.value.ItemTemplateID);
	if (existing) {
		alert("This item is already in the loot template.");
		return;
	}

	const lootEntry: LootTemplate = {
		LootTemplate_ID: generateLootTemplateId(templateName.value, newItem.value.ItemTemplateID),
		TemplateName: templateName.value,
		ItemTemplateID: newItem.value.ItemTemplateID,
		Chance: newItem.value.Chance,
		Count: newItem.value.Count,
	};

	try {
		await DB.insert("loottemplate", lootEntry as any);
		lootItems.value.push(lootEntry);
		await loadItemDetails();

		// Reset form
		newItem.value = { ItemTemplateID: "", Chance: 100, Count: 1 };
	} catch (err) {
		alert(`Failed to add item: ${err}`);
	}
}

// Remove item from template
async function removeItem(item: LootTemplate) {
	if (!confirm(`Remove "${getItemName(item.ItemTemplateID)}" from this loot template?`)) return;

	try {
		await DB.delete("loottemplate", `LootTemplate_ID = ${toSQL(item.LootTemplate_ID)}`);
		lootItems.value = lootItems.value.filter((i) => i.LootTemplate_ID !== item.LootTemplate_ID);
	} catch (err) {
		alert(`Failed to remove item: ${err}`);
	}
}

// Update item in template
async function updateItem(item: LootTemplate) {
	try {
		await DB.update(
			"loottemplate",
			{ Chance: item.Chance, Count: item.Count },
			`LootTemplate_ID = ${toSQL(item.LootTemplate_ID)}`
		);
	} catch (err) {
		alert(`Failed to update item: ${err}`);
	}
}

// Search mobs
const searchMobs = debounce(async () => {
	if (!mobSearch.value || mobSearch.value.length < 2) {
		mobSearchResults.value = [];
		return;
	}

	mobSearchLoading.value = true;
	try {
		const likeValue = mobSearch.value.replace(/'/g, "''");
		const [results] = await DB.select({
			table: "mob",
			fields: "Name, Guild, Level, Region",
			where: `Name LIKE '%${likeValue}%'`,
			orderby: "Name",
			limit: 20,
		});
		mobSearchResults.value = results;
	} catch (err) {
		console.error(err);
	} finally {
		mobSearchLoading.value = false;
	}
});

// Add mob link
async function addMobLink(mobName?: string) {
	const name = mobName || newMobName.value;
	if (!name || !templateName.value) {
		alert("Please enter a mob name.");
		return;
	}

	// Check if link already exists
	const existing = mobLinks.value.find((m) => m.MobName === name);
	if (existing) {
		alert("This mob is already linked to this template.");
		return;
	}

	const link: MobXLootTemplate = {
		MobXLootTemplate_ID: generateMobXLootTemplateId(name, templateName.value),
		MobName: name,
		LootTemplateName: templateName.value,
		DropCount: newDropCount.value,
	};

	try {
		await DB.insert("mobxloottemplate", link as any);
		mobLinks.value.push(link);
		newMobName.value = "";
		mobSearch.value = "";
		mobSearchResults.value = [];
	} catch (err) {
		alert(`Failed to add mob link: ${err}`);
	}
}

// Remove mob link
async function removeMobLink(link: MobXLootTemplate) {
	if (!confirm(`Remove mob "${link.MobName}" from this loot template?`)) return;

	try {
		await DB.delete("mobxloottemplate", `MobXLootTemplate_ID = ${toSQL(link.MobXLootTemplate_ID)}`);
		mobLinks.value = mobLinks.value.filter((m) => m.MobXLootTemplate_ID !== link.MobXLootTemplate_ID);
	} catch (err) {
		alert(`Failed to remove mob link: ${err}`);
	}
}

// Update mob link
async function updateMobLink(link: MobXLootTemplate) {
	try {
		await DB.update(
			"mobxloottemplate",
			{ DropCount: link.DropCount },
			`MobXLootTemplate_ID = ${toSQL(link.MobXLootTemplate_ID)}`
		);
	} catch (err) {
		alert(`Failed to update mob link: ${err}`);
	}
}

// Create new template
async function createTemplate() {
	if (!templateName.value) {
		alert("Please enter a template name.");
		return;
	}

	// Check if template already exists
	const [existing] = await DB.select({
		table: "loottemplate",
		fields: "TemplateName",
		where: `TemplateName = ${toSQL(templateName.value)}`,
		limit: 1,
	});

	if (existing.length > 0) {
		alert("A template with this name already exists.");
		return;
	}

	isNewTemplate.value = false;
	router.replace({ params: { id: templateName.value } });
}

// Duplicate template
async function duplicateTemplate() {
	const newName = prompt("Enter name for the new template:", `${templateName.value}_copy`);
	if (!newName) return;

	// Check if template already exists
	const [existing] = await DB.select({
		table: "loottemplate",
		fields: "TemplateName",
		where: `TemplateName = ${toSQL(newName)}`,
		limit: 1,
	});

	if (existing.length > 0) {
		alert("A template with this name already exists.");
		return;
	}

	try {
		// Copy all items to new template
		for (const item of lootItems.value) {
			const newEntry: LootTemplate = {
				LootTemplate_ID: generateLootTemplateId(newName, item.ItemTemplateID),
				TemplateName: newName,
				ItemTemplateID: item.ItemTemplateID,
				Chance: item.Chance,
				Count: item.Count,
			};
			await DB.insert("loottemplate", newEntry as any);
		}

		router.push({ name: "loottemplate", params: { id: newName } });
	} catch (err) {
		alert(`Failed to duplicate template: ${err}`);
	}
}

// Delete entire template
async function deleteTemplate() {
	if (!confirm(`Delete loot template "${templateName.value}" and all its items? This cannot be undone.`)) return;

	try {
		// Delete all items
		await DB.delete("loottemplate", `TemplateName = ${toSQL(templateName.value)}`, -1);

		// Delete all mob links
		await DB.delete("mobxloottemplate", `LootTemplateName = ${toSQL(templateName.value)}`, -1);

		router.push({ name: "loottemplateList" });
	} catch (err) {
		alert(`Failed to delete template: ${err}`);
	}
}

// Rename template
async function renameTemplate() {
	const newName = prompt("Enter new template name:", templateName.value);
	if (!newName || newName === templateName.value) return;

	// Check if new name exists
	const [existing] = await DB.select({
		table: "loottemplate",
		fields: "TemplateName",
		where: `TemplateName = ${toSQL(newName)}`,
		limit: 1,
	});

	if (existing.length > 0) {
		alert("A template with this name already exists.");
		return;
	}

	try {
		// Update all items
		await DB.update("loottemplate", { TemplateName: newName }, `TemplateName = ${toSQL(templateName.value)}`);

		// Update all mob links
		await DB.update("mobxloottemplate", { LootTemplateName: newName }, `LootTemplateName = ${toSQL(templateName.value)}`);

		templateName.value = newName;
		router.replace({ params: { id: newName } });
	} catch (err) {
		alert(`Failed to rename template: ${err}`);
	}
}

const totalChance = computed(() => {
	return lootItems.value.reduce((sum, item) => sum + item.Chance, 0);
});
</script>

<template>
	<div v-if="loading" class="d-flex justify-center align-center" style="height: 400px">
		<v-progress-circular indeterminate size="64" />
	</div>

	<v-sheet :elevation="1" rounded v-else>
		<v-toolbar style="position: sticky; top: 0; z-index: 1">
			<v-toolbar-title v-if="isNewTemplate">
				New Loot Template
			</v-toolbar-title>
			<v-toolbar-title v-else>
				<v-icon icon="mdi-treasure-chest" class="mr-2" />
				{{ templateName }}
			</v-toolbar-title>

			<template v-if="!isNewTemplate">
				<v-btn prepend-icon="mdi-pencil" variant="text" @click="renameTemplate">Rename</v-btn>
				<v-btn prepend-icon="mdi-content-copy" variant="text" @click="duplicateTemplate">Duplicate</v-btn>
				<v-btn prepend-icon="mdi-delete" variant="text" color="error" @click="deleteTemplate">Delete</v-btn>
			</template>

			<v-btn @click="router.back()">Back</v-btn>
		</v-toolbar>

		<!-- New Template Form -->
		<v-card-text v-if="isNewTemplate">
			<v-alert type="info" class="mb-4">
				Enter a unique name for the new loot template. After creating it, you can add items and link mobs.
			</v-alert>
			<v-row>
				<v-col cols="8">
					<v-text-field
						v-model="templateName"
						label="Template Name"
						hint="A unique identifier for this loot template (e.g., 'goblin_loot', 'dragon_treasure')"
						persistent-hint
					/>
				</v-col>
				<v-col cols="4">
					<v-btn color="primary" size="large" @click="createTemplate" :disabled="!templateName">
						Create Template
					</v-btn>
				</v-col>
			</v-row>
		</v-card-text>

		<!-- Existing Template Editor -->
		<v-card-text v-else>
			<v-row>
				<!-- Items Section -->
				<v-col cols="12" md="7">
					<v-card variant="outlined">
						<v-card-title class="d-flex align-center">
							<v-icon icon="mdi-package-variant" class="mr-2" />
							Items ({{ lootItems.length }})
							<v-spacer />
							<v-chip v-if="totalChance > 0" size="small" color="info">
								Total Chance: {{ totalChance }}%
							</v-chip>
						</v-card-title>

						<v-card-text>
							<!-- Add Item Form -->
							<v-row class="mb-4 align-center">
								<v-col cols="5">
									<ItemAutocomplete
										v-model:selectedItems="newItem.ItemTemplateID"
										label="Select Item"
										small
									/>
								</v-col>
								<v-col cols="2">
									<v-text-field
										v-model.number="newItem.Chance"
										label="Chance %"
										type="number"
										min="1"
										max="100"
										density="compact"
										hide-details
									/>
								</v-col>
								<v-col cols="2">
									<v-text-field
										v-model.number="newItem.Count"
										label="Count"
										type="number"
										min="1"
										density="compact"
										hide-details
									/>
								</v-col>
								<v-col cols="3">
									<v-btn
										color="primary"
										@click="addItem"
										:disabled="!newItem.ItemTemplateID"
										block
									>
										<v-icon icon="mdi-plus" />
										Add
									</v-btn>
								</v-col>
							</v-row>

							<v-divider class="mb-4" />

							<!-- Items List -->
							<v-list v-if="lootItems.length > 0" density="compact">
								<v-list-item
									v-for="item in lootItems"
									:key="item.LootTemplate_ID"
									class="mb-2"
								>
									<template v-slot:prepend>
										<DaocItemIcon :id="getItemModel(item.ItemTemplateID)" :size="0.75" class="mr-2" />
									</template>

									<v-list-item-title>
										<router-link
											:to="{ name: 'item', params: { id: item.ItemTemplateID } }"
											class="text-decoration-none"
										>
											{{ getItemName(item.ItemTemplateID) }}
										</router-link>
										<span class="text-grey ml-2">({{ item.ItemTemplateID }})</span>
									</v-list-item-title>

									<template v-slot:append>
										<v-text-field
											v-model.number="item.Chance"
											label="Chance"
											type="number"
											min="1"
											max="100"
											suffix="%"
											density="compact"
											hide-details
											style="width: 100px"
											class="mr-2"
											@change="updateItem(item)"
										/>
										<v-text-field
											v-model.number="item.Count"
											label="Count"
											type="number"
											min="1"
											density="compact"
											hide-details
											style="width: 80px"
											class="mr-2"
											@change="updateItem(item)"
										/>
										<v-btn
											icon="mdi-delete"
											variant="text"
											color="error"
											size="small"
											@click="removeItem(item)"
										/>
									</template>
								</v-list-item>
							</v-list>

							<v-alert v-else type="info" variant="tonal">
								No items in this loot template yet. Add items using the form above.
							</v-alert>
						</v-card-text>
					</v-card>
				</v-col>

				<!-- Mobs Section -->
				<v-col cols="12" md="5">
					<v-card variant="outlined">
						<v-card-title class="d-flex align-center">
							<v-icon icon="mdi-ghost" class="mr-2" />
							Linked Mobs ({{ mobLinks.length }})
						</v-card-title>

						<v-card-text>
							<!-- Add Mob Form -->
							<v-row class="mb-4">
								<v-col cols="12">
									<v-text-field
										v-model="mobSearch"
										label="Search mobs..."
										prepend-inner-icon="mdi-magnify"
										density="compact"
										hide-details
										@input="searchMobs"
									/>
								</v-col>
							</v-row>

							<!-- Search Results -->
							<v-list v-if="mobSearchResults.length > 0" density="compact" class="mb-4" style="max-height: 200px; overflow-y: auto;">
								<v-list-item
									v-for="mob in mobSearchResults"
									:key="mob.Name"
									@click="addMobLink(mob.Name)"
									class="cursor-pointer"
								>
									<v-list-item-title>{{ mob.Name }}</v-list-item-title>
									<v-list-item-subtitle>
										Level {{ mob.Level }} - {{ mob.Guild || 'No Guild' }}
									</v-list-item-subtitle>
									<template v-slot:append>
										<v-btn icon="mdi-plus" size="small" variant="text" color="primary" />
									</template>
								</v-list-item>
							</v-list>

							<!-- Manual Add -->
							<v-row class="mb-4">
								<v-col cols="6">
									<v-text-field
										v-model="newMobName"
										label="Mob Name (exact)"
										density="compact"
										hide-details
									/>
								</v-col>
								<v-col cols="3">
									<v-text-field
										v-model.number="newDropCount"
										label="Drop Count"
										type="number"
										min="1"
										density="compact"
										hide-details
									/>
								</v-col>
								<v-col cols="3">
									<v-btn
										color="primary"
										@click="addMobLink()"
										:disabled="!newMobName"
										block
									>
										Add
									</v-btn>
								</v-col>
							</v-row>

							<v-divider class="mb-4" />

							<!-- Linked Mobs List -->
							<v-list v-if="mobLinks.length > 0" density="compact">
								<v-list-item
									v-for="link in mobLinks"
									:key="link.MobXLootTemplate_ID"
								>
									<v-list-item-title>{{ link.MobName }}</v-list-item-title>

									<template v-slot:append>
										<v-text-field
											v-model.number="link.DropCount"
											label="Drops"
											type="number"
											min="1"
											density="compact"
											hide-details
											style="width: 80px"
											class="mr-2"
											@change="updateMobLink(link)"
										/>
										<v-btn
											icon="mdi-delete"
											variant="text"
											color="error"
											size="small"
											@click="removeMobLink(link)"
										/>
									</template>
								</v-list-item>
							</v-list>

							<v-alert v-else type="info" variant="tonal">
								No mobs are linked to this loot template. Search and add mobs above.
							</v-alert>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-card-text>
	</v-sheet>
</template>
