"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 72]), {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {

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
      aria-label="Presentación de KaryonByte"
      className="relative flex min-h-[92svh] w-full items-center justify-center overflow-hidden bg-deep-space px-4 py-10 sm:min-h-[94svh] sm:px-6 sm:py-12 lg:h-screen lg:min-h-screen lg:px-0 lg:py-0"
    >
      <motion.div
        style={shouldReduceMotion ? undefined : { y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0 opacity-30 will-change-transform"
      >
        <motion.div
          animate={shouldReduceMotion ? undefined : {
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vw] max-h-[600px] w-[100vw] max-w-[1000px] rounded-full bg-karyon-purple/40 blur-[120px] mix-blend-screen lg:blur-[150px]"
        />
        <motion.div
          animate={shouldReduceMotion ? undefined : {
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-[30%] top-[40%] h-[60vw] max-h-[500px] w-[80vw] max-w-[800px] rounded-full bg-electric-blue/30 blur-[120px] mix-blend-screen lg:blur-[150px]"
        />
      </motion.div>

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
              src="/logo-karyonbyte.png"
              alt="KaryonByte - Desarrollo de software y páginas web profesionales"
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
            Desarrollo de software,
          </motion.span>
          <motion.span
            variants={{ hidden: { opacity: 0, y: 22, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block bg-gradient-to-r from-white via-white to-white/40 bg-clip-text pb-2 text-transparent"
          >
            automatización e IA
          </motion.span>
          <motion.span
            variants={{ hidden: { opacity: 0, y: 22, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block bg-gradient-to-r from-karyon-purple to-electric-blue bg-clip-text pb-4 text-transparent"
          >
            a medida para empresas.
          </motion.span>
        </h1>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-4 max-w-2xl px-1 text-base leading-7 text-white/70 sm:mt-5 sm:px-4 sm:text-xl sm:leading-8"
        >
          Creamos soluciones web modernas, escalables y adaptadas a tus procesos para ayudarte a operar mejor, ahorrar tiempo y digitalizar tu negocio.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
        >
          <a
            href="#contacto"
            onClick={(e) => handleScroll(e, "contacto")}
            className="border-beam-container group flex w-full items-center justify-center gap-2 rounded-full bg-deep-space px-8 py-3.5 font-medium text-white shadow-[0_0_20px_rgba(115,58,237,0.3)] backdrop-blur-md transition-all hover:scale-105 sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">Cotizar mi proyecto</span>
          </a>
          <a
            href="#soluciones"
            onClick={(e) => handleScroll(e, "soluciones")}
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto"
          >
            <span className="relative z-10">Ver soluciones</span>
          </a>
        </motion.div>

        <motion.div
          aria-hidden="true"
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-10 h-12 w-px overflow-hidden rounded-full bg-white/10 sm:mt-14 sm:h-14 lg:hidden"
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
