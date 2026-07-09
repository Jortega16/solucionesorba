import type { MetadataRoute } from 'next';
import { getPublishedSitemapEntries } from '@/lib/cms';
import { DEFAULT_LOCALE, LOCALES, localizedPath, type Locale } from '@/lib/i18n';
import { PAGE_META } from '@/lib/site';

function siteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');
}

function urlFor(locale: string, path: string) {
  if (locale === DEFAULT_LOCALE) return `${siteUrl()}${path}`;
  const safeLocale = (LOCALES as readonly string[]).includes(locale) ? (locale as Locale) : DEFAULT_LOCALE;
  return `${siteUrl()}${localizedPath(safeLocale, path)}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const cms = await getPublishedSitemapEntries();
  const fallbackPages = Object.values(PAGE_META).flatMap((meta) =>
    LOCALES.map((locale) => ({
      url: urlFor(locale, meta.path),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: meta.path === '/' ? 1 : 0.7,
    }))
  );

  const cmsPages = cms.pages.map((page) => ({
    url: urlFor(page.locale, page.slug === 'inicio' ? '/' : `/${page.slug}`),
    lastModified: page.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: page.slug === 'inicio' ? 1 : 0.8,
  }));

  const blogPosts = cms.posts.map((post) => ({
    url: urlFor(post.locale, `/blog/${post.slug}`),
    lastModified: post.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();
  [...fallbackPages, ...cmsPages, ...blogPosts].forEach((entry) => byUrl.set(entry.url, entry));
  return [...byUrl.values()];
}
