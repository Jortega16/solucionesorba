import { redirect } from 'next/navigation';
import { AdminChrome } from '../../AdminChrome';
import { createPostAction } from '../../actions';
import { PostForm } from '../PostForm';
import { isAdminAuthenticated } from '@/lib/admin-auth';

export default async function AdminNewPostPage() {
  if (!(await isAdminAuthenticated())) redirect('/admin/login');

  return (
    <AdminChrome>
      <div className="space-y-md">
        <div>
          <p className="font-label-md text-label-md text-secondary uppercase">Blog</p>
          <h1 className="font-headline-lg text-headline-lg text-primary">Nuevo post</h1>
        </div>
        <PostForm action={createPostAction} submitLabel="Crear post" />
      </div>
    </AdminChrome>
  );
}
