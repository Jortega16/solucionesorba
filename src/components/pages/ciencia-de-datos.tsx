import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { ServiceHero } from '@/components/ui/ServiceHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';

const services = [
  { icon: 'monitoring', title: 'Dashboards en Tiempo Real', text: 'Visualización clara de KPIs críticos.' },
  { icon: 'model_training', title: 'Modelos Predictivos', text: 'Anticipamos tendencias y comportamientos.' },
  { icon: 'description', title: 'Reportes Automatizados', text: 'Información lista para tomar decisiones.' },
  { icon: 'bubble_chart', title: 'Visualización de Datos', text: 'Transformamos datos complejos en insights.' },
];

export function CienciaDeDatosPage() {
  return (
    <>
      <ServiceHero
        badge={{ icon: 'database', text: 'CIENCIA DE DATOS' }}
        title={
          <>
            Ciencia de datos y analítica para tomar{' '}
            <span className="text-secondary">mejores decisiones</span>.
          </>
        }
        description="Transformamos datos en información accionable mediante análisis avanzado, modelos predictivos y visualizaciones que impulsan la estrategia de su negocio."
        image={IMAGES.iaHero}
        imageAlt="Ciencia de datos"
        primaryCta={{ href: '/contacto', label: 'Consultoría de datos', icon: 'arrow_forward' }}
      />

      <section className="py-xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {services.map((s) => (
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
          <SectionHeading title="Nuestro Ecosistema Analítico" />
          <div className="grid md:grid-cols-3 gap-gutter">
            {[
              { step: '01', title: 'Ingesta', text: 'Ingesta masiva desde múltiples fuentes con limpieza automática.' },
              { step: '02', title: 'Procesamiento', text: 'Transformación y modelado mediante lógica de negocio avanzada.' },
              { step: '03', title: 'Entrega', text: 'Insights accionables a través de interfaces intuitivas.' },
            ].map((item) => (
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
        title="¿Listo para desbloquear el poder de sus datos?"
        description="Contacte con nuestros ingenieros para una auditoría de datos inicial."
        action={{ href: '/contacto', label: 'Agendar auditoría' }}
      />
    </>
  );
}
