import type { Metadata } from "next";
export const metadata: Metadata = { title: "Portfolio | Siti Web e Progetti Digitali", description: "Scopri siti web, e-commerce e applicazioni realizzati da RP Digital, con attenzione a design, prestazioni ed esperienza utente.", alternates: { canonical: "/portfolio" }, openGraph: { title: "Portfolio | Siti Web e Progetti Digitali", description: "Scopri siti web, e-commerce e applicazioni realizzati da RP Digital, con attenzione a design, prestazioni ed esperienza utente.", url: "https://rpdigital.it/portfolio" } };
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
export default function PortfolioPage(){return <><Header/><main className="pt-20"><Portfolio/></main><Footer/></>}
