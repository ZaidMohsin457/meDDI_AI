import { useState, useEffect } from 'react'
import { Icons } from './Icons'

export function PhoneMockup() {
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
      {/* Glow */}
      <div
        className="absolute inset-8 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.22) 0%, transparent 70%)' }}
      />

      {/* Phone shell */}
      <div
        className="relative w-60 bg-gray-900 rounded-[2.6rem] border-[3px] border-gray-700 shadow-2xl overflow-hidden"
        style={{ height: '520px', transform: 'rotateY(-6deg) rotateX(2deg)' }}
        aria-label="meDDI AI app demo"
        role="img"
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-3xl z-20" />

        {/* Screen */}
        <div className="absolute inset-[3px] bg-white rounded-[2.4rem] overflow-hidden flex flex-col">

          {/* App header */}
          <div className="bg-teal-600 pt-8 pb-3 px-4 flex items-center gap-2 shrink-0">
            <div className="w-5 h-5 bg-white/25 rounded-md flex items-center justify-center">
              <Icons.Shield cls="w-3 h-3 text-white" />
            </div>
            <span className="text-white text-xs font-bold font-display tracking-wide">meDDI AI</span>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
              <span className="text-green-200 text-[10px] font-mono">Live</span>
            </div>
          </div>

          <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">

            {/* Prescription scan area */}
            <div
              className="relative bg-amber-50 rounded-2xl overflow-hidden border border-amber-100/80"
              style={{ height: '150px' }}
            >
              <div className="absolute inset-4 space-y-3">
                {[88, 72, 80, 60, 75, 55].map((w, i) => (
                  <div key={i} className="hw-line rounded-full" style={{ width: `${w}%` }} />
                ))}
              </div>

              {/* Corner brackets */}
              {['top-2 left-2 border-t-2 border-l-2', 'top-2 right-2 border-t-2 border-r-2',
                'bottom-2 left-2 border-b-2 border-l-2', 'bottom-2 right-2 border-b-2 border-r-2'].map((cls, i) => (
                  <div key={i} className={`absolute w-5 h-5 border-teal-500 rounded-sm ${cls}`} />
                ))}

              {phase === 'scanning' && (
                <>
                  <div className="absolute inset-0 bg-teal-400/10 pointer-events-none" />
                  <div className="scan-line" />
                </>
              )}

              {phase === 'done' && (
                <div className="absolute inset-0 bg-teal-500/10 flex items-center justify-center" style={{ animation: 'fadeIn 0.3s ease-out both' }}>
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <Icons.Check cls="w-6 h-6 text-white" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-2 right-2">
                {phase === 'idle' && <span className="text-[9px] text-gray-400 font-mono bg-white/80 rounded px-1.5 py-0.5">Ready to scan</span>}
                {phase === 'scanning' && <span className="text-[9px] text-teal-700 font-mono bg-teal-50/90 rounded px-1.5 py-0.5">Analyzing…</span>}
                {phase === 'done' && <span className="text-[9px] text-teal-700 font-mono bg-teal-50/90 rounded px-1.5 py-0.5">Complete ✓</span>}
              </div>
            </div>

            {/* Dots while scanning */}
            {phase === 'scanning' && (
              <div className="flex items-center gap-2 px-1">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
                <span className="text-[10px] text-teal-600 font-mono">Processing…</span>
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
                  <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-1.5" style={{ animation: `fadeIn 0.4s ease-out ${i * 0.1}s both` }}>
                    <span className="text-[10px] font-semibold text-gray-800">{d.name}</span>
                    <span className="text-[9px] text-gray-400 font-mono">{d.dose}</span>
                    {d.ok ? <Icons.Check cls="w-3 h-3 text-teal-500" /> : <span className="text-[10px] text-orange-500">⚠</span>}
                  </div>
                ))}

                <div className="bg-red-50 border border-red-200 rounded-xl px-2.5 py-2 flex items-start gap-2" style={{ animation: 'fadeIn 0.4s ease-out 0.35s both' }}>
                  <Icons.Warning cls="w-3.5 h-3.5 text-red-500 mt-px shrink-0" />
                  <div>
                    <div className="text-[9px] font-bold text-red-600 uppercase tracking-wide">DDI Warning</div>
                    <div className="text-[9px] text-red-500 leading-tight">Aspirin ↔ Atorvastatin<br />Monitor for myopathy risk</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom tab bar */}
          <div className="border-t border-gray-100 px-4 py-2 flex items-center justify-around shrink-0">
            {[{ s: '⬡', a: true }, { s: '◑', a: false }, { s: '⊞', a: false }, { s: '◉', a: false }].map((t, i) => (
              <div key={i} className={`text-sm p-1.5 rounded-lg ${t.a ? 'text-teal-600 bg-teal-50' : 'text-gray-300'}`}>{t.s}</div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
      </div>

      {/* Floating badges */}
      <div className="badge-float-1 absolute -right-4 top-20 bg-white rounded-2xl shadow-lg border border-gray-100 px-3.5 py-2.5 hidden sm:block">
        <div className="font-mono font-bold text-teal-600 text-sm">95%+</div>
        <div className="text-gray-500 text-[10px]">Accuracy</div>
      </div>
      <div className="badge-float-2 absolute -left-6 bottom-32 bg-red-50 border border-red-200 rounded-2xl shadow-lg px-3.5 py-2.5 hidden sm:block">
        <div className="text-[10px] font-bold text-red-600 font-mono">⚠ DDI Alert</div>
        <div className="text-[9px] text-red-500">Interaction found</div>
      </div>
      <div className="badge-float-1 absolute -left-2 top-28 bg-white rounded-2xl shadow-lg border border-teal-100 px-3 py-2 hidden lg:block" style={{ animationDelay: '1.5s' }}>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-semibold text-gray-700">Ready</span>
        </div>
      </div>
    </div>
  )
}
