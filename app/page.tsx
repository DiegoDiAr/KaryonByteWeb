import { Hero } from "@/components/Hero";
import { Projects as Solutions } from "@/components/Projects";
import { OwnProduct } from "@/components/OwnProduct";
import { TechStack } from "@/components/TechStack";
import { WorkFlow } from "@/components/WorkFlow";
import { Philosophy } from "@/components/Philosophy";
import { FooterCTA } from "@/components/FooterCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deep-space text-white selection:bg-karyon-purple selection:text-white">
      <CustomCursor />
      <Hero />
      <Solutions />
      <OwnProduct />
      <TechStack />
      <WorkFlow />
      <Philosophy />
      <FooterCTA />
      <WhatsAppButton />
    </main>
  );
}
