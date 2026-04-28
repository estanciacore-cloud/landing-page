import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: "https://estanciacore.net.ar/",
  integrations: [tailwind(), icon()],
  output: "hybrid",
  adapter: cloudflare(),
  vite: {
    resolve: {
      alias: {
        "~": path.resolve("./src"),
      },
    },
  },
});