interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  title,
  description,
  buttonText = "Agenda tu cita gratis",
  buttonHref = "https://wa.me/573146148297?text=Hola!%20quiero%20cotizar%20mi%20proximo%20tattoo",
}: CTASectionProps) {
  return (
    <section className="py-24 px-4 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl main-title text-on-surface uppercase mb-4">
          {title}
        </h2>
        <p className="text-on-surface/60 max-w-2xl mx-auto mb-10 font-[family-name:var(--font-manrope)] leading-relaxed">
          {description}
        </p>
        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-black px-12 py-5 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest hover:bg-[#e0ab75] transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
