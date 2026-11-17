'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';
import type { PublicBlogPost } from '@/lib/cms';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';
import { BLOG_TRANSLATIONS } from '@/lib/translations/blog';
import { extractCoverImage } from '@/lib/blog-renderer';

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const visiblePosts =
    posts.length > 0
      ? posts.map((post) => {
          const { coverUrl } = extractCoverImage(post.content);
          return {
            title: post.title,
            category: post.category,
            excerpt: post.excerpt,
            coverUrl,
            date: post.publishedAt
              ? new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(new Date(post.publishedAt))
              : copy.publishedDate,
            href: `${blogPrefix}/${post.slug}`,
          };
        })
      : copy.placeholderPosts.map((post) => ({
          ...post,
          excerpt: '',
          coverUrl: null,
          date: copy.upcomingDate,
          href: undefined,
        }));

  const categoryKey = (category: string) => category.trim().toLocaleLowerCase(locale);
  const categories = Array.from(new Set(visiblePosts.map((post) => categoryKey(post.category))))
    .map((key) => ({
      key,
      label: visiblePosts.find((post) => categoryKey(post.category) === key)!.category.trim(),
      count: visiblePosts.filter((post) => categoryKey(post.category) === key).length,
    }));
  const activeCategory = categories.some((category) => category.key === selectedCategory)
    ? selectedCategory
    : null;
  const filteredPosts = activeCategory === null
    ? visiblePosts
    : visiblePosts.filter((post) => categoryKey(post.category) === activeCategory);

  return (
    <>
      <section className="py-xl md:py-28 border-b border-outline-variant bg-surface-container-low">
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
        <Container>
          <div role="group" aria-label={copy.filterByTopic} className="flex flex-wrap gap-3 mb-6">
            {[{ key: null, label: copy.allTopics, count: visiblePosts.length }, ...categories].map((category) => (
              <button
                key={category.key ?? 'all-topics'}
                type="button"
                aria-pressed={activeCategory === category.key}
                aria-controls="blog-articles"
                onClick={() => setSelectedCategory(category.key)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary ${
                  activeCategory === category.key
                    ? 'border-secondary bg-secondary text-white'
                    : 'border-outline-variant bg-surface-container-lowest text-primary hover:border-secondary hover:text-secondary'
                }`}
              >
                {category.label}
                <span className="text-xs opacity-80">({category.count})</span>
              </button>
            ))}
          </div>
          <p role="status" aria-live="polite" aria-atomic="true" className="mb-6 text-sm text-on-surface-variant">
            {filteredPosts.length} {filteredPosts.length === 1 ? copy.articleSingular : copy.articlePlural}
          </p>
          <div id="blog-articles" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-outline-variant/80 bg-surface-container-lowest hover:border-secondary hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {post.coverUrl ? (
                    <div className="aspect-video w-full overflow-hidden bg-surface-container">
                      <img
                        src={post.coverUrl}
                        alt={post.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video w-full flex items-center justify-center bg-gradient-to-br from-surface-container-low to-surface-container border-b border-outline-variant/40">
                      <span className="font-semibold text-xs tracking-widest uppercase text-secondary/60">
                        {post.category}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <span className="inline-block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                      {post.category}
                    </span>

                    {post.href ? (
                      <h2 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                        <Link href={post.href}>{post.title}</Link>
                      </h2>
                    ) : (
                      <h2 className="text-xl font-bold text-primary mb-3 leading-snug">{post.title}</h2>
                    )}

                    {post.excerpt && (
                      <p className="text-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 border-t border-outline-variant/30 flex items-center justify-between text-xs text-on-surface-variant/80">
                  <span>{post.date}</span>
                  {post.href && (
                    <Link
                      href={post.href}
                      className="text-secondary font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      {copy.readArticle} →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 ? (
            <div className="mt-12 text-center">
              <p className="font-body-md text-on-surface-variant pt-md">
                {copy.emptyNoticePrefix}
                <Link href={contactHref} className="text-secondary hover:underline">
                  {copy.emptyNoticeLink}
                </Link>
                .
              </p>
              <div className="pt-sm">
                <ButtonLink href={contactHref}>{copy.subscribeButton}</ButtonLink>
              </div>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
