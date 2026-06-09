"use client";

import { useRef, useState, useEffect } from "react";
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
    desc: "Sitios corporativos y aplicaciones web inmersivas, optimizadas para rendimiento extremo y alta conversión.",
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
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (!cardsRef.current || !container.current) return;
        const cards = Array.from(cardsRef.current.children) as HTMLElement[];
        if (!cards.length) return;

        // Ensure cards are stacked exactly
        gsap.set(cards, { clearProps: "all" });

        // Initial stack setup
        cards.forEach((card, i) => {
          gsap.set(card, {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: cards.length - i,
            scale: i === 0 ? 1.15 : 0.95 - i * 0.05,
            y: i * 35,
            opacity: i === 0 ? 1 : 0.6 - i * 0.2,
            transformOrigin: "center center",
            boxShadow: i === 0 ? "0 0 60px rgba(115,58,237,0.15)" : "none",
            borderColor: i === 0 ? "rgba(115,58,237,0.6)" : "rgba(255,255,255,0.1)",
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: `+=${cards.length * 100}%`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          }
        });

        // Sequence: slide top card left, bring next cards forward
        for (let i = 0; i < cards.length - 1; i++) {
          const currentCard = cards[i];
          
          tl.to(currentCard, {
            x: "120%",
            opacity: 0,
            rotate: 5,
            scale: 0.8,
            duration: 1,
            ease: "power2.inOut",
          }, i);

          for (let j = i + 1; j < cards.length; j++) {
            const nextCard = cards[j];
            const newIndex = j - (i + 1);
            
            tl.to(nextCard, {
              scale: newIndex === 0 ? 1.15 : 0.95 - newIndex * 0.05,
              y: newIndex * 35,
              opacity: newIndex === 0 ? 1 : 0.6 - newIndex * 0.2,
              boxShadow: newIndex === 0 ? "0 0 60px rgba(115,58,237,0.15)" : "none",
              borderColor: newIndex === 0 ? "rgba(115,58,237,0.6)" : "rgba(255,255,255,0.1)",
              duration: 1,
              ease: "power2.inOut",
            }, i);
          }
        }
      });

      mm.add("(max-width: 767px)", () => {
        if (!cardsRef.current) return;
        const cards = Array.from(cardsRef.current.children) as HTMLElement[];
        
        // Reset absolute positioning
        cards.forEach(card => gsap.set(card, { clearProps: "all" }));
        
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          }
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative z-20 bg-[#020005] py-24 sm:py-32 px-6 lg:px-8 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 mix-blend-screen pointer-events-none" />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
            <p className="text-sm font-semibold tracking-widest text-electric-blue uppercase">
              Nuestra Expertise
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Soluciones diseñadas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-karion-purple to-electric-blue">dominar</span> tu industria.
            </h2>
            <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-md">
              Avanza a tu propio ritmo. Cada uno de nuestros servicios está diseñado como una pieza de tu ecosistema.
            </p>
          </div>

          {/* Right Stack */}
          <div className="w-full md:w-1/2 relative h-[450px]">
            <div ref={cardsRef} className="relative w-full h-full flex flex-col gap-6 md:block">
              {services.map((service, i) => (
                <div key={i} className="md:absolute md:top-0 md:left-0 md:w-full rounded-[2rem]">
                  <ServiceCard {...service} index={i} />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, color }: any) {
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
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080312] p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-2 h-full"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10">
        <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color} p-[1px]`}>
          <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#020005]">
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>
        <h3 className="mb-4 text-3xl font-medium text-white">{title}</h3>
        <p className="text-white/60 text-lg leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
