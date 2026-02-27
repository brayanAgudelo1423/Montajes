const base = import.meta.env.BASE_URL
const logoUrl = `${base}logo/WhatsApp Image 2026-02-26 at 6.14.39 PM (2).jpeg`

export default function SobreNosotros() {
  return (
    <section id="nosotros" className="section-padding bg-studio-white">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative inline-flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-studio-amber/40 via-studio-gold/10 to-studio-mist/60 blur-2xl opacity-70" />
              <div className="relative rounded-full bg-studio-cream/90 border border-studio-mist/70 p-4">
                <img
                  src={logoUrl}
                  alt="Logo FotoMontajesDumbo"
                  className="max-h-64 w-auto object-contain rounded-full"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-studio-cream text-xs tracking-[0.3em] uppercase text-studio-amber mb-4">
              Nosotros
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-studio-charcoal mb-4">
              FotoMontajesDumbo
            </h2>
            <p className="text-studio-slate leading-relaxed mb-4">
              Con más de 30 años de experiencia, somos un estudio especializado en fotografía y montajes
              profesionales: bodas, quince años, bautizos, comuniones, eventos y sesiones familiares con una
              estética limpia y elegante.
            </p>
            <p className="text-studio-slate leading-relaxed mb-4">
              Ofrecemos además álbumes de lujo, vídeos de evento y cuadros decorativos de alta calidad. Cuidamos
              la iluminación, el color y cada detalle de edición para que tus fotos se vean atemporales y listas
              para imprimir, compartir o enmarcar. Retratos profesionales para hojas de vida y proyectos
              corporativos.
            </p>
            <p className="text-studio-slate leading-relaxed mb-6">
              Trabajamos de forma cercana, asesorándote en poses, vestuario y horarios para que disfrutes la
              sesión tanto como el resultado final.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-display text-studio-amber text-xl">Iluminación</p>
                <p className="text-studio-slate">Equipos de estudio y luz natural controlada.</p>
              </div>
              <div>
                <p className="font-display text-studio-amber text-xl">Edición</p>
                <p className="text-studio-slate">Retoque fino que respeta tu esencia.</p>
              </div>
              <div>
                <p className="font-display text-studio-amber text-xl">Entrega</p>
                <p className="text-studio-slate">Galerías digitales, álbumes, vídeos y cuadros de alta calidad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
