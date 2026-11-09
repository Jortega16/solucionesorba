'use client';

import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';
import { SERVICES_TRANSLATIONS } from '@/lib/translations/services';

export function SoportePage({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy = SERVICES_TRANSLATIONS[locale]?.soporte ?? SERVICES_TRANSLATIONS.es.soporte;

  return (
    <>
      <section className="relative py-xl bg-surface-container-low overflow-hidden">
        <Container className="grid lg:grid-cols-2 gap-xl items-center">
          <div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-md">
              {copy.title}
            </h1>
            <p className="font-body-lg text-on-surface-variant">
              {copy.description}
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden border border-outline-variant">
            <PageImage
              src={IMAGES.soporte}
              alt={copy.title}
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
        </Container>
      </section>

      <section className="py-xl">
        <Container>
          <SectionHeading title={copy.sectionTitle} />
          <div className="grid md:grid-cols-2 gap-gutter">
            {copy.features.map((item) => (
              <div key={item.title} className="bg-white border border-outline-variant p-lg rounded-lg">
                <h3 className="font-headline-md text-primary mb-sm">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant">{item.desc}</p>
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
