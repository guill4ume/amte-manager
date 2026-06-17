<script lang="ts" setup>
import { QuestDB, QuestWhisperGoal } from "@/models/Quest";
import NPCFind from "@/components/NPCFind.vue";

const props = defineProps<{
	quest: QuestDB;
	goal: QuestWhisperGoal;
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
		<v-col cols="6">
			<v-text-field
				type="string"
				v-model="goal.WhisperText"
				label="Whispered text"
				hide-details />
		</v-col>

		<v-col cols="12">
			<v-textarea
				v-model="goal.Text"
				label="Text" />
		</v-col>
	</v-row>
</template>
