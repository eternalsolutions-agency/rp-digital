import type { Metadata } from "next";
export const metadata: Metadata = { title: "Riccardo Pellegrino | Consulente Digitale", description: "Scopri RP Digital e Riccardo Pellegrino: consulenza digitale, sviluppo web e strategie online seguite direttamente, dalla progettazione alla pubblicazione.", alternates: { canonical: "/chi-sono" }, openGraph: { title: "Riccardo Pellegrino | Consulente Digitale", description: "Scopri RP Digital e Riccardo Pellegrino: consulenza digitale, sviluppo web e strategie online seguite direttamente, dalla progettazione alla pubblicazione.", url: "https://rpdigital.it/chi-sono" } };
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
export default function ChiSonoPage(){return <><Header/><main className="pt-20"><About/></main><Footer/></>}
