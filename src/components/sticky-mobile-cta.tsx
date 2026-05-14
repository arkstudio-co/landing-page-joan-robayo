"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function StickyMobileCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600);
  });

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-t border-gold/20 p-4 md:hidden"
    >
      <a
        href="https://wa.me/573146148297?text=Hola!%20quiero%20cotizar%20mi%20proximo%20tattoo"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-[#9CB198] text-black text-center py-4 font-body text-xs uppercase tracking-[0.2em] hover:bg-[#acc8a6] transition-colors rounded-xl"
      >
        Agenda tu cita gratis
      </a>
    </motion.div>
  );
}

