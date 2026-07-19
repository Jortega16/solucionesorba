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
  message?: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
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

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const company = body.company?.trim() || '—';
  const phone = body.phone?.trim() || '—';
  const projectType = body.projectType
    ? (PROJECT_LABELS[body.projectType] ?? body.projectType)
    : '—';

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Completa los campos obligatorios.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Correo electrónico inválido.' }, { status: 400 });
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
      cc: [email],
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
