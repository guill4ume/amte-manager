<script lang="ts" setup>
import { DB } from "@/main";
import { ref } from "vue";

const emit = defineEmits<{
	(event: "logged", user: { name: string; privLevel: number }): void;
}>();

const loading = ref(false);
const username = ref("");
const password = ref("");
const error = ref("");

async function submit() {
	loading.value = true;
	try {
		const user = await DB.login(username.value, password.value);
		emit("logged", user);
	} catch (err) {
		error.value = err instanceof Error ? err.message : String(err);
	}
	loading.value = false;
}
</script>

<template>
	<v-form @submit.prevent="submit">
		<v-card max-width="350" class="mx-auto mt-10">
			<v-card-title>Login</v-card-title>
			<v-card-text>
				<v-alert type="error">You need to be logged to use this tool.</v-alert>
				<v-alert v-if="error" type="error">{{ error }}</v-alert>
				<br />
				<v-text-field variant="outlined" label="Username" v-model="username" />
				<v-text-field variant="outlined" label="Password" v-model="password" type="password" />
			</v-card-text>
			<v-card-actions>
				<v-spacer />
				<v-btn color="primary" type="submit" :loading="loading">Login</v-btn>
			</v-card-actions>
		</v-card>
	</v-form>
</template>
