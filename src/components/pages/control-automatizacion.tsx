import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { ServiceHero } from '@/components/ui/ServiceHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';

export function ControlAutomatizacionPage() {
  return (
    <>
      <ServiceHero
        title="Sistemas de control y automatización"
        description="Diseñamos e implementamos sistemas de control industrial, automatización de procesos y monitoreo remoto para optimizar la producción y reducir errores operativos."
        image={IMAGES.control}
        imageAlt="Panel de control industrial"
        primaryCta={{ href: '/contacto', label: 'Solicitar evaluación', icon: 'arrow_forward' }}
        className="py-xl bg-surface-container-lowest"
        imageClassName="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
      />

      <section className="py-xl">
        <Container>
          <div className="grid md:grid-cols-2 gap-gutter">
            {[
              'Automatización de procesos',
              'Control de variables',
              'Monitoreo remoto',
              'Paneles industriales',
            ].map((title) => (
              <div
                key={title}
                className="border border-outline-variant p-lg rounded-lg bg-white hover:border-secondary transition-all"
              >
                <h3 className="font-headline-md text-primary mb-sm">{title}</h3>
                <p className="font-body-md text-on-surface-variant">
                  Soluciones robustas diseñadas para entornos de manufactura y operación continua.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="¿Listo para automatizar su planta?"
        description="Evaluamos su operación actual y proponemos un plan de automatización por fases."
        action={{ href: '/contacto', label: 'Agendar visita técnica' }}
      />
    </>
  );
}
