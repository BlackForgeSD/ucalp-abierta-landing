import { useState } from 'react'
import Reveal from '../components/Reveal'
import { getWhatsAppHref, isWhatsAppConfigured } from '../utils/whatsapp'

const fieldClass = 'mt-2 w-full rounded-2xl border border-white/20 bg-white/[0.09] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/60 focus:border-brand-lime focus:bg-white/[0.13] focus:ring-4 focus:ring-brand-lime/10'

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()

const statusMessages = {
  idle: 'Completá los campos requeridos y te contactaremos a la brevedad.',
  submitting: 'Estamos enviando tu consulta…',
  success: 'Tu consulta fue enviada correctamente. El equipo de Ingreso se va a contactar con vos.',
  error: 'No pudimos enviar tu consulta. Intentá nuevamente en unos minutos o escribinos por WhatsApp.',
}

if (import.meta.env.DEV && !formspreeEndpoint) {
  console.warn('[UCALP Abierta] Falta configurar VITE_FORMSPREE_ENDPOINT. El formulario permanecerá deshabilitado.')
}

export default function ContactPlaceholder() {
  const [status, setStatus] = useState('idle')
  const [selectedInterest, setSelectedInterest] = useState('')
  const isSubmitting = status === 'submitting'
  const isConfigured = Boolean(formspreeEndpoint)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formspreeEndpoint || isSubmitting) return

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      nombre_apellido: formData.get('nombre_apellido')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      whatsapp: formData.get('whatsapp')?.toString().trim(),
      propuesta_interes: formData.get('propuesta_interes')?.toString(),
      mensaje: formData.get('mensaje')?.toString().trim(),
      origen: 'UCALP Abierta - Landing',
      fecha_envio: new Date().toISOString(),
      user_agent: navigator.userAgent,
    }

    setStatus('submitting')

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error(`Formspree respondió con estado ${response.status}`)

      form.reset()
      setSelectedInterest('')
      setStatus('success')
    } catch (error) {
      console.error('[UCALP Abierta] No se pudo enviar el formulario.', error)
      setStatus('error')
    }
  }

  const statusText = isConfigured
    ? statusMessages[status]
    : import.meta.env.DEV
      ? 'El formulario está deshabilitado. Agregá VITE_FORMSPREE_ENDPOINT para habilitar el envío.'
      : 'El formulario no está disponible en este momento. Intentá nuevamente más tarde.'

  const statusClass = status === 'success'
    ? 'text-brand-lime'
    : status === 'error'
      ? 'text-red-200'
      : !isConfigured
        ? 'text-amber-200'
        : 'text-white/75'

  return (
    <section id="contacto" className="section-space relative overflow-hidden bg-brand-cream">
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-brand-green/10 blur-3xl" />
      <div className="section-shell">
        <Reveal>
          <div className="overflow-hidden rounded-[2.75rem] bg-brand-deep shadow-floating">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative overflow-hidden bg-brand-green p-8 text-white sm:p-12 lg:p-14">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[3rem] border-white/10" />
                <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-blue/15" />
                <div className="relative flex h-full flex-col">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-deep">Tu próximo paso</p>
                  <h2 className="mt-5 text-balance text-4xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-5xl">
                    ¿Querés ser <span className="text-brand-deep">parte?</span>
                  </h2>
                  <p className="mt-5 max-w-md text-sm font-medium leading-6 text-brand-deep/85 sm:text-base sm:leading-7">
                    Dejanos tus datos y contanos qué propuesta te interesa.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-2">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-3">
                      <p className="text-[0.58rem] font-bold uppercase tracking-wider text-brand-deep/70">8 de sept.</p>
                      <p className="mt-1 text-xs font-bold leading-tight">Orientación Vocacional</p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-3">
                      <p className="text-[0.58rem] font-bold uppercase tracking-wider text-brand-deep/70">28 sept. — 2 oct.</p>
                      <p className="mt-1 text-xs font-bold leading-tight">Aulas Abiertas</p>
                    </div>
                  </div>

                  <div className="mt-10 space-y-4 lg:mt-auto lg:pt-14">
                    <div className="flex items-center gap-3 text-sm font-semibold">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-deep text-white">✓</span>
                      Participación abierta y gratuita
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-deep text-white">↗</span>
                      Elegí una o ambas propuestas
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-brand-deep p-7 text-white sm:p-10 lg:p-14">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[3rem] border-brand-sky/10" />
                <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-lime">Formulario de interés</p>
                    <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-white">Contanos sobre vos</h3>
                  </div>
                  <span className="relative rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-wider text-white/70">
                    {isConfigured ? 'Inscripción abierta' : 'Próximamente'}
                  </span>
                </div>

                <form onSubmit={handleSubmit} aria-describedby="form-status" aria-busy={isSubmitting}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nombre_apellido" className="text-xs font-bold text-white">Nombre y apellido</label>
                      <input id="nombre_apellido" type="text" name="nombre_apellido" autoComplete="name" required placeholder="Tu nombre completo" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs font-bold text-white">Email</label>
                      <input id="email" type="email" name="email" autoComplete="email" required placeholder="nombre@ejemplo.com" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="whatsapp" className="text-xs font-bold text-white">WhatsApp</label>
                      <input id="whatsapp" type="tel" name="whatsapp" autoComplete="tel" inputMode="tel" required placeholder="Código de área + número" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="propuesta_interes" className="text-xs font-bold text-white">Propuesta de interés</label>
                      <select
                        id="propuesta_interes"
                        name="propuesta_interes"
                        value={selectedInterest}
                        onChange={(event) => setSelectedInterest(event.target.value)}
                        required
                        className={`${fieldClass} appearance-none`}
                      >
                        <option value="" disabled className="text-brand-ink">Seleccioná una opción</option>
                        <option value="Aulas Abiertas" className="text-brand-ink">Aulas Abiertas</option>
                        <option value="Jornada de Orientación Vocacional" className="text-brand-ink">Jornada de Orientación Vocacional</option>
                        <option value="Ambas propuestas" className="text-brand-ink">Ambas propuestas</option>
                        <option value="No estoy seguro/a, quiero orientación" className="text-brand-ink">No estoy seguro/a, quiero orientación</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="mensaje" className="block text-xs font-bold text-white">Mensaje <span className="font-medium text-white/60">(opcional)</span></label>
                    <textarea id="mensaje" name="mensaje" rows="4" placeholder="¿Hay algo más que quieras contarnos?" className={`${fieldClass} resize-none`} />
                  </div>

                  <div className="mt-6 flex flex-col gap-4">
                    <p
                      id="form-status"
                      role={status === 'error' ? 'alert' : 'status'}
                      aria-live="polite"
                      className={`max-w-sm text-xs font-medium leading-5 ${statusClass}`}
                    >
                      {statusText}
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                      <button
                        type="submit"
                        disabled={!isConfigured || isSubmitting}
                        className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-brand-green px-7 py-3 text-sm font-bold text-brand-deep transition hover:bg-brand-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime disabled:cursor-not-allowed disabled:bg-brand-green/45 disabled:text-white/60 sm:w-auto"
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                        {!isSubmitting && <span aria-hidden="true">→</span>}
                      </button>
                      <a
                        href={getWhatsAppHref(selectedInterest)}
                        target={isWhatsAppConfigured ? '_blank' : undefined}
                        rel={isWhatsAppConfigured ? 'noopener noreferrer' : undefined}
                        aria-label={isWhatsAppConfigured ? 'Consultar por WhatsApp, abre en una pestaña nueva' : 'WhatsApp no configurado, permanecer en el formulario de contacto'}
                        title={isWhatsAppConfigured ? undefined : 'WhatsApp temporalmente no disponible'}
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:border-white/45 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime sm:w-auto"
                      >
                        Consultar por WhatsApp
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
