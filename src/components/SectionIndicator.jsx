import { useEffect, useState } from 'react'

const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'experiencias', label: 'Experiencias' },
  { id: 'aulas-abiertas', label: 'Aulas Abiertas' },
  { id: 'orientacion', label: 'Orientación Vocacional' },
  { id: 'para-quien', label: 'Para quién es' },
  { id: 'contacto', label: 'Participar' },
]

export default function SectionIndicator() {
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const nodes = sections.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (current?.target.id) setActive(current.target.id)
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <nav aria-label="Progreso de secciones" className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <div className="flex flex-col items-center gap-2 rounded-full border border-white/35 bg-[#bec7d3]/90 px-2.5 py-4 shadow-soft backdrop-blur-xl">
        {sections.map((section) => {
          const isActive = section.id === active
          return (
            <a key={section.id} href={`#${section.id}`} className="group grid h-7 w-6 place-items-center" aria-label={`Ir a ${section.label}`}>
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive ? 'h-6 w-2.5 bg-brand-green' : 'h-2.5 w-2.5 bg-white/75 group-hover:bg-white'
                }`}
              />
            </a>
          )
        })}
      </div>
    </nav>
  )
}
