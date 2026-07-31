"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Servizi", href: "#servizi" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Chi sono", href: "#chi-sono" },
    { name: "Contatti", href: "#contatti" },
  ];

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/75 backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <a href="#">
            <Image
              src="/images/logo.png"
              alt="RP Digital"
              width={170}
              height={55}
              priority
            />
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#contatti"
            className="hidden rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500 md:block"
          >
            Scrivimi
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white md:hidden"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </header>

      <div
        className={`fixed top-20 left-0 z-40 w-full bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 py-5 text-lg text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contatti"
            className="mt-6 rounded-xl bg-red-600 py-4 text-center font-semibold text-white"
          >
            Scrivimi
          </a>

        </nav>
      </div>
    </>
  );
}