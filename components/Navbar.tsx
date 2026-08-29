"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, List, X } from "@phosphor-icons/react/ssr";
import { useState } from "react";
import { scrollToSection } from "@/lib/scrollToSection";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Stack", href: "#stack" },
  { label: "Nosotros", href: "#nosotros" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const background = useTransform(scrollY, [0, 80], ["rgba(250,249,244,0)", "rgba(250,249,244,0.92)"]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(targetId);
  };

  return (
    <motion.header
      style={{ background }}
      className="fixed left-0 right-0 top-0 z-50 backdrop-blur-md"
    >
      <motion.div style={{ opacity: borderOpacity }} className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-line" />
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8 lg:h-20">
        <a
          href="#top"
          onClick={(e) => handleScroll(e, "top")}
          aria-label="KaryonByte, ir al inicio"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo-karyonbyte.png"
            alt="KaryonByte"
            width={230}
            height={70}
            priority
            className="h-6 w-auto object-contain sm:h-7"
          />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href.slice(1))}
              className="font-sans text-sm text-ink-soft transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          onClick={(e) => handleScroll(e, "contacto")}
          className="group hidden items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent lg:flex"
        >
          Hablemos
          <ArrowUpRight weight="bold" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="border-t border-line bg-paper px-5 pb-6 pt-2 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href.slice(1))}
              className="block border-b border-line-soft py-4 font-sans text-base text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleScroll(e, "contacto")}
            className="btn-solid mt-5 w-full"
          >
            Hablemos
            <ArrowUpRight weight="bold" className="h-4 w-4" />
          </a>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
