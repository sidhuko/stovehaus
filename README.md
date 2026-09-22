# Stovehaus website

Marketing site for Stovehaus — wood-fired sauna heaters, wood-fired jacuzzi
heaters and gas fire pits, fabricated in Mexico for export to the United States
and Canada.

Astro + Tailwind, statically rendered. No backend.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run audit    # build, then check the output against the brand guidelines
```

## Read this first

**[BRAND.md](BRAND.md)** is the contract. The identity kit in `../brand-kit/`
specifies this site down to header height, hero composition and card anatomy,
and BRAND.md records both the rules and the two places the site had to go beyond
kit v1.0 (a third line colour for fire pits, and gold being unusable for text
over a photograph).

`npm run audit` enforces the mechanical half of it: 27 colour-contrast
assertions plus a pass over the built HTML for voice, unit-casing, logo minimum
sizes, square corners and cascade-layer regressions.

## The honest-data rule

The guidelines PDF states that every model name, kW figure, dimension and price
in it is a placeholder. Exactly one real product exists — the **Versa 13**, from
the 0002 event stand: 15.4 kW, 6–13 m², 110 kg of stone.

So `src/data/products.ts` carries that one product and eight `status: 'pending'`
slots, which render as visibly empty cards. Nothing on this site is invented. If
you do not have a tested figure, leave the slot pending — a slot that looks like
a product is how a made-up specification reaches a dealer.

Open questions (phone number, `m²` vs `m³`, model codes, certification status)
are listed at the bottom of BRAND.md and marked `TODO` in the data files.

## Layout

```
src/
  data/products.ts     product + line data — the single source of truth
  data/site.ts         nav, contact, the four messages, certification status
  data/images.ts       photography imports, so Astro can optimise them
  styles/global.css    brand tokens, @font-face, type scale, components
  components/          Header · Footer · Hero · ProductCard · SpecTable ·
                       LineChip · LinePage · AudienceFork · MessageBlock
  pages/               one file per route
public/
  brand/               the nine logo SVGs, copied from the kit — never rebuilt
  fonts/               Afacad, Spectral, IBM Plex Mono as woff2, self-hosted
  licenses/            SIL Open Font License for each face
scripts/audit-brand.mjs
```

The homepage forks to two equally weighted paths — dealers and end buyers — so
neither audience is treated as secondary.

## Deploying

Not set up. The build is plain static output in `dist/`, so it will go anywhere.
The Vercel CLI is not installed on this machine (`npm i -g vercel`) if that is
the target.
