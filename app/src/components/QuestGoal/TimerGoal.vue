<script lang="ts" setup>
import { QuestDB, QuestTimerGoal } from "@/models/Quest";

const props = defineProps<{
	quest: QuestDB;
	goal: QuestTimerGoal;
}>();
</script>

<template>
	<v-row>
		<v-col cols="1">
			<v-text-field
				type="number"
				v-model="goal.Seconds"
				label="Seconds to wait"
				min="1"
				max="600"
				hide-details />
		</v-col>
	</v-row>
</template>
