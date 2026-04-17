import { useSEO } from '../hooks/useSEO'
import { useInView } from '../hooks/useInView'
import { Icons } from '../components/Icons'
import { CTABanner } from '../components/CTABanner'
import { seo } from '../site-data'

const DRIVE_URL = 'https://drive.google.com/drive/folders/1SOqIwPc2paDtgFcRzxe6x7Hg4gXFEujO?usp=drive_link'

function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={className}
      style={inView ? { animation: `fadeUp 0.7s ease-out ${delay}s both` } : { opacity: 0 }}>
      {children}
    </div>
  )
}

const AndroidIcon = ({ cls = 'w-6 h-6' }) => (
  <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.341a.5.5 0 01-.5.5h-.273a.5.5 0 01-.5-.5V10.66a.5.5 0 01.5-.5h.273a.5.5 0 01.5.5v4.681zm-9.546 0a.5.5 0 01-.5.5H7.2a.5.5 0 01-.5-.5V10.66a.5.5 0 01.5-.5h.277a.5.5 0 01.5.5v4.681zm8.15-7.295H7.872L6.61 5.388a.25.25 0 01.092-.342l.705-.407a.25.25 0 01.342.092l1.183 2.048h6.136l1.183-2.048a.25.25 0 01.342-.092l.705.407a.25.25 0 01.092.342l-1.263 2.658zM9.9 6.5a.75.75 0 110-1.5.75.75 0 010 1.5zm4.2 0a.75.75 0 110-1.5.75.75 0 010 1.5zM7.5 9v7.5A1.5 1.5 0 009 18h6a1.5 1.5 0 001.5-1.5V9H7.5z" />
  </svg>
)

const DownloadIcon = ({ cls = 'w-6 h-6' }) => (
  <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
)

