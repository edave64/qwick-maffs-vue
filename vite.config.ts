import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { externalizeDeps } from "vite-plugin-externalize-deps";

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), externalizeDeps()],
	build: {
		lib: {
			entry: "./src/main.ts",
			name: "qwick-maffs-vue",
		},
	},
});
