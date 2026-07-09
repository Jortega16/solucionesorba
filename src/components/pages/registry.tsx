import type { ComponentType } from 'react';
import type { PageSlug } from '@/lib/site';

export type ContentPageSlug = Exclude<PageSlug, 'inicio'>;

type PageLoader = () => Promise<{ default: ComponentType } | Record<string, ComponentType>>;

export const PAGE_LOADERS: Record<ContentPageSlug, PageLoader> = {
  'desarrollo-web': () =>
    import('./desarrollo-web').then((m) => ({ default: m.DesarrolloWebPage })),
  plataformas: () => import('./plataformas').then((m) => ({ default: m.PlataformasPage })),
  'inteligencia-artificial': () =>
    import('./inteligencia-artificial').then((m) => ({
      default: m.InteligenciaArtificialPage,
    })),
  'ciencia-de-datos': () =>
    import('./ciencia-de-datos').then((m) => ({ default: m.CienciaDeDatosPage })),
  'sistemas-ciberfisicos': () =>
    import('./sistemas-ciberfisicos').then((m) => ({ default: m.SistemasCiberfisicosPage })),
  'control-automatizacion': () =>
    import('./control-automatizacion').then((m) => ({
      default: m.ControlAutomatizacionPage,
    })),
  prototipado: () => import('./prototipado').then((m) => ({ default: m.PrototipadoPage })),
  'plugins-wordpress': () =>
    import('./plugins-wordpress').then((m) => ({ default: m.PluginsWordpressPage })),
  hosting: () => import('./hosting').then((m) => ({ default: m.HostingPage })),
  soporte: () => import('./soporte').then((m) => ({ default: m.SoportePage })),
  nosotros: () => import('./nosotros').then((m) => ({ default: m.NosotrosPage })),
  contacto: () => import('./contacto').then((m) => ({ default: m.ContactoPage })),
  proyectos: () => import('./proyectos').then((m) => ({ default: m.ProyectosPage })),
  blog: () => import('./blog').then((m) => ({ default: m.BlogPage })),
};

export function isContentPageSlug(slug: string): slug is ContentPageSlug {
  return slug in PAGE_LOADERS;
}

export async function loadPageComponent(slug: ContentPageSlug): Promise<ComponentType> {
  const mod = await PAGE_LOADERS[slug]();
  return mod.default;
}
