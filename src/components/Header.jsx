import { useState } from 'react'

const base = import.meta.env.BASE_URL
const logoUrl = `${base}logo/WhatsApp Image 2026-02-26 at 6.14.39 PM (2).jpeg`

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'galeria', label: 'Galería' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-studio-white/95 backdrop-blur-sm">
      <div className="container-tight flex items-center justify-between h-16 md:h-20">
        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('inicio') }} className="flex items-center gap-2 shrink-0">
          <img
            src={logoUrl}
            alt="FotoMontajesDumbo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-body text-sm font-medium text-studio-charcoal hover:text-studio-amber transition-colors uppercase tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden p-2 text-studio-charcoal"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-studio-white border-b border-studio-mist py-4">
          <div className="container-tight flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-2 font-body font-medium text-studio-charcoal hover:text-studio-amber uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
