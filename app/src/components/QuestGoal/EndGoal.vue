<script lang="ts" setup>
import { QuestDB, QuestEndGoal } from "@/models/Quest";
import NPCFind from "@/components/NPCFind.vue";

defineProps<{
	quest: QuestDB;
	goal: QuestEndGoal;
}>();
</script>

<template>
	<v-row>
		<v-col cols="1">
			<v-text-field
				type="number"
				v-model="goal.TargetRegion"
				label="Region"
				hide-details />
		</v-col>
		<v-col cols="4">
			<v-text-field
				type="string"
				v-model="goal.TargetName"
				label="NPC Name"
				hide-details />
		</v-col>
		<v-col cols="1" class="pt-7">
			<NPCFind @select="(name, region, _npc) => { goal.TargetRegion = region; goal.TargetName = name; }" :search-default="goal.TargetName" />
		</v-col>
	</v-row>
</template>
