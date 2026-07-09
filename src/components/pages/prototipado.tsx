import { Container } from '@/components/ui/Container';
import { ServiceHero } from '@/components/ui/ServiceHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';

export function PrototipadoPage() {
  return (
    <>
      <ServiceHero
        badge={{ icon: 'science', text: 'Centro de innovación' }}
        title="Prototipado tecnológico para validar ideas"
        description="Convertimos ideas en prototipos funcionales que permiten validar conceptos, probar tecnologías y evaluar soluciones antes de llevarlas a producción."
        image={IMAGES.prototipo}
        imageAlt="Prototipado tecnológico"
        primaryCta={{ href: '/contacto', label: 'Solicitar consultoría I+D', icon: 'arrow_forward' }}
        secondaryCta={{ href: '/proyectos', label: 'Ver casos de éxito' }}
      />

      <section className="py-xl">
        <Container>
          <SectionHeading title="Nuestros Servicios de I+D" />
          <div className="grid md:grid-cols-3 gap-gutter">
            {[
              { title: 'Prototipos funcionales', text: 'Versiones operativas para validar mecánica, electrónica y UX.' },
              { title: 'Prueba de concepto (POC)', text: 'Validación rápida de viabilidad técnica y de negocio.' },
              { title: 'Sistemas embebidos', text: 'Módulos IoT y firmware para productos conectados.' },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg"
              >
                <h3 className="font-headline-md text-primary mb-sm">{s.title}</h3>
                <p className="font-body-md text-on-surface-variant">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="¿Listo para prototipar su próxima innovación?"
        description="Reduzca el riesgo de su inversión tecnológica con un prototipo funcional diseñado por expertos en ingeniería."
        action={{ href: '/contacto', label: 'Solicitar Consultoría R&D' }}
      />
    </>
  );
}
