import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { TechStack } from "@/components/TechStack";
import { WhyUs } from "@/components/WhyUs";
import { FooterCTA } from "@/components/FooterCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-paper text-ink selection:bg-accent/20">
      <div aria-hidden="true" className="grain-overlay" />
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Process />
      <TechStack />
      <WhyUs />
      <FooterCTA />
      <WhatsAppButton />
    </main>
  );
}
