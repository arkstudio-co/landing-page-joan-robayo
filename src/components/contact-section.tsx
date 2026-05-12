"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_INFO, FORMSPREE_ENDPOINT } from "@/lib/constants";

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8 text-primary shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ScheduleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8 text-primary shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8 text-primary shrink-0">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 mx-auto bg-[#080808] w-full">
      <div className="max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div>
          <span className="font-[family-name:var(--font-inter)] text-primary uppercase subtitle text-sm tracking-widest">
            VISÍTANOS
          </span>
          <h2 className="text-4xl md:text-6xl text-on-surface mt-4 mb-12 main-title leading-tight">
            Tu próximo tatuaje comienza aquí
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <LocationIcon />
              <div>
                <h4 className="text-2xl text-on-surface mb-2 main-title uppercase">
                  UBICACIÓN
                </h4>
                <p className="text-xl subtitle">{CONTACT_INFO.address}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <ScheduleIcon />
              <div>
                <h4 className="text-2xl text-on-surface mb-2 main-title uppercase">
                  HORARIOS
                </h4>
                <p className="text-xl subtitle whitespace-pre-line">{CONTACT_INFO.hours}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <MailIcon />
              <div>
                <h4 className="text-2xl text-on-surface mb-2 main-title uppercase">
                  CONTACTO
                </h4>
                <p className="text-xl subtitle">
                  {CONTACT_INFO.email}
                  <br />
                  {CONTACT_INFO.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-12 border border-gold/10 shadow-2xl bg-black/40">
          <h3 className="text-3xl text-on-surface mb-10 uppercase text-center main-title">
            DEJANOS TUS DATOS Y NOS PONDREMOS EN CONTACTO
          </h3>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-[family-name:var(--font-inter)]">
                Nombre
              </label>
              <input
                className="w-full py-2 text-on-surface hero-input"
                placeholder="Tu nombre completo"
                type="text"
                name="nombre"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-[family-name:var(--font-inter)]">
                  País
                </label>
                <input
                  className="w-full py-2 text-on-surface hero-input"
                  placeholder="Colombia"
                  type="text"
                  name="pais"
                />
              </div>
              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-[family-name:var(--font-inter)]">
                  Celular
                </label>
                <input
                  className="w-full py-2 text-on-surface hero-input"
                  placeholder="+57"
                  type="tel"
                  name="celular"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-[family-name:var(--font-inter)]">
                Correo
              </label>
              <input
                className="w-full py-2 text-on-surface hero-input"
                placeholder="tu@email.com"
                type="email"
                name="correo"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-[family-name:var(--font-inter)]">
                Describe el tattoo que quieres hacerte
              </label>
              <textarea
                className="w-full py-2 text-on-surface hero-input resize-none"
                placeholder="Cuéntanos tu idea, tamaño y zona del cuerpo..."
                rows={4}
                name="mensaje"
                required
              />
            </div>
            <div className="pt-4">
              <button
                className="w-full bg-gold text-black py-5 font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.2em] hover:bg-[#e0ab75] transition-colors disabled:opacity-50"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
              </button>
              {status === "success" && (
                <p className="text-green-400 text-sm mt-4 text-center">
                  Mensaje enviado con éxito. Te contactaremos pronto.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-4 text-center">
                  Error al enviar. Intenta de nuevo.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
