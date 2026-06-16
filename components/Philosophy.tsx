"use client";

import { CheckCircle2 } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

const trustPoints = [
  "Atención directa",
  "Desarrollo a medida",
  "Comunicación clara",
  "Entregas por etapas",
  "Soporte posterior",
  "Código limpio y escalable"
];

export function Philosophy() {
  return (
    <SectionReveal
      id="filosofia"
      className="relative z-10 mt-0 bg-[#020005] px-5 py-12 sm:px-6 sm:py-16 lg:mt-[10vh] lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-32 w-full -translate-y-full bg-gradient-to-b from-transparent to-[#020005] sm:h-48" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-5 h-px w-full bg-gradient-to-r from-karyon-purple/70 via-electric-blue/30 to-transparent sm:mb-6" />
        
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-karyon-purple sm:mb-5 sm:text-sm">
          Nuestra Filosofía
        </h2>
        
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
          <p className="flex-1 text-[clamp(1.5rem,5vw,2.5rem)] font-medium leading-[1.3] tracking-normal text-white sm:text-4xl">
            Construimos tecnología de forma transparente, sin intermediarios que compliquen el proceso.
          </p>
          
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-karyon-purple" />
                  <span className="text-sm font-medium text-white/90">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
