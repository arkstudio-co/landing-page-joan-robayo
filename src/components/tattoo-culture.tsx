export function TattooCulture() {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch bg-black overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-12 lg:p-24 aspect-square">
        <h2 className="main-title text-4xl md:text-5xl lg:text-6xl text-on-surface uppercase mb-8 leading-tight">
          DONDE EL TATUAJE SE CONVIERTE EN CULTURA
        </h2>
        <p className="subtitle text-xl md:text-2xl leading-relaxed max-w-lg">
          si estas en medellín y buscas un lugar seguro, atención personalizada y un tattoo de calidad, escribenos y cotiza tu tattoo.
        </p>
      </div>
      <div className="w-full md:w-1/2 relative aspect-square">
        <video
          autoPlay
          className="w-full h-full object-cover grayscale"
          loop
          muted
          playsInline
        >
          <source src="/videos/videotattoojoan.mov" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
}
