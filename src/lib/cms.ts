import type { BlogPost, ContentPage } from '@prisma/client';
import { prisma, withDb } from './db';
import { DEFAULT_LOCALE, LOCALES, type Locale } from './i18n';
import { PAGE_META, type PageSlug } from './site';

export type PublicBlogPost = Pick<
  BlogPost,
  'id' | 'slug' | 'locale' | 'title' | 'description' | 'category' | 'excerpt' | 'content' | 'publishedAt'
>;

export type PublicContentPage = Pick<
  ContentPage,
  'slug' | 'locale' | 'title' | 'description' | 'eyebrow' | 'heroTitle' | 'heroBody' | 'body'
>;

const INITIAL_PAGE_BODIES = [
  'Contenido inicial migrado desde el sitio actual. Edita este bloque desde el backoffice para reemplazar el contenido visible.',
  'Initial translated content placeholder. Edit this language version from the backoffice.',
];

export function hasEditableCmsContent(page: PublicContentPage | null): page is PublicContentPage {
  if (!page) return false;
  return !INITIAL_PAGE_BODIES.includes(page.body.trim());
}

export async function getPublishedPage(slug: string, locale: Locale = DEFAULT_LOCALE) {
  return withDb(
    () =>
      prisma.contentPage.findFirst({
        where: { slug, locale, status: 'PUBLISHED' },
      }),
    null
  );
}

export async function getPublishedBlogPosts(locale: Locale = DEFAULT_LOCALE) {
  return withDb(
    () =>
      prisma.blogPost.findMany({
        where: { locale, status: 'PUBLISHED' },
        orderBy: [{ publishedAt: 'desc' }, { updatedAt: 'desc' }],
      }),
    []
  );
}

export async function getPublishedBlogPost(slug: string, locale: Locale = DEFAULT_LOCALE) {
  return withDb(
    () =>
      prisma.blogPost.findFirst({
        where: { slug, locale, status: 'PUBLISHED' },
      }),
    null
  );
}

export async function getPublishedSitemapEntries() {
  return withDb(
    async () => {
      const [pages, posts] = await Promise.all([
        prisma.contentPage.findMany({ where: { status: 'PUBLISHED' } }),
        prisma.blogPost.findMany({ where: { status: 'PUBLISHED' } }),
      ]);
      return { pages, posts };
    },
    { pages: [], posts: [] as BlogPost[] }
  );
}

export async function ensureDefaultContentPages() {
  const slugs = Object.entries(PAGE_META).map(([slug, meta]) => ({
    slug: slug === 'inicio' ? 'inicio' : slug,
    title: meta.title,
    description: meta.description,
  }));

  for (const locale of LOCALES) {
    for (const page of slugs) {
      await prisma.contentPage.upsert({
        where: { slug_locale: { slug: page.slug, locale } },
        update: {},
        create: {
          slug: page.slug,
          locale,
          title: page.title,
          description: page.description,
          eyebrow: page.slug === 'inicio' ? 'Soluciones Orba' : page.slug.replace(/-/g, ' '),
          heroTitle: page.title.replace(' | Soluciones Orba', '').replace(' - Soluciones Orba', ''),
          heroBody: page.description,
          body:
            locale === DEFAULT_LOCALE
              ? 'Contenido inicial migrado desde el sitio actual. Edita este bloque desde el backoffice para reemplazar el contenido visible.'
              : 'Initial translated content placeholder. Edit this language version from the backoffice.',
        },
      });
    }
  }
}

export function isKnownPageSlug(slug: string): slug is PageSlug {
  return slug in PAGE_META;
}
