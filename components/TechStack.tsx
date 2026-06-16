"use client";

import { motion } from "framer-motion";
import { Atom, Zap, FileCode2, Palette, Server, Code2, Database, Webhook, Triangle, Github, BrainCircuit } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

const technologies = [
  { name: "Next.js", icon: Zap },
  { name: "React", icon: Atom },
  { name: "TypeScript", icon: FileCode2 },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Code2 },
  { name: "Bases de Datos", icon: Database },
  { name: "APIs", icon: Webhook },
  { name: "Vercel", icon: Triangle },
  { name: "GitHub", icon: Github },
  { name: "Inteligencia Artificial", icon: BrainCircuit },
];

export function TechStack() {
  return (
    <SectionReveal id="tecnologias" className="relative z-10 bg-deep-space px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="section-kicker mx-auto">Stack Tecnológico</p>
          <h2 className="section-title mt-4">Tecnologías modernas y escalables</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Utilizamos herramientas de última generación para construir soluciones rápidas, seguras y preparadas para crecer con tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-karyon-purple/40 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(115,58,237,0.15)] md:col-span-1 lg:col-span-2 ${
                  i === 6 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-karyon-purple/40 blur-[30px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Icon className="relative z-10 h-8 w-8 text-white/50 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(115,58,237,0.8)]" />
                <span className="relative z-10 text-center text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
