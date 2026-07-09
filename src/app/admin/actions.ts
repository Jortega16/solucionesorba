'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createAdminSession, destroyAdminSession, verifyAdminCredentials } from '@/lib/admin-auth';
import { ensureDefaultContentPages } from '@/lib/cms';
import { prisma, runDb } from '@/lib/db';
import { slugify } from '@/lib/slug';

function value(formData: FormData, key: string) {
  return String(formData.get(key) ?? '').trim();
}

function nullableDate(value: string) {
  return value ? new Date(value) : null;
}

function redirectWithDbError(path: string) {
  redirect(`${path}?error=db`);
}

export async function loginAction(formData: FormData) {
  const email = value(formData, 'email');
  const password = value(formData, 'password');

  if (!verifyAdminCredentials(email, password)) {
    redirect('/admin/login?error=1');
  }

  await createAdminSession(email);
  redirect('/admin');
}

export async function logoutAction() {
  await destroyAdminSession();
  redirect('/admin/login');
}

export async function syncPagesAction() {
  try {
    await runDb(() => ensureDefaultContentPages());
    revalidatePath('/admin/pages');
    redirect('/admin/pages');
  } catch (error) {
    console.error('syncPagesAction failed:', error);
    redirectWithDbError('/admin/pages');
  }
}

export async function updatePageAction(formData: FormData) {
  const id = value(formData, 'id');

  try {
    await runDb(() =>
      prisma.contentPage.update({
        where: { id },
        data: {
          locale: value(formData, 'locale'),
          status: value(formData, 'status') === 'DRAFT' ? 'DRAFT' : 'PUBLISHED',
          title: value(formData, 'title'),
          description: value(formData, 'description'),
          eyebrow: value(formData, 'eyebrow') || null,
          heroTitle: value(formData, 'heroTitle'),
          heroBody: value(formData, 'heroBody'),
          body: value(formData, 'body'),
        },
      })
    );
  } catch (error) {
    console.error('updatePageAction failed:', error);
    redirectWithDbError(`/admin/pages/${id}`);
  }

  revalidatePath('/');
  revalidatePath('/admin/pages');
  redirect('/admin/pages');
}

export async function createPostAction(formData: FormData) {
  const title = value(formData, 'title');
  const slug = value(formData, 'slug') || slugify(title);

  try {
    const post = await runDb(() =>
      prisma.blogPost.create({
        data: {
          locale: value(formData, 'locale'),
          status: value(formData, 'status') === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT',
          title,
          slug,
          description: value(formData, 'description'),
          category: value(formData, 'category'),
          excerpt: value(formData, 'excerpt'),
          content: value(formData, 'content'),
          publishedAt: nullableDate(value(formData, 'publishedAt')) ?? new Date(),
        },
      })
    );

    revalidatePath('/blog');
    redirect(`/admin/blog/${post.id}`);
  } catch (error) {
    console.error('createPostAction failed:', error);
    redirectWithDbError('/admin/blog/new');
  }
}

export async function updatePostAction(formData: FormData) {
  const id = value(formData, 'id');
  const title = value(formData, 'title');
  const slug = value(formData, 'slug') || slugify(title);

  try {
    await runDb(() =>
      prisma.blogPost.update({
        where: { id },
        data: {
          locale: value(formData, 'locale'),
          status: value(formData, 'status') === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT',
          title,
          slug,
          description: value(formData, 'description'),
          category: value(formData, 'category'),
          excerpt: value(formData, 'excerpt'),
          content: value(formData, 'content'),
          publishedAt: nullableDate(value(formData, 'publishedAt')),
        },
      })
    );
  } catch (error) {
    console.error('updatePostAction failed:', error);
    redirectWithDbError(`/admin/blog/${id}`);
  }

  revalidatePath('/blog');
  redirect('/admin/blog');
}

export async function deletePostAction(formData: FormData) {
  const id = value(formData, 'id');

  try {
    await runDb(() => prisma.blogPost.delete({ where: { id } }));
  } catch (error) {
    console.error('deletePostAction failed:', error);
    redirectWithDbError('/admin/blog');
  }

  revalidatePath('/blog');
  redirect('/admin/blog');
}
