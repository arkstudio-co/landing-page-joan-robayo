"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
const totalItems = PORTFOLIO_IMAGES.length;

function getMaxIndex(containerWidth: number): number {
  const visible = Math.floor(containerWidth / ITEM_WIDTH);
  return Math.max(0, totalItems - visible);
}

export function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        if (!containerRef.current) return 0;
        const mx = getMaxIndex(containerRef.current.offsetWidth);
        return prev < mx ? prev + 1 : 0;
      });
    }, 4000);
  }, [stopAutoPlay]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setMaxIndex(getMaxIndex(container.offsetWidth));
    }

    const handleResize = () => {
      if (containerRef.current) {
        const newMax = getMaxIndex(containerRef.current.offsetWidth);
        setMaxIndex(newMax);
        setCurrentIndex((prev) => Math.min(prev, newMax));
      }
    };

    window.addEventListener("resize", handleResize);
    startAutoPlay();
    return () => {
      window.removeEventListener("resize", handleResize);
      stopAutoPlay();
    };
  }, [startAutoPlay, stopAutoPlay]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  return (
    <section className="py-32 overflow-hidden bg-black border-y border-primary/10">
      <div className="max-w-[85%] mx-auto text-center mb-16">
        <h2 className="text-6xl text-on-surface mb-4 uppercase main-title">
          ¿Estás en Medellín o piensas visitarnos?
        </h2>
        <p className="text-sm uppercase tracking-widest subtitle">
          escribenos, recibe una asesoría y aparta tu cita con nosotros
        </p>
      </div>
      <div
        ref={containerRef}
        className="relative overflow-hidden select-none max-w-[90%] mx-auto group"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-gold text-white hover:text-black p-4 transition-all opacity-0 group-hover:opacity-100 border border-white/10"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * ITEM_WIDTH}px)` }}
        >
          {PORTFOLIO_IMAGES.map((src, i) => (
            <div key={i} className="carousel-item">
              <img
                alt={`Work ${i + 1}`}
                className="w-full h-[525px] object-cover shadow-xl rounded-xl"
                src={src}
              />
            </div>
          ))}
        </div>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-gold text-white hover:text-black p-4 transition-all opacity-0 group-hover:opacity-100 border border-white/10"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-gold text-black px-12 py-5 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest hover:bg-[#e0ab75] transition-all transform hover:scale-105 active:scale-95 shadow-lg">
          Agenda una asesoría
        </button>
      </div>
    </section>
  );
}
