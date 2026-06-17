<script lang="ts" setup>
import {
	QuestDB,
	QuestGoal,
	QuestStopGoal,
} from "@/models/Quest";
import { GoalType, goalTypes } from "@/models/QuestGoalTypes";
import cytoscape from "cytoscape";
import { onMounted, watch, ref, computed } from "vue";
import { useTheme } from "vuetify/dist/vuetify";

import DaocMap from "@/components/DaocMap.vue";

const props = defineProps<{
	quest: QuestDB;
}>();
const theme = useTheme();

const canvas = ref<HTMLCanvasElement>();
let cy!: cytoscape.Core;

let edgeId = 1;
let goals: { edges: any[]; goal: QuestGoal; }[] = [];

// Compute current region and NPC ID to highlight it on the map
const questRegion = computed(() => {
	return props.quest.db.NpcRegion || 51; // default to Avalon/region 51 if not set
});

const questNpcId = computed(() => {
	// Look up the starting NPC name or similar if possible
	return props.quest.db.NpcName;
});

function _watchQuest() {
	const minId = props.quest.goals.reduce((min, g) => g.Id < min ? g.Id : min, 999999);

	goals = props.quest.goals.map(goal => {
		const edges: any[] = [];
		if (goal.StartGoalsDone)
			edges.push(...goal.StartGoalsDone.map(id => ({ data: { id: `se${edgeId++}`, source: `g${id}`, target: `g${goal.Id}`, color: theme.current.value.dark ? `#464` : `#aca` } })));
		if (goal.EndWhenGoalsDone)
			edges.push(...goal.EndWhenGoalsDone?.map(id => ({ data: { id: `ee${edgeId++}`, source: `g${id}`, target: `g${goal.Id}`, color: theme.current.value.dark ? `#448` : `#aad` } })));
		if (!goal.StartGoalsDone || goal.StartGoalsDone.length === 0)
			edges.push({ data: { id: `ee${edgeId++}`, source: `g${minId - 1}`, target: `g${goal.Id}`, color: theme.current.value.dark ? `#464` : `#aca` } });
		if (goal instanceof QuestStopGoal)
			edges.push(...goal.StopGoals.map(id => ({ data: { id: `es${edgeId++}`, source: `g${goal.Id}`, target: `g${id}`, color: theme.current.value.dark ? `#844` : `rgb(255,176,176)` } })));
		return { edges, goal };
	});

	cy = cytoscape({
		container: canvas.value,
		elements: [
			{ data: { id: `g${minId - 1}`, color: theme.current.value.dark ? "#464" : "#aca", label: `Start - Interact with ${props.quest.db.NpcName}`, goal: null } },
			...props.quest.goals.map(g => ({ data: { id: `g${g.Id}`, color: _getColor(g), label: _getLabel(g), goal: g } })),
			...([] as any[]).concat(...goals.map(g => g.edges)),
		],
		style: [
			{
				selector: "node",
				style: {
					label: "data(label)",
					color: theme.current.value.dark ? "white" : "black",
					backgroundColor: "data(color)",
				},
			},
			{
				selector: "edge",
				style: {
					"width": 3,
					"line-color": "data(color)",
					"target-arrow-color": "data(color)",
					"target-arrow-shape": "triangle",
					"curve-style": "bezier",
				},
			},
		],
		layout: {
			name: "breadthfirst",
			roots: [`g${minId - 1}`],
			padding: 3,
			animate: true,
			directed: !true,
			//transform: (node, position) => ({ x: position.y, y: position.x }),
		}
	});
	let i = 0;
	// TODO manage goals directly here
	cy.on("click", "node", ev => { console.log(`${i++}.click`, ev.target.data("goal")); const element = document.getElementById("goal-" + ev.target.data("goal")?.Id); (<any>element?.querySelector(".v-toolbar-title"))?.click(); element?.scrollIntoView(); setTimeout(() => element?.scrollIntoView(), 200); });
	cy.on("drag", "node", ev => console.log(`${i++}.drag`, ev.target.data("goal")));
}

watch(() => props.quest, _watchQuest);
watch(theme.current, _watchQuest);

onMounted(_watchQuest);

function _getColor(goal: QuestGoal) {
	const type = goalTypes.find(t => t.type === goal.Type);
	return (theme.current.value.dark ? type?.colorDark : type?.color) ?? "lightgray";
}

function _getLabel(goal: QuestGoal) {
	const type = goalTypes.find(t => t.type === goal.Type);
	return `${type?.title ?? "unknown"} - ${goal.Description}`;
}
</script>

<template>
	<v-row>
		<v-col cols="12" md="6">
			<v-card class="mb-2 elevation-1 questgoal" style="height: 100%;">
				<v-card-title class="pb-0 pt-2">
					<h5>Blueprint</h5>
				</v-card-title>
				<v-card-text>
					<div ref="canvas" class="canvas" />
				</v-card-text>
			</v-card>
		</v-col>
		<v-col cols="12" md="6">
			<v-card class="mb-2 elevation-1" style="height: 100%;">
				<v-card-title class="pb-0 pt-2">
					<h5>Interactive Map (Region: {{ questRegion }})</h5>
				</v-card-title>
				<v-card-text>
					<DaocMap :map="questRegion" :default-search="questNpcId" style="min-height: 400px;" />
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>
</template>

<style>
.questgoal .canvas {
	width: 100%;
	height: 400px;
	min-height: 300px;
}
</style>
