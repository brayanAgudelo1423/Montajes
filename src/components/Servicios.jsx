const servicios = [
  {
    title: 'Matrimonios',
    description:
      'Cobertura completa del día: preparativos, ceremonia, recepción y sesión de pareja. Reportaje elegante y natural que contarás una y otra vez.',
    icon: '💍',
  },
  {
    title: 'Quince años',
    description:
      'Desde el vals hasta la fiesta. Capturamos la emoción, el vestido y los detalles que hacen único este día.',
    icon: '👑',
  },
  {
    title: 'Eventos sociales y corporativos',
    description:
      'Cumpleaños, aniversarios, inauguraciones y eventos de empresa con una cobertura discreta y profesional.',
    icon: '🎉',
  },
  {
    title: 'Confirmaciones y primeras comuniones',
    description: 'Momentos religiosos y familiares con el respeto y la calidez que merecen.',
    icon: '⛪',
  },
  {
    title: 'Bautizos y baby shower',
    description:
      'El primer gran día de tu bebé: decoración, detalles y abrazos en imágenes llenas de ternura.',
    icon: '👶',
  },
  {
    title: 'Sesiones familiares',
    description:
      'Sesiones en estudio o exteriores. Retratos que reflejan la personalidad y el vínculo de tu familia.',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    title: 'Retratos profesionales',
    description:
      'Fotos para hojas de vida, LinkedIn y redes profesionales: fondo limpio, iluminación cuidada y expresión segura.',
    icon: '📸',
  },
  {
    title: 'Books y sesiones creativas',
    description:
      'Books personales, sesiones de moda, fotos para artistas y contenido visual para redes sociales.',
    icon: '✨',
  },
  {
    title: 'Fotografía de producto',
    description:
      'Imágenes claras y atractivas para catálogos, tiendas online y campañas publicitarias.',
    icon: '🛍️',
  },
  {
    title: 'Álbumes, vídeos y cuadros decorativos',
    description:
      'Álbumes de lujo, vídeos de evento y cuadros decorativos de alta calidad para que tus recuerdos luzcan en casa.',
    icon: '🖼️',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="section-padding bg-studio-white">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-display text-studio-amber text-lg tracking-[0.2em] uppercase mb-3">
            Servicios
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-studio-charcoal mb-4">
            Lo que hacemos por ti
          </h2>
          <p className="text-studio-slate text-lg">
            Más de 30 años de experiencia. Fotografía, vídeos, álbumes y cuadros decorativos con un estilo
            elegante y cuidado.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {servicios.map((s, i) => (
            <article
              key={i}
              className="group relative rounded-sm bg-studio-white shadow-sm p-6 md:p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
            >
              <div className="h-full">
                <span className="text-3xl mb-4 block" aria-hidden>
                  {s.icon}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-studio-charcoal mb-3">
                  {s.title}
                </h3>
                <p className="text-studio-slate leading-relaxed">
                  {s.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
