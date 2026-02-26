import { useState } from 'react'
import { useSEO } from '../hooks/useSEO'
import { useInView } from '../hooks/useInView'
import { Icons } from '../components/Icons'
import { seo, contactPage, mailerEndpoint } from '../site-data'

function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={className}
      style={inView ? { animation: `fadeUp 0.7s ease-out ${delay}s both` } : { opacity: 0 }}>
      {children}
    </div>
  )
}

const reasonIcons = [
  <Icons.Play cls="w-5 h-5" />,
  <Icons.Users cls="w-5 h-5" />,
  <Icons.BookOpen cls="w-5 h-5" />,
  <Icons.Mail cls="w-5 h-5" />,
]

export default function Contact() {
  useSEO(seo.contact)

  const [form, setForm] = useState({ name: '', email: '', org: '', role: '', message: '', isDemo: false })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch(mailerEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: form.name,
          email: form.email,
          org: form.org,
          role: form.role,
          message: form.message,
          isDemo: form.isDemo,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        throw new Error(data.message || 'Send failed')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please email us directly at ' + contactPage.info.email)
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="hero-section pt-32 pb-16 px-6" aria-labelledby="contact-hero-heading">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label text-teal-600 block mb-4" style={{ animation: 'fadeUp 0.7s ease-out 0.1s both' }}>
            {contactPage.hero.tag}
          </span>
          <h1 id="contact-hero-heading" className="font-display font-extrabold text-ink leading-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', animation: 'fadeUp 0.7s ease-out 0.2s both' }}>
            {contactPage.hero.headline}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ animation: 'fadeUp 0.7s ease-out 0.3s both' }}>
            {contactPage.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-12 px-6 bg-white" aria-label="Ways to connect">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactPage.reasons.map((r, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <div className="w-9 h-9 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-3">
                    {reasonIcons[i]}
                  </div>
                  <h3 className="font-display font-bold text-ink text-sm mb-1">{r.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{r.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-6 bg-[#F5F4EF]" aria-label="Contact form and information">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10">

            {/* Form */}
            <FadeUp>
              <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <h2 className="font-display font-bold text-ink text-xl mb-7">Send us a message</h2>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Icons.Check cls="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="font-display font-bold text-ink text-xl mb-2">Message Received!</h3>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto">
                      We'll get back to you within 48 hours. Check your inbox for a confirmation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                          placeholder="Dr. Ahmed Khan"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-ink text-sm placeholder-gray-400 transition" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-ink text-sm placeholder-gray-400 transition" />
                      </div>
                    </div>

                    {/* Organisation + Role */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="org" className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Organisation
                        </label>
                        <input id="org" name="org" type="text" value={form.org} onChange={handleChange}
                          placeholder="City Pharmacy, Lahore"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-ink text-sm placeholder-gray-400 transition" />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Your Role
                        </label>
                        <select id="role" name="role" value={form.role} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-ink text-sm transition">
                          <option value="">Select…</option>
                          {contactPage.form.roles.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea id="message" name="message" required value={form.message} onChange={handleChange}
                        rows={5} placeholder="Tell us about your pharmacy/clinic and what you're looking for…"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-ink text-sm placeholder-gray-400 transition resize-none" />
                    </div>

                    {/* Demo checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5">
                        <input type="checkbox" name="isDemo" checked={form.isDemo} onChange={handleChange} className="sr-only" />
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${form.isDemo ? 'bg-teal-600 border-teal-600' : 'border-gray-300 group-hover:border-teal-400'}`}>
                          {form.isDemo && <Icons.Check cls="w-3 h-3 text-white" />}
                        </div>
                      </div>
                      <div>
                        <span className="font-semibold text-ink text-sm">I'm requesting a product demo</span>
                        <p className="text-gray-400 text-xs mt-0.5">We'll schedule a 30-minute live walkthrough with your own prescriptions.</p>
                      </div>
                    </label>

                    {errorMsg && (
                      <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">
                        {errorMsg}
                      </div>
                    )}

                    <button type="submit" disabled={status === 'sending'}
                      className={`w-full py-4 rounded-xl font-bold text-sm transition-all shadow-lg ${
                        status === 'sending'
                          ? 'bg-teal-400 cursor-not-allowed text-white'
                          : 'bg-teal-600 hover:bg-teal-700 text-white hover:-translate-y-0.5 shadow-teal-600/25'
                      }`}>
                      {status === 'sending' ? 'Sending…' : form.isDemo ? 'Request Demo & Send Message' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>

            {/* Contact info */}
            <FadeUp delay={0.15}>
              <div className="space-y-5">
                {/* Contact card */}
                <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm">
                  <h3 className="font-display font-bold text-ink mb-5">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                        <Icons.Mail cls="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-0.5">Email</div>
                        <a href={`mailto:${contactPage.info.email}`}
                          className="text-sm font-medium text-ink hover:text-teal-600 transition-colors break-all">
                          {contactPage.info.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response time */}
                <div className="bg-teal-50 border border-teal-200 rounded-3xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                    <span className="font-semibold text-teal-700 text-sm">We're responsive</span>
                  </div>
                  <p className="text-teal-600 text-xs leading-relaxed">{contactPage.info.responseTime}</p>
                </div>

                {/* Demo highlight */}
                <div className="dark-section rounded-3xl p-7 text-white">
                  <div className="font-display font-bold text-lg mb-2">Request a Live Demo</div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    See meDDI AI read your own prescriptions and detect interactions live — in under 30 minutes.
                    No commitment required.
                  </p>
                  <div className="space-y-2 text-sm">
                    {['30-minute live walkthrough', 'Use your own prescription samples', 'No installation required for demo', 'Q&A with our research team'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-teal-300">
                        <Icons.Check cls="w-4 h-4 text-teal-400 shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  )
}
