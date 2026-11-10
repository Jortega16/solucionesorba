'use client';

import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { ServiceHero } from '@/components/ui/ServiceHero';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';
import { SERVICES_TRANSLATIONS } from '@/lib/translations/services';

export function ControlAutomatizacionPage({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy =
    SERVICES_TRANSLATIONS[locale]?.controlAutomatizacion ??
    SERVICES_TRANSLATIONS.es.controlAutomatizacion;

  return (
    <>
      <ServiceHero
        title={copy.title}
        description={copy.description}
        image={IMAGES.control}
        imageAlt="Panel de control industrial"
        primaryCta={{ href: withLocale('/contacto', locale), label: copy.primaryCta, icon: 'arrow_forward' }}
        className="py-xl bg-surface-container-lowest"
        imageClassName="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
      />

      <section className="py-xl">
        <Container>
          <div className="grid md:grid-cols-2 gap-gutter">
            {copy.items.map((title) => (
              <div
                key={title}
                className="border border-outline-variant p-lg rounded-lg bg-white hover:border-secondary transition-all"
              >
                <h3 className="font-headline-md text-primary mb-sm">{title}</h3>
                <p className="font-body-md text-on-surface-variant">
                  {locale === 'es'
                    ? 'Soluciones robustas diseñadas para entornos de manufactura y operación continua.'
                    : locale === 'en'
                    ? 'Resilient systems engineered for 24/7 manufacturing plants and continuous operations.'
                    : 'Soluções robustas projetadas para ambientes de manufatura e operação contínua.'}
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
