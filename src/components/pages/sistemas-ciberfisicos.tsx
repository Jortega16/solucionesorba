'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatsRow } from '@/components/ui/StatsRow';
import { IMAGES } from '@/lib/images';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';
import { SERVICES_TRANSLATIONS } from '@/lib/translations/services';

export function SistemasCiberfisicosPage({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy =
    SERVICES_TRANSLATIONS[locale]?.sistemasCiberfisicos ??
    SERVICES_TRANSLATIONS.es.sistemasCiberfisicos;

  return (
    <>
      <section className="relative bg-surface-container-low py-xl">
        <Container className="grid md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7">
            <span className="font-label-md text-label-md text-secondary mb-xs block">
              {copy.badge}
            </span>
            <h1 className="font-display-lg text-display-lg text-primary mb-md leading-tight">
              {copy.title}
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-lg max-w-2xl">
              {copy.description}
            </p>
            <div className="flex gap-sm">
              <ButtonLink href={withLocale('/contacto', locale)} className="px-lg py-sm uppercase tracking-wider">
                {copy.primaryCta}
              </ButtonLink>
              <Link
                href={withLocale('/proyectos', locale)}
                className="border border-primary text-primary px-lg py-sm font-label-md font-bold uppercase tracking-wider hover:bg-surface-container-low transition-colors inline-flex items-center"
              >
                {copy.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative aspect-square bg-surface-container-high rounded-lg overflow-hidden border border-outline-variant">
            <PageImage
              src={IMAGES.cpsIndustrial}
              alt="Automatización industrial"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-md left-md bg-primary text-on-primary p-md">
              <p className="font-label-md text-label-md mb-xs">
                {locale === 'es' ? 'ESTADO' : locale === 'en' ? 'STATUS' : 'STATUS'}
              </p>
              <p className="font-headline-md text-headline-md">
                {locale === 'es' ? 'CONECTADO' : locale === 'en' ? 'CONNECTED' : 'CONECTADO'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-xl">
        <Container>
          <SectionHeading
            title={copy.sectionTitle}
            subtitle={
              locale === 'es'
                ? 'Integración total hardware-software.'
                : locale === 'en'
                ? 'Full hardware-software integration.'
                : 'Integração total hardware-software.'
            }
          />
          <div className="grid md:grid-cols-2 gap-gutter">
            <div className="bg-surface border border-outline-variant p-lg rounded-lg hover:border-secondary transition-all">
              <h3 className="font-headline-md text-primary mb-sm">{copy.cards.telemetryTitle}</h3>
              <p className="font-body-md text-on-surface-variant mb-md">{copy.cards.telemetryDesc}</p>
              <div className="flex flex-wrap gap-xs">
                {['Firmware', 'Drivers', 'RTOS'].map((t) => (
                  <span
                    key={t}
                    className="bg-surface-container px-sm py-1 text-xs font-label-md uppercase border border-outline-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-surface border border-outline-variant p-lg rounded-lg hover:border-secondary transition-all">
              <h3 className="font-headline-md text-primary mb-sm">{copy.cards.iotTitle}</h3>
              <p className="font-body-md text-on-surface-variant mb-md">{copy.cards.iotDesc}</p>
              <div className="flex flex-wrap gap-xs">
                {['MQTT', 'HTTP', 'Modbus', 'CAN'].map((t) => (
                  <span
                    key={t}
                    className="bg-surface-container px-sm py-1 text-xs font-label-md uppercase border border-outline-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 bg-surface border border-outline-variant p-lg rounded-lg hover:border-secondary transition-all">
              <h3 className="font-headline-md text-primary mb-sm">{copy.cards.scadaTitle}</h3>
              <p className="font-body-md text-on-surface-variant mb-md">{copy.cards.scadaDesc}</p>
            </div>
          </div>
        </Container>
      </section>

      <StatsRow
        stats={
          locale === 'es'
            ? [
                { value: 'IoT', label: 'Sensores conectados' },
                { value: 'Edge', label: 'Procesamiento local' },
                { value: 'Web', label: 'Supervisión remota' },
                { value: 'API', label: 'Integración de sistemas' },
              ]
            : locale === 'en'
            ? [
                { value: 'IoT', label: 'Connected sensors' },
                { value: 'Edge', label: 'Edge computing' },
                { value: 'Web', label: 'Remote supervision' },
                { value: 'API', label: 'Systems integration' },
              ]
            : [
                { value: 'IoT', label: 'Sensores conectados' },
                { value: 'Edge', label: 'Processamento local' },
                { value: 'Web', label: 'Supervisão remota' },
                { value: 'API', label: 'Integração de sistemas' },
              ]
        }
      />
    </>
  );
}
