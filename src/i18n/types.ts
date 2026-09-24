/**
 * STOVEHAUS — localisation contract.
 *
 * English is the source language and lives on the bare routes (`/sauna`).
 * Spanish lives under `/es/` with the same slugs, so switching language is a
 * prefix operation and can never land on a page that does not exist.
 *
 * Two brand rules constrain what may be translated:
 *
 *   1. "Built for the flame." is NEVER translated. The guidelines are explicit:
 *      "Never modify it, never translate it in the lockup." It is set as
 *      artwork inside the reversed lockup, so it is not live type anywhere and
 *      there is nothing to translate even by accident.
 *   2. "Stovehaus" is written one word, capital S only, in every language.
 *      Model names (Versa 13, Versa 16 LS) do not translate either — a dealer
 *      quoting across a border needs one name for one stove.
 *
 * Voice rule 5 — dual units, metric first — applies in both languages. The
 * figures themselves are locale-independent; only their labels move.
 */

export type Locale = 'en' | 'es';

export const LOCALES: Locale[] = ['en', 'es'];
export const DEFAULT_LOCALE: Locale = 'en';

/** Spec row labels. Values carry numbers and units, which do not translate. */
export type SpecKey =
  | 'roomVolume'
  | 'heaterStones'
  | 'powerRating'
  | 'fireboxPlate'
  | 'flueDiameter'
  | 'firebox'
  | 'dimensions'
  | 'weight'
  | 'clearance'
  | 'heatUpTime'
  | 'hsCode'
  | 'tubCapacity'
  | 'coilSpec'
  | 'burnerLength'
  | 'output'
  | 'fuelType';

export interface Dict {
  /** Goes in <html lang>. See the note on es-MX in es.ts. */
  htmlLang: string;
  /** How this language names itself in the switcher. */
  name: string;
  /** Short code shown in the compact switcher. */
  short: string;

  nav: Record<'sauna' | 'jacuzzi' | 'firepits' | 'rooms' | 'shop' | 'dealers' | 'specs', string>;

  common: {
    requestQuote: string;
    seeHeaters: string;
    dealerInformation: string;
    askAboutLine: string;
    askToBeToldFirst: string;
    seeWhatIsShipping: string;
    allSpecifications: string;
    compareTheLine: string;
    startADrawing: string;
    insideTheShop: string;
    skipToContent: string;
    catalogue: string;
    contact: string;
    certification: string;
    models: string;
    modelSlot: string;
    modelCodePending: string;
    leadTimeOnRequest: string;
    onRequest: string;
    pending: string;
    comingSoon: string;
    builtToOrder: string;
    theLine: string;
    boughtOn: string;
    specifiedOn: string;
    specifications: string;
    ordering: string;
    breadcrumbHome: string;
    madeInMexico: string;
    exportedTo: string;
    languageLabel: string;
    /** Footer agency credit label. The studio name is appended separately. */
    builtBy: string;
    /** Announced to screen readers on the language switch. */
    switchLanguage: string;
  };

  siteDescription: string;

  /** Line-level marketing copy, keyed by line id. */
  lines: Record<
    'sauna' | 'jacuzzi' | 'firepits',
    {
      name: string;
      chip: string;
      boughtOn: string;
      eyebrow: string;
      headline: string;
      lede: string;
      intro: string;
      imageAlt?: string;
      buyingNotes: { label: string; body: string }[];
    }
  >;

  /** Spec row labels. */
  spec: Record<SpecKey, string>;
  /** Non-numeric spec values. */
  specValue: {
    extendedThroughWall: string;
    onRequest: string;
    saunaWoodFired: string;
    mexico: string;
  };

  /** Per-model blurbs and variant notes, keyed by slug. */
  products: Record<string, { blurb: string; variantNote?: string }>;

  provisional: {
    inline: string;
    panelTitle: string;
    panelLead: string;
    panelBody: string;
  };

  certification: string;

  messages: { n: string; title: string; body: string }[];

