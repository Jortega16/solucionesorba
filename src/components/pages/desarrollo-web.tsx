'use client';

import { usePathname } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { ServiceHero } from '@/components/ui/ServiceHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageImage } from '@/components/ui/PageImage';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';
import { SERVICES_TRANSLATIONS } from '@/lib/translations/services';

export function DesarrolloWebPage({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy = SERVICES_TRANSLATIONS[locale]?.desarrolloWeb ?? SERVICES_TRANSLATIONS.es.desarrolloWeb;

  return (
    <>
      <ServiceHero
        badge={{ icon: 'web', text: copy.badge }}
        title={
          <>
            {copy.title} <span className="text-secondary">{copy.titleAccent}</span>
          </>
        }
        description={copy.description}
        image={IMAGES.desarrolloWeb}
        imageAlt="Desarrollo web moderno"
        primaryCta={{ href: withLocale('/contacto', locale), label: copy.primaryCta, icon: 'arrow_forward' }}
        secondaryCta={{ href: withLocale('/proyectos', locale), label: copy.secondaryCta }}
      />

      <section className="py-xl">
        <Container>
          <SectionHeading title={copy.solutionsTitle} accent />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-lg rounded-lg hover:border-secondary transition-all group">
              <Icon name="business" className="text-secondary text-[40px] mb-sm" />
              <h3 className="font-headline-md text-headline-md mb-xs">{copy.cards.corporateTitle}</h3>
              <p className="text-on-surface-variant font-body-md mb-md">
                {copy.cards.corporateDesc}
              </p>
              <ul className="grid grid-cols-2 gap-xs font-label-md text-label-md text-on-surface-variant">
                {copy.cards.corporateBullets.map((item) => (
                  <li key={item} className="flex items-center gap-xs">
                    <Icon name="check_circle" className="text-secondary text-[16px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4 bg-primary text-on-primary p-lg rounded-lg flex flex-col justify-center text-center">
              <Icon name="ads_click" className="text-[48px] mb-md text-secondary-fixed" />
              <h3 className="font-headline-md text-headline-md mb-xs">{copy.cards.landingTitle}</h3>
              <p className="font-body-md text-on-primary-container mb-md opacity-90">
                {copy.cards.landingDesc}
              </p>
            </div>
            <div className="md:col-span-4 bg-surface-container-high border border-outline-variant p-lg rounded-lg hover:shadow-md transition-all">
              <Icon name="shopping_cart" className="text-primary text-[32px] mb-sm" />
              <h3 className="font-headline-md text-headline-md mb-xs">{copy.cards.ecommerceTitle}</h3>
              <p className="text-on-surface-variant font-body-md">
                {copy.cards.ecommerceDesc}
              </p>
            </div>
            <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-lg rounded-lg overflow-hidden relative group">
              <div className="relative z-10 flex flex-col md:flex-row gap-lg items-center">
                <div className="flex-1">
                  <h3 className="font-headline-md text-headline-md mb-xs">
                    {copy.cards.responsiveTitle}
                  </h3>
                  <p className="text-on-surface-variant font-body-md mb-md">
                    {copy.cards.responsiveDesc}
                  </p>
                  <div className="flex gap-sm">
                    <Icon name="smartphone" className="text-secondary" />
                    <Icon name="tablet" className="text-secondary" />
                    <Icon name="laptop" className="text-secondary" />
                  </div>
                </div>
                <div className="flex-1 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <PageImage
                    src={IMAGES.desarrolloResponsive}
                    alt="Diseño responsivo"
                    className="rounded shadow-lg w-full h-32 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        className="bg-surface-container-lowest border-y border-outline-variant py-xl"
        title={copy.ctaTitle}
        description={copy.ctaDesc}
        action={{ href: withLocale('/contacto', locale), label: copy.ctaButton }}
      />
    </>
  );
}
