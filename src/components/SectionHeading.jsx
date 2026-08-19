export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false, onColor = false, lightAccent = 'lime' }) {
  const centered = align === 'center'
  const lightKicker = lightAccent === 'white'
    ? '!border-white/25 !bg-white/15 !text-white'
    : '!border-white/20 !bg-white/10 !text-brand-lime'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <p className={`section-kicker ${light ? lightKicker : ''} ${onColor ? '!border-white/30 !bg-white/15 !text-brand-navy' : ''}`}>
        <span className={`h-2 w-2 rounded-full ${onColor ? 'bg-brand-navy' : light ? (lightAccent === 'white' ? 'bg-brand-deep' : 'bg-brand-lime') : 'bg-brand-green'}`} />
        {eyebrow}
      </p>
      <h2 className={`mt-5 text-balance text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[3.55rem] ${light ? 'text-white' : onColor ? 'text-brand-navy' : 'text-brand-deep'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-pretty text-base leading-7 sm:text-lg ${light ? 'text-white/70' : onColor ? 'font-medium text-brand-navy/85' : 'text-brand-ink/70'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
