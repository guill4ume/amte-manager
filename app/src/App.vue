<script lang="ts" setup>
import { AxiosError } from "axios";
import { watch, getCurrentInstance, ref, onMounted, defineAsyncComponent, provide, computed } from "vue";
import { useRouter } from "vue-router";
import { DB } from "./main";
import logo from "@/assets/logo.png";
import { useTheme } from "vuetify";

const Login = defineAsyncComponent(() => import("@/components/Login.vue"));

const props = defineProps({
	error: {
		type: Error,
		required: false,
	},
});

const user = ref<{
	name: string;
	privLevel: number;
}>();
provide("user", user);

const state = ref<"loading" | "login" | "logged">("loading");
const links = [
	{ to: { name: "dashboard" }, label: "Dashboard" },
	{ to: { name: "players" }, label: "Players (WIP)" },
	{ to: { name: "guilds" }, label: "Guilds" },
	{ to: { name: "races" }, label: "Races" },
	{ to: { name: "spells" }, label: "Spells" },
	{ to: { name: "styles" }, label: "Styles" },
	{ to: { name: "items" }, label: "Item templates (WIP)" },
	{ to: { name: "merchantitems" }, label: "Merchant Lists" },
	{ to: { name: "mobloot" }, label: "Mob Loots" },
	{ to: { name: "textnpcs" }, label: "TextNPCs" },
	{ to: { name: "npctemplates" }, label: "NPC Templates (WIP)" },
	{ to: { name: "maps" }, label: "Maps" },
	{ to: { name: "quests" }, label: "Quests" },
	{ to: { name: "daoclists" }, label: "Static Values" },
	{ to: { name: "tools" }, label: "Tools" },
];

DB.showLoginForm = async () => {
	console.log("showLoginForm");
	state.value = "login";
	while (true) {
		await new Promise((r) => setTimeout(r, 500));
		if (state.value !== "login") {
			window.location.reload();
			return state.value === "logged";
		}
	}
};
const handleLogin = (u: (typeof user)["value"]) => {
	user.value = u;
	state.value = "logged";
};
const router = useRouter();

onMounted(async () => {
	user.value = await DB.checkLoggedIn();
	state.value = user.value ? "logged" : "login";
	if (!user.value) await DB.showLoginForm();
});

watch(user, (u) => {
	if (u && u.privLevel < 2 && (router.currentRoute.value.name === "dashboard" || router.currentRoute.value.path === "/")) {
		router.push({ name: "questList" });
	}
});

// Axios errors management
const errorShown = ref(props.error);
watch(
	() => props.error,
	() => (errorShown.value = props.error),
);

async function logout() {
	await DB.logout();
	alert("You have been logged out.");
	window.location.reload();
}

const theme = useTheme();
const themeSelected = computed(() => (theme.current.value.dark ? ["dark"] : []));

function toggleTheme() {
	theme.global.name.value = theme.current.value.dark ? "light" : "dark";
	window.localStorage.setItem("dark", theme.current.value.dark ? "true" : "false");
}

onMounted(() => {
	if (window.localStorage.getItem("dark") !== "true") return;
	theme.global.name.value = "dark";
});

const _errors = new WeakMap<object, string>();

function renderAxiosError(error: AxiosError) {
	const resolvedText = _errors.get(error);
	if (resolvedText) return resolvedText;

	const text = `API call error: ${error.message}
Request:
\tmethod=${error.config?.method} host=${error.config?.baseURL}
\tpath=${error.config?.url}
Response details:
\tstatus=${error.response?.status ?? "?"} (${error.response?.statusText ?? "?"})
\tbody=${JSON.stringify(error.response?.data)}
`;
	const instance = getCurrentInstance();
	if (error.response?.data instanceof Blob)
		error.response?.data
			?.text()
			.then((s) => _errors.set(error, `${text}\tbody=${s}`))
			.then(() => instance?.proxy?.$forceUpdate());
	_errors.set(error, text);
	return text;
}

function renderError(error: any) {
	if (error instanceof AxiosError) return renderAxiosError(error);
	if (error instanceof Error) return `Unhandled error: ${error.name}\nStack: ${error.stack}`;
	return String(error);
}
</script>

