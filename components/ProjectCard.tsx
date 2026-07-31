"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/data/portfolio";

type Props = {
  project: PortfolioItem;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#101010] shadow-xl"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-7">

        <p className="mb-2 text-sm uppercase tracking-widest text-red-500">
          {project.subtitle}
        </p>

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
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

        <Link
          href={project.url}
          target="_blank"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          Visita il sito

          <ExternalLink size={18} />
        </Link>

      </div>
    </motion.article>
  );
}