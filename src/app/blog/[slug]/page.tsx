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
  "cuidar-tatuaje-manera-correcta": {
    title: "Cómo cuidar su tatuaje de una manera correcta",
    category: "Cuidados",
    date: "",
    readTime: "",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQFl54lHTAOT1WFnYhgR4TtuDwplmSSjj7mPjYvoK2Ybe3xElcmgUXr301Sd0qW9fBcybMBl4AM6_3-FwJspdn8lzVvMOyBZomw2vZRufbkJOJRBC0L2goWCI8JDsi685HwzVc0QWvOhWpvYpJvTO8pCzrGar1hnMCyEy1Taj-i0u12sgEzJwbsZpz-AP1KIYqCT1ukc2C27j9tU6FEtHRM79jOb-QqkTVjHKB_b6_WgF26bBtQFzHfVadqPqco7tyW6AxU6fWg",
    heroAlt: "A cinematic, low-light shot of a tattoo artist's workstation with sterile equipment and specialized skin balms",
    bodyImages: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC542y30yfY3jODxHSeI0Cy7l_dyQd1SmWspznFUqkZqRwNkJXvbXq29HwiwutNsYH_UwASYXirz86-hRJMsiXL7BRc41DejnPx4bU4FRKIvZpegsKGtWN4UJD_Ddd2ISYwKmPmBWnE1RjKaDOn6ViT8u2MIl64UsQ26dAJLuW9wRQ7Xmq1Fvv4qHdxMEGbbfSfrUraqjUmtu_XuqA2pC3GlZ_t5jwlbop4ex3S32cwBJIo_xhK8YVMHNLOD0EJdMRt9NA01obaw",
        alt: "Close up of a black and grey neotraditional tattoo on an arm, showing clean linework and soft shading",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFT0xlN1PxjXCjRGYLtcgFHAxKReo87Lu7ObYzXqT4-qSI42YrpXHi370iPbTIFmCoRnewvnh5C6I_YBDge-nmA8_-jOhojq-hNZg5YJsKDIEGjgdFAWT1yhugvwrAOsfPSZefrtuLYiGOunJxNj9OcRlL8xD6luU2RR0UpesKGcw85nWiC11_unvkrfoFUn5t2m3ipVMibMHUB8h8Yr5bZPH6EcCcKFS1eG-cYEZAuOID8ugBoiZ367pzTWm1StaAMAv0mRcWXg",
        alt: "A macro shot focusing on the delicate process of cleaning a fresh tattoo with a soft cloth and clear soap",
      },
    ],
  },
  "consejos-antes-de-hacerte-tattoo": {
    title: "Consejos antes de hacerte un tatuaje",
    category: "Preparación",
    date: "",
    readTime: "",
    heroImage: "/images/foto-principal-consejos.jpg",
    heroAlt: "Interior de estudio de tatuaje boutique en Medellín con iluminación cálida y detalles dorados",
    bodyImages: [
      {
        src: "/images/consejos-1.jpg",
        alt: "Close up of a black and grey neotraditional tattoo on an arm, showing clean linework and soft shading",
      },
      {
        src: "/images/consejos-3.jpg",
        alt: "A macro shot focusing on the delicate process of cleaning a fresh tattoo with a soft cloth and clear soap",
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

type Article = (typeof ARTICLES)[Slug];

function ArticleBody({ slug, article }: { slug: string; article: Article }) {
  if (slug === "cuidar-tatuaje-manera-correcta" || slug === "consejos-antes-de-hacerte-tattoo") {
    return (
      <article className="w-[85%] max-w-5xl mx-auto py-20 font-playfair text-lg leading-relaxed text-on-background">
        <div className="mb-16 bg-surface-container-low p-8 rounded-xl border-l-4 border-primary">
          <p className="mb-6 italic">Para comenzar daremos los pasos más basicos de higiene y asepsia para el cuidado de tu nuevo tattoo.</p>
          <ul className="space-y-4">
            {[
              "Preserve el vendaje o apósito puesto por su tatuador, durante las primeras horas después del procedimiento.",
              "Mantenga la zona muy limpia, lavando con poco jabón y abundante agua entre 3 y 4 veces al día.",
              "Use crema hidratante después del tercer día.",
              "No exponga la zona del tattoo al sol.",
              "Evita ademas del sol, la piscina, sauna, turco y en general los lugares húmedos durante el primer mes, por lo menos.",
              "Vista ropa cómoda en la parte del tattoo para evitar el roce de la tela.",
              "No consuma alcohol durante el primer mes despues del tattoo.",
              { text: "No descuide estas recomendaciones durante el primer mes", bold: true },
              "Después de este primer periodo de curación, utilice abundante bloqueador solar.",
            ].map((item, i) => {
              const label = typeof item === "string" ? item : item.text;
              const isBold = typeof item !== "string" && item.bold;
              return (
                <li key={i} className={`flex items-start gap-3 ${isBold ? "mt-4" : ""}`}>
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <span className={isBold ? "font-bold text-primary" : ""}>{label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mb-8">El tiempo que tardará nuestro tatuaje en curar, depende mucho del tamaño, estilo y duración de la sesión realizada, un tatuaje corto (en términos de tiempo) curará más rápido que uno que tarde mas tiempo en realizarse. Todo este proceso de curación se da en cuatro etapas, que te explicaremos a continuación.</p>
        <p className="mb-8">Tus hábitos de limpieza, tanto como los hábitos alimenticios, y de cuidado en general, jugarán un roll muy importante en el proceso. Éste artículo, te advierte de la probabilidad de infecciones o reacciones contrarias del cuerpo, si te surge algún inconveniente, consulta a tu tatuador o médico, o no dudes en escribirnos, nosotros de asesoramos con gusto.</p>
        <p className="mb-12 font-bold text-xl italic text-primary">Lee con atención y sigue paso a paso las recomendaciones.</p>

        <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-[15px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image fill className="object-cover" alt={article.bodyImages[0].alt} src={article.bodyImages[0].src} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-cinzel text-2xl text-primary mb-6 italic">¡ Tu tatuaje no curará en un mes !</h3>
            <p>La parte externa de la piel, conocida como epidermis, después de hacerte tu nuevo tattoo, tardará mas o menos de 2 a 3 semanas en sanar. No creas que cuando esto pase ya terminó el proceso de curación, ya que debajo de la epidermis, el proceso de curación y adaptación es mucho mas lento y tardará más o menos 6 meses en culminar completamente, a continuación, te explicamos por qué.</p>
          </div>
        </div>

        <p className="mb-8">La piel en los tatuajes más grandes tarda más en recuperarse y ciertos factores, como Retirar las costras, no hidratar tu piel con cremas, usar una losión o crema con alcohol o no ponerte bloqueador solar pueden retrasar el proceso de curación y dañar el tattoo como tal.</p>

        <h2 className="font-cinzel text-3xl text-primary font-bold mt-16 mb-8 uppercase tracking-widest">Estas son las etapas reales de curación</h2>
        <p className="mb-12">Para hablar de una curación completa del tatuaje, debemos abordar de principio a fin, lo que sería la sanidad total del tatuaje. En este blog hablaremos de 4 etapas principales para un correcto tratamiento del tattoo. En cada etapa hay una forma de cuidarlo que tiene unos pequeños cambios entre cada etapa.</p>

        <div className="space-y-16">
          {[
            { title: "Primera semana", text: "La primera etapa ya la abordamos a grandes rasgos, es el periodo que se comprende desde el momento en el que se finaliza el tatuaje hasta aproximadamente 6-8 días. No debes olvidar que el tatuaje debe estar vendado durante las primeras horas, si el tatuador no pone un vendaje o apósito, pide que te lo pongan, ya que se podría considerar que tienes una herida y el medio puede infectarla. La piel, naturalmente, se notará enrojecida, debido a que la piel, en ese momento, responde a una lesión. Más adelante comenzará a supurar e inflamarse un poco, tendrás una sensación de ardor y dolor." },
            { title: "Segunda Semana", text: "Esta etapa comprende entre los primeros 6 días y los 15 días después del tattoo. Durante este periodo tendrás picazón y descamación de la primera capa de la piel. No debes rascar la zona y mucho menos arrancar alguna costra, dado el caso que salga. No te preocupes si notas tu piel diferente, ten paciencia, estas pasando por un proceso natural de cicatrización. Hidrata tu piel dado el caso que te pique, aplicando crema puedes aliviar esa sensación." },
            { title: "Tercer y Cuarta Semanas", text: "En esta etapa, tu piel estará reseca y experimentarás picazón fuerte. Todas las señales de enrojecimiento habrán desaparecido, si no es así, consulta a tu tatuador, medico o no dudes en hablarnos, con gusto te brindaremos una asesoría, podría tratarse de una infección." },
          ].map((section, i) => (
            <section key={i}>
              <h3 className="font-cinzel text-2xl text-primary mb-4">{section.title}</h3>
              <p>{section.text}</p>
            </section>
          ))}
          <section>
            <h3 className="font-cinzel text-2xl text-primary mb-4">Entre el segundo y sexto mes</h3>
            <p>La picazón y el enrojecimiento deberían haber disminuido en este punto, y el tatuaje puede parecer completamente curado, aunque es inteligente continuar con el cuidado. La atención a largo plazo del tatuaje incluye mantener la piel hidratada, usar protector solar o ropa protectora contra el sol y mantener limpio el tatuaje. Recuerda que la piscina, el sol y el alcohol son los factores que más perjudican tu tatuaje.</p>
            <p className="mt-4">En este momento puede parecer que tu tattoo ha perdido vivacidad y color, pero esto se debe a que, naturalmente la piel ha formado una capa de piel deshidratada y nueva como respuesta al procedimiento realizado.</p>
          </section>
        </div>

        <div className="my-20 p-1 bg-gradient-to-r from-orange-900/50 via-primary/50 to-orange-900/50 rounded-xl">
          <div className="bg-surface p-12 rounded-lg text-center">
            <h2 className="font-cinzel text-3xl text-primary mb-6">¿Puedo reducir el tiempo de cicatrización del tattoo?</h2>
            <p className="mb-6">No. Debemos armarnos de paciencia y cuidar al máximo nuestra piel. Dicho esto te daremos unos tips para mejorar el procedimiento, lee con atención y sigue paso a paso las recomendaciones adicionales</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-20">
          <div>
            <h3 className="font-cinzel text-xl text-primary mb-4">Protector Solar</h3>
            <p>Los rayos Uv es uno de los factores más dañinos para nuestra piel, cuanto más si se trata de un tattoo recién hecho. Puede entre otras cosas, bajar los tonos y colores del tattoo. Aplica siempre protector solar y utiliza ropa cómoda para que no se adhiera a la piel herida.</p>
          </div>
          <div>
            <h3 className="font-cinzel text-xl text-primary mb-4">Apósitos o vendaje</h3>
            <p>No pongas apósito o vendaje después de las primeras 24 horas de hecho tu tatuaje. Tu piel necesita oxigenarse y el vendaje es únicamente para evitar infecciones inmediatas o bacterias del ambiente que puedan afectar tu piel. Vendarlo después de este tiempo puede generar humedad adicional, y falta de oxigeno lo que puede retrasar el proceso de curación además puede abrir heridas entre otras cosas.</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-cinzel text-xl text-primary mb-4">Lavar muy bien</h3>
            <p className="mb-4">Para lavar la zona debes utilizar agua fría. No uses agua caliente, no uses agua tibia, ésta puede herir mucho más la piel y abrir los poros. Usa agua limpia o estéril y lava con poco jabón mínimo 3 veces al día.</p>
            <p>Antes de comenzar a lavar, asegúrate que tus manos están muy limpias. Procura lavar con jabón neutro sin olor, libre de alcohol. Utiliza abundante agua y sécalo con una toalla limpia, suavemente. Después de esto déjalo un momento sin crema.</p>
          </div>
          <div className="relative h-[300px] rounded-[15px] overflow-hidden">
            <Image fill className="object-cover" alt={article.bodyImages[1].alt} src={article.bodyImages[1].src} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <h3 className="font-cinzel text-xl text-primary mb-4">Uso de la crema adecuada</h3>
            <p className="mb-4">No uses productos hechos a base de petróleo, como la vaselina, o productos muy espesos, ya que se hará muy difícil remover la crema en cada lavada y esto hará que se acumule la crema en el tattoo.</p>
            <p>Usa productos que contengan vitamina A y D la primera semana. Después puedes cambiarla a una crema hidratante más ligera libre de alcohol y fragancias.</p>
          </div>
          <div>
            <h3 className="font-cinzel text-xl text-primary mb-4">No rasques y no arranques la costra</h3>
            <p>Evita las costras lavando muy bien la zona del tattoo. Si estas aparecen, no las arranques, la formación de costras es una parte normal del proceso de curación, y arrancárselas, puede retrasar el proceso de curación, además de afectar la integridad del tatuaje o provocar una cicatrización incorrecta.</p>
          </div>
          <div>
            <h3 className="font-cinzel text-xl text-primary mb-4">No utilices productos con fragancia</h3>
            <p>Es importante resaltar que debes evitar completamente el uso de productos con olores fuertes, tanto el jabón como la crema humectante. Incluso el shampoo, un gel de baño o un acondicionador que utilices podría afectar la zona.</p>
          </div>
        </div>

        <section className="mt-24 p-12 bg-surface-container-high border border-primary/20 rounded-xl">
          <h2 className="font-cinzel text-3xl text-primary mb-8 border-b border-primary/20 pb-4">¿Está tu tattoo curando correctamente?</h2>
          <div className="space-y-6">
            <p>Si experimentas fiebre o escalofríos puede ser un indicador de infección. Debes consultar a tu médico o en su defecto a tu tatuador.</p>
            <p>Si el enrojecimiento en la zona se prolonga por mucho tiempo, de forma persistente, es una mala señal, debes seguir los consejos de curación, paso a paso, que dimos anteriormente.</p>
            <p>Si vez algún signo de supuración o pus después de los primeros 3 días, es una mala señal, tu tatuaje está experimentando una infección. Debes consultar a tu médico o en su defecto a tu tatuador.</p>
            <p>Si tu piel experimenta una inflamación o hinchazón prolongada y persistente, es una mala señal. Es normal los primeros días. Después de esto, podría tratarse de una reacción alérgica a algunos pigmentos o una infección. Debes consultar a tu médico o en su defecto a tu tatuador.</p>
            <p>Si estás experimentando una picazón intensa, extraña, prolongada y persistente, es una mala señal. Es normal durante el primer mes. Después de esto, podría tratarse de una reacción alérgica a algunos pigmentos o una infección. Debes consultar a tu médico o a tu tatuador.</p>
          </div>
        </section>


      </article>
    );
  }

  return (
    <article className="w-[85%] mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row gap-16">
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
                  <Image fill className="object-cover" alt={img.alt} src={img.src} sizes="(max-width: 768px) 100vw, 50vw" />
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
  );
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
          {article.category && (
            <span className="font-label-caps text-primary tracking-[0.3em] mb-4 uppercase">
              {article.category}
            </span>
          )}
          <h1 className="font-cinzel text-headline-lg md:text-headline-xl text-white max-w-4xl leading-tight">
            {article.title}
          </h1>
          {article.date && (
            <div className="mt-8 flex items-center gap-4 text-white/60 font-label-caps">
              <span>{article.date}</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span>Lectura de {article.readTime}</span>
            </div>
          )}
        </div>
      </section>

      <ArticleBody slug={slug} article={article} />

      <BlogSubscription />
    </main>
    </>);
}
