import { useEffect, useState } from 'react'
import Logo from './Logo'

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#aulas-abiertas', label: 'Aulas Abiertas' },
  { href: '#orientacion', label: 'Orientación' },
  { href: '#contacto', label: 'Participar' },
]

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sync = () => setExpanded(window.scrollY > Math.min(160, window.innerHeight * 0.16))
    sync()
    window.addEventListener('scroll', sync, { passive: true })
    return () => window.removeEventListener('scroll', sync)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const isExpanded = expanded || menuOpen

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <nav
          aria-label="Navegación principal"
          className={`relative flex h-[4.6rem] items-center overflow-visible border border-white/20 bg-brand-deep/90 shadow-floating backdrop-blur-xl transition-[width,border-radius,padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isExpanded
              ? 'w-full rounded-[2.3rem] px-3 sm:px-4'
              : 'w-[4.6rem] rounded-full px-[0.78rem]'
          }`}
        >
          <a href="#inicio" className="flex flex-none items-center" aria-label="UCALP Abierta, volver al inicio">
            <Logo compact={!isExpanded} light />
          </a>

          <div
            className={`flex min-w-0 flex-1 items-center overflow-hidden transition-[max-width,opacity] duration-500 ${
              isExpanded ? 'max-w-[80rem] opacity-100' : 'pointer-events-none max-w-0 opacity-0'
            }`}
          >
            <div className="hidden min-w-0 flex-1 items-center justify-center gap-5 px-5 text-[0.78rem] font-semibold text-white/80 xl:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-brand-lime">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-2 pl-4">
              <a
                href="#contacto"
                className="hidden whitespace-nowrap rounded-full bg-brand-green px-5 py-3 text-xs font-bold text-white transition hover:bg-[#54a225] sm:inline-flex lg:text-sm"
              >
                Quiero participar
              </a>
              <button
                type="button"
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((value) => !value)}
                className="grid h-11 w-11 flex-none place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10 xl:hidden"
              >
                <span className="relative h-4 w-5" aria-hidden="true">
                  <span className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                  <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
                  <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded bg-current transition ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
                </span>
              </button>
            </div>
          </div>

          <div
            className={`absolute left-0 right-0 top-[calc(100%+0.65rem)] origin-top rounded-[1.75rem] border border-white/15 bg-brand-deep/95 p-3 text-white shadow-floating backdrop-blur-xl transition duration-300 xl:hidden ${
              menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
