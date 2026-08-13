"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage, Language } from "./LanguageProvider";

const labels = {
  it: { about: "Chi sono", services: "Servizi", portfolio: "Portfolio", partner: "Partner", contact: "Contatti", write: "Scrivimi", menu: "Apri menu" },
  en: { about: "About", services: "Services", portfolio: "Portfolio", partner: "Partners", contact: "Contact", write: "Contact me", menu: "Open menu" },
  es: { about: "Sobre mí", services: "Servicios", portfolio: "Portfolio", partner: "Partners", contact: "Contacto", write: "Contáctame", menu: "Abrir menú" },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = labels[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: t.about, href: "/chi-sono" },
    { name: t.services, href: "/servizi" },
    { name: t.portfolio, href: "/portfolio" },
    { name: t.partner, href: "/partner" },
    { name: t.contact, href: "/contatti" },
  ];

  const LanguageSwitch = () => (
    <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
      {(["it", "en", "es"] as Language[]).map((lang) => (
        <button key={lang} onClick={() => setLanguage(lang)}
          className={`rounded-md px-2 py-1 text-[11px] font-bold uppercase transition ${language === lang ? "bg-red-600 text-white" : "text-zinc-400 hover:text-white"}`}>
          {lang}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-black/75 backdrop-blur-xl shadow-2xl" : "bg-black/35 backdrop-blur-sm"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" aria-label="RP Digital - Home">
            <Image src="/images/logo.png" alt="RP Digital" width={170} height={55} priority />
          </Link>
          <nav className="hidden items-center gap-5 md:flex">
            {links.map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium text-zinc-300 transition hover:text-white">{link.name}</Link>)}
            <LanguageSwitch />
          </nav>
          <Link href="/contatti" className="hidden rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500 lg:block">{t.write}</Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white md:hidden" aria-label={t.menu}>{mobileOpen ? <X size={30}/> : <Menu size={30}/>}</button>
        </div>
      </header>
      <div className={`fixed left-0 top-20 z-40 w-full bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        <nav className="flex flex-col p-6">
          <div className="mb-3"><LanguageSwitch /></div>
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="border-b border-white/10 py-5 text-lg text-white">{link.name}</Link>)}
          <Link href="/contatti" onClick={() => setMobileOpen(false)} className="mt-6 rounded-xl bg-red-600 py-4 text-center font-semibold text-white">{t.write}</Link>
        </nav>
      </div>
    </>
  );
}
