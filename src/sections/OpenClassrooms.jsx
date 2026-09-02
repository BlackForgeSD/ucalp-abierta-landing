import { useEffect, useRef, useState } from 'react'
import ButtonLink from '../components/ButtonLink'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { AULAS_ABIERTAS_REGISTRATION_URL } from '../constants/registrationForms'
import { facultyColors, openClassrooms } from '../data/aulasAbiertas'

const confirmedScheduleDays = [
  { id: '2026-09-28', day: '28', month: 'SEP', label: '28 de septiembre' },
  { id: '2026-09-29', day: '29', month: 'SEP', label: '29 de septiembre' },
  { id: '2026-09-30', day: '30', month: 'SEP', label: '30 de septiembre' },
  { id: '2026-10-01', day: '1', month: 'OCT', label: '1 de octubre' },
  { id: '2026-10-02', day: '2', month: 'OCT', label: '2 de octubre' },
]

const scheduleDays = [
  ...confirmedScheduleDays,
  { id: '-', day: 'A', month: 'CONFIRMAR', label: 'A confirmar', pending: true },
]

const dateLabels = Object.fromEntries(scheduleDays.map((day) => [day.id, day.label]))

function getActivityDate(item) {
  return dateLabels[item.fecha] ?? 'A confirmar'
}

function getActivityInfo(item) {
  const meetLine = item.meetUrl && item.meetUrl !== '-' ? `\nGoogle Meet: ${item.meetUrl}` : ''

  return `Aulas Abiertas UCALP\n\nCarrera: ${item.carrera}\nClase: ${item.clase}\nFecha: ${getActivityDate(item)}\nHora: ${item.hora}\nSede: ${item.sede}\nDirección: ${item.direccion}\nModalidad: ${item.modalidad}${meetLine}`
}

