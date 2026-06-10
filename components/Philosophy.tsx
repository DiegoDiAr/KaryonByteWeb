"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const phrase = "Diseñamos soluciones digitales y desarrollamos software a medida para negocios que quieren crecer. Convertimos tus ideas en páginas web profesionales, sistemas empresariales y plataformas tecnológicas reales.";

export function Philosophy() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll(".word");
      
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.1, y: 10 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: container.current,
              start: "top 70%",
              end: "bottom 80%",
              scrub: 1,
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="filosofia" aria-label="Nuestra filosofía de trabajo" className="relative z-10 bg-[#020005] py-32 px-6 sm:py-48 lg:px-8 mt-[25vh]">
      {/* Top Fade Gradient for smooth transition from Hero */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#020005] -translate-y-full pointer-events-none" />
      
      <div className="mx-auto max-w-5xl relative z-10">
        <h2 className="mb-8 text-sm font-semibold tracking-widest text-karion-purple uppercase">
          Nuestra Filosofía
        </h2>
        <p ref={textRef} className="text-3xl font-medium leading-[1.3] tracking-tight text-white sm:text-5xl lg:text-6xl flex flex-wrap gap-x-3 gap-y-2">
          {phrase.split(" ").map((word, i) => (
            <span key={i} className="word inline-block">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
