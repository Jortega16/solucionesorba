'use client';

import { usePathname } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatsRow } from '@/components/ui/StatsRow';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';
import { SERVICES_TRANSLATIONS } from '@/lib/translations/services';

export function InteligenciaArtificialPage({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy =
    SERVICES_TRANSLATIONS[locale]?.inteligenciaArtificial ??
    SERVICES_TRANSLATIONS.es.inteligenciaArtificial;

  return (
    <>
      <section className="relative min-h-[716px] flex items-center overflow-hidden bg-surface-container-lowest">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center py-xl relative z-10">
          <div className="space-y-lg">
            <div className="inline-flex items-center gap-xs bg-secondary-container px-sm py-xs rounded-full">
              <Icon name="neurology" className="text-on-secondary-container text-sm" />
              <span className="font-label-md text-label-md text-on-secondary-container">
                {copy.badge}
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg text-primary max-w-xl">
              {copy.title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              {copy.description}
            </p>
            <div className="flex flex-wrap gap-sm pt-md">
              <ButtonLink href={withLocale('/contacto', locale)} className="px-xl py-md">
                {copy.primaryCta}
              </ButtonLink>
              <ButtonLink href={withLocale('/proyectos', locale)} variant="outline" className="px-xl py-md">
                {copy.secondaryCta}
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-square bg-white border border-outline-variant rounded-xl p-md shadow-sm overflow-hidden group">
            <PageImage
              src={IMAGES.iaHero}
              alt="Red neuronal"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </Container>
      </section>

      <section className="py-xl bg-surface">
        <Container>
          <SectionHeading title={copy.sectionTitle} accent centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="md:col-span-2 border border-outline-variant bg-white p-lg hover:border-secondary hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row gap-lg">
                <div className="flex-1 space-y-md">
                  <Icon name="robot_2" className="text-secondary text-[40px]" />
                  <h3 className="font-headline-md text-headline-md text-primary">
                    {copy.cards.agentsTitle}
                  </h3>
                  <p className="font-body-md text-on-surface-variant">
                    {copy.cards.agentsDesc}
                  </p>
                </div>
                <PageImage
                  src={IMAGES.iaAgents}
                  alt={copy.cards.agentsTitle}
                  className="w-full h-48 object-cover rounded shadow-inner"
                />
              </div>
            </div>
            <div className="border border-outline-variant bg-white p-lg hover:border-secondary hover:shadow-md transition-all">
              <Icon name="chat_bubble_outline" className="text-secondary text-[40px] mb-md" />
              <h3 className="font-headline-md text-headline-md text-primary mb-sm">
                {copy.cards.chatbotsTitle}
              </h3>
              <p className="font-body-md text-on-surface-variant">{copy.cards.chatbotsDesc}</p>
            </div>
            <div className="border border-outline-variant bg-white p-lg hover:border-secondary hover:shadow-md transition-all">
              <Icon name="description" className="text-secondary text-[40px] mb-md" />
              <h3 className="font-headline-md text-headline-md text-primary mb-sm">
                {copy.cards.nlpTitle}
              </h3>
              <p className="font-body-md text-on-surface-variant">{copy.cards.nlpDesc}</p>
            </div>
            <div className="md:col-span-2 border border-outline-variant bg-white p-lg hover:border-secondary hover:shadow-md transition-all">
              <Icon name="sync_alt" className="text-secondary text-[40px] mb-md" />
              <h3 className="font-headline-md text-headline-md text-primary mb-sm">
                {copy.cards.integrationTitle}
              </h3>
              <p className="font-body-md text-on-surface-variant">{copy.cards.integrationDesc}</p>
            </div>
          </div>
        </Container>
      </section>

      <StatsRow
        className="py-xl bg-surface-container-lowest"
        stats={
          locale === 'es'
            ? [
                { value: 'Datos', label: 'Documentos y bases de datos' },
                { value: 'Agentes', label: 'Ejecución de flujos' },
                { value: 'APIs', label: 'Integración empresarial' },
                { value: 'Seguro', label: 'Controles según el proyecto' },
              ]
            : locale === 'en'
            ? [
                { value: 'Data', label: 'Documents and enterprise databases' },
                { value: 'Agents', label: 'Autonomous multi-step execution' },
                { value: 'APIs', label: 'Seamless enterprise integration' },
                { value: 'Secure', label: 'Audited role-based governance' },
              ]
            : [
                { value: 'Dados', label: 'Documentos e bancos de dados' },
                { value: 'Agentes', label: 'Execução autônoma de fluxos' },
                { value: 'APIs', label: 'Integração corporativa' },
                { value: 'Seguro', label: 'Governança e controle de acesso' },
              ]
        }
      />

      <CtaBanner
        dark
        title={copy.ctaTitle}
        description={copy.ctaDesc}
        action={{ href: withLocale('/contacto', locale), label: copy.ctaButton }}
      />
    </>
  );
}
