"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/data/portfolio";
import { Language } from "./LanguageProvider";

type Props = {
  project: PortfolioItem;
  language: Language;
};

export default function ProjectCard({ project, language }: Props) {
  const localized = language === "it" ? {subtitle: project.subtitle, description: project.description} : project.translations?.[language] || {subtitle: project.subtitle, description: project.description};
  const visit = language === "en" ? "Visit website" : language === "es" ? "Visitar sitio" : "Visita il sito";
  const publishing = language === "en" ? "Created by RP Digital · Publishing in progress" : language === "es" ? "Realizado por RP Digital · Publicación en curso" : "Realizzato da RP Digital · Pubblicazione in corso";
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="wow-card glass-panel group flex h-full flex-col overflow-hidden rounded-[32px] shadow-2xl"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain p-5 transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">

        <p className="mb-2 text-sm uppercase tracking-widest text-red-500">
          {localized.subtitle}
        </p>

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 leading-7 text-zinc-400">
          {localized.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.publishing ? (
          <div className="mt-8 inline-flex w-fit items-center rounded-full border border-red-500/30 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-300">
            {publishing}
          </div>
        ) : (
          <Link
            href={project.url}
            target="_blank"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            {visit}
            <ExternalLink size={18} />
          </Link>
        )}

      </div>
    </motion.article>
  );
}