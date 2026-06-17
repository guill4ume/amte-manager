
<script lang="ts" setup>
import { QuestDB, QuestAbortQuestGoal } from "@/models/Quest";

defineProps<{
	quest: QuestDB;
	goal: QuestAbortQuestGoal;
}>();
</script>

<template>
	<v-row>
		<v-col cols="12">
			<v-textarea
				v-model="goal.Text"
				label="Text" />
		</v-col>
	</v-row>
</template>
