// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Served at the domain root via a GitHub Pages custom domain (public/CNAME),
  // so `base` stays "/". If this ever moves to a project page at
  // user.github.io/repo/, `base` must be set to the repo name or every asset
  // URL 404s.
  site: 'https://stovehaus.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
