import { useSEO } from '../hooks/useSEO'
import { useInView } from '../hooks/useInView'
import { CTABanner } from '../components/CTABanner'
import { Icons } from '../components/Icons'
import { seo, team } from '../site-data'

function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={className}
      style={inView ? { animation: `fadeUp 0.7s ease-out ${delay}s both` } : { opacity: 0 }}>
      {children}
    </div>
  )
}

const colorClasses = {
  teal:   { avatar: 'bg-teal-600',   tag: 'bg-teal-50 text-teal-700 border-teal-200'   },
  blue:   { avatar: 'bg-blue-600',   tag: 'bg-blue-50 text-blue-700 border-blue-200'   },
  violet: { avatar: 'bg-violet-600', tag: 'bg-violet-50 text-violet-700 border-violet-200' },
  green:  { avatar: 'bg-green-600',  tag: 'bg-green-50 text-green-700 border-green-200'  },
  orange: { avatar: 'bg-orange-500', tag: 'bg-orange-50 text-orange-700 border-orange-200' },
  amber:  { avatar: 'bg-amber-500',  tag: 'bg-amber-50 text-amber-700 border-amber-200'  },
}

function TeamCard({ member, index }) {
  const [ref, inView] = useInView(0.1)
  const c = colorClasses[member.color] || colorClasses.teal

  return (
    <article
      ref={ref}
      className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm card-hover"
      style={inView ? { animation: `fadeUp 0.7s ease-out ${0.08 + (index % 3) * 0.1}s both` } : { opacity: 0 }}
      aria-label={`Team member: ${member.name}`}
    >
      {/* Avatar */}
      <div className="flex items-start gap-5 mb-6">
        <div className={`w-16 h-16 ${c.avatar} rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl shrink-0 shadow-md`}>
          {member.initials}
        </div>
        <div>
          <h3 className="font-display font-bold text-ink text-lg leading-tight">{member.name}</h3>
          <div className="font-mono text-teal-600 text-xs uppercase tracking-wide mt-0.5">{member.role}</div>
          <div className="text-gray-400 text-xs mt-1 leading-tight">{member.title}</div>
        </div>
      </div>

      {/* Institution */}
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
        <Icons.MapPin cls="w-4 h-4 text-gray-400 shrink-0" />
        <span className="text-gray-500 text-xs">{member.institution}</span>
      </div>

      {/* Bio */}
      <p className="text-gray-600 text-sm leading-relaxed mb-5">{member.bio}</p>

      {/* Expertise tags */}
      {member.expertise.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {member.expertise.map(tag => (
            <span key={tag} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${c.tag}`}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Grants */}
      {member.grants.length > 0 && (
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="font-mono text-gray-400 text-[10px] uppercase tracking-widest mb-2.5">Research Grants</div>
          {member.grants.map((g, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-gray-600 mb-1.5 last:mb-0">
              <span className="text-teal-500 mt-0.5 shrink-0">•</span>
              {g}
            </div>
          ))}
        </div>
      )}

      {/* Email */}
      {member.email && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <a href={`mailto:${member.email}`}
            className="inline-flex items-center gap-2 text-xs text-teal-600 hover:text-teal-700 font-mono transition-colors">
            <Icons.Mail cls="w-3.5 h-3.5" />
            {member.email}
          </a>
        </div>
      )}
    </article>
  )
}

export default function Team() {
  useSEO(seo.team)
  const { hero, members } = team

  const founders = members.filter(m => m.group === 'founder')
  const core = members.filter(m => m.group === 'core')
  const advisors = members.filter(m => m.group === 'advisor')

  return (
    <main>
      {/* Hero */}
      <section className="hero-section pt-32 pb-16 px-6" aria-labelledby="team-hero-heading">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label text-teal-600 block mb-4" style={{ animation: 'fadeUp 0.7s ease-out 0.1s both' }}>
            {hero.tag}
          </span>
          <h1 id="team-hero-heading" className="font-display font-extrabold text-ink leading-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', animation: 'fadeUp 0.7s ease-out 0.2s both' }}>
            {hero.headline}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ animation: 'fadeUp 0.7s ease-out 0.3s both' }}>
            {hero.subheadline}
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-16 px-6 bg-white" aria-label="Team members">
        <div className="max-w-7xl mx-auto">

          {/* Founding Team */}
          <FadeUp className="mb-8">
            <h2 className="font-display font-bold text-ink text-lg mb-1">Founding Team</h2>
            <p className="text-gray-400 text-sm">GIK Institute of Engineering Sciences and Technology · NIC Islamabad Cohort 5</p>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {founders.map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}
          </div>

          {/* Core Team */}
          {core.length > 0 && (
            <>
              <FadeUp className="mb-8">
                <h2 className="font-display font-bold text-ink text-lg mb-1">Core Team</h2>
                <p className="text-gray-400 text-sm">Engineers driving the AI and ML capabilities</p>
              </FadeUp>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                {core.map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}
              </div>
            </>
          )}

          {/* Advisors & Partners */}
          <FadeUp className="mb-8">
            <h2 className="font-display font-bold text-ink text-lg mb-1">Advisors & Partners</h2>
            <p className="text-gray-400 text-sm">Providing technical depth, hospital access, and clinical domain expertise</p>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-6">
            {advisors.map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}
          </div>

        </div>
      </section>

      {/* Team callout */}
      <section className="py-16 px-6 bg-[#F5F4EF]" aria-label="Team highlights">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-sm">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  { value: '4', label: 'Engineers & founders building the product', icon: <Icons.Users cls="w-6 h-6" /> },
                  { value: '5 IEEE', label: 'Published research papers (CTO)', icon: <Icons.Star cls="w-6 h-6" /> },
                  { value: '2+', label: 'Hospital & industry partnerships', icon: <Icons.BookOpen cls="w-6 h-6" /> },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mx-auto mb-3">
                      {s.icon}
                    </div>
                    <div className="font-mono font-bold text-teal-600 text-2xl mb-1">{s.value}</div>
                    <div className="text-gray-500 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABanner
        headline="Work With Our Team"
        subheadline="Interested in piloting meDDI AI at your hospital, or partnering with us on pharma analytics?"
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
      />
    </main>
  )
}
