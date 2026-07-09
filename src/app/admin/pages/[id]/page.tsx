import { notFound, redirect } from 'next/navigation';
import { AdminChrome } from '../../AdminChrome';
import { updatePageAction } from '../../actions';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { prisma, withDb } from '@/lib/db';
import { LOCALES } from '@/lib/i18n';

export default async function AdminEditPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) redirect('/admin/login');
  const { id } = await params;
  const page = await withDb(() => prisma.contentPage.findUnique({ where: { id } }), null);
  if (!page) notFound();

  return (
    <AdminChrome>
      <form action={updatePageAction} className="space-y-md max-w-4xl">
        <input type="hidden" name="id" value={page.id} />
        <div>
          <p className="font-label-md text-label-md text-secondary uppercase">
            {page.slug} / {page.locale}
          </p>
          <h1 className="font-headline-lg text-headline-lg text-primary">Editar página</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <label className="space-y-xs">
            <span className="font-label-md text-label-md">Idioma</span>
            <select name="locale" defaultValue={page.locale} className="w-full border rounded px-sm py-xs">
              {LOCALES.map((locale) => (
                <option key={locale} value={locale}>
                  {locale}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-xs">
            <span className="font-label-md text-label-md">Estado</span>
            <select name="status" defaultValue={page.status} className="w-full border rounded px-sm py-xs">
              <option value="PUBLISHED">Publicado</option>
              <option value="DRAFT">Borrador</option>
            </select>
          </label>
        </div>
        <label className="block space-y-xs">
          <span className="font-label-md text-label-md">Título SEO</span>
          <input name="title" defaultValue={page.title} className="w-full border rounded px-sm py-xs" />
        </label>
        <label className="block space-y-xs">
          <span className="font-label-md text-label-md">Descripción SEO</span>
          <textarea name="description" defaultValue={page.description} className="w-full border rounded px-sm py-xs min-h-24" />
        </label>
        <label className="block space-y-xs">
          <span className="font-label-md text-label-md">Eyebrow</span>
          <input name="eyebrow" defaultValue={page.eyebrow ?? ''} className="w-full border rounded px-sm py-xs" />
        </label>
        <label className="block space-y-xs">
          <span className="font-label-md text-label-md">Título principal</span>
          <input name="heroTitle" defaultValue={page.heroTitle} className="w-full border rounded px-sm py-xs" />
        </label>
        <label className="block space-y-xs">
          <span className="font-label-md text-label-md">Texto principal</span>
          <textarea name="heroBody" defaultValue={page.heroBody} className="w-full border rounded px-sm py-xs min-h-24" />
        </label>
        <label className="block space-y-xs">
          <span className="font-label-md text-label-md">Contenido</span>
          <textarea name="body" defaultValue={page.body} className="w-full border rounded px-sm py-xs min-h-80 font-mono text-sm" />
        </label>
        <button type="submit" className="bg-primary text-on-primary px-lg py-sm rounded-lg">
          Guardar página
        </button>
      </form>
    </AdminChrome>
  );
}
