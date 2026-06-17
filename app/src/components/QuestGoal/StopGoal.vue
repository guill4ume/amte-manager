<script lang="ts" setup>
import { QuestDB, QuestStopGoal } from "@/models/Quest";

const props = defineProps<{
	quest: QuestDB;
	goal: QuestStopGoal;
}>();
</script>

<template>
	<v-row>
		<v-col cols="12">
			<v-autocomplete
				label="Abort theses goals if there are not finished"
				:items="quest.goals"
				item-value="Id"
				:item-title="(g: any) => `${g.Id}.${g.Description}`"
				multiple
				chips
				v-model="goal.StopGoals" />
		</v-col>
	</v-row>
</template>
