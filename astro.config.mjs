import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://mountm.tech', base: process.env.SITE_BASE || '/' });
