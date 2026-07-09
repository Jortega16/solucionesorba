import type { BlogPost } from '@prisma/client';
import { LOCALES } from '@/lib/i18n';

type PostFormProps = {
  action: (formData: FormData) => void | Promise<void>;
  post?: BlogPost;
  submitLabel: string;
};

export function PostForm({ action, post, submitLabel }: PostFormProps) {
  return (
    <form action={action} className="space-y-md max-w-4xl">
      {post ? <input type="hidden" name="id" value={post.id} /> : null}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <label className="space-y-xs">
          <span className="font-label-md text-label-md">Idioma</span>
          <select name="locale" defaultValue={post?.locale ?? 'es'} className="w-full border rounded px-sm py-xs">
            {LOCALES.map((locale) => (
              <option key={locale} value={locale}>
                {locale}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-xs">
          <span className="font-label-md text-label-md">Estado</span>
          <select name="status" defaultValue={post?.status ?? 'DRAFT'} className="w-full border rounded px-sm py-xs">
            <option value="DRAFT">Borrador</option>
            <option value="PUBLISHED">Publicado</option>
          </select>
        </label>
      </div>
      <label className="block space-y-xs">
        <span className="font-label-md text-label-md">Título</span>
        <input name="title" defaultValue={post?.title ?? ''} className="w-full border rounded px-sm py-xs" required />
      </label>
      <label className="block space-y-xs">
        <span className="font-label-md text-label-md">Slug</span>
        <input name="slug" defaultValue={post?.slug ?? ''} className="w-full border rounded px-sm py-xs font-mono" />
      </label>
      <label className="block space-y-xs">
        <span className="font-label-md text-label-md">Categoría</span>
        <input name="category" defaultValue={post?.category ?? 'Tecnología'} className="w-full border rounded px-sm py-xs" />
      </label>
      <label className="block space-y-xs">
        <span className="font-label-md text-label-md">Descripción SEO</span>
        <textarea name="description" defaultValue={post?.description ?? ''} className="w-full border rounded px-sm py-xs min-h-24" />
      </label>
      <label className="block space-y-xs">
        <span className="font-label-md text-label-md">Resumen</span>
        <textarea name="excerpt" defaultValue={post?.excerpt ?? ''} className="w-full border rounded px-sm py-xs min-h-24" />
      </label>
      <label className="block space-y-xs">
        <span className="font-label-md text-label-md">Fecha de publicación</span>
        <input
          name="publishedAt"
          type="datetime-local"
          defaultValue={post?.publishedAt ? post.publishedAt.toISOString().slice(0, 16) : ''}
          className="w-full border rounded px-sm py-xs"
        />
      </label>
      <label className="block space-y-xs">
        <span className="font-label-md text-label-md">Contenido</span>
        <textarea
          name="content"
          defaultValue={post?.content ?? ''}
          className="w-full border rounded px-sm py-xs min-h-96 font-mono text-sm"
          required
        />
      </label>
      <button type="submit" className="bg-primary text-on-primary px-lg py-sm rounded-lg">
        {submitLabel}
      </button>
    </form>
  );
}
