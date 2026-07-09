import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';
import type { PublicBlogPost } from '@/lib/cms';
import type { Locale } from '@/lib/i18n';

const PLACEHOLDER_POSTS = [
  {
    title: 'Cómo elegir entre desarrollo web y software a medida',
    category: 'Desarrollo digital',
    date: 'Próximamente',
  },
  {
    title: 'IA en la industria: casos prácticos para pymes',
    category: 'IA y datos',
    date: 'Próximamente',
  },
  {
    title: 'Sistemas ciberfísicos sin complicar tu operación',
    category: 'Ingeniería',
    date: 'Próximamente',
  },
];

export function BlogPage({
  posts = [],
  locale = 'es',
}: {
  posts?: PublicBlogPost[];
  locale?: Locale;
}) {
  const contactHref = locale === 'es' ? '/contacto' : `/${locale}/contacto`;
  const blogPrefix = locale === 'es' ? '/blog' : `/${locale}/blog`;
  const visiblePosts =
    posts.length > 0
      ? posts.map((post) => ({
          title: post.title,
          category: post.category,
          date: post.publishedAt
            ? new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(post.publishedAt)
            : 'Publicado',
          href: `${blogPrefix}/${post.slug}`,
        }))
      : PLACEHOLDER_POSTS.map((post) => ({ ...post, href: undefined }));

  return (
    <>
      <section className="py-xl md:py-32 border-b border-outline-variant bg-surface-container-low">
        <Container>
          <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-sm block">
            Blog
          </span>
          <h1 className="font-display-lg text-display-lg text-primary mb-md leading-tight max-w-3xl">
            Ideas, guías y novedades tecnológicas
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Artículos sobre desarrollo, automatización, inteligencia artificial y transformación
            digital para empresas y equipos técnicos.
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
                Estamos preparando el primer contenido. Mientras tanto,{' '}
                <Link href={contactHref} className="text-secondary hover:underline">
                  cuéntanos qué temas te interesan
                </Link>
                .
              </p>
              <div className="text-center pt-sm">
                <ButtonLink href={contactHref}>Suscribirme a novedades</ButtonLink>
              </div>
            </>
          ) : null}
        </Container>
      </section>
    </>
  );
}
