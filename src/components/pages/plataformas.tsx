'use client';

import { usePathname } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';
import { SERVICES_TRANSLATIONS } from '@/lib/translations/services';

export function PlataformasPage({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy = SERVICES_TRANSLATIONS[locale]?.plataformas ?? SERVICES_TRANSLATIONS.es.plataformas;

  return (
    <>
      <section className="relative bg-surface-container-lowest py-xl overflow-hidden">
        <Container className="grid md:grid-cols-2 gap-xl items-center">
          <div className="z-10">
            <span className="font-label-md text-label-md text-secondary mb-sm block">
              {copy.badge}
            </span>
            <h1 className="font-display-lg text-display-lg text-primary mb-md">
              {copy.title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-lg">
              {copy.description}
            </p>
            <div className="flex gap-sm">
              <ButtonLink href={withLocale('/contacto', locale)} className="px-xl py-sm">
                {copy.primaryCta}
              </ButtonLink>
              <ButtonLink href={withLocale('/proyectos', locale)} variant="outline" className="px-xl py-sm">
                {copy.secondaryCta}
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-square bg-surface-container-high rounded-lg overflow-hidden border border-outline-variant">
            <PageImage
              src={IMAGES.plataformas}
              alt={copy.title}
              className="w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute -bottom-xs -right-xs bg-secondary w-xl h-xl -z-10" />
          </div>
        </Container>
      </section>

      <section className="py-xl bg-background">
        <Container>
          <SectionHeading
            title={copy.sectionTitle}
            subtitle={
              locale === 'es'
                ? 'Arquitectura robusta para desafíos empresariales reales.'
                : locale === 'en'
                ? 'Resilient architecture for real-world enterprise operations.'
                : 'Arquitetura robusta para desafios corporativos reais.'
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {copy.features.map((feature, idx) => {
              const isDark = idx === 1;
              const span = idx === 0 ? 'md:col-span-8' : 'md:col-span-4';
              const iconName = idx === 0 ? 'dashboard' : idx === 1 ? 'group' : 'settings_applications';

              return (
                <div
                  key={feature.title}
                  className={`${span} border border-outline-variant p-md flex flex-col justify-between hover:border-secondary transition-colors ${
                    isDark ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest'
                  }`}
                >
                  <div>
                    <Icon name={iconName} className="mb-sm text-[32px] text-secondary" />
                    <h3 className={`font-headline-md text-headline-md mb-xs ${isDark ? 'text-on-primary' : 'text-primary'}`}>
                      {feature.title}
                    </h3>
                    <p className={`font-body-md mb-md ${isDark ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="md:col-span-4 bg-secondary text-white p-md flex flex-col justify-center text-center">
              <h3 className="font-headline-md text-headline-md mb-xs">
                {locale === 'es' ? 'Integraciones API' : locale === 'en' ? 'API Integrations' : 'Integrações API'}
              </h3>
              <p className="font-label-md text-label-md opacity-90">
                {locale === 'es'
                  ? 'Conecte su ecosistema digital sin fricciones.'
                  : locale === 'en'
                  ? 'Seamlessly integrate your digital ecosystem.'
                  : 'Conecte seu ecossistema digital sem atritos.'}
              </p>
              <div className="mt-md font-label-md flex justify-center gap-xs">
                {['REST', 'GraphQL', 'Webhooks'].map((t) => (
                  <span key={t} className="px-xs py-1 border border-white/30 bg-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
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
