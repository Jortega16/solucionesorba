import { notFound, redirect } from 'next/navigation';
import { AdminChrome } from '../../AdminChrome';
import { deletePostAction, updatePostAction } from '../../actions';
import { PostForm } from '../PostForm';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { prisma, withDb } from '@/lib/db';

export default async function AdminEditPostPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) redirect('/admin/login');
  const { id } = await params;
  const post = await withDb(() => prisma.blogPost.findUnique({ where: { id } }), null);
  if (!post) notFound();

  return (
    <AdminChrome>
      <div className="space-y-md">
        <div className="flex items-start justify-between gap-md">
          <div>
            <p className="font-label-md text-label-md text-secondary uppercase">Blog</p>
            <h1 className="font-headline-lg text-headline-lg text-primary">Editar post</h1>
          </div>
          <form action={deletePostAction}>
            <input type="hidden" name="id" value={post.id} />
            <button type="submit" className="text-error hover:underline">
              Eliminar
            </button>
          </form>
        </div>
        <PostForm action={updatePostAction} post={post} submitLabel="Guardar post" />
      </div>
    </AdminChrome>
  );
}
