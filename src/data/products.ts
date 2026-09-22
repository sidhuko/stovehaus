/**
 * STOVEHAUS — product data, single source of truth.
 *
 * READ THIS BEFORE ADDING ANYTHING.
 *
 * The brand guidelines PDF states, verbatim: "Model names, kW figures,
 * dimensions, prices and certification status shown in the guidelines PDF are
 * PLACEHOLDERS demonstrating layout. Replace them with tested specifications
 * before anything is published or sent to a customer."
 *
 * So: exactly one product in this file carries real figures — the Versa 13,
 * taken from the 0002 event stand. Every other slot is `status: 'pending'` and
 * renders as a visibly empty card. Nothing here is invented. If you do not have
 * a tested figure, leave the slot pending rather than filling it in.
 */

export type LineId = 'sauna' | 'jacuzzi' | 'firepits';

export interface ProductLine {
  id: LineId;
  /** Nav and page title. */
  name: string;
  /** Uppercase chip on the card — guidelines p.10 card anatomy. */
  chip: string;
  /** Colour token for this line's code. Ember = fire, spring = water, dusk = gas. */
  token: 'ember' | 'spring' | 'dusk';
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
    boughtOn: 'Tub capacity',
    eyebrow: 'Wood-fired · Jacuzzi heaters',
    headline: 'Hot water, no power run.',
    lede: 'A submerged or external coil that brings a tub up on wood alone, with no pump and no electrical service to the pad.',
    image: 'jacuzzi-wood-fired.jpg',
    imageAlt:
      'A cedar wood-fired hot tub in bare spring woodland, smoke rising from its flue, split logs stacked alongside.',
  },
  {
    id: 'firepits',
    name: 'Firepits',
    chip: 'Firepit',
    token: 'dusk',
    boughtOn: 'Burner output',
    eyebrow: 'Gas · Fire pits',
    headline: 'A fire you can turn off.',
    lede: 'Linear gas burners in welded steel, for terraces and dining tables where a wood fire is not practical.',
    // No photograph at source resolution. See BRAND.md open items.
  },
];

export type SpecRow = { label: string; value: string };

export interface Product {
  slug: string;
  line: LineId;
  status: 'published' | 'pending';
  /** Family name. Absent on pending slots — an unnamed slot cannot be mistaken for a model. */
  name?: string;
  /** SH-[line]-[output]-[finish]. Open on Versa 13 — see BRAND.md open items. */
  modelCode?: string;
  /** The one figure the category is bought on — the card's hero number. */
  headlineFigure?: { value: string; unit: string; label: string };
  /** Two or three rows on the card; the full set on the product page. */
  specs?: SpecRow[];
  leadTime?: string;
  blurb?: string;
}

export const PRODUCTS: Product[] = [
  // ---------------------------------------------------------------------------
  // The only real product on the site. Figures transcribed from the 0002 event
  // stand: 15.4 kW power rating, 6–13 m² room capacity, 110 kg heater stones.
  //
  // TODO(specs): room capacity is printed as m² on the stand. The guidelines set
  // room volume in m³ throughout, which is the sauna industry convention.
  // Rendered here as printed. If it should be m³ this is a one-line fix.
  //
  // TODO(naming): no model code assigned. The guidelines propose
  // SH-[line]-[output]-[finish] and warn that mixed naming makes a small line
  // look improvised. "Versa 13" is a third convention and its 13 reads as
  // capacity, not output.
  //
  // TODO(specs): plate thickness, flue diameter, clearances, weight, heat-up
  // time and HS code are all unknown. They are omitted rather than guessed —
  // an installer needs the flue spec and the clearances to quote a job.
  // ---------------------------------------------------------------------------
  {
    slug: 'versa-13',
    line: 'sauna',
    status: 'published',
    name: 'Versa 13',
    headlineFigure: { value: '15.4', unit: 'kW', label: 'Power rating' },
    specs: [
      { label: 'Room capacity', value: '6–13 m² (65–140 ft²)' },
      { label: 'Heater stones', value: '110 kg (243 lb)' },
      { label: 'Power rating', value: '15.4 kW' },
    ],
    leadTime: 'Lead time on request',
    blurb:
      'The Versa 13 holds 110 kg of stone, which is what lets it keep giving löyly after the third and fourth ladle instead of going flat. It is sized for a room of 6 to 13 m².',
  },

  // Empty slots. These render as empty states, never as products.
  { slug: 'sauna-slot-2', line: 'sauna', status: 'pending' },
  { slug: 'sauna-slot-3', line: 'sauna', status: 'pending' },

  { slug: 'jacuzzi-slot-1', line: 'jacuzzi', status: 'pending' },
  { slug: 'jacuzzi-slot-2', line: 'jacuzzi', status: 'pending' },
  { slug: 'jacuzzi-slot-3', line: 'jacuzzi', status: 'pending' },

  { slug: 'firepit-slot-1', line: 'firepits', status: 'pending' },
  { slug: 'firepit-slot-2', line: 'firepits', status: 'pending' },
  { slug: 'firepit-slot-3', line: 'firepits', status: 'pending' },
];

export const getLine = (id: LineId): ProductLine =>
  LINES.find((l) => l.id === id)!;

export const productsInLine = (id: LineId): Product[] =>
  PRODUCTS.filter((p) => p.line === id);

export const publishedProducts = (): Product[] =>
  PRODUCTS.filter((p) => p.status === 'published');
