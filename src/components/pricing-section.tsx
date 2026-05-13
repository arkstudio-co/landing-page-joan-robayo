import { PRICING_TIERS } from "@/lib/constants";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l4 4 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function PricingSection() {
  return (
    <section className="py-24 px-4 textured-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-widest font-[family-name:var(--font-inter)]">
            Inversión
          </span>
          <h2 className="text-3xl md:text-4xl main-title text-on-surface mt-3 uppercase">
            Precios transparentes
          </h2>
          <p className="text-on-surface/60 mt-4 max-w-2xl mx-auto font-[family-name:var(--font-manrope)]">
            Todos los precios incluyen diseño personalizado y asesoría. El precio final depende del nivel de detalle.
          </p>
        </div>
        <div className="max-w-md mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.title}
              className="relative rounded-lg border border-gold bg-gold/5 p-8 flex flex-col text-center"
            >
              <div className="mb-6">
                <h3 className="text-xl main-title text-on-surface uppercase mb-1">{tier.title}</h3>
                <p className="text-on-surface/50 text-sm font-[family-name:var(--font-manrope)]">
                  {tier.description}
                </p>
              </div>
              <div className="mb-8">
                <span className="text-3xl font-bold main-title text-gold">{tier.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-3 text-on-surface/70 text-sm font-[family-name:var(--font-manrope)]">
                    <span className="text-gold shrink-0">
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/573146148297?text=Hola!%20quiero%20cotizar%20un%20tatuaje%20tama%C3%B1o%20${encodeURIComponent(tier.title.toLowerCase())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gold text-black py-4 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest hover:bg-[#e0ab75] transition-colors"
              >
                Cotizar {tier.title.toLowerCase()}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
