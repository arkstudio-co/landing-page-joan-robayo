import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-dvh md:h-[90vh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Hero Tattoo Art"
          fill
          className="object-cover object-[center_30%]"
          src="/images/hero.jpg.png"
          sizes="100vw"
          preload
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-left-overlay" />
      </div>
      <div className="relative z-10 text-left px-4 md:px-16 w-full md:w-1/2 mt-24 md:mt-40">
        <span className="font-[family-name:var(--font-inter)] text-primary mb-2 block subtitle text-sm tracking-widest">
          Especialistas en Realismo, Neotradicional y Fineline
        </span>
        <h1 className="text-4xl md:text-5xl mb-4 text-on-surface headline-shadow uppercase main-title leading-[1.1]">
          TATÚATE CON EXPERTOS
          <br />
          EN MEDELLÍN
        </h1>
        <div className="flex flex-col md:flex-row gap-6 justify-start">
          <a
            href="https://wa.me/573146148297?text=Hola!%20quiero%20cotizar%20mi%20proximo%20tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9CB198] text-black px-10 py-5 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest hover:bg-[#acc8a6] transition-colors inline-block text-center rounded-xl"
          >
            Agenda tu cita gratis
          </a>
          <a
            href="https://wa.me/573146148297?text=Hola!%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold text-gold px-10 py-5 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest hover:bg-gold/10 transition-colors inline-block text-center rounded-xl"
          >
            Walk-in
          </a>
        </div>
      </div>
    </section>
  );
}

