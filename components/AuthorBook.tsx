"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import PageAura from "./PageAura";

const AMAZON_URL = "https://www.amazon.it/dp/B0HQ2PX2FJ";

const copy = {
  it: {
    label: "Autore",
    kicker: "Oltre il digitale",
    title: "COESISTERE",
    subtitle: "Usare l’AI non significa saper usare l’AI.",
    text: "Un libro sull’impatto reale dell’intelligenza artificiale sul lavoro, sulle competenze e sulle aziende. Non un manuale di prompt o un catalogo di strumenti, ma una riflessione concreta su automazione, marketing e cambiamento, senza perdere di vista ciò che continua a fare la differenza: esperienza, relazioni, responsabilità e giudizio umano.",
    author: "Riccardo Pellegrino",
    badge: "Disponibile su Amazon",
    cta: "Scopri il libro su Amazon",
  },
  en: {
    label: "Author",
    kicker: "Beyond digital",
    title: "COESISTERE",
    subtitle: "Using AI does not mean knowing how to use AI.",
    text: "A book about the real impact of artificial intelligence on work, skills and businesses. Not a prompt manual or a catalogue of tools, but a practical reflection on automation, marketing and change, while keeping sight of what still makes the difference: experience, relationships, responsibility and human judgement.",
    author: "Riccardo Pellegrino",
    badge: "Available on Amazon",
    cta: "Discover the book on Amazon",
  },
  es: {
    label: "Autor",
    kicker: "Más allá de lo digital",
    title: "COESISTERE",
    subtitle: "Usar la IA no significa saber usar la IA.",
    text: "Un libro sobre el impacto real de la inteligencia artificial en el trabajo, las competencias y las empresas. No es un manual de prompts ni un catálogo de herramientas, sino una reflexión concreta sobre automatización, marketing y cambio, sin perder de vista lo que sigue marcando la diferencia: experiencia, relaciones, responsabilidad y criterio humano.",
    author: "Riccardo Pellegrino",
    badge: "Disponible en Amazon",
    cta: "Descubre el libro en Amazon",
  },
};

export default function AuthorBook() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section id="autore" className="relative overflow-hidden border-t border-white/5 bg-zinc-950 py-28">
      <PageAura word="AUTHOR" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 35, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[350px]"
        >
          <div className="absolute -inset-5 rounded-[36px] bg-red-600/15 blur-3xl" />
          <div className="wow-card glass-panel relative overflow-hidden rounded-[28px] border border-white/15 p-3 shadow-2xl shadow-black/60">
            <Image
              src="/images/coesistere.jpg"
              alt="Copertina del libro COESISTERE di Riccardo Pellegrino"
              width={1024}
              height={1536}
              className="h-auto w-full rounded-[20px] object-cover"
              sizes="(max-width: 1024px) 80vw, 350px"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 rounded-full border border-white/10 bg-black/90 px-5 py-3 text-xs font-semibold uppercase tracking-[2px] text-zinc-300 shadow-xl backdrop-blur">
            {t.badge}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[4px] text-red-500">{t.label}</span>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[3px] text-zinc-500">{t.kicker}</p>
          <h2 className="mt-3 text-5xl font-black tracking-[-.04em] text-white md:text-7xl">{t.title}</h2>
          <p className="mt-5 max-w-2xl text-2xl font-bold leading-tight text-zinc-200 md:text-3xl">{t.subtitle}</p>
          <div className="mt-8 h-px w-24 bg-red-600" />
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">{t.text}</p>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-10 bg-zinc-700" />
            <span className="text-sm font-semibold uppercase tracking-[3px] text-zinc-300">{t.author}</span>
          </div>

          <div className="mt-10">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-red-600 px-7 py-4 font-semibold text-white shadow-[0_0_35px_rgba(239,32,41,.2)] transition hover:scale-[1.03] hover:bg-red-500"
            >
              {t.cta}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
