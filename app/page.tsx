import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Process />
      </main>
      <Footer />
    </>
  );
}
