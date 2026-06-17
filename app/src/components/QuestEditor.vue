<script lang="ts" setup>
import NPCFind from "./NPCFind.vue";
import QuestBaseGoal from "./QuestGoal/QuestBaseGoal.vue";
import { BaseQuestDB, QuestDB, QuestGoal } from "@/models/Quest";
import QuestGoalBlueprint from "@/components/QuestGoal/QuestGoalBlueprint.vue";
import ItemAutocomplete from "@/components/ItemAutocomplete.vue";
import { DaocClasses } from "@/models/DaocClasses";
import { onMounted, ref, watch, computed } from "vue";
import { DB } from "@/main";
import { useTheme } from "vuetify";
import QuestStatistics from "./QuestGoal/QuestStatistics.vue";

const props = defineProps<{
	questDB: BaseQuestDB;
}>();
const emit = defineEmits<{
	(event: "cancel"): void;
	(event: "saved"): void;
	(event: "clone"): void;
}>();

const loading = ref(false);
const quest = ref<QuestDB>();
const goalType = ref("DOL.GS.Quests.InteractGoal");
const tabPage = ref("edit");


const allowedClasses = computed({
	get: () =>
		props.questDB.AllowedClasses?.split("|")
			.map((i) => parseInt(i))
			.filter((i) => !isNaN(i)) ?? [],
	set: (val: number[]) => (props.questDB.AllowedClasses = val.filter((i) => !isNaN(i)).join("|")),
});
const optionalRewardItemTemplates = computed({
	get: () => props.questDB.OptionalRewardItemTemplates.split("|").filter((s) => !!s),
	set: (val: string[]) => (props.questDB.OptionalRewardItemTemplates = val.join("|")),
});
const finalRewardItemTemplates = computed({
	get: () => props.questDB.FinalRewardItemTemplates.split("|").filter((s) => !!s),
	set: (val: string[]) => (props.questDB.FinalRewardItemTemplates = val.join("|")),
});

watch(
	() => props.questDB,
	() => (quest.value = new QuestDB(props.questDB))
);

onMounted(() => (quest.value = new QuestDB(props.questDB)));

function addGoal(Type: string) {
	if (!quest.value) return;

	const Id = quest.value.goals.reduce((id, g) => Math.max(id, g.Id + 1), 1);
	quest.value.goals.push(
		QuestGoal.createGoal(quest.value, {
			Id,
			Type,
			Data: { Description: "", StartGoalsDone: Id > 1 ? [Id - 1] : [] },
		})
	);
}

function removeGoal(goal: QuestGoal) {
	if (!quest.value) return;

	const idx = quest.value.goals.indexOf(goal);
	if (idx >= 0) quest.value.goals.splice(idx, 1);
}

async function save() {
	if (!quest.value) return;

	try {
		loading.value = true;
		const obj = quest.value.toJSON();
		// Avoid sending back client-formatted date string that fails MariaDB parsing
		if ('LastTimeRowUpdated' in obj) {
			delete (obj as any).LastTimeRowUpdated;
		}

		if (quest.value.db.Id > 0) {
			// it's not a new quest
			await DB.update("dataquestjson", obj, `ID = ${quest.value.db.Id}`);
		} else {
			// new quest
			delete (obj as any).Id;
			await DB.insert("dataquestjson", obj);
		}
	} catch (err) {
		alert(`Error: ${err}`);
		return;
	} finally {
		loading.value = false;
	}
	console.log(JSON.stringify(quest.value, null, 4));
	emit("saved");
}

async function clone() {
	emit("clone");
}

const theme = useTheme();
</script>

