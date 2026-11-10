import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/SiteShell';
import { BlogPage } from '@/components/pages/blog';
import { BlogPostPage } from '@/components/pages/blog-post';
import { CmsContentPage } from '@/components/pages/cms-page';
import { HomePage } from '@/components/pages/home';
import { isContentPageSlug, loadPageComponent } from '@/components/pages/registry';
import {
  getPublishedBlogPost,
  getPublishedBlogPosts,
  getPublishedPage,
  hasEditableCmsContent,
} from '@/lib/cms';
import { DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/i18n';
import { PAGE_META } from '@/lib/site';
import { LOCALIZED_PAGE_META } from '@/lib/translations/meta';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ segments: string[] }>;
};

function parseSegments(segments: string[]) {
  const [first, second, third] = segments;
  const locale: Locale = isLocale(first) ? first : DEFAULT_LOCALE;
  const offset = isLocale(first) ? 1 : 0;
  const path = segments.slice(offset);

  return {
    locale,
    slug: path[0] ?? 'inicio',
    postSlug: path[0] === 'blog' ? path[1] : undefined,
    path,
    raw: { first, second, third },
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { segments } = await params;
  const { locale, slug, postSlug, path } = parseSegments(segments);
  const canonical = `/${segments.join('/')}`;

  if (slug === 'blog' && postSlug) {
    const post = await getPublishedBlogPost(postSlug, locale);
    return post ? { title: post.title, description: post.description, alternates: { canonical } } : {};
  }

  const cmsPage = await getPublishedPage(slug, locale);
  if (hasEditableCmsContent(cmsPage)) return { title: cmsPage.title, description: cmsPage.description, alternates: { canonical } };

  const targetSlug = path.length === 0 ? 'inicio' : slug;
  if (targetSlug in LOCALIZED_PAGE_META) {
    const meta = LOCALIZED_PAGE_META[targetSlug as keyof typeof LOCALIZED_PAGE_META]?.[locale] ?? PAGE_META[targetSlug as keyof typeof PAGE_META];
    if (meta) {
      return { title: meta.title, description: meta.description, alternates: { canonical } };
    }
  }

  return {};
}

export default async function DynamicPage({ params }: Props) {
  const { segments } = await params;
  const { locale, slug, postSlug, path } = parseSegments(segments);

  if (path.length === 0) {
    const cmsPage = await getPublishedPage('inicio', locale);
    return (
      <SiteShell>
        {hasEditableCmsContent(cmsPage) ? <CmsContentPage page={cmsPage} /> : <HomePage locale={locale} />}
      </SiteShell>
    );
  }

  if (slug === 'blog') {
    if (postSlug) {
      const post = await getPublishedBlogPost(postSlug, locale);
      if (!post) notFound();
      return (
        <SiteShell>
          <BlogPostPage post={post} locale={locale} />
        </SiteShell>
      );
    }

    const posts = await getPublishedBlogPosts(locale);
    return (
      <SiteShell>
        <BlogPage posts={posts} locale={locale} />
      </SiteShell>
    );
  }

  const cmsPage = await getPublishedPage(slug, locale);
  if (hasEditableCmsContent(cmsPage)) {
    return (
      <SiteShell mainClassName={slug === 'contacto' ? 'pt-32 pb-xl' : 'pt-20'}>
        <CmsContentPage page={cmsPage} />
      </SiteShell>
    );
  }

  if (!isContentPageSlug(slug)) notFound();

  const Page = await loadPageComponent(slug);
  return (
    <SiteShell mainClassName={slug === 'contacto' ? 'pt-32 pb-xl' : 'pt-20'}>
      <Page locale={locale} />
    </SiteShell>
  );
}
