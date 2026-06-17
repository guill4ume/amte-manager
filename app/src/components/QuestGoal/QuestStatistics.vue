<script lang="ts" setup>
import { DB } from "@/main";
import { QuestDB } from "@/models/Quest";
import { computed } from "vue";
import { onMounted, ref } from "vue";

const playerQuests = ref<any[]>([]);
const players = ref<any[]>([]);
const questProgress = computed(() =>
	playerQuests.value
		.map((quest) => ({
			quest,
			player: players.value.find((p) => p.DOLCharacters_ID === quest.Character_ID),
		}))
		.sort()
);

const props = defineProps({
	quest: QuestDB,
});

onMounted(async () => {
	const [quests] = await DB.select({
		table: "quest",
		fields: ["Quest_ID", "Character_ID", "Step", "CustomPropertiesString"],
		where: `CustomPropertiesString LIKE '{"QuestId":${props.quest?.db.Id},%'`,
		limit: 50000,
	});
	playerQuests.value = quests;

	if (quests.length > 0) {
		const [characters] = await DB.select({
			table: "dolcharacters",
			fields: ["DOLCharacters_ID", "AccountName", "Name", "Level"],
			where: `DOLCharacters_ID IN (${quests.map((q) => `'${q.Character_ID}'`).join(",")})`,
			limit: 50000,
		});
		players.value = characters;
	} else players.value = [];
});

function getProps(propStr: string) {
	const props = JSON.parse(propStr);
	return props.Goals.map(
		(g: any) =>
			`goal ${g.GoalId} ${g.IsActive ? "active" : ""} ${g.IsDone ? "done" : ""} ${g.IsFinished ? "finished" : ""}`
	);
}
</script>

<template>
	<v-sheet>
		<v-table>
			<thead>
				<tr>
					<th>Account</th>
					<th>Name</th>
					<th>Level</th>
					<th>Progression</th>
					<th>Goals</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="{ quest, player } in questProgress" :key="quest.Quest_ID">
					<template v-if="player">
						<td>{{ player.AccountName }}</td>
						<td>{{ player.Name }}</td>
						<td>{{ player.Level }}</td>
					</template>
					<td v-else colspan="3">DELETED - {{ quest.Character_ID }}</td>
					<td>{{ quest.Step < 0 ? "Done" : "In progress" }}</td>
					<td>
						<p v-for="goal in getProps(quest.CustomPropertiesString)">{{ goal }}</p>
					</td>
				</tr>
			</tbody>
		</v-table>
	</v-sheet>
</template>
