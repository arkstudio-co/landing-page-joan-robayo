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
  const ITEM_GAP = 32;
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const offsetRef = useRef(0);
  const halfRef = useRef(0);
  const DRAG_THRESHOLD = 8;

  const dragState = useRef({
    startX: 0,
    startOffset: 0,
    isDown: false,
    isTouch: false,
    moved: false,
  });
  const animFrameRef = useRef<number>(0);

  const lastTimeRef = useRef(0);

  const applyOffset = useCallback(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      halfRef.current = track.scrollWidth / 2;
    }
    const tick = (now: number) => {
      if (!dragState.current.isDown) {
        const dt = lastTimeRef.current ? (now - lastTimeRef.current) / 1000 : 0;
        lastTimeRef.current = now;
        offsetRef.current -= 30 * dt;
        if (halfRef.current > 0) {
          if (offsetRef.current <= -halfRef.current) {
            offsetRef.current += halfRef.current;
          }
        }
        applyOffset();
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };
    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [applyOffset]);

  const CARD_WIDTH = 380 + ITEM_GAP;

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      offsetRef.current -= CARD_WIDTH;
      if (halfRef.current > 0 && offsetRef.current <= -halfRef.current) {
        offsetRef.current += halfRef.current;
      }
      applyOffset();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      offsetRef.current += CARD_WIDTH;
      if (halfRef.current > 0 && offsetRef.current > 0) {
        offsetRef.current -= halfRef.current;
      }
      applyOffset();
    }
  }, [applyOffset]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (dragState.current.isTouch) return;
    dragState.current.isDown = true;
    dragState.current.startX = e.pageX;
    dragState.current.startOffset = offsetRef.current;
    dragState.current.moved = false;
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragState.current.isDown || dragState.current.isTouch) return;
    e.preventDefault();
    const delta = e.pageX - dragState.current.startX;
    if (!dragState.current.moved && Math.abs(delta) < DRAG_THRESHOLD) return;
    dragState.current.moved = true;
    offsetRef.current = dragState.current.startOffset + delta;
    applyOffset();
  }, [applyOffset]);

  const handleMouseUp = useCallback(() => {
    if (dragState.current.isTouch) return;
    dragState.current.isDown = false;
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (dragState.current.isTouch) return;
    dragState.current.isDown = false;
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    dragState.current.isTouch = true;
    dragState.current.isDown = true;
    dragState.current.startX = e.touches[0].pageX;
    dragState.current.startOffset = offsetRef.current;
    dragState.current.moved = false;
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!dragState.current.isDown) return;
    const delta = e.touches[0].pageX - dragState.current.startX;
    if (!dragState.current.moved && Math.abs(delta) < DRAG_THRESHOLD) return;
    dragState.current.moved = true;
    offsetRef.current = dragState.current.startOffset + delta;
    applyOffset();
  }, [applyOffset]);

  const handleTouchEnd = useCallback(() => {
    dragState.current.isDown = false;
    setIsDragging(false);
    setTimeout(() => {
      dragState.current.isTouch = false;
    }, 400);
  }, []);

  return (
    <section
      className="py-16 overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url("/images/fondo-testimonios.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
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
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className={`flex gap-8 will-change-transform ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{ transform: "translateX(0px)", touchAction: "pan-y" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Testimonios de clientes"
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
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
