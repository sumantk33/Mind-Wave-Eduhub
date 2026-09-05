import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  root: ".",
  esbuild: {
    drop: ["console", "debugger"],
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    port: 3000,
    open: true,
  },
});
