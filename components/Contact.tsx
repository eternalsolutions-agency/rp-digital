"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contatti"
      className="..."
  >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[4px] text-red-500">
            Contatti
          </span>

          <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
            Parliamo del tuo prossimo progetto.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Hai un'idea da sviluppare, vuoi migliorare la tua presenza online
            oppure desideri una consulenza? Contattami senza impegno.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <Phone className="mx-auto mb-6 text-red-500" size={34} />

            <h3 className="text-xl font-bold text-white">
              Telefono
            </h3>

            <p className="mt-4 text-zinc-400">
              377 599 4493
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <Mail className="mx-auto mb-6 text-red-500" size={34} />

            <h3 className="text-xl font-bold text-white">
              Email
            </h3>

            <p className="mt-4 text-zinc-400">
              info@rpdigital.it
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <Globe className="mx-auto mb-6 text-red-500" size={34} />

            <h3 className="text-xl font-bold text-white">
              Operatività
            </h3>

            <p className="mt-4 text-zinc-400">
              Lavoro da remoto in tutta Italia
            </p>
          </div>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-5">

          <a
            href="https://wa.me/393775994493"
            target="_blank"
            className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-500"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a
            href="mailto:info@rpdigital.it"
            className="flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-500"
          >
            <Send size={18} />
            Invia Email
          </a>

        </div>

      </div>
    </section>
  );
}