"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { PORTFOLIO_IMAGES } from "@/lib/constants";

const ITEM_WIDTH = 375;
const GAP = 16;
const STEP = ITEM_WIDTH + GAP;
const SET_WIDTH = PORTFOLIO_IMAGES.length * STEP;
const items = [...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES];

export function PortfolioCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const offsetRef = useRef(0);
  const animFrameRef = useRef(0);
  const lastTimeRef = useRef(0);
  const DRAG_THRESHOLD = 8;

  const dragState = useRef({
    startX: 0,
    startOffset: 0,
    isDown: false,
    isTouch: false,
    moved: false,
  });

  const CARD_STEP = ITEM_WIDTH + GAP;

  const applyOffset = useCallback(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
  }, []);

  useEffect(() => {
    offsetRef.current = -SET_WIDTH;
    applyOffset();

    const tick = (now: number) => {
      if (!dragState.current.isDown) {
        const dt = lastTimeRef.current ? (now - lastTimeRef.current) / 1000 : 0;
        lastTimeRef.current = now;

        offsetRef.current -= 30 * dt;

        if (offsetRef.current <= -SET_WIDTH * 2) {
          offsetRef.current += SET_WIDTH;
        } else if (offsetRef.current > 0) {
          offsetRef.current -= SET_WIDTH;
        }

        applyOffset();
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
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

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      offsetRef.current -= CARD_STEP;
      if (offsetRef.current <= -SET_WIDTH * 2) {
        offsetRef.current += SET_WIDTH;
      }
      applyOffset();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      offsetRef.current += CARD_STEP;
      if (offsetRef.current > 0) {
        offsetRef.current -= SET_WIDTH;
      }
      applyOffset();
    }
  }, [applyOffset]);

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
      <div ref={containerRef} className="relative select-none max-w-[90%] mx-auto overflow-hidden">
        <div
          ref={trackRef}
          className={`flex gap-4 will-change-transform ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ touchAction: "pan-y" }}
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
            aria-label="Portafolio de trabajos"
          >
            {items.map((src, i) => (
            <div
              key={i}
              className="flex-none w-[375px] h-[525px] relative"
            >
              <Image
                alt={`Work ${(i % PORTFOLIO_IMAGES.length) + 1}`}
                fill
                className="object-cover shadow-xl rounded-xl pointer-events-none"
                src={src}
                sizes="375px"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="https://wa.me/573146148297?text=Hola!%20quiero%20agendar%20una%20asesor%C3%ADa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-btn-bg text-btn-text px-12 py-5 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest hover:bg-btn-bg-hover transition-all transform hover:scale-105 active:scale-95 shadow-lg inline-block rounded-xl"
        >
          Agenda una asesoría
        </a>
      </div>
    </section>
  );
}
