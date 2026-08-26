import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contatti | Richiedi una Consulenza", description: "Contatta RP Digital per parlare del tuo progetto digitale o prenotare una consulenza.", alternates: { canonical: "/contatti" }, openGraph: { title: "Contatti | Richiedi una Consulenza", description: "Contatta RP Digital per parlare del tuo progetto digitale o prenotare una consulenza.", url: "https://rpdigital.it/contatti" } };
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function ContattiPage(){return <><Header/><main className="pt-20"><Contact/></main><Footer/></>}
