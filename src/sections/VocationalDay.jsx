import ButtonLink from '../components/ButtonLink'
import Reveal from '../components/Reveal'
import ovHorizontal from '../../assets/oV-sinFondo-10.png'

const details = [
  { label: 'Fecha', value: '8 de septiembre' },
  { label: 'Horario', value: '14.30 a 17.30' },
  { label: 'Lugar', value: 'Facultad de Ciencias Económicas y Sociales' },
  { label: 'Dirección', value: '25 e/ 47 y 48, La Plata' },
]

function OrbitIcon({ type }) {
  const paths = {
    clock: <><circle cx="16" cy="16" r="10" /><path d="M16 10v6l4 3" /></>,
    calendar: <><rect x="6" y="8" width="20" height="18" rx="3" /><path d="M10 5v6M22 5v6M6 13h20M11 18h3M18 18h3" /></>,
    book: <><path d="M6 8h8a4 4 0 0 1 4 4v14h-8a4 4 0 0 0-4 2V8Z" /><path d="M26 8h-8a4 4 0 0 0-4 4v14h8a4 4 0 0 1 4 2V8Z" /></>,
    compass: <><circle cx="16" cy="16" r="11" /><path d="m20 11-2.5 6.5L11 20l2.5-6.5L20 11Z" /></>,
  }

  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

export default function VocationalDay() {
  return (
    <section id="orientacion" className="section-space relative isolate overflow-hidden bg-brand-blue text-white">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#2b59a2_0%,#214987_60%,#17386d_100%)]" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-10" />
      <div className="absolute -left-28 top-20 -z-10 h-[30rem] w-[30rem] rounded-full border border-brand-sky/20" />
      <div className="absolute -left-10 top-40 -z-10 h-[19rem] w-[19rem] rounded-full border border-brand-lime/20" />

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
        <Reveal className="relative min-h-[42rem] sm:min-h-[44rem] lg:min-h-[42rem]">
          <div className="relative z-20 max-w-[38rem]">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-lime">
              <span className="h-2 w-2 rounded-full bg-brand-lime" /> 8 de septiembre
            </p>
            <h2 className="mt-6 text-balance text-[2.9rem] font-bold leading-[0.94] tracking-[-0.055em] text-white sm:text-[3.8rem] xl:text-[4.25rem]">
              Jornada de <span className="text-brand-lime">Orientación Vocacional</span>
            </h2>

            <div className="mt-7 inline-flex max-w-full items-center gap-4 rounded-[1.4rem] border border-white/15 bg-white px-5 py-4 shadow-card sm:gap-5 sm:px-6">
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-brand-blue/55">Organiza</p>
                <p className="mt-1 text-xs font-bold text-brand-deep">Orientación Vocacional UCALP</p>
              </div>
              <span className="h-12 w-px flex-none bg-brand-blue/15" />
              <img src={ovHorizontal} alt="Orientación Vocacional UCALP" className="h-14 min-w-0 max-w-[10rem] object-contain sm:h-16 sm:max-w-[12rem]" />
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 h-[19rem] w-[19rem] -translate-x-1/2 sm:h-[22rem] sm:w-[22rem] lg:left-[56%]" aria-label="Fecha de la jornada: 8 de septiembre">
            <div className="absolute inset-0 rounded-full border border-white/15" aria-hidden="true" />
            <div className="absolute inset-[16%] rounded-full border border-brand-sky/35" aria-hidden="true" />
            <div className="absolute inset-[31%] rounded-full border-[1.8rem] border-brand-sky/20" aria-hidden="true" />

            <span className="absolute left-[5%] top-[44%] grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/10 text-brand-sky shadow-card backdrop-blur-sm animate-float">
              <OrbitIcon type="book" />
            </span>
            <span className="absolute right-[7%] top-[18%] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-brand-lime shadow-card backdrop-blur-sm">
              <OrbitIcon type="clock" />
            </span>
            <span className="absolute bottom-[8%] right-[22%] grid h-12 w-12 place-items-center rounded-2xl bg-brand-sky text-white shadow-card animate-drift">
              <OrbitIcon type="calendar" />
            </span>
            <span className="absolute left-[25%] top-[4%] grid h-10 w-10 place-items-center rounded-full bg-white text-brand-blue shadow-card">
              <OrbitIcon type="compass" />
            </span>

            <time dateTime="2026-09-08" className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-green text-center shadow-floating sm:h-32 sm:w-32">
              <span>
                <span className="block text-[0.55rem] font-bold uppercase tracking-[0.2em] text-white/80">Septiembre</span>
                <span className="mt-1 block text-5xl font-extrabold sm:text-6xl">08</span>
              </span>
            </time>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-lime">Una jornada para descubrir</p>
          <h3 className="mt-4 text-balance text-3xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-4xl">
            Elegir también es <span className="text-brand-lime">explorar.</span>
          </h3>
          <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-white/75 sm:text-base">
            Si todavía no sabés qué estudiar o estás entre varias opciones, esta jornada te propone actividades para reconocer intereses, buscar información y decidir con más herramientas.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {details.map((detail) => (
              <div key={detail.label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-brand-lime">{detail.label}</p>
                <p className="mt-2 text-sm font-semibold leading-5 text-white/90">{detail.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href="#contacto" variant="light">Quiero participar</ButtonLink>
            <span className="flex items-center gap-2 text-xs font-bold text-white/65">
              <span className="h-2 w-2 rounded-full bg-brand-lime" /> Abierto y gratuito
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
