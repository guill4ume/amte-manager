<script lang="ts" setup>
import { QuestDB, QuestUseItemGoal } from "@/models/Quest";
import ItemAutocomplete from "../ItemAutocomplete.vue";

const props = defineProps<{
	quest: QuestDB;
	goal: QuestUseItemGoal;
}>();
</script>

<template>
	<v-row>
		<v-col cols="6">
			<ItemAutocomplete
				v-model:selected-items="goal.Item"
				label="Use item template" />
		</v-col>
	</v-row>
</template>
