"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const copy = {
  it: { title1:"Trasformo idee", title2:"in risultati.", text:"Realizzo siti web, app, strategie social e digital marketing per trasformare la tua presenza online in un reale vantaggio competitivo.", write:"Parliamo del tuo progetto", exp:"Oltre 8 anni di esperienza", custom:"Soluzioni su misura", support:"Supporto diretto", video:"Il tuo browser non supporta il video.", aria:"Vai alla sezione servizi", explore:"Scopri i progetti" },
  en: { title1:"I turn ideas", title2:"into results.", text:"I create websites, apps, social strategies and digital marketing solutions to turn your online presence into a real competitive advantage.", write:"Let's talk about your project", exp:"Over 8 years of experience", custom:"Tailor-made solutions", support:"Direct support", video:"Your browser does not support video.", aria:"Go to services", explore:"Explore projects" },
  es: { title1:"Transformo ideas", title2:"en resultados.", text:"Creo sitios web, apps, estrategias sociales y marketing digital para transformar tu presencia online en una verdadera ventaja competitiva.", write:"Hablemos de tu proyecto", exp:"Más de 8 años de experiencia", custom:"Soluciones a medida", support:"Soporte directo", video:"Tu navegador no admite vídeo.", aria:"Ir a servicios", explore:"Ver proyectos" }
};

const words = ["WEB DESIGN", "APP", "SOCIAL MEDIA", "AI", "SEO", "ADVERTISING", "STRATEGY"];

export default function Hero() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-0 py-28">
        <motion.div aria-hidden="true" className="absolute -left-40 top-28 h-[520px] w-[520px] rounded-full bg-red-600/15 blur-[130px]" animate={{x:[0,90,0],y:[0,40,0],scale:[1,1.12,1]}} transition={{duration:14,repeat:Infinity,ease:"easeInOut"}} />
        <motion.div aria-hidden="true" className="absolute -right-28 bottom-0 h-[430px] w-[430px] rounded-full bg-red-500/10 blur-[140px]" animate={{x:[0,-60,0],y:[0,-40,0]}} transition={{duration:12,repeat:Infinity,ease:"easeInOut"}} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_73%)] opacity-80" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1450px] items-center gap-14 px-6 pt-8 lg:grid-cols-[1.18fr_.82fr] lg:px-10">
          <div>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-red-500" />
              <span className="eyebrow text-xs font-bold uppercase text-red-400">RP DIGITAL / DIGITAL STUDIO</span>
            </motion.div>

            <motion.h1 initial={{opacity:0,y:42}} animate={{opacity:1,y:0}} transition={{delay:.12,duration:.85,ease:[.2,.8,.2,1]}} className="max-w-5xl text-[clamp(4rem,9.6vw,9.4rem)] font-black leading-[.82] tracking-[-.075em] text-white">
              <span className="block">{t.title1}</span>
              <span className="text-gradient block">{t.title2}</span>
            </motion.h1>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.65,duration:.7}} className="mt-10 grid max-w-4xl gap-7 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl md:leading-9">{t.text}</p>
              <a href="/portfolio" className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[.18em] text-white">
                {t.explore}<ArrowUpRight size={19} className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.8,duration:.6}} className="mt-10 flex flex-wrap items-center gap-5">
              <a href="/contatti" className="group relative overflow-hidden rounded-full bg-red-600 px-7 py-4 font-semibold text-white shadow-[0_0_40px_rgba(239,32,41,.22)] transition hover:scale-[1.03] hover:bg-red-500">
                <span className="relative z-10 flex items-center gap-2">{t.write}<ArrowUpRight size={18}/></span>
              </a>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[.14em] text-zinc-500">
                <span>{t.exp}</span><span>{t.custom}</span><span>{t.support}</span>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{opacity:0,x:65,rotate:2}} animate={{opacity:1,x:0,rotate:0}} transition={{delay:.35,duration:1,ease:[.2,.8,.2,1]}} className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:justify-self-end">
            <motion.div className="absolute -inset-9 rounded-[52px] border border-red-500/10" animate={{rotate:[0,3,0],scale:[1,1.025,1]}} transition={{duration:8,repeat:Infinity,ease:"easeInOut"}} />
            <div className="absolute -inset-12 rounded-full bg-red-600/18 blur-[100px]" />
            <div className="glass-panel relative overflow-hidden rounded-[36px] p-2">
              <video autoPlay loop muted playsInline preload="metadata" className="aspect-[4/5] w-full rounded-[29px] object-cover sm:aspect-square">
                <source src="/videos/video-logo.mp4" type="video/mp4" />{t.video}
              </video>
              <div className="pointer-events-none absolute inset-2 rounded-[29px] bg-gradient-to-tr from-black/35 via-transparent to-white/10" />
              <div className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-[10px] font-bold uppercase tracking-[.23em] text-zinc-200 backdrop-blur-xl">Strategy × Design × Tech</div>
            </div>
          </motion.div>
        </div>

        <motion.a href="/servizi" animate={{y:[0,8,0]}} transition={{repeat:Infinity,duration:1.8}} className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-zinc-600" aria-label={t.aria}><ChevronDown size={34}/></motion.a>
      </section>

      <div className="marquee-wrap relative z-10 bg-[#070707] py-5 text-white/55">
        <div className="marquee-track text-sm font-semibold uppercase tracking-[.32em]">
          {[...words,...words].map((word,i)=><span key={`${word}-${i}`} className="mx-8">{word} <b className="ml-8 text-red-500">✦</b></span>)}
        </div>
      </div>
    </>
  );
}
