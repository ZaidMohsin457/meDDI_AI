import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Logo } from './Logo'
import { Icons } from './Icons'
import { navigation } from '../site-data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [])

  const navLinkClass = ({ isActive }) =>
    `animated-underline text-sm font-medium transition-colors ${
      isActive ? 'text-teal-600' : 'text-gray-500 hover:text-ink'
    }`

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F4EF]/95 backdrop-blur-sm border-b border-gray-200/70 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.links.map(l => (
            <NavLink key={l.href} to={l.href} className={navLinkClass} end={l.href === '/'}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={navigation.cta.href}
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-teal-600/20 hover:shadow-teal-600/30 hover:-translate-y-px"
          >
            {navigation.cta.label}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen
              ? <Icons.X cls="w-5 h-5 text-ink" />
              : <Icons.Menu cls="w-5 h-5 text-ink" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F5F4EF] border-t border-gray-200 px-6 py-5 space-y-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block py-2.5 text-sm font-medium transition-colors ${isActive ? 'text-teal-600' : 'text-gray-700'}`
            }
            onClick={() => setMobileOpen(false)}
          >
            Home
          </NavLink>
          {navigation.links.map(l => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `block py-2.5 text-sm font-medium transition-colors ${isActive ? 'text-teal-600' : 'text-gray-700'}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <div className="pt-3">
            <Link
              to={navigation.cta.href}
              className="block w-full text-center bg-teal-600 text-white py-3 rounded-xl font-bold text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {navigation.cta.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
