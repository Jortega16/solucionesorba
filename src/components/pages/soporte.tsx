import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBanner } from '@/components/ui/CtaBanner';
import { IMAGES } from '@/lib/images';

export function SoportePage() {
  return (
    <>
      <section className="relative py-xl bg-surface-container-low overflow-hidden">
        <Container className="grid lg:grid-cols-2 gap-xl items-center">
          <div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-md">
              Soporte técnico especializado
            </h1>
            <p className="font-body-lg text-on-surface-variant">
              Mantenimiento, actualizaciones y resolución de incidencias para sitios web,
              plataformas e infraestructura crítica de su negocio.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden border border-outline-variant">
            <PageImage
              src={IMAGES.soporte}
              alt="Soporte técnico"
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
        </Container>
      </section>

      <section className="py-xl">
        <Container>
          <SectionHeading title="Servicios de Mantenimiento" />
          <div className="grid md:grid-cols-2 gap-gutter">
            {[
              'Soporte web y de plataformas',
              'Mantenimiento preventivo y correctivo',
              'Actualizaciones de seguridad',
              'Resolución de incidencias',
            ].map((title) => (
              <div key={title} className="bg-white border border-outline-variant p-lg rounded-lg">
                <h3 className="font-headline-md text-primary mb-sm">{title}</h3>
                <p className="font-body-md text-on-surface-variant">
                  Respuesta rápida y documentación clara de cada intervención.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="¿Necesita asistencia técnica inmediata?"
        description="Nuestro equipo de ingenieros está disponible para incidentes críticos y soporte planificado."
        action={{ href: '/contacto', label: 'Abrir ticket de soporte' }}
      />
    </>
  );
}
