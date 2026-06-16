"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CTA() {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Card scale-up reveal
      gsap.from(cardRef.current, {
        opacity: 0,
        scale: 0.92,
        y: 40,
        duration: 1.1,
        ease: "power3.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Card glow animation
      gsap.to(cardRef.current, {
        boxShadow: "0 0 100px rgba(115, 58, 237, 0.35)",
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Content stagger
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          opacity: 0,
          y: 30,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionReveal id="contacto" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.055] px-6 py-14 text-center backdrop-blur-2xl sm:px-10 lg:px-16 lg:py-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(115,58,237,0.36),transparent_48%)]" />
          <motion.div
            aria-hidden="true"
            animate={{ x: ["-45%", "45%", "-45%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-karyon-purple to-transparent"
          />
          <div ref={contentRef} className="relative mx-auto max-w-3xl">
            <div className="mx-auto mb-8 flex justify-center pointer-events-none">
              <Image
                src="/logo-karyonbyte.png"
                alt="KaryonByte"
                width={500}
                height={500}
                unoptimized
                className="w-[200px] h-auto object-contain scale-125"
              />
            </div>
            <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/72">
              <Sparkles className="h-4 w-4 text-karyon-purple" />
              Construyamos algo real
            </div>
            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Convierte tu idea en una solución digital real.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/66">
              Cuéntanos qué necesita tu negocio y diseñaremos una solución tecnológica
              a medida.
            </p>
            <div className="mt-9 flex justify-center">
              <a href="mailto:contacto@karyonbyte.com" className="premium-button group">
                Solicitar cotización
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
