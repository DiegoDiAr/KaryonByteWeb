"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  delay: (index % 8) * 0.38,
  duration: 7 + (index % 5)
}));

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Slow parallax shift for the entire background
      gsap.to(containerRef.current, {
        yPercent: -12,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 3,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{ x: ["-12%", "8%", "-4%"], y: ["-8%", "5%", "-2%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-radial-purple blur-3xl"
      />
      <motion.div
        animate={{ x: ["8%", "-6%", "4%"], y: ["5%", "-7%", "4%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-18rem] top-1/4 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(115,58,237,0.25),rgba(8,0,11,0)_62%)] blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-0 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full border border-white/[0.03]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      <div className="absolute inset-0 opacity-40">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_16px_rgba(115,58,237,0.95)]"
            style={{ left: particle.left, top: particle.top }}
            animate={{ opacity: [0.12, 0.78, 0.12], scale: [0.7, 1.4, 0.7] }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      <motion.div
        className="absolute top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(115,58,237,0.13),transparent)] blur-2xl"
        animate={{ x: ["-80%", "220%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
