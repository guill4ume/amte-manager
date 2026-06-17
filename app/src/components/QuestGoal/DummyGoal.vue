<script lang="ts" setup>
import { QuestDB, QuestGoal } from "@/models/Quest";

defineProps<{
	quest: QuestDB;
	goal: QuestGoal;
}>();
</script>

<template>
	<v-row>
		<v-col cols="12">
			Dummy goal: ends when started
		</v-col>
	</v-row>
</template>
