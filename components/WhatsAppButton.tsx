"use client";

import { MessageCircle } from "lucide-react";
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
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] active:scale-95"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 transition-opacity group-hover:animate-ping group-hover:opacity-30"></div>
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
