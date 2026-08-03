"use client";



import {
  Phone,
  Mail,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* RP Digital */}

          <div>
            <h3 className="text-2xl font-black text-white">
              RP Digital
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              Web Design, Digital Marketing, AI Solutions,
              sviluppo App e strategie digitali per aziende
              e professionisti.
            </p>
          </div>

          {/* Contatti */}

          <div>
            <h4 className="mb-5 text-lg font-bold text-white">
              Contatti
            </h4>

            <div className="space-y-4 text-zinc-400">

              <p className="flex items-center gap-3">
                <Phone size={18} className="text-red-500" />
                377 599 4493
              </p>

              <p className="flex items-center gap-3">
                <Mail size={18} className="text-red-500" />
                info@rpdigital.it
              </p>

              <p className="flex items-center gap-3">
                <Globe size={18} className="text-red-500" />
                www.rpdigital.it
              </p>

            </div>
          </div>

          {/* Social */}

          {/* Social */}

<div>
  <h4 className="mb-5 text-lg font-bold text-white">
    Seguimi
  </h4>

  <div className="space-y-4">

    <a
      href="https://www.linkedin.com/in/riccardopellegrino/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-red-500"
    >
      LinkedIn
    </a>

    <a
      href="https://www.instagram.com/riccardopellegrino82/"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-zinc-400 hover:text-red-500"
    >
      Instagram
    </a>

    <a
      href="https://www.facebook.com/riccardopellegrino.digital"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-zinc-400 hover:text-red-500"
    >
      Facebook
    </a>

  </div>
</div>
          {/* Informazioni */}

          <div>
            <h4 className="mb-5 text-lg font-bold text-white">
              Informazioni
            </h4>

            <div className="space-y-4 text-zinc-400">

              <p>P. IVA 01242270575</p>

              <a
                href="#"
                className="block transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block transition hover:text-white"
              >
                Cookie Policy
              </a>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">

          © 2026 RP Digital · P. IVA 01242270575 · Tutti i diritti riservati.

          <br />

          Sito realizzato da <span className="text-white font-semibold">RP Digital</span>

        </div>

      </div>
    </footer>
  );
}
