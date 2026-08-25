import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function AudienceIcon({ type }) {
  const paths = {
    student: <><path d="m5 11 11-5 11 5-11 5-11-5Z" /><path d="M9 14v6c4 3 10 3 14 0v-6M27 11v8" /></>,
    family: <><circle cx="12" cy="11" r="4" /><circle cx="22" cy="12" r="3" /><path d="M5 26c0-5 3-8 7-8s7 3 7 8M19 20c4-1 7 2 7 6" /></>,
    choose: <><path d="M16 27V12M16 12l-6 6M16 12l6 6M16 12V6" /><circle cx="10" cy="20" r="3" /><circle cx="22" cy="20" r="3" /></>,
    university: <><path d="M5 13 16 6l11 7M8 14v10M13 14v10M19 14v10M24 14v10M5 26h22" /></>,
  }

  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

const audiences = [
  { type: 'student', title: 'Estudiantes secundarios', copy: 'Para empezar a imaginar la etapa universitaria y conocerla desde adentro.', accent: 'bg-brand-green text-white' },
  { type: 'family', title: 'Familias', copy: 'Para acompañar una decisión importante con más información y cercanía.', accent: 'bg-brand-sky text-white' },
  { type: 'choose', title: 'Quienes están eligiendo', copy: 'Para explorar intereses, comparar opciones y resolver dudas antes de decidir.', accent: 'bg-brand-blue text-white' },
  { type: 'university', title: 'Futuros universitarios', copy: 'Para descubrir cómo se estudia y cómo se vive la experiencia UCALP.', accent: 'bg-brand-lime text-brand-deep' },
]

export default function Audience() {
  return (
    <section id="para-quien" className="section-space bg-brand-mist/65">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Para quién es"
            title="Una invitación a mirar, preguntar y descubrir."
            description="UCALP Abierta acompaña a quienes están dando sus primeros pasos hacia la universidad y a las personas que forman parte de esa decisión."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <Reveal key={audience.type} delay={index * 70} className="h-full">
              <article className="group relative flex h-full min-h-[19rem] flex-col overflow-hidden rounded-[2rem] border border-brand-blue/10 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-green/30 sm:p-7">
                <div className="relative flex items-start">
                  <span className={`grid h-16 w-16 place-items-center rounded-[1.35rem] shadow-soft transition duration-300 group-hover:-rotate-3 group-hover:scale-105 ${audience.accent}`}>
                    <AudienceIcon type={audience.type} />
                  </span>
                </div>
                <div className="relative mt-auto pt-12">
                  <div className="mb-5 h-px w-full bg-brand-blue/10"><span className="block h-px w-10 bg-brand-green" /></div>
                  <h3 className="text-xl font-bold leading-tight tracking-[-0.025em] text-brand-deep">{audience.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-ink/65">{audience.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
