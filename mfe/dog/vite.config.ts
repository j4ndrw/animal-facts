import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "_site",
        assetsDir: "assets-vite", // default = "assets"
        manifest: true,
        rollupOptions: {
            input: "/src/main.tsx",
        },
    },
});
