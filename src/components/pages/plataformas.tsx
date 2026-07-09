import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';

export function PlataformasPage() {
  return (
    <>
      <section className="relative bg-surface-container-lowest py-xl overflow-hidden">
        <Container className="grid md:grid-cols-2 gap-xl items-center">
          <div className="z-10">
            <span className="font-label-md text-label-md text-secondary mb-sm block">
              EFICIENCIA DISEÑADA
            </span>
            <h1 className="font-display-lg text-display-lg text-primary mb-md">
              Desarrollo de plataformas personalizadas para tu empresa
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-lg">
              Construimos plataformas digitales adaptadas a los procesos, necesidades y objetivos
              específicos de cada negocio. Transformamos la complejidad técnica en fluidez operativa.
            </p>
            <div className="flex gap-sm">
              <ButtonLink href="/contacto" className="px-xl py-sm">
                Iniciar Proyecto
              </ButtonLink>
              <ButtonLink href="/proyectos" variant="outline" className="px-xl py-sm">
                Casos de Éxito
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-square bg-surface-container-high rounded-lg overflow-hidden border border-outline-variant">
            <PageImage
              src={IMAGES.plataformas}
              alt="Desarrollo de software"
              className="w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute -bottom-xs -right-xs bg-secondary w-xl h-xl -z-10" />
          </div>
        </Container>
      </section>

      <section className="py-xl bg-background">
        <Container>
          <SectionHeading
            title="Soluciones que impulsan tu productividad"
            subtitle="Arquitectura robusta para desafíos empresariales reales."
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {[
              {
                span: 'md:col-span-8',
                icon: 'dashboard',
                title: 'Sistemas administrativos',
                text: 'Control total de tu operación centralizada en una única interfaz intuitiva y escalable.',
                dark: false,
              },
              {
                span: 'md:col-span-4',
                icon: 'group',
                title: 'Portales de clientes',
                text: 'Mejora la experiencia de tus clientes con accesos personalizados y seguros.',
                dark: true,
              },
              {
                span: 'md:col-span-4',
                icon: 'settings_applications',
                title: 'Herramientas internas',
                text: 'Herramientas específicas para optimizar el flujo de trabajo diario de tus equipos.',
                dark: false,
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`${card.span} border border-outline-variant p-md flex flex-col justify-between hover:border-secondary transition-colors ${
                  card.dark ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest'
                }`}
              >
                <div>
                  <Icon name={card.icon} className={`mb-sm text-[32px] ${card.dark ? 'text-secondary' : 'text-secondary'}`} />
                  <h3 className={`font-headline-md text-headline-md mb-xs ${card.dark ? 'text-on-primary' : 'text-primary'}`}>
                    {card.title}
                  </h3>
                  <p className={`font-body-md mb-md ${card.dark ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
            <div className="md:col-span-4 bg-secondary text-white p-md flex flex-col justify-center text-center">
              <h3 className="font-headline-md text-headline-md mb-xs">Integraciones API</h3>
              <p className="font-label-md text-label-md opacity-90">
                Conecta tu ecosistema digital sin fricciones.
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
        title="Enfoque en Productividad y Eficiencia"
        description="No solo escribimos código; diseñamos soluciones lógicas que eliminan cuellos de botella y maximizan el retorno de inversión."
        action={{ href: '/contacto', label: 'Solicitar cotización' }}
        className="py-xl bg-surface-container-high"
      />
    </>
  );
}