<template>
	<v-sheet v-if="quest" rounded>
		<v-toolbar rounded>
			<v-toolbar-title>
				<span class="text-caption" style="position: absolute; bottom: 1px">ID: {{ quest.db.Id }}</span>
				Quest: {{ quest.db.Name }}
			</v-toolbar-title>

			<v-tabs v-model="tabPage">
				<v-tab value="edit">Edit</v-tab>
				<v-tab value="players">Players</v-tab>
			</v-tabs>

			<v-btn v-if="questDB.Id >= 0" @click="clone()" icon="mdi-content-copy" />
		</v-toolbar>
		<v-card-text v-if="tabPage === 'players'">
			<QuestStatistics :quest="quest" />
		</v-card-text>
		<v-card-text v-else-if="tabPage === 'edit'">
			<v-card class="mb-2 elevation-1">
				<v-card-title class="pb-0 pt-2">
					<h5>Informations</h5>
				</v-card-title>
				<v-card-text>
					<v-row>
						<v-col cols="12" class="text-center">
							<h4>Quest journal</h4>
						</v-col>
						<v-col cols="6">
							<v-text-field
								type="text"
								v-model="quest.db.Name"
								label="Name -- visible in the player's quest journal"
								counter
								maxlength="250"
							/>
						</v-col>
						<v-col cols="12">
							<v-text-field
								v-model="quest.db.Description"
								label="Description -- visible in the player's quest journal"
								counter
								maxlength="250"
							/>
						</v-col>
						<v-col cols="12" class="text-center">
							<h4>Offering the quest</h4>
						</v-col>
						<v-col cols="12">
							<v-textarea
								v-model="quest.db.Story"
								label="Story -- visible in the window to accept the quest"
								counter="1800"
								maxlength="2000"
							/>
						</v-col>
						<v-col cols="12">
							<v-text-field
								v-model="quest.db.Summary"
								label="Summary -- visible in the window to accept the quest"
								counter
								maxlength="250"
							/>
						</v-col>

						<v-col cols="12" class="text-center">
							<h4>Finishing the quest, selection of rewards</h4>
						</v-col>
						<v-col cols="12">
							<v-textarea
								v-model="quest.db.Conclusion"
								label="Conclusion -- visible in the window to accept the reward"
								counter="1800"
								maxlength="2000"
							/>
						</v-col>
					</v-row>
				</v-card-text>
			</v-card>

			<v-card
				class="mb-2 elevation-1"
				:style="{
					'background-color': theme.current.value.dark ? '#101010' : '#f8f8f8',
				}"
			>
				<v-card-title class="pb-0 pt-2">
					<h5>Conditions</h5>
				</v-card-title>
				<v-card-text>
					<v-row>
						<v-col cols="1">
							<v-text-field type="number" v-model="quest.db.NpcRegion" label="Region" hide-details />
						</v-col>
						<v-col cols="4">
							<v-text-field type="string" v-model="quest.db.NpcName" label="NPC Name" hide-details />
						</v-col>
						<v-col cols="1" class="pt-7 d-flex align-center">
							<NPCFind
								@select="(name, region, _npc) => { quest!.db.NpcRegion = region; quest!.db.NpcName = name; }"
								:search-default="quest!.db.NpcName"
							/>

						</v-col>
						<v-col cols="1">
							<v-text-field type="number" v-model="quest.db.MinLevel" label="MinLevel" hide-details />
						</v-col>
						<v-col cols="1">
							<v-text-field type="number" v-model="quest.db.MaxLevel" label="MaxLevel" hide-details />
						</v-col>
						<v-col cols="1">
							<v-text-field type="number" v-model="quest.db.MaxCount" label="MaxCount" hide-details />
						</v-col>
						<v-col cols="1">
							<v-checkbox type="boolean" v-model="quest.db.isDaily" label="Daily" hide-details />
						</v-col>
					</v-row>

					<v-row>
						<v-col cols="6">
							<v-autocomplete
								v-model="allowedClasses"
								:items="DaocClasses"
								item-title="name"
								item-value="id"
								multiple
								clearable
								label="Allowed classes"
								hint="If it's empty, everyone can do the quest"
								persistent-hint
							>
								<template v-slot:item="{ props, item }">
									<v-list-item
										v-bind="props"
										:style="{ backgroundColor: item.color }"
										:subtitle="item.category"
									/>
								</template>
								<template v-slot:chip="{ props, item }">
									<v-chip
										v-bind="props"
										:style="{
											backgroundColor: item.color,
											color: 'white',
											margin: '0 3px',
										}"
										:text="item.name"
									/>
								</template>
							</v-autocomplete>
						</v-col>
						<v-col cols="6">
							<v-text-field
								v-model="quest.db.QuestDependency"
								label="QuestDependency"
								hint="If this quest is dependent on other quests being done first then the IDs of those quests should be here (separated with |)"
								persistent-hint
							/>
						</v-col>
						<v-col cols="6">
							<v-text-field
								v-model="quest.db.NotQuestDependency"
								label="NotQuestDependency"
								hint="If this quest should not be available if others quests has been done add their IDs (separated with |)"
								persistent-hint
							/>
						</v-col>
					</v-row>
				</v-card-text>
			</v-card>

			<v-card
				class="mb-2 elevation-1"
				:style="{
					'background-color': theme.current.value.dark ? '#081504' : '#efffd5',
				}"
			>
				<v-card-title class="pb-0 pt-2">
					<h5>Rewards</h5>
				</v-card-title>
				<v-card-text>
					<v-row>
						<v-col cols="3">
							<v-text-field v-model="quest.db.RewardMoney" type="number" label="Reward money (in copper)" min="0" />
						</v-col>
						<v-col cols="3">
							<v-text-field v-model="quest.db.RewardXP" type="number" label="Reward XP" min="0" />
						</v-col>
						<v-col cols="2">
							<v-text-field v-model="quest.db.RewardRP" type="number" label="Reward RP" min="0" />
						</v-col>
						<v-col cols="2">
							<v-text-field v-model="quest.db.RewardBP" type="number" label="Reward BP" min="0" />
						</v-col>
						<v-col cols="2">
							<v-text-field v-model="quest.db.RewardCLXP" type="number" label="Reward CL XP" min="0" />
						</v-col>
						<v-col cols="2">
							<v-text-field
								v-model="quest.db.RewardBreamorFaction"
								type="number"
								label="Reward Breamor Faction"
								min="-1000000"
								max="1000000"
							/>
						</v-col>
						<v-col cols="10">
							<ItemAutocomplete
								v-model:selectedItems="finalRewardItemTemplates"
								label="FinalRewardItemTemplates"
								hint="A list of item template"
								persistent-hint
								multiple
							/>
						</v-col>
						<v-col cols="1">
							<v-text-field
								v-model="quest.db.NbChooseOptionalItems"
								type="number"
								label="Choose item count"
								min="1"
								max="7"
							/>
						</v-col>
						<v-col cols="11">
							<ItemAutocomplete
								v-model:selectedItems="optionalRewardItemTemplates"
								label="OptionalRewardItemTemplates"
								hint="A list of item template"
								persistent-hint
								multiple
							/>
						</v-col>
					</v-row>
				</v-card-text>
			</v-card>

			<!-- Visual editor -->
			<QuestGoalBlueprint :quest="quest" />

			<!-- Steps -->
			<QuestBaseGoal
				v-for="goal in quest.goals"
				:key="goal.Id"
				:quest="quest"
				:goalId="goal.Id"
				@remove="removeGoal($event)"
			/>

			<v-row>
				<v-col class="text-right pt-0 pr-4">
					<v-btn @click="addGoal(goalType)" icon="mdi-plus-circle" color="success" />
				</v-col>
			</v-row>
		</v-card-text>
		<v-card-actions>
			<v-spacer />
			<v-btn variant="text" @click="$emit('cancel')" :loading="loading"> Cancel </v-btn>
			<v-btn color="primary" @click="save" :loading="loading">Save</v-btn>
		</v-card-actions>
	</v-sheet>
</template>
