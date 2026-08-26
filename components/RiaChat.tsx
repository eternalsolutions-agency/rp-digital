"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ChevronLeft, MessageCircle, RotateCcw, Send, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

type Step = "start" | "web" | "app" | "marketing" | "seo" | "other" | "final";

type Choice = { label: string; next?: Step; finalLabel?: string };

const copy = {
  it: {
    role: "Assistente digitale di RP Digital",
    hello: "Ciao, sono RIA 👋",
    intro: "Ti aiuto a capire quale soluzione RP Digital è più adatta alla tua attività. Da cosa vuoi partire?",
    back: "Indietro", reset: "Ricomincia", book: "Prenota una consulenza gratuita", whatsapp: "Scrivici su WhatsApp",
    calendarTitle: "Prenota un appuntamento", calendarSub: "Scegli giorno e orario direttamente dal calendario.",
    finalTitle: "Perfetto, ci siamo.", finalText: "Il modo migliore per capire esigenze e obiettivi è una breve consulenza senza impegno. Puoi prenotarla ora oppure scriverci su WhatsApp.",
    webQ: "Che tipo di progetto web hai in mente?", appQ: "Cosa vorresti ottenere con la tua app?", marketingQ: "Su cosa vuoi lavorare?", seoQ: "Qual è il tuo obiettivo principale?", otherQ: "Nessun problema. Parliamone direttamente e troviamo insieme la soluzione più adatta.",
    main: [["🌐 Sito web","web"],["📱 App","app"],["📣 Social & Advertising","marketing"],["🔎 SEO & Google","seo"],["✨ Altro progetto","other"]],
    web: ["Sito vetrina / aziendale","E-commerce","Landing page","Restyling sito esistente","Non so, vorrei un consiglio"],
    app: ["App per la mia attività","Vendere prodotti o servizi","Prenotazioni / appuntamenti","Fidelity e notifiche","Ho un'idea da valutare"],
    marketing: ["Gestione Social","Meta / Google Ads","Generazione contatti","Strategia digitale","Vorrei capire cosa mi serve"],
    seo: ["Essere più visibile su Google","SEO del mio sito","SEO locale","Analisi della situazione attuale"],
    wa: "Ciao RP Digital, ho utilizzato RIA sul sito e vorrei ricevere informazioni"
  },
  en: {
    role: "RP Digital assistant", hello: "Hi, I'm RIA 👋", intro: "I'll help you find the RP Digital solution that best fits your business. Where would you like to start?",
    back:"Back", reset:"Start again", book:"Book a free consultation", whatsapp:"Chat on WhatsApp", calendarTitle:"Book an appointment", calendarSub:"Choose a day and time directly from the calendar.",
    finalTitle:"Great, we're ready.", finalText:"The best way to understand your goals is a short, no-obligation consultation. Book it now or message us on WhatsApp.",
    webQ:"What kind of web project do you have in mind?", appQ:"What would you like your app to achieve?", marketingQ:"What would you like to work on?", seoQ:"What's your main goal?", otherQ:"No problem. Let's talk and find the right solution together.",
    main:[["🌐 Website","web"],["📱 App","app"],["📣 Social & Advertising","marketing"],["🔎 SEO & Google","seo"],["✨ Other project","other"]],
    web:["Company website","E-commerce","Landing page","Website redesign","I'd like advice"], app:["Business app","Sell products or services","Bookings / appointments","Loyalty & notifications","I have an idea to evaluate"], marketing:["Social management","Meta / Google Ads","Lead generation","Digital strategy","Help me understand what I need"], seo:["Improve Google visibility","Website SEO","Local SEO","Current situation analysis"], wa:"Hi RP Digital, I used RIA on your website and I'd like more information"
  },
  es: {
    role:"Asistente digital de RP Digital", hello:"Hola, soy RIA 👋", intro:"Te ayudo a encontrar la solución RP Digital más adecuada para tu negocio. ¿Por dónde quieres empezar?",
    back:"Atrás", reset:"Empezar de nuevo", book:"Reserva una consulta gratuita", whatsapp:"Escríbenos por WhatsApp", calendarTitle:"Reserva una cita", calendarSub:"Elige día y hora directamente en el calendario.",
    finalTitle:"Perfecto, ya estamos.", finalText:"La mejor forma de entender tus objetivos es una breve consulta sin compromiso. Puedes reservarla ahora o escribirnos por WhatsApp.",
    webQ:"¿Qué tipo de proyecto web tienes en mente?", appQ:"¿Qué quieres conseguir con tu app?", marketingQ:"¿En qué quieres trabajar?", seoQ:"¿Cuál es tu objetivo principal?", otherQ:"Sin problema. Hablemos y encontremos juntos la solución adecuada.",
    main:[["🌐 Sitio web","web"],["📱 App","app"],["📣 Social & Advertising","marketing"],["🔎 SEO & Google","seo"],["✨ Otro proyecto","other"]],
    web:["Sitio corporativo","E-commerce","Landing page","Rediseño del sitio","Quiero asesoramiento"], app:["App para mi negocio","Vender productos o servicios","Reservas / citas","Fidelización y notificaciones","Tengo una idea que evaluar"], marketing:["Gestión Social","Meta / Google Ads","Generación de contactos","Estrategia digital","Quiero saber qué necesito"], seo:["Más visibilidad en Google","SEO de mi sitio","SEO local","Análisis de situación actual"], wa:"Hola RP Digital, he utilizado RIA en la web y me gustaría recibir información"
  }
} as const;

