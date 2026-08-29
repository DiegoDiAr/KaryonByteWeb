"use client";

import { motion } from "framer-motion";

const reasons = [
  { num: "01", title: "Comunicación directa", desc: "Hablas con quien construye tu proyecto, sin capas comerciales de por medio." },
  { num: "02", title: "Desarrollo a medida", desc: "Cada solución se diseña para tus procesos reales, nunca desde una plantilla." },
  { num: "03", title: "Entregas por etapas", desc: "Avances revisables durante todo el proyecto, no una sola entrega al final." },
  { num: "04", title: "Código 100% tuyo", desc: "Propiedad total del código y la infraestructura, sin dependencias forzadas." },
  { num: "05", title: "Soporte posterior", desc: "El acompañamiento continúa después del lanzamiento, no termina ahí." },
];

export function WhyUs() {
  return (
    <section id="nosotros" className="bg-paper-alt px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="kicker"
            >
              Por qué KaryonByte
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
              className="display-heading sticky top-28 mt-6 text-[clamp(1.85rem,3.2vw,2.6rem)] font-normal italic leading-[1.28] text-ink"
            >
              &ldquo;Construimos tecnología de forma transparente, sin intermediarios que compliquen el proceso.&rdquo;
            </motion.h2>
          </div>

          <div className="lg:col-span-7">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
                className="grid grid-cols-12 gap-4 border-t border-line py-6"
              >
                <span className="index-num col-span-2 sm:col-span-1">{reason.num}</span>
                <h3 className="col-span-10 font-sans text-base font-semibold text-ink sm:col-span-4">
                  {reason.title}
                </h3>
                <p className="col-span-12 font-sans text-[0.9rem] leading-6 text-ink-soft sm:col-span-7">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
