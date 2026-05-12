"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { PORTFOLIO_IMAGES } from "@/lib/constants";

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

const ITEM_WIDTH = 375;
const GAP = 16;
const STEP = ITEM_WIDTH + GAP;
const SET_WIDTH = PORTFOLIO_IMAGES.length * STEP;

const items = [...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES];

export function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const resetScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    if (track.scrollLeft >= SET_WIDTH * 2) {
      track.style.scrollBehavior = "auto";
      track.scrollLeft -= SET_WIDTH;
      requestAnimationFrame(() => {
        track.style.scrollBehavior = "";
      });
    } else if (track.scrollLeft < 0) {
      track.style.scrollBehavior = "auto";
      track.scrollLeft += SET_WIDTH;
      requestAnimationFrame(() => {
        track.style.scrollBehavior = "";
      });
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      track.scrollLeft += 0.5;
      resetScroll();
    }, 20);
  }, [resetScroll]);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.scrollLeft = SET_WIDTH;
    }
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [startAutoScroll]);

  const goNext = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    clearInterval(intervalRef.current);
    track.scrollTo({ left: track.scrollLeft + STEP, behavior: "smooth" });
    setTimeout(() => {
      resetScroll();
      startAutoScroll();
    }, 400);
  }, [resetScroll, startAutoScroll]);

  const goPrev = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    clearInterval(intervalRef.current);
    track.scrollTo({ left: track.scrollLeft - STEP, behavior: "smooth" });
    setTimeout(() => {
      resetScroll();
      startAutoScroll();
    }, 400);
  }, [resetScroll, startAutoScroll]);

  return (
    <section className="py-20 overflow-hidden bg-black border-y border-primary/10">
      <div className="max-w-[85%] mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-6xl text-on-surface mb-4 uppercase main-title">
          ¿Estás en Medellín o piensas visitarnos?
        </h2>
        <p className="text-sm uppercase tracking-widest subtitle">
          escribenos, recibe una asesoría y aparta tu cita con nosotros
        </p>
      </div>
      <div className="relative select-none max-w-[90%] mx-auto group">
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-gold text-white hover:text-black p-4 transition-all opacity-0 group-hover:opacity-100 border border-white/10 rounded-full"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto no-scrollbar"
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-none w-[375px] h-[525px] relative transition-transform duration-500 hover:scale-110 hover:z-10"
            >
              <Image
                alt={`Work ${(i % PORTFOLIO_IMAGES.length) + 1}`}
                fill
                className="object-cover shadow-xl rounded-xl"
                src={src}
                sizes="375px"
              />
            </div>
          ))}
        </div>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-gold text-white hover:text-black p-4 transition-all opacity-0 group-hover:opacity-100 border border-white/10 rounded-full"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>
      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="flex justify-center mt-12">
        <a
          href="https://wa.me/573146148297?text=Hola!%20quiero%20agendar%20una%20asesor%C3%ADa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-black px-12 py-5 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest hover:bg-[#e0ab75] transition-all transform hover:scale-105 active:scale-95 shadow-lg inline-block"
        >
          Agenda una asesoría
        </a>
      </div>
    </section>
  );
}
