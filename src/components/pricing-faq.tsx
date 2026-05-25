"use client";

import { useState } from "react";
import { PRICING_TIERS, FAQ_ITEMS } from "@/lib/constants";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l4 4 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

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

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 textured-bg">
      <div className="max-w-6xl mx-auto">
        <div className="relative grid md:grid-cols-2 gap-12 md:gap-0">
          <div className="md:pr-12">
            <div className="mb-8 text-center">
              <h3 className="text-xl main-title text-on-surface uppercase">
                Preguntas frecuentes
              </h3>
              <p className="text-on-surface/50 text-sm mt-2 font-[family-name:var(--font-inter)]">
                Resolvemos tus dudas
              </p>
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
                      className="w-full flex items-center justify-between px-6 py-5 text-left font-[family-name:var(--font-inter)] text-sm uppercase tracking-wider text-on-surface hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
                    >
                      <span>{item.question}</span>
                      <AccordionIcon open={isOpen} />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-on-surface/60 leading-relaxed font-[family-name:var(--font-inter)]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div className="md:pl-12">
            <div className="mb-8 text-center">
              <h3 className="text-xl main-title text-on-surface uppercase">
                Precios
              </h3>
              <p className="text-on-surface/50 text-sm mt-2 font-[family-name:var(--font-inter)]">
                Inversión transparente
              </p>
            </div>
            <div className="max-w-sm mx-auto">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.title}
                  className="rounded-lg border border-gold bg-gold/5 p-8 flex flex-col text-center"
                >
                  <div className="mb-6">
                    <h4 className="text-xl main-title text-on-surface uppercase mb-1">{tier.title}</h4>
                    <p className="text-on-surface/50 text-sm font-[family-name:var(--font-inter)]">
                      {tier.description}
                    </p>
                  </div>
                  <div className="mb-8">
                    <span className="text-3xl font-bold main-title text-gold">{tier.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center justify-center gap-3 text-on-surface/70 text-sm font-[family-name:var(--font-inter)]">
                        <span className="text-gold shrink-0">
                          <CheckIcon />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/573146148297?text=Hola!%20quiero%20cotizar%20un%20tatuaje%20tama%C3%B1o%20${encodeURIComponent(tier.title.toLowerCase())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-btn-bg text-btn-text py-4 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest hover:bg-btn-bg-hover transition-colors rounded-xl"
                  >
                    Cotizar {tier.title.toLowerCase()}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

