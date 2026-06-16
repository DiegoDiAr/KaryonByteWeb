"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabledState = () => setIsEnabled(pointerQuery.matches);

    updateEnabledState();
    pointerQuery.addEventListener("change", updateEnabledState);

    return () => pointerQuery.removeEventListener("change", updateEnabledState);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-target")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isEnabled]);

  if (!isEnabled || typeof document === "undefined") return null;

  return createPortal(
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-blue mix-blend-screen"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric-blue/40 mix-blend-screen"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(0, 240, 255, 0.1)" : "transparent",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
    </>,
    document.body
  );
}
