import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatGPTAdsContent from "@/components/ChatGPTAdsContent";
export const metadata: Metadata = {
 title: "ChatGPT Ads | Pubblicità su ChatGPT per aziende",
 description: "Scopri la gestione ChatGPT Ads di RP Digital: campagne pubblicitarie, consulenza e offerta lancio fino al 31 dicembre 2026.",
 alternates: { canonical: "/chatgpt-ads" },
 openGraph: { title: "ChatGPT Ads | RP Digital", description: "Porta il tuo brand nelle conversazioni che contano.", url: "https://rpdigital.it/chatgpt-ads" }
};
export default function ChatGPTAdsPage(){return <><Header/><ChatGPTAdsContent/><Footer/></>;}