function normalizeSearch(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

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

function ScheduleCard() {
  const [selectedDay, setSelectedDay] = useState(scheduleDays[0].id)
  const [search, setSearch] = useState('')
  const [copyFeedback, setCopyFeedback] = useState(null)
  const copyTimer = useRef(null)
  const normalizedSearch = normalizeSearch(search.trim())
  const isGlobalSearch = normalizedSearch.length > 0
  const filteredItems = openClassrooms.filter((item) => {
    if (!isGlobalSearch) return item.fecha === selectedDay

    return normalizeSearch(`${item.carrera} ${item.clase}`).includes(normalizedSearch)
  })
  const selectedDayLabel = scheduleDays.find((day) => day.id === selectedDay)?.label

  useEffect(() => () => window.clearTimeout(copyTimer.current), [])

  const handleCopy = async (item) => {
    window.clearTimeout(copyTimer.current)

    try {
      if (!navigator.clipboard?.writeText) throw new Error('La API del portapapeles no está disponible.')

      await navigator.clipboard.writeText(getActivityInfo(item))
      setCopyFeedback({ id: item.id, status: 'success' })
    } catch (error) {
      console.error('[UCALP Abierta] No se pudo copiar la actividad.', error)
      setCopyFeedback({ id: item.id, status: 'error' })
    }

    copyTimer.current = window.setTimeout(() => setCopyFeedback(null), 2000)
  }

  return (
    <div className="relative flex min-w-0 w-full flex-col overflow-hidden rounded-[2.5rem] border border-white/15 bg-brand-deep p-5 text-white shadow-floating sm:p-7 lg:h-[46rem] lg:min-h-0 xl:p-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-green/30 blur-sm" />

      <div className="relative flex flex-none items-start justify-between gap-4 border-b border-white/15 pb-5">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-lime">Aulas Abiertas</p>
          <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">Cronograma por carrera</h3>
        </div>
        <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-brand-green text-lg font-extrabold sm:h-14 sm:w-14 sm:text-xl">’27</div>
      </div>

      <div className="relative mt-5 flex w-full min-w-0 max-w-full flex-none gap-2 overflow-x-auto pb-2 [scrollbar-color:rgba(255,255,255,0.22)_transparent] [scrollbar-width:thin]" aria-label="Seleccionar fecha del cronograma">
        {scheduleDays.map((day) => {
          const isSelected = selectedDay === day.id

          return (
            <button
              key={day.id}
              type="button"
              aria-pressed={isSelected}
              aria-label={day.label}
              onClick={() => setSelectedDay(day.id)}
              className={`min-w-[4.15rem] flex-1 rounded-2xl border px-2.5 py-2.5 text-center transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime ${
                isSelected
                  ? 'border-brand-lime bg-brand-lime text-brand-deep'
                  : 'border-white/15 bg-white/[0.07] text-white hover:border-white/30 hover:bg-white/10'
              }`}
            >
              <span className={`block font-extrabold leading-none ${day.pending ? 'text-sm' : 'text-lg'}`}>{day.day}</span>
              <span className={`mt-1 block text-[0.5rem] font-bold tracking-[0.08em] ${isSelected ? 'text-brand-deep/70' : 'text-white/55'}`}>{day.month}</span>
            </button>
          )
        })}
      </div>

      <div className="relative mt-3 flex-none">
        <label htmlFor="schedule-search" className="sr-only">Buscar una carrera o materia</label>
        <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/45" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input
          id="schedule-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscá tu carrera o materia"
          className="w-full rounded-2xl border border-white/15 bg-white/[0.08] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-brand-lime focus:bg-white/[0.11] focus:ring-4 focus:ring-brand-lime/10"
        />
      </div>

      <div className="relative mt-4 flex min-h-0 flex-1 flex-col">
        <p className="mb-2 flex-none text-[0.62rem] font-bold uppercase tracking-[0.15em] text-white/55" aria-live="polite">
          {isGlobalSearch
            ? `${filteredItems.length} ${filteredItems.length === 1 ? 'resultado global' : 'resultados globales'} · Todas las fechas`
            : `${filteredItems.length} ${filteredItems.length === 1 ? 'clase disponible' : 'clases disponibles'} · ${selectedDayLabel}`}
        </p>

        <div className="min-h-0 flex-1 space-y-2.5 overflow-y-auto overscroll-contain pr-1 [scrollbar-color:rgba(255,255,255,0.22)_transparent] [scrollbar-width:thin] lg:max-h-none max-lg:max-h-[30rem]">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const facultyColor = facultyColors[item.facultad] ?? '#8BD435'

              return (
              <article
                key={item.id}
                className="rounded-2xl border border-l-4 border-white/10 bg-white/[0.075] p-4 transition hover:border-white/20 hover:bg-white/[0.1]"
                style={{ borderLeftColor: facultyColor }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.13em] text-white/80">
                      <span className="h-2 w-2 flex-none rounded-full" style={{ backgroundColor: facultyColor }} />
                      {item.carrera}
                    </p>
                    <h4 className="mt-1.5 text-base font-bold leading-tight text-white sm:text-lg">{item.clase}</h4>
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    {isGlobalSearch && (
                      <span className="rounded-full border border-brand-lime/30 bg-brand-lime/10 px-3 py-1.5 text-[0.56rem] font-bold uppercase tracking-[0.1em] text-brand-lime">
                        {dateLabels[item.fecha] ?? 'A confirmar'}
                      </span>
                    )}
                    <span className="rounded-full border border-brand-sky/25 bg-brand-sky/10 px-3 py-1.5 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-brand-sky">
                      {item.modalidad}
                    </span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-xs sm:text-sm">
                  <p>
                    <span className="block text-[0.55rem] font-bold uppercase tracking-[0.12em] text-white/40">Fecha · Hora</span>
                    <span className="mt-1 block font-semibold text-white/70">{getActivityDate(item)} · {item.hora}</span>
                  </p>
                  <p>
                    <span className="block text-[0.55rem] font-bold uppercase tracking-[0.12em] text-white/40">Sede</span>
                    <span className="mt-1 block font-semibold text-white/70">{item.sede}</span>
                  </p>
                  <p className="col-span-2">
                    <span className="block text-[0.55rem] font-bold uppercase tracking-[0.12em] text-white/40">Dirección</span>
                    <span className="mt-1 block font-semibold text-white/70">{item.direccion}</span>
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 border-t border-white/10 pt-3 text-[0.67rem] font-bold">
                  <a
                    href={AULAS_ABIERTAS_REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir formulario de inscripción para ${item.clase} en una pestaña nueva`}
                    className="whitespace-nowrap rounded-full border border-brand-lime/35 bg-brand-lime/10 px-3 py-2 text-brand-lime transition hover:border-brand-lime/55 hover:bg-brand-lime/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
                  >
                    Formulario de inscripción
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(item)}
                    aria-label={`Copiar información de ${item.clase}`}
                    className="rounded-full border border-white/20 bg-white/[0.07] px-3 py-2 text-white transition hover:border-white/35 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
                  >
                    <span aria-live="polite">
                      {copyFeedback?.id === item.id && copyFeedback.status === 'success'
                        ? '✓ Copiado'
                        : copyFeedback?.id === item.id && copyFeedback.status === 'error'
                          ? 'No se pudo copiar'
                          : 'Copiar info'}
                    </span>
                  </button>

                  <a
                    href="#contacto"
                    aria-label={`Consultar sobre ${item.clase} mediante el formulario general`}
                    className="rounded-full border border-brand-sky/30 bg-brand-sky/10 px-3 py-2 text-brand-sky transition hover:border-brand-sky/50 hover:bg-brand-sky/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
                  >
                    Consultar
                  </a>

                  {item.meetUrl && item.meetUrl !== '-' && (
                    <a
                      href={item.meetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir Google Meet de ${item.clase} en una pestaña nueva`}
                      className="rounded-full border border-brand-lime/35 bg-brand-lime/10 px-3 py-2 text-brand-lime transition hover:border-brand-lime/55 hover:bg-brand-lime/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
                    >
                      Abrir Google Meet
                    </a>
                  )}
                </div>
              </article>
              )
            })
          ) : (
            <div className="grid min-h-44 place-items-center rounded-2xl border border-dashed border-white/20 bg-white/[0.045] p-6 text-center">
              <div>
                <p className="text-sm font-bold text-white">
                  {isGlobalSearch ? 'No encontramos actividades para esa búsqueda.' : 'No hay actividades confirmadas para esta fecha.'}
                </p>
                {!isGlobalSearch && (
                  <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-white/55">Probá otra fecha para consultar el cronograma.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function OpenClassrooms() {
  return (
    <section id="aulas-abiertas" className="section-space relative isolate overflow-hidden bg-brand-green text-white">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#62b72d_0%,#58ad29_55%,#459623_100%)]" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-[0.08]" />
      <div className="absolute -left-36 top-24 -z-10 h-96 w-96 rounded-full border-[4rem] border-white/[0.06]" />
      <div className="absolute -right-24 bottom-[-8rem] -z-10 h-80 w-80 rounded-full bg-brand-lime/20 blur-3xl" />
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:gap-16">
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
            <ButtonLink
              href={AULAS_ABIERTAS_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="blue"
            >
              Formulario de inscripción
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex min-h-0 min-w-0 lg:pt-[4.25rem]">
          <ScheduleCard />
        </Reveal>
      </div>
    </section>
  )
}
