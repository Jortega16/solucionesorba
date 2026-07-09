import Link from 'next/link';
import { redirect } from 'next/navigation';
import { AdminChrome } from '../AdminChrome';
import { syncPagesAction } from '../actions';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { prisma, withDb } from '@/lib/db';

export default async function AdminPagesPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (!(await isAdminAuthenticated())) redirect('/admin/login');
  const params = await searchParams;

  const pages = await withDb(
    () =>
      prisma.contentPage.findMany({
        select: { id: true, slug: true, locale: true, status: true, title: true },
        orderBy: [{ locale: 'asc' }, { slug: 'asc' }],
      }),
    []
  );

  return (
    <AdminChrome>
      <div className="space-y-lg">
        <div className="flex items-start justify-between gap-md">
          <div>
            <p className="font-label-md text-label-md text-secondary uppercase">Contenido</p>
            <h1 className="font-headline-lg text-headline-lg text-primary">Páginas</h1>
          </div>
          <form action={syncPagesAction}>
            <button type="submit" className="bg-primary text-on-primary px-lg py-sm rounded-lg">
              Sincronizar páginas actuales
            </button>
          </form>
        </div>

        {params.error === 'db' ? (
          <p className="bg-error-container text-on-error-container p-sm rounded">
            No se pudo conectar con la base de datos. En Dokploy configura{' '}
            <code className="font-mono text-sm">DATABASE_URL</code>, crea Postgres en la misma red
            y asegúrate de que las migraciones estén aplicadas.
          </p>
        ) : null}

        {!process.env.DATABASE_URL ? (
          <p className="bg-surface-container-high text-on-surface-variant p-sm rounded">
            <code className="font-mono text-sm">DATABASE_URL</code> no está definida. El sitio
            público funciona, pero el CMS necesita Postgres.
          </p>
        ) : null}

        <div className="border border-outline-variant rounded-xl overflow-hidden bg-surface-container-lowest">
          {pages.length === 0 ? (
            <p className="p-lg text-on-surface-variant">
              No hay páginas en el CMS. Usa la sincronización inicial para crearlas.
            </p>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="p-sm font-label-md text-label-md">Slug</th>
                  <th className="p-sm font-label-md text-label-md">Idioma</th>
                  <th className="p-sm font-label-md text-label-md">Estado</th>
                  <th className="p-sm font-label-md text-label-md">Título</th>
                  <th className="p-sm font-label-md text-label-md">Acción</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page) => (
                  <tr key={page.id} className="border-t border-outline-variant">
                    <td className="p-sm font-mono text-sm">{page.slug}</td>
                    <td className="p-sm">{page.locale}</td>
                    <td className="p-sm">{page.status}</td>
                    <td className="p-sm">{page.title}</td>
                    <td className="p-sm">
                      <Link href={`/admin/pages/${page.id}`} className="text-secondary hover:underline">
                        Editar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </AdminChrome>
  );
}
