// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

const site = "https://ddbka.co.uk";

// https://astro.build/config
export default defineConfig({
  site,
  output: "static",

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Open Sans",
      cssVariable: "--font-open-sans",
      weights: [300, 400, 500, 600, 700, 800],
    }
  ],

  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),

  integrations: [sitemap({
    filter: (page) => process.env.VERCEL_ENV !== 'preview',
  })]
});