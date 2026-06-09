import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Expertise } from "@/components/Expertise";
import { WorkFlow } from "@/components/WorkFlow";
import { FooterCTA } from "@/components/FooterCTA";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deep-space text-white selection:bg-karion-purple selection:text-white">
      <CustomCursor />
      <Hero />
      <Philosophy />
      <Expertise />
      <WorkFlow />
      <FooterCTA />
    </main>
  );
}
