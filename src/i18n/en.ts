import type { Dict } from './types';

/**
 * English — the source language. Every string here is the copy that was
 * written against the voice rules on p.8 of the guidelines, so treat this file
 * as the original and es.ts as the translation, not the other way round.
 */
export const en: Dict = {
  htmlLang: 'en',
  name: 'English',
  short: 'EN',

  nav: {
    sauna: 'Sauna',
    jacuzzi: 'Jacuzzi',
    firepits: 'Firepits',
    rooms: 'Rooms',
    shop: 'The Shop',
    dealers: 'Dealers',
    specs: 'Specs',
  },

  common: {
    requestQuote: 'Request a quote',
    seeHeaters: 'See the heaters',
    dealerInformation: 'Dealer information',
    askAboutLine: 'Ask about this line',
    askToBeToldFirst: 'Ask to be told first',
    seeWhatIsShipping: 'See what is shipping now',
    allSpecifications: 'All specifications',
    compareTheLine: 'Compare the line',
    startADrawing: 'Start a drawing',
    insideTheShop: 'Inside the shop',
    skipToContent: 'Skip to content',
    catalogue: 'Catalogue',
    contact: 'Contact',
    certification: 'Certification',
    models: 'Models',
    modelSlot: 'Model slot',
    modelCodePending: 'Model code pending',
    leadTimeOnRequest: 'Lead time on request',
    onRequest: 'On request',
    pending: 'Pending',
    comingSoon: 'Coming soon',
    builtToOrder: 'Built to order',
    theLine: 'The line',
    boughtOn: 'Bought on',
    specifiedOn: 'Specified on',
    specifications: 'Specifications',
    ordering: 'Ordering',
    breadcrumbHome: 'Home',
    madeInMexico: 'Made in Mexico',
    exportedTo: 'Exported to the United States and Canada',
    languageLabel: 'Language',
    builtBy: 'Built by',
    switchLanguage: 'Ver en español',
  },

  siteDescription:
    'Wood-fired sauna and jacuzzi heaters, gas fire pits and complete sauna rooms, built by hand in Mexico for the North American market.',

  lines: {
    sauna: {
      name: 'Sauna',
      chip: 'Sauna',
      boughtOn: 'Power rating',
      eyebrow: 'Wood-fired · Sauna heaters',
      headline: 'Heaters that take a beating.',
      lede: 'A firebox cut from plate and seam-welded, sized to the room it has to bring up to temperature.',
      intro:
        'A sauna heater is a welded steel box that burns wood and holds stone. What separates a good one from a cheap one is the thickness of the plate it is cut from, how the seams are welded, and how much stone it carries — because stone is what keeps the room giving löyly after the third ladle instead of going flat.',
      imageAlt:
        'Water poured from a ladle onto the heater stones inside a cedar sauna, steam rising.',
      buyingNotes: [
        {
          label: 'Power rating',
          body: 'Matched to room volume. Undersize it and the room never arrives; oversize it and you cook the air before the benches warm.',
        },
        {
          label: 'Stone capacity',
          body: 'Stone is the reservoir. More stone means steam that holds through repeated ladles.',
        },
        {
          label: 'Flue and clearances',
          body: 'What an installer needs before quoting a job. Published per model once measured.',
        },
      ],
    },
    jacuzzi: {
      name: 'Jacuzzi',
      chip: 'Jacuzzi',
      boughtOn: 'Tub capacity',
      eyebrow: 'Wood-fired · Jacuzzi heaters',
      headline: 'Hot water, no power run.',
      lede: 'A coil that brings a tub up on wood alone — no pump, no element, no electrical service to the pad.',
      intro:
        'A wood-fired jacuzzi heater brings a tub up on wood alone. There is no pump, no element and no electrical service to run out to the pad, which is the whole reason people put one on a property where power is a trench and a permit away. Heat moves by convection: cold water leaves the bottom of the tub, passes the fire, and returns hot at the top. We are building the line now. Nothing is orderable yet.',
      imageAlt:
        'A cedar wood-fired hot tub in bare spring woodland, smoke rising from its flue, split logs stacked alongside.',
      buyingNotes: [
        {
          label: 'Tub capacity',
          body: 'The litres the heater is sized for. Run it under capacity and heat-up drags; run it over and the water stratifies.',
        },
        {
          label: 'Heat-up time',
          body: 'From cold, at a stated ambient. A figure without an ambient temperature attached is not a figure.',
        },
        {
          label: 'Coil specification',
          body: 'Grade and wall thickness of the submerged or external coil, which is what decides how long it survives treated water.',
        },
      ],
    },
    firepits: {
      name: 'Firepits',
      chip: 'Firepit',
      boughtOn: 'Burner output',
      eyebrow: 'Gas · Fire pits',
      headline: 'A fire you can turn off.',
      lede: 'Linear gas burners in welded steel, cut to the table or terrace they are going into.',
      intro:
        'The fire pits run on gas rather than wood, which makes them a different animal to the rest of the catalogue: no ash, no smoke downwind of a dinner table, and a flame that goes out when you turn the valve. They are welded steel like everything else we make, and there is no model list — a linear burner is cut to the opening it drops into, so every one is built to the drawing for the table, terrace or roof deck it is going into.',
      imageAlt:
        'A linear gas fire pit burning across a bed of stone media, behind a glass wind guard on a terrace.',
      buyingNotes: [
        {
          label: 'Burner length',
          body: 'Cut to the opening. Give us the finished dimension and we work back from it.',
        },
        { label: 'Output', body: 'Follows the length, stated in kW and BTU/h on the drawing.' },
        {
          label: 'Fuel type',
          body: 'Natural gas or propane. The orifice differs, so it is settled before anything is cut.',
        },
      ],
    },
  },

  spec: {
    roomVolume: 'Room volume',
    heaterStones: 'Heater stones',
    powerRating: 'Power rating',
    fireboxPlate: 'Firebox plate',
    flueDiameter: 'Flue diameter',
    firebox: 'Firebox',
    dimensions: 'Dimensions, W × D × H',
    weight: 'Weight, without stones',
    clearance: 'Clearance to combustibles',
    heatUpTime: 'Heat-up time',
    hsCode: 'HS code',
    tubCapacity: 'Tub capacity',
    coilSpec: 'Coil specification',
    burnerLength: 'Burner length',
    output: 'Output',
    fuelType: 'Fuel type',
  },

  specValue: {
    extendedThroughWall: 'Extended, through-wall',
    onRequest: 'On request',
    saunaWoodFired: 'Sauna · wood-fired',
    mexico: 'Mexico',
  },

  products: {
    'versa-13': {
      blurb:
        'The smallest of the three, and the one most cabins want. It carries up to 110 kg of stone, which is what lets it keep giving löyly after the third and fourth ladle instead of going flat. Sized for a room of 6 to 13 m³.',
    },
    'versa-13-ls': {
      blurb:
        'The Versa 13 with an extended firebox, so the stove is loaded from the changing room rather than the hot room. Same ratings, different install: the wall penetration has to be detailed before the stove is built.',
      variantNote: 'Extended firebox — fed from the room next door.',
    },
    'versa-16': {
      blurb:
        'The middle of the ladder. 140 kg of stone against 17 kW, for a room of 8 to 16 m³ — the size most commercial rooms and larger cabin builds land on.',
    },
    'versa-16-ls': {
      blurb:
        'The Versa 16 fed from outside the hot room. The usual choice for a commercial install, where nobody wants an attendant carrying wood past the benches.',
      variantNote: 'Extended firebox — fed from the room next door.',
    },
    'versa-20': {
      blurb:
        'The top of the ladder: 160 kg of stone and 20 kW, for rooms of 12 to 20 m³. Built for lodges and commercial rooms that get fired every day rather than every weekend.',
    },
    'versa-20-ls': {
      blurb:
        'The largest Versa, loaded from outside the hot room. Specify the wall thickness at order — the firebox extension is cut to it.',
      variantNote: 'Extended firebox — fed from the room next door.',
    },
  },

  provisional: {
    inline: 'Provisional — design target, not yet tested',
    panelTitle: 'About these figures',
    panelLead:
      'Every figure on this page is a design target, not a measurement. It is what the stove is being built to, not what we have put on a meter.',
    panelBody:
      'We publish a tested number once we have fired the stove and written it down. Until then the target is what we have, and we would rather tell you which one you are reading. Clearances to combustibles are not on this page at all — an installer quotes a job off them, and they belong to a tested appliance.',
  },

  /*
    Names the standard rather than gesturing at "certification". A dealer's
    first question is whether we know what applies, and the honest answer to
    the second question is still no. Guidelines p.9: state it exactly, because
    silence reads as an implication that turns out to be wrong.
  */
  certification:
    'Not yet listed. A wood-fired heater sold in the United States needs a UL 1482 listing, and in Canada the CSA equivalent — without one it does not pass inspection, and an insurer may decline a claim. We are not going to imply otherwise. Ask where a line stands and you will get a status and a date.',

  messages: [
    {
      n: '01',
      title: 'Built heavy, on purpose.',
      body: 'Thick plate, welded seams, a firebox meant to be fed hard for twenty years — not a stamped shell.',
    },
    {
      n: '02',
      title: 'Made by hand, by people we can name.',
      body: "One shop, one crew, every stove fired before it's crated.",
    },
    {
      n: '03',
      title: 'Priced to be sold, not just admired.',
      body: 'Mexican fabrication and a short freight run north mean a dealer margin that works against European imports.',
    },
    {
      n: '04',
      title: 'Ready for the North American market.',
      body: 'Listings, clearances, flue standards, imperial documentation, parts on this continent.',
    },
  ],

  home: {
    heroEyebrow: 'Wood-fired · Made in Mexico',
    heroHeadline: 'Heavy steel, welded by hand.',
    heroLede: 'Sauna heaters, jacuzzi heaters and gas fire pits, built in one shop and shipped north.',
    threeLinesTitle: 'Three lines.',
    threeLinesBody:
      'Two burn wood and one burns gas. Each line is colour-coded throughout the site and the spec sheets, so you can tell at a glance which figure you are reading.',
    standing: {
      available: (n) => `${n} models`,
      comingSoon: 'Coming soon',
      madeToOrder: 'Built to order',
    },
    catalogueNote:
      'The sauna line is the Versa ladder — six heaters from 15.4 to 20 kW. Its figures are design targets until we have fired each stove and measured it, and the site says so on every one. The jacuzzi line is in development, and the fire pits have no catalogue because each is cut to the opening it drops into.',
    whyTitle: 'Why it is built the way it is.',
    originEyebrow: 'The shop',
    originTitle: 'Made in Mexico, shipped north.',
    originBody1:
      'Stovehaus designs and fabricates in Mexico for export to the United States and Canada. The short freight run north is the reason a dealer margin on this line works against a European import, and it is the reason a replacement part does not cross an ocean.',
    originBody2:
      'Every stove is fired before it is crated. We load it, bring it to temperature and check the seams hot.',
    dealerAsksTitle: 'What a dealer asks first',
    dealerAsks: [
      ['Origin', 'Mexico'],
      ['Export markets', 'United States · Canada'],
      ['Documentation', 'Metric and imperial'],
      ['Certification', 'See dealers page'],
    ],
  },

  fork: {
    dealer: {
      eyebrow: 'For dealers and installers',
      title: 'Stocking or specifying the line',
      body: 'Margin, lead times, freight from Saltillo, clearances and flue spec, and exactly where each line stands on certification.',
      items: ['Dealer margin and terms', 'Lead time and freight', 'Clearances and flue spec'],
      cta: 'Dealer information',
    },
    buyer: {
      eyebrow: 'For cabins, lodges and properties',
      title: 'Putting one on your property',
      body: 'What we build, how it is built, and who builds it. Start with the Versa ladder, then talk to a dealer near you.',
      items: [
        'Versa sauna heaters · six models',
        'Complete sauna rooms · quoted to the drawing',
        'Jacuzzi heaters · coming soon',
        'Gas fire pits · built to order',
      ],
      cta: 'See the heaters',
    },
  },

  linePage: {
    modelsCount: (n) => `${n} models`,
    comingSoonEyebrow: 'Coming soon',
    comingSoonTitle: (line) => `The ${line.toLowerCase()} line is in development.`,
    comingSoonLede:
      'We are building it and we are not going to put figures on this page before we have measured them.',
    comingSoonBody:
      'Tell us the tub you are heating and the property it sits on, and you will hear from us when the line is ready — with real numbers, not an announcement.',
    builtToOrderNote: 'Built to order',
    noCatalogue: 'No catalogue · cut to the job',
    builtToOrderBody:
      'There is no model list for the fire pits, because a linear burner is cut to the opening it drops into. Every one is made to the drawing. These are the four things we settle before anything is cut.',
    firepitCta:
      'Send the opening dimension and the fuel, and we will come back with a drawing and a price.',
    slotBody:
      'Specifications on request. We publish a figure once it has been tested, not before.',
  },

  firepitVariables: [
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
  ],

  product: {
    restOfLine: 'The rest of the line',
    specsNote:
      'Metric first, imperial in parentheses. Tabular figures so columns line up when this is printed or forwarded.',
    missingNote: (marker) =>
      `Figures marked ${marker} have not been published yet. We would rather send you a tested number than a confident one.`,
    orderingRows: [
      ['Model code', ''],
      ['Line', ''],
      ['Origin', ''],
      ['Lead time', ''],
      ['Incoterm', ''],
    ],
    quoteCarries:
      'A quote from us never leaves without incoterm, currency, validity date, lead time and HS code on it. Leaving those off costs more deals than the price does.',
  },

  shop: {
    heroEyebrow: 'The shop · Made in Mexico',
    heroHeadline: 'One shop, one crew.',
    heroLede:
      'The people who weld the seams are the people who fire the stove before it is crated.',
    howTitle: 'How one gets built.',
    howBody:
      'Stovehaus fabricates in Mexico. That is a fact about how the work gets done, not a line in a pitch — it means a replacement part does not cross an ocean, and it means the freight run north is short enough that a dealer margin on this line works against a European import.',
    process: [
      {
        n: '01',
        title: 'Cut from plate',
        body: 'A firebox starts as flat steel on a bench, cut to a pattern and folded. Not a stamped shell pressed from thin stock.',
        alt: 'Gloved hands guiding a steel sheet through a press brake, the laser guide line visible along the bend.',
      },
      {
        n: '02',
        title: 'Seam-welded, then ground back',
        body: 'Seams are welded through, not tacked. The seam is the part that fails first on a stove fed hard for twenty years, so it is the part that gets the time.',
        alt: 'An angle grinder throwing a spray of orange sparks off a steel plate on a bench.',
      },
      {
        n: '03',
        title: 'Fired before crating',
        body: 'Every stove is loaded, brought up to temperature and checked hot. A cold leak test tells you less than a hot one.',
      },
      {
        n: '04',
        title: 'Crated and shipped north',
        body: 'Stencilled, documented in metric and imperial, and freighted to the United States and Canada.',
      },
    ],
    stockNote:
      "The photographs on this page are stock images of metalwork, not of our floor. We will replace them with our own shop as soon as we have shot it, and we are not going to pass someone else's bench off as ours in the meantime.",
    whyMexicoTitle: 'Why Mexico matters to a dealer',
    whyMexicoBody:
      'Two practical things follow from fabricating here rather than in Europe. The freight run north is short, which is what makes the margin on this line work against an import. And a replacement part does not cross an ocean to reach an installer with a job half finished.',
  },

  dealers: {
    eyebrow: 'For dealers and installers',
    headline: 'Carry the line.',
    lede: 'You are deciding whether to put this on a purchase order. Here is what you need to make that call, and what we will send you in writing.',
    rooms: {
      eyebrow: 'Beyond the heater',
      title: 'We also build rooms.',
      body: 'Cabins, barrel saunas, indoor fit-outs and commercial installs — so a dealer can take the whole job rather than the stove and a referral. There is no catalogue and no standard size: every room is quoted to the drawing. Tell us the space and how often it will be fired.',
      cta: 'Ask for a quotation',
    },
    certStatusTitle: 'Certification status',
    certStatusBody:
      'We would rather give you a status and a date than let silence imply a listing that does not exist yet. That is also why this page names the standard: you should not have to ask whether we know what applies before you can find out where we stand against it.',
    whatWeSend: 'What we will send you',
    asks: [
      {
        label: 'Margin and terms',
        body: 'Dealer pricing, volume breaks and payment terms. Given in writing, per line.',
      },
      {
        label: 'Lead time',
        body: 'Working days from order to ready-to-ship, and what is on the floor now.',
      },
      {
        label: 'Freight',
        body: 'Incoterm, origin point and a landed estimate to your receiving address.',
      },
      {
        label: 'Listings and certification',
        body: 'Where each line stands against UL 1482 and the CSA equivalent, as a status and a date — never implied.',
      },
      {
        label: 'Clearances and flue spec',
        body: 'What your installer needs to quote a job before the stove arrives.',
      },
      {
        label: 'Parts and warranty',
        body: 'Which parts are held on this continent, and what the warranty covers in writing.',
      },
    ],
    figuresNote:
      'Figures are quoted per dealer and per line rather than published here, because a landed cost to Kelowna and a landed cost to Denver are not the same number.',
    caseTitle: 'The case for the line.',
    quoteTitle: 'How a quote arrives',
    quoteBody:
      'Often the first designed thing a dealer sees from us is an export quote, so it carries everything a broker will ask for. Nothing gets left off to make the page look tidier.',
    everyQuoteCarries: 'Every quote carries',
    quoteItems: ['Incoterm', 'Currency', 'Validity date', 'Lead time', 'HS code', 'Origin'],
  },

  specs: {
    eyebrow: 'Specifications',
    headline: 'Say the number.',
    lede: 'Buyers choose on output, room volume, heat-up time and steel thickness. Everything we have is on this page, and everything that is still a target rather than a measurement says so.',
    ladderTitle: 'The Versa ladder',
    columns: ['Line', 'Model', 'Model code', 'Output', 'Room volume', 'Stones', 'Flue'],
    pendingNote: '',
    readingCodeTitle: 'Reading a model code',
    readingCodeBody: 'The code is stamped on the etched plate and stencilled on the crate. It reads',
    codeParts: [
      ['SH', 'Stovehaus'],
      ['SN / JZ / FP', 'Line — sauna, jacuzzi, fire pit'],
      ['16', 'Output in kW'],
      ['CS / BK', 'Finish — corten steel, black'],
    ],
    codeExample:
      'would be a sauna heater, 17 kW, corten steel. No codes are assigned to the Versa line yet.',
    unitsTitle: 'Units',
    unitsBody:
      'Anything crossing the border is given metric first with imperial in parentheses, on every dimension. Sauna heaters are rated on room volume in m³, not floor area — a room with a high ceiling needs more stove than its footprint suggests.',
    needFigure: 'Need a figure that is not here?',
    comingSoonBlurb: 'In development. No figures published until they have been measured.',
    builtToOrderBlurb: 'No catalogue — each one is cut to the opening it drops into.',
  },

  rooms: {
    eyebrow: 'Built to the drawing · Sauna rooms',
    headline: 'The room, not just the heat.',
    lede: 'Cabins, barrel saunas, indoor fit-outs and commercial rooms, built to the site rather than to a catalogue.',
    introTitle: 'The work',
    intro:
      'A heater is a welded steel box. A room is joinery, ventilation and a hole cut through a wall for the flue — different work to the same standard. We build both, which means the stove gets sized to the room instead of the room being picked around a stove. There is no model list: a basement in Denver and a lakeside cabin in Ontario are not the same job, so every room is quoted to the drawing.',
    noCatalogue: 'No catalogue · quoted to the drawing',
    typesTitle: 'What we build',
    types: [
      {
        n: '01',
        title: 'Outdoor cabins and barrel saunas',
        body: 'Freestanding, on a pad or a deck. The format most of this market buys, and the one that travels best on a truck.',
      },
      {
        n: '02',
        title: 'Indoor rooms and fit-outs',
        body: 'Built into a space that already exists — a basement, a bathroom, the back of a spa. Ventilation and the flue route are what decide whether it works, not the cedar.',
      },
      {
        n: '03',
        title: 'Commercial installs',
        body: 'Hotels, gyms and lodges. Fired every day rather than every weekend, which changes the stove, the benches and how hard the ventilation has to work.',
      },
      {
        n: '04',
        title: 'Built to your drawing',
        body: 'Anything that does not sit in the three above. Send what you have, even if it is a sketch on graph paper.',
      },
    ],
    needTitle: 'What we need to quote one',
    needNote:
      'Four things get a number back. Without them a room quote is a guess, and we would rather ask than guess.',
    need: [
      {
        label: 'The space',
        body: 'Internal dimensions if it exists, or the footprint you have if it does not. Ceiling height matters more than floor area — a heater is sized on volume.',
      },
      {
        label: 'Indoor or outdoor',
        body: 'It changes the build, the insulation and the flue. An outdoor cabin and a basement fit-out share almost nothing but the benches.',
      },
      {
        label: 'How often it gets fired',
        body: 'Every day or every other weekend. Daily use changes the stove and the bench timber, and it is the question most quotes forget to ask.',
      },
      {
        label: 'The flue route',
        body: 'Through a wall or through a roof, and what it passes on the way. This is usually what decides whether a room is straightforward or not.',
      },
    ],
    ctaLead:
      'Send the space and how it will be used, and we will come back with a drawing and a price.',
    homeTitle: 'And the room around it.',
    homeBody:
      'We build complete sauna rooms as well as the heaters that go in them — cabins, barrel saunas, indoor fit-outs and commercial installs. No catalogue: each one is quoted to the drawing.',
  },

  whatsapp: {
    label: 'WhatsApp',
    cta: 'Message us on WhatsApp',
    messageTitle: 'Quote request from stovehaus.com',
    fields: {
      who: 'Who',
      lines: 'Lines',
      name: 'Name',
      company: 'Company',
      email: 'Email',
      shipTo: 'Ship to',
      needs: 'What they need',
    },
    blank: 'not given',
  },

  quote: {
    eyebrow: 'Get in touch',
    headline: 'Request a quote.',
    lede: 'Tell us what you are building or stocking and we will come back with figures — incoterm, currency, validity, lead time and HS code included.',
    whoYouAre: 'Who you are',
    dealerOption: 'Dealer or installer',
    buyerOption: 'Property owner',
    askingAbout: 'What you are asking about',
    name: 'Name',
    company: 'Company',
    email: 'Email',
    location: 'Ship-to city and country',
    message: 'What you need',
    submit: 'Send on WhatsApp',
    howItSends:
      'This opens WhatsApp with your answers already written out. Nothing is stored on this site and nothing is sent until you press send in WhatsApp — you will see the message first and can change it.',
    noWhatsapp:
      'No WhatsApp? Call the number on the right, or email us. Both reach the shop today.',
    direct: 'Direct',
    beforeYouAsk: 'Before you ask',
    whatComesBack: 'What comes back',
    comesBackItems: ['Incoterm', 'Currency', 'Validity date', 'Lead time', 'HS code'],
  },
};
