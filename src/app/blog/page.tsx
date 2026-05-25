import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogHeader } from "@/components/blog-header";
import { BlogSubscription } from "@/components/blog-subscription";

export const metadata: Metadata = {
  title: "Journal de Arte | Crónicas de Tinta",
  description:
    "Blog de tatuajes en Medellín: cuidados, cultura, estilo de vida y más. Consejos de expertos para tu próximo tattoo.",
  openGraph: {
    title: "Journal de Arte | Crónicas de Tinta",
    description:
      "Blog de tatuajes en Medellín: cuidados, cultura, estilo de vida y más.",
    locale: "es_CO",
    type: "website",
  },
};

const articles = [
  {
    slug: "bases-comportamiento-adecuado-estudio",
    category: "Cultura & Protocolo",
    title: "Bases para un comportamiento adecuado en el estudio",
    excerpt:
      "Este artículo te dará una idea de cómo lograr entre todos un ambiente de respeto y amistad en nuestro estudio...",
    image: "/images/blog-bases.png",
  },
  {
    slug: "consejos-antes-de-hacerte-tattoo",
    category: "Preparación",
    title: "Consejos antes de hacerte un tatuaje",
    excerpt:
      "El ritual comienza antes del primer pinchazo. Aquí te mostramos cómo preparar tu piel y tu mente para una sesión que cambiará tu vida...",
    image: "/images/blog-consejos.png",
  },
  {
    slug: "cuidar-tatuaje-manera-correcta",
    category: "Cuidados",
    title: "Cómo cuidar tu tatuaje de una manera correcta",
    excerpt:
      "Ésta es la guía definitiva para asegurar que tu tattoo sane con la intensidad y precisión original...",
    image: "/images/blog-cuidados.png",
  },
];

export default function BlogPage() {
  return (
    <>
      <BlogHeader />
      <header className="relative h-[819px] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/30 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_90%)] z-10" />
          <Image
            fill
            className="object-cover"
            alt="Interior de estudio de tatuaje boutique en Medellín con muebles de roble oscuro, sillas vintage de cuero y detalles dorados bajo iluminación dramática"
            src="/images/hero-blog.jpg"
            sizes="100vw"
            preload
            quality={90}
          />
        </div>
        <div className="relative z-20 w-[85%] max-w-[1440px] mx-auto text-center">
          <h1 className="text-5xl md:text-7xl leading-none font-[family-name:var(--font-cinzel)] font-bold text-white tracking-tighter mb-6">
            blog
          </h1>
          <div className="w-24 h-px bg-gold mx-auto opacity-50" />
        </div>
      </header>

      <section id="articles" className="py-24 w-[85%] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article) => (
            <article key={article.title} className="group cursor-pointer">
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="overflow-hidden rounded-[15px] mb-6 relative aspect-[4/5]">
                  <Image
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={article.title}
                    src={article.image}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
                <div className="space-y-4">
                  <span className="font-[family-name:var(--font-inter)] text-white text-[0.65rem] tracking-widest uppercase">
                    {article.category}
                  </span>
                  <h2 className="font-[family-name:var(--font-cinzel)] text-2xl text-white group-hover:text-white/80 transition-colors leading-tight">
                    {article.title}
                  </h2>
                  <p className="font-[family-name:var(--font-playfair)] italic text-gray-400 text-lg leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-[family-name:var(--font-inter)] text-[0.7rem] uppercase tracking-widest pt-2">
                    Leer m&aacute;s
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-32 bg-[#121212] border-y border-gold/10">
        <div className="w-[85%] max-w-[1440px] mx-auto text-center max-w-2xl">
          <h3 className="font-[family-name:var(--font-playfair)] italic text-3xl md:text-4xl text-white mb-10 leading-relaxed">
            Transformemos tu idea en un tattoo incre&iacute;ble
          </h3>
          <a
            href="https://wa.me/573146148297?text=Hola!%20quiero%20cotizar%20mi%20proximo%20tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-btn-bg text-btn-text px-10 py-4 font-[family-name:var(--font-inter)] text-[0.8rem] uppercase tracking-[0.2em] hover:bg-btn-bg-hover transition-all shadow-[0_0_30px_rgba(206,152,97,0.2)] inline-block rounded-xl"
          >
            Agenda tu cita
          </a>
        </div>
      </section>

      <BlogSubscription />
    </>
  );
}

