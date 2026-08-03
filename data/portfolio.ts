export type PortfolioItem = {
  id: number;
  type: "website" | "app";
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
};

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    type: "website",
    title: "Amministrazioni Condominiali Rovereto",
    subtitle: "Sito Web Aziendale",
    description:
      "Realizzazione di un sito professionale per uno studio di amministrazione condominiale, progettato per valorizzare i servizi offerti, migliorare la presenza online e facilitare il contatto con nuovi clienti.",
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
    image: "/images/apps/zerostress.png",
    url: "https://zerostressviaggi.cittacoupon.it/",
    technologies: [
      "Push",
      "Travel",
      "Fidelity"
    ]
  }
];