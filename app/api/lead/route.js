import { NextResponse } from 'next/server';

const WEBHOOK_URL = process.env.WEBHOOK_URL;

const rateLimit = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5;
  const key = ip;
  const record = rateLimit.get(key) || { count: 0, resetTime: now + windowMs };
  if (now > record.resetTime) {
    record.count = 0;
    record.resetTime = now + windowMs;
  }
  record.count++;
  rateLimit.set(key, record);
  return record.count <= maxRequests;
}

function sanitize(val, maxLen = 200) {
  if (typeof val !== 'string') return '';
  return val.trim().slice(0, maxLen).replace(/[<>]/g, '');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }

    const body = await request.json();
    const { name, email, quiz, result, ageBracket, confidence, affiliate, utm_source, utm_campaign, a_aid, cta_url } = body;

    if (!name || !email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    if (!WEBHOOK_URL) {
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name: sanitize(name),
      email: sanitize(email),
      quiz: sanitize(quiz),
      result: sanitize(result),
      ageBracket: sanitize(ageBracket),
      confidence: Number(confidence) || 0,
      affiliate: sanitize(affiliate),
      utm_source: sanitize(utm_source),
      utm_campaign: sanitize(utm_campaign),
      a_aid: sanitize(a_aid),
      cta_url: sanitize(cta_url, 500),
    };

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {});

    return NextResponse.json({ ok: true }, {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      }
    });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}