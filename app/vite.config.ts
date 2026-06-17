import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
	plugins: [vue()],
	resolve: {
		alias: [
			{
				find: "@",
				replacement: resolve(__dirname, "./src"),
			},
		],
	},
	server: {
		port: 5174,
		proxy: !true
			? {
				"^/api/world/ws": {
					target: "ws://127.0.0.1:10380",
					ws: true,
				},
				"^/api/*": "http://127.0.0.1:10380",
			}
			: {
				"^/api/world/ws": {
					target: "wss://manager.resurrection.amtenael.fr",
					changeOrigin: true,
					ws: true,
				},
				"^/api/*": "https://manager.resurrection.amtenael.fr",
			},
	},

}));
