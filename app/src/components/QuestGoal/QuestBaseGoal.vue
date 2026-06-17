<script lang="ts" setup>
import { QuestDB, QuestGoal } from "@/models/Quest";
import ItemAutocomplete from "@/components/ItemAutocomplete.vue";
import { computed, ref } from "vue";
import { useTheme } from "vuetify";
import { goalTypes } from "@/models/QuestGoalTypes";

const props = defineProps<{
	quest: QuestDB;
	goalId: number;
}>();

const goal = computed(() => props.quest.goals.find(g => g.Id === props.goalId) ?? new QuestGoal(props.quest, {}));

const type = computed<any>({
	get: () => goalTypes.find(gt => gt.type === goal.value?.Type) ?? goalTypes[0],
	set: (val: any) => {
		if (!goal.value)
			return;
		const goalData = goal.value.toJSON();
		if (!goalData)
			return;
		goalData.Type = val?.type ?? goalTypes[0].type;
		const idx = props.quest.goals.findIndex(g => g.Id === goal.value?.Id);
		props.quest.goals[idx] = QuestGoal.createGoal(props.quest, goalData);
	}
});

const goalComponent = computed(() => type.value.component);

const theme = useTheme();
function getStyle(type: any) {
	if (theme.current.value.dark)
		return { "background-color": type.colorDark };
	return { "background-color": type.color };
}

const visible = ref(false);
</script>

<template>
	<v-sheet :id="`goal-${goal.Id}`" rounded class="mb-2 elevation-1" :style="getStyle(type)">
		<v-toolbar rounded density="compact" @click="visible = !visible">
			<v-btn variant="text" :icon="visible ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
			<v-toolbar-title>
				<span style="display: inline-block; min-width: 4em;" class="text-caption">ID: {{ goal.Id }}</span> {{ goal.Description }}
			</v-toolbar-title>
			{{ type.title }}
			<v-btn color="error" small @click="$emit('remove', goal)" icon="mdi-delete" />
		</v-toolbar>
		<v-expand-transition>
			<v-card-text v-show="visible">
				<v-row>
					<v-col cols="6">
						<v-autocomplete
							label="Start when theses goals are done"
							:items="quest.goals"
							item-value="Id"
							:item-title="(g: any) => `${g.Id}.${g.Description}`"
							multiple
							chips
							v-model="goal.StartGoalsDone" />
					</v-col>
					<v-col cols="6">
						<v-autocomplete
							label="End theses goals are done"
							:items="quest.goals"
							item-value="Id"
							:item-title="(g: any) => `${g.Id}.${g.Description}`"
							multiple
							chips
							v-model="goal.EndWhenGoalsDone" />
					</v-col>
					<v-col cols="6">
						<v-select
							:items="goalTypes"
							item-title="text"
							v-model="type"
							label="Type"
							hide-details
							return-object />
					</v-col>
					<v-col cols="6">
						<v-text-field
							v-model="goal.Description"
							label="Description"
							hint="The text for the goal that appears in the player's quest journal"
							persistent-hint
							counter="240"
							maxlength="255" />
					</v-col>
				</v-row>

				<component :is="goalComponent" :quest="quest" :goal="goal"></component>

				<v-row v-if="type.type !== 'DOL.GS.Quests.EndGoal'">
					<v-col cols="6">
						<ItemAutocomplete
							v-model:selected-items="goal.GiveItem"
							label="Give item template"
							hint="Use pack size on this item to change the count"
							persistent-hint />
					</v-col>
					<v-col cols="6">
                        <v-text-field
                            v-model.number="goal.RewardBreamorFaction"
                            type="number"
                            label="Reward Breamor Faction (Goal)"
                            min="-1000000"
                            max="1000000"
                            hint="Faction gain/loss upon completion of this goal"
                            persistent-hint
                        />
                    </v-col>
				</v-row>
				<v-row>
					<v-col cols="6"><v-text-field v-model="goal.MessageStarted" label="System message when started" hide-details /></v-col>
					<v-col cols="6"><v-text-field v-model="goal.MessageAborted" label="System message when aborted" hide-details /></v-col>
					<v-col cols="6"><v-text-field v-model="goal.MessageDone" label="System message when done" hide-details /></v-col>
					<v-col cols="6"><v-text-field v-model="goal.MessageCompleted" label="System message when completed" hide-details /></v-col>
				</v-row>
			</v-card-text>
		</v-expand-transition>
	</v-sheet>
</template>
