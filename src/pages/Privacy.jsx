import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { seo, privacyPolicy, company } from '../site-data'

export default function Privacy() {
  useSEO(seo.privacy)

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12" style={{ animation: 'fadeUp 0.7s ease-out both' }}>
          <span className="section-label text-teal-600 block mb-4">Legal</span>
          <h1 className="font-display font-extrabold text-ink mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm font-mono">
            Last updated: {privacyPolicy.lastUpdated}
          </p>
        </div>

        {/* Intro */}
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-10" style={{ animation: 'fadeUp 0.7s ease-out 0.1s both' }}>
          <p className="text-teal-800 text-sm leading-relaxed">
            At meDDI AI, we take your privacy seriously. This policy explains what data we collect,
            why we collect it, and how we protect it. If you have questions, contact us at{' '}
            <a href={`mailto:${company.email}`} className="font-semibold underline">{company.email}</a>.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {privacyPolicy.sections.map((s, i) => (
            <div key={i} className="border-b border-gray-100 pb-8 last:border-0">
              <h2 className="font-display font-bold text-ink text-lg mb-3">{s.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            Questions? <a href={`mailto:${company.email}`} className="text-teal-600 hover:underline">{company.email}</a>
          </p>
          <Link to="/terms" className="text-teal-600 text-sm font-semibold hover:text-teal-700 transition-colors">
            View Terms of Service →
          </Link>
        </div>
      </div>
    </main>
  )
}
