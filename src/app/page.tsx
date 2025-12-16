import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collaborations from "@/components/Collaborations";
import ProofOfWork from "@/components/ProofOfWork";
import Achievements, { Footer } from "@/components/Achievements";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-brand-blue selection:text-white">
      <Header />
      <Hero />
      <Collaborations />
      <ProofOfWork />
      <Achievements />
      <Footer />
    </main>
  );
}
