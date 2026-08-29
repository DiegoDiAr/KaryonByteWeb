"use client";

import { motion } from "framer-motion";

const groups = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "Java"] },
  { category: "Datos e infraestructura", items: ["PostgreSQL", "APIs REST", "Vercel", "GitHub"] },
  { category: "Inteligencia artificial", items: ["Modelos de lenguaje", "Automatización", "Integraciones"] },
];

export function TechStack() {
  return (
    <section id="stack" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="kicker lg:col-span-3"
          >
            Stack técnico
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="display-heading lg:col-span-7 text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.12]"
          >
            Herramientas probadas, no experimentos sobre tu producto.
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: gi * 0.08, ease: [0.19, 1, 0.22, 1] }}
            >
              <h3 className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-faint">
                {group.category}
              </h3>
              <ul className="mt-5 space-y-3 border-t border-line pt-5">
                {group.items.map((item) => (
                  <li key={item} className="font-serif text-lg text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
