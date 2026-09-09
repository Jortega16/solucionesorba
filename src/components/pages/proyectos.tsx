'use client';

import { useMemo, useState } from 'react';
import { Icon } from '@/components/Icon';
import { PageImage } from '@/components/ui/PageImage';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { IMAGES } from '@/lib/images';

const filters = ['Todos', 'IA y datos', 'SaaS', 'Desarrollo web', 'Integraciones'] as const;

const projects = [
  {
    title: 'Sense',
    tag: 'IA y datos',
    description: 'Plataforma de consulta inteligente sobre documentos y datos empresariales, desarrollada para facilitar la búsqueda y el análisis de información.',
    result: 'Chat con información empresarial y procesamiento documental.',
    image: IMAGES.proyectoIa,
    href: 'https://sense.neuralcoders.com',
    access: 'Demostración previa coordinación',
  },
  {
    title: 'Dataizen',
    tag: 'IA y datos',
    description: 'Plataforma de datos desarrollada para un cliente, orientada a convertir información operativa en análisis útil para la toma de decisiones.',
    result: 'Centralización y análisis de datos en una experiencia web.',
    image: IMAGES.plataformas,
    href: 'https://platform.dataizen.com',
    access: 'Acceso sujeto a autorización del cliente',
  },
  {
    title: 'Airwize',
    tag: 'SaaS',
    description: 'Aplicación web empresarial construida para administrar procesos desde una plataforma segura, accesible y preparada para evolucionar.',
    result: 'Operación centralizada en una plataforma SaaS.',
    image: IMAGES.desarrolloResponsive,
    href: 'https://airwizecr.com/sign-in',
    access: 'Demostración disponible',
  },
  {
    title: 'Tiendita CSG',
    tag: 'Integraciones',
    description: 'Comercio electrónico integrado con procesos internos y opciones de financiamiento para brindar una experiencia de compra completa.',
    result: 'Venta en línea, sincronización y gestión de crédito.',
    image: IMAGES.desarrolloWeb,
    href: 'https://tienditacsg.com',
    access: 'Sitio público',
  },
  {
    title: 'J4 Soluciones',
    tag: 'Desarrollo web',
    description: 'Presencia digital corporativa enfocada en comunicar servicios con claridad y facilitar el contacto comercial.',
    result: 'Canal digital para presentar servicios y captar oportunidades.',
    image: IMAGES.homeCode,
    href: 'https://j4soluciones.com/home',
    access: 'Sitio público',
  },
  {
    title: 'The Book and Toy Company',
    tag: 'Desarrollo web',
    description: 'Tienda en línea desarrollada sobre WordPress y WooCommerce para administrar catálogo, pedidos y experiencia de compra.',
    result: 'Canal de comercio electrónico administrable.',
    image: IMAGES.wordpress,
    href: 'https://thebookandtoycompany.com',
    access: 'Sitio público',
  },
];

export function ProyectosPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('Todos');
  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === 'Todos' || project.tag === activeFilter),
    [activeFilter]
  );

  return (
    <>
      <section className="py-xl border-b border-outline-variant bg-surface-container-low">
        <Container>
          <span className="font-label-md text-secondary uppercase tracking-widest">Trabajo comprobable</span>
          <h1 className="font-display-lg text-display-lg mt-sm mb-sm tracking-tight text-primary">Soluciones desarrolladas para retos reales</h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mb-xl">Una selección de plataformas, comercios electrónicos e implementaciones de datos. Algunos accesos requieren coordinación por confidencialidad y seguridad.</p>
          <div className="flex flex-wrap gap-sm" aria-label="Filtrar proyectos">
            {filters.map((filter) => (
              <button key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)} className={`px-lg py-xs font-label-md text-label-md rounded-lg transition-all ${activeFilter === filter ? 'bg-primary text-on-primary' : 'bg-white text-on-surface-variant hover:bg-surface-container'}`}>
                {filter}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-xl">
        <Container className="grid md:grid-cols-2 gap-gutter">
          {visibleProjects.map((project) => (
            <article key={project.title} className="flex flex-col border border-outline-variant rounded-xl overflow-hidden bg-white hover:border-secondary hover:shadow-md transition-all">
              <PageImage src={project.image} alt="" className="w-full h-52 object-cover" />
              <div className="p-lg flex flex-col flex-1">
                <span className="font-label-md text-secondary uppercase">{project.tag}</span>
                <h2 className="font-headline-md text-primary mt-xs mb-sm">{project.title}</h2>
                <p className="font-body-md text-on-surface-variant">{project.description}</p>
                <div className="mt-md pt-md border-t border-outline-variant">
                  <p className="font-label-md text-primary">Resultado</p>
                  <p className="font-body-md text-on-surface-variant mt-xs">{project.result}</p>
                </div>
                <div className="mt-auto pt-lg flex flex-wrap items-center justify-between gap-sm">
                  <span className="font-caption text-on-surface-variant">{project.access}</span>
                  <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-xs font-label-md text-secondary hover:text-primary">Visitar proyecto <Icon name="open_in_new" /></a>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-xl bg-surface-container">
        <Container className="text-center">
          <h2 className="font-headline-lg text-headline-lg mb-sm text-primary">¿Necesita una solución similar?</h2>
          <p className="font-body-lg text-on-surface-variant mb-lg max-w-2xl mx-auto">Cuéntenos el reto. Evaluaremos el proceso, las integraciones y la ruta técnica más conveniente.</p>
          <ButtonLink href="/contacto" className="px-xl py-md rounded-lg">Solicitar evaluación del proyecto</ButtonLink>
        </Container>
      </section>
    </>
  );
}
