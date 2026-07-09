export const SITE = {
  name: 'Soluciones Orba',
  tagline: 'Ingeniería de confianza',
  logo: '/logo-soluciones-orba.png',
  logoWidth: 900,
  logoHeight: 270,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'jortega@solucionesorba.com',
} as const;

export type NavItem = {
  label: string;
  href: string;
  match?: string[];
};

export type ServiceLink = {
  label: string;
  href: string;
  description?: string;
};

export type ServiceGroup = {
  title: string;
  items: ServiceLink[];
};

export const SERVICES_MENU: ServiceGroup[] = [
  {
    title: 'Desarrollo digital',
    items: [
      {
        label: 'Desarrollo web',
        href: '/desarrollo-web',
        description: 'Sitios y aplicaciones web modernas',
      },
      {
        label: 'Software a medida',
        href: '/plataformas',
        description: 'Plataformas y herramientas empresariales',
      },
      {
        label: 'Plugins WordPress',
        href: '/plugins-wordpress',
        description: 'Extensiones personalizadas para WordPress',
      },
    ],
  },
  {
    title: 'IA y datos',
    items: [
      {
        label: 'Inteligencia artificial',
        href: '/inteligencia-artificial',
        description: 'Agentes, chatbots y automatización',
      },
      {
        label: 'Ciencia de datos',
        href: '/ciencia-de-datos',
        description: 'Analítica y modelos predictivos',
      },
    ],
  },
  {
    title: 'Sistemas ciberfísicos',
    items: [
      {
        label: 'Sistemas ciberfísicos',
        href: '/sistemas-ciberfisicos',
        description: 'IoT, sensores e integración industrial',
      },
      {
        label: 'Control y automatización',
        href: '/control-automatizacion',
        description: 'Supervisión y control de procesos',
      },
      {
        label: 'Prototipado',
        href: '/prototipado',
        description: 'Pruebas de concepto y MVPs',
      },
    ],
  },
  {
    title: 'Infraestructura',
    items: [
      {
        label: 'Hosting',
        href: '/hosting',
        description: 'Alojamiento confiable para web y apps',
      },
      {
        label: 'Soporte técnico',
        href: '/soporte',
        description: 'Mantenimiento y asistencia especializada',
      },
    ],
  },
];

export const SERVICE_PATHS = SERVICES_MENU.flatMap((group) =>
  group.items.map((item) => item.href)
);

export const MAIN_NAV: NavItem[] = [
  { label: 'Inicio', href: '/', match: ['/'] },
  { label: 'Nosotros', href: '/nosotros', match: ['/nosotros'] },
  { label: 'Proyectos', href: '/proyectos', match: ['/proyectos'] },
];

/** Enlaces que van después del menú desplegable de Servicios */
export const NAV_AFTER_SERVICES: NavItem[] = [
  { label: 'Blog', href: '/blog', match: ['/blog'] },
];

export const EXTENDED_NAV: NavItem[] = [...MAIN_NAV];

export type PageSlug =
  | 'inicio'
  | 'desarrollo-web'
  | 'plataformas'
  | 'inteligencia-artificial'
  | 'ciencia-de-datos'
  | 'sistemas-ciberfisicos'
  | 'control-automatizacion'
  | 'prototipado'
  | 'plugins-wordpress'
  | 'hosting'
  | 'soporte'
  | 'nosotros'
  | 'contacto'
  | 'proyectos'
  | 'blog';

export const PAGE_META: Record<
  PageSlug,
  { title: string; description: string; path: string; nav?: 'main' | 'extended' }
> = {
  inicio: {
    title: 'Soluciones Orba | Ingeniería de confianza',
    description:
      'Soluciones tecnológicas para impulsar tu negocio. Desarrollo web, software a medida, IA y sistemas ciberfísicos.',
    path: '/',
    nav: 'main',
  },
  'desarrollo-web': {
    title: 'Desarrollo Web - Soluciones Orba',
    description: 'Páginas web modernas, rápidas y seguras para tu presencia digital.',
    path: '/desarrollo-web',
    nav: 'main',
  },
  plataformas: {
    title: 'Plataformas a la Medida | Soluciones Orba',
    description: 'Plataformas personalizadas para empresas: portales, herramientas internas y más.',
    path: '/plataformas',
    nav: 'main',
  },
  'inteligencia-artificial': {
    title: 'Inteligencia Artificial - Soluciones Orba',
    description: 'Agentes de IA, chatbots y automatización para optimizar tu operación.',
    path: '/inteligencia-artificial',
    nav: 'main',
  },
  'ciencia-de-datos': {
    title: 'Ciencia de Datos - Soluciones Orba',
    description: 'Analítica y modelos predictivos para mejores decisiones de negocio.',
    path: '/ciencia-de-datos',
    nav: 'main',
  },
  'sistemas-ciberfisicos': {
    title: 'Sistemas Ciberfísicos - Soluciones Orba',
    description: 'Integración de software, hardware, sensores e IoT industrial.',
    path: '/sistemas-ciberfisicos',
    nav: 'main',
  },
  'control-automatizacion': {
    title: 'Control y Automatización - Soluciones Orba',
    description: 'Automatización de procesos, control de variables y monitoreo remoto.',
    path: '/control-automatizacion',
    nav: 'main',
  },
  prototipado: {
    title: 'Prototipado tecnológico | Soluciones Orba',
    description: 'Prototipos funcionales y pruebas de concepto para validar ideas.',
    path: '/prototipado',
    nav: 'main',
  },
  'plugins-wordpress': {
    title: 'Plugins WordPress - Soluciones Orba',
    description: 'Plugins personalizados para WordPress con rendimiento y escalabilidad.',
    path: '/plugins-wordpress',
    nav: 'extended',
  },
  hosting: {
    title: 'Hosting - Soluciones Orba',
    description: 'Hosting confiable para sitios web y plataformas con soporte 24/7.',
    path: '/hosting',
    nav: 'extended',
  },
  soporte: {
    title: 'Soporte Técnico - Soluciones Orba',
    description: 'Soporte técnico especializado para web, plataformas e infraestructura.',
    path: '/soporte',
    nav: 'extended',
  },
  nosotros: {
    title: 'Nosotros - Soluciones Orba',
    description: 'Experiencia tecnológica desde 2015. Conoce al equipo de Soluciones Orba.',
    path: '/nosotros',
  },
  contacto: {
    title: 'Contacto - Soluciones Orba',
    description: 'Hablemos de tu proyecto. Cuéntanos qué necesitas desarrollar o automatizar.',
    path: '/contacto',
  },
  proyectos: {
    title: 'Proyectos - Soluciones Orba',
    description: 'Casos de éxito y soluciones desarrolladas para nuestros clientes.',
    path: '/proyectos',
  },
  blog: {
    title: 'Blog - Soluciones Orba',
    description:
      'Artículos sobre desarrollo web, IA, automatización y tecnología para empresas.',
    path: '/blog',
  },
};

export const STATIC_SLUGS = Object.keys(PAGE_META).filter(
  (s) => s !== 'inicio'
) as Exclude<PageSlug, 'inicio'>[];
