'use client';

import { usePathname } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { ServiceHero } from '@/components/ui/ServiceHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';
import { SERVICES_TRANSLATIONS } from '@/lib/translations/services';

export function PluginsWordpressPage({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy =
    SERVICES_TRANSLATIONS[locale]?.pluginsWordpress ??
    SERVICES_TRANSLATIONS.es.pluginsWordpress;

  return (
    <>
      <ServiceHero
        badge={{ icon: 'settings_ethernet', text: copy.badge }}
        title={copy.title}
        description={copy.description}
        image={IMAGES.wordpress}
        imageAlt={copy.badge}
        primaryCta={{ href: withLocale('/contacto', locale), label: copy.primaryCta, icon: 'arrow_forward' }}
      />

      <section className="py-xl">
        <Container>
          <SectionHeading title={copy.sectionTitle} />
          <div className="grid md:grid-cols-2 gap-gutter">
            {copy.items.map((item) => (
              <div key={item.title} className="border border-outline-variant p-lg bg-white rounded-lg">
                <Icon name="check_circle" className="text-secondary mb-sm" />
                <h3 className="font-headline-md text-primary">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant mt-sm">
                  {item.desc}
                </p>
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
