import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const SITE_URL = "https://karionbyte.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020005",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KarionByte | Desarrollo de Software y Páginas Web a Medida",
    template: "%s | KarionByte",
  },
  description:
    "Somos KarionByte, una startup tecnológica que diseña y desarrolla páginas web profesionales, sistemas empresariales, software a medida y soluciones digitales para negocios que quieren crecer, automatizar procesos y escalar con tecnología.",
  keywords: [
    "desarrollo de software",
    "páginas web profesionales",
    "software a medida",
    "sistemas web",
    "soluciones digitales",
    "automatización de procesos",
    "desarrollo web para empresas",
    "startup tecnológica",
    "KarionByte",
    "sistemas empresariales",
    "aplicaciones web",
    "desarrollo web Perú",
    "agencia de desarrollo web",
    "crear página web",
    "software para negocios",
  ],
  authors: [{ name: "KarionByte", url: SITE_URL }],
  creator: "KarionByte",
  publisher: "KarionByte",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: SITE_URL,
    siteName: "KarionByte",
    title: "KarionByte | Desarrollo de Software y Páginas Web a Medida",
    description: "KarionByte crea páginas web, software a medida y soluciones digitales para empresas que buscan crecer, automatizar procesos y transformar sus ideas en tecnología real.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KarionByte — Desarrollo de software y páginas web profesionales",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KarionByte | Software y Páginas Web a Medida",
    description: "KarionByte crea páginas web, software a medida y soluciones digitales para empresas que buscan crecer, automatizar procesos y transformar sus ideas en tecnología real.",
    images: ["/og-image.png"],
    creator: "@karionbyte",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "KarionByte",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-karionbyte.png`,
      },
      description: "Startup tecnológica especializada en desarrollo de software, páginas web profesionales, sistemas empresariales y soluciones digitales a medida.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+51-924-206-297",
        contactType: "sales",
        availableLanguage: ["Spanish", "English"],
      },
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "KarionByte",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-karionbyte.png`,
      image: `${SITE_URL}/og-image.png`,
      description: "Agencia de desarrollo web y creación de software a medida para negocios.",
      areaServed: [
        { "@type": "Country", name: "Peru" },
        { "@type": "Place", name: "Internacional" }
      ],
      telephone: "+51-924-206-297"
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "KarionByte",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "KarionByte | Desarrollo de Software y Páginas Web a Medida",
      description: "Diseñamos y desarrollamos páginas web, sistemas empresariales, software a medida y soluciones digitales para negocios que quieren crecer con tecnología.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es",
    },

    {
      "@type": "Service",
      serviceType: "Desarrollo de Software",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "Peru",
      },
      description: "Desarrollo de páginas web profesionales, sistemas empresariales, software a medida y automatización de procesos para negocios.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de desarrollo",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Páginas Web Profesionales",
              description: "Páginas web corporativas, landing pages y aplicaciones web modernas optimizadas para convertir visitantes en clientes.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sistemas Empresariales",
              description: "Sistemas internos para gestionar ventas, inventario, pedidos, clientes, reportes y procesos administrativos.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Arquitectura Cloud",
              description: "Servidores, bases de datos, despliegue y arquitectura pensada para alto rendimiento y escalabilidad.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} bg-abyss text-white antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
