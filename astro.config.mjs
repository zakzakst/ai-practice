// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: 'https://zakzakst.github.io',
  base: '/ai-practice',
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      // NOTE: 下記エラー対応のため記載
      // https://github.com/withastro/astro/issues/15857
      exclude: ["astro/runtime/client/dev-toolbar/entrypoint.js"],
    },
  },
});
