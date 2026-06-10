"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
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
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      id="inicio"
      aria-label="Presentación de KarionByte"
      className="relative flex min-h-[92svh] w-full items-center justify-center overflow-hidden bg-deep-space px-4 py-10 sm:min-h-[94svh] sm:px-6 sm:py-12 lg:h-screen lg:min-h-screen lg:px-0 lg:py-0"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <motion.div
          animate={shouldReduceMotion ? undefined : {
            rotate: 360,
            scale: [1, 1.18, 1],
            x: [0, 10, 0],
            y: [0, -12, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute left-[10%] top-[20%] h-[56vw] max-h-[360px] min-h-[180px] w-[56vw] min-w-[180px] max-w-[360px] rounded-full bg-karion-purple blur-[90px] mix-blend-screen lg:h-[40vw] lg:w-[40vw] lg:max-w-none lg:blur-[120px]"
        />
        <motion.div
          animate={shouldReduceMotion ? undefined : {
            rotate: -360,
            scale: [1, 1.34, 1],
            x: [0, -12, 0],
            y: [0, 10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute right-[4%] top-[44%] h-[52vw] max-h-[340px] min-h-[170px] w-[52vw] min-w-[170px] max-w-[340px] rounded-full bg-electric-blue blur-[80px] mix-blend-screen lg:right-[10%] lg:h-[35vw] lg:w-[35vw] lg:max-w-none lg:blur-[100px]"
        />
        <motion.div
          aria-hidden="true"
          animate={shouldReduceMotion ? undefined : { opacity: [0.25, 0.6, 0.25], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[52%] h-40 w-40 -translate-x-1/2 rounded-full border border-white/10 shadow-[0_0_48px_rgba(115,58,237,0.22)] sm:h-56 sm:w-56 lg:hidden"
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex max-w-[90rem] flex-col items-center text-center"
        initial={shouldReduceMotion ? false : "hidden"}
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.14,
              delayChildren: 0.1,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24, scale: 0.96 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none mb-4 flex justify-center sm:mb-6 lg:mb-8"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            className="will-change-transform"
          >
            <Image
              src="/logo-karionbyte.png"
              alt="KarionByte - Desarrollo de software y páginas web profesionales"
              width={500}
              height={500}
              priority
              unoptimized
              className="h-auto w-full max-w-[240px] object-contain sm:max-w-[360px] lg:max-w-[450px] lg:scale-125"
            />
          </motion.div>
        </motion.div>

        <h1
          ref={titleRef}
          className="font-sans text-balance text-[clamp(2.5rem,11vw,4.5rem)] font-bold leading-[1.08] tracking-normal md:text-7xl lg:text-[5.5rem]"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 22, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block pb-2 text-white"
          >
            Desarrollo de
          </motion.span>
          <motion.span
            variants={{ hidden: { opacity: 0, y: 22, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block bg-gradient-to-r from-white via-white to-white/40 bg-clip-text pb-2 text-transparent"
          >
            software a medida
          </motion.span>
          <motion.span
            variants={{ hidden: { opacity: 0, y: 22, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block bg-gradient-to-r from-karion-purple to-electric-blue bg-clip-text pb-4 text-transparent"
          >
            para escalar tu empresa.
          </motion.span>
        </h1>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-4 max-w-2xl px-1 text-base leading-7 text-white/70 sm:mt-5 sm:px-4 sm:text-xl sm:leading-8"
        >
          En KarionByte creamos páginas web profesionales, sistemas empresariales y soluciones digitales modernas para negocios que buscan vender más, automatizar procesos y crecer con tecnología real.
        </motion.p>
        <motion.div
          aria-hidden="true"
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 h-12 w-px overflow-hidden rounded-full bg-white/10 sm:mt-8 sm:h-14 lg:hidden"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: ["-100%", "140%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-transparent via-electric-blue to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
