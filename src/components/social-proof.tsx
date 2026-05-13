import { SOCIAL_PROOF_STATS } from "@/lib/constants";

export function SocialProof() {
  return (
    <section className="py-20 px-4 bg-surface border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-gold text-sm uppercase tracking-widest font-[family-name:var(--font-inter)] mb-10">
          Confianza que respalda nuestro trabajo
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {SOCIAL_PROOF_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold main-title text-gold mb-2">
                {stat.number}
              </div>

              <div className="text-on-surface/60 text-sm uppercase tracking-wider font-[family-name:var(--font-inter)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
