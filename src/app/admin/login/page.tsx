import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await isAdminAuthenticated()) redirect('/admin');
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-surface-container-low flex items-center justify-center px-margin-mobile">
      <form
        action="/admin/session"
        method="post"
        className="w-full max-w-md bg-surface-container-lowest border border-outline-variant rounded-xl p-lg space-y-md"
      >
        <div>
          <p className="font-label-md text-label-md text-secondary uppercase">Soluciones Orba</p>
          <h1 className="font-headline-lg text-headline-lg text-primary">Backoffice</h1>
        </div>
        {params.error ? (
          <p className="bg-error-container text-on-error-container p-sm rounded">
            Credenciales incorrectas.
          </p>
        ) : null}
        <label className="block space-y-xs">
          <span className="font-label-md text-label-md">Correo</span>
          <input
            name="email"
            type="email"
            defaultValue="admin@solucionesorba.com"
            className="w-full border border-outline-variant rounded px-sm py-xs"
            required
          />
        </label>
        <label className="block space-y-xs">
          <span className="font-label-md text-label-md">Contraseña</span>
          <input
            name="password"
            type="password"
            className="w-full border border-outline-variant rounded px-sm py-xs"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md font-bold"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
