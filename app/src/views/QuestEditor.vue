<script lang="ts" setup>
import { BaseQuestDB } from "@/models/Quest";
import QuestEditor from "@/components/QuestEditor.vue";
import { ref } from "vue";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { DB } from "@/main";

const router = useRouter();
const route = useRoute();
const quest = ref<BaseQuestDB>();

onMounted(async () => {
	const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
	if (parseInt(id) === -1) {
		// new quest
		quest.value = {
			Id: -1,
			Name: "New quest",
			isDaily: false,

			Description: "",
			Summary: "",
			Story: "",
			Conclusion: "",

			NpcName: "",
			NpcRegion: 0,
			MaxCount: 1,
			MinLevel: 1,
			MaxLevel: 50,
			RewardMoney: 0,
			RewardXP: 0,
			RewardCLXP: 0,
			RewardRP: 0,
			RewardBP: 0,
			RewardBreamorFaction: 0,

			NbChooseOptionalItems: 1,
			OptionalRewardItemTemplates: "",
			FinalRewardItemTemplates: "",

			GoalsJson: "[]",
		};
		return;
	}
	const [[_quest]] = await DB.select({
		table: "dataquestjson",
		where: `Id = ${id}`,
	});

	if (_quest && typeof _quest.isDaily !== "undefined") {
		// Explicitly convert the number to a boolean
		_quest.isDaily = !!_quest.isDaily;
	}
	quest.value = _quest;
});

async function clone() {
	await router.push({ name: route.name ?? undefined, params: { id: "-1" } });
	quest.value = JSON.parse(JSON.stringify({ ...quest.value, Id: -1 }));
	if (quest.value) quest.value.Name += " - Copy";
}
</script>

<template>
	<QuestEditor v-if="quest" :questDB="quest" @cancel="router.back()" @saved="router.back()" @clone="clone" />
	<v-progress-circular v-else indeterminate style="width: 100%" />
</template>
