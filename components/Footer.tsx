"use client";

import { Phone, Globe } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M6.5 8.5H3.3V21h3.2V8.5ZM4.9 3a1.86 1.86 0 1 0 0 3.72A1.86 1.86 0 0 0 4.9 3ZM21 13.85c0-3.77-2.01-5.52-4.69-5.52a4.04 4.04 0 0 0-3.65 2.01V8.5H9.47V21h3.19v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.01 1.86 2.01 3.31V21H21v-7.15Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.7" r="1" className="fill-current stroke-none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M13.8 21v-8h2.8l.42-3.12H13.8v-2c0-.9.25-1.52 1.6-1.52h1.7V3.57c-.29-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.5-4.13 4.24v2.2H7.73V13h2.77v8h3.3Z" />
    </svg>
  );
}

const copy={it:{desc:"Web Design, Digital Marketing, AI Solutions, sviluppo App e strategie digitali per aziende e professionisti.",contacts:"Contatti",follow:"Seguimi",info:"Informazioni",rights:"Tutti i diritti riservati.",made:"Sito realizzato da"},en:{desc:"Web Design, Digital Marketing, AI Solutions, App development and digital strategies for companies and professionals.",contacts:"Contact",follow:"Follow me",info:"Information",rights:"All rights reserved.",made:"Website created by"},es:{desc:"Diseño Web, Marketing Digital, Soluciones de IA, desarrollo de Apps y estrategias digitales para empresas y profesionales.",contacts:"Contacto",follow:"Sígueme",info:"Información",rights:"Todos los derechos reservados.",made:"Sitio realizado por"}};
export default function Footer() {
  const {language}=useLanguage(); const t=copy[language];
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-black text-white">RP Digital</h3>
            <p className="mt-5 leading-8 text-zinc-400">
              {t.desc}
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold text-white">{t.contacts}</h4>
            <div className="space-y-4 text-zinc-400">
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-red-500" />
                377 599 4493
              </p>
              <p className="flex items-center gap-3">
                <Globe size={18} className="text-red-500" />
                www.rpdigital.it
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold text-white">{t.follow}</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/riccardopellegrino/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:scale-105 hover:border-red-500/60 hover:bg-red-600 hover:text-white"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/riccardopellegrino82/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:scale-105 hover:border-red-500/60 hover:bg-red-600 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/riccardopellegrino.digital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:scale-105 hover:border-red-500/60 hover:bg-red-600 hover:text-white"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold text-white">{t.info}</h4>
            <div className="space-y-4 text-zinc-400">
              <p>P. IVA 01242270575</p>
              <a href="#" className="block transition hover:text-white">Privacy Policy</a>
              <a href="#" className="block transition hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          © 2026 RP Digital · P. IVA 01242270575 · {t.rights}
          <br />
          {t.made} <span className="font-semibold text-white">RP Digital</span>
        </div>
      </div>
    </footer>
  );
}
