const nodemailer = require('nodemailer')

// ─── CORS helper ─────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  'https://meddiai.com',
  'https://www.meddiai.com',
  'http://localhost:5173',   // Vite dev server
]

function setCORS(req, res) {
  const origin = req.headers.origin || ''
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Vary', 'Origin')
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

// ─── Sanitise ─────────────────────────────────────────────────────
function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// ─── Email builders ───────────────────────────────────────────────
function buildContactEmail({ name, email, org, role, message, isDemo }) {
  const title   = isDemo ? '🎯 Demo Request' : '📬 Contact Form'
  const msgHtml = esc(message).replace(/\n/g, '<br>')
  const optRows = [
    org    && `<tr><td class="lbl">Organisation</td><td>${esc(org)}</td></tr>`,
    role   && `<tr><td class="lbl">Role</td><td>${esc(role)}</td></tr>`,
    isDemo && `<tr><td class="lbl">Request</td><td style="color:#0d9488;font-weight:600">Product Demo Requested</td></tr>`,
  ].filter(Boolean).join('\n')

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<style>
  body { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;padding:0;background:#f4f4f4;color:#1a1a1a }
  .wrap { max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08) }
  .head { background:#0d9488;padding:28px 32px;color:#fff }
  .head h1 { margin:0;font-size:18px;font-weight:700 }
  .head p  { margin:4px 0 0;font-size:13px;opacity:.8 }
  .body { padding:32px }
  table { width:100%;border-collapse:collapse }
  td { padding:10px 14px;border-bottom:1px solid #eee;font-size:14px;vertical-align:top }
  .lbl { font-weight:600;background:#f9f9f9;width:120px;color:#555 }
  .msg { background:#f0fdfa;border-left:3px solid #0d9488;padding:16px;font-size:14px;line-height:1.7;border-radius:0 6px 6px 0;margin-top:20px }
  .foot { font-size:11px;color:#aaa;margin-top:24px;padding-top:16px;border-top:1px solid #eee }
</style></head><body>
<div class="wrap">
  <div class="head"><h1>meDDI AI</h1><p>${title}</p></div>
  <div class="body">
    <table>
      <tr><td class="lbl">Name</td><td>${esc(name)}</td></tr>
      <tr><td class="lbl">Email</td><td><a href="mailto:${esc(email)}" style="color:#0d9488">${esc(email)}</a></td></tr>
      ${optRows}
    </table>
    <div class="msg">${msgHtml}</div>
    <p class="foot">Sent via meDDI AI contact form &bull; Reply to this email to respond directly to ${esc(name)}.</p>
  </div>
</div></body></html>`
}

function buildWaitlistEmail(email) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<style>
  body { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;padding:0;background:#f4f4f4 }
  .wrap { max-width:500px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08) }
  .head { background:#0d9488;padding:28px 32px;color:#fff }
  .head h1 { margin:0;font-size:18px;font-weight:700 }
  .head p { margin:4px 0 0;font-size:13px;opacity:.8 }
  .body { padding:32px }
  .pill { display:inline-block;background:#f0fdfa;border:1px solid #99f6e4;color:#0d9488;font-size:16px;font-weight:600;padding:12px 20px;border-radius:8px;margin:8px 0 }
  .foot { font-size:11px;color:#aaa;margin-top:24px }
</style></head><body>
<div class="wrap">
  <div class="head"><h1>meDDI AI</h1><p>📋 New Waitlist Signup</p></div>
  <div class="body">
    <p style="margin-top:0;color:#444">A new user joined the waitlist:</p>
    <div class="pill">${esc(email)}</div>
    <p class="foot">Sent via meDDI AI waitlist form</p>
  </div>
</div></body></html>`
}

// ─── Main handler ─────────────────────────────────────────────────
module.exports = async function handler(req, res) {
  setCORS(req, res)

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST')   return res.status(405).json({ success: false, message: 'Method not allowed' })

  const body = req.body
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ success: false, message: 'Invalid request body' })
  }

  // ── Build mail params ──────────────────────────────────────────
  const to      = process.env.SMTP_USER
  const { type } = body
  let subject, html, replyTo

  if (type === 'waitlist') {
    const email = (body.email ?? '').trim()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email address' })
    }
    subject = `[Waitlist] ${email}`
    replyTo = email
    html    = buildWaitlistEmail(email)

  } else {
    const { name, email, org, role, message, isDemo } = body
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ success: false, message: 'Name, email and message are required' })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email address' })
    }
    const label = isDemo ? '[Demo Request]' : '[Contact]'
    subject = `${label} ${name.trim()} — meDDI AI`
    replyTo = `${name.trim()} <${email.trim()}>`
    html    = buildContactEmail({
      name:    name.trim(),
      email:   email.trim(),
      org:     org?.trim()     ?? '',
      role:    role?.trim()    ?? '',
      message: message.trim(),
      isDemo:  Boolean(isDemo),
    })
  }

  // ── Send via Hostinger SMTP ────────────────────────────────────
  const transporter = nodemailer.createTransport({
    host:   'smtp.hostinger.com',
    port:   465,
    secure: true,                         // SSL on port 465
    auth: {
      user: process.env.SMTP_USER,        // admin@meddiai.com
      pass: process.env.SMTP_PASS,        // your Hostinger email password
    },
  })

  try {
    await transporter.sendMail({
      from:    `"meDDI AI" <${process.env.SMTP_USER}>`,
      to,
      replyTo,
      subject,
      html,
    })
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('[mailer] SMTP error:', err.message)
    return res.status(500).json({
      success: false,
      message: 'Email could not be sent. Please contact us at admin@meddiai.com',
    })
  }
}
