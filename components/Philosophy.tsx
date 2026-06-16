"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const trustPoints = [
  "Atención directa",
  "Desarrollo a medida",
  "Comunicación clara",
  "Entregas por etapas",
  "Soporte posterior",
  "Código limpio y escalable"
];

export function Philosophy() {
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

  return (
    <section
      id="filosofia"
      className="relative z-10 mt-0 bg-[#020005] px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-32 w-full -translate-y-full bg-gradient-to-b from-transparent to-[#020005] sm:h-48" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-4xl text-center mb-16">
          <p className="section-kicker mx-auto !text-electric-blue/90">
            Nuestra Filosofía
          </p>
          <h2 className="section-title mt-4">
            Construimos tecnología de forma transparente, sin intermediarios que compliquen el proceso.
          </h2>
        </motion.div>
        
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {trustPoints.map((point, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/[0.04]"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-karyon-purple" />
                <span className="text-base font-medium text-white/90">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
