"use client";

import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioItem } from "@/data/portfolio";

type Props = {
  app: PortfolioItem | null;
  onClose: () => void;
};

export default function PhonePreviewModal({
  app,
  onClose,
}: Props) {
  return (
    <AnimatePresence>

      {app && (

        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <button
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <motion.div
            initial={{ scale: .8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .8, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
            }}
          >

            <div className="rounded-[50px] border-[10px] border-zinc-900 bg-black p-3 shadow-2xl">

              <div className="mx-auto mb-3 h-7 w-36 rounded-full bg-zinc-800" />

              <iframe
                src={app.url}
                title={app.title}
                className="h-[700px] w-[360px] rounded-[32px] border-0 bg-white"
              />

            </div>

            <div className="mt-8 text-center">

              <h3 className="text-3xl font-bold text-white">
                {app.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {app.description}
              </p>

              <a
                href={app.url}
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
              >
                Apri nel browser

                <ExternalLink size={18} />
              </a>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}