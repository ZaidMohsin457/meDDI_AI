import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { useInView } from '../hooks/useInView'
import { PhoneMockup } from '../components/PhoneMockup'
import { CTABanner } from '../components/CTABanner'
import { Icons, resolveIcon } from '../components/Icons'
import {
  seo, hero, stats, problemSolution, benefits,
  demoVideo, howItWorks, features, testimonials,
  faq, mailerEndpoint,
} from '../site-data'

// ─── Section label ────────────────────────────────────────────────
function SLabel({ children, className = 'text-teal-600' }) {
  return <span className={`section-label ${className}`}>{children}</span>
}

// ─── Fade-up wrapper ──────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={inView ? { animation: `fadeUp 0.7s ease-out ${delay}s both` } : { opacity: 0 }}
    >
      {children}
    </div>
  )
}

/* ============================================================
   HERO
============================================================ */
function Hero() {
  return (
    <section className="hero-section pt-32 pb-20 px-6 overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 xl:gap-20 items-center">

          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 rounded-full px-4 py-1.5 text-sm font-medium mb-7"
              style={{ animation: 'fadeUp 0.7s ease-out 0.1s both' }}
            >
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              {hero.badge}
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="font-display font-extrabold leading-[1.04] tracking-tight text-ink mb-6"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 3.8rem)', animation: 'fadeUp 0.7s ease-out 0.2s both' }}
            >
              Turn Every{' '}
              <span className="relative">
                Prescription
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none" preserveAspectRatio="none" style={{ height: '6px' }}>
                  <path d="M0 6 Q75 0 150 5 Q225 10 300 4" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>{' '}
              Into a{' '}
              <span className="gradient-text">Safety Net</span>
            </h1>

            <p
              className="text-lg text-gray-500 leading-relaxed mb-9 max-w-[520px]"
              style={{ animation: 'fadeUp 0.7s ease-out 0.3s both' }}
            >
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10" style={{ animation: 'fadeUp 0.7s ease-out 0.4s both' }}>
              <Link
                to={hero.cta.href}
                className="group inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white px-7 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-teal-600/25 hover:shadow-teal-600/35 hover:-translate-y-0.5"
              >
                {hero.cta.label}
                <Icons.ChevronRight cls="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2.5 text-gray-600 hover:text-ink font-medium transition-colors"
              >
                <div className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-teal-400 flex items-center justify-center transition-colors">
                  <Icons.Play cls="w-4 h-4 text-gray-500 ml-0.5" />
                </div>
                {hero.secondaryCta.label}
              </a>
            </div>

            {/* 3 bullets */}
            <div className="space-y-3" style={{ animation: 'fadeUp 0.7s ease-out 0.5s both' }}>
              {hero.bullets.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 border border-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Icons.Check cls="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-sm text-gray-600">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end" style={{ animation: 'fadeIn 1s ease-out 0.3s both' }}>
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   STATS BAR
============================================================ */
function StatsBar() {
  const [ref, inView] = useInView(0.3)
  return (
    <section ref={ref} className="bg-ink py-10 px-6" aria-label="Key metrics">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center" style={inView ? { animation: `fadeUp 0.6s ease-out ${i * 0.1}s both` } : { opacity: 0 }}>
              <div className="font-mono font-bold text-teal-400 mb-1.5" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                {s.value}
              </div>
              <div className="text-xs text-gray-400 font-medium leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   PROBLEM-SOLUTION (PAS)
============================================================ */
function ProblemSolution() {
  const [ref, inView] = useInView()
  const { headline, subheadline, cards, quote } = problemSolution

  return (
    <section id="problem" className="py-24 px-6 bg-white" ref={ref} aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}>
          <SLabel>The Problem</SLabel>
          <h2 id="problem-heading" className="font-display font-extrabold text-ink mt-3 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Pakistan's Pharmacies Are{' '}
            <span className="text-red-500">Flying Blind</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">{subheadline}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {/* Problem card */}
          <div className="relative bg-red-50 border border-red-100 rounded-3xl p-8 overflow-hidden card-hover" style={inView ? { animation: 'fadeUp 0.7s ease-out 0.1s both' } : { opacity: 0 }}>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-100 rounded-full" />
            <div className="relative">
              <div className="w-11 h-11 bg-red-100 rounded-2xl flex items-center justify-center mb-5 text-red-500">
                <Icons.Warning cls="w-6 h-6" />
              </div>
              <SLabel className="text-red-400 mb-2 block">Problem</SLabel>
              <h3 className="font-display text-xl font-bold text-ink mb-3">{cards[0].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{cards[0].body}</p>
              <div className="bg-red-100 rounded-2xl p-4">
                <div className="font-mono font-bold text-3xl text-red-600">{cards[0].stat.value}</div>
                <div className="text-xs text-red-700 mt-1">{cards[0].stat.label}</div>
              </div>
            </div>
          </div>

          {/* Solution card */}
          <div className="relative bg-teal-50 border border-teal-200 rounded-3xl p-8 overflow-hidden card-hover" style={inView ? { animation: 'fadeUp 0.7s ease-out 0.2s both' } : { opacity: 0 }}>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-100 rounded-full" />
            <div className="relative">
              <div className="w-11 h-11 bg-teal-100 rounded-2xl flex items-center justify-center mb-5 text-teal-600">
                <Icons.Shield cls="w-6 h-6" />
              </div>
              <SLabel className="text-teal-600 mb-2 block">The Solution</SLabel>
              <h3 className="font-display text-xl font-bold text-ink mb-3">{cards[1].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{cards[1].body}</p>
              <div className="space-y-2">
                {cards[1].bullets.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-teal-700">
                    <div className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center shrink-0">
                      <Icons.Check cls="w-2.5 h-2.5 text-white" />
                    </div>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WHO Quote */}
        <div className="bg-gray-50 rounded-3xl p-8 text-center max-w-3xl mx-auto border border-gray-100" style={inView ? { animation: 'fadeUp 0.7s ease-out 0.3s both' } : { opacity: 0 }}>
          <blockquote className="font-display text-xl md:text-2xl font-bold text-ink leading-snug mb-3">
            {quote.text}
          </blockquote>
          <cite className="text-gray-400 text-sm not-italic">{quote.source}</cite>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   BENEFITS
============================================================ */
function Benefits() {
  const [ref, inView] = useInView()

  const colorMap = {
    amber: { bg: 'bg-white', border: 'border-amber-100', icon: 'bg-amber-100 text-amber-600', result: 'text-amber-700 bg-amber-50' },
    teal:  { bg: 'bg-white', border: 'border-teal-100',  icon: 'bg-teal-100 text-teal-600',   result: 'text-teal-700 bg-teal-50'   },
    blue:  { bg: 'bg-white', border: 'border-blue-100',  icon: 'bg-blue-100 text-blue-600',   result: 'text-blue-700 bg-blue-50'   },
  }

  const iconMap = { amber: <Icons.Zap cls="w-7 h-7" />, teal: <Icons.Shield cls="w-7 h-7" />, blue: <Icons.WifiOff cls="w-7 h-7" /> }

  return (
    <section id="benefits" className="py-24 px-6 bg-[#F5F4EF]" ref={ref} aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}>
          <SLabel>Why meDDI AI</SLabel>
          <h2 id="benefits-heading" className="font-display font-extrabold text-ink mt-3 leading-tight" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
            Every Feature Delivers a Measurable Result
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {benefits.map((b, i) => {
            const c = colorMap[b.color]
            return (
              <div key={i} className={`${c.bg} rounded-3xl border ${c.border} p-8 card-hover flex flex-col`}
                style={inView ? { animation: `fadeUp 0.7s ease-out ${0.1 + i * 0.12}s both` } : { opacity: 0 }}>
                <div className={`w-14 h-14 ${c.icon} rounded-2xl flex items-center justify-center mb-6 shrink-0`}>
                  {iconMap[b.color]}
                </div>
                <SLabel className="text-gray-400 mb-2 block">{b.tag}</SLabel>
                <h3 className="font-display text-xl font-bold text-ink mb-3 leading-tight">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-7">{b.body}</p>
                <div className={`rounded-2xl px-4 py-3 flex items-center gap-2.5 ${c.result} border border-current/10`}>
                  <div className="w-2 h-2 rounded-full bg-current opacity-50 shrink-0" />
                  <span className="text-sm font-semibold">{b.result}</span>
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
   DEMO VIDEO
============================================================ */
function DemoVideo() {
  const [playing, setPlaying] = useState(false)
  const [ref, inView] = useInView()
  const { youtubeId, placeholder } = demoVideo

  return (
    <section id="demo" className="py-24 px-6 bg-white" ref={ref} aria-labelledby="demo-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12" style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}>
          <SLabel>Product Demo</SLabel>
          <h2 id="demo-heading" className="font-display font-extrabold text-ink mt-3 leading-tight" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
            {demoVideo.headline}
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">{demoVideo.subheadline}</p>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
          style={{
            paddingBottom: '56.25%',
            height: 0,
            ...(inView ? { animation: 'fadeUp 0.7s ease-out 0.15s both' } : { opacity: 0 }),
          }}
        >
          {youtubeId && playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title="meDDI AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            /* Placeholder */
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
              style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #0d2d24 50%, #0f172a 100%)',
              }}
            >
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(13,148,136,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />

              <div className="relative z-10 max-w-lg">
                {/* Pill badge */}
                <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-300 rounded-full px-4 py-1.5 text-xs font-mono mb-6">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                  {placeholder.title}
                </div>

                <h3 className="font-display font-bold text-white text-2xl mb-4 leading-snug">
                  See meDDI AI read a prescription<br />and detect drug interactions live
                </h3>
                <p className="text-gray-400 text-sm mb-8">{placeholder.description}</p>

                {youtubeId ? (
                  <button
                    onClick={() => setPlaying(true)}
                    className="group inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-500 text-white px-7 py-4 rounded-xl font-bold transition-all shadow-lg shadow-teal-600/30"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Icons.Play cls="w-4 h-4 ml-0.5" />
                    </div>
                    Play Demo
                  </button>
                ) : (
                  <Link
                    to={placeholder.cta.href}
                    className="group inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-500 text-white px-7 py-4 rounded-xl font-bold transition-all shadow-lg shadow-teal-600/30"
                  >
                    {placeholder.cta.label}
                    <Icons.ChevronRight cls="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>

              {/* Simulated phone screen mini preview */}
              <div className="absolute right-8 bottom-8 hidden lg:flex flex-col gap-2 opacity-30">
                {[85,70,80,60,75].map((w,i) => (
                  <div key={i} className="h-1.5 bg-teal-400 rounded-full" style={{ width: `${w}px` }} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   HOW IT WORKS
============================================================ */
function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#F5F4EF]" ref={ref} aria-labelledby="hiw-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}>
          <SLabel>{howItWorks.sectionLabel}</SLabel>
          <h2 id="hiw-heading" className="font-display font-extrabold text-ink mt-3" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
            {howItWorks.headline}
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 md:gap-6">
          <div className="hidden md:block absolute top-[52px] left-[calc(16.5%)] right-[calc(16.5%)] h-px bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200" />
          {howItWorks.steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center"
              style={inView ? { animation: `fadeUp 0.7s ease-out ${0.1 + i * 0.15}s both` } : { opacity: 0 }}>
              <div className="relative w-[104px] h-[104px] mb-7">
                <div className="absolute inset-0 bg-teal-100 rounded-full" />
                <div className="absolute inset-2 bg-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-teal-600/30">
                  <span className="font-mono font-bold text-white text-2xl">{s.number}</span>
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
   FEATURES (home — 4 only)
============================================================ */
function Features() {
  const [ref, inView] = useInView()
  const homeFeatures = features.filter(f => f.showOnHome)

  return (
    <section id="features" className="py-24 px-6 bg-white" ref={ref} aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}>
          <div>
            <SLabel>Features</SLabel>
            <h2 id="features-heading" className="font-display font-extrabold text-ink mt-3" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
              Built for Real-World Healthcare
            </h2>
          </div>
          <Link to="/about#features" className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors shrink-0">
            View all 8 features <Icons.ChevronRight cls="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {homeFeatures.map((f, i) => (
            <div key={f.id} className="group bg-gray-50 hover:bg-teal-50 rounded-2xl p-6 card-hover border border-transparent hover:border-teal-100 transition-colors"
              style={inView ? { animation: `fadeUp 0.6s ease-out ${0.05 + i * 0.08}s both` } : { opacity: 0 }}>
              <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-200 shrink-0">
                {resolveIcon(f.icon, 'w-6 h-6')}
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
   TESTIMONIALS (home — 2 only)
============================================================ */
function Testimonials() {
  const [ref, inView] = useInView()
  const homeTestimonials = testimonials.filter(t => t.showOnHome)
  const colorMap = { teal: 'bg-teal-500', blue: 'bg-blue-500', violet: 'bg-violet-500' }

  return (
    <section className="py-24 px-6 bg-[#F5F4EF]" ref={ref} aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14" style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}>
          <SLabel>Testimonials</SLabel>
          <h2 id="testimonials-heading" className="font-display font-extrabold text-ink mt-3" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
            Trusted by Healthcare Professionals
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {homeTestimonials.map((q, i) => (
            <div key={i} className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm card-hover flex flex-col"
              style={inView ? { animation: `fadeUp 0.7s ease-out ${0.1 + i * 0.12}s both` } : { opacity: 0 }}>
              <div className="flex gap-1 mb-5">
                {Array(5).fill(0).map((_, j) => <Icons.Star key={j} cls="w-4 h-4 text-amber-400" />)}
              </div>
              <div className="font-display text-5xl text-teal-100 leading-none mb-3 select-none">"</div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-7">{q.quote}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 ${colorMap[q.color] || 'bg-teal-500'} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {q.initials}
                </div>
                <div>
                  <div className="font-semibold text-ink text-sm">{q.name}</div>
                  <div className="text-gray-400 text-xs">{q.role}, {q.location}</div>
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
   FAQ (home — 4 only)
============================================================ */
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  const [ref, inView] = useInView()
  const homeFaqs = faq.filter(f => f.showOnHome)

  return (
    <section id="faq" className="py-24 px-6 bg-white" ref={ref} aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14" style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}>
          <SLabel>FAQ</SLabel>
          <h2 id="faq-heading" className="font-display font-extrabold text-ink mt-3" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {homeFaqs.map((item, i) => {
            const open = openIdx === i
            return (
              <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
                style={inView ? { animation: `fadeUp 0.6s ease-out ${0.05 + i * 0.07}s both` } : { opacity: 0 }}>
                <button className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
                  onClick={() => setOpenIdx(open ? null : i)} aria-expanded={open}>
                  <span className="font-semibold text-ink text-sm leading-snug">{item.q}</span>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${open ? 'border-teal-500 text-teal-500 bg-teal-50' : 'border-gray-200 text-gray-400'}`}>
                    {open ? <Icons.Minus cls="w-4 h-4" /> : <Icons.Plus cls="w-4 h-4" />}
                  </div>
                </button>
                <div className={`accordion-content ${open ? 'open' : ''}`}>
                  <div className="px-7 pb-6 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8" style={inView ? { animation: 'fadeUp 0.6s ease-out 0.4s both' } : { opacity: 0 }}>
          <Link to="/contact" className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors">
            Have more questions? Contact us →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FINAL CTA (email capture)
============================================================ */
function FinalCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [ref, inView] = useInView()

  const handleSubmit = async e => {
    e.preventDefault()
    if (!email.trim()) return
    setSending(true)
    setError('')
    try {
      const res = await fetch(mailerEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'waitlist', email: email.trim() }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        throw new Error(data.message || 'Send failed')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="cta" className="py-28 px-6 bg-[#F5F4EF]" ref={ref} aria-labelledby="cta-heading">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 rounded-full px-4 py-1.5 text-sm font-medium mb-7"
          style={inView ? { animation: 'fadeUp 0.7s ease-out both' } : { opacity: 0 }}>
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
          Limited early-access spots available
        </div>

        <h2 id="cta-heading" className="font-display font-extrabold text-ink leading-tight mb-6"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', ...(inView ? { animation: 'fadeUp 0.7s ease-out 0.1s both' } : { opacity: 0 }) }}>
          Ready to Protect Your Patients?
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto"
          style={inView ? { animation: 'fadeUp 0.7s ease-out 0.2s both' } : { opacity: 0 }}>
          Join healthcare professionals across Pakistan waiting to eliminate medication errors with AI.
        </p>

        <div style={inView ? { animation: 'fadeUp 0.7s ease-out 0.3s both' } : { opacity: 0 }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com" required
                className="flex-1 px-5 py-4 rounded-xl border border-gray-200 bg-white text-ink placeholder-gray-400 text-sm font-medium transition"
                aria-label="Email address" />
              <button type="submit" disabled={sending}
                className={`text-white px-7 py-4 rounded-xl font-bold text-sm transition-all shadow-lg whitespace-nowrap ${sending ? 'bg-teal-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700 hover:-translate-y-0.5 shadow-teal-600/25'}`}>
                {sending ? 'Sending…' : 'Join Waitlist'}
              </button>
            </form>
          ) : (
            <div className="bg-teal-50 border border-teal-200 rounded-3xl px-8 py-8 inline-block">
              <div className="text-5xl mb-3">✓</div>
              <div className="font-display font-bold text-ink text-xl mb-1">You're on the list!</div>
              <div className="text-gray-500 text-sm">We'll notify you the moment early access opens.</div>
            </div>
          )}
          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
          <p className="text-gray-400 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </div>

      </div>
    </section>
  )
}

/* ============================================================
   PAGE EXPORT
============================================================ */
export default function Home() {
  useSEO(seo.home)
  return (
    <main>
      <Hero />
      <StatsBar />
      <ProblemSolution />
      <Benefits />
      <DemoVideo />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
