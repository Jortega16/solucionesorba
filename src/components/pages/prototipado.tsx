'use client';

import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { ServiceHero } from '@/components/ui/ServiceHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';
import { SERVICES_TRANSLATIONS } from '@/lib/translations/services';

export function PrototipadoPage({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy =
    SERVICES_TRANSLATIONS[locale]?.prototipado ??
    SERVICES_TRANSLATIONS.es.prototipado;

  return (
    <>
      <ServiceHero
        badge={{ icon: 'science', text: copy.badge }}
        title={copy.title}
        description={copy.description}
        image={IMAGES.prototipo}
        imageAlt={copy.badge}
        primaryCta={{ href: withLocale('/contacto', locale), label: copy.primaryCta, icon: 'arrow_forward' }}
        secondaryCta={{ href: withLocale('/proyectos', locale), label: copy.secondaryCta }}
      />

      <section className="py-xl">
        <Container>
          <SectionHeading title={copy.sectionTitle} />
          <div className="grid md:grid-cols-3 gap-gutter">
            {copy.items.map((s) => (
              <div
                key={s.title}
                className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg"
              >
                <h3 className="font-headline-md text-primary mb-sm">{s.title}</h3>
                <p className="font-body-md text-on-surface-variant">{s.text}</p>
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
