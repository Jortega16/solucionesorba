import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import type { PublicBlogPost } from '@/lib/cms';
import { withLocale, type Locale } from '@/lib/i18n';
import { BLOG_TRANSLATIONS } from '@/lib/translations/blog';
import { BlogContentRenderer, extractCoverImage, estimateReadTime } from '@/lib/blog-renderer';

export function BlogPostPage({ post, locale }: { post: PublicBlogPost; locale: Locale }) {
  const blogHref = withLocale('/blog', locale);
  const contactHref = withLocale('/contacto', locale);
  const copy = BLOG_TRANSLATIONS[locale] ?? BLOG_TRANSLATIONS.es;

  const { coverUrl, coverAlt, remainingContent } = extractCoverImage(post.content);
  const readTime = estimateReadTime(post.content);
  const formattedDate = post.publishedAt
    ? new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(post.publishedAt))
    : copy.publishedDate;

  return (
    <>
      <section className="py-xl md:py-24 border-b border-outline-variant/60 bg-surface-container-low">
        <Container className="max-w-4xl">
          <Link
            href={blogHref}
            className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:underline transition-all mb-6"
          >
            {copy.backToBlog}
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold tracking-wider text-secondary uppercase border border-secondary/20">
              {post.category}
            </span>
            <span className="text-xs text-on-surface-variant font-medium">
              • {formattedDate}
            </span>
            <span className="text-xs text-on-surface-variant font-medium">
              • {readTime} min de lectura
            </span>
          </div>

          <h1 className="font-display-lg text-3xl md:text-5xl font-extrabold text-primary mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl border-l-2 border-secondary/50 pl-4 py-1">
              {post.excerpt}
            </p>
          )}
        </Container>
      </section>

      {coverUrl && (
        <div className="w-[92%] lg:w-[80%] max-w-4xl mx-auto -mt-8 md:-mt-12 mb-8 overflow-hidden rounded-3xl border border-outline-variant/80 shadow-xl bg-surface-container-low">
          <img
            src={coverUrl}
            alt={coverAlt || post.title}
            className="w-full max-h-[500px] object-cover"
          />
          {coverAlt && (
            <p className="py-2 px-4 text-center text-xs text-on-surface-variant italic bg-surface-container-lowest border-t border-outline-variant/30">
              {coverAlt}
            </p>
          )}
        </div>
      )}

      <article className="py-12 md:py-16">
        <div className="w-[92%] lg:w-[80%] max-w-3xl mx-auto">
          <BlogContentRenderer content={remainingContent} />

          {/* Tarjeta de Contacto / Conversación al final del artículo */}
          <div className="mt-16 rounded-3xl border border-outline-variant/80 bg-surface-container-low p-8 md:p-10 shadow-sm space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary block">
              Soluciones Orba · Consultoría e Ingeniería
            </span>
            <h3 className="text-2xl font-bold text-primary">
              ¿Tiene un proceso o desafío tecnológico en su empresa?
            </h3>
            <p className="text-base text-on-surface-variant leading-relaxed">
              En Soluciones Orba le ayudamos a conectar dispositivos, automatizar flujos y desarrollar software a la medida de su operación.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={contactHref}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-on-primary hover:opacity-90 transition-opacity"
              >
                Conversar con un especialista
              </Link>
              <Link
                href={blogHref}
                className="inline-flex items-center justify-center rounded-xl border border-outline-variant px-5 py-3 text-sm font-medium text-primary hover:bg-surface-container-lowest transition-colors"
              >
                Ver más artículos
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
