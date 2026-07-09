'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createAdminSession, destroyAdminSession, verifyAdminCredentials } from '@/lib/admin-auth';
import { ensureDefaultContentPages } from '@/lib/cms';
import { prisma } from '@/lib/db';
import { slugify } from '@/lib/slug';

function value(formData: FormData, key: string) {
  return String(formData.get(key) ?? '').trim();
}

function nullableDate(value: string) {
  return value ? new Date(value) : null;
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
  await ensureDefaultContentPages();
  revalidatePath('/admin/pages');
  redirect('/admin/pages');
}

export async function updatePageAction(formData: FormData) {
  const id = value(formData, 'id');
  await prisma.contentPage.update({
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
  });

  revalidatePath('/');
  revalidatePath('/admin/pages');
  redirect('/admin/pages');
}

export async function createPostAction(formData: FormData) {
  const title = value(formData, 'title');
  const slug = value(formData, 'slug') || slugify(title);

  const post = await prisma.blogPost.create({
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
  });

  revalidatePath('/blog');
  redirect(`/admin/blog/${post.id}`);
}

export async function updatePostAction(formData: FormData) {
  const id = value(formData, 'id');
  const title = value(formData, 'title');
  const slug = value(formData, 'slug') || slugify(title);

  await prisma.blogPost.update({
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
  });

  revalidatePath('/blog');
  redirect('/admin/blog');
}

export async function deletePostAction(formData: FormData) {
  await prisma.blogPost.delete({ where: { id: value(formData, 'id') } });
  revalidatePath('/blog');
  redirect('/admin/blog');
}
