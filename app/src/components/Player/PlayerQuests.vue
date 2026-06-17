<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import GroupBox from "@/components/Utils/GroupBox.vue";
import { DB } from "@/main";

const props = defineProps<{
	player: any;
}>();

const loading = ref(true);
const playerQuests = ref<any[]>([]);
const questDetails = ref<Map<number, any>>(new Map());

function getQuestId(propStr: string): number | null {
	try {
		const p = JSON.parse(propStr);
		return p.QuestId || null;
	} catch {
		return null;
	}
}

async function load() {
	if (!props.player) {
		loading.value = false;
		return;
	}

	loading.value = true;
	try {
		// Load player quests
		const [_playerQuests] = await DB.selectRaw(
			`* FROM quest WHERE Character_ID = '${props.player.DOLCharacters_ID}' ORDER BY Name ASC LIMIT 10000`
		);
		playerQuests.value = _playerQuests;

		// Load quest details (dataquestjson) for all quests
		const questIds = _playerQuests
			.map((q: any) => getQuestId(q.CustomPropertiesString))
			.filter((id: number | null) => id !== null);
		if (questIds.length > 0) {
			const [_questDetails] = await DB.selectRaw(
				`Id, Name, Description, Summary, MinLevel, MaxLevel, RewardMoney, RewardXP, RewardRP, RewardBP FROM dataquestjson WHERE Id IN (${questIds.join(",")})`
			);
			const detailsMap = new Map<number, any>();
			for (const q of _questDetails) {
				detailsMap.set(q.Id, q);
			}
			questDetails.value = detailsMap;
		}
	} catch (err) {
		console.error("PlayerQuests load error:", err);
	}
	loading.value = false;
}

onMounted(load);
watch(() => props.player, load);

function formatPrice(price: number): string {
	if (!price) return "-";
	const copper = price % 100;
	const silver = Math.floor(price / 100) % 100;
	const gold = Math.floor(price / 10000) % 100;
	const platinum = Math.floor(price / 1000000) % 100;
	const mithril = Math.floor(price / 100000000);
	const parts: string[] = [];
	if (mithril) parts.push(`${mithril}m`);
	if (platinum) parts.push(`${platinum}p`);
	if (gold) parts.push(`${gold}g`);
	if (silver) parts.push(`${silver}s`);
	if (copper) parts.push(`${copper}c`);
	return parts.join(" ") || "0c";
}

function getQuestGoals(propStr: string): { goalId: number; isActive: boolean; isDone: boolean; isFinished: boolean }[] {
	try {
		const props = JSON.parse(propStr);
		if (!props.Goals) return [];
		return props.Goals.map((g: any) => ({
			goalId: g.GoalId,
			isActive: g.IsActive || false,
			isDone: g.IsDone || false,
			isFinished: g.IsFinished || false,
		}));
	} catch {
		return [];
	}
}
</script>

<template>
	<GroupBox :title="`Quests (${playerQuests.length})`">
		<v-progress-linear v-if="loading" indeterminate />
		<template v-else>
			<v-table density="compact" v-if="playerQuests.length">
				<thead>
					<tr>
						<th>Quest Name</th>
						<th>Status</th>
						<th>Level Range</th>
						<th>Rewards</th>
						<th>Goals Progress</th>
					</tr>
			</thead>
			<tbody>
				<tr v-for="quest in playerQuests" :key="quest.Quest_ID">
					<td>
						<router-link
							v-if="getQuestId(quest.CustomPropertiesString)"
							:to="{ name: 'quest', params: { id: getQuestId(quest.CustomPropertiesString) } }"
						>
							{{ questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.Name || quest.Name }}
						</router-link>
						<span v-else>{{ quest.Name }}</span>
						<div v-if="questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.Summary" class="text-caption text-grey">
							{{ questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.Summary }}
						</div>
					</td>
					<td>
						<v-chip
							:color="quest.Step < 0 ? 'success' : 'warning'"
							size="small"
						>
							{{ quest.Step < 0 ? 'Completed' : `Step ${quest.Step}` }}
						</v-chip>
					</td>
					<td class="text-caption">
						<template v-if="questDetails.get(getQuestId(quest.CustomPropertiesString)!)">
							{{ questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.MinLevel }} -
							{{ questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.MaxLevel }}
						</template>
						<span v-else class="text-grey">-</span>
					</td>
					<td class="text-caption">
						<template v-if="questDetails.get(getQuestId(quest.CustomPropertiesString)!)">
							<div v-if="questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.RewardXP" class="text-info">
								{{ questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.RewardXP?.toLocaleString() }} XP
							</div>
							<div v-if="questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.RewardMoney" class="text-warning">
								{{ formatPrice(questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.RewardMoney) }}
							</div>
							<div v-if="questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.RewardRP" class="text-purple">
								{{ questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.RewardRP?.toLocaleString() }} RP
							</div>
							<div v-if="questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.RewardBP" class="text-cyan">
								{{ questDetails.get(getQuestId(quest.CustomPropertiesString)!)?.RewardBP?.toLocaleString() }} BP
							</div>
						</template>
						<span v-else class="text-grey">-</span>
					</td>
					<td>
						<div class="d-flex flex-wrap ga-1">
							<v-chip
								v-for="(goal, idx) in getQuestGoals(quest.CustomPropertiesString)"
								:key="idx"
								:color="goal.isFinished ? 'success' : goal.isDone ? 'info' : goal.isActive ? 'warning' : 'grey'"
								size="x-small"
								:title="`Goal ${goal.goalId}: ${goal.isFinished ? 'Finished' : goal.isDone ? 'Done' : goal.isActive ? 'Active' : 'Not started'}`"
							>
								{{ goal.goalId }}
							</v-chip>
						</div>
					</td>
				</tr>
			</tbody>
		</v-table>
		<v-alert v-else type="info" density="compact">No quests found for this player</v-alert>
		</template>
	</GroupBox>
</template>
