import Image from "next/image";
import { STYLES } from "@/lib/constants";

function StyleCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="group relative overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          alt={title}
          fill
          className="object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out rounded-[15px]"
          src={image}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-8 border-t border-primary/10 text-center">
        <h3 className="text-2xl md:text-4xl text-primary main-title uppercase">
          {title}
        </h3>
      </div>
    </div>
  );
}

export function StylesSection() {
  return (
    <section className="pt-[5rem] pb-[3.5rem] max-w-[85%] mx-auto textured-bg">
      <div className="mb-12 border-l-4 border-primary pl-8">
        <span className="font-[family-name:var(--font-inter)] text-primary subtitle text-sm uppercase tracking-widest">
          NUESTROS ESTILOS
        </span>
        <h2 className="text-4xl md:text-6xl text-on-surface mt-2 uppercase main-title">
          TATUAJES SÓLIDOS Y DURADEROS
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {STYLES.map((style) => (
          <StyleCard key={style.title} title={style.title} image={style.image} />
        ))}
      </div>
    </section>
  );
}
