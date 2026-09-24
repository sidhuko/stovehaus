/**
 * STOVEHAUS — product data, single source of truth.
 *
 * READ THIS BEFORE ADDING ANYTHING.
 *
 * ── Structure vs. copy ────────────────────────────────────────────────────
 *
 * This file holds what does NOT translate: model names, slugs, ordering, the
 * line each model belongs to, and the numbers. Spec labels, blurbs and every
 * other string live in src/i18n/{en,es}.ts and are looked up by key.
 *
 * Numbers are locale-independent here on purpose. es-MX and en-US use the same
 * decimal point and thousands comma, so "15.4 kW" and "6–13 m³ (212–459 ft³)"
 * are correct in both. If a third locale ever arrives that does not — German,
 * say — these become keys too.
 *
 * ── Where the Versa figures come from ─────────────────────────────────────
 *
 * The Versa line is built to the sizing ladder of the Stoveman series
 * (Stoveman OÜ, Estonia): 13 / 16 / 20, each also offered with an extended
 * firebox. The kW ratings, room volumes and stone capacities below are that
 * ladder's published figures, used here as DESIGN TARGETS for what Stovehaus
 * is building — they are not Stovehaus measurements.
 *
 * That distinction is not pedantry. It has three consequences the site honours:
 *
 *   1. Every Versa figure carries `basis: 'target'` and renders with a
 *      provisional marker, in both languages.
 *   2. Stoveman's CE / EN 15821:2010 certification belongs to Stoveman's
 *      tested appliance from Stoveman's factory. It does NOT transfer to a
 *      Stovehaus-built stove. Nothing on this site cites it.
 *   3. Clearances to combustibles are deliberately absent. They are specific
 *      to a tested appliance, an installer quotes a job off them, and getting
 *      them wrong on a wood-burning stove is a fire risk.
 *
 * The 0002 event stand already published Versa 13 as 15.4 kW / 6–13 / 110 kg,
 * which is the Stoveman 13's rating exactly. It printed the room capacity as
 * m² — a typo. The rating is room VOLUME in m³, confirmed by the Stoveman 13
 * manual ("Sauna room cubage 6-13 m³").
 *
 * ── The rule for anything you add ─────────────────────────────────────────
 *
 * If you do not have a tested figure, leave it out or mark it `target`.
 * Never invent one.
 */

import type { SpecKey } from '../i18n/types';

export type LineId = 'sauna' | 'jacuzzi' | 'firepits';

/** How a line is sold, which decides what its page shows instead of a grid. */
export type LineStatus =
  /** Models you can order off the page. */
  | 'available'
  /** Announced, not yet orderable. No model slots — saying "soon" is enough. */
  | 'coming-soon'
  /** No catalogue. Every one is built to the job. */
  | 'made-to-order';

export interface ProductLine {
  id: LineId;
  /** Colour token for this line's code. Ember = fire, spring = water, dusk = gas. */
  token: 'ember' | 'spring' | 'dusk';
  status: LineStatus;
  /** Left empty where we have no photograph. See CREDITS.md. */
  image?: string;
  /** Crop anchor for the wide hero band. See Hero.astro. */
  imagePosition?: string;
}

export const LINES: ProductLine[] = [
  {
    id: 'sauna',
    token: 'ember',
    status: 'available',
    image: 'sauna-loyly.jpg',
    // Portrait plate in a wide band: hold the crop low so the stones and the
    // water stream survive the scrim rather than the dark wall above them.
    imagePosition: 'center 62%',
  },
  {
    id: 'jacuzzi',
    token: 'spring',
    status: 'coming-soon',
    image: 'jacuzzi-wood-fired.jpg',
  },
  {
    id: 'firepits',
    token: 'dusk',
    status: 'made-to-order',
    image: 'firepit-linear-burner.jpg',
    imagePosition: 'center 60%',
  },
];

/**
 * A spec row. `key` names the label (translated); `value` is the number and
 * unit (not translated). `valueKey` is used where the value is words rather
 * than a figure, e.g. "Extended, through-wall".
 */
export type SpecRow =
  | { key: SpecKey; value: string }
  | { key: SpecKey; valueKey: 'extendedThroughWall' };

/**
 * Whether a figure has been measured by Stovehaus or is still the ladder's
 * design target. Everything is `target` until someone fires a stove and
 * writes the number down.
 */
export type FigureBasis = 'tested' | 'target';

export interface Product {
  slug: string;
  line: LineId;
  status: 'published' | 'pending';
  basis: FigureBasis;
  /** Does not translate. One name for one stove, in every market. */
  name?: string;
  /** SH-[line]-[output]-[finish]. Open on the Versa line — see BRAND.md. */
  modelCode?: string;
  /** The one figure the category is bought on — the card's hero number. */
  headlineFigure?: { value: string; unit: string; labelKey: SpecKey };
  /** Two or three rows on the card; the full set on the product page. */
  specs?: SpecRow[];
  /** Figures we hold no source for at all. Named, not silently omitted. */
  unknownSpecs?: SpecKey[];
  /** Set on the extended-firebox models. */
  isVariant?: boolean;
}

/*
  The ladder. Power, room volume and stone capacity are the Stoveman series
  targets; dimensions and weight are that series' figures too and will move once
  Stovehaus builds to its own drawings.

  The LS models take an extended firebox so the stove is fed from the room next
  door — a different install, not a different heater, so they carry the same
  ratings and their own depth is still open.
*/
const UNKNOWN_ON_EVERY_MODEL: SpecKey[] = ['clearance', 'heatUpTime', 'hsCode'];

