"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type SectionRevealProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
  className?: string;
};

export function SectionReveal({
  children,
  className = "",
  ...props
}: SectionRevealProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
