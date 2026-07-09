import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { ServiceHero } from '@/components/ui/ServiceHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';

export function PluginsWordpressPage() {
  return (
    <>
      <ServiceHero
        badge={{ icon: 'settings_ethernet', text: 'Arquitectura WordPress' }}
        title="Desarrollo de plugins personalizados para WordPress"
        description="Desarrollamos plugins personalizados para WordPress que permiten ampliar las funcionalidades de sitios web, tiendas en línea y plataformas digitales con enfoque en rendimiento y escalabilidad."
        image={IMAGES.wordpress}
        imageAlt="Desarrollo de plugins WordPress"
        primaryCta={{ href: '/contacto', label: 'Cotizar plugin', icon: 'arrow_forward' }}
      />

      <section className="py-xl">
        <Container>
          <SectionHeading title="Nuestras Soluciones de Ingeniería" />
          <div className="grid md:grid-cols-2 gap-gutter">
            {[
              'Plugins personalizados',
              'Integraciones API',
              'Funciones WooCommerce',
              'Pasarelas de pago',
            ].map((title) => (
              <div key={title} className="border border-outline-variant p-lg bg-white rounded-lg">
                <Icon name="check_circle" className="text-secondary mb-sm" />
                <h3 className="font-headline-md text-primary">{title}</h3>
                <p className="font-body-md text-on-surface-variant mt-sm">
                  Código optimizado siguiendo WordPress Coding Standards.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Soluciones Orientadas a Resultados"
        description="Auditamos su ecosistema actual para integrar el nuevo plugin sin fricciones ni conflictos."
        action={{ href: '/contacto', label: 'Hablar con un ingeniero' }}
      />
    </>
  );
}
