"use client";

import { motion } from "framer-motion";
import { Utensils, TrendingUp, Users, ClipboardList, AlertCircle, CheckCircle2 } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

export function OwnProduct() {
  return (
    <SectionReveal id="producto" className="relative z-10 overflow-hidden bg-deep-space px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-karyon-purple/30 bg-karyon-purple/10 px-4 py-1.5 text-sm font-medium text-karyon-purple">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-karyon-purple opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-karyon-purple"></span>
              </span>
              Producto propio en desarrollo
            </div>
            
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              SaaS para restaurantes
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Una plataforma diseñada para ayudar a restaurantes a digitalizar su operación, centralizar procesos y gestionar mejor su negocio desde una solución web moderna.
            </p>

            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white/60 lg:max-w-none">
              <div className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <AlertCircle className="absolute left-1 top-1 h-5 w-5 text-electric-blue" aria-hidden="true" />
                  El Problema.
                </dt>{' '}
                <dd className="inline">Restaurantes que gestionan pedidos, inventario, reportes o procesos internos con herramientas dispersas o manuales.</dd>
              </div>
              <div className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <CheckCircle2 className="absolute left-1 top-1 h-5 w-5 text-karyon-purple" aria-hidden="true" />
                  La Solución.
                </dt>{' '}
                <dd className="inline">SaaS web diseñado para centralizar funciones clave y facilitar la operación diaria desde cualquier dispositivo.</dd>
              </div>
              <div className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <TrendingUp className="absolute left-1 top-1 h-5 w-5 text-neon-purple" aria-hidden="true" />
                  Nuestro Enfoque.
                </dt>{' '}
                <dd className="inline">Simplicidad, escalabilidad y adaptación específica a los flujos de trabajo del sector gastronómico.</dd>
              </div>
            </dl>
          </div>

          <div className="flex-1 lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full rounded-2xl border border-white/10 bg-[#0A0514] shadow-[0_0_50px_rgba(115,58,237,0.15)] overflow-hidden"
            >
              {/* macOS Header */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-[0_0_5px_rgba(255,95,86,0.5)]"></div>
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-[0_0_5px_rgba(255,189,46,0.5)]"></div>
                <div className="h-3 w-3 rounded-full bg-[#27C93F] shadow-[0_0_5px_rgba(39,201,63,0.5)]"></div>
                <div className="ml-4 flex h-6 w-1/2 mx-auto items-center justify-center rounded-md bg-white/5 text-[10px] font-medium text-white/40">
                  app.restopanel.com
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 sm:p-6">
                <div className="mb-6 flex items-center justify-between pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-karyon-purple/20 text-karyon-purple shadow-[0_0_15px_rgba(115,58,237,0.2)]">
                      <Utensils className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">RestoPanel</h3>
                      <p className="text-xs text-white/50">Vista General</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <ClipboardList className="mb-2 h-5 w-5 text-electric-blue" />
                  <p className="text-xs text-white/50">Pedidos Hoy</p>
                  <p className="mt-1 text-lg font-semibold text-white">---</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <Users className="mb-2 h-5 w-5 text-neon-purple" />
                  <p className="text-xs text-white/50">Mesas Activas</p>
                  <p className="mt-1 text-lg font-semibold text-white">---</p>
                </div>
                <div className="hidden rounded-xl border border-white/5 bg-white/5 p-4 sm:block">
                  <TrendingUp className="mb-2 h-5 w-5 text-karyon-purple" />
                  <p className="text-xs text-white/50">Ingresos</p>
                  <p className="mt-1 text-lg font-semibold text-white">---</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-white/5 bg-white/5 p-4">
                <h4 className="mb-4 text-xs font-medium text-white/60">Actividad Reciente</h4>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-white/10"></div>
                      <div className="flex-1">
                        <div className="h-2 w-3/4 rounded bg-white/20"></div>
                        <div className="mt-2 h-2 w-1/2 rounded bg-white/10"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -inset-0.5 -z-10 rounded-[1.1rem] bg-gradient-to-br from-karyon-purple/30 to-electric-blue/30 opacity-20 blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
