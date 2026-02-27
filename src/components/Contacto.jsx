import { useState } from 'react'

const WHATSAPP_NUMBER = '573145032543'

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const [tipo, setTipo] = useState('Matrimonio')
  const [fecha, setFecha] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const baseText = `Hola, soy ${nombre || 'un cliente'}. Me gustaría solicitar información sobre una sesión de ${tipo}${
      fecha ? ` para la fecha ${fecha}` : ''
    }. ${mensaje || ''}`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(baseText)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="section-padding bg-studio-white">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-display text-studio-amber text-lg tracking-[0.2em] uppercase mb-3">
              Contacto
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-studio-charcoal mb-4">
              ¿Listo para tu siguiente evento?
            </h2>
            <p className="text-studio-slate text-lg">
              Cuéntanos tu evento o sesión —fotografía, vídeo, álbum o cuadros— y te enviamos un presupuesto
              sin compromiso por WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-[3fr,2fr] gap-10 items-start">
            <form
              onSubmit={handleSubmit}
              className="bg-studio-white border border-studio-mist rounded-sm p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="space-y-1">
                <label htmlFor="nombre" className="block text-sm font-medium text-studio-charcoal">
                  Nombre y apellidos
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full border border-studio-mist rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-studio-amber focus:border-studio-amber bg-studio-cream/40"
                  placeholder="Cómo debemos llamarte"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="tipo" className="block text-sm font-medium text-studio-charcoal">
                  Tipo de sesión o evento
                </label>
                <select
                  id="tipo"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="w-full border border-studio-mist rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-studio-amber focus:border-studio-amber bg-studio-cream/40"
                >
                  <option>Matrimonio</option>
                  <option>Quince años</option>
                  <option>Bautizo / Comunión</option>
                  <option>Evento social</option>
                  <option>Evento corporativo</option>
                  <option>Sesión familiar</option>
                  <option>Retrato profesional</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="fecha" className="block text-sm font-medium text-studio-charcoal">
                  Fecha aproximada
                </label>
                <input
                  id="fecha"
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  className="w-full border border-studio-mist rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-studio-amber focus:border-studio-amber bg-studio-cream/40"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="mensaje" className="block text-sm font-medium text-studio-charcoal">
                  Detalles (lugar, horario, ideas)
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="w-full border border-studio-mist rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-studio-amber focus:border-studio-amber bg-studio-cream/40 resize-none"
                  placeholder="Cuéntanos un poco más sobre lo que tienes en mente"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-sm transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar a WhatsApp
              </button>
            </form>

            <div className="space-y-4 text-sm text-studio-slate">
              <div className="bg-studio-cream border border-studio-mist rounded-sm p-4">
                <p className="font-display text-studio-amber text-lg mb-1">Horarios</p>
                <p>Lunes a sábado, 9:00 a.m. – 7:00 p.m.</p>
                <p className="mt-1 text-xs text-studio-slate">
                  Sesiones en domingo y festivos bajo reserva anticipada.
                </p>
              </div>
              <div className="bg-studio-cream border border-studio-mist rounded-sm p-4">
                <p className="font-display text-studio-amber text-lg mb-1">Ubicación</p>
                <p>Sesiones en interior y exterior, siempre con cita previa.</p>
              </div>
              <div className="bg-studio-cream border border-studio-mist rounded-sm p-4">
                <p className="font-display text-studio-amber text-lg mb-1">Tiempo de respuesta</p>
                <p>Respondemos normalmente en menos de 24 horas.</p>
              </div>
              <a
                href={`mailto:contacto@fotomontajesdumbo.com`}
                className="inline-flex items-center gap-2 text-sm link-amber"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Prefiero escribir un correo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
