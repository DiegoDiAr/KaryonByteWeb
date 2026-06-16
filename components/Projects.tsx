"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BarChart3, Boxes, LayoutDashboard, PanelsTopLeft, Server, BrainCircuit } from "lucide-react";

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


const solutions = [
  { 
    title: "CRM personalizado", 
    icon: LayoutDashboard, 
    type: "Gestión", 
    desc: "Organiza clientes, oportunidades y seguimiento comercial en un sistema adaptado a tu flujo de ventas.",
    colorObj: {
      rgb: "139, 92, 246",
      bg: "bg-violet-500",
      text: "text-violet-500",
      border: "border-violet-500",
      borderHover: "hover:border-violet-500/40",
      bgOpacity10: "bg-violet-500/10",
      bgOpacity20: "bg-violet-500/20",
      borderOpacity20: "border-violet-500/20",
      borderOpacity30: "border-violet-500/30",
      from: "from-violet-500/10"
    }
  },
  { 
    title: "Dashboard administrativo", 
    icon: BarChart3, 
    type: "Analítica", 
    desc: "Visualiza indicadores clave, reportes y datos operativos para tomar mejores decisiones.",
    colorObj: {
      rgb: "6, 182, 212",
      bg: "bg-cyan-500",
      text: "text-cyan-500",
      border: "border-cyan-500",
      borderHover: "hover:border-cyan-500/40",
      bgOpacity10: "bg-cyan-500/10",
      bgOpacity20: "bg-cyan-500/20",
      borderOpacity20: "border-cyan-500/20",
      borderOpacity30: "border-cyan-500/30",
      from: "from-cyan-500/10"
    }
  },
  { 
    title: "Automatización de procesos", 
    icon: Boxes, 
    type: "Operación", 
    desc: "Conecta herramientas y reduce tareas repetitivas mediante flujos automatizados.",
    colorObj: {
      rgb: "20, 184, 166",
      bg: "bg-teal-500",
      text: "text-teal-500",
      border: "border-teal-500",
      borderHover: "hover:border-teal-500/40",
      bgOpacity10: "bg-teal-500/10",
      bgOpacity20: "bg-teal-500/20",
      borderOpacity20: "border-teal-500/20",
      borderOpacity30: "border-teal-500/30",
      from: "from-teal-500/10"
    }
  },
  { 
    title: "Integración con IA", 
    icon: BrainCircuit, 
    type: "Innovación", 
    desc: "Agrega asistentes, análisis inteligente o generación de contenido a tus procesos.",
    colorObj: {
      rgb: "217, 70, 239",
      bg: "bg-fuchsia-500",
      text: "text-fuchsia-500",
      border: "border-fuchsia-500",
      borderHover: "hover:border-fuchsia-500/40",
      bgOpacity10: "bg-fuchsia-500/10",
      bgOpacity20: "bg-fuchsia-500/20",
      borderOpacity20: "border-fuchsia-500/20",
      borderOpacity30: "border-fuchsia-500/30",
      from: "from-fuchsia-500/10"
    }
  },
  { 
    title: "Landing page profesional", 
    icon: PanelsTopLeft, 
    type: "Conversión", 
    desc: "Presenta tu negocio con una página moderna, clara y enfocada en convertir visitantes en contactos.",
    colorObj: {
      rgb: "245, 158, 11",
      bg: "bg-amber-500",
      text: "text-amber-500",
      border: "border-amber-500",
      borderHover: "hover:border-amber-500/40",
      bgOpacity10: "bg-amber-500/10",
      bgOpacity20: "bg-amber-500/20",
      borderOpacity20: "border-amber-500/20",
      borderOpacity30: "border-amber-500/30",
      from: "from-amber-500/10"
    }
  },
  { 
    title: "Sistemas internos", 
    icon: Server, 
    type: "Desarrollo", 
    desc: "Centraliza operaciones, usuarios, permisos y módulos internos en una plataforma privada.",
    colorObj: {
      rgb: "99, 102, 241",
      bg: "bg-indigo-500",
      text: "text-indigo-500",
      border: "border-indigo-500",
      borderHover: "hover:border-indigo-500/40",
      bgOpacity10: "bg-indigo-500/10",
      bgOpacity20: "bg-indigo-500/20",
      borderOpacity20: "border-indigo-500/20",
      borderOpacity30: "border-indigo-500/30",
      from: "from-indigo-500/10"
    }
  }
];

import React, { useState } from "react";

