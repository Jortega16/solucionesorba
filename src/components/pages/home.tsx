import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatsRow } from '@/components/ui/StatsRow';
import { IMAGES } from '@/lib/images';

export function HomePage() {
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
            <div className="inline-flex items-center gap-xs bg-secondary-container/20 px-sm py-xs rounded-full">
              <Icon name="verified" className="text-secondary text-sm" />
              <span className="font-label-md text-label-md text-secondary-container uppercase tracking-wider">
                Ingeniería de confianza desde 2015
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg text-primary leading-tight">
              Soluciones tecnológicas para impulsar tu negocio
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Desarrollamos soluciones digitales y tecnológicas diseñadas para ayudar a
              empresas, emprendedores y organizaciones a crecer, automatizar procesos y
              mejorar su operación.
            </p>
            <div className="flex flex-col sm:flex-row gap-md pt-md">
              <ButtonLink href="/contacto" icon="arrow_forward" className="px-xl py-md">
                Hablemos de tu proyecto
              </ButtonLink>
              <ButtonLink href="/#servicios" variant="outline" className="px-xl py-md">
                Nuestros Servicios
              </ButtonLink>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-lg relative z-20 overflow-hidden">
              <PageImage
                src={IMAGES.homeHero}
                alt="Soluciones digitales empresariales"
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
            title="Nuestra Experiencia"
            subtitle="Combinamos precisión industrial con agilidad digital para entregar resultados robustos."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 group bg-surface border border-outline-variant rounded-xl p-lg hover:border-secondary transition-all overflow-hidden relative">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <Icon name="terminal" className="text-secondary text-4xl mb-md" />
                  <h3 className="font-headline-md text-headline-md text-primary mb-sm">
                    Desarrollo web
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    Creamos experiencias digitales de alto impacto, desde landing pages
                    corporativas hasta plataformas interactivas complejas con enfoque en
                    performance.
                  </p>
                </div>
                <div className="mt-xl flex flex-wrap gap-xs">
                  {['React', 'Arquitectura en la nube', 'SEO optimizado'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-high px-sm py-1 rounded text-label-md font-label-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-1/3 opacity-20 group-hover:opacity-40 transition-opacity">
                <PageImage src={IMAGES.homeCode} alt="" className="w-full h-auto" />
              </div>
            </div>

            <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-lg flex flex-col justify-between hover:scale-[1.02] transition-transform">
              <div>
                <Icon name="cloud_done" className="text-on-primary-container text-4xl mb-md" />
                <h3 className="font-headline-md text-headline-md mb-sm">Software como servicio</h3>
                <p className="font-body-md text-body-md opacity-80">
                  Escalabilidad y robustez para tus productos digitales. Diseñamos
                  infraestructuras preparadas para el crecimiento masivo.
                </p>
              </div>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-xs font-label-md text-label-md mt-xl hover:translate-x-2 transition-transform"
              >
                Ver casos de éxito <Icon name="chevron_right" />
              </Link>
            </div>

            <div className="md:col-span-5 bg-surface border border-outline-variant rounded-xl p-lg hover:border-secondary transition-all">
              <Icon name="insights" className="text-secondary text-4xl mb-md" />
              <h3 className="font-headline-md text-headline-md text-primary mb-sm">
                IA y análisis de datos
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Transformamos datos crudos en decisiones estratégicas. Implementamos modelos
                de machine learning personalizados para automatización inteligente.
              </p>
              <div className="mt-lg pt-lg border-t border-outline-variant flex gap-md">
                <div className="text-center">
                  <div className="font-headline-md text-primary">99%</div>
                  <div className="font-caption text-caption uppercase text-on-surface-variant">
                    Precisión
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-headline-md text-primary">24/7</div>
                  <div className="font-caption text-caption uppercase text-on-surface-variant">
                    Monitoreo
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-surface border border-outline-variant rounded-xl p-lg relative overflow-hidden group hover:border-secondary transition-all">
              <div className="relative z-10">
                <Icon name="precision_manufacturing" className="text-secondary text-4xl mb-md" />
                <h3 className="font-headline-md text-headline-md text-primary mb-sm">
                  Sistemas ciberfísicos
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                  Conectamos el mundo físico y el digital. Integración de IoT, sistemas
                  embebidos y control industrial para la Industria 4.0.
                </p>
                <Link
                  href="/sistemas-ciberfisicos"
                  className="mt-lg border border-primary px-lg py-xs font-label-md text-label-md rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors inline-block"
                >
                  Explorar hardware
                </Link>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-5">
                <Icon name="settings_input_component" className="text-[200px]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsRow
        stats={[
          { value: '8+', label: 'Años de Trayectoria' },
          { value: '150+', label: 'Proyectos Entregados' },
          { value: '45+', label: 'Clientes Globales' },
          { value: '10k+', label: 'Horas de Ingeniería' },
        ]}
      />
    </>
  );
}
