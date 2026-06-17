<script lang="ts" setup>
import { QuestDB, QuestEnterAreaGoal } from "@/models/Quest";
import NPCFind from "@/components/NPCFind.vue";

const props = defineProps<{
	quest: QuestDB;
	goal: QuestEnterAreaGoal;
}>();

function selectFromNPC(_name: string, _region: number, npc: any) {
	props.goal.AreaCenter = { X: parseInt(npc.X), Y: parseInt(npc.Y), Z: parseInt(npc.Z) };
	props.goal.AreaRegion = parseInt(npc.Region);
}
</script>

<template>
	<v-row>
		<v-col cols="1">
			<v-text-field
				type="number"
				v-model="goal.AreaRegion"
				label="Region"
				hide-details />
		</v-col>
		<v-col cols="2">
			<v-text-field
				type="string"
				v-model="goal.AreaCenter.X"
				label="X"
				hide-details />
		</v-col>
		<v-col cols="2">
			<v-text-field
				type="string"
				v-model="goal.AreaCenter.Y"
				label="Y"
				hide-details />
		</v-col>
		<v-col cols="2">
			<v-text-field
				type="string"
				v-model="goal.AreaCenter.Z"
				label="Z"
				hide-details />
		</v-col>
		<v-col cols="2">
			<v-text-field
				type="string"
				v-model="goal.AreaRadius"
				label="Radius"
				min="100"
				hide-details />
		</v-col>
		<v-col cols="1" class="pt-7">
			<NPCFind @select="selectFromNPC" />
		</v-col>
	</v-row>
</template>
