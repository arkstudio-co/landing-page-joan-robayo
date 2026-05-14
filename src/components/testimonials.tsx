"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { TESTIMONIALS } from "@/lib/constants";

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TestimonialCard({
  text,
  name,
  photoUri,
}: {
  text: string;
  name: string;
  photoUri?: string;
}) {
  return (
    <div className="flex-none w-[380px] bg-[#2a2a2a] p-8 border border-primary/10 rounded-xl select-none">
      <div className="flex text-primary mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="text-lg italic mb-6 text-white leading-relaxed line-clamp-4">
        {text}
      </p>
      <div className="flex items-center gap-3">
        <Image
          src={photoUri ?? ""}
          alt={name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 shrink-0"
        />
        <div>
          <h4 className="text-xl text-white main-title uppercase leading-tight">
            {name}
          </h4>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0, isDown: false });
  const autoScrollRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const resetScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    if (track.scrollLeft >= half) {
      track.style.scrollBehavior = "auto";
      track.scrollLeft = 0;
      requestAnimationFrame(() => {
        track.style.scrollBehavior = "smooth";
      });
    } else if (track.scrollLeft <= 0) {
      track.style.scrollBehavior = "auto";
      track.scrollLeft = half;
      requestAnimationFrame(() => {
        track.style.scrollBehavior = "smooth";
      });
    }
  }, []);

  useEffect(() => {
    const startAuto = () => {
      autoScrollRef.current = setInterval(() => {
        const track = trackRef.current;
        if (!track || dragState.current.isDown) return;
        track.scrollLeft += 0.5;
        resetScroll();
      }, 20);
    };
    startAuto();
    return () => clearInterval(autoScrollRef.current);
  }, [resetScroll]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    dragState.current.isDown = true;
    dragState.current.startX = e.pageX - track.offsetLeft;
    dragState.current.scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = "auto";
    clearInterval(autoScrollRef.current);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!dragState.current.isDown || !track) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = x - dragState.current.startX;
    track.scrollLeft = dragState.current.scrollLeft - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(false);
    dragState.current.isDown = false;
    resetScroll();
    autoScrollRef.current = setInterval(() => {
      const t = trackRef.current;
      if (!t || dragState.current.isDown) return;
      t.scrollLeft += 0.5;
      resetScroll();
    }, 20);
  }, [resetScroll]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current.startX = e.touches[0].pageX - track.offsetLeft;
    dragState.current.scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = "auto";
    clearInterval(autoScrollRef.current);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const track = trackRef.current;
    if (!track) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = x - dragState.current.startX;
    track.scrollLeft = dragState.current.scrollLeft - walk;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    resetScroll();
    autoScrollRef.current = setInterval(() => {
      const t = trackRef.current;
      if (!t || dragState.current.isDown) return;
      t.scrollLeft += 0.5;
      resetScroll();
    }, 20);
  }, [resetScroll]);

  return (
    <section
      className="py-16 overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url("/images/fondo-testimonios.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-[85%] mx-auto">
        <div className="text-center mb-12">
          <span className="font-[family-name:var(--font-inter)] text-primary uppercase subtitle text-sm tracking-widest">
            TESTIMONIOS
          </span>
          <h2 className="text-2xl md:text-4xl text-on-surface mt-4 uppercase main-title">
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
        </div>
        <div className="relative">
          <div
            ref={trackRef}
            className={`flex gap-8 overflow-x-auto w-full no-scrollbar ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {items.map((r, i) => (
              <TestimonialCard key={`${r.name}-${i}`} {...r} />
            ))}
          </div>
          <div className="scroll-gradient-left" />
          <div className="scroll-gradient-right" />
        </div>
      </div>
      <style>{`
        .scroll-gradient-left {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 120px;
          background: linear-gradient(to right, rgba(0,0,0,0.85), transparent);
          pointer-events: none;
          z-index: 2;
        }
        .scroll-gradient-right {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 120px;
          background: linear-gradient(to left, rgba(0,0,0,0.85), transparent);
          pointer-events: none;
          z-index: 2;
        }
        .scroll-gradient-left, .scroll-gradient-right {
          pointer-events: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
