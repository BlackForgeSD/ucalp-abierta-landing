import blueSeal from '../../assets/LOGO ucalp.png'
import whiteSeal from '../../assets/UCALP_LOGO-blanco-sin-Fondo.png'

export default function Logo({ compact = false, light = false }) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="UCALP Abierta">
      <span
        className={`flex flex-none items-center justify-center overflow-hidden rounded-full border ${
          light ? 'border-white/40 bg-white/[0.04]' : 'border-brand-blue/20 bg-white'
        } ${compact ? 'h-12 w-12' : 'h-11 w-11'}`}
      >
        <img
          src={light ? whiteSeal : blueSeal}
          alt=""
          aria-hidden="true"
          className={`w-auto max-w-none -translate-y-px object-contain ${compact ? 'h-12' : 'h-11'}`}
        />
      </span>

      {!compact && (
        <span className="leading-none">
          <span className={`block text-[1.65rem] font-extrabold tracking-[-0.06em] ${light ? 'text-white' : 'text-brand-blue'}`}>
            ucalp
          </span>
          <span className={`mt-1 block text-[0.57rem] font-bold uppercase tracking-[0.23em] ${light ? 'text-brand-lime' : 'text-brand-green'}`}>
            abierta
          </span>
        </span>
      )}
    </span>
  )
}
