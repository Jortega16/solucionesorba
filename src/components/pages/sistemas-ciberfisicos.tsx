import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatsRow } from '@/components/ui/StatsRow';
import { IMAGES } from '@/lib/images';

export function SistemasCiberfisicosPage() {
  return (
    <>
      <section className="relative bg-surface-container-low py-xl">
        <Container className="grid md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7">
            <span className="font-label-md text-label-md text-secondary mb-xs block">
              SOLUCIONES DE INGENIERÍA AVANZADA
            </span>
            <h1 className="font-display-lg text-display-lg text-primary mb-md leading-tight">
              Sistemas ciberfísicos para conectar el mundo digital con el físico
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-lg max-w-2xl">
              Desarrollamos sistemas ciberfísicos que integran software, hardware, sensores,
              dispositivos electrónicos y comunicación de datos para transformar la operatividad
              industrial.
            </p>
            <div className="flex gap-sm">
              <ButtonLink href="/contacto" className="px-lg py-sm uppercase tracking-wider">
                Explorar capacidades
              </ButtonLink>
              <Link
                href="/proyectos"
                className="border border-primary text-primary px-lg py-sm font-label-md font-bold uppercase tracking-wider hover:bg-surface-container-low transition-colors inline-flex items-center"
              >
                Ver casos de éxito
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative aspect-square bg-surface-container-high rounded-lg overflow-hidden border border-outline-variant">
            <PageImage
              src={IMAGES.cpsIndustrial}
              alt="Automatización industrial"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-md left-md bg-primary text-on-primary p-md">
              <p className="font-label-md text-label-md mb-xs">ESTADO</p>
              <p className="font-headline-md text-headline-md">CONECTADO</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-xl">
        <Container>
          <SectionHeading title="Nuestros Servicios de CPS" subtitle="Integración total hardware-software." />
          <div className="grid md:grid-cols-2 gap-gutter">
            {[
              { title: 'Integración software/hardware', text: 'Firmware, drivers y sistemas embebidos.', tags: ['Firmware', 'Drivers', 'RTOS'] },
              { title: 'Sensores', text: 'Captura de datos del mundo físico.', tags: ['Lidar', 'Térmico', 'Vibración'] },
              { title: 'Monitoreo y analítica en el borde', text: 'Dashboards y alertas predictivas en tiempo real.' },
              { title: 'IoT industrial (IIoT)', text: 'Protocolos y conectividad para plantas industriales.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface border border-outline-variant p-lg rounded-lg hover:border-secondary transition-all"
              >
                <h3 className="font-headline-md text-primary mb-sm">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-md">{item.text}</p>
                {item.tags ? (
                  <div className="flex flex-wrap gap-xs">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-surface-container px-sm py-1 text-[10px] font-label-md uppercase border border-outline-variant"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <StatsRow
        stats={[
          { value: '99,9 %', label: 'Disponibilidad' },
          { value: '< 10 ms', label: 'de respuesta' },
          { value: 'E2E', label: 'Cifrado' },
          { value: '24/7', label: 'Monitoreo' },
        ]}
      />
    </>
  );
}