<template>
	<v-app>
		<v-navigation-drawer>
			<template v-slot:prepend>
				<v-list-item lines="two" :prepend-avatar="logo" title="Amte Manager" />
			</template>
			<v-divider></v-divider>

			<v-list nav density="compact">
				<v-list-item v-if="user && user.privLevel >= 2" :to="{ name: 'dashboard' }" title="Dashboard" prepend-icon="mdi-home-analytics" />
				
				<template v-if="user && user.privLevel >= 2">
					<v-list-subheader title="Players" />
					<v-list-item :to="{ name: 'players' }" title="Players" prepend-icon="mdi-account" />
					<v-list-item :to="{ name: 'guilds' }" title="Guilds" prepend-icon="mdi-account-group" />

					<v-list-subheader title="Mapping" />
					<v-list-item :to="{ name: 'maps' }" title="Maps" prepend-icon="mdi-map" />
					<v-list-item :to="{ name: 'npctemplates' }" title="NPC Templates (WIP)" prepend-icon="mdi-card-account-details" />
					<v-list-item :to="{ name: 'merchantitems' }" title="Merchant Lists" prepend-icon="mdi-text" />
					<v-list-item :to="{ name: 'textnpcs' }" title="TextNPCs" prepend-icon="mdi-message-bulleted" />
				</template>

				<v-list-subheader title="Player Quests" />
				<v-list-item :to="{ name: 'mobList' }" title="PNJs/NPCs" prepend-icon="mdi-account-edit" />
				<v-list-item :to="{ name: 'quests' }" title="Quests" prepend-icon="mdi-map-marker-radius" />

				<template v-if="user && user.privLevel >= 2">
					<v-list-item :to="{ name: 'lootList' }" title="Mob Loots (WIP)" prepend-icon="mdi-sack" />
					<v-list-item :to="{ name: 'items' }" title="Item templates" prepend-icon="mdi-puzzle-edit" />

					<v-list-subheader title="Database / values" />
					<v-list-item :to="{ name: 'races' }" title="Races" prepend-icon="mdi-human" />
					<v-list-item :to="{ name: 'spells' }" title="Spells" prepend-icon="mdi-auto-fix" />
					<v-list-item :to="{ name: 'styles' }" title="Styles" prepend-icon="mdi-sword" />
					<v-list-item :to="{ name: 'daoclists' }" title="Static Values" prepend-icon="mdi-script-text" />
					<v-list-item :to="{ name: 'tools' }" title="Tools" prepend-icon="mdi-toolbox" />
				</template>
			</v-list>

			<template v-slot:append>
				<v-list density="compact" nav @update:selected="toggleTheme" :selected="themeSelected">
					<v-list-item value="dark">
						<template v-slot:prepend="{ isActive }">
							<v-list-item-action start>
								<v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
							</v-list-item-action>
						</template>
						<v-list-item-title>Dark</v-list-item-title>
					</v-list-item>

					<v-divider />
					<v-list-item :disabled="!user" @click="logout" prepend-icon="mdi-logout">
						Logout
						<template v-slot:append>
							<span class="text-caption text-right">{{ user ? `(logged as ${user.name})` : `` }}</span>
						</template>
					</v-list-item>
					<v-list-item class="text-caption text-center">
						By
						<a href="https://github.com/jeremv42" rel="noopener noreferrer" target="_blank">Dre</a>
						with ❤️
					</v-list-item>
				</v-list>
			</template>
		</v-navigation-drawer>

		<v-main class="grey lighten-3">
			<div v-if="state === 'loading'" style="width: 100%; text-align: center">
				<v-progress-circular indeterminate />
			</div>
			<v-container fluid>
				<v-row v-if="state !== 'loading'">
					<v-col>
						<router-view />
					</v-col>
				</v-row>

				<v-dialog v-if="state === 'login'" :model-value="true" class="modal" retain-focus persistent>
					<Login @logged="handleLogin" />
				</v-dialog>
				<v-dialog v-if="state !== 'login' && errorShown" :model-value="true" class="modal modal-generic-error">
					<v-card>
						<v-card-title>Error</v-card-title>

						<v-card-text>
							<pre>{{ renderError(errorShown) }}</pre>
						</v-card-text>

						<v-card-actions>
							<v-btn @click="errorShown = undefined">Close</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-container>
		</v-main>
	</v-app>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css");
</style>
