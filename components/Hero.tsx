"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react/ssr";
import { scrollToSection } from "@/lib/scrollToSection";

const capabilities = [
  { num: "01", label: "Software a medida" },
  { num: "02", label: "Páginas web" },
  { num: "03", label: "Automatización" },
  { num: "04", label: "Inteligencia artificial" },
];

const lineReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: { clipPath: "inset(0 0 0% 0)" },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <section
      id="top"
      aria-label="Presentación de KaryonByte"
      className="relative overflow-hidden bg-paper px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:pt-48"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(78,17,222,0.1),rgba(78,17,222,0)_68%)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 select-none font-serif text-[26rem] italic leading-none text-accent/[0.06] sm:text-[34rem]"
      >
        K
      </span>

      <div className="relative mx-auto max-w-content">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="kicker"
        >
          Estudio de software &mdash; Perú, remoto para el mundo
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h1 className="display-heading text-[clamp(2.75rem,7vw,5.25rem)] font-normal leading-[1.04]">
              {["Software que ", "se nota en cómo ", "opera tu negocio."].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    initial={shouldReduceMotion ? false : "hidden"}
                    animate="show"
                    variants={lineReveal}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.19, 1, 0.22, 1] }}
                    className="block"
                  >
                    {i === 1 ? <em className="font-serif italic text-accent">{line}</em> : line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.19, 1, 0.22, 1] }}
              className="mt-8 max-w-md font-sans text-lg leading-8 text-ink-soft sm:max-w-lg"
            >
              Diseñamos y construimos sistemas, sitios web y automatizaciones a la medida de tus procesos. Sin plantillas, sin intermediarios, con código que te pertenece por completo.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="mt-10 flex flex-wrap items-center gap-8"
            >
              <a href="#contacto" onClick={(e) => handleScroll(e, "contacto")} className="btn-solid">
                Cotizar un proyecto
                <ArrowUpRight weight="bold" className="h-4 w-4" />
              </a>
              <a href="#servicios" onClick={(e) => handleScroll(e, "servicios")} className="btn-line">
                Ver qué hacemos
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-4 lg:pt-3">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="border-t border-ink/15"
            >
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.num}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.08, ease: [0.19, 1, 0.22, 1] }}
                  className="flex items-baseline justify-between border-b border-ink/15 py-4"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="index-num">{cap.num}</span>
                    <span className="font-sans text-base text-ink">{cap.label}</span>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#servicios"
          onClick={(e) => handleScroll(e, "servicios")}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-20 hidden items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint transition hover:text-ink lg:flex"
        >
          <ArrowDown className="h-3.5 w-3.5" />
          Desplázate
        </motion.a>
      </div>
    </section>
  );
}
