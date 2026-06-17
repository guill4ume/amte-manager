import { Component } from "vue";
import { QuestInteractGoal, QuestWhisperGoal, QuestKillGoal, QuestCollectGoal, QuestEnterAreaGoal, QuestEndGoal, QuestAbortQuestGoal, QuestGoal, QuestTimerGoal, QuestKilledGoal, QuestStopGoal, QuestUseItemGoal, QuestDB } from "./Quest";
import KillGoal from "@/components/QuestGoal/KillGoal.vue";
import InteractGoal from "@/components/QuestGoal/InteractGoal.vue";
import WhisperGoal from "@/components/QuestGoal/WhisperGoal.vue";
import CollectGoal from "@/components/QuestGoal/CollectGoal.vue";
import EndGoal from "@/components/QuestGoal/EndGoal.vue";
import EnterAreaGoal from "@/components/QuestGoal/EnterAreaGoal.vue";
import AbortQuestGoal from "@/components/QuestGoal/AbortQuestGoal.vue";
import DummyGoal from "@/components/QuestGoal/DummyGoal.vue";
import TimerGoal from "@/components/QuestGoal/TimerGoal.vue";
import KilledGoal from "@/components/QuestGoal/KilledGoal.vue";
import StopGoal from "@/components/QuestGoal/StopGoal.vue";
import UseItemGoal from "@/components/QuestGoal/UseItemGoal.vue";

export interface GoalType {
	type: string;
	create: (quest: QuestDB, goal: any) => QuestGoal;
	title: string;
	text: string;
	component: Component;
	color: string;
	colorDark: string;
}

export const goalTypes = [
	{
		type: "DOL.GS.Quests.InteractGoal",
		create: (quest: QuestDB, goal: any) => new QuestInteractGoal(quest, goal),
		title: "Interact",
		text: "Interact -- Interact with the target",
		component: InteractGoal,
		color: "rgb(231,236,255)",
		colorDark: "rgb(0,5,25)",
	},
	{
		type: "DOL.GS.Quests.WhisperGoal",
		create: (quest: QuestDB, goal: any) => new QuestWhisperGoal(quest, goal),
		title: "Whisper",
		text: "Whisper -- Whisper a specific text to the target",
		component: WhisperGoal,
		color: "rgb(231,236,255)",
		colorDark: "rgb(0,5,25)",
	},
	{
		type: "DOL.GS.Quests.KillGoal",
		create: (quest: QuestDB, goal: any) => new QuestKillGoal(quest, goal),
		title: "Kill",
		text: "Kill -- Kill the target",
		component: KillGoal,
		color: "rgb(255,235,229)",
		colorDark: "rgb(26,0,5)",
	},
	{
		type: "DOL.GS.Quests.CollectGoal",
		create: (quest: QuestDB, goal: any) => new QuestCollectGoal(quest, goal),
		title: "Collect",
		text: "Collect -- Player must give the target an item",
		component: CollectGoal,
		color: "rgb(214,226,250)",
		colorDark: "rgb(0,5,35)",
	},
	{
		type: "DOL.GS.Quests.EnterAreaGoal",
		create: (quest: QuestDB, goal: any) => new QuestEnterAreaGoal(quest, goal),
		title: "Enter Area",
		text: "Enter Area -- Player must go in specific area",
		component: EnterAreaGoal,
		color: "rgb(248,250,214)",
		colorDark: "rgb(20,20,0)",
	},
	{
		type: "DOL.GS.Quests.EndGoal",
		create: (quest: QuestDB, goal: any) => new QuestEndGoal(quest, goal),
		title: "End",
		text: "End -- Finish the quest with all rewards",
		component: EndGoal,
		color: "#cec",
		colorDark: "#121",
	},
	{
		type: "DOL.GS.Quests.AbortQuestGoal",
		create: (quest: QuestDB, goal: any) => new QuestAbortQuestGoal(quest, goal),
		title: "Abort quest",
		text: "Abort quest -- Abort the quest without any reward",
		component: AbortQuestGoal,
		color: "rgb(255,176,176)",
		colorDark: "rgb(35,0,0)",
	},
	{
		type: "DOL.GS.Quests.DummyGoal",
		create: (quest: QuestDB, goal: any) => new QuestGoal(quest, goal),
		title: "Dummy goal",
		text: "Dummy goal -- Immediately ends, useful to start multiple goals or to give more items",
		component: DummyGoal,
		color: "rgb(220,220,220)",
		colorDark: "rgb(5,5,5)",
	},
	{
		type: "DOL.GS.Quests.TimerGoal",
		create: (quest: QuestDB, goal: any) => new QuestTimerGoal(quest, goal),
		title: "Timer goal",
		text: "Timer goal -- wait a small amount of time and automatically ends",
		component: TimerGoal,
		color: "rgb(206,206,206)",
		colorDark: "rgb(49,49,49)",
	},
	{
		type: "DOL.GS.Quests.KilledGoal",
		create: (quest: QuestDB, goal: any) => new QuestKilledGoal(quest, goal),
		title: "Killed",
		text: "Killed -- Killed by the target",
		component: KilledGoal,
		color: "rgb(255,235,229)",
		colorDark: "rgb(26,20,0)",
	},
	{
		type: "DOL.GS.Quests.StopGoal",
		create: (quest: QuestDB, goal: any) => new QuestStopGoal(quest, goal),
		title: "Stop goal",
		text: "Stop goal -- abort unfinished goals",
		component: StopGoal,
		color: "rgb(206,206,206)",
		colorDark: "rgb(49,49,49)",
	},
	{
		type: "DOL.GS.Quests.UseItemGoal",
		create: (quest: QuestDB, goal: any) => new QuestUseItemGoal(quest, goal),
		title: "Use item",
		text: "Use item -- Player use an item with clicking on the icon of this one (not by /use or /use2)",
		component: UseItemGoal,
		color: "rgb(214,226,250)",
		colorDark: "rgb(5,29,41)",
	},
];
