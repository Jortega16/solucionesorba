import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { HomePage } from '@/components/pages/home';
import { PAGE_META } from '@/lib/site';

export const metadata: Metadata = {
  title: PAGE_META.inicio.title,
  description: PAGE_META.inicio.description,
};

export default function Page() {
  return (
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
}
