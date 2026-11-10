'use client';

import { usePathname } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';
import { SERVICES_TRANSLATIONS } from '@/lib/translations/services';

export function HostingPage({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy = SERVICES_TRANSLATIONS[locale]?.hosting ?? SERVICES_TRANSLATIONS.es.hosting;

  const icons = ['dns', 'settings', 'lock', 'support_agent'];

  return (
    <>
      <section className="py-xl bg-surface-container-low">
        <Container className="grid lg:grid-cols-2 gap-xl items-center">
          <div>
            <span className="font-label-md text-secondary uppercase tracking-widest block mb-base">
              {copy.badge}
            </span>
            <h1 className="font-display-lg text-display-lg text-primary mb-sm">
              {copy.title}
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-lg">
              {copy.description}
            </p>
          </div>
          <PageImage
            src={IMAGES.hosting}
            alt={copy.title}
            className="w-full aspect-video object-cover rounded-lg border border-outline-variant"
          />
        </Container>
      </section>

      <section className="py-xl">
        <Container>
          <SectionHeading title={copy.sectionTitle} />
          <div className="grid md:grid-cols-2 gap-gutter">
            {copy.features.map((s, idx) => (
              <div key={s.title} className="border border-outline-variant p-lg rounded-lg bg-white">
                <Icon name={icons[idx] ?? 'dns'} className="text-secondary mb-sm" />
                <h3 className="font-headline-md text-primary mb-xs">{s.title}</h3>
                <p className="font-body-md text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title={copy.ctaTitle}
        description={copy.ctaDesc}
        action={{ href: withLocale('/contacto', locale), label: copy.ctaButton }}
      />
    </>
  );
}
