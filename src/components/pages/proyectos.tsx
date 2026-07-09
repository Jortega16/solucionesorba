import Link from 'next/link';
import { PageImage } from '@/components/ui/PageImage';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { IMAGES } from '@/lib/images';

const filters = [
  'Todos los proyectos',
  'Desarrollo web',
  'Plataformas a medida',
  'WordPress',
  'SaaS',
  'IA',
  'Ciencia de datos',
];

const projects = [
  {
    title: 'Suite empresarial NeuralOps',
    tag: 'IA y ciencia de datos',
    description:
      'Plataforma de analítica predictiva para optimización industrial, procesando 1,2 M de puntos de datos por segundo con retroalimentación en tiempo real.',
    image: IMAGES.proyectoIa,
    featured: true,
  },
  {
    title: 'LogiTrack Pro',
    tag: 'Software a medida',
    description:
      'Motor de orquestación logística global para gestión de transporte multimodal.',
    image: IMAGES.plataformas,
  },
  {
    title: 'Portal FinTech',
    tag: 'Desarrollo web',
    description: 'Desarrollo de tema personalizado con integración de estado de red en tiempo real.',
    image: IMAGES.desarrolloWeb,
  },
];

export function ProyectosPage() {
  return (
    <>
      <section className="py-xl border-b border-outline-variant">
        <Container>
          <h1 className="font-display-lg text-display-lg mb-sm tracking-tight text-primary">
            Proyectos y soluciones desarrolladas
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mb-xl">
            En esta sección se muestran algunos proyectos, casos de éxito y ejemplos de soluciones
            desarrolladas. Nuestra ingeniería se centra en la precisión y la escalabilidad.
          </p>
          <div className="flex flex-wrap gap-sm">
            {filters.map((f, i) => (
              <button
                key={f}
                type="button"
                className={`px-lg py-xs font-label-md text-label-md rounded-lg transition-all ${
                  i === 0
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-xl">
        <Container className="space-y-gutter">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`grid md:grid-cols-2 gap-gutter items-center border border-outline-variant rounded-xl overflow-hidden ${
                index === 0 ? 'bg-primary text-on-primary p-lg' : 'bg-surface-container-lowest'
              }`}
            >
              <div className={index === 0 ? '' : 'p-lg'}>
                <span
                  className={`font-label-md uppercase mb-base inline-block ${
                    index === 0 ? 'bg-secondary px-sm py-1' : 'text-secondary'
                  }`}
                >
                  {project.tag}
                </span>
                <h3
                  className={`font-headline-lg mb-sm ${
                    index === 0 ? 'text-on-primary' : 'text-primary'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`font-body-md ${
                    index === 0 ? 'opacity-90 max-w-xl' : 'text-on-surface-variant'
                  }`}
                >
                  {project.description}
                </p>
                {index === 1 ? (
                  <Link
                    href="/contacto"
                    className="mt-md px-lg py-xs bg-white text-primary font-label-md inline-block hover:bg-secondary hover:text-white transition-colors"
                  >
                    Ver caso de estudio
                  </Link>
                ) : null}
              </div>
              <div className="relative min-h-[240px]">
                <PageImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover min-h-[240px]"
                />
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-xl bg-surface-container">
        <Container className="text-center">
          <h2 className="font-headline-lg text-headline-lg mb-sm text-primary">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-lg max-w-2xl mx-auto">
            Transformamos requerimientos técnicos complejos en realidades operativas.
          </p>
          <ButtonLink href="/contacto" className="px-xl py-md rounded-lg">
            Agendar una consulta técnica
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
