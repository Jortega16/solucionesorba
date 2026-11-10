'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';
import type { PublicBlogPost } from '@/lib/cms';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';
import { BLOG_TRANSLATIONS } from '@/lib/translations/blog';

export function BlogPage({
  posts = [],
  locale: propLocale,
}: {
  posts?: PublicBlogPost[];
  locale?: Locale;
}) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy = BLOG_TRANSLATIONS[locale] ?? BLOG_TRANSLATIONS.es;
  const contactHref = withLocale('/contacto', locale);
  const blogPrefix = withLocale('/blog', locale);

  const visiblePosts =
    posts.length > 0
      ? posts.map((post) => ({
          title: post.title,
          category: post.category,
          date: post.publishedAt
            ? new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(post.publishedAt)
            : copy.publishedDate,
          href: `${blogPrefix}/${post.slug}`,
        }))
      : copy.placeholderPosts.map((post) => ({
          ...post,
          date: copy.upcomingDate,
          href: undefined,
        }));

  return (
    <>
      <section className="py-xl md:py-32 border-b border-outline-variant bg-surface-container-low">
        <Container>
          <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-sm block">
            {copy.eyebrow}
          </span>
          <h1 className="font-display-lg text-display-lg text-primary mb-md leading-tight max-w-3xl">
            {copy.heroTitle}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            {copy.heroDescription}
          </p>
        </Container>
      </section>

      <section className="py-xl">
        <Container className="space-y-md">
          {visiblePosts.map((post) => (
            <article
              key={post.title}
              className="border border-outline-variant rounded-xl p-lg bg-surface-container-lowest hover:border-secondary transition-colors"
            >
              <span className="font-label-md text-label-md text-secondary uppercase">
                {post.category}
              </span>
              {post.href ? (
                <h2 className="font-headline-md text-headline-md text-primary mt-sm mb-xs">
                  <Link href={post.href} className="hover:text-secondary transition-colors">
                    {post.title}
                  </Link>
                </h2>
              ) : (
                <h2 className="font-headline-md text-headline-md text-primary mt-sm mb-xs">
                  {post.title}
                </h2>
              )}
              <p className="font-caption text-caption text-on-surface-variant">{post.date}</p>
            </article>
          ))}
          {posts.length === 0 ? (
            <>
              <p className="font-body-md text-on-surface-variant text-center pt-md">
                {copy.emptyNoticePrefix}
                <Link href={contactHref} className="text-secondary hover:underline">
                  {copy.emptyNoticeLink}
                </Link>
                .
              </p>
              <div className="text-center pt-sm">
                <ButtonLink href={contactHref}>{copy.subscribeButton}</ButtonLink>
              </div>
            </>
          ) : null}
        </Container>
      </section>
    </>
  );
}