function SpotlightCard({ project }: { project: typeof solutions[0] & { variants?: import("framer-motion").Variants } }) {
  const divRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const c = project.colorObj;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(window.matchMedia("(hover: none)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile || !divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const renderMockup = () => {
    switch (project.title) {
      case "CRM personalizado":
        return (
          <div className="grid grid-cols-3 gap-2 h-full">
            {[3, 2, 4].map((count, colIdx) => (
              <div key={colIdx} className="rounded-xl border border-white/5 bg-white/[0.02] p-2 flex flex-col gap-2">
                <div className="h-1.5 w-1/2 rounded-full bg-white/20 mb-1" />
                {Array.from({ length: count }).map((_, i) => (
                  <div key={i} className="h-8 w-full rounded-md border border-white/5 bg-white/[0.04] p-1.5 flex flex-col justify-between transition-colors group-hover:bg-white/[0.06]">
                    <div className="h-1 w-3/4 rounded-full bg-white/30" />
                    <div className="flex justify-between items-center">
                       <div className="h-1 w-1/3 rounded-full bg-white/10" />
                       <div className={`h-1.5 w-1.5 rounded-full ${c.bg} opacity-70`} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );

      case "Dashboard administrativo":
        return (
          <div className="flex flex-col gap-3 h-full">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 flex flex-col justify-between">
                <div className="h-2 w-1/2 rounded-full bg-white/20 mb-3" />
                <div className={`h-4 w-3/4 rounded-md ${c.bg} opacity-80`} />
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 flex flex-col justify-between">
                <div className="h-2 w-1/2 rounded-full bg-white/20 mb-3" />
                <div className="flex items-end gap-1.5 h-6">
                  {[40, 70, 45, 90, 60].map((h, i) => (
                    <div key={i} className={`w-full rounded-sm ${c.bg} opacity-80`} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.03] p-3 relative overflow-hidden">
               <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${c.bgOpacity20} to-transparent`} />
               <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={`absolute bottom-0 left-0 right-0 w-full h-full stroke-current fill-none stroke-2 opacity-70 ${c.text}`}>
                 <path d="M0,25 C20,20 40,30 60,10 C80,-10 100,20 100,20" />
               </svg>
            </div>
          </div>
        );

      case "Automatización de procesos":
        return (
          <div className="relative flex flex-col items-center justify-center gap-4 h-full p-2">
            <div className="flex justify-between w-full px-4 items-center relative z-10">
               <div className={`h-8 w-8 rounded-lg border ${c.borderOpacity30} ${c.bgOpacity20} flex items-center justify-center shadow-[0_0_10px_rgba(${c.rgb},0.2)]`}>
                 <div className="h-2 w-2 rounded-full bg-white/60" />
               </div>
               <div className={`flex-1 h-px bg-gradient-to-r ${c.from} ${c.borderOpacity30} border-dashed border-t mx-2`} />
               <div className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                 <div className="h-2 w-2 rounded-full bg-white/40" />
               </div>
            </div>
            <div className={`h-6 w-px bg-gradient-to-b ${c.from} ${c.borderOpacity30} border-dashed border-l`} />
            <div className={`h-10 w-32 rounded-xl border ${c.borderOpacity30} ${c.bgOpacity10} flex items-center justify-center gap-2 backdrop-blur-sm z-10`}>
                <div className={`h-2 w-2 rounded-full ${c.bg}`} />
                <div className="h-1.5 w-12 rounded-full bg-white/40" />
            </div>
          </div>
        );

      case "Integración con IA":
        return (
          <div className="flex flex-col gap-3 h-full justify-end p-2">
            <div className="flex flex-col gap-2 w-full">
              <div className="self-end max-w-[80%] rounded-2xl rounded-tr-sm bg-white/10 p-2.5 border border-white/5">
                <div className="h-1.5 w-16 rounded-full bg-white/40 mb-1.5" />
                <div className="h-1.5 w-10 rounded-full bg-white/20" />
              </div>
              <div className="flex items-end gap-2 max-w-[85%]">
                <div className={`h-6 w-6 rounded-full ${c.bgOpacity20} border ${c.borderOpacity30} flex-shrink-0 flex items-center justify-center`}>
                  <div className={`h-2 w-2 rounded-full ${c.bg}`} />
                </div>
                <div className={`rounded-2xl rounded-tl-sm ${c.bgOpacity10} p-2.5 border ${c.borderOpacity20}`}>
                  <div className="h-1.5 w-20 rounded-full bg-white/60 mb-1.5" />
                  <div className="h-1.5 w-14 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
            <div className="mt-2 h-8 w-full rounded-full border border-white/10 bg-white/[0.03] flex items-center px-3 justify-between">
               <div className="h-1.5 w-1/3 rounded-full bg-white/20" />
               <div className={`h-4 w-4 rounded-full ${c.bg} opacity-80 flex items-center justify-center`} >
                 <div className="h-1 w-1.5 rounded-sm bg-white/80" />
               </div>
            </div>
          </div>
        );

      case "Landing page profesional":
        return (
          <div className="flex flex-col h-full rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
            <div className="h-6 border-b border-white/10 bg-white/5 flex items-center px-3 justify-between">
               <div className="h-1.5 w-8 rounded-full bg-white/40" />
               <div className="flex gap-1.5">
                 <div className="h-1 w-4 rounded-full bg-white/20" />
                 <div className="h-1 w-4 rounded-full bg-white/20" />
               </div>
            </div>
            <div className="h-16 border-b border-white/5 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
               <div className={`absolute inset-0 bg-gradient-to-b ${c.from} to-transparent`} />
               <div className="h-2 w-1/2 rounded-full bg-white/60 relative z-10" />
               <div className="h-1.5 w-1/3 rounded-full bg-white/30 relative z-10" />
               <div className={`h-3 w-12 mt-1 rounded-full ${c.bg} opacity-90 relative z-10`} />
            </div>
            <div className="flex-1 grid grid-cols-3 gap-2 p-2">
               {[1,2,3].map(i => (
                 <div key={i} className="rounded-lg border border-white/5 bg-white/5 p-1.5 flex flex-col items-center gap-1.5">
                   <div className="h-4 w-4 rounded-full bg-white/10" />
                   <div className="h-1 w-full rounded-full bg-white/20" />
                 </div>
               ))}
            </div>
          </div>
        );

      case "Sistemas internos":
        return (
          <div className="flex flex-col h-full rounded-xl border border-white/10 bg-white/[0.02] p-2">
            <div className="flex justify-between items-center mb-3 px-1">
               <div className="h-2 w-16 rounded-full bg-white/40" />
               <div className={`h-4 w-12 rounded-md ${c.bgOpacity20} border ${c.borderOpacity30}`} />
            </div>
            <div className="flex flex-col gap-2">
              {[1, 2, 3].map((row) => (
                <div key={row} className="flex items-center justify-between border-b border-white/5 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-white/10" />
                    <div className="flex flex-col gap-1">
                      <div className="h-1.5 w-12 rounded-full bg-white/50" />
                      <div className="h-1 w-8 rounded-full bg-white/20" />
                    </div>
                  </div>
                  <div className={`h-1.5 w-10 rounded-full ${row === 1 ? c.bg : 'bg-white/20'} opacity-80`} />
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isMobile && setOpacity(1)}
      onMouseLeave={() => !isMobile && setOpacity(0)}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition-colors transition-transform duration-300 ${c.borderHover} hover:bg-white/[0.06] hover:-translate-y-1 h-full flex flex-col`}
    >
      <div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(${c.rgb}, 0.15), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0D0312] p-3 flex flex-col h-[14rem]">
        <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full ${c.bg} opacity-10 blur-3xl transition duration-500 group-hover:opacity-30`} />
        
        <div className="mb-3 flex items-center justify-between relative z-10 px-1">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className={`h-2 w-2 rounded-full ${c.bg} shadow-[0_0_8px_rgba(${c.rgb},0.6)]`} />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[10px] text-white/60">
            {project.type}
          </span>
        </div>

        <div className="flex-1 relative z-10">
          {renderMockup()}
        </div>
      </div>

      <div className="relative z-10 px-2 pb-2 pt-5">
        <div className="flex items-center gap-3 mb-3">
           <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.bgOpacity10} ${c.text} border ${c.borderOpacity20} transition-all group-hover:${c.bgOpacity20}`}>
             <project.icon className="h-5 w-5" />
           </div>
           <h3 className="text-xl font-semibold text-white/95">{project.title}</h3>
        </div>
        <p className="text-sm leading-6 text-white/60">
          {project.desc}
        </p>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="soluciones" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
        variants={containerVariants}
        className="mx-auto max-w-7xl"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div variants={itemVariants} className="max-w-3xl">
            <p className="section-kicker">
              Soluciones que podemos desarrollar
            </p>
            <h2 className="section-title text-left">
              Capacidades técnicas a la medida de tu negocio
            </h2>
          </motion.div>
          <motion.p variants={itemVariants} className="max-w-md text-base leading-7 text-white/60">
            No usamos plantillas limitantes. Construimos herramientas digitales modernas y robustas pensadas para vender, administrar y automatizar de verdad.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((project) => (
            <motion.div variants={itemVariants} key={project.title}>
              <SpotlightCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
