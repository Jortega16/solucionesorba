import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { CmsContentPage } from '@/components/pages/cms-page';
import { HomePage } from '@/components/pages/home';
import { getPublishedPage, hasEditableCmsContent } from '@/lib/cms';
import { PAGE_META } from '@/lib/site';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: PAGE_META.inicio.title,
  description: PAGE_META.inicio.description,
};

export default async function Page() {
  const page = await getPublishedPage('inicio', 'es');

  return (
    <SiteShell>
      {hasEditableCmsContent(page) ? <CmsContentPage page={page} /> : <HomePage />}
    </SiteShell>
  );
}
