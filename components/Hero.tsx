"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[180px]" />

        <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

        <div className="absolute bottom-20 left-20 h-56 w-56 rounded-full bg-white/5 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-6 pt-24">

        <motion.span
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="rounded-full border border-red-500/40 bg-red-600/10 px-5 py-2 text-sm text-red-400"
        >
          Digital Strategy • Web • Marketing • AI
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, duration: .7 }}
          className="mt-8 max-w-5xl text-6xl font-black leading-none tracking-tight text-white md:text-8xl"
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
          transition={{ delay: .45 }}
          className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400"
        >
          Realizzo siti web, strategie digitali,
          social media, applicazioni e automazioni AI
          progettate per aiutare aziende e professionisti
          ad ottenere risultati concreti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .6 }}
          className="mt-12 flex flex-wrap gap-5"
        >

          <a
            href="#contatti"
            className="flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-red-500"
          >
            Scrivimi
            <ArrowRight size={18}/>
          </a>

          <a
            href="#portfolio"
            className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-white"
          >
            Portfolio
          </a>

        </motion.div>

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1 }}
          className="mt-16 flex flex-wrap gap-8 text-sm text-zinc-400"
        >
          <span>✔ Oltre 8 anni di esperienza</span>
          <span>✔ Soluzioni su misura</span>
          <span>✔ Supporto diretto</span>
        </motion.div>

      </div>

      <motion.a
        href="#servizi"
        animate={{ y:[0,10,0] }}
        transition={{ repeat:Infinity, duration:1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <ChevronDown size={36}/>
      </motion.a>

    </section>
  );
}