"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  "Páginas web",
  "Software a medida",
  "Sistemas empresariales",
  "Automatización"
];

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" }
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Columns stagger
      if (columnsRef.current) {
        gsap.from(columnsRef.current.children, {
          opacity: 0,
          y: 30,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: columnsRef.current,
            start: "top 90%",
            once: true,
          },
        });
      }

      // Bottom bar fade
      gsap.from(bottomRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top 95%",
          once: true,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative z-10 border-t border-white/10 px-5 py-12 sm:px-6 lg:px-8">
      <div ref={columnsRef} className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Image
            src="/logo-karyonbyte.png"
            alt="KaryonByte"
            width={240}
            height={72}
            className="h-12 w-auto object-contain"
          />
          <p className="mt-5 max-w-sm leading-7 text-white/58">
            Creamos páginas web, software y sistemas digitales para negocios que
            necesitan crecer con tecnología clara, moderna y escalable.
          </p>
        </div>

        <FooterColumn title="Servicios" items={services.map((label) => ({ label }))} />
        <FooterColumn title="Enlaces rápidos" items={links} />

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/44">
            Contacto
          </h3>
          <a
            href="mailto:contacto@karyonbyte.com"
            className="mt-5 flex items-center gap-3 text-white/70 transition hover:text-white"
          >
            <Mail className="h-4 w-4 text-karyon-purple" />
            contacto@karyonbyte.com
          </a>
          <div className="mt-6 flex gap-3">
            {[Instagram, Linkedin, Github].map((Icon, index) => (
              <a
                key={index}
                href="#inicio"
                aria-label="Red social de KaryonByte"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-white/62 transition hover:border-karyon-purple/60 hover:text-white hover:shadow-glow"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div ref={bottomRef} className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 KaryonByte. Todos los derechos reservados.</p>
        <p>Desarrollo de soluciones digitales premium.</p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items
}: {
  title: string;
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/44">
        {title}
      </h3>
      <div className="mt-5 space-y-3">
        {items.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="block text-white/62 transition hover:text-white"
            >
              {item.label}
            </a>
          ) : (
            <p key={item.label} className="text-white/62">
              {item.label}
            </p>
          )
        )}
      </div>
    </div>
  );
}
