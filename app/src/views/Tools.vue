<script lang="ts" setup>
import GuildEmblem from "@/components/GuildEmblem.vue";
import GroupBox from "@/components/Utils/GroupBox.vue";
import { computed } from "vue";
import { ref } from "vue";

const currentTab = ref("emblem");

const pattern = ref(0);
const primary = ref(0);
const secondary = ref(0);
const logo = ref(1);

const emblem = computed({
	get: () => (pattern.value << 7) | (primary.value << 3) | (secondary.value | 0) | (logo.value << 9),
	set: (emblem: number) => {
		pattern.value = (emblem >> 7) & 0x3;
		primary.value = (emblem >> 3) & 0xf;
		secondary.value = emblem & 0x7;
		logo.value = (emblem >> 9) & 0xff;
	},
});
</script>

<template>
	<v-sheet :elevation="1" rounded>
		<v-toolbar>
			<v-toolbar-title>
				<v-tabs v-model="currentTab" center-active>
					<v-tab value="emblem">Guild emblems</v-tab>
				</v-tabs>
			</v-toolbar-title>
		</v-toolbar>

		<GroupBox v-if="currentTab === 'emblem'" title="">
			<v-slider v-model="pattern" :min="0" :max="3" :step="1" hide-details label="pattern" />
			<v-slider v-model="primary" :min="0" :max="15" :step="1" hide-details label="primary" />
			<v-slider v-model="secondary" :min="0" :max="7" :step="1" hide-details label="secondary" />
			<v-slider v-model="logo" :min="1" :max="255" :step="1" hide-details label="logo" />
			<v-text-field v-model.number="emblem" hide-details label="id" density="compact" single-line />
			<br />
			<GuildEmblem :emblem="emblem" style="height: 200px" />
		</GroupBox>
	</v-sheet>
</template>
