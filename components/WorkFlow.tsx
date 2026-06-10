"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { num: "01", title: "Descubrimiento", desc: "Analizamos tu negocio, tus objetivos y las funcionalidades que necesita tu página web o software a medida." },
  { num: "02", title: "Arquitectura", desc: "Definimos la estructura del sistema, base de datos, módulos y tecnologías necesarias para tu solución digital." },
  { num: "03", title: "Desarrollo", desc: "Construimos tu plataforma web por etapas, con avances revisables, código limpio y enfoque en automatización de procesos." },
  { num: "04", title: "Despliegue", desc: "Probamos, optimizamos y publicamos tu proyecto. También te acompañamos durante la puesta en marcha." },
  { num: "05", title: "Soporte", desc: "Monitoreamos, corregimos y escalamos tu sistema empresarial acompañando el crecimiento de tu negocio." },
];

export function WorkFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1280px)", () => {
        if (!trackRef.current || !sectionRef.current) return;

        const track = trackRef.current;
        const cards = Array.from(track.children) as HTMLElement[];
        if (cards.length !== steps.length) return;

        const getStartX = () => {
          const firstCard = cards[0];
          return window.innerWidth / 2 - (firstCard.offsetLeft + firstCard.offsetWidth / 2);
        };

        const getEndX = () => {
          const lastCard = cards[cards.length - 1];
          return window.innerWidth / 2 - (lastCard.offsetLeft + lastCard.offsetWidth / 2);
        };

        const updateCardFocus = (progress: number) => {
          const carouselPosition = progress * (cards.length - 1);
          const nextActiveIndex = Math.round(carouselPosition);

          setActiveIndex((current) => current === nextActiveIndex ? current : nextActiveIndex);

          cards.forEach((card, index) => {
            const distance = Math.abs(index - carouselPosition);
            const scale = gsap.utils.clamp(0.86, 1.08, 1.08 - distance * 0.14);
            const opacity = gsap.utils.clamp(0.46, 1, 1 - distance * 0.3);

            gsap.set(card, {
              scale,
              opacity,
              zIndex: Math.max(1, cards.length - Math.round(distance)),
              transformOrigin: "center center",
            });
          });
        };

        updateCardFocus(0);

        const animation = gsap.fromTo(
          track,
          { x: getStartX },
          {
            x: getEndX,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "center center",
              end: `+=${(cards.length - 1) * 680}`,
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => updateCardFocus(self.progress),
              onRefresh: (self) => updateCardFocus(self.progress),
            },
          }
        );

        return () => {
          animation.scrollTrigger?.kill();
          animation.kill();
          gsap.set(track, { clearProps: "transform" });
          cards.forEach((card) => gsap.set(card, { clearProps: "transform,opacity,zIndex" }));
        };
      });

      mm.add("(max-width: 1279px)", () => {
        setActiveIndex(0);

        if (!trackRef.current) return;
        const cards = Array.from(trackRef.current.children) as HTMLElement[];
        gsap.set(trackRef.current, { clearProps: "transform" });
        cards.forEach((card) => gsap.set(card, { clearProps: "transform,opacity,zIndex" }));
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proceso"
      aria-label="Nuestro proceso de trabajo"
      className="relative z-10 overflow-x-clip overflow-y-visible bg-[#020005] py-12 sm:py-16 lg:py-24"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-7 flex max-w-7xl justify-center px-5 sm:mb-9 sm:px-6 lg:mb-14 lg:px-8 xl:mb-16"
      >
        <h2 className="text-center text-[clamp(2rem,8vw,3rem)] font-semibold leading-tight tracking-normal text-white sm:text-5xl">Cómo trabajamos</h2>
      </motion.div>

      <div
        ref={trackRef}
        className="grid grid-cols-1 gap-4 px-5 sm:px-6 md:grid-cols-2 xl:flex xl:w-max xl:flex-row xl:gap-16 xl:px-[12vw]"
      >
        {steps.map((step, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={step.num}
              data-step={step.num}
              className="workflow-card-shell w-full xl:w-[450px] xl:flex-none"
            >
              <motion.article
                initial={shouldReduceMotion ? false : { opacity: 0, y: 34, scale: 0.97 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.22 }}
                whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.012 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                transition={{ type: "spring", stiffness: 240, damping: 24, delay: index * 0.05 }}
                aria-current={isActive ? "step" : undefined}
                className={`group relative flex min-h-full w-full flex-col justify-between overflow-hidden rounded-[2rem] border bg-[#080312] p-6 transition-[border-color,box-shadow] duration-300 will-change-transform sm:p-8 xl:h-[450px] xl:p-10 ${
                  isActive
                    ? "border-karion-purple/70 shadow-[0_0_70px_rgba(115,58,237,0.2)]"
                    : "border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.2)] hover:border-karion-purple/55 hover:shadow-[0_22px_70px_rgba(115,58,237,0.14)]"
                }`}
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-blue/55 to-transparent transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                {isActive && !shouldReduceMotion && (
                  <motion.div
                    aria-hidden="true"
                    initial={{ x: "-140%", opacity: 0 }}
                    animate={{ x: ["-140%", "240%"], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 3.6, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-electric-blue/5 to-transparent"
                  />
                )}

                <motion.span
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.78 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: "spring", stiffness: 230, damping: 18, delay: index * 0.04 }}
                  className="mb-8 bg-gradient-to-br from-white/30 to-white/5 bg-clip-text text-6xl font-black leading-none text-transparent sm:mb-10 sm:text-7xl xl:mb-0 xl:text-8xl"
                >
                  {step.num}
                </motion.span>

                <div>
                  <h3 className="mb-3 text-2xl font-semibold leading-tight tracking-normal text-white sm:text-3xl xl:mb-4 xl:text-4xl">{step.title}</h3>
                  <p className="text-base leading-7 text-white/80 sm:text-lg sm:leading-relaxed xl:text-xl">{step.desc}</p>
                </div>

                <motion.div
                  aria-hidden="true"
                  initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
                  whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.12 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-6 bottom-0 h-px origin-left bg-gradient-to-r from-karion-purple/70 via-electric-blue/50 to-transparent sm:inset-x-8 xl:hidden"
                />
              </motion.article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
