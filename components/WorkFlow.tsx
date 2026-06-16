"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Descubrimiento", desc: "Analizamos tu negocio, tus objetivos y las funcionalidades que necesita tu plataforma." },
  { num: "02", title: "Propuesta y arquitectura", desc: "Definimos la estructura del sistema, base de datos, módulos y tecnologías necesarias." },
  { num: "03", title: "Desarrollo por etapas", desc: "Construimos tu plataforma con avances revisables, código limpio y enfoque en escalabilidad." },
  { num: "04", title: "Pruebas y ajustes", desc: "Realizamos un riguroso control de calidad para asegurar que todo funcione perfectamente." },
  { num: "05", title: "Despliegue y soporte", desc: "Publicamos tu proyecto y te acompañamos con monitoreo y soporte continuo." },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0.01, y: 18, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function WorkFlow() {
  return (
    <section
      id="proceso"
      className="relative z-10 bg-[#020005] py-16 sm:py-20 lg:py-28"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
        variants={containerVariants}
        className="mx-auto flex max-w-7xl flex-col px-5 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-12 max-w-3xl sm:mb-16">
          <h2 className="text-[clamp(2.5rem,6vw,3.5rem)] font-bold leading-tight tracking-normal text-white">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/60">
            Un proceso estructurado para garantizar resultados sólidos desde la primera reunión hasta el lanzamiento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, index) => (
            <motion.div
              variants={itemVariants}
              key={step.num}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[#080312] p-8 transition-colors duration-300 hover:border-karyon-purple/50 hover:bg-white/[0.02] md:col-span-1 ${
                index === 3 ? "lg:col-start-2 lg:col-span-2" : "lg:col-span-2"
              }`}
            >
              <div className="mb-8">
                <span className="bg-gradient-to-br from-white/30 to-white/5 bg-clip-text text-5xl font-black leading-none text-transparent">
                  {step.num}
                </span>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold leading-tight text-white">{step.title}</h3>
                <p className="text-base leading-relaxed text-white/70">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
