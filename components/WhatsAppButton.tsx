"use client";

import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { useEffect, useState } from "react";

export function WhatsAppButton() {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

  useEffect(() => {
    // Solo accedemos a la variable de entorno en el cliente
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    if (number) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhoneNumber(number);
    }
  }, []);

  if (!phoneNumber) return null;

  const message = "Hola, vi la página de KaryonByte y me gustaría cotizar un proyecto.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-paper shadow-[0_10px_26px_rgba(78,17,222,0.32)] transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      <WhatsappLogo weight="fill" className="h-6 w-6" />
    </a>
  );
}
