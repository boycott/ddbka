// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

const site = "https://ddbka.co.uk";

// https://astro.build/config
export default defineConfig({
  site,
  output: "static",

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),

  integrations: [sitemap({
    filter: (page) => page === new URL('/', site).toString()
    // filter: (page) => page !== new URL('/404/', site).toString()
  })]
});