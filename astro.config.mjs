// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  // هذا السطر مهم جداً لأكواد SEO، لا تحذفه
  site: 'https://ahla-qisas.vercel.app', 
  // أزلنا Sitemap مؤقتاً لحل مشكلة البناء
  integrations: [
    mdx(),
    sitemap(),
  ],
});
