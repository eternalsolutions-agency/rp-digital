import type { Metadata } from "next";
export const metadata: Metadata = { title: "Servizi Digitali | Siti Web, App, SEO e Marketing", description: "Siti web, e-commerce, app, SEO, social media e advertising per aziende e professionisti che vogliono crescere online.", alternates: { canonical: "/servizi" }, openGraph: { title: "Servizi Digitali | Siti Web, App, SEO e Marketing", description: "Siti web, e-commerce, app, SEO, social media e advertising per aziende e professionisti che vogliono crescere online.", url: "https://rpdigital.it/servizi" } };
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
export default function ServiziPage(){return <><Header/><main className="pt-20"><Services/></main><Footer/></>}
