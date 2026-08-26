export type PortfolioItem = {
  id: number;
  type: "website" | "app";
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
  translations?: { en: { subtitle: string; description: string }; es: { subtitle: string; description: string } };
  publishing?: boolean;
};

export const portfolio: PortfolioItem[] = [
  {
    id: 9,
    type: "website",
    title: "Ciccio Pubblicità",
    subtitle: "Sito vetrina • Catalogo • Multilingua",
    description: "Sito web realizzato per un’azienda specializzata in personalizzazione di abbigliamento, ricamo professionale, stampa e gadget promozionali. Un progetto pensato per valorizzare servizi, catalogo e promozioni e facilitare la richiesta di preventivo.",
    translations: {
      en: { subtitle: "Showcase website • Catalogue • Multilingual", description: "Website created for a company specializing in customized clothing, professional embroidery, printing and promotional gadgets. A project designed to showcase services, catalogue and promotions and make quote requests easier." },
      es: { subtitle: "Sitio escaparate • Catálogo • Multilingüe", description: "Sitio web creado para una empresa especializada en ropa personalizada, bordado profesional, impresión y gadgets promocionales. Un proyecto diseñado para destacar servicios, catálogo y promociones y facilitar la solicitud de presupuestos." }
    },
    image: "/images/portfolio/ciccio-pubblicita.png",
    url: "",
    technologies: ["Web Design", "Catalogo", "Multilingua", "Responsive"],
    publishing: true
  },
  {
    id: 8,
    type: "website",
    title: "KAÓS Luxury Cosmetics",
    subtitle: "E-commerce • Beauty • Luxury",
    description: "E-commerce progettato per valorizzare l’identità premium di KAÓS Luxury Cosmetics e accompagnare l’utente dalla scoperta dei prodotti fino all’acquisto online, con un’esperienza visiva coerente con il posizionamento luxury del brand.",
    translations: {
      en: { subtitle: "E-commerce • Beauty • Luxury", description: "E-commerce designed to enhance the premium identity of KAÓS Luxury Cosmetics and guide users from product discovery through online purchase, with a visual experience consistent with the brand’s luxury positioning." },
      es: { subtitle: "E-commerce • Beauty • Luxury", description: "E-commerce diseñado para potenciar la identidad premium de KAÓS Luxury Cosmetics y acompañar al usuario desde el descubrimiento de los productos hasta la compra online, con una experiencia visual coherente con el posicionamiento luxury de la marca." }
    },
    image: "/images/portfolio/kaos-luxury.jpg",
    url: "",
    technologies: ["E-commerce", "Web Design", "Responsive", "Beauty"],
    publishing: true
  },
  {
    id: 7,
    type: "website",
    title: "Progetto Libri Liberi",
    subtitle: "Sito Web • Progetto culturale",
    description:
      "Sito web realizzato per Progetto Libri Liberi, iniziativa nata a Pisa che porta libri, racconti e giochi gratuiti per adulti e bambini nei luoghi della comunità attraverso casette in legno. Il sito presenta il progetto, la mappa delle casette, la galleria, le news e le modalità per aderire, donare o diventare partner.",
    translations: {
      en: { subtitle: "Website \u2022 Cultural project", description: "Website created for Progetto Libri Liberi, an initiative born in Pisa that brings free books, stories and games for adults and children into community spaces through wooden book-sharing boxes. The website presents the project, the map, gallery, news and ways to join, donate or become a partner." },
      es: { subtitle: "Sitio Web \u2022 Proyecto cultural", description: "Sitio web creado para Progetto Libri Liberi, una iniciativa nacida en Pisa que lleva libros, cuentos y juegos gratuitos para adultos y ni\u00f1os a los espacios de la comunidad mediante casetas de madera. El sitio presenta el proyecto, el mapa, la galer\u00eda, noticias y formas de participar, donar o convertirse en partner." }
    },
    image: "/images/portfolio/progetto-libri-liberi.png",
    url: "https://www.progettolibriliberi.it/",
    technologies: [
      "Web Design",
      "Responsive",
      "Mappa",
      "SEO"
    ]
  },

  {
    id: 1,
    type: "website",
    title: "Amministrazioni Condominiali Rovereto",
    subtitle: "Sito Web Aziendale",
    description:
      "Realizzazione di un sito professionale per uno studio di amministrazione condominiale, progettato per valorizzare i servizi offerti, migliorare la presenza online e facilitare il contatto con nuovi clienti.",
    translations: {
      en: { subtitle: "Corporate Website", description: "Professional website for a condominium management firm, designed to showcase its services, strengthen its online presence and make it easier for potential clients to get in touch." },
      es: { subtitle: "Sitio Web Corporativo", description: "Sitio profesional para un estudio de administraci\u00f3n de comunidades, dise\u00f1ado para destacar sus servicios, mejorar su presencia online y facilitar el contacto con nuevos clientes." }
    },
    image: "/images/portfolio/amministratori.png",
    url: "https://www.amministrazionicondominialirovereto.it/",
    technologies: [
      "HTML",
      "CSS",
      "Responsive",
      "SEO"
    ]
  },

  {
    id: 2,
    type: "website",
    title: "Fotovoltaico Verona",
    subtitle: "Landing Page",
    description:
      "Sito orientato alla generazione di contatti per impianti fotovoltaici, con una struttura studiata per aumentare le conversioni e migliorare il posizionamento sui motori di ricerca.",
    translations: {
      en: { subtitle: "Landing Page", description: "Lead-generation website for photovoltaic systems, with a structure designed to increase conversions and improve search-engine visibility." },
      es: { subtitle: "Landing Page", description: "Sitio orientado a la generaci\u00f3n de contactos para instalaciones fotovoltaicas, con una estructura dise\u00f1ada para aumentar las conversiones y mejorar la visibilidad en buscadores." }
    },
    image: "/images/portfolio/fotovoltaico.png",
    url: "https://www.fotovoltaico-verona.com/",
    technologies: [
      "HTML",
      "CSS",
      "Responsive",
      "SEO"
    ]
  },

  {
    id: 3,
    type: "app",
    title: "Pizzeria70",
    subtitle: "Applicazione Mobile",
    description:
      "Web App dedicata alla gestione del rapporto con i clienti tramite coupon, fidelity card, notifiche push e promozioni.",
    translations: {
      en: { subtitle: "Mobile Application", description: "Web app for customer engagement through coupons, loyalty cards, push notifications and promotions." },
      es: { subtitle: "Aplicaci\u00f3n M\u00f3vil", description: "Web app dedicada a la relaci\u00f3n con los clientes mediante cupones, tarjeta de fidelidad, notificaciones push y promociones." }
    },
    image: "/images/apps/pizzeria70.png",
    url: "https://pizzeria70.cittacoupon.it/",
    technologies: [
      "Push",
      "Coupon",
      "Fidelity"
    ]
  },

  {
    id: 4,
    type: "app",
    title: "Salvi Immobiliare",
    subtitle: "Applicazione Mobile",
    description:
      "Applicazione pensata per fidelizzare i clienti e migliorare la comunicazione attraverso notifiche e servizi dedicati.",
    translations: {
      en: { subtitle: "Mobile Application", description: "Application designed to build customer loyalty and improve communication through notifications and dedicated services." },
      es: { subtitle: "Aplicaci\u00f3n M\u00f3vil", description: "Aplicaci\u00f3n dise\u00f1ada para fidelizar clientes y mejorar la comunicaci\u00f3n mediante notificaciones y servicios dedicados." }
    },
    image: "/images/apps/salvi.png",
    url: "https://salviimmobiliare.cittacoupon.it/",
    technologies: [
      "Push",
      "Fidelity",
      "News"
    ]
  },

  {
    id: 5,
    type: "app",
    title: "Garattini Viaggi",
    subtitle: "Applicazione Mobile",
    description:
      "Web App per agenzia viaggi con promozioni, notifiche e gestione clienti.",
    translations: {
      en: { subtitle: "Mobile Application", description: "Web app for a travel agency featuring promotions, notifications and customer management." },
      es: { subtitle: "Aplicaci\u00f3n M\u00f3vil", description: "Web app para agencia de viajes con promociones, notificaciones y gesti\u00f3n de clientes." }
    },
    image: "/images/apps/garattini.png",
    url: "https://garattiniviaggi.cittacoupon.it/",
    technologies: [
      "Push",
      "Coupon",
      "Travel"
    ]
  },

  {
    id: 6,
    type: "app",
    title: "Zero Stress Viaggi",
    subtitle: "Applicazione Mobile",
    description:
      "Applicazione sviluppata per mantenere un contatto costante con i clienti attraverso offerte e notifiche dedicate.",
    translations: {
      en: { subtitle: "Mobile Application", description: "Application developed to maintain ongoing customer contact through offers and dedicated notifications." },
      es: { subtitle: "Aplicaci\u00f3n M\u00f3vil", description: "Aplicaci\u00f3n desarrollada para mantener un contacto constante con los clientes mediante ofertas y notificaciones dedicadas." }
    },
    image: "/images/apps/zerostress.png",
    url: "https://zerostressviaggi.cittacoupon.it/",
    technologies: [
      "Push",
      "Travel",
      "Fidelity"
    ]
  }
];