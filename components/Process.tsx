"use client";

import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Ascolto",
    description:
      "Analizziamo insieme il tuo progetto, gli obiettivi e il pubblico che vuoi raggiungere.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategia",
    description:
      "Progetto la soluzione più efficace per migliorare la tua presenza digitale e ottenere risultati concreti.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Realizzazione",
    description:
      "Sviluppo il sito, l'app o la strategia digitale curando ogni dettaglio, dal design alle prestazioni.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Crescita",
    description:
      "Dopo la pubblicazione continuo a supportarti con ottimizzazioni, aggiornamenti e nuove opportunità.",
  },
];

export default function Process() {
  return (
    <section id="metodo" className="bg-[#050505] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[4px] text-red-500">
            Metodo
          </span>

          <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
            Un processo semplice, risultati concreti.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Ogni progetto segue un percorso chiaro, dalla prima idea fino alla
            pubblicazione e alla crescita online.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40"
              >
                <span className="absolute right-6 top-6 text-5xl font-black text-white/5">
                  {step.number}
                </span>

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/15 transition group-hover:bg-red-600">
                  <Icon
                    size={30}
                    className="text-red-500 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="leading-8 text-zinc-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}