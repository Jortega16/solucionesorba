import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { ServiceHero } from '@/components/ui/ServiceHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageImage } from '@/components/ui/PageImage';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';

export function DesarrolloWebPage() {
  return (
    <>
      <ServiceHero
        badge={{ icon: 'web', text: 'Experiencia digital' }}
        title={
          <>
            Desarrollo de páginas web <span className="text-secondary">modernas y funcionales</span>
          </>
        }
        description="Diseñamos y desarrollamos páginas web profesionales, rápidas, seguras y adaptadas a todo tipo de dispositivos para potenciar tu presencia digital."
        image={IMAGES.desarrolloWeb}
        imageAlt="Desarrollo web moderno"
        primaryCta={{ href: '/contacto', label: 'Empezar proyecto', icon: 'arrow_forward' }}
        secondaryCta={{ href: '/proyectos', label: 'Ver portafolio' }}
      />

      <section className="py-xl">
        <Container>
          <SectionHeading title="Soluciones Especializadas" accent />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-lg rounded-lg hover:border-secondary transition-all group">
              <Icon name="business" className="text-secondary text-[40px] mb-sm" />
              <h3 className="font-headline-md text-headline-md mb-xs">Sitios Corporativos</h3>
              <p className="text-on-surface-variant font-body-md mb-md">
                Arquitecturas robustas diseñadas para representar la identidad de su empresa con
                profesionalismo y escalabilidad.
              </p>
              <ul className="grid grid-cols-2 gap-xs font-label-md text-label-md text-on-surface-variant">
                {['Multi-idioma', 'SEO Optimizado', 'CMS Intuitivo', 'Seguridad SSL'].map((item) => (
                  <li key={item} className="flex items-center gap-xs">
                    <Icon name="check_circle" className="text-secondary text-[16px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4 bg-primary text-on-primary p-lg rounded-lg flex flex-col justify-center text-center">
              <Icon name="ads_click" className="text-[48px] mb-md text-secondary-fixed" />
              <h3 className="font-headline-md text-headline-md mb-xs">Páginas de aterrizaje</h3>
              <p className="font-body-md text-on-primary-container mb-md opacity-90">
                Diseñadas específicamente para la conversión y el retorno de inversión publicitaria.
              </p>
            </div>
            <div className="md:col-span-4 bg-surface-container-high border border-outline-variant p-lg rounded-lg hover:shadow-md transition-all">
              <Icon name="shopping_cart" className="text-primary text-[32px] mb-sm" />
              <h3 className="font-headline-md text-headline-md mb-xs">Comercio electrónico</h3>
              <p className="text-on-surface-variant font-body-md">
                Tiendas online con pasarelas de pago integradas y gestión de inventario eficiente.
              </p>
            </div>
            <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-lg rounded-lg overflow-hidden relative group">
              <div className="relative z-10 flex flex-col md:flex-row gap-lg items-center">
                <div className="flex-1">
                  <h3 className="font-headline-md text-headline-md mb-xs">
                    Diseño Responsivo e Integración
                  </h3>
                  <p className="text-on-surface-variant font-body-md mb-md">
                    Adaptabilidad total en smartphones, tablets y ordenadores. Integración perfecta
                    con sus herramientas de CRM y analítica.
                  </p>
                  <div className="flex gap-sm">
                    <Icon name="smartphone" className="text-secondary" />
                    <Icon name="tablet" className="text-secondary" />
                    <Icon name="laptop" className="text-secondary" />
                  </div>
                </div>
                <div className="flex-1 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <PageImage
                    src={IMAGES.desarrolloResponsive}
                    alt="Diseño responsivo"
                    className="rounded shadow-lg w-full h-32 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        className="bg-surface-container-lowest border-y border-outline-variant py-xl"
        title="¿Listo para transformar su presencia en línea?"
        description="Solicite una auditoría gratuita de su sitio actual o una cotización para su nuevo proyecto."
        action={{ href: '/contacto', label: 'Consultoría Gratuita' }}
      />
    </>
  );
}
