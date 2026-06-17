<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
	<v-card elevation="1" class="mb-5">
		<v-card-subtitle>{{ title }}</v-card-subtitle>
		<v-card-text>
			<slot />
		</v-card-text>
	</v-card>
</template>

<style scoped>

</style>
