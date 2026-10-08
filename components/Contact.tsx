"use client";

import { FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Globe, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import PageAura from "./PageAura";

const copy = {
  it: {
    label: "Contatti",
    title: "Parliamo del tuo prossimo progetto.",
    intro: "Hai un'idea da sviluppare, vuoi migliorare la tua presenza online oppure desideri una consulenza? Contattami senza impegno.",
    phone: "Telefono",
    operation: "Operatività",
    remote: "Lavoro da remoto in tutta Italia",
    request: "Invia una richiesta",
    requestText: "Raccontami brevemente cosa vuoi realizzare. Ti ricontatterò al più presto.",
    name: "Nome e Cognome",
    email: "Email",
    telephone: "Telefono",
    company: "Azienda (facoltativo)",
    service: "Servizio di interesse",
    choose: "Seleziona un servizio",
    message: "Messaggio",
    privacy: "Acconsento al trattamento dei dati inviati esclusivamente per essere ricontattato in merito alla mia richiesta.",
    submit: "Invia richiesta",
    sending: "Invio in corso...",
    success: "Richiesta inviata! Ti ricontatterò al più presto.",
    error: "Non è stato possibile inviare la richiesta. Riprova tra poco oppure contattami su WhatsApp.",
    services: ["Sito Web", "E-commerce", "App", "Social Media", "SEO", "Google / Meta Ads", "Automazioni & AI", "Parlaci del tuo progetto", "Altro"],
  },
  en: {
    label: "Contact",
    title: "Let's talk about your next project.",
    intro: "Do you have an idea to develop, want to improve your online presence or need a consultation? Get in touch with no obligation.",
    phone: "Phone",
    operation: "Availability",
    remote: "I work remotely with clients in Italy and abroad",
    request: "Send a request",
    requestText: "Tell me briefly what you would like to create. I will get back to you as soon as possible.",
    name: "Full name",
    email: "Email",
    telephone: "Phone",
    company: "Company (optional)",
    service: "Service of interest",
    choose: "Select a service",
    message: "Message",
    privacy: "I consent to the processing of the submitted data solely to be contacted regarding my request.",
    submit: "Send request",
    sending: "Sending...",
    success: "Request sent! I will get back to you as soon as possible.",
    error: "The request could not be sent. Please try again shortly or contact me on WhatsApp.",
    services: ["Website", "E-commerce", "App", "Social Media", "SEO", "Google / Meta Ads", "Automation & AI", "Tell us about your project", "Other"],
  },
  es: {
    label: "Contacto",
    title: "Hablemos de tu próximo proyecto.",
    intro: "¿Tienes una idea que desarrollar, quieres mejorar tu presencia online o necesitas una consultoría? Contáctame sin compromiso.",
    phone: "Teléfono",
    operation: "Disponibilidad",
    remote: "Trabajo de forma remota con clientes en Italia y en el extranjero",
    request: "Envía una solicitud",
    requestText: "Cuéntame brevemente qué quieres realizar. Me pondré en contacto contigo lo antes posible.",
    name: "Nombre y apellidos",
    email: "Email",
    telephone: "Teléfono",
    company: "Empresa (opcional)",
    service: "Servicio de interés",
    choose: "Selecciona un servicio",
    message: "Mensaje",
    privacy: "Acepto el tratamiento de los datos enviados exclusivamente para ser contactado en relación con mi solicitud.",
    submit: "Enviar solicitud",
    sending: "Enviando...",
    success: "¡Solicitud enviada! Me pondré en contacto contigo lo antes posible.",
    error: "No se ha podido enviar la solicitud. Inténtalo de nuevo en unos minutos o contáctame por WhatsApp.",
    services: ["Sitio web", "E-commerce", "App", "Redes sociales", "SEO", "Google / Meta Ads", "Automatización e IA", "Cuéntanos tu proyecto", "Otro"],
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const t = copy[language];
  const formRef = useRef<HTMLDivElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus("idle");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          service: data.get("service"),
          message: data.get("message"),
          source: "Modulo contatti - rpdigital.it",
        }),
      });

      if (!response.ok) throw new Error("Send failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  const fieldClass = "w-full rounded-2xl border border-white/10 bg-white/[.04] px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/70 focus:bg-white/[.06]";

  return (
    <section id="contatti" className="relative overflow-hidden bg-black py-28">
      <PageAura word="CONTACT" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-red-500">{t.label}</span>
          <h1 className="mt-5 text-5xl font-black tracking-[-.04em] text-white md:text-7xl">{t.title}</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">{t.intro}</p>
        </motion.div>

        <div className="mt-20 grid items-stretch gap-8 md:grid-cols-2">
          <div className="wow-card equal-card glass-panel rounded-[32px] p-8 text-center transition hover:-translate-y-2">
            <Phone className="premium-icon mx-auto mb-6 rounded-xl p-2 text-red-500" size={34} />
            <h3 className="text-xl font-bold text-white">{t.phone}</h3>
            <p className="mt-4 text-zinc-400">377 599 4493</p>
          </div>
          <div className="wow-card equal-card glass-panel rounded-[32px] p-8 text-center transition hover:-translate-y-2">
            <Globe className="premium-icon mx-auto mb-6 rounded-xl p-2 text-red-500" size={34} />
            <h3 className="text-xl font-bold text-white">{t.operation}</h3>
            <p className="mt-4 text-zinc-400">{t.remote}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <a href="https://wa.me/393775994493" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
            <MessageCircle size={18} />WhatsApp
          </a>
          <button type="button" onClick={scrollToForm} className="flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(239,32,41,.2)] transition hover:scale-105">
            <Send size={18} />{t.request}
          </button>
        </div>

        <motion.div ref={formRef} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel mx-auto mt-16 max-w-4xl rounded-[32px] p-6 md:p-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black text-white md:text-4xl">{t.request}</h2>
            <p className="mt-3 text-zinc-400">{t.requestText}</p>
          </div>

          <form onSubmit={submitForm} className="grid gap-5 md:grid-cols-2">
            <input className={fieldClass} name="name" placeholder={t.name} required maxLength={120} />
            <input className={fieldClass} name="email" type="email" placeholder={t.email} required maxLength={180} />
            <input className={fieldClass} name="phone" type="tel" placeholder={t.telephone} required maxLength={80} />
            <input className={fieldClass} name="company" placeholder={t.company} maxLength={160} />
            <select className={`${fieldClass} md:col-span-2`} name="service" required defaultValue="">
              <option value="" disabled className="bg-zinc-950">{t.choose}</option>
              {t.services.map((service) => <option key={service} value={service} className="bg-zinc-950">{service}</option>)}
            </select>
            <textarea className={`${fieldClass} min-h-36 resize-y md:col-span-2`} name="message" placeholder={t.message} required maxLength={4000} />
            <label className="flex items-start gap-3 text-sm leading-6 text-zinc-400 md:col-span-2">
              <input type="checkbox" required className="mt-1 h-4 w-4 accent-red-600" />
              <span>{t.privacy}</span>
            </label>

            {status === "success" && <div className="flex items-center gap-2 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-300 md:col-span-2"><CheckCircle2 size={18} />{t.success}</div>}
            {status === "error" && <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300 md:col-span-2">{t.error}</div>}

            <button disabled={sending} type="submit" className="flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2">
              <Send size={18} />{sending ? t.sending : t.submit}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
