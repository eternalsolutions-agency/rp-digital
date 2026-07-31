"use client";

import Image from "next/image";
import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/data/portfolio";

type Props = {
  app: PortfolioItem;
  onOpen: (app: PortfolioItem) => void;
};

export default function AppCard({ app, onOpen }: Props) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#101010] shadow-xl"
    >
      <div className="relative h-60 w-full bg-zinc-900">

        <Image
          src={app.image}
          alt={app.title}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-7">

        <p className="mb-2 text-sm uppercase tracking-widest text-red-500">
          {app.subtitle}
        </p>

        <h3 className="text-2xl font-bold text-white">
          {app.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {app.description}
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
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          <Smartphone size={18} />

          Prova App
        </button>

      </div>
    </motion.article>
  );
}