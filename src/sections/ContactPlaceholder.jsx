import Reveal from '../components/Reveal'

const fieldClass = 'mt-2 w-full rounded-2xl border border-white/20 bg-white/[0.09] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/60 focus:border-brand-lime focus:bg-white/[0.13] focus:ring-4 focus:ring-brand-lime/10'

export default function ContactPlaceholder() {
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
                  <span className="relative rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-wider text-white/70">Vista previa</span>
                </div>

                {/* Integración pendiente: en una etapa posterior este formulario se conectará con Formspree. */}
                <form onSubmit={(event) => event.preventDefault()} aria-describedby="form-status">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="text-xs font-bold text-white">
                      Nombre y apellido
                      <input type="text" name="name" placeholder="Tu nombre completo" className={fieldClass} />
                    </label>
                    <label className="text-xs font-bold text-white">
                      Email
                      <input type="email" name="email" placeholder="nombre@ejemplo.com" className={fieldClass} />
                    </label>
                    <label className="text-xs font-bold text-white">
                      WhatsApp
                      <input type="tel" name="whatsapp" placeholder="Código de área + número" className={fieldClass} />
                    </label>
                    <label className="text-xs font-bold text-white">
                      Propuesta de interés
                      <select name="interest" defaultValue="" className={`${fieldClass} appearance-none`}>
                        <option value="" disabled className="text-brand-ink">Seleccioná una opción</option>
                        <option className="text-brand-ink">Aulas Abiertas</option>
                        <option className="text-brand-ink">Jornada de Orientación Vocacional</option>
                        <option className="text-brand-ink">Ambas propuestas</option>
                        <option className="text-brand-ink">No estoy seguro/a, quiero orientación</option>
                      </select>
                    </label>
                  </div>

                  <label className="mt-5 block text-xs font-bold text-white">
                    Mensaje
                    <textarea name="message" rows="4" placeholder="¿Hay algo más que quieras contarnos?" className={`${fieldClass} resize-none`} />
                  </label>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p id="form-status" className="max-w-xs text-xs leading-5 text-white/50">
                      El envío todavía no está habilitado en esta versión beta.
                    </p>
                    <button
                      type="submit"
                      disabled
                      className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-3 rounded-full bg-brand-green/55 px-7 py-3 text-sm font-bold text-white"
                    >
                      Enviar consulta <span aria-hidden="true">→</span>
                    </button>
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
