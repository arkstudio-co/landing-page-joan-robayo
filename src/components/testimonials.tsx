import { TESTIMONIALS } from "@/lib/constants";

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TestimonialCard({
  text,
  name,
  role,
  rating,
}: {
  text: string;
  name: string;
  role: string;
  rating: number;
}) {
  return (
    <div className="flex-none w-[450px] bg-black p-10 border border-primary/5 snap-center">
      <div className="flex text-primary mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="text-xl italic mb-8 subtitle leading-relaxed">
        {text}
      </p>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xl">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-2xl text-on-surface main-title uppercase">
            {name}
          </h4>
          <span className="text-xs uppercase tracking-widest text-gold">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      className="py-32 overflow-hidden"
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
          <h2 className="text-6xl text-on-surface mt-4 uppercase main-title">
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
