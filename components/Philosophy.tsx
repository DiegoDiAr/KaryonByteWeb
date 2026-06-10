"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const phrase = "Diseñamos soluciones digitales y desarrollamos software a medida para negocios que quieren crecer. Convertimos tus ideas en páginas web profesionales, sistemas empresariales y plataformas tecnológicas reales.";

export function Philosophy() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();

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
    <section
      ref={container}
      id="filosofia"
      aria-label="Nuestra filosofía de trabajo"
      className="relative z-10 mt-0 bg-[#020005] px-5 py-12 sm:px-6 sm:py-16 lg:mt-[18vh] lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-32 w-full -translate-y-full bg-gradient-to-b from-transparent to-[#020005] sm:h-48" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.2 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 h-px w-full origin-left bg-gradient-to-r from-karion-purple/70 via-electric-blue/30 to-transparent sm:mb-6"
        />
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-karion-purple sm:mb-5 sm:text-sm"
        >
          Nuestra Filosofía
        </motion.h2>
        <motion.p
          ref={textRef}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-x-2 gap-y-2 text-[clamp(1.75rem,8vw,3rem)] font-medium leading-[1.25] tracking-normal text-white sm:gap-x-3 sm:text-5xl lg:text-6xl"
        >
          {phrase.split(" ").map((word, i) => (
            <span key={i} className="word inline-block">
              {word}
            </span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
