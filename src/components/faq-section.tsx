"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";

function AccordionIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}
    >
      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-widest font-[family-name:var(--font-inter)]">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl main-title text-on-surface mt-3 uppercase">
            Todo lo que necesitas saber
          </h2>
        </div>
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-white/10 rounded-lg overflow-hidden transition-colors hover:border-gold/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-[family-name:var(--font-inter)] text-sm uppercase tracking-wider text-on-surface hover:text-gold transition-colors"
                >
                  <span>{item.question}</span>
                  <AccordionIcon open={isOpen} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-on-surface/60 leading-relaxed font-[family-name:var(--font-manrope)]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
