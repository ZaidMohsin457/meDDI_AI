import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Icons } from './Icons'
import { company } from '../site-data'

const productLinks = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Features',     href: '/#features'     },
  { label: 'Case Studies', href: '/case-studies'  },
  { label: 'Request Demo', href: '/contact'        },
]

const companyLinks = [
  { label: 'About',   href: '/about'  },
  { label: 'Team',    href: '/team'   },
  { label: 'Contact', href: '/contact'},
]

const legalLinks = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms'   },
]

export function Footer() {
  return (
    <footer
      className="dark-section text-gray-400 py-16 px-6"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <Logo dark />
            <p className="text-gray-400 text-sm leading-relaxed mt-5 mb-5 max-w-xs">
              Pakistan's first AI-driven prescription safety platform — reducing medication errors
              through Vision-Language Models and real-time drug interaction detection.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 text-xs text-teal-400/80 hover:text-teal-400 transition-colors font-mono"
              >
                <Icons.Mail cls="w-3.5 h-3.5" />
                {company.email}
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="font-semibold text-white mb-5 text-sm">Product</div>
            <nav aria-label="Product links" className="space-y-3 text-sm">
              {productLinks.map(l => (
                l.href.startsWith('/#')
                  ? <a key={l.href} href={l.href} className="block hover:text-teal-400 transition-colors">{l.label}</a>
                  : <Link key={l.href} to={l.href} className="block hover:text-teal-400 transition-colors">{l.label}</Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <div className="font-semibold text-white mb-5 text-sm">Company</div>
            <nav aria-label="Company links" className="space-y-3 text-sm">
              {companyLinks.map(l => (
                <Link key={l.href} to={l.href} className="block hover:text-teal-400 transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} meDDI AI. All rights reserved.
          </div>
          <nav aria-label="Legal links" className="flex items-center gap-6 text-xs">
            {legalLinks.map(l => (
              <Link key={l.href} to={l.href} className="hover:text-teal-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
