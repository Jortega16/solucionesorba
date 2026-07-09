import Link from 'next/link';
import { redirect } from 'next/navigation';
import { AdminChrome } from '../AdminChrome';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { prisma, withDb } from '@/lib/db';

export default async function AdminBlogPage() {
  if (!(await isAdminAuthenticated())) redirect('/admin/login');
  const posts = await withDb(
    () => prisma.blogPost.findMany({ orderBy: [{ updatedAt: 'desc' }] }),
    []
  );

  return (
    <AdminChrome>
      <div className="space-y-lg">
        <div className="flex items-start justify-between gap-md">
          <div>
            <p className="font-label-md text-label-md text-secondary uppercase">Contenido</p>
            <h1 className="font-headline-lg text-headline-lg text-primary">Blog</h1>
          </div>
          <Link href="/admin/blog/new" className="bg-primary text-on-primary px-lg py-sm rounded-lg">
            Nuevo post
          </Link>
        </div>
        <div className="border border-outline-variant rounded-xl overflow-hidden bg-surface-container-lowest">
          {posts.length === 0 ? (
            <p className="p-lg text-on-surface-variant">No hay posts todavía.</p>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="p-sm font-label-md text-label-md">Título</th>
                  <th className="p-sm font-label-md text-label-md">Idioma</th>
                  <th className="p-sm font-label-md text-label-md">Estado</th>
                  <th className="p-sm font-label-md text-label-md">Slug</th>
                  <th className="p-sm font-label-md text-label-md">Acción</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-t border-outline-variant">
                    <td className="p-sm">{post.title}</td>
                    <td className="p-sm">{post.locale}</td>
                    <td className="p-sm">{post.status}</td>
                    <td className="p-sm font-mono text-sm">{post.slug}</td>
                    <td className="p-sm">
                      <Link href={`/admin/blog/${post.id}`} className="text-secondary hover:underline">
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
