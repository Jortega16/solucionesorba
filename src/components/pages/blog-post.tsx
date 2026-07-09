import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import type { PublicBlogPost } from '@/lib/cms';
import type { Locale } from '@/lib/i18n';

function renderContent(content: string) {
  return content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith('## ')) {
        return (
          <h2 key={block} className="font-headline-lg text-headline-lg text-primary pt-md">
            {block.replace(/^## /, '')}
          </h2>
        );
      }

      return (
        <p key={block} className="font-body-lg text-body-lg text-on-surface-variant">
          {block}
        </p>
      );
    });
}

export function BlogPostPage({ post, locale }: { post: PublicBlogPost; locale: Locale }) {
  const blogHref = locale === 'es' ? '/blog' : `/${locale}/blog`;

  return (
    <>
      <section className="py-xl md:py-32 border-b border-outline-variant bg-surface-container-low">
        <Container>
          <Link href={blogHref} className="font-label-md text-label-md text-secondary hover:underline">
            Blog
          </Link>
          <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mt-md mb-sm block">
            {post.category}
          </span>
          <h1 className="font-display-lg text-display-lg text-primary mb-md leading-tight max-w-4xl">
            {post.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            {post.excerpt}
          </p>
        </Container>
      </section>

      <article className="py-xl">
        <Container className="max-w-4xl space-y-md">{renderContent(post.content)}</Container>
      </article>
    </>
  );
}