export const PRODUCTS: Product[] = [
  {
    slug: 'versa-13',
    line: 'sauna',
    status: 'published',
    basis: 'target',
    name: 'Versa 13',
    headlineFigure: { value: '15.4', unit: 'kW', labelKey: 'powerRating' },
    specs: [
      { key: 'roomVolume', value: '6–13 m³ (212–459 ft³)' },
      { key: 'heaterStones', value: '90–110 kg (198–243 lb)' },
      { key: 'powerRating', value: '15.4 kW' },
      { key: 'fireboxPlate', value: '5 mm' },
      { key: 'flueDiameter', value: 'Ø 115 mm (Ø 4.5 in)' },
      { key: 'dimensions', value: '45 × 52.5 × 70 cm' },
      { key: 'weight', value: '52 kg (115 lb)' },
    ],
    unknownSpecs: UNKNOWN_ON_EVERY_MODEL,
  },
  {
    slug: 'versa-13-ls',
    line: 'sauna',
    status: 'published',
    basis: 'target',
    name: 'Versa 13 LS',
    isVariant: true,
    headlineFigure: { value: '15.4', unit: 'kW', labelKey: 'powerRating' },
    specs: [
      { key: 'roomVolume', value: '6–13 m³ (212–459 ft³)' },
      { key: 'heaterStones', value: '90–110 kg (198–243 lb)' },
      { key: 'powerRating', value: '15.4 kW' },
      { key: 'fireboxPlate', value: '5 mm' },
      { key: 'flueDiameter', value: 'Ø 115 mm (Ø 4.5 in)' },
      { key: 'firebox', valueKey: 'extendedThroughWall' },
      { key: 'weight', value: '63 kg (139 lb)' },
    ],
    unknownSpecs: [...UNKNOWN_ON_EVERY_MODEL, 'dimensions'],
  },
  {
    slug: 'versa-16',
    line: 'sauna',
    status: 'published',
    basis: 'target',
    name: 'Versa 16',
    headlineFigure: { value: '17', unit: 'kW', labelKey: 'powerRating' },
    specs: [
      { key: 'roomVolume', value: '8–16 m³ (283–565 ft³)' },
      { key: 'heaterStones', value: '140 kg (309 lb)' },
      { key: 'powerRating', value: '17 kW' },
      { key: 'fireboxPlate', value: '5 mm' },
      { key: 'flueDiameter', value: 'Ø 115 mm (Ø 4.5 in)' },
      { key: 'dimensions', value: '50 × 65 × 70 cm' },
      { key: 'weight', value: '70 kg (154 lb)' },
    ],
    unknownSpecs: UNKNOWN_ON_EVERY_MODEL,
  },
  {
    slug: 'versa-16-ls',
    line: 'sauna',
    status: 'published',
    basis: 'target',
    name: 'Versa 16 LS',
    isVariant: true,
    headlineFigure: { value: '17', unit: 'kW', labelKey: 'powerRating' },
    specs: [
      { key: 'roomVolume', value: '8–16 m³ (283–565 ft³)' },
      { key: 'heaterStones', value: '140 kg (309 lb)' },
      { key: 'powerRating', value: '17 kW' },
      { key: 'fireboxPlate', value: '5 mm' },
      { key: 'flueDiameter', value: 'Ø 115 mm (Ø 4.5 in)' },
      { key: 'firebox', valueKey: 'extendedThroughWall' },
    ],
    unknownSpecs: [...UNKNOWN_ON_EVERY_MODEL, 'dimensions', 'weight'],
  },
  {
    slug: 'versa-20',
    line: 'sauna',
    status: 'published',
    basis: 'target',
    name: 'Versa 20',
    headlineFigure: { value: '20', unit: 'kW', labelKey: 'powerRating' },
    specs: [
      { key: 'roomVolume', value: '12–20 m³ (424–706 ft³)' },
      { key: 'heaterStones', value: '160 kg (353 lb)' },
      { key: 'powerRating', value: '20 kW' },
      { key: 'fireboxPlate', value: '5 mm' },
      { key: 'flueDiameter', value: 'Ø 115 mm (Ø 4.5 in)' },
      { key: 'dimensions', value: '51 × 65.5 × 84 cm' },
      { key: 'weight', value: '76 kg (168 lb)' },
    ],
    unknownSpecs: UNKNOWN_ON_EVERY_MODEL,
  },
  {
    slug: 'versa-20-ls',
    line: 'sauna',
    status: 'published',
    basis: 'target',
    name: 'Versa 20 LS',
    isVariant: true,
    headlineFigure: { value: '20', unit: 'kW', labelKey: 'powerRating' },
    specs: [
      { key: 'roomVolume', value: '12–20 m³ (424–706 ft³)' },
      { key: 'heaterStones', value: '160 kg (353 lb)' },
      { key: 'powerRating', value: '20 kW' },
      { key: 'fireboxPlate', value: '5 mm' },
      { key: 'flueDiameter', value: 'Ø 115 mm (Ø 4.5 in)' },
      { key: 'firebox', valueKey: 'extendedThroughWall' },
    ],
    unknownSpecs: [...UNKNOWN_ON_EVERY_MODEL, 'dimensions', 'weight'],
  },
];

export const getLine = (id: LineId): ProductLine => LINES.find((l) => l.id === id)!;

export const productsInLine = (id: LineId): Product[] =>
  PRODUCTS.filter((p) => p.line === id);

export const publishedProducts = (): Product[] =>
  PRODUCTS.filter((p) => p.status === 'published');

export const getProduct = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);

/** Look up a spec value in a product, metric part only, for compact display. */
export const specValue = (product: Product, key: SpecKey): string | undefined => {
  const row = product.specs?.find((s) => s.key === key);
  if (!row) return undefined;
  return 'value' in row ? row.value.split('(')[0].trim() : undefined;
};
