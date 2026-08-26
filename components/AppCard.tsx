"use client";

import Image from "next/image";
import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/data/portfolio";
import { Language } from "./LanguageProvider";

type Props = {
  app: PortfolioItem;
  onOpen: (app: PortfolioItem) => void;
  language: Language;
};

export default function AppCard({ app, onOpen, language }: Props) {
  const localized = language === "it" ? {subtitle: app.subtitle, description: app.description} : app.translations?.[language] || {subtitle: app.subtitle, description: app.description};
  const tryApp = language === "en" ? "Try App" : language === "es" ? "Probar App" : "Prova App";
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="wow-card glass-panel group overflow-hidden rounded-[32px] shadow-2xl"
    >
      <div className="relative h-60 w-full bg-zinc-900">

        <Image
          src={app.image}
          alt={app.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

      <div className="p-7">

        <p className="mb-2 text-sm uppercase tracking-widest text-red-500">
          {localized.subtitle}
        </p>

        <h3 className="text-2xl font-bold text-white">
          {app.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {localized.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {app.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => onOpen(app)}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          <Smartphone size={18} />

          {tryApp}
        </button>

      </div>
    </motion.article>
  );
}