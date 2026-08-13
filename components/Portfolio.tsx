"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { portfolio, PortfolioItem } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";

import ProjectCard from "./ProjectCard";
import AppCard from "./AppCard";
import PhonePreviewModal from "./PhonePreviewModal";

type Filter = "all" | "website" | "app";

const copy={it:{title:"Alcuni dei miei lavori",intro:"Una selezione di siti web e applicazioni sviluppate per aziende e professionisti con particolare attenzione a design, prestazioni ed esperienza utente.",all:"Tutti",web:"Siti Web",apps:"Applicazioni"},en:{title:"Some of my work",intro:"A selection of websites and applications developed for companies and professionals, with a strong focus on design, performance and user experience.",all:"All",web:"Websites",apps:"Applications"},es:{title:"Algunos de mis trabajos",intro:"Una selección de sitios web y aplicaciones desarrolladas para empresas y profesionales, con especial atención al diseño, rendimiento y experiencia de usuario.",all:"Todos",web:"Sitios Web",apps:"Aplicaciones"}};
export default function Portfolio() {
  const {language}=useLanguage(); const t=copy[language];
  const [filter, setFilter] = useState<Filter>("all");

  const [selectedApp, setSelectedApp] = useState<PortfolioItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return portfolio;

    return portfolio.filter((item) => item.type === filter);
  }, [filter]);

  return (
    <>
      <section
        id="portfolio"
        className="bg-[#080808] py-24"
      >
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="text-center"
          >
            <p className="text-red-500 font-semibold uppercase tracking-[4px]">
              Portfolio
            </p>

            <h2 className="mt-4 text-5xl font-black text-white">
              {t.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              {t.intro}
            </p>
          </motion.div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            <button
              onClick={() => setFilter("all")}
              className={`rounded-full px-6 py-3 transition ${
                filter === "all"
                  ? "bg-red-600 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              {t.all}
            </button>

            <button
              onClick={() => setFilter("website")}
              className={`rounded-full px-6 py-3 transition ${
                filter === "website"
                  ? "bg-red-600 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              {t.web}
            </button>

            <button
              onClick={() => setFilter("app")}
              className={`rounded-full px-6 py-3 transition ${
                filter === "app"
                  ? "bg-red-600 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              {t.apps}
            </button>

          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">

            {filteredProjects.map((project) =>
              project.type === "website" ? (
                <ProjectCard
                  key={project.id}
                  project={project} language={language}
                />
              ) : (
                <AppCard
                  key={project.id}
                  app={project} language={language}
                  onOpen={setSelectedApp}
                />
              )
            )}

          </div>

        </div>
      </section>

      <PhonePreviewModal
        app={selectedApp}
        language={language}
        onClose={() => setSelectedApp(null)}
      />
    </>
  );
}