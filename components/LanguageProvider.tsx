"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "it" | "en" | "es";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "it",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("it");

  useEffect(() => {
    const saved = localStorage.getItem("rp-language") as Language | null;
    if (saved === "it" || saved === "en" || saved === "es") setLanguageState(saved);
  }, []);

  const setLanguage = (value: Language) => {
    setLanguageState(value);
    localStorage.setItem("rp-language", value);
    document.documentElement.lang = value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
