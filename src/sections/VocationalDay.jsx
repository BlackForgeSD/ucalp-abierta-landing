import ButtonLink from '../components/ButtonLink'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ovHorizontal from '../../assets/oV-sinFondo-10.png'

const details = [
  { label: 'Fecha', value: '8 de septiembre' },
  { label: 'Horario', value: '14.30 a 17.30' },
  { label: 'Lugar', value: 'Facultad de Ciencias Económicas y Sociales' },
  { label: 'Dirección', value: '25 e/ 47 y 48, La Plata' },
]

export default function VocationalDay() {
  return (
    <section id="orientacion" className="section-space relative isolate overflow-hidden bg-brand-blue text-white">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#2b59a2_0%,#214987_60%,#17386d_100%)]" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-10" />
      <div className="absolute -left-28 top-20 -z-10 h-[30rem] w-[30rem] rounded-full border border-brand-sky/20" />
      <div className="absolute -left-10 top-40 -z-10 h-[19rem] w-[19rem] rounded-full border border-brand-lime/20" />

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal className="relative min-h-[380px] sm:min-h-[480px]">
          <div className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 sm:h-[27rem] sm:w-[27rem]" />
          <div className="absolute left-1/2 top-1/2 h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2.5rem] border-brand-sky/25 sm:h-[19rem] sm:w-[19rem] sm:border-[3.5rem]" />
          <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-green text-center shadow-floating sm:h-36 sm:w-36">
            <span>
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/80">Septiembre</span>
              <span className="mt-1 block text-5xl font-extrabold sm:text-6xl">08</span>
            </span>
          </div>
          <span className="absolute left-[18%] top-[18%] grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl text-brand-blue shadow-card animate-float">?</span>
          <span className="absolute bottom-[14%] right-[14%] grid h-14 w-14 place-items-center rounded-full bg-brand-sky text-xl font-bold shadow-card animate-drift">✓</span>
          <span className="absolute right-[10%] top-[24%] h-4 w-4 rounded-full bg-brand-lime" />
          <span className="absolute bottom-[20%] left-[12%] h-3 w-3 rounded-full bg-white/70" />
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            light
            eyebrow="Orientación Vocacional"
            title={<>Elegir también es <span className="text-brand-lime">explorar.</span></>}
            description="Si todavía no sabés qué estudiar o estás entre varias opciones, esta jornada te propone actividades para reconocer intereses, buscar información y decidir con más herramientas."
          />

          <div className="mt-6 inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white px-4 py-3 shadow-card">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-brand-blue/55">Organiza</p>
            <span className="h-8 w-px bg-brand-blue/15" />
            <img src={ovHorizontal} alt="Orientación Vocacional UCALP" className="h-10 w-auto" />
          </div>

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
