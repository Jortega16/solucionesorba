import Link from 'next/link';
import { redirect } from 'next/navigation';
import { AdminChrome } from './AdminChrome';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { prisma, withDb } from '@/lib/db';

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) redirect('/admin/login');

  const stats = await withDb(
    async () => ({
      pages: await prisma.contentPage.count(),
      posts: await prisma.blogPost.count(),
      publishedPosts: await prisma.blogPost.count({ where: { status: 'PUBLISHED' } }),
    }),
    { pages: 0, posts: 0, publishedPosts: 0 }
  );

  return (
    <AdminChrome>
      <div className="space-y-lg">
        <div>
          <p className="font-label-md text-label-md text-secondary uppercase">CMS propio</p>
          <h1 className="font-display-lg text-display-lg text-primary">Panel de contenido</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <div className="border border-outline-variant rounded-xl p-lg bg-surface-container-lowest">
            <p className="font-label-md text-label-md text-on-surface-variant">Páginas</p>
            <strong className="font-display-lg text-display-lg">{stats.pages}</strong>
          </div>
          <div className="border border-outline-variant rounded-xl p-lg bg-surface-container-lowest">
            <p className="font-label-md text-label-md text-on-surface-variant">Posts</p>
            <strong className="font-display-lg text-display-lg">{stats.posts}</strong>
          </div>
          <div className="border border-outline-variant rounded-xl p-lg bg-surface-container-lowest">
            <p className="font-label-md text-label-md text-on-surface-variant">Publicados</p>
            <strong className="font-display-lg text-display-lg">{stats.publishedPosts}</strong>
          </div>
        </div>
        <div className="flex gap-sm">
          <Link href="/admin/pages" className="bg-primary text-on-primary px-lg py-sm rounded-lg">
            Editar páginas
          </Link>
          <Link href="/admin/blog/new" className="bg-secondary text-on-secondary px-lg py-sm rounded-lg">
            Nuevo post
          </Link>
        </div>
      </div>
    </AdminChrome>
  );
}
