import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { useInView } from '../hooks/useInView'
import { CTABanner } from '../components/CTABanner'
import { Icons, resolveIcon } from '../components/Icons'
import { seo, about } from '../site-data'

function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={className}
      style={inView ? { animation: `fadeUp 0.7s ease-out ${delay}s both` } : { opacity: 0 }}>
      {children}
    </div>
  )
}

function PageHero({ tag, headline, subheadline }) {
  return (
    <section className="hero-section pt-32 pb-16 px-6" aria-labelledby="page-hero-heading">
      <div className="max-w-4xl mx-auto text-center">
        <span className="section-label text-teal-600 block mb-4" style={{ animation: 'fadeUp 0.7s ease-out 0.1s both' }}>
          {tag}
        </span>
        <h1 id="page-hero-heading" className="font-display font-extrabold text-ink leading-tight mb-5"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', animation: 'fadeUp 0.7s ease-out 0.2s both' }}>
          {headline}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ animation: 'fadeUp 0.7s ease-out 0.3s both' }}>
          {subheadline}
        </p>
      </div>
    </section>
  )
}

export default function About() {
  useSEO(seo.about)
  const { hero, story, mission, technology, allFeatures } = about

  return (
    <main>
      <PageHero {...hero} />

      {/* Our Story */}
      <section className="py-20 px-6 bg-white" aria-labelledby="story-heading">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <h2 id="story-heading" className="font-display font-bold text-ink mb-8"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              {story.headline}
            </h2>
          </FadeUp>
          <div className="space-y-5">
            {story.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <p className="text-gray-600 leading-relaxed">{p}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-[#F5F4EF]" aria-labelledby="mission-heading">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="section-label text-teal-600 block mb-3">{mission.headline}</span>
            <h2 id="mission-heading" className="font-display font-extrabold text-ink"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
              What Drives Us
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {mission.items.map((item, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm h-full">
                  <div className="font-mono text-teal-500 text-xs uppercase tracking-widest mb-3">{item.label}</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 px-6 bg-white" aria-labelledby="tech-heading">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="section-label text-teal-600 block mb-3">Technology</span>
            <h2 id="tech-heading" className="font-display font-extrabold text-ink"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
              {technology.headline}
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {technology.items.map((item, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 h-full hover:bg-teal-50 hover:border-teal-100 transition-colors group">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mb-5 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                    {i === 0 ? <Icons.Eye cls="w-5 h-5" /> : i === 1 ? <Icons.Warning cls="w-5 h-5" /> : <Icons.Phone cls="w-5 h-5" />}
                  </div>
                  <h3 className="font-display font-bold text-ink mb-3 text-base">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* All Features */}
      <section id="features" className="py-20 px-6 bg-[#F5F4EF]" aria-labelledby="all-features-heading">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="section-label text-teal-600 block mb-3">All Features</span>
            <h2 id="all-features-heading" className="font-display font-extrabold text-ink"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
              Built for Real-World Healthcare
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              Every feature designed for the realities of Pakistan's healthcare system.
            </p>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {allFeatures.map((f, i) => (
              <FadeUp key={f.id} delay={0.05 + (i % 4) * 0.07}>
                <div className="group bg-white hover:bg-teal-50 rounded-2xl p-6 card-hover border border-transparent hover:border-teal-100 transition-colors h-full">
                  <div className="w-11 h-11 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-200 shrink-0">
                    {resolveIcon(f.icon, 'w-6 h-6')}
                  </div>
                  <h3 className="font-display text-sm font-bold text-ink mb-2 leading-snug">{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want to Learn More?"
        subheadline="Meet the team behind meDDI AI or request a live product demo."
        primaryCta={{ label: 'Meet the Team', href: '/team' }}
        secondaryCta={{ label: 'Request Demo', href: '/contact' }}
      />
    </main>
  )
}
