import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'orba_admin';

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET ?? process.env.NEXTAUTH_SECRET ?? 'dev-only-secret';
}

function sign(value: string) {
  return createHmac('sha256', getSecret()).update(value).digest('hex');
}

export function verifyAdminCredentials(email: string, password: string) {
  const expectedEmail = process.env.ADMIN_EMAIL ?? 'admin@solucionesorba.com';
  const expectedPassword = process.env.ADMIN_PASSWORD ?? 'admin12345';
  return email === expectedEmail && password === expectedPassword;
}

export async function createAdminSession(email: string) {
  const value = Buffer.from(JSON.stringify({ email, createdAt: Date.now() })).toString(
    'base64url'
  );
  const session = `${value}.${sign(value)}`;
  const store = await cookies();
  store.set(COOKIE_NAME, session, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  });
}

export async function destroyAdminSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated() {
  const store = await cookies();
  const session = store.get(COOKIE_NAME)?.value;
  if (!session) return false;

  const [value, signature] = session.split('.');
  if (!value || !signature) return false;

  const expected = sign(value);
  const providedBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (providedBuffer.length !== expectedBuffer.length) return false;

  return timingSafeEqual(providedBuffer, expectedBuffer);
}
