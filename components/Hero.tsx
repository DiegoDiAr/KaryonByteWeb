"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Magnetic } from "./Magnetic";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Pin hero and scale down
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
      });

      gsap.to(titleRef.current, {
        scale: 0.85,
        opacity: 0,
        filter: "blur(20px)",
        y: -100,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="inicio" aria-label="Presentación de KarionByte" className="relative h-screen w-full overflow-hidden bg-deep-space flex items-center justify-center">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute left-[10%] top-[20%] h-[40vw] w-[40vw] rounded-full bg-karion-purple blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] top-[40%] h-[35vw] w-[35vw] rounded-full bg-electric-blue blur-[100px] mix-blend-screen"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[90rem] flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex justify-center pointer-events-none"
        >
          <Image
            src="/logo-karionbyte.png"
            alt="KarionByte — Desarrollo de software y páginas web profesionales"
            width={500}
            height={500}
            priority
            unoptimized
            className="w-[300px] sm:w-[450px] h-auto object-contain scale-125"
          />
        </motion.div>
        
        <h1 ref={titleRef} className="font-sans text-balance text-5xl font-bold leading-[1.1] tracking-tighter sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <span className="block text-white pb-2">Desarrollo de</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 pb-2">
            software a medida
          </span>
          <span className="block bg-gradient-to-r from-karion-purple to-electric-blue bg-clip-text text-transparent pb-4">
            para escalar tu empresa.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl px-4">
          En KarionByte creamos páginas web profesionales, sistemas empresariales y soluciones digitales modernas para negocios que buscan vender más, automatizar procesos y crecer con tecnología real.
        </p>


      </div>
    </section>
  );
}
