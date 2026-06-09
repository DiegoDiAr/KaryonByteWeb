"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionReveal } from "@/components/SectionReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  "Soluciones a medida",
  "Diseño moderno y responsive",
  "Tecnología escalable",
  "Código limpio y mantenible",
  "Enfoque estratégico",
  "Acompañamiento durante todo el proceso"
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Pin the entire section for a presentation feel
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 15%",
        end: "+=100%", 
        pin: true,
        pinSpacing: true,
      });

      // Left column fade and slide
      if (leftRef.current) {
        gsap.from(leftRef.current, {
          opacity: 0,
          x: -60,
          filter: "blur(10px)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        });
      }

      // Benefits stagger reveal while scrolling
      if (benefitsRef.current) {
        gsap.from(benefitsRef.current.children, {
          opacity: 0,
          x: -24,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 40%",
            end: "top 10%",
            scrub: 1,
          },
        });
      }

      // Right panel dramatic slide up
      if (rightRef.current) {
        gsap.from(rightRef.current, {
          opacity: 0,
          scale: 0.85,
          y: 200,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "+=60%", 
            scrub: 1,
          },
        });
      }

      // Impact map items stagger on scrub
      const impactNodes = sectionRef.current?.querySelectorAll(".impact-node");
      if (impactNodes && impactNodes.length > 0) {
        gsap.from(impactNodes, {
          opacity: 0,
          y: 30,
          scale: 0.9,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            end: "+=80%",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionReveal className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
      <div ref={sectionRef} className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div ref={leftRef}>
          <p className="section-kicker">Por qué elegir KarionByte</p>
          <h2 className="section-title text-left">
            No solo escribimos código. Diseñamos ventajas digitales.
          </h2>
          <p className="section-copy mx-0 text-left">
            Miramos tu operación con criterio de negocio y construimos tecnología
            que se siente bien, escala con orden y resuelve problemas reales.
          </p>

          <div ref={benefitsRef} className="mt-9 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 text-white/78"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-karion-purple" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={rightRef}
          className="relative"
        >
          <div className="absolute inset-6 rounded-[2rem] bg-karion-purple/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-glow-lg backdrop-blur-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <FeaturePanel
                icon={Layers3}
                title="Estrategia + diseño"
                description="Experiencias digitales pensadas para usuarios, ventas y operación."
              />
              <FeaturePanel
                icon={ShieldCheck}
                title="Base técnica sólida"
                description="Arquitecturas preparadas para crecer sin convertir el producto en deuda."
              />
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-[#0B0010]/80 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/50">Mapa de impacto</p>
                  <h3 className="mt-1 text-xl font-semibold">De idea a sistema operativo</h3>
                </div>
                <Sparkles className="h-5 w-5 text-karion-purple" />
              </div>
              <div className="relative min-h-64 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="absolute left-1/2 top-8 h-[75%] w-px bg-gradient-to-b from-transparent via-karion-purple/70 to-transparent" />
                {["Diagnóstico", "Producto", "Automatización", "Escala"].map((item, index) => (
                  <div
                    key={item}
                    className={`impact-node relative mb-4 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  >
                    <div className="w-[46%] rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white/76">
                      {item}
                    </div>
                    <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-karion-purple shadow-glow" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

function FeaturePanel({
  icon: Icon,
  title,
  description
}: {
  icon: typeof Layers3;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5"
    >
      <Icon className="h-6 w-6 text-karion-purple" />
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/58">{description}</p>
    </motion.div>
  );
}