const FileIcon = ({ cls = 'w-6 h-6' }) => (
  <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const VideoIcon = ({ cls = 'w-6 h-6' }) => (
  <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
)

const SettingsIcon = ({ cls = 'w-6 h-6' }) => (
  <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const driveCards = [
  {
    icon: DownloadIcon,
    title: 'APK File',
    label: 'Android Package',
    desc: 'The installable Android app — tap to download and install directly on your device.',
    badge: '~90 MB',
    color: 'teal',
  },
  {
    icon: FileIcon,
    title: 'User Manual',
    label: 'PDF Guide',
    desc: 'Full step-by-step guide covering every feature: scanning, DDI checking, history, and settings.',
    badge: 'PDF',
    color: 'blue',
  },
  {
    icon: VideoIcon,
    title: 'Demo Video',
    label: 'Walkthrough',
    desc: 'Watch a live demo of meDDI AI scanning a real prescription and detecting drug interactions.',
    badge: 'MP4',
    color: 'purple',
  },
]

const steps = [
  {
    num: '01',
    icon: DownloadIcon,
    title: 'Open the Drive Folder',
    desc: 'Tap the button below to open our Google Drive folder. Inside you\'ll find the APK, User Manual, and Demo Video.',
  },
  {
    num: '02',
    icon: AndroidIcon,
    title: 'Download the APK',
    desc: 'Tap on the APK file, then tap the three-dot menu (⋮) → "Download". The file will save to your Downloads folder.',
  },
  {
    num: '03',
    icon: SettingsIcon,
    title: 'Allow Unknown Sources',
    desc: 'Open your phone\'s Settings → Security (or Privacy) → toggle on "Install from unknown sources" for your browser or Files app.',
  },
  {
    num: '04',
    icon: Icons.Check,
    title: 'Install & Launch',
    desc: 'Open your Downloads folder, tap the APK, hit Install, then Open. Create an account and start scanning prescriptions!',
  },
]

const tips = [
  {
    icon: Icons.Warning,
    title: '"Unknown Sources" Blocked?',
    desc: 'Go to Settings → Apps → your browser → Install Unknown Apps → toggle Allow.',
  },
  {
    icon: Icons.Phone,
    title: 'Use Chrome for Best Results',
    desc: 'If your download stalls, open the Drive link in Chrome — it handles APK downloads most reliably.',
  },
  {
    icon: Icons.Shield,
    title: 'App Won\'t Open?',
    desc: 'meDDI AI requires Android 6.0 or later. Check Settings → About Phone → Android version.',
  },
  {
    icon: Icons.Mail,
    title: 'Still Stuck?',
    desc: (
      <span>
        Reach out via our{' '}
        <a href="/contact" className="text-teal-600 underline underline-offset-2 hover:text-teal-700 font-medium">
          contact page
        </a>{' '}
        and we'll help you get set up within 24 hours.
      </span>
    ),
  },
]

const cardColors = {
  teal: {
    bg: 'bg-teal-500/10',
    icon: 'text-teal-400',
    badge: 'bg-teal-500/20 text-teal-300',
    btn: 'bg-teal-500 hover:bg-teal-400',
  },
  blue: {
    bg: 'bg-blue-500/10',
    icon: 'text-blue-400',
    badge: 'bg-blue-500/20 text-blue-300',
    btn: 'bg-blue-500 hover:bg-blue-400',
  },
  purple: {
    bg: 'bg-purple-500/10',
    icon: 'text-purple-400',
    badge: 'bg-purple-500/20 text-purple-300',
    btn: 'bg-purple-500 hover:bg-purple-400',
  },
}

export default function Download() {
  useSEO(seo.download)

  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="hero-section pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <span className="section-label text-teal-600 mb-4 block">GET THE APP</span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="font-display font-extrabold text-ink leading-tight mb-5"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Download{' '}
              <span className="gradient-text">meDDI AI</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Free Android app — scan handwritten prescriptions and catch dangerous drug interactions in seconds.
              No subscription, no waiting list.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-teal-600/25 hover:-translate-y-0.5 text-sm"
              >
                <DownloadIcon cls="w-4 h-4" />
                Download APK
                <Icons.ExternalLink cls="w-3.5 h-3.5 opacity-70" />
              </a>
              <a
                href={DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-7 py-3.5 rounded-xl transition-all text-sm"
              >
                Open Drive Folder
                <Icons.ExternalLink cls="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Icons.Check cls="w-4 h-4 text-teal-500" /> Android 6.0+</span>
              <span className="flex items-center gap-1.5"><Icons.Check cls="w-4 h-4 text-teal-500" /> ~30 MB</span>
              <span className="flex items-center gap-1.5"><Icons.Check cls="w-4 h-4 text-teal-500" /> Free forever</span>
              <span className="flex items-center gap-1.5"><Icons.Check cls="w-4 h-4 text-teal-500" /> No Play Store needed</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Drive Cards ─────────────────────────────────────────── */}
      <section className="dark-section py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-10">
            <span className="section-label text-teal-400 mb-3 block">WHAT'S IN THE FOLDER</span>
            <h2 className="font-display font-bold text-white text-2xl">Everything you need, in one place</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-3 gap-6">
            {driveCards.map((card, i) => {
              const c = cardColors[card.color]
              return (
                <FadeUp key={card.title} delay={i * 0.08}>
                  <div className="card-hover rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 h-full">
                    <div className="flex items-start justify-between">
                      <div className={`${c.bg} p-3 rounded-xl`}>
                        <card.icon cls={`w-6 h-6 ${c.icon}`} />
                      </div>
                      <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
                        {card.badge}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{card.label}</p>
                      <h3 className="font-display font-bold text-white text-lg mb-2">{card.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                    <a
                      href={DRIVE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 ${c.btn} text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-all hover:-translate-y-0.5`}
                    >
                      Open in Drive
                      <Icons.ExternalLink cls="w-3.5 h-3.5" />
                    </a>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Installation Steps ──────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="section-label text-teal-600 mb-3 block">HOW TO INSTALL</span>
            <h2 className="font-display font-extrabold text-ink mb-3"
              style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
              Up and running in 4 steps
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Android makes it easy to install apps directly — no app store required.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.1}>
                <div className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-5">
                  <div className="flex-shrink-0 flex flex-col items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-teal-600 flex items-center justify-center shadow-md shadow-teal-600/20">
                      <step.icon cls="w-5 h-5 text-white" />
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-300">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-ink text-base mb-1.5">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Visual connector hint */}
          <FadeUp delay={0.4} className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-teal-50 border border-teal-100 rounded-2xl px-6 py-4 text-sm text-teal-700">
              <Icons.Zap cls="w-5 h-5 text-teal-500 flex-shrink-0" />
              <span>
                <strong>Tip:</strong> The whole process takes under 2 minutes on a stable connection.
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── System Requirements strip ───────────────────────────── */}
      <section className="py-10 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Android Version', value: '6.0 +' },
              { label: 'Storage', value: '~90 MB' },
              { label: 'Internet', value: 'Required' },
              { label: 'Cost', value: 'Free' },
            ].map(req => (
              <div key={req.label}>
                <div className="font-display font-extrabold text-teal-600 text-2xl mb-1">{req.value}</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">{req.label}</div>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* ── Troubleshooting ─────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="section-label text-teal-600 mb-3 block">TROUBLESHOOTING</span>
            <h2 className="font-display font-bold text-ink text-2xl">Common questions</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-5">
            {tips.map((tip, i) => (
              <FadeUp key={tip.title} delay={i * 0.08}>
                <div className="card-hover bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                    <tip.icon cls="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-ink text-sm mb-1">{tip.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <CTABanner
        headline="Ready to eliminate prescription errors?"
        subheadline="Download meDDI AI today — free for Android. No sign-up friction, no waiting list."
        primaryCta={{ label: 'Download Now', href: DRIVE_URL }}
        secondaryCta={{ label: 'Learn more about meDDI', href: '/about' }}
      />
    </main>
  )
}
