import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

function StepIcon({ step }: { step: number }) {
  const icons: Record<number, React.ReactNode> = {
    1: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    2: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    3: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L36 12v16L20 36 4 28V12L20 4z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };
  return icons[step] || null;
}

export function HowItWorks() {
  return (
    <section className="py-24 px-4 textured-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-widest font-[family-name:var(--font-inter)]">
            Así funciona
          </span>
          <h2 className="text-2xl md:text-4xl main-title text-on-surface mt-3 uppercase">
            Tu tatuaje en 3 pasos
          </h2>
          <p className="text-on-surface/60 mt-4 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
            Desde tu primera idea hasta el resultado final, te acompañamos en todo el proceso.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <div key={item.step} className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="text-gold">
                  <StepIcon step={item.step} />
                </div>
                <span className="ml-3 text-5xl font-bold text-gold/20 main-title">
                  {String(item.step).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-3 main-title uppercase">
                {item.title}
              </h3>
              <p className="text-on-surface/60 leading-relaxed font-[family-name:var(--font-inter)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
