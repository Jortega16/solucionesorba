import { NextResponse } from 'next/server';
import { SITE } from '@/lib/site';

const PROJECT_LABELS: Record<string, string> = {
  web: 'Desarrollo web',
  software: 'Software a medida',
  ai: 'IA y análisis de datos',
  iot: 'Sistemas ciberfísicos',
  other: 'Otro / Consultoría',
};

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  startDate?: string;
  message?: string;
  fax_number?: string;
  formLoadedAt?: number;
  recaptchaToken?: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function isGibberish(str: string): boolean {
  if (!str) return false;
  const words = str.trim().split(/\s+/);
  for (const word of words) {
    if (word.length >= 14 && /[A-Z]/.test(word) && /[a-z]/.test(word)) {
      const upperCount = (word.match(/[A-Z]/g) || []).length;
      if (upperCount >= 4) {
        return true;
      }
    }
  }
  return false;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.CONTACT_TO_EMAIL ?? 'jortega@solucionesorba.com,jorge.ortega@solucionesorba.com')
    .split(',')
    .map((address) => address.trim())
    .filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json(
      {
        error:
          'El envío de correo no está configurado. Configura RESEND_API_KEY y CONTACT_FROM_EMAIL.',
      },
      { status: 503 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Datos del formulario inválidos.' }, { status: 400 });
  }

  // 1. Verificación Honeypot (campo señuelo invisible para humanos)
  if (body.fax_number && body.fax_number.trim().length > 0) {
    console.warn('[Anti-Spam] Bot detectado por honeypot');
    return NextResponse.json({ ok: true });
  }

  // 2. Verificación Time-trap (velocidad de llenado)
  if (body.formLoadedAt) {
    const elapsed = Date.now() - Number(body.formLoadedAt);
    if (!isNaN(elapsed) && elapsed > 0 && elapsed < 2500) {
      console.warn(`[Anti-Spam] Envío descartado por velocidad no humana (${elapsed}ms)`);
      return NextResponse.json({ ok: true });
    }
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const company = body.company?.trim() || '—';
  const phone = body.phone?.trim() || '—';
  const projectType = body.projectType
    ? (PROJECT_LABELS[body.projectType] ?? body.projectType)
    : '—';
  const budget = body.budget?.trim() || 'Por definir';
  const startDate = body.startDate?.trim() || 'Por definir';

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Completa los campos obligatorios.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Correo electrónico inválido.' }, { status: 400 });
  }

  // 3. Verificación de patrones de texto aleatorio / gibberish de bots
  if (isGibberish(name) || isGibberish(message)) {
    console.warn('[Anti-Spam] Patrón de texto aleatorio (gibberish) detectado');
    return NextResponse.json({ ok: true });
  }

  // 4. Verificación de Google reCAPTCHA v3
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (recaptchaSecret) {
    if (!body.recaptchaToken) {
      console.warn('[Anti-Spam] Token de reCAPTCHA ausente');
      return NextResponse.json(
        { error: 'Validación de seguridad requerida. Por favor intenta de nuevo.' },
        { status: 400 }
      );
    }

    try {
      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: body.recaptchaToken,
        }),
      });

      const verifyData = (await verifyRes.json()) as {
        success: boolean;
        score?: number;
        action?: string;
        'error-codes'?: string[];
      };

      if (!verifyData.success || (typeof verifyData.score === 'number' && verifyData.score < 0.5)) {
        console.warn('[Anti-Spam] reCAPTCHA rechazado:', verifyData);
        return NextResponse.json(
          { error: 'Validación de seguridad no superada. Por favor recarga e intenta de nuevo.' },
          { status: 400 }
        );
      }
    } catch (err) {
      console.error('[Anti-Spam] Error verificando con Google reCAPTCHA:', err);
    }
  }

  const subject = `Nueva solicitud de contacto — ${name}`;
  const html = `
    <h2>Nueva solicitud desde solucionesorba.com</h2>
    <p><em>Destino objetivo: ${escapeHtml(process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? SITE.email)}</em></p>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Tipo de proyecto:</strong> ${escapeHtml(projectType)}</p>
    <p><strong>Presupuesto aproximado:</strong> ${escapeHtml(budget)}</p>
    <p><strong>Inicio estimado:</strong> ${escapeHtml(startDate)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    let userMessage = 'No se pudo enviar el correo. Intenta de nuevo más tarde.';
    try {
      const detail = (await response.json()) as { message?: string };
      if (detail.message?.includes('verify a domain')) {
        userMessage =
          'El correo aún no está activo para este dominio. Escríbenos directamente a jortega@solucionesorba.com.';
      } else if (detail.message) {
        console.error('Resend error:', detail.message);
      }
    } catch {
      console.error('Resend error:', await response.text());
    }
    return NextResponse.json({ error: userMessage }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

