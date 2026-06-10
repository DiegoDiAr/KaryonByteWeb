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
    <footer ref={container} id="contacto" aria-label="Contacto y llamada a la acción" className="relative z-0 h-[80vh] w-full bg-[#020005] overflow-hidden flex flex-col justify-end">
      
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
          Lleva tu negocio al siguiente nivel con una página web profesional, software a medida o automatización de procesos.
        </p>
        
        <div className="mt-4">
          <Magnetic>
            <a 
              href="https://wa.me/51924206297?text=Hola,%20quiero%20cotizar%20con%20ustedes" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-[#020005] font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)]"
              aria-label="Contactar a KarionByte por WhatsApp para cotizar desarrollo de software y páginas web"
            >
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Cotizar mi proyecto
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
