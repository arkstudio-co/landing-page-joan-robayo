"use client";

import { useRef, useEffect } from "react";

export function TattooCulture() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      play();
    } else {
      video.addEventListener("canplay", play, { once: true });
    }

    const onInteraction = () => {
      play();
    };
    document.addEventListener("touchstart", onInteraction, { once: true });
    document.addEventListener("click", onInteraction, { once: true });

    return () => {
      document.removeEventListener("touchstart", onInteraction);
      document.removeEventListener("click", onInteraction);
    };
  }, []);

  return (
    <section className="w-full flex flex-col md:flex-row items-stretch bg-black overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-6 md:p-12 lg:p-24">
        <h2 className="main-title text-2xl md:text-4xl text-on-surface uppercase mb-8 leading-tight">
          DONDE EL TATUAJE SE CONVIERTE EN CULTURA
        </h2>
        <p className="text-white text-xl md:text-2xl leading-relaxed max-w-lg">
          Si estás en Medellín y buscas un lugar seguro, atención personalizada y un tattoo de calidad, escríbenos y cotiza tu tattoo.
        </p>
      </div>
      <div className="w-full md:w-1/2 relative aspect-square overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/videos/videotattoojoan-mp4.mp4" type="video/mp4" />
          <p className="text-white p-4">
            Tu navegador no soporta la reproducción de video.
          </p>
        </video>
        <div className="absolute inset-0 bg-black/20 grayscale" />
      </div>
    </section>
  );
}
