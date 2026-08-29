"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion, type Variants, AnimatePresence } from "framer-motion";
import { Magnetic } from "./Magnetic";
import { X, EnvelopeSimple, Phone, ArrowUpRight, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { scrollToSection } from "@/lib/scrollToSection";

const quickLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Stack", href: "#stack" },
  { label: "Nosotros", href: "#nosotros" },
];

export function FooterCTA() {
  const shouldReduceMotion = useReducedMotion();
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0 },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const waLink = "https://wa.me/51924206297?text=Hola%2C%20quiero%20cotizar%20mi%20proyecto.";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(waLink)}&bgcolor=FAF9F4&color=160B2C`;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <footer id="contacto" aria-label="Contacto" className="bg-dusk text-paper">
      <div className="mx-auto max-w-content px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-32">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={itemVariants} transition={{ duration: 0.5 }} className="kicker !text-dusk-soft">
            Trabajemos juntos
          </motion.p>
          <motion.h2
            variants={itemVariants}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="display-heading mt-5 max-w-2xl text-[clamp(2.5rem,6vw,4.5rem)] font-normal italic leading-[1.05] text-paper"
          >
            Cuéntanos qué necesita tu negocio.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="mt-6 max-w-md font-sans text-base leading-7 text-dusk-soft"
          >
            Una primera llamada, sin costo, para entender tu proyecto y decirte con honestidad si podemos ayudarte.
          </motion.p>

          <motion.div variants={itemVariants} transition={{ duration: 0.6 }} className="mt-10">
            <Magnetic>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-solid-inverse"
                aria-label="Abrir modal para cotizar por WhatsApp"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
                Cotizar por WhatsApp
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 gap-10 border-t border-dusk-line pt-10 sm:grid-cols-3">
          <div>
            <span className="font-serif text-lg italic text-paper">KaryonByte</span>
            <p className="mt-3 max-w-xs font-sans text-sm leading-6 text-dusk-soft">
              Software, páginas web y automatización a medida para empresas.
            </p>
          </div>

          <nav aria-label="Enlaces rápidos" className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href.slice(1))}
                className="font-sans text-sm text-dusk-soft transition hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a href="mailto:contacto@karyonbyte.com" className="flex items-center gap-2 font-sans text-sm text-dusk-soft transition hover:text-paper">
              <EnvelopeSimple className="h-4 w-4" />
              contacto@karyonbyte.com
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm text-dusk-soft transition hover:text-paper">
              <Phone className="h-4 w-4" />
              +51 924 206 297
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-dusk-line pt-6 font-mono text-[0.68rem] uppercase tracking-wide text-dusk-soft sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} KaryonByte</p>
          <p>Ecosistemas digitales</p>
        </div>
      </div>

      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-dusk/90 backdrop-blur-sm"
                onClick={() => setIsModalOpen(false)}
              />
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                className="relative w-full max-w-sm border border-dusk-line bg-dusk p-8 text-center"
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute right-5 top-5 text-dusk-soft transition hover:text-paper"
                  aria-label="Cerrar modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <h3 className="display-heading mt-2 text-2xl font-normal italic text-paper">Cotiza por WhatsApp</h3>
                <p className="mt-2 font-sans text-sm text-dusk-soft">Escanea el código o abre WhatsApp directamente.</p>

                <div className="mx-auto mb-8 mt-6 flex h-48 w-48 items-center justify-center border border-dusk-line bg-paper p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={qrUrl} alt="Código QR de WhatsApp" className="h-full w-full" />
                </div>

                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-solid-inverse w-full justify-center">
                  Abrir WhatsApp
                  <ArrowUpRight weight="bold" className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </footer>
  );
}
