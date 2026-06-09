"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { num: "01", title: "Descubrimiento", desc: "Auditoría técnica y análisis de requerimientos B2B." },
  { num: "02", title: "Arquitectura", desc: "Diseño de la infraestructura en la nube y modelos de datos." },
  { num: "03", title: "Desarrollo", desc: "Ingeniería de software con sprints ágiles y código limpio." },
  { num: "04", title: "Despliegue", desc: "Integración continua, pruebas de estrés y lanzamiento." },
];

export function WorkFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      
      mm.add("(min-width: 1024px)", () => {
        if (!trackRef.current || !sectionRef.current) return;
        
        const totalWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;

        gsap.to(trackRef.current, {
          x: () => -(totalWidth - viewportWidth + 100),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });
      });

      mm.add("(max-width: 1023px)", () => {
        if (trackRef.current) {
          gsap.from(trackRef.current.children, {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            scrollTrigger: {
              trigger: trackRef.current,
              start: "top 80%",
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 bg-[#020005] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 lg:mb-24">
        <h2 className="text-3xl font-semibold text-white sm:text-5xl">Nuestro Pipeline</h2>
      </div>

      <div ref={trackRef} className="flex flex-col gap-6 px-6 lg:flex-row lg:w-max lg:px-8">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="group relative flex w-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 lg:h-[450px] lg:w-[450px]"
          >
            <span className="text-6xl font-bold text-white/5 transition-colors group-hover:text-karion-purple/20">
              {step.num}
            </span>
            <div>
              <h3 className="mb-4 text-3xl font-medium text-white">{step.title}</h3>
              <p className="text-lg text-white/50">{step.desc}</p>
            </div>
            {/* Connecting line on desktop */}
            {i !== steps.length - 1 && (
              <div className="absolute top-1/2 -right-6 hidden w-6 h-px bg-white/10 lg:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
