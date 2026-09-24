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

`npm run audit` enforces the mechanical half of it: 31 colour-contrast
assertions plus a pass over all 29 built pages for voice (per language),
unit-casing, logo minimum sizes, square corners, cascade-layer regressions and
English/Spanish route parity.

## The honest-data rule

The guidelines PDF states that every model name, kW figure, dimension and price
in it is a placeholder, to be replaced with tested specifications before
anything is published or sent to a customer.

The Versa line is built to the **Stoveman series** sizing ladder — 13 / 16 / 20,
each also in an extended-firebox LS version. Stovehaus fabricates its own to
that ladder, which means every figure on this site is a **design target, not a
measurement**. Each one carries `basis: 'target'` and renders with a provisional
marker. Flip it to `'tested'` per model once the stove has been fired and
measured.

Two things follow that are easy to get wrong later:

- **Stoveman's CE / EN 15821 certification does not transfer** to a
  Stovehaus-built stove. Nothing here cites it.
- **Clearances to combustibles are not published.** They belong to a tested
  appliance, an installer quotes a job off them, and getting them wrong on a
  wood-burning stove is a fire risk.

The other two lines carry no figures at all: jacuzzi is `coming-soon`, fire pits
are `made-to-order` and have no catalogue because each burner is cut to the
opening it drops into.

Open questions are listed at the bottom of BRAND.md and marked `TODO` in the
data files.

## Layout

```
src/
  i18n/                en.ts + es.ts dictionaries, and the path helpers
  data/products.ts     structure and numbers — copy lives in i18n/
  data/site.ts         nav, contact, the four messages, certification status
  data/images.ts       photography imports, so Astro can optimise them
  styles/global.css    brand tokens, @font-face, type scale, components
  styles/effects.css   button treatments — .fx-* literal, .bx-* brand-native
  components/          Header · Footer · Hero · ProductCard · SpecTable ·
                       LineChip · AudienceFork · MessageBlock ·
                       ProvisionalNote · LanguageSelector
  components/pages/    the page bodies, shared by both languages
  pages/               thin route files: src/pages (English) and
                       src/pages/es (Spanish), same slugs in both
  pages/lab/buttons    internal, noindex: the four button effects side by side
                       with the brand rule each one touches
public/
  brand/               the nine logo SVGs, copied from the kit — never rebuilt
  fonts/               Afacad, Spectral, IBM Plex Mono as woff2, self-hosted
  licenses/            SIL Open Font License for each face
  CNAME · .nojekyll    GitHub Pages custom domain and Jekyll opt-out
scripts/audit-brand.mjs
.github/workflows/deploy.yml
```

## Languages

English on the bare routes (`/sauna/`), Spanish under `/es/` with the **same
slugs** (`/es/sauna/`). That is what makes the language switch a prefix
operation, which is what makes it impossible for the switcher to land on a
page that does not exist.

- **Copy lives in [`src/i18n/en.ts`](src/i18n/en.ts) and
  [`src/i18n/es.ts`](src/i18n/es.ts)**, typed against a shared `Dict` so a
  missing translation is a build error rather than an English string leaking
  into a Spanish page.
- **`src/components/pages/`** holds the page bodies. The files under
  `src/pages/` are four-line route stubs that pass a locale.
- **Numbers do not translate.** `15.4 kW` and `6–13 m³ (212–459 ft³)` are
  correct in both, because es-MX and en-US share the decimal point and
  thousands comma. Only labels move. A third locale that does not share them
  would make these keys too.
- **`<html lang>` is `es-MX`, not `es`** — a bare `es` reads as Peninsular
  Spanish, and mobile Chrome offers to translate a bare-`es` page for a
  Spanish reader.
- **"Built for the flame." is never translated.** The guidelines forbid it, and
  it only exists as outlined artwork inside the lockup, so there is no live
  type to translate. The audit fails the build if it ever appears as text.
- **`route` vs `navRoute`.** `route` is the page's own URL and drives canonical,
  hreflang and the switcher. `navRoute` is only which nav item lights up. A
  product page sets both, because it highlights its line but must switch to
  itself.

`npm run audit` checks route parity between the two trees, `<html lang>`,
hreflang alternates, and that every switcher targets the same route in the
other language.

## Photography

All Unsplash stock — see [CREDITS.md](CREDITS.md) for photo IDs and, more
importantly, the two rules about what stock may do here. The short version:
atmosphere and process only, never beside a figure as if it were the product.
Stovehaus has no product photography of its own yet, so no page shows a heater
and calls it a Versa.

The homepage forks to two equally weighted paths — dealers and end buyers — so
neither audience is treated as secondary.

## Deploying

GitHub Actions → GitHub Pages, at the custom domain **stovehaus.com**.
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every
push to `master`, and can be re-run by hand from the Actions tab.

The workflow installs, builds, then **gates the deploy on `scripts/audit-brand.mjs`
and `astro check`**. A page that breaks the identity or fails type checking does
not reach the domain.

### One-time setup

This directory is not a git repository yet. To wire it up:

```bash
git init -b master
git add -A && git commit -m "Stovehaus website"
git remote add origin git@github.com:<you>/<repo>.git
git push -u origin master
```

The workflow triggers on `master`. If you prefer `main`, change the branch in
both places.

Then, in the repo on GitHub:

1. **Settings → Pages → Source: GitHub Actions.** Not "Deploy from a branch" —
   the workflow publishes the artifact itself.
2. **Settings → Pages → Custom domain: `stovehaus.com`**, and tick *Enforce
   HTTPS* once the certificate is issued.
3. Point DNS at GitHub Pages — four `A` records for the apex
   (`185.199.108–111.153`), or an `ALIAS`/`ANAME` if your DNS host supports it.

[`public/CNAME`](public/CNAME) holds the domain and ships in every build, so a
deploy never resets the custom domain. `public/.nojekyll` stops Pages running
Jekyll, which would otherwise drop Astro's `_astro/` directory.

### If the URL changes

`site` in [astro.config.mjs](astro.config.mjs) is `https://stovehaus.com` and
`base` is left at `/`. Moving to a project page at `user.github.io/repo/` means
setting `base` to the repo name — otherwise every CSS, font and image URL 404s.
