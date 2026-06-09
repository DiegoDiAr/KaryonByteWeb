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
    <section ref={container} className="relative h-screen w-full overflow-hidden bg-deep-space flex items-center justify-center">
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
            alt="KarionByte"
            width={500}
            height={500}
            priority
            unoptimized
            className="w-[300px] sm:w-[450px] h-auto object-contain scale-125"
          />
        </motion.div>
        
        <h1 ref={titleRef} className="text-balance text-[12vw] font-bold leading-[0.9] tracking-tighter sm:text-[8vw]">
          <span className="block text-white">Construimos el</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
            Software que
          </span>
          <span className="block bg-gradient-to-r from-karion-purple to-electric-blue bg-clip-text text-transparent">
            Opera tu Empresa.
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16"
        >
          <Magnetic>
            <button 
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth"
                });
              }}
              className="group relative flex h-40 w-40 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/10 hover:border-karion-purple/50"
            >
              <span className="relative z-10 flex flex-col items-center gap-2">
                <span className="text-sm font-semibold tracking-widest uppercase">Empezar</span>
                <span className="h-2 w-2 rounded-full bg-electric-blue shadow-glow-blue animate-pulse" />
              </span>
            </button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
