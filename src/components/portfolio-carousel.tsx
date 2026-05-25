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
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const animFrameRef = useRef(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    offsetRef.current = -SET_WIDTH;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }

    const tick = (now: number) => {
      const dt = lastTimeRef.current ? (now - lastTimeRef.current) / 1000 : 0;
      lastTimeRef.current = now;

      offsetRef.current -= 30 * dt;

      if (offsetRef.current <= -SET_WIDTH * 2) {
        offsetRef.current += SET_WIDTH;
      } else if (offsetRef.current > 0) {
        offsetRef.current -= SET_WIDTH;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  const goNext = useCallback(() => {
    offsetRef.current -= STEP;
    if (offsetRef.current <= -SET_WIDTH * 2) {
      offsetRef.current += SET_WIDTH;
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
  }, []);

  const goPrev = useCallback(() => {
    offsetRef.current += STEP;
    if (offsetRef.current > 0) {
      offsetRef.current -= SET_WIDTH;
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
  }, []);

  return (
    <section className="py-20 overflow-hidden bg-black border-y border-primary/10">
      <div className="max-w-[85%] mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-4xl text-on-surface mb-4 uppercase main-title">
          ¿Estás en Medellín o piensas visitarnos?
        </h2>
        <p className="text-sm uppercase tracking-widest subtitle">
          Escríbenos, recibe una asesoría y aparta tu cita con nosotros
        </p>
      </div>
      <div ref={containerRef} className="relative select-none max-w-[90%] mx-auto group overflow-hidden">
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-gold text-white hover:text-black p-4 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 border border-white/10 rounded-full"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform"
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-none w-[375px] h-[525px] relative"
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
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-gold text-white hover:text-black p-4 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 border border-white/10 rounded-full"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="https://wa.me/573146148297?text=Hola!%20quiero%20agendar%20una%20asesor%C3%ADa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#9CB198] text-black px-12 py-5 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest hover:bg-[#acc8a6] transition-all transform hover:scale-105 active:scale-95 shadow-lg inline-block rounded-xl"
        >
          Agenda una asesoría
        </a>
      </div>
    </section>
  );
}
