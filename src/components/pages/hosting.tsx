import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';

export function HostingPage() {
  return (
    <>
      <section className="py-xl bg-surface-container-low">
        <Container className="grid lg:grid-cols-2 gap-xl items-center">
          <div>
            <span className="font-label-md text-secondary uppercase tracking-widest block mb-base">
              Infraestructura y estabilidad
            </span>
            <h1 className="font-display-lg text-display-lg text-primary mb-sm">
              Hosting confiable para sitios web y plataformas
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-lg">
              Ofrecemos infraestructura administrada, certificados SSL, respaldos y acompañamiento
              técnico para mantener sitios web y plataformas estables y protegidos.
            </p>
          </div>
          <PageImage
            src={IMAGES.hosting}
            alt="Infraestructura de hosting"
            className="w-full aspect-video object-cover rounded-lg border border-outline-variant"
          />
        </Container>
      </section>

      <section className="py-xl">
        <Container>
          <SectionHeading title="Nuestros Servicios de Infraestructura" />
          <div className="grid md:grid-cols-2 gap-gutter">
            {[
              { icon: 'dns', title: 'Hosting web y de plataformas', text: 'Recursos ajustados al tráfico y las necesidades de cada solución.' },
              { icon: 'settings', title: 'Administración de servidores', text: 'Configuración, actualizaciones, optimización y seguimiento técnico.' },
              { icon: 'lock', title: 'SSL, respaldos y seguridad', text: 'Protección y recuperación planificadas según el servicio contratado.' },
              { icon: 'support_agent', title: 'Soporte especializado', text: 'Atención directa para dudas, incidentes y continuidad operativa.' },
            ].map((s) => (
              <div key={s.title} className="border border-outline-variant p-lg rounded-lg bg-white">
                <Icon name={s.icon} className="text-secondary mb-sm" />
                <h3 className="font-headline-md text-primary mb-xs">{s.title}</h3>
                <p className="font-body-md text-on-surface-variant">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="¿Necesita migrar o escalar su infraestructura?"
        description="Evaluamos su carga actual y proponemos un plan de hosting a medida."
        action={{ href: '/contacto', label: 'Contactar soporte' }}
      />
    </>
  );
}
