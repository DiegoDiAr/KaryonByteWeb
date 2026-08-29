"use client";

import { motion } from "framer-motion";

const points = [
  "Respuesta en menos de 24 horas",
  "Código documentado, siempre tuyo",
  "Entregas revisables por etapas",
  "Soporte directo post-lanzamiento",
];

export function TrustStrip() {
  return (
    <section aria-label="Compromisos de trabajo" className="border-y border-line bg-paper-alt">
      <div className="mx-auto max-w-content overflow-x-auto px-5 sm:px-8">
        <ul className="flex min-w-max items-center gap-10 py-5 sm:min-w-0 sm:flex-wrap sm:justify-between sm:gap-8">
          {points.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center gap-2 whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-wider text-ink-soft"
            >
              <span className="h-1 w-1 rounded-full bg-accent" />
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
