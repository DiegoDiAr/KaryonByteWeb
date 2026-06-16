"use client";

import { motion } from "framer-motion";
import { Atom, Zap, FileCode2, Palette, Server, Code2, Database, Webhook, Triangle, Github, BrainCircuit, CodeXml, Layers, Braces, Coffee } from "lucide-react";

const technologies = [
  { name: "HTML", icon: CodeXml },
  { name: "CSS", icon: Layers },
  { name: "JavaScript", icon: Braces },
  { name: "TypeScript", icon: FileCode2 },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Zap },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Code2 },
  { name: "Java", icon: Coffee },
  { name: "Bases de Datos", icon: Database },
  { name: "APIs", icon: Webhook },
  { name: "Vercel", icon: Triangle },
  { name: "GitHub", icon: Github },
  { name: "Inteligencia Artificial", icon: BrainCircuit },
];

const row1 = technologies.slice(0, 8);
const row2 = technologies.slice(8);

export function TechStack() {
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
    <section id="tecnologias" className="relative z-10 bg-deep-space px-5 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
        variants={containerVariants}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <p className="section-kicker mx-auto !text-electric-blue/90">
            Stack Tecnológico
          </p>
          <h2 className="section-title mt-4">
            Tecnologías modernas y escalables
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Utilizamos herramientas de última generación para construir soluciones rápidas, seguras y preparadas para crecer con tu empresa.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative mt-16 w-full overflow-hidden py-6">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-deep-space to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-deep-space to-transparent" />

          <div className="flex flex-col gap-6">
            <div className="flex w-max motion-safe:animate-marquee-left motion-reduce:animate-none gap-6">
              {[...row1, ...row1].map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div key={`r1-${i}`} className="group relative flex w-36 sm:w-48 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 cursor-default">
                    <Icon className="relative z-10 h-8 w-8 sm:h-10 sm:w-10 text-white/50 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
                    <span className="relative z-10 text-center text-xs sm:text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex w-max motion-safe:animate-marquee-right motion-reduce:animate-none gap-6">
              {[...row2, ...row2].map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div key={`r2-${i}`} className="group relative flex w-36 sm:w-48 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 cursor-default">
                    <Icon className="relative z-10 h-8 w-8 sm:h-10 sm:w-10 text-white/50 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
                    <span className="relative z-10 text-center text-xs sm:text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
