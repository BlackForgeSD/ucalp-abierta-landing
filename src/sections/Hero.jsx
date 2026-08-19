import ButtonLink from '../components/ButtonLink'
import Reveal from '../components/Reveal'
import ovHorizontal from '../../assets/oV-sinFondo-10.png'
import { getWhatsAppHref, isWhatsAppConfigured } from '../utils/whatsapp'

function EventTicket({ type, date, endDate, title, note, className = '' }) {
  const isOrientation = type === 'orientation'

  return (
    <div className={`overflow-hidden rounded-[1.75rem] border border-white/25 bg-white text-brand-deep shadow-floating ${className}`}>
      <div className="grid grid-cols-[5.6rem_1fr]">
        <div className={`grid min-h-[8.6rem] place-items-center p-3 text-center text-white ${isOrientation ? 'bg-brand-sky' : 'bg-brand-green'}`}>
          <span className="leading-none">
            <span className="block text-[0.58rem] font-bold uppercase tracking-[0.18em]">Sept.</span>
            <span className="mt-1 block text-[2.4rem] font-extrabold tracking-[-0.05em]">{date}</span>
            {endDate && <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.12em]">al {endDate}</span>}
          </span>
        </div>
        <div className="relative flex min-w-0 flex-col justify-between p-4 sm:p-5">
          <div>
            <div className="flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-blue/55">
              <span className={`h-2 w-2 rounded-full ${isOrientation ? 'bg-brand-sky' : 'bg-brand-green'}`} />
              {note}
            </div>
            <p className="mt-3 text-lg font-extrabold leading-[1.08] tracking-[-0.025em]">{title}</p>
          </div>
          <div className="mt-3 flex items-end justify-between gap-3">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-green">Abierto y gratuito</p>
            {isOrientation && (
              <img src={ovHorizontal} alt="Orientación Vocacional UCALP" className="h-7 w-[5.4rem] object-cover object-left" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileEvent({ date, title, color }) {
  return (
    <a href={title === 'Aulas Abiertas' ? '#aulas-abiertas' : '#orientacion'} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
      <span className={`text-[0.62rem] font-extrabold uppercase tracking-[0.16em] ${color}`}>{date}</span>
      <span className="mt-2 block text-sm font-bold leading-tight text-white">{title}</span>
      <span className="mt-3 flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-wider text-white/60">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" /> Gratis
      </span>
    </a>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[780px] items-center overflow-hidden bg-brand-blue pb-16 pt-32 text-white sm:min-h-[840px] sm:pb-20 sm:pt-36 lg:min-h-screen lg:pt-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_22%,rgba(8,169,223,0.36),transparent_29%),radial-gradient(circle_at_12%_88%,rgba(98,183,45,0.32),transparent_25%),linear-gradient(145deg,#2b59a2_0%,#214a8b_48%,#15386f_100%)]" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-20" />
      <div className="absolute -right-28 top-16 -z-10 h-[28rem] w-[28rem] rounded-full border border-white/10 sm:right-[-5rem] sm:h-[38rem] sm:w-[38rem]" />
      <div className="absolute -right-12 top-36 -z-10 h-[18rem] w-[18rem] rounded-full border border-brand-lime/25 sm:right-16 sm:h-[26rem] sm:w-[26rem]" />
      <div className="absolute bottom-[-6rem] left-[-4rem] -z-10 h-52 w-52 rounded-full bg-brand-green/20 blur-3xl" />

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
              <span className="bg-brand-green px-4 py-2.5">ucalp</span>
              <span className="flex items-center gap-2 px-4 py-2.5">
                Ingreso <strong className="text-brand-lime">’27</strong>
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-balance text-[3.45rem] font-extrabold leading-[0.88] tracking-[-0.065em] sm:text-[5.7rem] lg:text-[6.55rem] xl:text-[7.2rem]">
              UCALP
              <span className="block text-brand-lime">Abierta.</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-7 max-w-xl text-balance text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-[1.65rem]">
              Viví la universidad antes de elegir tu carrera.
            </p>
            <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              Dos experiencias para conocer cómo se estudia, resolver tus dudas y acercarte a la vida universitaria UCALP.
            </p>
          </Reveal>

          <Reveal delay={220} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contacto" variant="primary" className="sm:min-w-48">Quiero participar</ButtonLink>
            <ButtonLink
              href={getWhatsAppHref()}
              variant="light"
              arrow={false}
              className="sm:min-w-52"
              target={isWhatsAppConfigured ? '_blank' : undefined}
              rel={isWhatsAppConfigured ? 'noopener noreferrer' : undefined}
              aria-label={isWhatsAppConfigured ? 'Consultar por WhatsApp, abre en una pestaña nueva' : 'WhatsApp no configurado, ir al formulario de contacto'}
              title={isWhatsAppConfigured ? undefined : 'WhatsApp temporalmente no disponible; completá el formulario'}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M9.2 8.4c.2-.5.4-.5.7-.5h.4c.2 0 .3 0 .5.4l.7 1.7c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.7 1.2 1.7 2.1 3 2.7.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.7.8c.3.1.5.3.5.5-.1.8-.4 1.5-1 2-.6.5-1.4.7-2.2.5-1.2-.3-2.7-.8-4.4-2.3-1.4-1.2-2.4-2.8-2.7-3.9-.4-1.2 0-2 .4-2.6Z" fill="currentColor" />
              </svg>
              Consultar por WhatsApp
            </ButtonLink>
          </Reveal>

          <Reveal delay={260} className="mt-7 grid grid-cols-2 gap-3 lg:hidden">
            <MobileEvent date="8 de sept." title="Orientación Vocacional" color="text-brand-sky" />
            <MobileEvent date="28 sept. — 2 oct." title="Aulas Abiertas" color="text-brand-lime" />
          </Reveal>
        </div>

        <Reveal delay={180} className="relative mx-auto hidden h-[560px] w-full max-w-[550px] lg:block">
          <div className="absolute left-12 top-11 h-[430px] w-[430px] rounded-full border border-dashed border-white/25 animate-[spin_45s_linear_infinite]" />
          <div className="absolute left-[7.5rem] top-28 h-[290px] w-[290px] rounded-full bg-brand-sky/20 blur-sm" />

          <div className="absolute left-14 top-8 z-20 w-60 rounded-[1.35rem] border border-white/15 bg-brand-deep/80 px-5 py-4 shadow-card backdrop-blur-md">
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-brand-lime">2 experiencias</p>
            <p className="mt-1.5 text-xs font-semibold text-white">Un mismo futuro por descubrir</p>
            <div className="my-3 h-px bg-white/15" />
            <p className="text-[0.56rem] font-bold uppercase tracking-[0.17em] text-brand-sky">Pase abierto</p>
            <p className="mt-1 text-sm font-bold text-white">Conocé tu carrera</p>
          </div>

          <EventTicket
            type="orientation"
            date="08"
            title="Jornada de Orientación Vocacional"
            note="Primero, explorá"
            className="absolute right-0 bottom-44 z-20 w-[22.5rem] -rotate-1"
          />
          <EventTicket
            type="classrooms"
            date="28"
            endDate="2 oct."
            title="Aulas Abiertas"
            note="Después, vivilo"
            className="absolute bottom-3 left-6 z-20 w-[22.5rem] rotate-1"
          />
          <span className="absolute left-10 top-4 h-4 w-4 rounded-full bg-brand-lime animate-pulseSoft" />
          <span className="absolute bottom-5 right-44 h-3 w-3 rounded-full bg-brand-sky animate-pulseSoft [animation-delay:700ms]" />
        </Reveal>
      </div>

      <a href="#experiencias" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/60 transition hover:text-white md:flex">
        Descubrí las propuestas
        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25">↓</span>
      </a>
    </section>
  )
}
