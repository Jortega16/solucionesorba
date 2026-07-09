import { Container } from '@/components/ui/Container';
import type { PublicContentPage } from '@/lib/cms';

function renderBody(body: string) {
  return body
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

export function CmsContentPage({ page }: { page: PublicContentPage }) {
  return (
    <>
      <section className="py-xl md:py-32 border-b border-outline-variant bg-surface-container-low">
        <Container>
          {page.eyebrow ? (
            <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-sm block">
              {page.eyebrow}
            </span>
          ) : null}
          <h1 className="font-display-lg text-display-lg text-primary mb-md leading-tight max-w-4xl">
            {page.heroTitle}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            {page.heroBody}
          </p>
        </Container>
      </section>

      <section className="py-xl">
        <Container className="max-w-4xl space-y-md">{renderBody(page.body)}</Container>
      </section>
    </>
  );
}
