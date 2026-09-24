import type { Dict } from './types';

/**
 * Español (México).
 *
 * Written to the same voice rules as the English, not transliterated from it.
 * The foreman does not become chatty in Spanish: short sentences for facts,
 * longer ones for craft, second person, no exclamation marks, no emoji, and
 * every claim still carries a number or a name.
 *
 * Decisions worth knowing:
 *
 *   · `htmlLang` is **es-MX**, not `es`. A bare `es` reads as Peninsular
 *     Spanish to some browsers, and mobile Chrome will offer to translate a
 *     Spanish page for a Spanish reader. The company fabricates in Mexico and
 *     sells into North America, so es-MX is both correct and useful.
 *   · "Built for the flame." is NOT here, in any form. The guidelines forbid
 *     translating it, and it only exists as artwork inside the lockup anyway.
 *   · "Stovehaus" and the model names (Versa 13, Versa 16 LS) are unchanged.
 *     A dealer quoting across a border needs one name for one stove.
 *   · Units keep the brand convention — metric first, imperial in parentheses —
 *     and the decimal/thousands marks in the spec values are es-MX style
 *     already, because they are the same as English (1,234.56).
 *   · "Jacuzzi" is kept rather than "tina" or "bañera de hidromasaje": it is
 *     the line's name and it is what the market searches for.
 *   · "Löyly" stays. There is no Spanish word for it, and the sauna trade
 *     uses the Finnish one.
 */
