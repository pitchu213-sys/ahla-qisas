// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap'; // أضفنا حزمة خريطة الموقع

// https://astro.build/config
export default defineConfig({
  // 1. أضف رابط موقعك الأساسي هنا (بدون شرطة مائلة في النهاية)
  site: 'https://ahla-qisas.vercel.app', 
  
  // 2. أضف sitemap() إلى الإضافات
  integrations: [mdx(), sitemap()] 
});
