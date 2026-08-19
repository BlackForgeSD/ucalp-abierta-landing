import ArrowIcon from './ArrowIcon'

const variants = {
  primary: 'bg-brand-green text-white hover:bg-[#54a225] focus-visible:outline-brand-green',
  blue: 'bg-brand-blue text-white hover:bg-brand-deep focus-visible:outline-brand-blue',
  light: 'bg-white text-brand-blue hover:bg-brand-mist focus-visible:outline-white',
  outline: 'border border-brand-blue/20 bg-white/70 text-brand-blue hover:border-brand-blue/40 hover:bg-white focus-visible:outline-brand-blue',
}

export default function ButtonLink({ href, children, variant = 'primary', className = '', arrow = true, ...props }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {arrow && <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </a>
  )
}
