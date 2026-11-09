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

export function CienciaDeDatosPage({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy =
    SERVICES_TRANSLATIONS[locale]?.cienciaDeDatos ??
    SERVICES_TRANSLATIONS.es.cienciaDeDatos;

  return (
    <>
      <ServiceHero
        badge={{ icon: 'database', text: copy.badge }}
        title={
          <>
            {copy.title}{' '}
            <span className="text-secondary">{copy.titleAccent}</span>.
          </>
        }
        description={copy.description}
        image={IMAGES.iaHero}
        imageAlt={copy.badge}
        primaryCta={{ href: withLocale('/contacto', locale), label: copy.primaryCta, icon: 'arrow_forward' }}
        secondaryCta={{ href: withLocale('/proyectos', locale), label: copy.secondaryCta }}
      />

      <section className="py-xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {copy.items.map((s) => (
              <div
                key={s.title}
                className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg hover:border-secondary transition-all"
              >
                <Icon name={s.icon} className="text-secondary text-4xl mb-md" />
                <h3 className="font-headline-md text-headline-md text-primary mb-xs">{s.title}</h3>
                <p className="font-body-md text-on-surface-variant">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-xl bg-surface-container-low">
        <Container>
          <SectionHeading title={copy.sectionTitle} />
          <div className="grid md:grid-cols-3 gap-gutter">
            {(locale === 'es'
              ? [
                  { step: '01', title: 'Ingesta', text: 'Ingesta masiva desde múltiples fuentes con limpieza automática.' },
                  { step: '02', title: 'Procesamiento', text: 'Transformación y modelado mediante lógica de negocio avanzada.' },
                  { step: '03', title: 'Entrega', text: 'Insights accionables a través de interfaces intuitivas.' },
                ]
              : locale === 'en'
              ? [
                  { step: '01', title: 'Ingestion', text: 'Automated data ingestion from multi-cloud and internal database sources.' },
                  { step: '02', title: 'Processing', text: 'Transformation, feature engineering, and advanced predictive modeling.' },
                  { step: '03', title: 'Delivery', text: 'Real-time actionable metrics delivered through executive visual dashboards.' },
                ]
              : [
                  { step: '01', title: 'Ingestão', text: 'Ingestão automatizada de múltiplas fontes com limpeza e validação.' },
                  { step: '02', title: 'Processamento', text: 'Transformação de dados e modelagem preditiva com lógica avançada.' },
                  { step: '03', title: 'Entrega', text: 'Insights acionáveis disponibilizados em painéis visuais intuitivos.' },
                ]
            ).map((item) => (
              <div key={item.step} className="bg-white p-lg border border-outline-variant rounded-lg">
                <span className="font-label-md text-secondary">{item.step}</span>
                <h3 className="font-headline-md text-primary mt-sm mb-xs">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        dark
        title={copy.ctaTitle}
        description={copy.ctaDesc}
        action={{ href: withLocale('/contacto', locale), label: copy.ctaButton }}
      />
    </>
  );
}
