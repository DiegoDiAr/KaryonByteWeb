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
    <footer ref={container} className="relative z-0 h-screen w-full bg-karion-purple overflow-hidden flex flex-col justify-end">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-[#020005]/40 mix-blend-multiply pointer-events-none" />
      
      <div className="footer-content relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h2 className="text-[15vw] font-bold leading-none tracking-tighter text-white sm:text-[10vw]">
          Iniciemos.
        </h2>
        
        <div className="mt-12">
          <Magnetic>
            <a href="mailto:contacto@karionbyte.com" className="hover-target inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#020005] transition-transform hover:scale-105">
              Contactar a un Arquitecto
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-white/20 px-8 py-6 text-sm text-white/70">
        <p>© {new Date().getFullYear()} KarionByte.</p>
        <p>Ecosistemas Digitales</p>
      </div>
    </footer>
  );
}
