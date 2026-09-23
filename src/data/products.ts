/**
 * STOVEHAUS — product data, single source of truth.
 *
 * READ THIS BEFORE ADDING ANYTHING.
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
 *      provisional marker. A figure becomes `'tested'` only once Stovehaus has
 *      measured its own stove.
 *   2. Stoveman's CE / EN 15821:2010 certification belongs to Stoveman's
 *      tested appliance from Stoveman's factory. It does NOT transfer to a
 *      Stovehaus-built stove. Nothing on this site cites it.
 *   3. Clearances to combustibles are deliberately absent. They are specific
 *      to a tested appliance, an installer quotes a job off them, and getting
 *      them wrong on a wood-burning stove is a fire risk. We publish ours when
 *      we have tested ours.
 *
 * The 0002 event stand already published Versa 13 as 15.4 kW / 6–13 / 110 kg,
 * which is the Stoveman 13's rating exactly. It printed the room capacity as
 * m² — that was a typo. The rating is room VOLUME in m³, which is the sauna
 * industry convention and what the source figure is.
 *
 * ── The rule for anything you add ─────────────────────────────────────────
 *
 * The brand guidelines state that every model name, kW figure, dimension and
 * price in the PDF is a placeholder, to be replaced with tested specifications
 * before anything is published or sent to a customer. So: if you do not have a
 * tested figure, leave it out or mark it `target`. Never invent one.
 */

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
  name: string;
  /** Uppercase chip on the card — guidelines p.10 card anatomy. */
  chip: string;
  /** Colour token for this line's code. Ember = fire, spring = water, dusk = gas. */
  token: 'ember' | 'spring' | 'dusk';
  status: LineStatus;
  /** What the category is actually bought on. */
  boughtOn: string;
  eyebrow: string;
  headline: string;
  lede: string;
  /** Left empty where we have no photograph. See BRAND.md open items. */
  image?: string;
  imageAlt?: string;
  /** Crop anchor for the wide hero band. See Hero.astro. */
  imagePosition?: string;
}

export const LINES: ProductLine[] = [
  {
    id: 'sauna',
    name: 'Sauna',
    chip: 'Sauna',
    token: 'ember',
    status: 'available',
    boughtOn: 'Power rating',
    eyebrow: 'Wood-fired · Sauna heaters',
    headline: 'Heaters that take a beating.',
    lede: 'A firebox cut from plate and seam-welded, sized to the room it has to bring up to temperature.',
    image: 'sauna-loyly.jpg',
    imageAlt:
      'Water poured from a ladle onto the heater stones inside a cedar sauna, steam rising.',
    // Portrait plate in a wide band: hold the crop low so the stones and the
    // water stream survive the scrim rather than the dark wall above them.
    imagePosition: 'center 62%',
  },
  {
    id: 'jacuzzi',
    name: 'Jacuzzi',
    chip: 'Jacuzzi',
    token: 'spring',
    status: 'coming-soon',
    boughtOn: 'Tub capacity',
    eyebrow: 'Wood-fired · Jacuzzi heaters',
    headline: 'Hot water, no power run.',
    lede: 'A coil that brings a tub up on wood alone — no pump, no element, no electrical service to the pad.',
    image: 'jacuzzi-wood-fired.jpg',
    imageAlt:
      'A cedar wood-fired hot tub in bare spring woodland, smoke rising from its flue, split logs stacked alongside.',
  },
  {
    id: 'firepits',
    name: 'Firepits',
    chip: 'Firepit',
    token: 'dusk',
    status: 'made-to-order',
    boughtOn: 'Burner output',
    eyebrow: 'Gas · Fire pits',
    headline: 'A fire you can turn off.',
    lede: 'Linear gas burners in welded steel, cut to the table or terrace they are going into.',
    // A linear burner firing straight off the media bed behind a glass wind
    // guard — no logs, no ash. It shows the category, not a Stovehaus unit.
    image: 'firepit-linear-burner.jpg',
    imageAlt:
      'A linear gas fire pit burning across a bed of stone media, behind a glass wind guard on a terrace.',
    imagePosition: 'center 60%',
  },
];

