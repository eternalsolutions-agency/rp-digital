import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PartnerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black px-6 pb-28 pt-36 text-white">
        <section className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">Collaborazioni</span>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Partner</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Collaborazioni strategiche con aziende, professionisti e realtà complementari per creare progetti digitali più completi e generare nuove opportunità.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Aziende", "Collaborazioni su progetti digitali, comunicazione, sviluppo e crescita online."],
              ["Professionisti", "Partnership con competenze complementari per offrire soluzioni più complete ai clienti."],
              ["Agenzie", "Collaborazioni operative e white-label per ampliare servizi e capacità produttiva."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-4 leading-7 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/contatti" className="inline-flex rounded-xl bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-500">
              Proponi una collaborazione
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
