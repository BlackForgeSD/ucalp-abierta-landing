import Logo from './Logo'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#aulas-abiertas', label: 'Aulas Abiertas' },
  { href: '#orientacion', label: 'Orientación Vocacional' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-deep px-4 pb-5 pt-14 text-white sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
              Experiencias abiertas para vivir la universidad antes de elegir tu carrera.
            </p>
          </div>
          <nav aria-label="Navegación del pie" className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/70">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-brand-lime">{link.label}</a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3 py-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>UCALP Abierta · Ingreso ’27</p>
          <p>ucalpabierta.com.ar</p>
        </div>
      </div>
    </footer>
  )
}
