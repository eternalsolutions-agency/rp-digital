"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const stats = [
  { value: "8+", label: "Anni di esperienza" },
  { value: "100+", label: "Progetti realizzati" },
  { value: "30+", label: "Clienti seguiti" },
  { value: "100%", label: "Supporto diretto" },
];

export default function About() {
  return (
    <section id="chi-sono" className="bg-black py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-[40px] bg-red-600/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">
            <Image
              src="/images/riccardo.jpg"
              alt="Riccardo Pellegrino"
              width={700}
              height={900}
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[4px] text-red-500">
            Chi sono
          </span>

          <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
            Strategia, design e tecnologia.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Sono <strong className="text-white">Riccardo Pellegrino</strong>,
            consulente di comunicazione digitale e sviluppatore web.
            Aiuto aziende, professionisti e attività locali a costruire una
            presenza online moderna, efficace e orientata ai risultati.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Ogni progetto viene seguito direttamente da me, dalla strategia
            iniziale fino alla pubblicazione, senza intermediari e con un
            rapporto costante con il cliente.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-4xl font-black text-red-500">
                  {item.value}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#contatti"
              className="inline-flex items-center rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Contattami
            </a>

            <a
              href="#"
              className="rounded-xl border border-white/15 px-6 py-4 font-semibold text-white transition hover:border-white"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}