const base = import.meta.env.BASE_URL
const logoUrl = `${base}logo/WhatsApp Image 2026-02-26 at 6.14.39 PM (2).jpeg`

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-studio-white text-studio-slate py-12">
      <div className="container-tight">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="FotoMontajesDumbo"
              className="h-12 w-auto object-contain"
            />
            <span className="font-display text-studio-charcoal text-xl font-semibold tracking-wide">
              FotoMontajesDumbo
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-xs md:text-sm uppercase tracking-[0.2em]">
            <button onClick={() => scrollTo('inicio')} className="hover:text-studio-amber transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollTo('servicios')} className="hover:text-studio-amber transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollTo('galeria')} className="hover:text-studio-amber transition-colors">
              Galería
            </button>
            <button onClick={() => scrollTo('nosotros')} className="hover:text-studio-amber transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollTo('contacto')} className="hover:text-studio-amber transition-colors">
              Contacto
            </button>
          </nav>
          <p className="mt-4 text-center text-xs md:text-sm text-studio-slate">
            © {new Date().getFullYear()} FotoMontajesDumbo · Fotografía, vídeos, álbumes y cuadros decorativos.
          </p>
        </div>
      </div>
    </footer>
  )
}
