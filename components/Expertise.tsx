"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Server, Layout, ShieldAlert } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: Layout,
    title: "Ecosistemas Web",
    desc: "Sitios corporativos y aplicaciones web inmersivas, optimizadas para rendimiento extremo y conversión B2B.",
    color: "from-karion-purple to-neon-purple",
  },
  {
    icon: Server,
    title: "Sistemas Operativos",
    desc: "Plataformas de software internas que automatizan y conectan todos tus procesos de negocio (ERP/CRM a medida).",
    color: "from-electric-blue to-blue-600",
  },
  {
    icon: ShieldAlert,
    title: "Arquitectura Cloud",
    desc: "Infraestructura robusta y segura diseñada para escalar. Tu sistema nunca se caerá en los picos de demanda.",
    color: "from-white/50 to-white/10",
  }
];

export function Expertise() {
  const container = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 100,
          opacity: 0,
          scale: 0.9,
          stagger: 0.15,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative z-20 bg-[#020005] py-32 px-6 sm:py-40 lg:px-8">
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 mix-blend-screen pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start gap-4">
          <p className="text-sm font-semibold tracking-widest text-electric-blue uppercase">
            Nuestra Expertise
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl max-w-2xl">
            Soluciones diseñadas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-karion-purple to-electric-blue">dominar</span> tu industria.
          </h2>
        </div>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, color, index }: any) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-3xl transition-colors hover:bg-white/[0.04]"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10">
        <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color} p-[1px]`}>
          <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#020005]">
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>
        <h3 className="mb-4 text-2xl font-medium text-white">{title}</h3>
        <p className="text-white/60 leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
