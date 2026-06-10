"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Magnetic } from "./Magnetic";

export function FooterCTA() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(7px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <footer
      id="contacto"
      aria-label="Contacto y llamada a la acción"
      className="relative z-0 flex min-h-[610px] w-full flex-col justify-end overflow-hidden bg-[#020005] sm:min-h-[68vh] lg:min-h-[72vh]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] sm:bg-[size:4rem_4rem]" />

      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { opacity: [0.65, 1, 0.65], scale: [0.98, 1.035, 0.98] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 left-1/2 h-[38vh] w-[90vw] -translate-x-1/2 rounded-full bg-karion-purple/30 blur-[90px] will-change-transform sm:h-[46vh] sm:w-[80vw] sm:blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { opacity: [0.45, 0.8, 0.45], scale: [1.02, 0.97, 1.02] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[-10vh] left-1/2 h-[28vh] w-[70vw] -translate-x-1/2 rounded-full bg-electric-blue/20 blur-[80px] will-change-transform sm:h-[36vh] sm:w-[40vw] sm:blur-[100px]"
      />

      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.35 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } } }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 py-14 text-center sm:px-6 sm:py-16 lg:py-20"
      >
        <motion.p variants={itemVariants} transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }} className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-electric-blue sm:mb-5 sm:text-sm sm:tracking-[0.3em]">
          El futuro de tu negocio
        </motion.p>
        <motion.h2 variants={itemVariants} transition={{ duration: 0.76, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(3.25rem,17vw,8rem)] font-bold leading-none tracking-normal text-white sm:text-[10vw]">
          Iniciemos.
        </motion.h2>
        <motion.p variants={itemVariants} transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }} className="mb-8 mt-4 max-w-xl text-base leading-7 text-white/60 sm:mb-10 sm:mt-5 sm:text-xl sm:leading-8">
          Lleva tu negocio al siguiente nivel con una página web profesional, software a medida o automatización de procesos.
        </motion.p>

        <motion.div variants={itemVariants} transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }} className="mt-1 flex w-full justify-center sm:mt-2 sm:w-auto">
          <Magnetic>
            <motion.a
              href="https://wa.me/51924206297?text=Hola,%20quiero%20cotizar%20con%20ustedes"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.015 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.965 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-6 py-4 text-base font-bold text-[#020005] shadow-[0_18px_60px_rgba(255,255,255,0.12)] transition-shadow duration-300 hover:shadow-[0_20px_70px_rgba(255,255,255,0.24)] active:shadow-[0_12px_42px_rgba(0,240,255,0.18)] sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
              aria-label="Contactar a KarionByte por WhatsApp para cotizar desarrollo de software y páginas web"
            >
              <motion.span
                aria-hidden="true"
                animate={shouldReduceMotion ? undefined : { x: ["-140%", "140%"] }}
                transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-50"
              />
              <svg className="h-6 w-6 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span className="relative z-10">Cotizar mi proyecto</span>
            </motion.a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-2 border-t border-white/10 px-5 py-4 text-center text-sm text-white/50 sm:flex-row sm:justify-between sm:px-8 sm:py-5">
        <p>© {new Date().getFullYear()} KarionByte.</p>
        <p>Ecosistemas Digitales</p>
      </div>
    </footer>
  );
}
