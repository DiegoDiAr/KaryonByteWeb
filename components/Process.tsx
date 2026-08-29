"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Descubrimiento",
    desc: "Entendemos tu negocio, tus procesos actuales y qué necesita resolver la plataforma antes de diseñar nada.",
  },
  {
    num: "02",
    title: "Arquitectura",
    desc: "Definimos base de datos, módulos, integraciones y la ruta técnica completa antes de escribir código de producto.",
  },
  {
    num: "03",
    title: "Construcción",
    desc: "Desarrollamos por etapas revisables, con avances visibles y código limpio desde la primera entrega.",
  },
  {
    num: "04",
    title: "Validación",
    desc: "Probamos cada flujo contigo, ajustamos detalles y confirmamos que la solución resuelve el problema real.",
  },
  {
    num: "05",
    title: "Lanzamiento y soporte",
    desc: "Publicamos, monitoreamos el comportamiento en producción y seguimos disponibles después de entregar.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="bg-paper-alt px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="kicker lg:col-span-3"
          >
            Proceso
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="display-heading lg:col-span-7 text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.12]"
          >
            Cinco etapas, un mismo hilo conductor de principio a fin.
          </motion.h2>
        </div>

        <div className="relative mt-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
              className="grid grid-cols-1 gap-3 border-t border-ink/12 py-8 sm:grid-cols-12 sm:gap-8 sm:py-10"
            >
              <span className="display-heading sm:col-span-2 text-4xl italic text-accent/30">
                {step.num}
              </span>
              <h3 className="display-heading sm:col-span-4 text-xl font-normal leading-snug text-ink sm:text-2xl">
                {step.title}
              </h3>
              <p className="font-sans text-[0.95rem] leading-7 text-ink-soft sm:col-span-6">
                {step.desc}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-ink/12" />
        </div>
      </div>
    </section>
  );
}