export const es: Dict = {
  htmlLang: 'es-MX',
  name: 'Español',
  short: 'ES',

  nav: {
    sauna: 'Sauna',
    jacuzzi: 'Jacuzzi',
    firepits: 'Fogones',
    rooms: 'Cuartos',
    shop: 'El Taller',
    dealers: 'Distribuidores',
    specs: 'Fichas',
  },

  common: {
    requestQuote: 'Solicitar cotización',
    seeHeaters: 'Ver los calentadores',
    dealerInformation: 'Información para distribuidores',
    askAboutLine: 'Pregunta por esta línea',
    askToBeToldFirst: 'Avísenme cuando esté lista',
    seeWhatIsShipping: 'Ver lo que ya se entrega',
    allSpecifications: 'Todas las fichas',
    compareTheLine: 'Comparar la línea',
    startADrawing: 'Empezar un plano',
    insideTheShop: 'Dentro del taller',
    skipToContent: 'Saltar al contenido',
    catalogue: 'Catálogo',
    contact: 'Contacto',
    certification: 'Certificación',
    models: 'Modelos',
    modelSlot: 'Lugar de modelo',
    modelCodePending: 'Código pendiente',
    leadTimeOnRequest: 'Tiempo de entrega a solicitud',
    onRequest: 'A solicitud',
    pending: 'Pendiente',
    comingSoon: 'Próximamente',
    builtToOrder: 'Hecho a la medida',
    theLine: 'La línea',
    boughtOn: 'Se elige por',
    specifiedOn: 'Se especifica por',
    specifications: 'Ficha técnica',
    ordering: 'Para pedir',
    breadcrumbHome: 'Inicio',
    madeInMexico: 'Hecho en México',
    exportedTo: 'Exportado a Estados Unidos y Canadá',
    languageLabel: 'Idioma',
    builtBy: 'Sitio por',
    switchLanguage: 'View in English',
  },

  siteDescription:
    'Calentadores de leña para sauna y jacuzzi, fogones de gas y cuartos de sauna completos, hechos a mano en México para el mercado norteamericano.',

  lines: {
    sauna: {
      name: 'Sauna',
      chip: 'Sauna',
      boughtOn: 'Potencia',
      eyebrow: 'De leña · Calentadores para sauna',
      headline: 'Calentadores que aguantan.',
      lede: 'Un hogar cortado de placa y soldado en toda la costura, dimensionado para el cuarto que tiene que calentar.',
      intro:
        'Un calentador de sauna es una caja de acero soldada que quema leña y carga piedra. Lo que separa uno bueno de uno barato es el espesor de la placa de la que se corta, cómo se sueldan las costuras y cuánta piedra carga — porque la piedra es lo que hace que el cuarto siga dando löyly en el tercer y cuarto cucharón en vez de quedarse plano.',
      imageAlt:
        'Agua vertida con un cucharón sobre las piedras del calentador dentro de una sauna de cedro, con el vapor subiendo.',
      buyingNotes: [
        {
          label: 'Potencia',
          body: 'Se ajusta al volumen del cuarto. Si se queda corta, el cuarto nunca llega; si sobra, cueces el aire antes de que se calienten las bancas.',
        },
        {
          label: 'Capacidad de piedra',
          body: 'La piedra es el depósito. Más piedra significa vapor que aguanta cucharón tras cucharón.',
        },
        {
          label: 'Salida de humos y distancias',
          body: 'Lo que un instalador necesita antes de cotizar el trabajo. Se publica por modelo cuando está medido.',
        },
      ],
    },
    jacuzzi: {
      name: 'Jacuzzi',
      chip: 'Jacuzzi',
      boughtOn: 'Capacidad de la tina',
      eyebrow: 'De leña · Calentadores para jacuzzi',
      headline: 'Agua caliente, sin acometida.',
      lede: 'Un serpentín que calienta la tina solo con leña — sin bomba, sin resistencia, sin llevar electricidad hasta la base.',
      intro:
        'Un calentador de leña para jacuzzi sube la tina solo con leña. No hay bomba, no hay resistencia y no hay que llevar electricidad hasta la base, que es justo la razón por la que se instala en una propiedad donde la luz está a una zanja y un permiso de distancia. El calor se mueve por convección: el agua fría sale del fondo de la tina, pasa por el fuego y regresa caliente por arriba. Estamos construyendo la línea ahora. Todavía no se puede pedir nada.',
      imageAlt:
        'Una tina de hidromasaje de cedro calentada con leña en un bosque de primavera, con humo saliendo del tubo y leña rajada apilada al lado.',
      buyingNotes: [
        {
          label: 'Capacidad de la tina',
          body: 'Los litros para los que está dimensionado el calentador. Por debajo, el calentamiento se arrastra; por encima, el agua se estratifica.',
        },
        {
          label: 'Tiempo de calentamiento',
          body: 'Desde frío y a una temperatura ambiente declarada. Una cifra sin temperatura ambiente no es una cifra.',
        },
        {
          label: 'Especificación del serpentín',
          body: 'Grado y espesor de pared del serpentín sumergido o externo, que es lo que decide cuánto aguanta el agua tratada.',
        },
      ],
    },
    firepits: {
      name: 'Fogones',
      chip: 'Fogón',
      boughtOn: 'Potencia del quemador',
      eyebrow: 'Gas · Fogones',
      headline: 'Un fuego que se apaga.',
      lede: 'Quemadores lineales de gas en acero soldado, cortados a la mesa o la terraza donde van.',
      intro:
        'Los fogones funcionan con gas y no con leña, lo que los hace distintos al resto del catálogo: sin ceniza, sin humo a favor del viento sobre la mesa y con una llama que se apaga cuando cierras la válvula. Son de acero soldado como todo lo que hacemos, y no hay lista de modelos — un quemador lineal se corta al hueco donde se coloca, así que cada uno se fabrica según el plano de la mesa, la terraza o la azotea a la que va.',
      imageAlt:
        'Un fogón lineal de gas encendido sobre un lecho de piedra, detrás de un cristal cortaviento en una terraza.',
      buyingNotes: [
        {
          label: 'Largo del quemador',
          body: 'Cortado al hueco. Danos la medida terminada y trabajamos hacia atrás desde ahí.',
        },
        {
          label: 'Potencia',
          body: 'Depende del largo, declarada en kW y BTU/h en el plano.',
        },
        {
          label: 'Tipo de gas',
          body: 'Natural o LP. El orificio cambia, así que se define antes de cortar nada.',
        },
      ],
    },
  },

  spec: {
    roomVolume: 'Volumen del cuarto',
    heaterStones: 'Piedra',
    powerRating: 'Potencia',
    fireboxPlate: 'Placa del hogar',
    flueDiameter: 'Diámetro de salida',
    firebox: 'Hogar',
    dimensions: 'Medidas, An × Pr × Al',
    weight: 'Peso, sin piedra',
    clearance: 'Distancia a combustibles',
    heatUpTime: 'Tiempo de calentamiento',
    hsCode: 'Fracción arancelaria',
    tubCapacity: 'Capacidad de la tina',
    coilSpec: 'Especificación del serpentín',
    burnerLength: 'Largo del quemador',
    output: 'Potencia',
    fuelType: 'Tipo de gas',
  },

  specValue: {
    extendedThroughWall: 'Extendido, pasamuro',
    onRequest: 'A solicitud',
    saunaWoodFired: 'Sauna · de leña',
    mexico: 'México',
  },

  products: {
    'versa-13': {
      blurb:
        'El más chico de los tres, y el que piden casi todas las cabañas. Carga hasta 110 kg de piedra, que es lo que le permite seguir dando löyly en el tercer y cuarto cucharón en vez de quedarse plano. Dimensionado para un cuarto de 6 a 13 m³.',
    },
    'versa-13-ls': {
      blurb:
        'El Versa 13 con hogar extendido, para cargar la estufa desde el vestidor y no desde el cuarto caliente. Mismas cifras, instalación distinta: el paso por el muro se detalla antes de fabricar la estufa.',
      variantNote: 'Hogar extendido — se carga desde el cuarto de al lado.',
    },
    'versa-16': {
      blurb:
        'El de en medio de la escalera. 140 kg de piedra contra 17 kW, para un cuarto de 8 a 16 m³ — la medida a la que llegan casi todos los cuartos comerciales y las cabañas grandes.',
    },
    'versa-16-ls': {
      blurb:
        'El Versa 16 cargado desde fuera del cuarto caliente. La opción habitual en instalación comercial, donde nadie quiere a un encargado pasando leña frente a las bancas.',
      variantNote: 'Hogar extendido — se carga desde el cuarto de al lado.',
    },
    'versa-20': {
      blurb:
        'La punta de la escalera: 160 kg de piedra y 20 kW, para cuartos de 12 a 20 m³. Hecho para hoteles y cuartos comerciales que se prenden todos los días, no cada fin de semana.',
    },
    'versa-20-ls': {
      blurb:
        'El Versa más grande, cargado desde fuera del cuarto caliente. Especifica el espesor del muro al pedir — la extensión del hogar se corta a esa medida.',
      variantNote: 'Hogar extendido — se carga desde el cuarto de al lado.',
    },
  },

  provisional: {
    inline: 'Provisional — cifra de diseño, todavía sin probar',
    panelTitle: 'Sobre estas cifras',
    panelLead:
      'Cada cifra de esta página es un objetivo de diseño, no una medición. Es a lo que se está construyendo la estufa, no lo que hemos puesto en un medidor.',
    panelBody:
      'Publicamos un número probado una vez que prendemos la estufa y lo anotamos. Hasta entonces el objetivo es lo que tenemos, y preferimos decirte cuál de los dos estás leyendo. Las distancias a combustibles no aparecen en esta página: un instalador cotiza el trabajo con ellas y pertenecen a un aparato probado.',
  },

  /* Nombra la norma. Ver la nota en en.ts. */
  certification:
    'Todavía no está listado. Un calentador de leña que se vende en Estados Unidos necesita un listado UL 1482, y en Canadá el equivalente de CSA — sin él no pasa inspección y una aseguradora puede rechazar un siniestro. No vamos a insinuar otra cosa. Pregunta en qué punto está una línea y te damos un estado y una fecha.',

  messages: [
    {
      n: '01',
      title: 'Pesado a propósito.',
      body: 'Placa gruesa, costuras soldadas, un hogar hecho para cargarse duro veinte años — no una carcasa estampada.',
    },
    {
      n: '02',
      title: 'Hecho a mano, por gente con nombre.',
      body: 'Un taller, una cuadrilla, cada estufa prendida antes de encajonarla.',
    },
    {
      n: '03',
      title: 'Con precio para venderse, no solo para admirarse.',
      body: 'Fabricación mexicana y un flete corto hacia el norte dan un margen de distribuidor que compite contra la importación europea.',
    },
    {
      n: '04',
      title: 'Listo para el mercado norteamericano.',
      body: 'Certificaciones, distancias, normas de salida de humos, documentación en sistema imperial y refacciones en este continente.',
    },
  ],

  home: {
    heroEyebrow: 'De leña · Hecho en México',
    heroHeadline: 'Acero pesado, soldado a mano.',
    heroLede:
      'Calentadores para sauna y jacuzzi y fogones de gas, hechos en un taller y enviados al norte.',
    threeLinesTitle: 'Tres líneas.',
    threeLinesBody:
      'Dos queman leña y una quema gas. Cada línea tiene su color en todo el sitio y en las fichas, para que sepas de un vistazo qué cifra estás leyendo.',
    standing: {
      available: (n) => `${n} modelos`,
      comingSoon: 'Próximamente',
      madeToOrder: 'Hecho a la medida',
    },
    catalogueNote:
      'La línea de sauna es la escalera Versa — seis calentadores de 15.4 a 20 kW. Sus cifras son objetivos de diseño hasta que prendamos cada estufa y la midamos, y el sitio lo dice en cada una. La línea de jacuzzi está en desarrollo, y los fogones no tienen catálogo porque cada uno se corta al hueco donde va.',
    whyTitle: 'Por qué está hecho así.',
    originEyebrow: 'El taller',
    originTitle: 'Hecho en México, enviado al norte.',
    originBody1:
      'Stovehaus diseña y fabrica en México para exportar a Estados Unidos y Canadá. El flete corto hacia el norte es la razón por la que el margen del distribuidor compite contra una importación europea, y es la razón por la que una refacción no cruza un océano.',
    originBody2:
      'Cada estufa se prende antes de encajonarla. La cargamos, la llevamos a temperatura y revisamos las costuras en caliente.',
    dealerAsksTitle: 'Lo primero que pregunta un distribuidor',
    dealerAsks: [
      ['Origen', 'México'],
      ['Mercados de exportación', 'Estados Unidos · Canadá'],
      ['Documentación', 'Métrico e imperial'],
      ['Certificación', 'Ver página de distribuidores'],
    ],
  },

  fork: {
    dealer: {
      eyebrow: 'Para distribuidores e instaladores',
      title: 'Para vender o especificar la línea',
      body: 'Margen, tiempos de entrega, flete desde Saltillo, distancias y salida de humos, y en qué punto está cada línea en certificación.',
      items: [
        'Margen y condiciones de distribuidor',
        'Tiempo de entrega y flete',
        'Distancias y salida de humos',
      ],
      cta: 'Información para distribuidores',
    },
    buyer: {
      eyebrow: 'Para cabañas, hoteles y casas',
      title: 'Para ponerlo en tu propiedad',
      body: 'Qué hacemos, cómo está hecho y quién lo hace. Empieza por la escalera Versa y luego habla con un distribuidor cerca de ti.',
      items: [
        'Calentadores Versa para sauna · seis modelos',
        'Cuartos de sauna completos · cotizados según el plano',
        'Calentadores para jacuzzi · próximamente',
        'Fogones de gas · hechos a la medida',
      ],
      cta: 'Ver los calentadores',
    },
  },

  linePage: {
    modelsCount: (n) => `${n} modelos`,
    comingSoonEyebrow: 'Próximamente',
    comingSoonTitle: (line) => `La línea de ${line.toLowerCase()} está en desarrollo.`,
    comingSoonLede:
      'La estamos construyendo y no vamos a poner cifras en esta página antes de haberlas medido.',
    comingSoonBody:
      'Dinos qué tina vas a calentar y en qué propiedad está, y te avisamos cuando la línea esté lista — con números reales, no con un anuncio.',
    builtToOrderNote: 'Hecho a la medida',
    noCatalogue: 'Sin catálogo · cortado al trabajo',
    builtToOrderBody:
      'No hay lista de modelos para los fogones, porque un quemador lineal se corta al hueco donde se coloca. Cada uno se fabrica según el plano. Estas son las cuatro cosas que definimos antes de cortar nada.',
    firepitCta:
      'Mándanos la medida del hueco y el tipo de gas, y te regresamos un plano y un precio.',
    slotBody:
      'Ficha a solicitud. Publicamos una cifra cuando está probada, no antes.',
  },

  firepitVariables: [
    {
      label: 'Largo del quemador',
      body: 'Los quemadores lineales se cortan al hueco. Danos la medida terminada de la mesa o del marco y trabajamos hacia atrás desde ahí.',
    },
    {
      label: 'Potencia',
      body: 'Depende del largo del quemador. Se declara en kW y BTU/h en el plano, porque una terraza en Alberta y una terraza en Texas no preguntan lo mismo.',
    },
    {
      label: 'Gas',
      body: 'Natural o LP. El orificio cambia, así que esto se define antes de cortar nada, no después.',
    },
    {
      label: 'Marco y acabado',
      body: 'Charola para empotrar, mesa completa o una placa para integrar en mampostería. Acabado de acero a juego con el resto de la obra.',
    },
  ],

  product: {
    restOfLine: 'El resto de la línea',
    specsNote:
      'Métrico primero, imperial entre paréntesis. Cifras tabulares para que las columnas cuadren al imprimir o reenviar.',
    missingNote: (marker) =>
      `Las cifras marcadas ${marker} todavía no se publican. Preferimos mandarte un número probado antes que uno seguro de sí mismo.`,
    orderingRows: [
      ['Código de modelo', ''],
      ['Línea', ''],
      ['Origen', ''],
      ['Tiempo de entrega', ''],
      ['Incoterm', ''],
    ],
    quoteCarries:
      'Una cotización nuestra nunca sale sin incoterm, moneda, vigencia, tiempo de entrega y fracción arancelaria. Dejar eso fuera cuesta más negocios que el precio.',
  },

  shop: {
    heroEyebrow: 'El taller · Hecho en México',
    heroHeadline: 'Un taller, una cuadrilla.',
    heroLede:
      'Los que sueldan las costuras son los mismos que prenden la estufa antes de encajonarla.',
    howTitle: 'Cómo se hace uno.',
    howBody:
      'Stovehaus fabrica en México. Es un dato sobre cómo se hace el trabajo, no una frase de venta — significa que una refacción no cruza un océano, y significa que el flete al norte es lo bastante corto para que el margen del distribuidor compita contra una importación europea.',
    process: [
      {
        n: '01',
        title: 'Cortado de placa',
        body: 'Un hogar empieza como acero plano sobre el banco, cortado a un patrón y doblado. No una carcasa estampada de lámina delgada.',
        alt: 'Manos con guantes guiando una lámina de acero por una dobladora, con la línea del láser visible sobre el doblez.',
      },
      {
        n: '02',
        title: 'Soldado de costura y esmerilado',
        body: 'Las costuras se sueldan de lado a lado, no por puntos. La costura es lo primero que falla en una estufa cargada duro veinte años, así que es a lo que se le dedica el tiempo.',
        alt: 'Una esmeriladora angular lanzando una lluvia de chispas naranjas sobre una placa de acero en el banco.',
      },
      {
        n: '03',
        title: 'Prendida antes de encajonar',
        body: 'Cada estufa se carga, se lleva a temperatura y se revisa en caliente. Una prueba de fuga en frío dice menos que una en caliente.',
      },
      {
        n: '04',
        title: 'Encajonada y enviada al norte',
        body: 'Marcada con plantilla, documentada en métrico e imperial, y fleteada a Estados Unidos y Canadá.',
      },
    ],
    stockNote:
      'Las fotos de esta página son imágenes de archivo de trabajo en metal, no de nuestro piso. Las cambiaremos por nuestro propio taller en cuanto lo fotografiemos, y mientras tanto no vamos a hacer pasar el banco de otro por el nuestro.',
    whyMexicoTitle: 'Por qué México le importa a un distribuidor',
    whyMexicoBody:
      'De fabricar aquí y no en Europa se siguen dos cosas prácticas. El flete al norte es corto, que es lo que hace que el margen de esta línea compita contra una importación. Y una refacción no cruza un océano para llegar a un instalador con el trabajo a medias.',
  },

  dealers: {
    eyebrow: 'Para distribuidores e instaladores',
    headline: 'Lleva la línea.',
    lede: 'Estás decidiendo si pones esto en una orden de compra. Esto es lo que necesitas para decidir, y lo que te mandamos por escrito.',
    rooms: {
      eyebrow: 'Más allá del calentador',
      title: 'También hacemos los cuartos.',
      body: 'Cabañas, saunas de barril, cuartos interiores e instalaciones comerciales — para que un distribuidor se lleve el trabajo completo y no nada más la estufa con una recomendación. No hay catálogo ni medida estándar: cada cuarto se cotiza según el plano. Dinos el espacio y con qué frecuencia se va a prender.',
      cta: 'Pide una cotización',
    },
    certStatusTitle: 'Estado de certificación',
    certStatusBody:
      'Preferimos darte un estado y una fecha antes que dejar que el silencio dé a entender una certificación que todavía no existe. Por eso esta página también nombra la norma: no deberías tener que preguntar si sabemos cuál aplica antes de saber en qué punto estamos frente a ella.',
    whatWeSend: 'Lo que te vamos a mandar',
    asks: [
      {
        label: 'Margen y condiciones',
        body: 'Precio de distribuidor, escalas por volumen y condiciones de pago. Por escrito y por línea.',
      },
      {
        label: 'Tiempo de entrega',
        body: 'Días hábiles de la orden a listo para embarcar, y qué hay en piso ahora.',
      },
      {
        label: 'Flete',
        body: 'Incoterm, punto de origen y un estimado puesto en tu dirección de recepción.',
      },
      {
        label: 'Certificaciones',
        body: 'En qué punto está cada línea frente a UL 1482 y el equivalente de CSA, como estado y fecha — nunca insinuado.',
      },
      {
        label: 'Distancias y salida de humos',
        body: 'Lo que tu instalador necesita para cotizar antes de que llegue la estufa.',
      },
      {
        label: 'Refacciones y garantía',
        body: 'Qué refacciones se tienen en este continente y qué cubre la garantía por escrito.',
      },
    ],
    figuresNote:
      'Las cifras se cotizan por distribuidor y por línea en vez de publicarse aquí, porque un costo puesto en Kelowna y uno puesto en Denver no son el mismo número.',
    caseTitle: 'El argumento de la línea.',
    quoteTitle: 'Cómo llega una cotización',
    quoteBody:
      'Muchas veces lo primero diseñado que ve un distribuidor de nosotros es una cotización de exportación, así que lleva todo lo que va a pedir un agente aduanal. Nada se deja fuera para que la hoja se vea más limpia.',
    everyQuoteCarries: 'Cada cotización lleva',
    quoteItems: ['Incoterm', 'Moneda', 'Vigencia', 'Tiempo de entrega', 'Fracción arancelaria', 'Origen'],
  },

  specs: {
    eyebrow: 'Fichas técnicas',
    headline: 'Di el número.',
    lede: 'Se compra por potencia, volumen del cuarto, tiempo de calentamiento y espesor del acero. Todo lo que tenemos está en esta página, y todo lo que todavía es objetivo y no medición lo dice.',
    ladderTitle: 'La escalera Versa',
    columns: ['Línea', 'Modelo', 'Código', 'Potencia', 'Volumen', 'Piedra', 'Salida'],
    pendingNote: '',
    readingCodeTitle: 'Cómo se lee un código',
    readingCodeBody: 'El código va grabado en la placa y marcado en la caja. Se lee',
    codeParts: [
      ['SH', 'Stovehaus'],
      ['SN / JZ / FP', 'Línea — sauna, jacuzzi, fogón'],
      ['16', 'Potencia en kW'],
      ['CS / BK', 'Acabado — acero corten, negro'],
    ],
    codeExample:
      'sería un calentador de sauna, 17 kW, acero corten. Todavía no hay códigos asignados a la línea Versa.',
    unitsTitle: 'Unidades',
    unitsBody:
      'Todo lo que cruza la frontera va en métrico primero con imperial entre paréntesis, en cada medida. Los calentadores de sauna se clasifican por volumen del cuarto en m³, no por área de piso — un cuarto con techo alto necesita más estufa de lo que sugiere su huella.',
    needFigure: '¿Necesitas una cifra que no está aquí?',
    comingSoonBlurb: 'En desarrollo. No se publican cifras hasta haberlas medido.',
    builtToOrderBlurb: 'Sin catálogo — cada uno se corta al hueco donde se coloca.',
  },

  rooms: {
    eyebrow: 'Hecho según el plano · Cuartos de sauna',
    headline: 'El cuarto, no nada más el calor.',
    lede: 'Cabañas, saunas de barril, cuartos interiores e instalaciones comerciales, hechos para la obra y no para un catálogo.',
    introTitle: 'El trabajo',
    intro:
      'Un calentador es una caja de acero soldada. Un cuarto es carpintería, ventilación y un hueco cortado en el muro para la salida de humos — trabajo distinto con el mismo estándar. Hacemos los dos, lo que significa que la estufa se dimensiona al cuarto y no el cuarto se escoge alrededor de una estufa. No hay lista de modelos: un sótano en Denver y una cabaña junto a un lago en Ontario no son el mismo trabajo, así que cada cuarto se cotiza según el plano.',
    noCatalogue: 'Sin catálogo · cotizado según el plano',
    typesTitle: 'Qué hacemos',
    types: [
      {
        n: '01',
        title: 'Cabañas y saunas de barril',
        body: 'Exentas, sobre una plataforma o una terraza. El formato que más se compra en este mercado, y el que mejor viaja en un camión.',
      },
      {
        n: '02',
        title: 'Cuartos interiores y adaptaciones',
        body: 'Metidos en un espacio que ya existe — un sótano, un baño, el fondo de un spa. La ventilación y el paso de la salida de humos son lo que decide si funciona, no el cedro.',
      },
      {
        n: '03',
        title: 'Instalaciones comerciales',
        body: 'Hoteles, gimnasios y hospedajes. Se prenden todos los días y no cada fin de semana, lo que cambia la estufa, las bancas y cuánto tiene que trabajar la ventilación.',
      },
      {
        n: '04',
        title: 'Según tu plano',
        body: 'Cualquier cosa que no entre en los tres de arriba. Mándanos lo que tengas, aunque sea un croquis en papel cuadriculado.',
      },
    ],
    needTitle: 'Qué necesitamos para cotizarlo',
    needNote:
      'Cuatro cosas y te regresamos un número. Sin ellas una cotización de cuarto es una adivinanza, y preferimos preguntar antes que adivinar.',
    need: [
      {
        label: 'El espacio',
        body: 'Medidas interiores si ya existe, o la huella que tienes si no. La altura del techo importa más que el área de piso — un calentador se dimensiona por volumen.',
      },
      {
        label: 'Interior o exterior',
        body: 'Cambia la construcción, el aislamiento y la salida de humos. Una cabaña exterior y un sótano adaptado no comparten casi nada más que las bancas.',
      },
      {
        label: 'Con qué frecuencia se prende',
        body: 'Todos los días o cada tercer fin de semana. El uso diario cambia la estufa y la madera de las bancas, y es la pregunta que más cotizaciones se saltan.',
      },
      {
        label: 'Por dónde sale el humo',
        body: 'Por el muro o por el techo, y por qué pasa en el camino. Esto suele ser lo que decide si un cuarto es sencillo o no.',
      },
    ],
    ctaLead:
      'Mándanos el espacio y cómo se va a usar, y te regresamos un plano y un precio.',
    homeTitle: 'Y el cuarto alrededor.',
    homeBody:
      'También hacemos cuartos de sauna completos, no nada más los calentadores que van dentro — cabañas, saunas de barril, cuartos interiores e instalaciones comerciales. Sin catálogo: cada uno se cotiza según el plano.',
  },

  whatsapp: {
    label: 'WhatsApp',
    cta: 'Escríbenos por WhatsApp',
    messageTitle: 'Solicitud de cotización desde stovehaus.com',
    fields: {
      who: 'Quién',
      lines: 'Líneas',
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo',
      shipTo: 'Entrega en',
      needs: 'Qué necesita',
    },
    blank: 'sin dato',
  },

  quote: {
    eyebrow: 'Contáctanos',
    headline: 'Solicitar cotización.',
    lede: 'Dinos qué vas a construir o a vender y te regresamos cifras — con incoterm, moneda, vigencia, tiempo de entrega y fracción arancelaria.',
    whoYouAre: 'Quién eres',
    dealerOption: 'Distribuidor o instalador',
    buyerOption: 'Propietario',
    askingAbout: 'Sobre qué preguntas',
    name: 'Nombre',
    company: 'Empresa',
    email: 'Correo',
    location: 'Ciudad y país de entrega',
    message: 'Qué necesitas',
    submit: 'Enviar por WhatsApp',
    howItSends:
      'Esto abre WhatsApp con tus respuestas ya escritas. Nada se guarda en este sitio y nada se manda hasta que le des enviar en WhatsApp — primero ves el mensaje y lo puedes cambiar.',
    noWhatsapp:
      '¿Sin WhatsApp? Llama al número de la derecha o escríbenos por correo. Las dos cosas llegan al taller hoy.',
    direct: 'Directo',
    beforeYouAsk: 'Antes de preguntar',
    whatComesBack: 'Qué te regresamos',
    comesBackItems: ['Incoterm', 'Moneda', 'Vigencia', 'Tiempo de entrega', 'Fracción arancelaria'],
  },
};
