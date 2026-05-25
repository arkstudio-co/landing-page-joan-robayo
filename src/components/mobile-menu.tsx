"use client";

import { useState, useCallback, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

interface NavLink {
  label: string;
  href: string;
}

export function MobileMenu({ links }: { links?: readonly NavLink[] }) {
  const navLinks = links ?? NAV_LINKS;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggle}
        className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`block h-0.5 w-6 bg-gold transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gold transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gold transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
      <div
        className={`fixed inset-0 z-40 bg-black/98 flex flex-col items-center justify-center gap-12 transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={close}
            className="text-white text-2xl md:text-4xl uppercase tracking-widest main-title hover:text-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/573146148297?text=Hola!%20quiero%20cotizar%20mi%20proximo%20tattoo"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="bg-[#9CB198] text-black px-10 py-4 font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest hover:bg-[#acc8a6] transition-colors mt-4 rounded-xl"
        >
          Book Appointment
        </a>
      </div>
    </>
  );
}

