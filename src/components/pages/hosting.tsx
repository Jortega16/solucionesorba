import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { ServiceHero } from '@/components/ui/ServiceHero';
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
              Ofrecemos hosting de alto rendimiento con administración experta, certificados SSL y
              soporte técnico 24/7 para mantener su presencia digital siempre en línea.
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
              { icon: 'dns', title: 'Hosting web y de plataformas', text: 'SSD NVMe para alto tráfico.' },
              { icon: 'settings', title: 'Administración de servidores', text: 'Optimización y seguridad.' },
              { icon: 'lock', title: 'Certificados SSL', text: 'Cifrado de punta a punta.' },
              { icon: 'support_agent', title: 'Soporte técnico 24/7', text: 'Ingenieros, no bots.' },
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
