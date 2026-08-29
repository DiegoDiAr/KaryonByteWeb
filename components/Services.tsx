"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Software a medida",
    desc: "Aplicaciones y sistemas construidos desde cero para tus procesos reales, no adaptados de un producto genérico.",
    tags: ["Node", "PostgreSQL", "APIs"],
    span: "md:col-span-7",
  },
  {
    num: "02",
    title: "Páginas web",
    desc: "Sitios corporativos y landing pages rápidas, claras y construidas para convertir visitantes en contactos.",
    tags: ["Next.js", "SEO"],
    span: "md:col-span-5",
  },
  {
    num: "03",
    title: "Automatización de procesos",
    desc: "Conectamos tus herramientas y eliminamos tareas manuales repetitivas con flujos confiables.",
    tags: ["Workflows", "Integraciones"],
    span: "md:col-span-5",
  },
  {
    num: "04",
    title: "Integración con inteligencia artificial",
    desc: "Asistentes, análisis de datos y generación de contenido incorporados directamente en tu operación diaria.",
    tags: ["LLMs", "Automatización"],
    span: "md:col-span-7",
  },
  {
    num: "05",
    title: "Sistemas empresariales",
    desc: "Plataformas internas para ventas, inventario, clientes y reportes, unificadas en un solo lugar.",
    tags: ["Dashboards", "Permisos"],
    span: "md:col-span-8",
  },
  {
    num: "06",
    title: "Soporte y evolución",
    desc: "Monitoreo, mejoras y acompañamiento técnico continuo después del lanzamiento.",
    tags: ["SLA directo"],
    span: "md:col-span-4",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="kicker lg:col-span-3"
          >
            Servicios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="display-heading lg:col-span-9 text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.12]"
          >
            Seis maneras de resolver un mismo problema: que tu operación
            <em className="text-accent not-italic font-serif italic"> dependa menos de ti.</em>
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {services.map((service, i) => (
            <motion.article
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.19, 1, 0.22, 1] }}
              className={`group col-span-1 flex flex-col justify-between rounded-[0.65rem] border border-line bg-paper p-8 transition-colors duration-300 hover:border-accent/40 hover:bg-paper-alt sm:p-10 ${service.span}`}
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="index-num">{service.num}</span>
                </div>
                <h3 className="display-heading mt-6 text-2xl font-normal leading-snug sm:text-[1.7rem]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md font-sans text-[0.95rem] leading-7 text-ink-soft">
                  {service.desc}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 border-t border-line-soft pt-4">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-accent-deep">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
