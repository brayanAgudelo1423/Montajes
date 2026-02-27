export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToGallery = () => {
    document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 bg-studio-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-radial-gradient from-white via-white to-white" />
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-studio-amber/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-studio-gold/10 blur-3xl" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:140px_140px]" />
        </div>
      </div>
      <div className="relative container-tight text-center text-studio-charcoal py-20">
        <p className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-studio-white border border-studio-amber/70 font-display text-studio-amber text-xs md:text-sm tracking-[0.3em] uppercase mb-5 animate-fade-in">
          Foto Montajes
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 animate-slide-up">
          Capturamos tus momentos
          <br />
          <span className="text-studio-amber">con elegancia y detalle</span>
        </h1>
        <p className="max-w-2xl mx-auto text-studio-slate text-lg md:text-xl mb-10 animate-slide-up">
          Bodas, quince años, eventos y retratos con estética de revista. Fotografía, vídeos, álbumes y cuadros
          decorativos. Iluminación cuidada, edición profesional y acompañamiento cercano en cada etapa.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-studio-amber hover:bg-studio-gold text-studio-black font-semibold px-8 py-4 rounded-sm transition-colors duration-200 uppercase tracking-wide"
          >
            Solicitar presupuesto
          </button>
          <button
            onClick={scrollToGallery}
            className="inline-flex items-center gap-2 bg-studio-charcoal hover:bg-studio-black text-studio-white font-semibold px-8 py-4 rounded-sm border-2 border-studio-charcoal hover:border-studio-amber transition-colors duration-200 uppercase tracking-wide"
          >
            Ver portafolio
          </button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-studio-slate">
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl text-studio-amber">30+</span>
            <span>Años de experiencia</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl text-studio-amber">200+</span>
            <span>Eventos fotografiados</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl text-studio-amber">100%</span>
            <span>Clientes recomendando</span>
          </div>
        </div>
      </div>
    </section>
  )
}
