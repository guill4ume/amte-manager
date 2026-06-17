<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { DB } from "@/main";
import PlayerStats from "./PlayerStats.vue";
import PlayerEquipment from "./PlayerEquipment.vue";
import PlayerInventory from "./PlayerInventory.vue";
import PlayerVault from "./PlayerVault.vue";

const props = defineProps<{
	player: any;
}>();

const loading = ref(true);
const equipment = ref<any[]>([]);
const inventory = ref<any[]>([]);
const vault = ref<any[]>([]);

// Inventory slot positions (backpack 40-79)
const INVENTORY_START = 40;
const INVENTORY_END = 79;

// Compute bonuses from equipment
const equipmentBonuses = computed(() => {
	const bonuses: Record<number, number> = {};
	for (const item of equipment.value) {
		if (!item.template) continue;
		const t = item.template;
		for (let i = 1; i <= 10; i++) {
			const bonusType = t[`Bonus${i}Type`];
			const bonusValue = t[`Bonus${i}`];
			if (bonusType && bonusValue) {
				bonuses[bonusType] = (bonuses[bonusType] || 0) + bonusValue;
			}
		}
		if (t.ExtraBonusType && t.ExtraBonus) {
			bonuses[t.ExtraBonusType] = (bonuses[t.ExtraBonusType] || 0) + t.ExtraBonus;
		}
	}
	return bonuses;
});

async function load() {
	if (!props.player) {
		loading.value = false;
		return;
	}

	loading.value = true;
	try {
		// Load inventory (all items for this player) with Price
		const [inventoryItems] = await DB.selectRaw(
			`i.*, COALESCE(it.Name, iu.Name) as ItemName, COALESCE(it.Model, iu.Model) as Model,
			 COALESCE(it.Item_Type, iu.Item_Type) as Item_Type, COALESCE(it.Price, iu.Price) as Price,
			 it.Bonus1, it.Bonus1Type, it.Bonus2, it.Bonus2Type, it.Bonus3, it.Bonus3Type,
			 it.Bonus4, it.Bonus4Type, it.Bonus5, it.Bonus5Type, it.Bonus6, it.Bonus6Type,
			 it.Bonus7, it.Bonus7Type, it.Bonus8, it.Bonus8Type, it.Bonus9, it.Bonus9Type,
			 it.Bonus10, it.Bonus10Type, it.ExtraBonus, it.ExtraBonusType,
			 iu.Bonus1 as UBonus1, iu.Bonus1Type as UBonus1Type, iu.Bonus2 as UBonus2, iu.Bonus2Type as UBonus2Type,
			 iu.Bonus3 as UBonus3, iu.Bonus3Type as UBonus3Type, iu.Bonus4 as UBonus4, iu.Bonus4Type as UBonus4Type,
			 iu.Bonus5 as UBonus5, iu.Bonus5Type as UBonus5Type, iu.Bonus6 as UBonus6, iu.Bonus6Type as UBonus6Type,
			 iu.Bonus7 as UBonus7, iu.Bonus7Type as UBonus7Type, iu.Bonus8 as UBonus8, iu.Bonus8Type as UBonus8Type,
			 iu.Bonus9 as UBonus9, iu.Bonus9Type as UBonus9Type, iu.Bonus10 as UBonus10, iu.Bonus10Type as UBonus10Type,
			 iu.ExtraBonus as UExtraBonus, iu.ExtraBonusType as UExtraBonusType
			 FROM inventory i
			 LEFT JOIN itemtemplate it ON i.ITemplate_Id = it.Id_nb
			 LEFT JOIN itemunique iu ON i.UTemplate_Id = iu.Id_nb
			 WHERE i.OwnerID = '${props.player.DOLCharacters_ID}'
			 ORDER BY i.SlotPosition`
		);

		// Process items and merge template data
		const allItems = inventoryItems.map((item: any) => {
			const template: any = {
				Name: item.ItemName,
				Model: item.Model,
				Item_Type: item.Item_Type,
				Price: item.Price || 0,
			};
			// Merge bonus from template or unique
			for (let i = 1; i <= 10; i++) {
				template[`Bonus${i}`] = item[`Bonus${i}`] || item[`UBonus${i}`] || 0;
				template[`Bonus${i}Type`] = item[`Bonus${i}Type`] || item[`UBonus${i}Type`] || 0;
			}
			template.ExtraBonus = item.ExtraBonus || item.UExtraBonus || 0;
			template.ExtraBonusType = item.ExtraBonusType || item.UExtraBonusType || 0;
			return { ...item, template };
		});

		// Separate equipment, inventory, and vault
		equipment.value = allItems.filter((item: any) => item.SlotPosition < INVENTORY_START);
		inventory.value = allItems.filter(
			(item: any) => item.SlotPosition >= INVENTORY_START && item.SlotPosition <= INVENTORY_END
		);
		vault.value = allItems.filter((item: any) => item.SlotPosition > INVENTORY_END);
	} catch (err) {
		console.error("PlayerItemsSection load error:", err);
	}
	loading.value = false;
}

onMounted(load);
watch(() => props.player, load);
</script>

<template>
	<v-progress-linear v-if="loading" indeterminate class="mb-4" />
	<template v-else>
		<PlayerStats
			:player="player"
			:equipment-bonuses="equipmentBonuses"
		/>

		<PlayerEquipment :equipment="equipment" />

		<PlayerInventory
			:inventory="inventory"
			:inventory-start="INVENTORY_START"
		/>

		<PlayerVault :vault="vault" />
	</template>
</template>
