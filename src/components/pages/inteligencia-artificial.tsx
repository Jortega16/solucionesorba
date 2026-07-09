import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatsRow } from '@/components/ui/StatsRow';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';

export function InteligenciaArtificialPage() {
  return (
    <>
      <section className="relative min-h-[716px] flex items-center overflow-hidden bg-surface-container-lowest">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center py-xl relative z-10">
          <div className="space-y-lg">
            <div className="inline-flex items-center gap-xs bg-secondary-container px-sm py-xs rounded-full">
              <Icon name="neurology" className="text-on-secondary-container text-sm" />
              <span className="font-label-md text-label-md text-on-secondary-container">
                Inteligencia Artificial
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg text-primary max-w-xl">
              Agentes de inteligencia artificial para automatizar procesos
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Implementamos soluciones de inteligencia artificial que ayudan a automatizar
              tareas, mejorar la atención al cliente, procesar información y optimizar operaciones
              internas.
            </p>
            <div className="flex flex-wrap gap-sm pt-md">
              <ButtonLink href="/contacto" className="px-xl py-md">
                Solicitar demo
              </ButtonLink>
              <ButtonLink href="/contacto" variant="outline" className="px-xl py-md">
                Ver documentación
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
          <SectionHeading title="Nuestros Servicios de IA" accent centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="md:col-span-2 border border-outline-variant bg-white p-lg hover:border-secondary hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row gap-lg">
                <div className="flex-1 space-y-md">
                  <Icon name="robot_2" className="text-secondary text-[40px]" />
                  <h3 className="font-headline-md text-headline-md text-primary">Agentes de IA</h3>
                  <p className="font-body-md text-on-surface-variant">
                    Desarrollamos agentes autónomos capaces de razonar y ejecutar flujos de trabajo
                    complejos, integrándose con sus herramientas actuales.
                  </p>
                </div>
                <PageImage
                  src={IMAGES.iaAgents}
                  alt="Agentes de IA"
                  className="w-full h-48 object-cover rounded shadow-inner"
                />
              </div>
            </div>
            {[
              { icon: 'chat_bubble_outline', title: 'Chatbots inteligentes', text: 'Atención al cliente con NLP avanzado 24/7.' },
              { icon: 'sync_alt', title: 'Automatización de tareas', text: 'Eliminamos cuellos de botella operativos.' },
            ].map((s) => (
              <div
                key={s.title}
                className="border border-outline-variant bg-white p-lg hover:border-secondary hover:shadow-md transition-all"
              >
                <Icon name={s.icon} className="text-secondary text-[40px] mb-md" />
                <h3 className="font-headline-md text-headline-md text-primary mb-sm">{s.title}</h3>
                <p className="font-body-md text-on-surface-variant">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <StatsRow
        className="py-xl bg-surface-container-lowest"
        stats={[
          { value: '99.9%', label: 'SLA de disponibilidad' },
          { value: '24/7', label: 'Monitoreo IA' },
          { value: '<200ms', label: 'Latencia de Respuesta' },
          { value: 'AES-256', label: 'Seguridad de Datos' },
        ]}
      />

      <CtaBanner
        dark
        title="¿Listo para escalar su operación con IA?"
        description="Nuestros ingenieros están listos para diseñar una solución a medida que transforme su productividad."
        action={{ href: '/contacto', label: 'Agendar Consultoría Técnica' }}
      />
    </>
  );
}
