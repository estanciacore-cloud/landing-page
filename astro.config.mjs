import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import path from "path";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://estanciacore.net.ar/",
  integrations: [tailwind(), icon()],
  output: "hybrid",

  vite: {
    resolve: {
      alias: {
        "~": path.resolve("./src"),
      },
    },
  },

  adapter: cloudflare()
});