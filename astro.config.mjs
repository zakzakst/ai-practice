// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    // NOTE: 下記エラー対応のため記載
    // https://github.com/withastro/astro/issues/15857
    optimizeDeps: {
      include: ["astro/toolbar"],
      exclude: ["astro/runtime/client/dev-toolbar/entrypoint.js"],
    },
  },
});
