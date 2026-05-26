"use client";

import { useState, useCallback, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { NAV_LINKS } from "@/lib/constants";

interface NavLink {
  label: string;
  href: string;
}

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function MobileMenu({ links }: { links?: readonly NavLink[] }) {
  const navLinks = links ?? NAV_LINKS;
  const [isOpen, setIsOpen] = useState(false);
  const isClient = useIsClient();

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const overlay = (
    <div
      onClick={close}
className={`fixed inset-0 z-50 bg-black/98 flex flex-col items-center justify-center gap-12 transition-all duration-300 ${
          isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => { e.stopPropagation(); close(); }}
          className="text-white text-2xl md:text-4xl uppercase tracking-widest main-title hover:text-gold transition-colors"
        >
          {link.label}
        </a>
      ))}
      <a
        href="https://wa.me/573146148297?text=Hola!%20quiero%20cotizar%20mi%20proximo%20tattoo"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => { e.stopPropagation(); close(); }}
        className="bg-btn-bg text-btn-text px-10 py-4 font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest hover:bg-btn-bg-hover transition-colors mt-4 rounded-xl"
      >
        Book Appointment
      </a>
    </div>
  );

  return (
    <>
      <button
        onClick={toggle}
        className="md:hidden relative z-50 w-11 h-11 flex flex-col items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
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
      {isClient && createPortal(overlay, document.body)}
    </>
  );
}

