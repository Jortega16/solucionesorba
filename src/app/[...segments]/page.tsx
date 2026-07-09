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
  const { locale, slug, postSlug } = parseSegments(segments);

  if (slug === 'blog' && postSlug) {
    const post = await getPublishedBlogPost(postSlug, locale);
    return post ? { title: post.title, description: post.description } : {};
  }

  const cmsPage = await getPublishedPage(slug, locale);
  if (cmsPage) return { title: cmsPage.title, description: cmsPage.description };

  if (isContentPageSlug(slug)) {
    const meta = PAGE_META[slug];
    return { title: meta.title, description: meta.description };
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
        {hasEditableCmsContent(cmsPage) ? <CmsContentPage page={cmsPage} /> : <HomePage />}
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
      <Page />
    </SiteShell>
  );
}
