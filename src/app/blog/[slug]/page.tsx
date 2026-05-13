import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { BlogSubscription } from "@/components/blog-subscription";

const ARTICLES = {
  "bases-comportamiento-adecuado-estudio": {
    title: "Bases para un comportamiento adecuado en el estudio",
    category: "Etiqueta & Cultura",
    date: "15 Octubre, 2021",
    readTime: "8 min",
    heroImage: "/images/foto-principal-bases.jpg",
    heroAlt: "Interior de estudio de tatuaje boutique en Medellín con muebles de roble oscuro, sillas vintage de cuero y detalles dorados bajo iluminación dramática",
    bodyImages: [
      {
        src: "/images/bases-1.jpg",
        alt: "Primer plano de la mano de un tatuador profesional dibujando patrones tradicionales intrincados en papel de pergamino de alta calidad",
      },
      {
        src: "/images/bases-2.jpg",
        alt: "Fotografía macro de agujas de tinta para tatuajes y equipo esterilizado dispuesto sobre una superficie reflectante oscura y limpia",
      },
    ],
  },
} as const;

type Slug = keyof typeof ARTICLES;

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug as Slug];
  if (!article) return { title: "Artículo no encontrado" };
  return {
    title: `${article.title} | JoanRobayo Tattoo`,
    description: `Artículo sobre ${article.title.toLowerCase()} en nuestro journal de tatuajes.`,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES[slug as Slug];
  if (!article) {
    return (
      <>
      <Header contactHref="#subscribe" />
      <main className="pt-32 pb-20 text-center">
        <h1 className="font-cinzel text-4xl text-gold">Artículo no encontrado</h1>
        <Link href="/blog" className="text-gray-400 hover:text-gold mt-8 inline-block">Volver al blog</Link>
      </main>
      </>);
  }

  return (
    <>
      <Header contactHref="#subscribe" />
      <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[716px] overflow-hidden mb-section-gap">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          fill
          className="object-cover"
          alt={article.heroAlt}
          src={article.heroImage}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <span className="font-label-caps text-primary tracking-[0.3em] mb-4 uppercase">
            {article.category}
          </span>
          <h1 className="font-cinzel text-headline-lg md:text-headline-xl text-white max-w-4xl leading-tight">
            {article.title}
          </h1>
          <div className="mt-8 flex items-center gap-4 text-white/60 font-label-caps">
            <span>{article.date}</span>
            <span className="w-1 h-1 bg-primary rounded-full" />
            <span>Lectura de {article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="w-[85%] mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16">

          {/* Body Text */}
          <div className="flex-1 space-y-12">
            <div className="font-playfair text-body-lg md:text-2xl italic text-on-surface-variant leading-relaxed">
              Todos los días vemos personas entrar y salir del estudio donde trabajamos, realmente podemos resaltar que la gran mayoría son personas muy educadas, atentas y dispuestas a cumplir las recomendaciones sobre el comportamiento adecuado en la sala.
            </div>

            <div className="font-playfair text-body-lg text-on-surface/90 space-y-8 first-letter:text-7xl first-letter:font-cinzel first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:mt-2">
              <p>Realmente agradecemos esos gestos de amabilidad que los acompañan y que no dan a entender que vivimos en una ciudad bastante amable y comprensible.</p>

              <p>Sin embargo, en este pequeño blog, abordaremos un tema muy relacionado a lo dicho anteriormente, y es el comportamiento en el estudio. Debido a que no hay un código escrito que nos muestre el adecuado comportamiento en una sala de tatuajes, no todas las personas son propicias a acoger las normas regulares dentro de ella.</p>

              <div className="bg-surface-container-low p-10 border-l-4 border-primary italic my-12">
                Siguiendo los consejos que expondremos a continuación, todos podremos disfrutar de una gran experiencia en el estudio, ya seas cliente, tatuador o acompañante.
              </div>

              <h2 className="font-cinzel text-headline-md text-primary pt-8 border-t border-outline-variant/30">Pilares del Respeto Mutuo</h2>

              <p><strong className="font-cinzel text-primary tracking-wider">LA AMABILIDAD</strong> es un pilar fundamental dentro de nuestra sociedad y cultura. Sea amable y educado cuando esté en un estudio de tatuajes. Estoy seguro que de nuestra parte, recibirá un trato amable y respetuoso.</p>

              <p>Si eres <strong className="text-primary">MENOR DE EDAD</strong> evita frecuentar los salones de tatuaje, muy probablemente en este momento, no es el lugar para ti. Por otro lado, si eres adulto, evita traer a algún menor de edad, será indispensable tu responsabilidad en este aspecto.</p>

              <h2 className="font-cinzel text-headline-md text-primary pt-8 border-t border-outline-variant/30">Preparación y Criterio Artístico</h2>

              <p><strong className="text-primary">PIENSA</strong> muy bien que tatuaje quieres hacerte, planifica con tiempo tus referentes y recursos visuales. Llegar con ideas vagas solo generará pérdida de tiempo. Tu tatuador te dará bases más sólidas sobre las cuales trabajar para hacer juntos una gran pieza.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                {article.bodyImages.map((img, i) => (
                  <div key={i} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      fill
                      className="object-cover"
                      alt={img.alt}
                      src={img.src}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>

              <p>Es bueno tener una idea de la parte del cuerpo, el tamaño y el estilo. Trata de no ignorar los consejos profesionales, ya que serán de gran ayuda para obtener los mejores resultados.</p>

              <p><strong className="text-primary uppercase tracking-widest">No te sientas aludido</strong> o incómodo si el tatuador sugiere cambios al diseño. Un profesional tendrá el criterio suficiente para recomendarte lo que es funcional para tu cuerpo.</p>

              <h2 className="font-cinzel text-headline-md text-primary pt-8 border-t border-outline-variant/30">Protocolo de Salud e Higiene</h2>

              <p>Asegúrate de estar aseado y limpio para tu cita. No solo será más fácil tatuarte, sino que también será un bonito gesto de tu parte llegar libre de malos olores.</p>

              <p><strong className="text-primary">NO consumas alcohol</strong> o sustancias psicoactivas antes de tu cita. Puedes alterar el sangrado, aumentar el nivel de dolor e incomodar a tu tatuador.</p>

              <div className="bg-surface-container-highest p-8 rounded-xl border border-primary/10 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">info</span>
                  <span className="font-label-caps">Importante</span>
                </div>
                <ul className="space-y-3 font-body-md list-disc list-inside text-on-surface-variant">
                  <li>La propina es voluntaria y muestra agradecimiento genuino.</li>
                  <li>Sé puntual, es un gesto de buena educación.</li>
                  <li>Informa previamente cualquier condición médica o medicamentos.</li>
                </ul>
              </div>

              <p>Si te sientes <strong className="text-primary">MAREADO</strong>, comunícate inmediatamente. Tu salud está por encima de todo. Es mejor parar por un momento hasta que tu cuerpo esté estable.</p>

              <h2 className="font-cinzel text-headline-md text-primary pt-8 border-t border-outline-variant/30">El Espacio del Estudio</h2>

              <p>Ven a tu cita sin acompañante y evita traer menores de edad. Un estudio no es un lugar adecuado para ellos por los equipos peligrosos y la naturaleza del procedimiento, que puede resultar traumática para un niño.</p>

              <p>Así mismo, <strong className="text-primary">evita llevar mascotas</strong>. Por asepsia y esterilidad, no es el lugar adecuado para ellas, a pesar de nuestro amor por los animales.</p>

              <div className="pt-12 text-center">
                <p className="font-playfair text-xl italic mb-8">Esperamos haber sido de ayuda en este viaje, gracias por leer.</p>
                <div className="inline-flex flex-col items-center gap-6">
                  <a
                    href="https://wa.me/573146148297?text=Hola!%20Quiero%20cotizar%20mi%20nuevo%20tattoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold text-black px-12 py-4 font-cinzel text-xl tracking-widest hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(206,152,97,0.2)]"
                  >
                    Agenda tu cita
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <BlogSubscription />
    </main>
    </>);
}
