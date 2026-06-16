"use client";

import { useEffect, useRef } from "react";
import {
  Bot,
  Building2,
  Code2,
  Cpu,
  Globe2,
  LifeBuoy,
  type LucideIcon
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionReveal } from "@/components/SectionReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Globe2,
    title: "Desarrollo de páginas web",
    description:
      "Landing pages, sitios corporativos y experiencias web rápidas, modernas y orientadas a conversión."
  },
  {
    icon: Code2,
    title: "Desarrollo de software",
    description:
      "Aplicaciones web personalizadas para resolver operaciones críticas y acelerar equipos."
  },
  {
    icon: Building2,
    title: "Sistemas empresariales",
    description:
      "Plataformas internas para ventas, inventario, clientes, reportes y administración."
  },
  {
    icon: Cpu,
    title: "Arquitectura de software",
    description:
      "Diseño técnico escalable, seguro y mantenible para productos digitales de largo plazo."
  },
  {
    icon: Bot,
    title: "Automatización de procesos",
    description:
      "Flujos digitales que reducen tareas manuales, errores repetitivos y tiempos operativos."
  },
  {
    icon: LifeBuoy,
    title: "Soporte y mantenimiento",
    description:
      "Mejoras continuas, monitoreo, ajustes técnicos y evolución ordenada de tus sistemas."
  }
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header text stagger
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        });
      }

      // Cards stagger and parallax
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);
        
        // Initial entrance animation
        gsap.from(cards, {
          opacity: 0,
          y: 100,
          scale: 0.9,
          stagger: 0.1,
          duration: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        });

        // Continuous parallax effect on scroll
        cards.forEach((card, i) => {
          gsap.to(card, {
            y: (i % 3 === 1) ? -40 : (i % 3 === 2) ? -20 : 0, // Middle cards move up more
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionReveal id="servicios" className="relative z-20 bg-abyss px-5 py-24 sm:px-6 lg:px-8">
      <div ref={sectionRef} className="mx-auto max-w-7xl">
        <div ref={headerRef} className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Servicios</p>
          <h2 className="section-title">Tecnología hecha para mover tu negocio</h2>
          <p className="section-copy">
            Construimos soluciones digitales completas: estrategia, diseño, desarrollo,
            arquitectura y soporte para que tu empresa opere mejor.
          </p>
        </div>

        <div ref={cardsRef} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.title}
              whileHover={{ y: -10, rotateX: 3, rotateY: -3, scale: 1.015 }}
              className="group relative min-h-[260px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 shadow-[0_18px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-colors hover:border-karyon-purple/60"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-karyon-purple/28 blur-3xl" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-karyon-purple to-transparent" />
              </div>
              <div className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-karyon-purple shadow-glow transition group-hover:scale-110 group-hover:bg-karyon-purple group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/62">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
