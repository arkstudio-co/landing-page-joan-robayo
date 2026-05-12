"use client";

import { useState, type FormEvent } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

export function BlogSubscription() {
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
    <section id="subscribe" className="py-24 w-[85%] max-w-[1440px] mx-auto">
      <div className="bg-surface-container rounded-[15px] p-16 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-md">
          <h4 className="font-[family-name:var(--font-cinzel)] text-3xl text-white mb-4">
            &Uacute;nete a la comunidad
          </h4>
          <p className="font-[family-name:var(--font-playfair)] italic text-gray-400 text-lg">
            Recibe recomendaciones, lanzamientos exclusivos y promociones
            directamente en tu correo.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-auto flex flex-col md:flex-row gap-4 items-start"
        >
          <input
            className="bg-transparent border-b border-gray-700 py-4 px-2 text-white font-[family-name:var(--font-cinzel)] focus:border-gold outline-none transition-colors w-full md:w-80 uppercase tracking-widest text-sm"
            placeholder="TU EMAIL"
            type="email"
            name="email"
            required
          />
          <button
            className="border border-gold text-gold px-8 py-4 font-[family-name:var(--font-inter)] text-[0.7rem] uppercase tracking-widest hover:bg-gold hover:text-black transition-all disabled:opacity-50"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Enviando..." : "Suscribirme"}
          </button>
          {status === "success" && (
            <p className="text-green-400 text-sm w-full text-center md:text-left">
              &iexcl;Gracias por suscribirte!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm w-full text-center md:text-left">
              Error al enviar. Intenta de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
