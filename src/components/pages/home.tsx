'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatsRow } from '@/components/ui/StatsRow';
import { IMAGES } from '@/lib/images';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';
import { HOME_TRANSLATIONS } from '@/lib/translations/home';

export function HomePage({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy = HOME_TRANSLATIONS[locale] ?? HOME_TRANSLATIONS.es;

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-surface-container-low">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative z-10">
          <div className="min-w-0 space-y-lg">
            <div className="inline-flex items-center gap-xs bg-secondary-fixed px-sm py-xs rounded-full border border-secondary/15">
              <Icon name="verified" className="text-secondary text-sm" />
              <span className="font-label-md text-label-md text-on-secondary-fixed uppercase">
                {copy.hero.badge}
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg text-primary leading-tight">
              {copy.hero.title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              {copy.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-md pt-md">
              <ButtonLink
                href={withLocale('/contacto', locale)}
                icon="arrow_forward"
                className="px-xl py-md"
              >
                {copy.hero.primaryCta}
              </ButtonLink>
              <ButtonLink
                href={withLocale('/#servicios', locale)}
                variant="outline"
                className="px-xl py-md"
              >
                {copy.hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-lg relative z-20 overflow-hidden">
              <PageImage
                src={IMAGES.homeHero}
                alt={copy.hero.imageAlt}
                className="rounded-lg w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -top-xs -right-xs w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-xl -left-xl w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </Container>
      </section>

      <section id="servicios" className="py-xl bg-white">
        <Container>
          <SectionHeading
            title={copy.capacities.title}
            subtitle={copy.capacities.subtitle}
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 group bg-surface border border-outline-variant rounded-xl p-lg hover:border-secondary transition-all overflow-hidden relative">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <Icon name="terminal" className="text-secondary text-4xl mb-md" />
                  <span className="font-label-md text-secondary uppercase tracking-wider block mb-xs">
                    {copy.capacities.cards.digital.category}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-sm">
                    {copy.capacities.cards.digital.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    {copy.capacities.cards.digital.description}
                  </p>
                </div>
                <div className="mt-xl flex flex-wrap gap-xs">
                  {copy.capacities.cards.digital.features.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-high px-sm py-1 rounded text-label-md font-label-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-md">
                  <Link
                    href={withLocale('/desarrollo-web', locale)}
                    className="inline-flex items-center gap-xs font-label-md text-secondary hover:text-primary transition-colors"
                  >
                    {copy.capacities.cards.digital.cta} <Icon name="arrow_forward" />
                  </Link>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-1/3 opacity-20 group-hover:opacity-40 transition-opacity">
                <PageImage src={IMAGES.homeCode} alt="" className="w-full h-auto" />
              </div>
            </div>

            <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-lg flex flex-col justify-between hover:scale-[1.02] transition-transform">
              <div>
                <Icon name="cloud_done" className="text-on-primary-container text-4xl mb-md" />
                <span className="font-label-md text-secondary-fixed uppercase tracking-wider block mb-xs">
                  {copy.capacities.cards.digital.category}
                </span>
                <h3 className="font-headline-md text-headline-md mb-sm text-white">
                  {locale === 'es'
                    ? 'Software como servicio'
                    : locale === 'en'
                    ? 'Software as a Service'
                    : 'Software como Serviço'}
                </h3>
                <p className="font-body-md text-body-md opacity-80 text-primary-fixed-dim">
                  {locale === 'es'
                    ? 'Diseñamos productos digitales multiempresa, portales internos y herramientas operativas que evolucionan con su organización.'
                    : locale === 'en'
                    ? 'We engineer multi-tenant SaaS products, internal portals, and operational platforms built to scale with your organization.'
                    : 'Projetamos produtos SaaS multitenant, portais internos e plataformas operacionais que evoluem com a sua organização.'}
                </p>
              </div>
              <Link
                href={withLocale('/proyectos', locale)}
                className="inline-flex items-center gap-xs font-label-md text-label-md mt-xl text-white hover:text-secondary-fixed hover:translate-x-2 transition-all"
              >
                {locale === 'es'
                  ? 'Ver casos de éxito'
                  : locale === 'en'
                  ? 'View case studies'
                  : 'Ver casos de sucesso'}{' '}
                <Icon name="chevron_right" />
              </Link>
            </div>

            <div className="md:col-span-5 bg-surface border border-outline-variant rounded-xl p-lg hover:border-secondary transition-all flex flex-col justify-between">
              <div>
                <Icon name="insights" className="text-secondary text-4xl mb-md" />
                <span className="font-label-md text-secondary uppercase tracking-wider block mb-xs">
                  {copy.capacities.cards.ai.category}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-sm">
                  {copy.capacities.cards.ai.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {copy.capacities.cards.ai.description}
                </p>
              </div>
              <Link
                href={withLocale('/inteligencia-artificial', locale)}
                className="mt-lg inline-flex items-center gap-xs font-label-md text-secondary hover:text-primary transition-colors"
              >
                {copy.capacities.cards.ai.cta} <Icon name="arrow_forward" />
              </Link>
            </div>

            <div className="md:col-span-7 bg-surface border border-outline-variant rounded-xl p-lg relative overflow-hidden group hover:border-secondary transition-all flex flex-col justify-between">
              <div className="relative z-10">
                <Icon name="precision_manufacturing" className="text-secondary text-4xl mb-md" />
                <span className="font-label-md text-secondary uppercase tracking-wider block mb-xs">
                  {copy.capacities.cards.cyberphysical.category}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-sm">
                  {copy.capacities.cards.cyberphysical.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                  {copy.capacities.cards.cyberphysical.description}
                </p>
                <Link
                  href={withLocale('/sistemas-ciberfisicos', locale)}
                  className="mt-lg border border-primary px-lg py-xs font-label-md text-label-md rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors inline-block"
                >
                  {copy.capacities.cards.cyberphysical.cta}
                </Link>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-5">
                <Icon name="settings_input_component" className="text-[200px]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsRow stats={copy.stats} />

      <section className="py-xl bg-white">
        <Container>
          <SectionHeading
            title={copy.process.title}
            subtitle={copy.process.subtitle}
            centered
          />
          <div className="grid md:grid-cols-3 gap-gutter">
            {copy.process.steps.map((item) => (
              <article key={item.step} className="border-t-2 border-secondary pt-md">
                <span className="font-label-md text-secondary">{item.step}</span>
                <h3 className="font-headline-md text-primary mt-sm mb-xs">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-xl">
            <ButtonLink
              href={withLocale('/proyectos', locale)}
              variant="outline"
              className="px-xl py-md"
            >
              {locale === 'es'
                ? 'Ver proyectos realizados'
                : locale === 'en'
                ? 'View completed projects'
                : 'Ver projetos realizados'}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
