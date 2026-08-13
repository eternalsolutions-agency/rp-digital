import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PartnerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black px-6 pb-28 pt-36 text-white">
        <section className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            Collaborazioni
          </span>

          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Partner
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            Collaborazioni professionali e progetti che condividono una visione concreta:
            usare il digitale per creare valore, opportunità e impatto positivo.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            <article className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Partner tecnologico
              </p>
              <h2 className="mt-4 text-3xl font-black">AppStream</h2>
              <p className="mt-5 flex-1 leading-7 text-zinc-400">
                Realtà specializzata nello sviluppo di applicazioni mobile per aziende e
                professionisti. Le soluzioni sono pensate per diversi settori, tra cui
                ristorazione, eventi, salute e benessere, shopping, servizi e strutture
                ricettive, con funzionalità dedicate a ordini, prenotazioni, appuntamenti
                ed e-commerce.
              </p>
              <Link
                href="https://www.appstream.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
              >
                Visita AppStream
              </Link>
            </article>

            <article className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Progetto sostenuto
              </p>
              <h2 className="mt-4 text-3xl font-black">Progetto Libri Liberi</h2>
              <p className="mt-5 leading-7 text-zinc-400">
                Un progetto nato a Pisa per rimettere in circolo libri, giochi educativi
                e occasioni di socialità attraverso casette in legno collocate nei luoghi
                della comunità. L'obiettivo è rendere cultura e condivisione accessibili
                gratuitamente ad adulti e bambini.
              </p>
              <p className="mt-4 flex-1 leading-7 text-zinc-300">
                RP Digital sostiene concretamente il progetto: una parte del ricavato di
                ogni nuovo servizio realizzato viene destinata a Progetto Libri Liberi,
                contribuendo alla crescita dell'iniziativa e alla realizzazione di nuove attività.
              </p>
              <Link
                href="https://www.progettolibriliberi.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
              >
                Scopri Progetto Libri Liberi
              </Link>
            </article>

          </div>

          <div className="mt-16 rounded-3xl border border-red-500/20 bg-red-500/[0.06] p-8 md:p-10">
            <h2 className="text-2xl font-bold">Vuoi collaborare con RP Digital?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
              Valuto collaborazioni con aziende, professionisti e realtà complementari
              per sviluppare nuovi progetti e creare opportunità condivise.
            </p>
            <Link
              href="/contatti"
              className="mt-7 inline-flex rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-red-500 hover:text-red-400"
            >
              Parliamone
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
