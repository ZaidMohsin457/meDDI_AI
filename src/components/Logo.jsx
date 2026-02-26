import { Link } from 'react-router-dom'
import { Icons } from './Icons'

export function Logo({ dark = false, linkTo = '/' }) {
  return (
    <Link to={linkTo} className="flex items-center gap-2.5 shrink-0" aria-label="meDDI AI home">
      <div className="relative w-9 h-9">
        <div className="absolute inset-0 bg-teal-600 rounded-xl shadow-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icons.Shield cls="w-5 h-5 text-white" />
        </div>
      </div>
      <span
        className={`font-display font-extrabold text-xl tracking-tight leading-none ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        me<span className="text-teal-500">DDI</span>{' '}
        <span className={`font-mono font-semibold text-sm ${dark ? 'text-teal-400' : 'text-teal-500'}`}>
          AI
        </span>
      </span>
    </Link>
  )
}
