import ArrowIcon from '../components/ArrowIcon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ovHorizontal from '../../assets/oV-sinFondo-10.png'

function EventSymbol({ type }) {
  if (type === 'classrooms') {
    return (
      <svg viewBox="0 0 96 96" fill="none" className="h-20 w-20" aria-hidden="true">
        <path d="M27 78V22a6 6 0 0 1 6-6h38v62" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 78h49M55 16v62M36 34h9M36 48h9M36 62h9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <circle cx="64" cy="48" r="3" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 96 96" fill="none" className="h-20 w-20" aria-hidden="true">
      <circle cx="48" cy="48" r="32" stroke="currentColor" strokeWidth="4" />
      <circle cx="48" cy="48" r="19" stroke="currentColor" strokeWidth="4" />
      <path d="m43 53 7-18 3 15-10 3Z" fill="currentColor" />
      <path d="m53 43-7 18-3-15 10-3Z" fill="currentColor" opacity=".55" />
    </svg>
  )
}

const experiences = [
  {
    id: 'aulas-abiertas',
    type: 'classrooms',
    title: 'Aulas Abiertas',
    start: '28',
    month: 'sept.',
    end: 'al 2 de oct.',
    copy: 'Asistí a una clase real, conocé cómo se cursa y conversá con estudiantes y docentes.',
    background: 'bg-brand-green',
    glow: 'bg-brand-lime/45',
    dateColor: 'text-brand-green',
  },
  {
    id: 'orientacion',
    type: 'orientation',
    title: 'Jornada de Orientación Vocacional',
    start: '08',
    month: 'sept.',
    end: '14.30 a 17.30',
    copy: 'Explorá tus intereses y encontrá herramientas para decidir entre distintas opciones.',
    background: 'bg-brand-blue',
    glow: 'bg-brand-sky/40',
    dateColor: 'text-brand-sky',
  },
]

export default function Experiences() {
  return (
    <section id="experiencias" className="section-space relative overflow-hidden bg-brand-cream">
      <div className="absolute right-[-10rem] top-20 h-80 w-80 rounded-full bg-brand-sky/10 blur-3xl" />
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Elegí tu experiencia"
            title="Dos maneras de acercarte a tu futuro."
            description="Viví una clase desde adentro, encontrá orientación para elegir o participá de ambas propuestas."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <Reveal key={experience.id} delay={index * 100} className="h-full">
              <a
                href={`#${experience.id}`}
                className={`group relative flex h-full min-h-[34rem] flex-col overflow-hidden rounded-[2.4rem] p-6 text-white shadow-card transition duration-500 hover:-translate-y-1.5 hover:shadow-floating sm:p-8 ${experience.background}`}
              >
                <div className={`absolute -right-24 -top-24 h-80 w-80 rounded-full transition duration-700 group-hover:scale-110 ${experience.glow}`} />
                <div className="relative flex items-center justify-end">
                  <span className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-brand-lime" /> Abierto y gratuito
                  </span>
                </div>

                <div className="relative mt-7 grid grid-cols-[auto_1fr] items-center gap-5 rounded-[1.75rem] bg-white p-4 text-brand-deep shadow-soft sm:p-5">
                  <div className={`min-w-[5.2rem] border-r border-brand-blue/10 pr-5 text-center ${experience.dateColor}`}>
                    <span className="block text-[0.62rem] font-extrabold uppercase tracking-[0.16em]">{experience.month}</span>
                    <strong className="block text-[3.25rem] font-extrabold leading-none tracking-[-0.06em]">{experience.start}</strong>
                  </div>
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.17em] text-brand-blue/45">Agendalo</p>
                    <p className="mt-1.5 text-sm font-extrabold leading-tight sm:text-base">{experience.end}</p>
                  </div>
                  {experience.type === 'orientation' ? (
                    <div className="absolute -bottom-6 right-5 flex h-20 w-36 items-center overflow-hidden rounded-2xl bg-white px-3 shadow-card">
                      <img src={ovHorizontal} alt="Orientación Vocacional UCALP" className="w-full object-contain" />
                    </div>
                  ) : (
                    <div className={`absolute -bottom-6 right-5 grid h-20 w-20 place-items-center rounded-2xl text-white shadow-card ${experience.background}`}>
                      <EventSymbol type={experience.type} />
                    </div>
                  )}
                </div>

                <div className="relative mt-auto pt-14">
                  <h3 className="max-w-[31rem] text-[2.55rem] font-bold leading-[0.94] tracking-[-0.05em] sm:text-[3.45rem]">{experience.title}</h3>
                  <p className="mt-5 max-w-md text-sm leading-6 text-white/75 sm:text-base">{experience.copy}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
                    Ver más <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
