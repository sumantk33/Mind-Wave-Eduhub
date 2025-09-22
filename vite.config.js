import { defineConfig } from "vite";

export default defineConfig({
  base: "/Mind-Wave-Eduhub/",
  root: ".",
  esbuild: {
    drop: ["console", "debugger"], // removes console.* and debugger in production build
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
