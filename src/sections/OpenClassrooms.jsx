import ButtonLink from '../components/ButtonLink'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function CheckItem({ children }) {
  return (
    <li className="flex gap-3 text-sm font-medium leading-6 text-brand-navy/90 sm:text-base">
      <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-white text-brand-green" aria-hidden="true">
        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
          <path d="m4 8 2.5 2.5L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children}
    </li>
  )
}

export default function OpenClassrooms() {
  return (
    <section id="aulas-abiertas" className="section-space relative isolate overflow-hidden bg-brand-green text-white">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#62b72d_0%,#58ad29_55%,#459623_100%)]" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-[0.08]" />
      <div className="absolute -left-36 top-24 -z-10 h-96 w-96 rounded-full border-[4rem] border-white/[0.06]" />
      <div className="absolute -right-24 bottom-[-8rem] -z-10 h-80 w-80 rounded-full bg-brand-lime/20 blur-3xl" />
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            onColor
            eyebrow="Aulas Abiertas"
            title={<>Sentite estudiante por <span className="text-white">un día.</span></>}
            description="Entrá a un aula, asistí a una clase real de la carrera que te interesa y descubrí en primera persona cómo se vive la universidad."
          />

          <div className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-white/25 bg-white px-5 py-4 shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-deep text-center text-white">
              <span className="text-[0.55rem] font-bold uppercase leading-tight">28<br /><strong className="text-sm">sept.</strong></span>
            </span>
            <p className="text-sm font-bold leading-5 text-brand-deep">Del 28 de septiembre<br /><span className="text-brand-green">al 2 de octubre</span></p>
          </div>

          <ul className="mt-7 space-y-4">
            <CheckItem>Compartí una clase con estudiantes y docentes de la UCALP.</CheckItem>
            <CheckItem>Conocé la dinámica de cursada y acercate a la carrera desde adentro.</CheckItem>
            <CheckItem>Una experiencia pensada para futuros ingresantes, abierta y gratuita.</CheckItem>
          </ul>

          <div className="mt-8">
            <ButtonLink href="#contacto" variant="blue">Quiero participar</ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-brand-deep p-6 text-white shadow-floating sm:p-9">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-green/30 blur-sm" />
            <div className="relative flex items-start justify-between gap-4 border-b border-white/15 pb-6">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-lime">Próximamente</p>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">Cronograma por carrera</h3>
              </div>
              <div className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-brand-green text-xl font-extrabold">’27</div>
            </div>

            <div className="relative mt-6 rounded-[1.75rem] border border-dashed border-white/25 bg-white/[0.06] p-6 text-center sm:p-8">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-brand-lime">
                <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
                  <rect x="5" y="8" width="22" height="19" rx="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 5v6M22 5v6M5 14h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M11 19h3M18 19h3M11 23h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="mt-5 text-xl font-bold">El cronograma está en preparación</h4>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/65">
                Próximamente publicaremos las fechas, los horarios y las aulas correspondientes a cada carrera.
              </p>
            </div>

            <div className="relative mt-4 grid grid-cols-3 gap-2">
              {['Fecha', 'Horario', 'Aula'].map((label) => (
                <div key={label} className="rounded-2xl bg-white/[0.07] px-3 py-3 text-center text-[0.62rem] font-bold uppercase tracking-[0.13em] text-white/50">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
