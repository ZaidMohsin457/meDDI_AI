import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { useInView } from '../hooks/useInView'
import { CTABanner } from '../components/CTABanner'
import { Icons } from '../components/Icons'
import { seo, caseStudies } from '../site-data'

function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={className}
      style={inView ? { animation: `fadeUp 0.7s ease-out ${delay}s both` } : { opacity: 0 }}>
      {children}
    </div>
  )
}

function CaseStudyCard({ study, index }) {
  const [ref, inView] = useInView(0.1)

  return (
    <article
      ref={ref}
      id={study.id}
      className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm"
      style={inView ? { animation: `fadeUp 0.7s ease-out ${index * 0.1}s both` } : { opacity: 0 }}
      aria-label={`Case study: ${study.title}`}
    >
      {/* Card header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
        <span className="font-mono text-teal-200 text-xs uppercase tracking-widest block mb-2">{study.tag}</span>
        <h3 className="font-display font-bold text-white text-xl leading-snug">{study.title}</h3>
      </div>

      <div className="p-8">
        {/* Challenge */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center">
              <Icons.Warning cls="w-3.5 h-3.5 text-red-500" />
            </div>
            <span className="font-mono text-red-500 text-xs uppercase tracking-wide font-semibold">Challenge</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
        </div>

        {/* Solution */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-teal-100 rounded-lg flex items-center justify-center">
              <Icons.Shield cls="w-3.5 h-3.5 text-teal-600" />
            </div>
            <span className="font-mono text-teal-600 text-xs uppercase tracking-wide font-semibold">Solution</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {study.results.map((r, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
              <div className="font-mono font-bold text-teal-600 text-xl mb-1">{r.metric}</div>
              <div className="text-gray-500 text-[10px] leading-tight">{r.label}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="bg-teal-50 border-l-4 border-teal-500 rounded-r-2xl pl-5 pr-4 py-4">
          <p className="text-gray-700 text-sm leading-relaxed italic mb-2">"{study.quote.text}"</p>
          <cite className="text-gray-400 text-xs not-italic">— {study.quote.author}</cite>
        </blockquote>
      </div>
    </article>
  )
}

export default function CaseStudies() {
  useSEO(seo.caseStudies)
  const { hero, studies, riskSection } = caseStudies

  return (
    <main>
      {/* Hero */}
      <section className="hero-section pt-32 pb-16 px-6" aria-labelledby="cs-hero-heading">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label text-teal-600 block mb-4" style={{ animation: 'fadeUp 0.7s ease-out 0.1s both' }}>
            {hero.tag}
          </span>
          <h1 id="cs-hero-heading" className="font-display font-extrabold text-ink leading-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', animation: 'fadeUp 0.7s ease-out 0.2s both' }}>
            {hero.headline}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ animation: 'fadeUp 0.7s ease-out 0.3s both' }}>
            {hero.subheadline}
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16 px-6 bg-[#F5F4EF]" aria-label="Case studies">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {studies.map((s, i) => <CaseStudyCard key={s.id} study={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* Risk / Cost of inaction */}
      <section className="dark-section py-24 px-6" aria-labelledby="risk-heading">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="section-label text-red-400 block mb-4">The Alternative</span>
            <h2 id="risk-heading" className="font-display font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              {riskSection.headline}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="text-gray-300 text-lg leading-relaxed text-center mb-12 max-w-3xl mx-auto">
            <p>{riskSection.body}</p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {riskSection.stats.map((item, i) => {
              const colorMap = { red: 'text-red-400', orange: 'text-orange-400', yellow: 'text-yellow-400' }
              return (
                <FadeUp key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-7 text-center">
                    <div className={`font-mono font-bold ${colorMap[item.color]} mb-3`} style={{ fontSize: '2.5rem' }}>
                      {item.value}
                    </div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
          <FadeUp delay={0.5} className="text-center">
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-7 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-teal-600/25">
              Protect Your Patients Now
              <Icons.ChevronRight cls="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      <CTABanner
        headline="See meDDI AI at Your Pharmacy"
        subheadline="We are actively seeking pilot partners. Request a live demo tailored to your clinical environment."
        primaryCta={{ label: 'Request Demo', href: '/contact' }}
        secondaryCta={{ label: 'Learn about our technology', href: '/about' }}
      />
    </main>
  )
}
