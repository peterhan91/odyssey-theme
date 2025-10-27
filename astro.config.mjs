import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  // Update to your production domain (required for correct sitemap/canonicals)
  site: 'http://localhost:4321/',
  sitemap: true,
  integrations: [sitemap(), mdx(), lit(), icon()],
});
