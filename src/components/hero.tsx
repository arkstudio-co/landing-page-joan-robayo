import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Hero Tattoo Art"
          fill
          className="object-cover"
          src="/images/hero.jpg.png"
          sizes="100vw"
          preload
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-left-overlay" />
      </div>
      <div className="relative z-10 text-center px-4 md:px-16 max-w-5xl mt-28 md:mt-48">
        <span className="font-[family-name:var(--font-inter)] text-primary mb-2 block subtitle text-sm tracking-widest">
          Especialistas en Realismo, Neotradicional y Fineline.
        </span>
        <h1 className="text-4xl md:text-6xl mb-6 text-on-surface headline-shadow uppercase main-title leading-[1.1]">
          TATÚATE CON EXPERTOS
          <br />
          EN MEDELLÍN
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-12">
          <a
            href="https://wa.me/573146148297?text=Hola!%20quiero%20cotizar%20mi%20proximo%20tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-black px-10 py-5 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest hover:bg-[#e0ab75] transition-colors inline-block"
          >
            Agenda tu cita
          </a>
          <a
            href="https://wa.me/573146148297?text=Hola!%20voy%20en%20camino%20a%20tu%20estudio"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold text-gold px-10 py-5 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest hover:bg-gold/10 transition-colors inline-block"
          >
            Walk-ins
          </a>
        </div>
      </div>
    </section>
  );
}
