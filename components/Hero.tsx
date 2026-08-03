"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[180px]" />

        <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

        <div className="absolute bottom-20 left-20 h-56 w-56 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 pt-12 lg:grid-cols-2 lg:pt-20">
        {/* Colonna testo */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full border border-red-500/40 bg-red-600/10 px-5 py-2 text-sm text-red-400"
          >
            Digital Strategy • Web • Marketing • AI
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Il digitale
            <br />
            che fa crescere
            <br />
            il tuo business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl md:leading-9"
          >
            Realizzo siti web, strategie digitali, social media,
            applicazioni e automazioni AI progettate per aiutare aziende e
            professionisti a ottenere risultati concreti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <a
              href="#contatti"
              className="flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-red-500"
            >
              Scrivimi
              <ArrowRight size={18} />
            </a>

            <a
              href="#portfolio"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              Portfolio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400"
          >
            <span>✔ Oltre 8 anni di esperienza</span>
            <span>✔ Soluzioni su misura</span>
            <span>✔ Supporto diretto</span>
          </motion.div>
        </div>

        {/* Colonna video */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute h-[380px] w-[380px] rounded-full bg-red-600/20 blur-[120px] sm:h-[460px] sm:w-[460px]" />

          <div className="relative w-full max-w-[560px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-2 shadow-2xl shadow-red-950/30">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="aspect-square w-full rounded-[20px] object-cover"
            >
              <source src="/videos/video-logo.mp4" type="video/mp4" />
              Il tuo browser non supporta il video.
            </video>

            <div className="pointer-events-none absolute inset-2 rounded-[20px] bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#servizi"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-zinc-500"
        aria-label="Vai alla sezione servizi"
      >
        <ChevronDown size={36} />
      </motion.a>
    </section>
  );
}