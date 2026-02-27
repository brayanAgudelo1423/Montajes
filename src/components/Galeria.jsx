import { useState } from 'react'
import { fotosGallery } from '../data/fotos'

const base = import.meta.env.BASE_URL

export default function Galeria() {
  const [lightbox, setLightbox] = useState(null)

  const getSrc = (filename) => `${base}Fotos/${encodeURIComponent(filename)}`

  return (
    <section id="galeria" className="section-padding bg-studio-white">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-display text-studio-amber text-lg tracking-[0.2em] uppercase mb-3">
            Galería
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-studio-charcoal mb-4">
            Nuestro trabajo
          </h2>
          <p className="text-studio-slate">
            Una selección de nuestro trabajo: bodas, quince años, eventos y sesiones. Cada imagen con luz,
            composición y edición profesionales.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
          {fotosGallery.map((filename, i) => (
            <button
              key={i}
              type="button"
              className="group relative aspect-square rounded-sm overflow-hidden border border-studio-mist/60 bg-studio-white focus:outline-none focus:ring-2 focus:ring-studio-amber focus:ring-offset-2 focus:ring-offset-studio-white"
              onClick={() => setLightbox(filename)}
            >
              <img
                src={getSrc(filename)}
                alt={`Trabajo profesional ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading={i < 24 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between text-xs text-studio-mist/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Ver detalle</span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-studio-amber/80 text-studio-black text-xs">
                  ⬈
                </span>
              </div>
            </button>
          ))}
        </div>
        <p className="mt-6 text-center text-xs tracking-[0.3em] uppercase text-studio-slate/80">
          Más fotos disponibles en tu sesión personalizada
        </p>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-studio-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Ver imagen"
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getSrc(lightbox)}
              alt="Ampliada"
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-sm"
            />
            <button
              type="button"
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-studio-white/90 border border-studio-mist/80 text-studio-charcoal shadow-md hover:bg-studio-amber hover:text-studio-black hover:border-studio-amber transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setLightbox(null)
              }}
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