  home: {
    heroEyebrow: string;
    heroHeadline: string;
    heroLede: string;
    threeLinesTitle: string;
    threeLinesBody: string;
    standing: { available: (n: number) => string; comingSoon: string; madeToOrder: string };
    catalogueNote: string;
    whyTitle: string;
    originEyebrow: string;
    originTitle: string;
    originBody1: string;
    originBody2: string;
    dealerAsksTitle: string;
    dealerAsks: [string, string][];
  };

  fork: {
    dealer: { eyebrow: string; title: string; body: string; items: string[]; cta: string };
    buyer: { eyebrow: string; title: string; body: string; items: string[]; cta: string };
  };

  linePage: {
    modelsCount: (n: number) => string;
    comingSoonEyebrow: string;
    comingSoonTitle: (line: string) => string;
    comingSoonLede: string;
    comingSoonBody: string;
    builtToOrderNote: string;
    noCatalogue: string;
    builtToOrderBody: string;
    firepitCta: string;
    slotBody: string;
  };

  firepitVariables: { label: string; body: string }[];

  product: {
    restOfLine: string;
    specsNote: string;
    missingNote: (marker: string) => string;
    orderingRows: [string, string][];
    quoteCarries: string;
  };

  shop: {
    heroEyebrow: string;
    heroHeadline: string;
    heroLede: string;
    howTitle: string;
    howBody: string;
    process: { n: string; title: string; body: string; alt?: string }[];
    stockNote: string;
    whyMexicoTitle: string;
    whyMexicoBody: string;
  };

  dealers: {
    eyebrow: string;
    /** We build the room as well as the heat. Quoted, never catalogued. */
    rooms: { eyebrow: string; title: string; body: string; cta: string };
    headline: string;
    lede: string;
    certStatusTitle: string;
    certStatusBody: string;
    whatWeSend: string;
    asks: { label: string; body: string }[];
    figuresNote: string;
    caseTitle: string;
    quoteTitle: string;
    quoteBody: string;
    everyQuoteCarries: string;
    quoteItems: string[];
  };

  specs: {
    eyebrow: string;
    headline: string;
    lede: string;
    ladderTitle: string;
    columns: string[];
    pendingNote: string;
    readingCodeTitle: string;
    readingCodeBody: string;
    codeParts: [string, string][];
    codeExample: string;
    unitsTitle: string;
    unitsBody: string;
    needFigure: string;
    comingSoonBlurb: string;
    builtToOrderBlurb: string;
  };

  /**
   * Complete sauna rooms.
   *
   * Deliberately NOT a fourth product line. The line colours code what a thing
   * heats — ember for fire, spring for water, dusk for gas — and a room does
   * not burn anything, so giving it a chip colour would break the system the
   * guidelines set up. Rooms use `steel`, the mill-finish token, and carry no
   * catalogue: every one is quoted to the drawing, like the fire pits.
   */
  rooms: {
    eyebrow: string;
    headline: string;
    lede: string;
    /** Not "The line" — rooms are deliberately not one. */
    introTitle: string;
    intro: string;
    noCatalogue: string;
    typesTitle: string;
    types: { n: string; title: string; body: string }[];
    needTitle: string;
    needNote: string;
    need: { label: string; body: string }[];
    ctaLead: string;
    homeTitle: string;
    homeBody: string;
  };

  /** WhatsApp is the only contact route that actually delivers. */
  whatsapp: {
    /** Link label, e.g. "WhatsApp". */
    label: string;
    /** Standing CTA, e.g. "Message us on WhatsApp". */
    cta: string;
    /** Heading of the composed message. */
    messageTitle: string;
    /** Field labels inside the composed message. */
    fields: {
      who: string;
      lines: string;
      name: string;
      company: string;
      email: string;
      shipTo: string;
      needs: string;
    };
    /** Shown where a field was left blank. */
    blank: string;
  };

  quote: {
    eyebrow: string;
    headline: string;
    lede: string;
    whoYouAre: string;
    dealerOption: string;
    buyerOption: string;
    askingAbout: string;
    name: string;
    company: string;
    email: string;
    location: string;
    message: string;
    submit: string;
    /** Explains where the form actually sends, before it is pressed. */
    howItSends: string;
    noWhatsapp: string;
    direct: string;
    beforeYouAsk: string;
    whatComesBack: string;
    comesBackItems: string[];
  };
}