export type SpecRow = { label: string; value: string };

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
  name?: string;
  /** SH-[line]-[output]-[finish]. Open on the Versa line — see BRAND.md. */
  modelCode?: string;
  /** The one figure the category is bought on — the card's hero number. */
  headlineFigure?: { value: string; unit: string; label: string };
  /** Two or three rows on the card; the full set on the product page. */
  specs?: SpecRow[];
  /** Figures we hold no source for at all. Named, not silently omitted. */
  unknownSpecs?: string[];
  leadTime?: string;
  blurb?: string;
  /** Set on the extended-firebox models. */
  variantNote?: string;
}

/*
  The ladder. Power, room volume and stone capacity are the Stoveman series
  targets; dimensions and weight are that series' figures too and will move once
  Stovehaus builds to its own drawings.

  The LS models take an extended firebox so the stove is fed from the room next
  door — a different install, not a different heater, so they carry the same
  ratings and their own depth is still open.
*/
const UNKNOWN_ON_EVERY_MODEL = [
  'Clearance to combustibles',
  'Heat-up time',
  'HS code',
];

export const PRODUCTS: Product[] = [
  {
    slug: 'versa-13',
    line: 'sauna',
    status: 'published',
    basis: 'target',
    name: 'Versa 13',
    headlineFigure: { value: '15.4', unit: 'kW', label: 'Power rating' },
    specs: [
      { label: 'Room volume', value: '6–13 m³ (212–459 ft³)' },
      { label: 'Heater stones', value: '90–110 kg (198–243 lb)' },
      { label: 'Power rating', value: '15.4 kW' },
      { label: 'Firebox plate', value: '5 mm' },
      { label: 'Flue diameter', value: 'Ø 115 mm (Ø 4.5 in)' },
      { label: 'Dimensions, W × D × H', value: '45 × 52.5 × 70 cm' },
      { label: 'Weight, without stones', value: '52 kg (115 lb)' },
    ],
    unknownSpecs: UNKNOWN_ON_EVERY_MODEL,
    leadTime: 'Lead time on request',
    blurb:
      'The smallest of the three, and the one most cabins want. It carries up to 110 kg of stone, which is what lets it keep giving löyly after the third and fourth ladle instead of going flat. Sized for a room of 6 to 13 m³.',
  },
  {
    slug: 'versa-13-ls',
    line: 'sauna',
    status: 'published',
    basis: 'target',
    name: 'Versa 13 LS',
    headlineFigure: { value: '15.4', unit: 'kW', label: 'Power rating' },
    specs: [
      { label: 'Room volume', value: '6–13 m³ (212–459 ft³)' },
      { label: 'Heater stones', value: '90–110 kg (198–243 lb)' },
      { label: 'Power rating', value: '15.4 kW' },
      { label: 'Firebox plate', value: '5 mm' },
      { label: 'Flue diameter', value: 'Ø 115 mm (Ø 4.5 in)' },
      { label: 'Firebox', value: 'Extended, through-wall' },
      { label: 'Weight, without stones', value: '63 kg (139 lb)' },
    ],
    unknownSpecs: [...UNKNOWN_ON_EVERY_MODEL, 'Dimensions, W × D × H'],
    leadTime: 'Lead time on request',
    variantNote: 'Extended firebox — fed from the room next door.',
    blurb:
      'The Versa 13 with an extended firebox, so the stove is loaded from the changing room rather than the hot room. Same ratings, different install: the wall penetration has to be detailed before the stove is built.',
  },
  {
    slug: 'versa-16',
    line: 'sauna',
    status: 'published',
    basis: 'target',
    name: 'Versa 16',
    headlineFigure: { value: '17', unit: 'kW', label: 'Power rating' },
    specs: [
      { label: 'Room volume', value: '8–16 m³ (283–565 ft³)' },
      { label: 'Heater stones', value: '140 kg (309 lb)' },
      { label: 'Power rating', value: '17 kW' },
      { label: 'Firebox plate', value: '5 mm' },
      { label: 'Flue diameter', value: 'Ø 115 mm (Ø 4.5 in)' },
      { label: 'Dimensions, W × D × H', value: '50 × 65 × 70 cm' },
      { label: 'Weight, without stones', value: '70 kg (154 lb)' },
    ],
    unknownSpecs: UNKNOWN_ON_EVERY_MODEL,
    leadTime: 'Lead time on request',
    blurb:
      'The middle of the ladder. 140 kg of stone against 17 kW, for a room of 8 to 16 m³ — the size most commercial rooms and larger cabin builds land on.',
  },
  {
    slug: 'versa-16-ls',
    line: 'sauna',
    status: 'published',
    basis: 'target',
    name: 'Versa 16 LS',
    headlineFigure: { value: '17', unit: 'kW', label: 'Power rating' },
    specs: [
      { label: 'Room volume', value: '8–16 m³ (283–565 ft³)' },
      { label: 'Heater stones', value: '140 kg (309 lb)' },
      { label: 'Power rating', value: '17 kW' },
      { label: 'Firebox plate', value: '5 mm' },
      { label: 'Flue diameter', value: 'Ø 115 mm (Ø 4.5 in)' },
      { label: 'Firebox', value: 'Extended, through-wall' },
    ],
    unknownSpecs: [...UNKNOWN_ON_EVERY_MODEL, 'Dimensions, W × D × H', 'Weight'],
    leadTime: 'Lead time on request',
    variantNote: 'Extended firebox — fed from the room next door.',
    blurb:
      'The Versa 16 fed from outside the hot room. The usual choice for a commercial install, where nobody wants an attendant carrying wood past the benches.',
  },
  {
    slug: 'versa-20',
    line: 'sauna',
    status: 'published',
    basis: 'target',
    name: 'Versa 20',
    headlineFigure: { value: '20', unit: 'kW', label: 'Power rating' },
    specs: [
      { label: 'Room volume', value: '12–20 m³ (424–706 ft³)' },
      { label: 'Heater stones', value: '160 kg (353 lb)' },
      { label: 'Power rating', value: '20 kW' },
      { label: 'Firebox plate', value: '5 mm' },
      { label: 'Flue diameter', value: 'Ø 115 mm (Ø 4.5 in)' },
      { label: 'Dimensions, W × D × H', value: '51 × 65.5 × 84 cm' },
      { label: 'Weight, without stones', value: '76 kg (168 lb)' },
    ],
    unknownSpecs: UNKNOWN_ON_EVERY_MODEL,
    leadTime: 'Lead time on request',
    blurb:
      'The top of the ladder: 160 kg of stone and 20 kW, for rooms of 12 to 20 m³. Built for lodges and commercial rooms that get fired every day rather than every weekend.',
  },
  {
    slug: 'versa-20-ls',
    line: 'sauna',
    status: 'published',
    basis: 'target',
    name: 'Versa 20 LS',
    headlineFigure: { value: '20', unit: 'kW', label: 'Power rating' },
    specs: [
      { label: 'Room volume', value: '12–20 m³ (424–706 ft³)' },
      { label: 'Heater stones', value: '160 kg (353 lb)' },
      { label: 'Power rating', value: '20 kW' },
      { label: 'Firebox plate', value: '5 mm' },
      { label: 'Flue diameter', value: 'Ø 115 mm (Ø 4.5 in)' },
      { label: 'Firebox', value: 'Extended, through-wall' },
    ],
    unknownSpecs: [...UNKNOWN_ON_EVERY_MODEL, 'Dimensions, W × D × H', 'Weight'],
    leadTime: 'Lead time on request',
    variantNote: 'Extended firebox — fed from the room next door.',
    blurb:
      'The largest Versa, loaded from outside the hot room. Specify the wall thickness at order — the firebox extension is cut to it.',
  },
];

/**
 * What a fire pit is specified on. There is no catalogue: every one is cut to
 * the table or terrace it goes into, so the page asks for these instead of
 * offering models.
 */
export const FIREPIT_VARIABLES = [
  {
    label: 'Burner length',
    body: 'Linear burners are cut to the opening. Give us the finished table or surround dimension and we work back from it.',
  },
  {
    label: 'Output',
    body: 'Follows the burner length. Stated in kW and BTU/h on the drawing, because a terrace in Alberta and a terrace in Texas are not asking the same question.',
  },
  {
    label: 'Fuel',
    body: 'Natural gas or propane. The orifice differs, so this is settled before anything is cut, not after.',
  },
  {
    label: 'Surround and finish',
    body: 'Drop-in pan, full table, or a plate to build into masonry. Steel finish to match the rest of the build.',
  },
];

export const getLine = (id: LineId): ProductLine =>
  LINES.find((l) => l.id === id)!;

export const productsInLine = (id: LineId): Product[] =>
  PRODUCTS.filter((p) => p.line === id);

export const publishedProducts = (): Product[] =>
  PRODUCTS.filter((p) => p.status === 'published');

export const getProduct = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);
