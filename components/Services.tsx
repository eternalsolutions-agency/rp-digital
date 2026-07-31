"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Bot,
  Search,
  Megaphone,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Siti Web",
    description:
      "Siti vetrina, e-commerce e landing page moderne, veloci e ottimizzate per convertire visitatori in clienti.",
  },
  {
    icon: Smartphone,
    title: "Social Media",
    description:
      "Strategie, contenuti e gestione professionale di Facebook, Instagram, LinkedIn e TikTok.",
  },
  {
    icon: Bot,
    title: "AI & Automazioni",
    description:
      "Chatbot intelligenti, workflow automatici e integrazioni per farti risparmiare tempo ogni giorno.",
  },
  {
    icon: MonitorSmartphone,
    title: "App",
    description:
      "Applicazioni mobile e web app per aziende, professionisti e attività locali.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Ottimizzazione tecnica e strategica per aumentare la visibilità su Google.",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    description:
      "Campagne Meta e Google Ads progettate per generare contatti e vendite.",
  },
];

export default function Services() {
  return (
    <section
      id="servizi"
      className="relative bg-black py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[4px] text-red-500">
            Servizi
          </span>

          <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
            Soluzioni digitali per far crescere il tuo business.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Ogni progetto nasce con un obiettivo preciso:
            aumentare la tua presenza online e trasformarla
            in risultati concreti.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/10"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/15 transition-all duration-300 group-hover:bg-red-600">
                  <Icon
                    size={30}
                    className="text-red-500 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="leading-8 text-zinc-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}