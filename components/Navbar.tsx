"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(8,0,11,0.08)", "rgba(8,0,11,0.72)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0.04)", "rgba(255,255,255,0.12)"]
  );

  return (
    <motion.header
      style={{ background, borderColor }}
      className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-2xl"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="KarionByte inicio" className="group flex items-center">
          <Image
            src="/logo-karionbyte.png"
            alt="KarionByte"
            width={230}
            height={70}
            priority
            className="h-10 w-auto rounded-sm object-contain brightness-110 contrast-125 sm:h-12"
          />
          <span className="sr-only">KarionByte</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/72 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:border-karion-purple/70 hover:bg-karion-purple/20 lg:flex"
        >
          Solicitar cotización
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-5 mb-5 rounded-3xl border border-white/10 bg-[#120018]/95 p-3 shadow-glow backdrop-blur-xl lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/78 transition hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-karion-purple px-5 py-3 text-sm font-semibold text-white shadow-glow"
          >
            Solicitar cotización
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
