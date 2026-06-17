import { createApp, ref } from "vue";
import { createVuetify } from "vuetify/dist/vuetify";
import App from "@/App.vue";
import { router } from "@/router";
import { DBConnection } from "@/dbconnection";

import "vuetify/dist/vuetify.css";
import "./assets/style.scss";

export const DB = new DBConnection(import.meta.env.VITE_APP_AMTE_JSON_URI ?? "/api");

async function main() {
	await new Promise((r) => setTimeout(r, 100));
	const error = ref<unknown>();
	const app = createApp(App, { error });
	app.use(router);

	const vuetify = createVuetify({});
	app.use(vuetify);

	app.mount("#app");
	app.config.errorHandler = (err, _instance, info) => {
		console.error(err, info);
		error.value = err;
	};
}

main().catch((err) => console.error(err));
