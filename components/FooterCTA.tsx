"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Magnetic } from "./Magnetic";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FooterCTA() {
  const container = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".footer-content", {
        y: -150,
        opacity: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={container} className="relative z-0 h-[80vh] w-full bg-[#020005] overflow-hidden flex flex-col justify-end">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Massive Glowing Orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-karion-purple/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 w-[40vw] h-[40vh] bg-electric-blue/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="footer-content relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="text-electric-blue uppercase tracking-[0.3em] text-sm font-semibold mb-6">
          El futuro de tu negocio
        </p>
        <h2 className="text-[15vw] font-bold leading-none tracking-tighter text-white sm:text-[10vw]">
          Iniciemos.
        </h2>
        <p className="text-white/60 max-w-xl text-lg sm:text-xl mt-6 mb-12">
          Construyamos juntos el ecosistema digital que escalará tus procesos y dominará tu industria.
        </p>
        
        <div className="mt-4">
          <Magnetic>
            <a href="mailto:contacto@karionbyte.com" className="hover-target inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-[#020005] transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Contactar a un Arquitecto
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-white/10 px-8 py-6 text-sm text-white/50">
        <p>© {new Date().getFullYear()} KarionByte.</p>
        <p>Ecosistemas Digitales</p>
      </div>
    </footer>
  );
}
