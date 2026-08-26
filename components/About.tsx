"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import PageAura from "./PageAura";

const copy = {
 it:{label:"Chi sono",title:"Strategia, design e tecnologia.",p1:"Sono Riccardo Pellegrino, consulente di comunicazione digitale e sviluppatore web. Aiuto aziende, professionisti e attività locali a costruire una presenza online moderna, efficace e orientata ai risultati.",p2:"Ogni progetto viene seguito direttamente da me, dalla strategia iniziale fino alla pubblicazione, senza intermediari e con un rapporto costante con il cliente.",stats:["Anni di esperienza","Progetti realizzati","Clienti seguiti","Supporto diretto"],contact:"Contattami"},
 en:{label:"About me",title:"Strategy, design and technology.",p1:"I'm Riccardo Pellegrino, a digital communication consultant and web developer. I help companies, professionals and local businesses build a modern, effective and results-driven online presence.",p2:"I personally follow every project, from the initial strategy through publication, with no intermediaries and constant direct communication with the client.",stats:["Years of experience","Projects completed","Clients supported","Direct support"],contact:"Contact me"},
 es:{label:"Sobre mí",title:"Estrategia, diseño y tecnología.",p1:"Soy Riccardo Pellegrino, consultor de comunicación digital y desarrollador web. Ayudo a empresas, profesionales y negocios locales a construir una presencia online moderna, eficaz y orientada a resultados.",p2:"Sigo personalmente cada proyecto, desde la estrategia inicial hasta la publicación, sin intermediarios y con una comunicación constante con el cliente.",stats:["Años de experiencia","Proyectos realizados","Clientes atendidos","Soporte directo"],contact:"Contáctame"}
};
export default function About(){
 const {language}=useLanguage(); const t=copy[language]; const values=["8+","100+","30+","100%"];
 return <section id="chi-sono" className="relative overflow-hidden bg-black py-28"><PageAura word="ABOUT"/><div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
 <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="relative mx-auto w-full max-w-md lg:rotate-[-2deg]"><div className="absolute inset-0 rounded-[40px] bg-red-600/20 blur-3xl"/><div className="glass-panel wow-card relative overflow-hidden rounded-[40px] border-white/15"><Image src="/images/riccardo.jpg" alt="Riccardo Pellegrino" width={700} height={900} className="object-cover transition duration-700 hover:scale-105"/></div></motion.div>
 <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}><span className="text-sm font-semibold uppercase tracking-[4px] text-red-500">{t.label}</span><h2 className="mt-5 text-5xl font-black tracking-[-.04em] text-white md:text-7xl">{t.title}</h2><p className="mt-8 text-lg leading-8 text-zinc-400">{t.p1}</p><p className="mt-6 text-lg leading-8 text-zinc-400">{t.p2}</p>
 <div className="mt-12 grid grid-cols-2 gap-6">{values.map((v,i)=><div key={i} className="wow-card glass-panel equal-card rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-red-500/30"><h3 className="text-4xl font-black text-red-500">{v}</h3><p className="mt-2 text-zinc-400">{t.stats[i]}</p></div>)}</div>
 <div className="mt-12"><a href="/contatti" className="inline-flex items-center rounded-full bg-red-600 px-7 py-4 font-semibold text-white shadow-[0_0_35px_rgba(239,32,41,.2)] transition hover:scale-[1.03] hover:bg-red-500">{t.contact}</a></div>
 </motion.div></div></section>
}
