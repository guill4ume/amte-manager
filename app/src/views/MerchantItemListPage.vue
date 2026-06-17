<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import MerchantItemList from "@/components/MerchantItem/MerchantItemList.vue";
import MerchantNPCList from "@/components/MerchantItem/MerchantNPCList.vue";

const route = useRoute();

const tabPage = computed(() => {
	if (route.params.page)
		return Array.isArray(route.params.page) ? route.params.page[0] : route.params.page;
	return "items";
});
const itemListId = computed(() => Array.isArray(route.params.id) ? route.params.id[0] : route.params.id);
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar title="Merchant item list">
			<v-tabs :model-value="tabPage">
				<v-tab
					value="items"
					:to="{ name: 'merchanitemPage', params: { ...route.params, page: 'items' } }"
				>
					Items
				</v-tab>
				<v-tab
					value="merchants"
					:to="{ name: 'merchanitemPage', params: { ...route.params, page: 'merchants' } }"
				>
					Merchants
				</v-tab>
			</v-tabs>
		</v-toolbar>

		<MerchantItemList v-if="tabPage === 'items'" :item-list-id="itemListId"/>
		<MerchantNPCList v-if="tabPage === 'merchants'" :item-list-id="itemListId"/>
	</v-sheet>
</template>
