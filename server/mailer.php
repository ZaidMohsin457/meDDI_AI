<?php
/**
 * meDDI AI — Contact & Waitlist Mailer
 * ─────────────────────────────────────────────────────────────────
 * DEPLOYMENT: Upload this file to Hostinger's public_html/api/mailer.php
 * Then make sure the React app posts to https://meddiai.com/api/mailer.php
 *
 * HOSTINGER SETUP (one-time):
 *   1. In hPanel → Email Accounts, confirm admin@meddiai.com exists.
 *   2. Upload this file to public_html/api/mailer.php via File Manager.
 *   3. That's it — Hostinger's mail() uses their SMTP automatically.
 * ─────────────────────────────────────────────────────────────────
 */

// ── CORS ──────────────────────────────────────────────────────────
// If the React app and this PHP file are on the same domain (meddiai.com),
// CORS is not needed. The headers below handle GitHub Pages / localhost dev.
$allowed = ['https://meddiai.com', 'https://www.meddiai.com', 'http://localhost:5173'];
$origin  = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowed, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
} elseif (empty($origin)) {
    // Same-origin request — no header needed
} else {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Origin not allowed']);
    exit;
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only POST allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// ── Parse input ───────────────────────────────────────────────────
$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request body']);
    exit;
}

$type = $input['type'] ?? 'contact';
$to   = 'admin@meddiai.com';

// ── Route by type ─────────────────────────────────────────────────
if ($type === 'waitlist') {

    $email = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
    if (!$email) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid email address']);
        exit;
    }

    $subject = '[Waitlist] ' . $email;
    $body    = buildWaitlistEmail($email);
    $replyTo = $email;

} else {

    // Contact / Demo request
    $name    = sanitize($input['name']    ?? '');
    $email   = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $org     = sanitize($input['org']     ?? '');
    $role    = sanitize($input['role']    ?? '');
    $message = sanitize($input['message'] ?? '');
    $isDemo  = !empty($input['isDemo']);

    if (!$name || !$email || !$message) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Name, email, and message are required']);
        exit;
    }

    $label   = $isDemo ? '[Demo Request]' : '[Contact]';
    $subject = "$label $name — meDDI AI";
    $body    = buildContactEmail($name, $email, $org, $role, $message, $isDemo);
    $replyTo = "$name <$email>";
}

// ── Build headers ─────────────────────────────────────────────────
$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: meDDI AI <admin@meddiai.com>',
    'Reply-To: ' . $replyTo,
    'X-Mailer: meDDI-Mailer/1.0',
]);

// ── Send ──────────────────────────────────────────────────────────
$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Email could not be sent. Please contact us at admin@meddiai.com',
    ]);
}

// ── Helpers ───────────────────────────────────────────────────────
function sanitize(string $val): string {
    return htmlspecialchars(strip_tags(trim($val)), ENT_QUOTES, 'UTF-8');
}

function buildContactEmail(
    string $name, string $email,
    string $org,  string $role,
    string $message, bool $isDemo
): string {
    $title       = $isDemo ? '🎯 Demo Request' : '📬 Contact Form';
    $msgHtml     = nl2br($message);
    $demoTag     = $isDemo
        ? "<tr>
              <td class='label'>Request</td>
              <td style='color:#0d9488;font-weight:600'>Product Demo</td>
           </tr>"
        : '';
    $orgRow  = $org  ? "<tr><td class='label'>Organisation</td><td>$org</td></tr>" : '';
    $roleRow = $role ? "<tr><td class='label'>Role</td><td>$role</td></tr>" : '';

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8">
<style>
  body   { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin:0; padding:0; background:#f4f4f4; color:#1a1a1a; }
  .wrap  { max-width:600px; margin:32px auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,.08); }
  .head  { background:#0d9488; padding:28px 32px; color:#fff; }
  .head h1 { margin:0; font-size:18px; font-weight:700; }
  .head p  { margin:4px 0 0; font-size:13px; opacity:.8; }
  .body  { padding:32px; }
  table  { width:100%; border-collapse:collapse; }
  td     { padding:10px 14px; border-bottom:1px solid #eee; font-size:14px; vertical-align:top; }
  .label { font-weight:600; background:#f9f9f9; width:120px; color:#555; }
  .msg   { background:#f0fdfa; border-left:3px solid #0d9488; padding:16px; font-size:14px; line-height:1.7; border-radius:0 6px 6px 0; margin-top:20px; }
  .foot  { font-size:11px; color:#aaa; margin-top:24px; padding-top:16px; border-top:1px solid #eee; }
</style>
</head>
<body>
<div class="wrap">
  <div class="head">
    <h1>meDDI AI</h1>
    <p>$title</p>
  </div>
  <div class="body">
    <table>
      <tr><td class="label">Name</td><td>$name</td></tr>
      <tr><td class="label">Email</td><td><a href="mailto:$email" style="color:#0d9488">$email</a></td></tr>
      $orgRow
      $roleRow
      $demoTag
    </table>
    <div class="msg">$msgHtml</div>
    <p class="foot">
      Sent via meDDI AI contact form &bull;
      Reply to this email to respond directly to $name.
    </p>
  </div>
</div>
</body>
</html>
HTML;
}

function buildWaitlistEmail(string $email): string {
    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8">
<style>
  body  { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin:0; padding:0; background:#f4f4f4; }
  .wrap { max-width:500px; margin:32px auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,.08); }
  .head { background:#0d9488; padding:28px 32px; color:#fff; }
  .head h1 { margin:0; font-size:18px; font-weight:700; }
  .head p  { margin:4px 0 0; font-size:13px; opacity:.8; }
  .body { padding:32px; }
  .pill { display:inline-block; background:#f0fdfa; border:1px solid #99f6e4; color:#0d9488; font-size:16px; font-weight:600; padding:12px 20px; border-radius:8px; margin:8px 0 16px; }
  .foot { font-size:11px; color:#aaa; margin-top:24px; }
</style>
</head>
<body>
<div class="wrap">
  <div class="head">
    <h1>meDDI AI</h1>
    <p>📋 New Waitlist Signup</p>
  </div>
  <div class="body">
    <p style="margin-top:0;color:#444">A new user joined the waitlist:</p>
    <div class="pill">$email</div>
    <p class="foot">Sent via meDDI AI waitlist form</p>
  </div>
</div>
</body>
</html>
HTML;
}
