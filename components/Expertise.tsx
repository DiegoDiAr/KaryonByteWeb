"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Server, Layout, ShieldAlert, type LucideIcon } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services: Array<{
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}> = [
  {
    icon: Layout,
    title: "Páginas Web Profesionales",
    desc: "Desarrollo de páginas web corporativas, landing pages y aplicaciones web modernas, rápidas y optimizadas para convertir visitantes en clientes.",
    color: "from-karion-purple to-neon-purple",
  },
  {
    icon: Server,
    title: "Sistemas y Software a Medida",
    desc: "Creamos sistemas web empresariales para gestionar ventas, inventario, pedidos y procesos administrativos desde una sola plataforma unificada.",
    color: "from-electric-blue to-blue-600",
  },
  {
    icon: ShieldAlert,
    title: "Plataformas SaaS y Cloud",
    desc: "Arquitectura escalable en la nube, bases de datos y despliegue de soluciones digitales pensadas para alto rendimiento y crecimiento continuo.",
    color: "from-white/50 to-white/10",
  }
];

export function Expertise() {
  const container = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeServiceIndex, setActiveServiceIndex] = useState(-1);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let removeResizeListener = () => {};

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const clearCardStylesBelowDesktop = () => {
        if (window.innerWidth >= 1280 || !cardsRef.current) return;
        setActiveServiceIndex(-1);
        const cards = Array.from(cardsRef.current.children) as HTMLElement[];
        cards.forEach((card) => gsap.set(card, { clearProps: "all" }));
      };

      clearCardStylesBelowDesktop();
      window.addEventListener("resize", clearCardStylesBelowDesktop);
      removeResizeListener = () => window.removeEventListener("resize", clearCardStylesBelowDesktop);

      mm.add("(min-width: 1280px)", () => {
        if (!cardsRef.current || !container.current) return;
        const cards = Array.from(cardsRef.current.children) as HTMLElement[];
        if (!cards.length) return;

        setActiveServiceIndex(0);
        gsap.set(cards, { clearProps: "all" });

        cards.forEach((card, i) => {
          gsap.set(card, {
            zIndex: cards.length - i,
            scale: i === 0 ? 1.15 : 0.95 - i * 0.05,
            y: i * 35,
            opacity: i === 0 ? 1 : 0.6 - i * 0.2,
            transformOrigin: "center center",
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: `+=${cards.length * 100}%`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            onUpdate: (self) => {
              const nextIndex = Math.min(cards.length - 1, Math.round(self.progress * (cards.length - 1)));
              setActiveServiceIndex((current) => current === nextIndex ? current : nextIndex);
            },
          }
        });

        for (let i = 0; i < cards.length - 1; i++) {
          const currentCard = cards[i];

          tl.to(currentCard, {
            x: "120%",
            opacity: 0,
            rotate: 5,
            scale: 0.8,
            duration: 1,
            ease: "power2.inOut",
          }, i);

          for (let j = i + 1; j < cards.length; j++) {
            const nextCard = cards[j];
            const newIndex = j - (i + 1);

            tl.to(nextCard, {
              scale: newIndex === 0 ? 1.15 : 0.95 - newIndex * 0.05,
              y: newIndex * 35,
              opacity: newIndex === 0 ? 1 : 0.6 - newIndex * 0.2,
              duration: 1,
              ease: "power2.inOut",
            }, i);
          }
        }

        return () => {
          cards.forEach((card) => gsap.set(card, { clearProps: "all" }));
        };
      });

    }, container);

    return () => {
      removeResizeListener();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={container}
      id="servicios"
      aria-label="Nuestros servicios de desarrollo"
      className="relative z-20 flex bg-[#020005] px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24 xl:min-h-screen xl:items-center"
    >
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { opacity: [0.18, 0.32, 0.18], scale: [1, 1.025, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 bg-mesh-gradient mix-blend-screen will-change-transform"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "show"}
            viewport={{ once: true, margin: "-120px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.11 } },
            }}
            className="flex w-full flex-col items-start gap-4 xl:w-1/2"
          >
            <motion.span
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-electric-blue sm:mb-2 sm:text-sm"
            >
              Nuestra Expertise
            </motion.span>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 22, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.15rem,8vw,3.75rem)] font-semibold leading-tight tracking-normal text-white"
            >
              Tecnología diseñada para <span className="bg-gradient-to-r from-karion-purple to-electric-blue bg-clip-text text-transparent">ordenar, automatizar y escalar</span> tu empresa.
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-1 max-w-2xl text-base leading-7 text-white/60 sm:mt-2 sm:text-lg sm:leading-relaxed xl:max-w-md"
            >
              Cada servicio está pensado para integrarse a tu negocio, mejorar tus procesos y ayudarte a crecer de forma ordenada.
            </motion.p>
          </motion.div>

          <div className="relative w-full xl:h-[450px] xl:w-1/2">
            <div ref={cardsRef} className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:relative xl:block xl:h-full">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="rounded-[2rem] md:last:col-span-2 xl:absolute xl:left-0 xl:top-0 xl:w-full xl:last:col-span-1"
                >
                  <ServiceCard {...service} index={i} isActive={activeServiceIndex === i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, color, index, isActive }: {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  index: number;
  isActive: boolean;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 34, scale: 0.97 }}
      whileInView={shouldReduceMotion ? undefined : {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.62, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] },
      }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`group relative h-full overflow-hidden rounded-[2rem] border bg-[#080312] p-6 transition-[border-color,box-shadow] duration-300 will-change-transform hover:border-karion-purple/60 hover:shadow-[0_22px_80px_rgba(115,58,237,0.16)] active:border-electric-blue/50 sm:p-8 lg:p-10 ${
        isActive
          ? "border-karion-purple/65 shadow-[0_22px_80px_rgba(115,58,237,0.18)]"
          : "border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
      }`}
    >
      <motion.div
        aria-hidden="true"
        animate={isActive && !shouldReduceMotion ? { opacity: [0.5, 1, 0.5], scaleX: [0.82, 1, 0.82] } : undefined}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className={`pointer-events-none absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-electric-blue/60 to-transparent transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-active:opacity-100"}`}
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.78, rotate: -7 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="inline-flex"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color} p-[1px] shadow-[0_0_28px_rgba(115,58,237,0.14)] sm:mb-8 sm:h-16 sm:w-16`}
          >
            <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#020005]">
              <Icon className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110 group-active:scale-95" />
            </div>
          </motion.div>
        </motion.div>
        <h3 className="mb-3 text-2xl font-medium leading-tight tracking-normal text-white sm:mb-4 sm:text-3xl">{title}</h3>
        <p className="text-base leading-7 text-white/60 sm:text-lg sm:leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
