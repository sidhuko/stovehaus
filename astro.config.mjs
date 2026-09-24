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

  // Directory-format output (`/sauna/index.html`) is Astro's default, and a
  // static host answers a request for `/sauna` with a 301 to `/sauna/`. Being
  // explicit here keeps the dev server honest about the same thing, so a link
  // that redirects in production also redirects locally.
  trailingSlash: 'always',

  // English on the bare routes, Spanish under /es/ with the SAME slugs.
  // `prefixDefaultLocale: false` is what keeps English unprefixed; the routes
  // themselves are real files under src/pages and src/pages/es.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
