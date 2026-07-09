import { redirect } from 'next/navigation';
import { createAdminSession, destroyAdminSession, verifyAdminCredentials } from '@/lib/admin-auth';

function value(formData: FormData, key: string) {
  return String(formData.get(key) ?? '').trim();
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = value(formData, 'email');
  const password = value(formData, 'password');

  if (!verifyAdminCredentials(email, password)) {
    redirect('/admin/login?error=1');
  }

  await createAdminSession(email);
  redirect('/admin');
}

export async function DELETE() {
  await destroyAdminSession();
  redirect('/admin/login');
}
