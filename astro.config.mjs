import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/git-katalist/spoon.git",
  base: "/spoon",
  integrations: [mdx()],
});
