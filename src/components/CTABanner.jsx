import { Link } from 'react-router-dom'
import { Icons } from './Icons'
import { useInView } from '../hooks/useInView'

/**
 * Reusable full-width CTA section.
 * @param {{ headline: string, subheadline: string, primaryCta: {label:string,href:string}, secondaryCta?: {label:string,href:string}, dark?: boolean }} props
 */
export function CTABanner({
  headline = 'Ready to Protect Your Patients?',
  subheadline = 'Join healthcare professionals across Pakistan waiting to eliminate medication errors with AI.',
  primaryCta = { label: 'Request Demo', href: '/contact' },
  secondaryCta,
  dark = false,
}) {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`py-20 px-6 ${dark ? 'dark-section' : 'bg-teal-600'}`}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="cta-heading"
          className="font-display font-extrabold text-white leading-tight mb-4"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            ...(inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }),
          }}
        >
          {headline}
        </h2>
        <p
          className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
          style={inView ? { animation: 'fadeUp 0.7s ease-out 0.1s both' } : { opacity: 0 }}
        >
          {subheadline}
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={inView ? { animation: 'fadeUp 0.7s ease-out 0.2s both' } : { opacity: 0 }}
        >
          {primaryCta.href.startsWith('http') ? (
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-teal-700 font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-black/10 hover:-translate-y-0.5 text-sm"
            >
              {primaryCta.label}
              <Icons.ChevronRight cls="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          ) : (
            <Link
              to={primaryCta.href}
              className="group inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-teal-700 font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-black/10 hover:-translate-y-0.5 text-sm"
            >
              {primaryCta.label}
              <Icons.ChevronRight cls="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
          {secondaryCta && (
            secondaryCta.href.startsWith('http') ? (
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white font-medium text-sm transition-colors underline underline-offset-4"
              >
                {secondaryCta.label}
              </a>
            ) : (
              <Link
                to={secondaryCta.href}
                className="text-white/80 hover:text-white font-medium text-sm transition-colors underline underline-offset-4"
              >
                {secondaryCta.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}
