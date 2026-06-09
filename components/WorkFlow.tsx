"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { num: "01", title: "Descubrimiento", desc: "Auditoría técnica y análisis de requerimientos del sistema." },
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
        
        const cards = Array.from(trackRef.current.children) as HTMLElement[];
        const viewportWidth = window.innerWidth;
        
        // Calculate offsets to perfectly center the first and last card
        const firstCard = cards[0];
        const lastCard = cards[cards.length - 1];
        
        const startX = viewportWidth / 2 - (firstCard.offsetLeft + firstCard.offsetWidth / 2);
        const endX = viewportWidth / 2 - (lastCard.offsetLeft + lastCard.offsetWidth / 2);

        // Instantly center the first card before any scrolling happens
        gsap.set(trackRef.current, { x: startX });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: `+=${cards.length * 600}`, // Extended scroll duration for smoothness
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // Track horizontal movement mapping exactly to the centers
        tl.to(trackRef.current, {
          x: endX,
          ease: "none",
          duration: cards.length - 1,
        }, 0);

        // Sequence individual card scales and focus (Cover Flow)
        cards.forEach((card, i) => {
          gsap.set(card, { 
            scale: 0.75, 
            opacity: 0.4, 
            borderColor: "rgba(255,255,255,0.05)",
            transformOrigin: "center center"
          });
          
          if (i === 0) {
            // First card starts focused and centered
            gsap.set(card, { 
              scale: 1.15, 
              opacity: 1, 
              borderColor: "rgba(115,58,237,0.8)", 
              boxShadow: "0 0 80px rgba(115,58,237,0.2)" 
            });
            // Shrinks as it moves left
            tl.to(card, {
              scale: 0.75,
              opacity: 0.4,
              borderColor: "rgba(255,255,255,0.05)",
              boxShadow: "none",
              ease: "power2.inOut",
              duration: 1,
            }, 0);
          } else {
            // Other cards grow into focus as they hit the center
            tl.to(card, {
              scale: 1.15,
              opacity: 1,
              borderColor: "rgba(115,58,237,0.8)",
              boxShadow: "0 0 80px rgba(115,58,237,0.2)",
              ease: "power2.inOut",
              duration: 1,
            }, i - 1);
            
            // Shrink out of focus as they leave the center (unless it's the very last card)
            if (i !== cards.length - 1) {
              tl.to(card, {
                scale: 0.75,
                opacity: 0.4,
                borderColor: "rgba(255,255,255,0.05)",
                boxShadow: "none",
                ease: "power2.inOut",
                duration: 1,
              }, i);
            }
          }
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 lg:mb-24 flex justify-center">
        <h2 className="text-3xl font-semibold text-white sm:text-5xl text-center">Nuestro Pipeline</h2>
      </div>

      <div ref={trackRef} className="flex flex-col gap-6 px-6 lg:flex-row lg:gap-20 lg:w-max lg:px-8">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="group relative flex w-full flex-col justify-between rounded-[2rem] border border-white/10 bg-[#080312] p-10 lg:h-[450px] lg:w-[450px]"
          >
            <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/30 to-white/5">
              {step.num}
            </span>
            <div>
              <h3 className="mb-4 text-4xl font-semibold text-white">{step.title}</h3>
              <p className="text-xl text-white/80 leading-relaxed">{step.desc}</p>
            </div>
            {/* Connecting line on desktop */}
            {i !== steps.length - 1 && (
              <div className="absolute top-1/2 -right-10 hidden w-10 h-px bg-white/20 lg:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
