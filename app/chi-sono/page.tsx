import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import AuthorBook from "@/components/AuthorBook";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Riccardo Pellegrino | Consulente Digitale e Autore",
  description: "Scopri Riccardo Pellegrino, consulente digitale, sviluppatore web e autore di COESISTERE — Usare l’AI non significa saper usare l’AI.",
  alternates: { canonical: "/chi-sono" },
  openGraph: {
    title: "Riccardo Pellegrino | Consulente Digitale e Autore",
    description: "Consulenza digitale, sviluppo web e COESISTERE, il libro di Riccardo Pellegrino sull’impatto reale dell’intelligenza artificiale su lavoro, competenze e aziende.",
    url: "https://rpdigital.it/chi-sono",
    images: [{ url: "/images/coesistere.jpg", alt: "COESISTERE di Riccardo Pellegrino" }],
  },
};

const bookStructuredData = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "COESISTERE — Usare l’AI non significa saper usare l’AI.",
  image: "https://rpdigital.it/images/coesistere.jpg",
  isbn: "9798166086389",
  url: "https://www.amazon.it/dp/B0HQ2PX2FJ",
  inLanguage: "it",
  author: {
    "@type": "Person",
    name: "Riccardo Pellegrino",
    url: "https://rpdigital.it/chi-sono",
  },
};

export default function ChiSonoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
        <AuthorBook />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookStructuredData) }}
        />
      </main>
      <Footer />
    </>
  );
}
