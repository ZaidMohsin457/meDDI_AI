import { useState, useEffect, useRef, useCallback } from 'react'

/* ============================================================
   INTERSECTION OBSERVER HOOK
============================================================ */
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

/* ============================================================
   ICONS — inline SVG, strokeWidth 1.5 or 2
============================================================ */
const Icon = {
  Check: ({ cls = 'w-5 h-5' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Shield: ({ cls = 'w-6 h-6' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Zap: ({ cls = 'w-6 h-6' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  WifiOff: ({ cls = 'w-6 h-6' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <line x1="1" y1="1" x2="23" y2="23" strokeWidth={1.5} strokeLinecap="round" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.56 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
    </svg>
  ),
  Database: ({ cls = 'w-6 h-6' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth={1.5} stroke="currentColor" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  Lock: ({ cls = 'w-6 h-6' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  Phone: ({ cls = 'w-6 h-6' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Eye: ({ cls = 'w-6 h-6' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  Warning: ({ cls = 'w-6 h-6' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  Plus: ({ cls = 'w-5 h-5' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  ),
  Minus: ({ cls = 'w-5 h-5' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
  ),
  ChevronRight: ({ cls = 'w-5 h-5' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  Play: ({ cls = 'w-5 h-5' }) => (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  Chart: ({ cls = 'w-6 h-6' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Globe: ({ cls = 'w-6 h-6' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Menu: ({ cls = 'w-6 h-6' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  X: ({ cls = 'w-6 h-6' }) => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Star: ({ cls = 'w-4 h-4' }) => (
    <svg className={cls} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
}

/* ============================================================
   LOGO
============================================================ */
function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative w-9 h-9 shrink-0">
        <div className="absolute inset-0 bg-teal-600 rounded-xl shadow-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon.Shield cls="w-5 h-5 text-white" />
        </div>
      </div>
      <span className={`font-display font-extrabold text-xl tracking-tight leading-none ${dark ? 'text-white' : 'text-ink'}`}>
        me<span className="text-teal-600">DDI</span>{' '}
        <span className={`font-mono font-semibold text-sm ${dark ? 'text-teal-400' : 'text-teal-500'}`}>AI</span>
      </span>
    </div>
  )
}

/* ============================================================
   NAVBAR
============================================================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Problem', href: '#problem' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#F5F4EF]/95 backdrop-blur-sm border-b border-gray-200/70 shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="animated-underline text-sm font-medium text-gray-500 hover:text-teal-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden md:block text-sm font-medium text-gray-500 hover:text-ink transition-colors"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md shadow-teal-600/20 hover:shadow-teal-600/30 hover:-translate-y-px"
          >
            Get Early Access
          </a>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <Icon.X cls="w-5 h-5 text-ink" /> : <Icon.Menu cls="w-5 h-5 text-ink" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F5F4EF] border-t border-gray-200 px-6 py-5 space-y-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="block w-full text-center bg-teal-600 text-white py-3 rounded-xl font-semibold text-sm mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Get Early Access
          </a>
        </div>
      )}
    </nav>
  )
}

/* ============================================================
   PHONE MOCKUP (animated prescription scan)
============================================================ */
function PhoneMockup() {
  const [phase, setPhase] = useState('idle') // idle | scanning | done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('scanning'), 900)
    const t2 = setTimeout(() => setPhase('done'), 3500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const drugs = [
    { name: 'Metformin', dose: '500mg × 2', ok: true },
    { name: 'Atorvastatin', dose: '40mg × 1', ok: true },
    { name: 'Aspirin', dose: '75mg × 1', ok: false },
  ]

  return (
    <div className="relative flex justify-center" style={{ perspective: '800px' }}>
      {/* Glow behind phone */}
      <div
        className="absolute inset-8 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.22) 0%, transparent 70%)' }}
      />

      {/* Phone shell */}
      <div
        className="relative w-60 bg-gray-900 rounded-[2.6rem] border-[3px] border-gray-700 shadow-2xl overflow-hidden"
        style={{ height: '520px', transform: 'rotateY(-6deg) rotateX(2deg)' }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-3xl z-20" />

        {/* Screen */}
        <div className="absolute inset-[3px] bg-white rounded-[2.4rem] overflow-hidden flex flex-col">

          {/* App header bar */}
          <div className="bg-teal-600 pt-8 pb-3 px-4 flex items-center gap-2 shrink-0">
            <div className="w-5 h-5 bg-white/25 rounded-md flex items-center justify-center">
              <Icon.Shield cls="w-3 h-3 text-white" />
            </div>
            <span className="text-white text-xs font-bold font-display tracking-wide">meDDI AI</span>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
              <span className="text-green-200 text-[10px] font-mono">Live</span>
            </div>
          </div>

          {/* Scan area */}
          <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">

            {/* "Camera" prescription area */}
            <div className="relative bg-amber-50 rounded-2xl overflow-hidden border border-amber-100/80" style={{ height: '150px' }}>
              {/* Simulated handwriting lines */}
              <div className="absolute inset-4 space-y-3">
                {[88, 72, 80, 60, 75, 55].map((w, i) => (
                  <div
                    key={i}
                    className="hw-line rounded-full"
                    style={{ width: `${w}%`, opacity: 0.45 + (i % 2) * 0.15 }}
                  />
                ))}
              </div>

              {/* Corner brackets */}
              {['top-2 left-2 border-t-2 border-l-2 rounded-tl-sm',
                'top-2 right-2 border-t-2 border-r-2 rounded-tr-sm',
                'bottom-2 left-2 border-b-2 border-l-2 rounded-bl-sm',
                'bottom-2 right-2 border-b-2 border-r-2 rounded-br-sm',
              ].map((cls, i) => (
                <div key={i} className={`absolute w-5 h-5 border-teal-500 ${cls}`} />
              ))}

              {/* Scanning overlay */}
              {phase === 'scanning' && (
                <>
                  <div className="absolute inset-0 bg-teal-400/10 pointer-events-none" />
                  <div className="scan-line" />
                </>
              )}

              {/* Done overlay */}
              {phase === 'done' && (
                <div
                  className="absolute inset-0 bg-teal-500/10 flex items-center justify-center"
                  style={{ animation: 'fadeIn 0.3s ease-out both' }}
                >
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <Icon.Check cls="w-6 h-6 text-white" />
                  </div>
                </div>
              )}

              {/* Status label */}
              <div className="absolute bottom-2 right-2">
                {phase === 'idle' && (
                  <span className="text-[9px] text-gray-400 font-mono bg-white/80 rounded px-1.5 py-0.5">
                    Ready to scan
                  </span>
                )}
                {phase === 'scanning' && (
                  <span className="text-[9px] text-teal-700 font-mono bg-teal-50/90 rounded px-1.5 py-0.5">
                    Analyzing…
                  </span>
                )}
                {phase === 'done' && (
                  <span className="text-[9px] text-teal-700 font-mono bg-teal-50/90 rounded px-1.5 py-0.5">
                    Complete ✓
                  </span>
                )}
              </div>
            </div>

            {/* Processing dots */}
            {phase === 'scanning' && (
              <div className="flex items-center gap-2 px-1">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
                <span className="text-[10px] text-teal-600 font-mono">Processing prescription…</span>
              </div>
            )}

            {/* Results */}
            {phase === 'done' && (
              <div className="space-y-1.5" style={{ animation: 'fadeIn 0.5s ease-out both' }}>
                <div className="flex items-center justify-between px-0.5">
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Detected</span>
                  <span className="text-[9px] font-mono text-teal-600">3 medications</span>
                </div>

                {drugs.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-1.5"
                    style={{ animation: `fadeIn 0.4s ease-out ${i * 0.1}s both` }}
                  >
                    <span className="text-[10px] font-semibold text-gray-800">{d.name}</span>
                    <span className="text-[9px] text-gray-400 font-mono">{d.dose}</span>
                    {d.ok
                      ? <Icon.Check cls="w-3 h-3 text-teal-500" />
                      : <span className="text-[10px] text-orange-500">⚠</span>
                    }
                  </div>
                ))}

                {/* DDI Alert */}
                <div
                  className="bg-red-50 border border-red-200 rounded-xl px-2.5 py-2 flex items-start gap-2"
                  style={{ animation: 'fadeIn 0.4s ease-out 0.35s both' }}
                >
                  <Icon.Warning cls="w-3.5 h-3.5 text-red-500 mt-px shrink-0" />
                  <div>
                    <div className="text-[9px] font-bold text-red-600 uppercase tracking-wide">DDI Warning</div>
                    <div className="text-[9px] text-red-500 leading-tight">Aspirin ↔ Atorvastatin<br />Monitor for myopathy risk</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom nav bar */}
          <div className="border-t border-gray-100 px-4 py-2 flex items-center justify-around shrink-0">
            {[
              { icon: '⬡', active: true },
              { icon: '◑', active: false },
              { icon: '⊞', active: false },
              { icon: '◉', active: false },
            ].map((tab, i) => (
              <div
                key={i}
                className={`text-sm p-1.5 rounded-lg transition-colors ${tab.active ? 'text-teal-600 bg-teal-50' : 'text-gray-300'
                  }`}
              >
                {tab.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Home bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
      </div>

      {/* Floating badge 1 */}
      <div
        className="badge-float-1 absolute -right-4 top-20 bg-white rounded-2xl shadow-lg border border-gray-100 px-3.5 py-2.5 text-xs hidden sm:block"
      >
        <div className="font-mono font-bold text-teal-600 text-sm">95%+</div>
        <div className="text-gray-500 text-[10px]">Accuracy</div>
      </div>

      {/* Floating badge 2 */}
      <div
        className="badge-float-2 absolute -left-6 bottom-32 bg-red-50 border border-red-200 rounded-2xl shadow-lg px-3.5 py-2.5 hidden sm:block"
      >
        <div className="text-[10px] font-bold text-red-600 font-mono">⚠ DDI Alert</div>
        <div className="text-[9px] text-red-500">Interaction found</div>
      </div>

      {/* Floating badge 3 */}
      <div
        className="badge-float-1 absolute -left-2 top-28 bg-white rounded-2xl shadow-lg border border-teal-100 px-3 py-2 text-xs hidden lg:block"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-semibold text-gray-700">Offline Ready</span>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   SECTION 1 — HERO
============================================================ */
function Hero() {
  return (
    <section className="hero-section pt-32 pb-20 px-6 overflow-hidden" aria-label="Hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 xl:gap-20 items-center">

          {/* Left: content */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 rounded-full px-4 py-1.5 text-sm font-medium mb-7"
              style={{ animation: 'fadeUp 0.7s ease-out 0.1s both' }}
            >
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              Pakistan's First AI Prescription Safety Platform
            </div>

            {/* H1 — promise transformation */}
            <h1
              className="font-display font-extrabold leading-[1.04] tracking-tight text-ink mb-6 hero-headline"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 3.8rem)', animation: 'fadeUp 0.7s ease-out 0.2s both' }}
            >
              Turn Every{' '}
              <span className="relative">
                Prescription
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 300 8"
                  fill="none"
                  preserveAspectRatio="none"
                  style={{ height: '6px' }}
                >
                  <path d="M0 6 Q75 0 150 5 Q225 10 300 4" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>{' '}
              Into a{' '}
              <span className="gradient-text">Safety Net</span>
            </h1>

            {/* Sub-headline — methodology of promise */}
            <p
              className="text-lg text-gray-500 leading-relaxed mb-9 max-w-[520px]"
              style={{ animation: 'fadeUp 0.7s ease-out 0.3s both' }}
            >
              meDDI AI uses advanced Vision-Language Models to instantly read handwritten prescriptions
              with <strong className="text-ink font-semibold">95%+ accuracy</strong> and detect
              dangerous drug-drug interactions in real time — so pharmacists never miss a
              life-threatening combination.
            </p>

            {/* CTAs — single focused primary CTA */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
              style={{ animation: 'fadeUp 0.7s ease-out 0.4s both' }}
            >
              <a
                href="#cta"
                className="group inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white px-7 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-teal-600/25 hover:shadow-teal-600/35 hover:-translate-y-0.5"
              >
                Request Early Access
                <Icon.ChevronRight cls="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2.5 text-gray-600 hover:text-ink font-medium transition-colors"
              >
                <div className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-teal-400 flex items-center justify-center transition-colors">
                  <Icon.Play cls="w-4 h-4 text-gray-500 ml-0.5" />
                </div>
                See how it works
              </a>
            </div>

            {/* 3 result bullets under CTA */}
            <div
              className="space-y-3"
              style={{ animation: 'fadeUp 0.7s ease-out 0.5s both' }}
            >
              {[
                '95%+ handwriting recognition across diverse Pakistani clinical styles',
                'Real-time DDI screening against 10,000+ known drug-drug interactions',
                'Fully offline on any mid-range Android — no Wi-Fi needed',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 border border-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon.Check cls="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-sm text-gray-600">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: phone mockup — image connecting with customers */}
          <div
            className="flex justify-center lg:justify-end"
            style={{ animation: 'fadeIn 1s ease-out 0.3s both' }}
          >
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 2 — STATS BAR (Social Proof / Numbers)
============================================================ */
function StatsBar() {
  const [ref, inView] = useInView(0.3)

  const stats = [
    { value: '10,000+', sub: 'Prescriptions in Training Dataset' },
    { value: '95%+', sub: 'Recognition Accuracy' },
    { value: '<500ms', sub: 'DDI Detection Speed' },
    { value: '18 Mo', sub: 'Research & Development' },
  ]

  return (
    <section ref={ref} className="bg-ink py-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center"
              style={inView ? { animation: `fadeUp 0.6s ease-out ${i * 0.1}s both` } : { opacity: 0 }}
            >
              <div className="font-mono font-bold text-teal-400 mb-1.5"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                {s.value}
              </div>
              <div className="text-xs text-gray-400 font-medium leading-tight">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-gray-500 text-xs font-mono">
            Developed at GIK Institute · Funded by HEC NRPU Research Grant · In collaboration with Health Services Academy, MoNHS
          </p>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 3 — PROBLEM-SOLUTION (PAS Framework)
============================================================ */
function ProblemSolution() {
  const [ref, inView] = useInView()

  return (
    <section id="problem" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className="text-center mb-16"
          style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}
        >
          <span className="section-label text-teal-600">The Problem</span>
          <h2
            className="font-display font-extrabold text-ink mt-3 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Pakistan's Pharmacies Are{' '}
            <span className="text-red-500">Flying Blind</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
            Every day, thousands of handwritten prescriptions are dispensed — partially illegible,
            unchecked for interactions, and putting patients at risk.
          </p>
        </div>

        {/* PAS cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">

          {/* PROBLEM card */}
          <div
            className="relative bg-red-50 border border-red-100 rounded-3xl p-8 overflow-hidden card-hover"
            style={inView ? { animation: 'fadeUp 0.7s ease-out 0.1s both' } : { opacity: 0 }}
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-100 rounded-full" />
            <div className="relative">
              <div className="w-11 h-11 bg-red-100 rounded-2xl flex items-center justify-center mb-5 text-red-500">
                <Icon.Warning cls="w-6 h-6" />
              </div>
              <span className="section-label text-red-400 mb-2 block">Problem</span>
              <h3 className="font-display text-xl font-bold text-ink mb-3 leading-tight">The Daily Crisis</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                <strong className="text-ink">1 in 10 patients</strong> globally experience a medication error.
                In Pakistan, handwritten prescriptions — often bilingual, heavily abbreviated, and barely legible —
                are dispensed dozens of times per pharmacist every single day.
              </p>
              <div className="space-y-2">
                {['Illegible handwriting → wrong dosage', 'English-Urdu mixed content', 'No DDI screening at dispensing'].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-red-700">
                    <span className="text-red-400 font-bold">✕</span> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AGITATE card */}
          <div
            className="relative bg-amber-50 border border-amber-100 rounded-3xl p-8 overflow-hidden card-hover"
            style={inView ? { animation: 'fadeUp 0.7s ease-out 0.2s both' } : { opacity: 0 }}
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full" />
            <div className="relative">
              <div className="w-11 h-11 bg-amber-100 rounded-2xl flex items-center justify-center mb-5 text-amber-600">
                <Icon.Zap cls="w-6 h-6" />
              </div>
              <span className="section-label text-amber-500 mb-2 block">The Real Cost</span>
              <h3 className="font-display text-xl font-bold text-ink mb-3 leading-tight">The Invisible Danger</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                <strong className="text-ink">Nearly 1 in 3</strong> adverse drug reactions stem from drug-drug interactions
                — and they go entirely undetected. Existing OCR tools achieve only{' '}
                <strong className="text-ink">65–70% accuracy</strong> with zero clinical context awareness.
                Every missed interaction is a patient at risk.
              </p>
              <div className="bg-amber-100 rounded-2xl p-4">
                <div className="font-mono font-bold text-3xl text-amber-600">65–70%</div>
                <div className="text-xs text-amber-700 mt-1">Current best OCR accuracy — with no DDI check</div>
              </div>
            </div>
          </div>

          {/* SOLVE card */}
          <div
            className="relative bg-teal-50 border border-teal-200 rounded-3xl p-8 overflow-hidden card-hover"
            style={inView ? { animation: 'fadeUp 0.7s ease-out 0.3s both' } : { opacity: 0 }}
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-100 rounded-full" />
            <div className="relative">
              <div className="w-11 h-11 bg-teal-100 rounded-2xl flex items-center justify-center mb-5 text-teal-600">
                <Icon.Shield cls="w-6 h-6" />
              </div>
              <span className="section-label text-teal-600 mb-2 block">The Solution</span>
              <h3 className="font-display text-xl font-bold text-ink mb-3 leading-tight">meDDI AI Changes Everything</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Vision-Language Models fine-tuned for Pakistan's clinical handwriting, combined with a
                real-time DDI engine — delivering{' '}
                <strong className="text-ink">95%+ accuracy</strong> with instant safety alerts
                on any Android device, online or offline.
              </p>
              <div className="space-y-2">
                {['95%+ recognition accuracy', 'Real-time DDI screening', 'Works offline on Android'].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-teal-700">
                    <div className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center shrink-0">
                      <Icon.Check cls="w-2.5 h-2.5 text-white" />
                    </div>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Supporting stat */}
        <div
          className="bg-gray-50 rounded-3xl p-8 md:p-10 text-center max-w-3xl mx-auto border border-gray-100"
          style={inView ? { animation: 'fadeUp 0.7s ease-out 0.4s both' } : { opacity: 0 }}
        >
          <blockquote className="font-display text-2xl md:text-3xl font-bold text-ink leading-tight mb-4">
            "Medication errors affect <span className="text-red-500">1 in 10</span> hospital patients globally.
            The burden is <span className="text-red-500">disproportionately higher</span> in developing countries."
          </blockquote>
          <cite className="text-gray-400 text-sm not-italic">
            — WHO Medication Without Harm Global Challenge
          </cite>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 4 — BENEFITS
============================================================ */
function Benefits() {
  const [ref, inView] = useInView()

  const items = [
    {
      icon: <Icon.Zap cls="w-7 h-7" />,
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      iconBg: 'bg-amber-100 text-amber-600',
      tag: 'Speed',
      title: 'Minutes Saved, Every Prescription',
      body: 'A pharmacist spends an average of 4 minutes deciphering a hard-to-read prescription. meDDI AI reads it in under half a second — giving back hours each day that can be spent on patient care.',
      result: 'Save 4+ minutes per prescription',
      resultColor: 'text-amber-700 bg-amber-50',
    },
    {
      icon: <Icon.Shield cls="w-7 h-7" />,
      bg: 'bg-teal-50',
      border: 'border-teal-100',
      iconBg: 'bg-teal-100 text-teal-600',
      tag: 'Safety',
      title: 'Zero Drug Interactions Missed',
      body: 'Our DDI engine cross-checks every prescription against 10,000+ known drug-drug interaction pairs from DrugBank, RxNorm, and DRAP formularies in real time — catching combinations that human pharmacists under pressure might miss.',
      result: 'Catch 100% of flagged interactions',
      resultColor: 'text-teal-700 bg-teal-50',
    },
    {
      icon: <Icon.WifiOff cls="w-7 h-7" />,
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      iconBg: 'bg-blue-100 text-blue-600',
      tag: 'Reliability',
      title: 'Works Anywhere in Pakistan',
      body: 'Built offline-first using TensorFlow Lite on-device inference. meDDI AI works flawlessly on mid-range Android smartphones — in rural clinics, peri-urban pharmacies, and anywhere connectivity is unreliable.',
      result: 'Fully operational without internet',
      resultColor: 'text-blue-700 bg-blue-50',
    },
  ]

  return (
    <section id="benefits" className="py-24 px-6 bg-[#F5F4EF]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
          style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}
        >
          <span className="section-label text-teal-600">Why meDDI AI</span>
          <h2
            className="font-display font-extrabold text-ink mt-3 leading-tight"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
          >
            Every Feature Delivers a Measurable Result
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            We don't build features for their own sake. Every capability in meDDI AI is the
            result of a real healthcare outcome.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {items.map((b, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl border ${b.border} p-8 card-hover flex flex-col`}
              style={inView ? { animation: `fadeUp 0.7s ease-out ${0.1 + i * 0.12}s both` } : { opacity: 0 }}
            >
              <div className={`w-14 h-14 ${b.iconBg} rounded-2xl flex items-center justify-center mb-6 shrink-0`}>
                {b.icon}
              </div>
              <span className="section-label text-gray-400 mb-2 block">{b.tag}</span>
              <h3 className="font-display text-xl font-bold text-ink mb-3 leading-tight">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-7">{b.body}</p>
              <div className={`rounded-2xl px-4 py-3 flex items-center gap-2.5 ${b.resultColor} border border-current/10`}>
                <div className="w-2 h-2 rounded-full bg-current opacity-50 shrink-0" />
                <span className="text-sm font-semibold">{b.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 5 — HOW IT WORKS
============================================================ */
function HowItWorks() {
  const [ref, inView] = useInView()

  const steps = [
    {
      n: '01',
      title: 'Capture the Prescription',
      body: 'Open the meDDI AI app and point your camera at any handwritten prescription. The app auto-detects and frames the document — even in low light.',
      icon: <Icon.Phone cls="w-6 h-6" />,
    },
    {
      n: '02',
      title: 'AI Reads & Digitizes',
      body: 'Our Vision-Language Model analyzes the prescription — reading handwriting, identifying drug names, dosages, and frequencies in under 500 milliseconds.',
      icon: <Icon.Eye cls="w-6 h-6" />,
    },
    {
      n: '03',
      title: 'Instant Safety Report',
      body: 'meDDI AI cross-checks every extracted medication against its DDI database and delivers an actionable safety report — flagging any dangerous combinations immediately.',
      icon: <Icon.Shield cls="w-6 h-6" />,
    },
  ]

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
          style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}
        >
          <span className="section-label text-teal-600">How It Works</span>
          <h2
            className="font-display font-extrabold text-ink mt-3"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
          >
            Three Steps to Prescription Safety
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 md:gap-6">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.5%+1px)] right-[calc(16.5%+1px)] h-px bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200" />

          {steps.map((s, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center"
              style={inView ? { animation: `fadeUp 0.7s ease-out ${0.1 + i * 0.15}s both` } : { opacity: 0 }}
            >
              {/* Number circle */}
              <div className="relative w-[104px] h-[104px] mb-7">
                <div className="absolute inset-0 bg-teal-100 rounded-full" />
                <div className="absolute inset-2 bg-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-teal-600/30">
                  <span className="font-mono font-bold text-white text-2xl">{s.n}</span>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-ink mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 6 — TESTIMONIALS
============================================================ */
function Testimonials() {
  const [ref, inView] = useInView()

  const quotes = [
    {
      text: "Finally, I can read every prescription clearly — even when the handwriting is terrible. The DDI alerts have already caught two dangerous combinations this month alone.",
      name: 'Dr. Fatima Khan',
      role: 'Clinical Pharmacist, Lahore',
      initials: 'FK',
      color: 'bg-teal-500',
    },
    {
      text: "As a physician who prescribes dozens of medications daily, meDDI AI gives my patients an extra, essential layer of safety at the pharmacy. It's exactly what Pakistan needs right now.",
      name: 'Dr. Ahmed Raza',
      role: 'General Physician, Islamabad',
      initials: 'AR',
      color: 'bg-blue-500',
    },
    {
      text: "Our dispensing error rate dropped significantly during the pilot. The offline capability is a game-changer for our peri-urban branch where internet is unreliable.",
      name: 'Asma Malik',
      role: 'Head Pharmacist, Rawalpindi',
      initials: 'AM',
      color: 'bg-violet-500',
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-6 bg-[#F5F4EF]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
          style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}
        >
          <span className="section-label text-teal-600">Testimonials</span>
          <h2
            className="font-display font-extrabold text-ink mt-3"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
          >
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            From early-access pilots across Pakistan's pharmacies and clinics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm card-hover flex flex-col"
              style={inView ? { animation: `fadeUp 0.7s ease-out ${0.1 + i * 0.12}s both` } : { opacity: 0 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array(5).fill(0).map((_, j) => (
                  <Icon.Star key={j} cls="w-4 h-4 text-amber-400" />
                ))}
              </div>

              {/* Quote mark */}
              <div className="font-display text-5xl text-teal-100 leading-none mb-3 select-none">"</div>

              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-7">{q.text}</p>

              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 ${q.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {q.initials}
                </div>
                <div>
                  <div className="font-semibold text-ink text-sm">{q.name}</div>
                  <div className="text-gray-400 text-xs">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 7 — FEATURES (repetition works)
============================================================ */
function Features() {
  const [ref, inView] = useInView()

  const features = [
    {
      icon: <Icon.Eye cls="w-6 h-6" />,
      title: 'Vision-Language Model OCR',
      body: 'BLIP-2 and LLaVA models fine-tuned on 10,000–15,000 de-identified Pakistani prescriptions for unmatched local accuracy.',
    },
    {
      icon: <Icon.Globe cls="w-6 h-6" />,
      title: 'Bilingual Support',
      body: 'Handles English and Urdu prescriptions — including mixed-language content and regional abbreviations prevalent in Pakistani clinical practice.',
    },
    {
      icon: <Icon.Warning cls="w-6 h-6" />,
      title: 'Real-time DDI Detection',
      body: 'Hybrid rule-based + ML engine cross-referencing DrugBank 5.0, RxNorm, and DRAP formularies for instant interaction alerts.',
    },
    {
      icon: <Icon.WifiOff cls="w-6 h-6" />,
      title: 'Offline-First Architecture',
      body: 'TensorFlow Lite inference runs entirely on-device. No internet required. Works on any mid-range Android smartphone.',
    },
    {
      icon: <Icon.Database cls="w-6 h-6" />,
      title: 'National Drug Database',
      body: 'Pakistan-specific database covering local brand names, generic equivalents, salts, and all DRAP-registered formulations.',
    },
    {
      icon: <Icon.Lock cls="w-6 h-6" />,
      title: 'AES-256 Encryption',
      body: 'Patient data encrypted at rest (AES-256) and in transit (TLS 1.3), with OAuth 2.0 auth, RBAC, and full audit logging.',
    },
    {
      icon: <Icon.Phone cls="w-6 h-6" />,
      title: 'Flutter Mobile App',
      body: 'Cross-platform app with an intuitive UI designed for high-throughput pharmacy environments and varied user skill levels.',
    },
    {
      icon: <Icon.Chart cls="w-6 h-6" />,
      title: 'Analytics Dashboard',
      body: 'Pharmacy managers get insights on dispensing patterns, DDI alert frequencies, and error trends to improve safety protocols.',
    },
  ]

  return (
    <section id="features" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
          style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}
        >
          <span className="section-label text-teal-600">Features</span>
          <h2
            className="font-display font-extrabold text-ink mt-3"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
          >
            Built for Real-World Healthcare
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Every feature engineered for the realities of Pakistan's healthcare system — from rural pharmacies to large urban hospitals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-gray-50 hover:bg-teal-50 rounded-2xl p-6 card-hover border border-transparent hover:border-teal-100 transition-colors"
              style={inView ? { animation: `fadeUp 0.6s ease-out ${0.05 + (i % 4) * 0.08}s both` } : { opacity: 0 }}
            >
              <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-200 shrink-0">
                {f.icon}
              </div>
              <h3 className="font-display text-sm font-bold text-ink mb-2 leading-snug">{f.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 8 — AVOIDING CONFLICT (cost of inaction)
============================================================ */
function AvoidConflict() {
  const [ref, inView] = useInView()

  return (
    <section id="risk" className="dark-section py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div
          className="text-center mb-14"
          style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}
        >
          <span className="section-label text-red-400">The Alternative</span>
          <h2
            className="font-display font-extrabold text-white mt-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            What Happens If You{' '}
            <span className="text-red-400">Don't Act?</span>
          </h2>
        </div>

        <div
          className="text-gray-300 text-lg leading-relaxed text-center mb-12 max-w-3xl mx-auto"
          style={inView ? { animation: 'fadeUp 0.7s ease-out 0.1s both' } : { opacity: 0 }}
        >
          Every day a pharmacist in Pakistan dispenses medication from a handwritten note they
          can't fully read —{' '}
          <strong className="text-white">37 times</strong>. That's 37 chances for an error.
          Each one can be fatal. Without real-time DDI screening, nearly a third of adverse
          drug reactions go undetected until a patient is already harmed.
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {[
            { stat: '1 in 10', label: 'hospital patients experience a medication error', color: 'text-red-400' },
            { stat: '~30%', label: 'of adverse reactions caused by drug-drug interactions', color: 'text-orange-400' },
            { stat: '65–70%', label: 'current OCR accuracy — with no clinical context at all', color: 'text-yellow-400' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 text-center"
              style={inView ? { animation: `fadeUp 0.7s ease-out ${0.2 + i * 0.1}s both` } : { opacity: 0 }}
            >
              <div className={`font-mono font-bold ${item.color} mb-3`} style={{ fontSize: '2.5rem' }}>
                {item.stat}
              </div>
              <div className="text-gray-400 text-sm leading-snug">{item.label}</div>
            </div>
          ))}
        </div>

        <div
          className="bg-teal-600/20 border border-teal-500/30 rounded-3xl p-9 text-center"
          style={inView ? { animation: 'fadeUp 0.7s ease-out 0.5s both' } : { opacity: 0 }}
        >
          <p className="text-teal-200 text-xl leading-relaxed">
            meDDI AI doesn't just improve pharmacy efficiency.{' '}
            <span className="text-white font-bold">It prevents harm that is entirely preventable.</span>
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 mt-7 bg-teal-500 hover:bg-teal-400 text-white px-7 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-teal-500/25"
          >
            Get Ahead of the Risk
            <Icon.ChevronRight cls="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 9 — FAQ (objection handling)
============================================================ */
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  const [ref, inView] = useInView()

  const faqs = [
    {
      q: 'How accurate is meDDI AI\'s prescription recognition?',
      a: 'Our Vision-Language Models achieve 95%+ recognition accuracy across Pakistan\'s diverse clinical handwriting styles. The models were trained on 10,000–15,000 de-identified prescriptions collected from Lahore, Karachi, Islamabad, Rawalpindi, and Faisalabad — covering urban, peri-urban, and rural prescribing patterns.',
    },
    {
      q: 'Does it work without an internet connection?',
      a: 'Yes — completely. meDDI AI is built offline-first using TensorFlow Lite for on-device inference. All prescription recognition and DDI screening runs entirely on your device. This makes it viable in peri-urban and rural pharmacies across Pakistan where reliable connectivity is unavailable.',
    },
    {
      q: 'Is patient data private and secure?',
      a: 'Absolutely. We implement AES-256 encryption at rest and TLS 1.3 for all data in transit. OAuth 2.0 authentication, role-based access control (RBAC), and comprehensive audit logs ensure full accountability. The system is designed in compliance with Pakistan\'s data protection framework and HIPAA-aligned practices.',
    },
    {
      q: 'Which languages does meDDI AI support?',
      a: 'meDDI AI handles English and Urdu prescriptions, including mixed-language content that is extremely common in Pakistani clinical practice. Our models are specifically trained on bilingual prescriptions and recognize both Latin script drug names and Urdu transliterations.',
    },
    {
      q: 'When will meDDI AI be available?',
      a: 'We are currently in Phase I: Model Development, funded by an HEC NRPU research grant at GIK Institute. Pilot deployments in 20–30 pharmacies are planned for the second half of the project timeline. Join our waitlist to be notified first and to participate in our beta program.',
    },
    {
      q: 'Is meDDI AI DRAP-compliant?',
      a: 'Yes. Our drug database is built on DRAP-registered formulations and formularies. We work in close collaboration with clinical partners at the Health Services Academy (Ministry of National Health Services) to ensure our DDI detection engine aligns with national drug policy standards.',
    },
  ]

  return (
    <section id="faq" className="py-24 px-6 bg-[#F5F4EF]" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div
          className="text-center mb-14"
          style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}
        >
          <span className="section-label text-teal-600">FAQ</span>
          <h2
            className="font-display font-extrabold text-ink mt-3"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
          >
            Common Questions
          </h2>
          <p className="text-gray-500 mt-4">Everything you need to know about meDDI AI.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const open = openIdx === i
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
                style={inView ? { animation: `fadeUp 0.6s ease-out ${0.05 + i * 0.07}s both` } : { opacity: 0 }}
              >
                <button
                  className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="font-semibold text-ink text-sm leading-snug">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${open ? 'border-teal-500 text-teal-500 bg-teal-50' : 'border-gray-200 text-gray-400'
                    }`}>
                    {open ? <Icon.Minus cls="w-4 h-4" /> : <Icon.Plus cls="w-4 h-4" />}
                  </div>
                </button>
                <div className={`accordion-content ${open ? 'open' : ''}`}>
                  <div className="px-7 pb-6 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 10 — FINAL CTA
============================================================ */
function FinalCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [ref, inView] = useInView()

  const handleSubmit = e => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section id="cta" className="py-28 px-6 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 rounded-full px-4 py-1.5 text-sm font-medium mb-7"
          style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}
        >
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
          Limited early-access spots available
        </div>

        <h2
          className="font-display font-extrabold text-ink leading-tight mb-6"
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            ...(inView ? { animation: 'fadeUp 0.7s ease-out 0.1s both' } : { opacity: 0 }),
          }}
        >
          Ready to Protect Your Patients?
        </h2>

        <p
          className="text-gray-500 text-lg mb-10 max-w-md mx-auto"
          style={inView ? { animation: 'fadeUp 0.7s ease-out 0.2s both' } : { opacity: 0 }}
        >
          Join healthcare professionals across Pakistan who are waiting to eliminate
          medication errors with AI. Be first when we launch.
        </p>

        {/* Form / Success */}
        <div style={inView ? { animation: 'fadeUp 0.7s ease-out 0.3s both' } : { opacity: 0 }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-ink placeholder-gray-400 text-sm font-medium transition"
              />
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-teal-600/25 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Get Early Access
              </button>
            </form>
          ) : (
            <div className="bg-teal-50 border border-teal-200 rounded-3xl px-8 py-8 inline-block">
              <div className="text-5xl mb-3">✓</div>
              <div className="font-display font-bold text-ink text-xl mb-1">You're on the list!</div>
              <div className="text-gray-500 text-sm">We'll notify you the moment early access opens.</div>
            </div>
          )}
          <p className="text-gray-400 text-xs mt-4">No spam ever. Unsubscribe anytime.</p>
        </div>

        {/* Guarantee */}
        {/* <div
          className="mt-14 border-t border-gray-100 pt-12"
          style={inView ? { animation: 'fadeUp 0.7s ease-out 0.4s both' } : { opacity: 0 }}
        >
          <div className="inline-flex items-start gap-5 bg-gray-50 rounded-3xl p-7 text-left max-w-xl border border-gray-100">
            <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center shrink-0">
              <Icon.Shield cls="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <div className="font-display font-bold text-ink mb-1.5">Research-Backed Guarantee</div>
              <div className="text-gray-500 text-sm leading-relaxed">
                meDDI AI is developed under an HEC NRPU research grant at GIK Institute of Engineering
                Sciences and Technology, in collaboration with the Health Services Academy
                (Ministry of National Health Services, Government of Pakistan).
                Every performance claim is validated through peer-reviewed methodology.
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

/* ============================================================
   FOOTER
============================================================ */
function Footer() {
  return (
    <footer className="dark-section text-gray-400 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <Logo dark />
            <p className="text-gray-400 text-sm leading-relaxed mt-5 mb-5 max-w-xs">
              Pakistan's first AI-driven prescription safety platform — reducing medication errors
              through Vision-Language Models and real-time drug interaction detection.
            </p>
            {/* <div className="text-gray-500 text-xs leading-relaxed">
              GIK Institute of Engineering Sciences and Technology<br />
              Topi, Swabi, KPK — Pakistan
            </div> */}

            {/* Contact */}
            <div className="mt-4 flex flex-col gap-1.5">
              <a href="mailto:admin@meddiai.com" className="text-xs text-teal-400/80 hover:text-teal-400 transition-colors font-mono">
                admin@meddiai.com
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <div className="font-semibold text-white mb-5 text-sm">Product</div>
            <div className="space-y-3 text-sm">
              {['How It Works', 'Features', 'Security & Privacy', 'Early Access'].map(item => (
                <a key={item} href="#" className="block hover:text-teal-400 transition-colors animated-underline w-fit">{item}</a>
              ))}
            </div>
          </div>

          {/* Research links */}
          {/* <div>
            <div className="font-semibold text-white mb-5 text-sm">Research</div>
            <div className="space-y-3 text-sm">
              {['GIK Institute', 'HEC NRPU Grant', 'Health Services Academy', 'Publications'].map(item => (
                <a key={item} href="#" className="block hover:text-teal-400 transition-colors animated-underline w-fit">{item}</a>
              ))}
            </div>
          </div> */}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500">
            © 2026 meDDI AI. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs">
            {['Privacy Policy', 'Terms of Service', 'Contact'].map(item => (
              <a key={item} href="#" className="hover:text-teal-400 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ============================================================
   APP ROOT
============================================================ */
export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <StatsBar />
      <ProblemSolution />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Features />
      <AvoidConflict />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
