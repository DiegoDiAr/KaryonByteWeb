"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { BarChart3, Boxes, LayoutDashboard, MonitorSmartphone, PanelsTopLeft, Utensils } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { title: "Landing corporativa", icon: PanelsTopLeft, type: "Conversión" },
  { title: "Sistema de inventario", icon: Boxes, type: "Operación" },
  { title: "Dashboard administrativo", icon: LayoutDashboard, type: "Analítica" },
  { title: "Sistema para restaurantes", icon: Utensils, type: "Gestión" },
  { title: "Plataforma SaaS", icon: BarChart3, type: "Escala" },
  { title: "Aplicación web personalizada", icon: MonitorSmartphone, type: "Producto" }
];

export function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: 40,
          stagger: 0.2,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        });
      }

      // Cards cinematic zoom-out reveal
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          opacity: 0,
          y: 80,
          scale: 1.15,
          stagger: 0.15,
          duration: 1.2,
          ease: "expo.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        });
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionReveal id="proyectos" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={headerRef} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Proyectos y casos de uso</p>
            <h2 className="section-title text-left">Interfaces que se ven bien y trabajan mejor</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-white/60">
            Creamos productos visualmente sólidos, con flujos pensados para vender,
            administrar, medir y automatizar.
          </p>
        </div>

        <div ref={cardsRef} className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition hover:border-karion-purple/60"
            >
              <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0D0312] p-4">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-karion-purple/20 blur-3xl transition group-hover:bg-karion-purple/35" />
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
                    <span className="h-2.5 w-2.5 rounded-full bg-karion-purple/85" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/56">
                    {project.type}
                  </span>
                </div>

                <div className="grid min-h-48 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-karion-purple/18 text-karion-purple">
                        <project.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="h-3 w-3/4 rounded-full bg-white/28" />
                        <div className="mt-2 h-2 w-1/2 rounded-full bg-white/12" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[58, 78, 42].map((height, barIndex) => (
                      <div
                        key={`${project.title}-${barIndex}`}
                        className="flex h-24 items-end rounded-2xl border border-white/10 bg-white/[0.035] p-2"
                      >
                        <motion.div
                          initial={{ height: "24%" }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.65, delay: 0.12 * barIndex }}
                          className="w-full rounded-xl bg-gradient-to-t from-karion-purple/30 to-karion-purple"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                      <div className="h-2 w-full rounded-full bg-white/18" />
                      <div className="mt-2 h-2 w-2/3 rounded-full bg-karion-purple/60" />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-karion-purple/12 p-3">
                      <div className="h-full rounded-xl border border-karion-purple/30" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-2 pb-2 pt-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  Mockup visual creado con HTML y Tailwind, listo para adaptar a una
                  solución real.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