export default function RiaChat() {
  const { language } = useLanguage();
  const t = copy[language];
  const [open, setOpen] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [step, setStep] = useState<Step>("start");
  const [path, setPath] = useState<string[]>([]);

  const question = step === "web" ? t.webQ : step === "app" ? t.appQ : step === "marketing" ? t.marketingQ : step === "seo" ? t.seoQ : step === "other" ? t.otherQ : "";
  const options: Choice[] = useMemo(() => {
    if (step === "start") return t.main.map(([label, next]) => ({ label, next: next as Step }));
    if (step === "web" || step === "app" || step === "marketing" || step === "seo") return t[step].map(label => ({ label, finalLabel: label }));
    return [];
  }, [step, t]);

  const choose = (choice: Choice) => {
    setPath(p => [...p, choice.label.replace(/^[^\p{L}\p{N}]+/u, "")]);
    if (choice.next) setStep(choice.next); else setStep("final");
  };
  const reset = () => { setStep("start"); setPath([]); };
  const waText = encodeURIComponent(`${t.wa}${path.length ? `. ${language === "it" ? "Mi interessa" : language === "es" ? "Me interesa" : "I'm interested in"}: ${path.join(" → ")}.` : "."}`);
  const waHref = `https://wa.me/393775994493?text=${waText}`;

  return <>
    <div className="fixed bottom-5 right-5 z-[90] sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open && <motion.div initial={{opacity:0,y:20,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:15,scale:.97}} transition={{duration:.22}} className="ria-window mb-3 w-[calc(100vw-2rem)] max-w-[390px] overflow-hidden rounded-[24px] border border-white/10 bg-[#090909]/95 shadow-2xl backdrop-blur-xl">
          <div className="relative overflow-hidden border-b border-white/10 px-5 py-4">
            <div className="absolute -right-10 -top-16 h-36 w-36 rounded-full bg-[#ef2029]/20 blur-3xl" />
            <div className="relative flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#ef2029]/60 shadow-[0_0_28px_rgba(239,32,41,.35)]"><Image src="/ria-avatar.png" alt="RIA, assistente digitale RP Digital" fill sizes="48px" className="object-cover" priority /></div>
              <div className="min-w-0 flex-1"><div className="flex items-center gap-2 font-bold">RIA <span className="h-2 w-2 rounded-full bg-emerald-400" /></div><div className="truncate text-xs text-white/50">{t.role}</div></div>
              <button onClick={()=>setOpen(false)} aria-label="Chiudi RIA" className="rounded-full p-2 text-white/55 transition hover:bg-white/10 hover:text-white"><X size={18}/></button>
            </div>
          </div>
          <div className="ria-body max-h-[min(570px,70vh)] overflow-y-auto p-5">
            {step === "start" && <><div className="ria-bubble"><strong>{t.hello}</strong><br/><span>{t.intro}</span></div><div className="mt-4 grid gap-2">{options.map((o,i)=><RiaOption key={i} onClick={()=>choose(o)}>{o.label}</RiaOption>)}</div></>}
            {step !== "start" && step !== "final" && <><div className="mb-3 flex items-center justify-between"><button onClick={reset} className="flex items-center gap-1 text-xs text-white/45 hover:text-white"><ChevronLeft size={14}/>{t.back}</button></div><div className="ria-bubble"><span>{question}</span></div>{step === "other" ? <FinalActions t={t} setCalendar={setCalendar} waHref={waHref}/> : <div className="mt-4 grid gap-2">{options.map((o,i)=><RiaOption key={i} onClick={()=>choose(o)}>{o.label}</RiaOption>)}</div>}</>}
            {step === "final" && <><div className="ria-bubble"><strong>{t.finalTitle}</strong><br/><span>{t.finalText}</span></div><FinalActions t={t} setCalendar={setCalendar} waHref={waHref}/><button onClick={reset} className="mx-auto mt-4 flex items-center gap-2 text-xs text-white/45 hover:text-white"><RotateCcw size={13}/>{t.reset}</button></>}
          </div>
          <div className="border-t border-white/5 px-5 py-2.5 text-center text-[10px] uppercase tracking-[.18em] text-white/25">RIA · RP Digital</div>
        </motion.div>}
      </AnimatePresence>
      {!open && <motion.div initial={{opacity:0,x:10,scale:.96}} animate={{opacity:1,x:0,scale:1}} transition={{delay:.35,duration:.3}} className="mb-2 ml-auto w-fit rounded-2xl rounded-br-md border border-white/10 bg-[#090909]/95 px-4 py-2.5 text-sm font-medium text-white shadow-[0_10px_35px_rgba(0,0,0,.35),0_0_24px_rgba(239,32,41,.12)] backdrop-blur-xl">{language === "it" ? "Ciao! Posso aiutarti?" : language === "es" ? "¡Hola! ¿Puedo ayudarte?" : "Hi! Can I help you?"}<span className="ml-1.5 text-[#ef2029]">●</span></motion.div>}
      <motion.button whileHover={{scale:1.05}} whileTap={{scale:.96}} onClick={()=>setOpen(v=>!v)} aria-label="Apri RIA" className="ria-launcher relative ml-auto flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full border-2 border-[#ef2029]/70 bg-[#090909] text-white shadow-[0_10px_45px_rgba(239,32,41,.4)]">
        <AnimatePresence mode="wait" initial={false}>{open ? <motion.span key="x" initial={{rotate:-45,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:45,opacity:0}} className="relative z-10 flex h-full w-full items-center justify-center bg-black/70 backdrop-blur-sm"><X size={27}/></motion.span> : <motion.span key="avatar" initial={{scale:.9,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:.9,opacity:0}} className="absolute inset-0"><Image src="/ria-avatar.png" alt="RIA" fill sizes="72px" className="object-cover" priority /></motion.span>}</AnimatePresence>
        {!open && <span className="ria-pulse"/>}
      </motion.button>
    </div>

    <AnimatePresence>{calendar && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6" onMouseDown={(e)=>{if(e.currentTarget===e.target)setCalendar(false)}}>
      <motion.div initial={{y:25,scale:.98}} animate={{y:0,scale:1}} exit={{y:20,scale:.98}} className="flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#090909] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4 sm:px-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ef2029]/15 text-[#ef2029]"><CalendarDays size={20}/></div><div className="flex-1"><div className="font-bold">{t.calendarTitle}</div><div className="text-xs text-white/45">{t.calendarSub}</div></div><button onClick={()=>setCalendar(false)} className="rounded-full p-2 text-white/55 hover:bg-white/10 hover:text-white"><X size={20}/></button></div>
        <iframe src="https://www.facileprenotare.cloud/book/appstream-riccardo" width="100%" height="800" frameBorder="0" style={{border:"none",flex:1,background:"white"}} title={t.calendarTitle}/>
      </motion.div>
    </motion.div>}</AnimatePresence>
  </>;
}

function RiaOption({children,onClick}:{children:React.ReactNode,onClick:()=>void}) { return <button onClick={onClick} className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[.035] px-4 py-3 text-left text-sm text-white/85 transition hover:border-[#ef2029]/45 hover:bg-[#ef2029]/10 hover:text-white"><span>{children}</span><Send size={14} className="text-white/25 transition group-hover:translate-x-0.5 group-hover:text-[#ef2029]"/></button> }
function FinalActions({t,setCalendar,waHref}:{t:any,setCalendar:(v:boolean)=>void,waHref:string}) { return <div className="mt-4 grid gap-2"><button onClick={()=>setCalendar(true)} className="flex items-center justify-center gap-2 rounded-xl bg-[#ef2029] px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#ff3039]"><CalendarDays size={17}/>{t.book}</button><a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[.04] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[.08]"><MessageCircle size={17}/>{t.whatsapp}</a></div> }
