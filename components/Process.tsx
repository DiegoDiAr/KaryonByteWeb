"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardCheck, Lightbulb, Rocket, TestTube2 } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    icon: ClipboardCheck,
    title: "Analizamos tu negocio",
    description:
      "Entendemos tus procesos, objetivos, restricciones y oportunidades digitales."
  },
  {
    icon: Lightbulb,
    title: "Diseñamos la solución",
    description:
      "Definimos experiencia, arquitectura, flujos y alcance con una ruta clara."
  },
  {
    icon: TestTube2,
    title: "Desarrollamos y probamos",
    description:
      "Construimos con código limpio, iteramos contigo y validamos cada entrega."
  },
  {
    icon: Rocket,
    title: "Lanzamos y damos soporte",
    description:
      "Publicamos, monitoreamos y acompañamos la evolución del producto digital."
  }
];

export function Process() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const sectionWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header stagger
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        });
      }

      // Horizontal scroll on Desktop
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (cardsRef.current && sectionWrapperRef.current) {
          const totalWidth = cardsRef.current.scrollWidth;
          const viewportWidth = window.innerWidth;

          gsap.to(cardsRef.current, {
            x: () => -(totalWidth - viewportWidth + 150),
            ease: "none",
            scrollTrigger: {
              trigger: sectionWrapperRef.current,
              start: "center center",
              end: () => `+=${totalWidth}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          });
        }
      });

      // Standard vertical fade on mobile
      mm.add("(max-width: 1023px)", () => {
        if (cardsRef.current) {
          gsap.from(cardsRef.current.children, {
            opacity: 0,
            y: 40,
            stagger: 0.14,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 82%",
            },
          });
        }
      });
    }, sectionWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionReveal id="proceso" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={headerRef} className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Proceso</p>
          <h2 className="section-title">Una ruta clara desde la idea hasta el lanzamiento</h2>
          <p className="section-copy">
            Trabajamos con una metodología simple, transparente y enfocada en resultados
            visibles para tu negocio.
          </p>
        </div>

        <div className="relative mt-16 overflow-hidden">
          <div ref={cardsRef} className="flex flex-col gap-5 lg:flex-row lg:w-max">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="group relative w-full lg:w-[400px] rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:border-karyon-purple/55 hover:bg-white/[0.065]"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-karyon-purple text-lg font-semibold shadow-glow">
                    {index + 1}
                  </span>
                  <step.icon className="h-6 w-6 text-white/52 transition group-hover:scale-110 group-hover:text-karyon-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 leading-7 text-white/60">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
