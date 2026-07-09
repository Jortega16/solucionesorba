import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/SiteShell';
import { isContentPageSlug, loadPageComponent } from '@/components/pages/registry';
import { PAGE_META, STATIC_SLUGS } from '@/lib/site';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return STATIC_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isContentPageSlug(slug)) return {};
  const meta = PAGE_META[slug];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  if (!isContentPageSlug(slug)) notFound();

  const Page = await loadPageComponent(slug);
  const mainClassName = slug === 'contacto' ? 'pt-32 pb-xl' : 'pt-20';

  return (
    <SiteShell mainClassName={mainClassName}>
      <Page />
    </SiteShell>
  );
}
