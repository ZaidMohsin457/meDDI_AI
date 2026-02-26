import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { seo, termsOfService, company } from '../site-data'

export default function Terms() {
  useSEO(seo.terms)

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12" style={{ animation: 'fadeUp 0.7s ease-out both' }}>
          <span className="section-label text-teal-600 block mb-4">Legal</span>
          <h1 className="font-display font-extrabold text-ink mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
            Terms of Service
          </h1>
          <p className="text-gray-400 text-sm font-mono">
            Last updated: {termsOfService.lastUpdated}
          </p>
        </div>

        {/* Clinical disclaimer banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10" style={{ animation: 'fadeUp 0.7s ease-out 0.1s both' }}>
          <div className="font-semibold text-amber-800 mb-1 text-sm">⚠ Important Clinical Notice</div>
          <p className="text-amber-700 text-sm leading-relaxed">
            meDDI AI is a <strong>decision-support tool</strong>. It does not replace the professional
            judgement of a licensed pharmacist or physician. All dispensing decisions must be made by
            a qualified healthcare professional.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {termsOfService.sections.map((s, i) => (
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
          <Link to="/privacy" className="text-teal-600 text-sm font-semibold hover:text-teal-700 transition-colors">
            View Privacy Policy →
          </Link>
        </div>
      </div>
    </main>
  )
}
