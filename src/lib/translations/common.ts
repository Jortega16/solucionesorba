import type { Locale } from '../i18n';

export interface LocalizedNavItem {
  label: Record<Locale, string>;
  href: string;
  match?: string[];
}

export interface LocalizedServiceLink {
  label: Record<Locale, string>;
  href: string;
  description: Record<Locale, string>;
}

export interface LocalizedServiceGroup {
  title: Record<Locale, string>;
  items: LocalizedServiceLink[];
}

export const NAV_ITEMS_MAIN: LocalizedNavItem[] = [
  {
    label: { es: 'Inicio', en: 'Home', pt: 'Início' },
    href: '/',
    match: ['/'],
  },
  {
    label: { es: 'Nosotros', en: 'About Us', pt: 'Sobre Nós' },
    href: '/nosotros',
    match: ['/nosotros'],
  },
  {
    label: { es: 'Proyectos', en: 'Projects', pt: 'Projetos' },
    href: '/proyectos',
    match: ['/proyectos'],
  },
];

export const NAV_ITEMS_AFTER_SERVICES: LocalizedNavItem[] = [
  {
    label: { es: 'Blog', en: 'Blog', pt: 'Blog' },
    href: '/blog',
    match: ['/blog'],
  },
];

export const LOCALIZED_SERVICES_MENU: LocalizedServiceGroup[] = [
  {
    title: {
      es: 'Desarrollo digital',
      en: 'Digital Development',
      pt: 'Desenvolvimento Digital',
    },
    items: [
      {
        label: { es: 'Desarrollo web', en: 'Web Development', pt: 'Desenvolvimento Web' },
        href: '/desarrollo-web',
        description: {
          es: 'Sitios y aplicaciones web modernas',
          en: 'Modern websites and web applications',
          pt: 'Sites e aplicações web modernas',
        },
      },
      {
        label: { es: 'Software a medida', en: 'Custom Software', pt: 'Software sob Medida' },
        href: '/plataformas',
        description: {
          es: 'Plataformas y herramientas empresariales',
          en: 'Enterprise platforms and internal tools',
          pt: 'Plataformas e ferramentas empresariais',
        },
      },
      {
        label: { es: 'Plugins WordPress', en: 'WordPress Plugins', pt: 'Plugins para WordPress' },
        href: '/plugins-wordpress',
        description: {
          es: 'Extensiones personalizadas para WordPress',
          en: 'Custom extensions and add-ons for WordPress',
          pt: 'Extensões personalizadas para WordPress',
        },
      },
    ],
  },
  {
    title: {
      es: 'IA y datos',
      en: 'AI & Data',
      pt: 'IA e Dados',
    },
    items: [
      {
        label: { es: 'Inteligencia artificial', en: 'Artificial Intelligence', pt: 'Inteligência Artificial' },
        href: '/inteligencia-artificial',
        description: {
          es: 'Agentes, chatbots y automatización',
          en: 'AI agents, chatbots, and automation',
          pt: 'Agentes de IA, chatbots e automação',
        },
      },
      {
        label: { es: 'Ciencia de datos', en: 'Data Science', pt: 'Ciência de Dados' },
        href: '/ciencia-de-datos',
        description: {
          es: 'Analítica y modelos predictivos',
          en: 'Analytics and predictive models',
          pt: 'Análise avançada e modelos preditivos',
        },
      },
    ],
  },
  {
    title: {
      es: 'Sistemas ciberfísicos',
      en: 'Cyber-Physical Systems',
      pt: 'Sistemas Ciberfísicos',
    },
    items: [
      {
        label: { es: 'Sistemas ciberfísicos', en: 'Cyber-Physical Systems', pt: 'Sistemas Ciberfísicos' },
        href: '/sistemas-ciberfisicos',
        description: {
          es: 'IoT, sensores e integración industrial',
          en: 'IoT, connected sensors, and industrial integration',
          pt: 'IoT, sensores e integração industrial',
        },
      },
      {
        label: { es: 'Control y automatización', en: 'Control & Automation', pt: 'Controle e Automação' },
        href: '/control-automatizacion',
        description: {
          es: 'Supervisión y control de procesos',
          en: 'Industrial process monitoring and control',
          pt: 'Supervisão e controle de processos industriais',
        },
      },
      {
        label: { es: 'Prototipado', en: 'Prototyping & MVPs', pt: 'Prototipagem e MVPs' },
        href: '/prototipado',
        description: {
          es: 'Pruebas de concepto y MVPs',
          en: 'Proof of concept and fast prototype validation',
          pt: 'Provas de conceito e validação de protótipos',
        },
      },
    ],
  },
  {
    title: {
      es: 'Infraestructura',
      en: 'Infrastructure',
      pt: 'Infraestrutura',
    },
    items: [
      {
        label: { es: 'Hosting', en: 'Managed Hosting', pt: 'Hospedagem Gerenciada' },
        href: '/hosting',
        description: {
          es: 'Alojamiento confiable para web y apps',
          en: 'Reliable cloud hosting for web and apps',
          pt: 'Hospedagem em nuvem confiável para web e apps',
        },
      },
      {
        label: { es: 'Soporte técnico', en: 'Technical Support', pt: 'Suporte Técnico' },
        href: '/soporte',
        description: {
          es: 'Mantenimiento y asistencia especializada',
          en: 'Continuous maintenance and expert support',
          pt: 'Manutenção contínua e assistência especializada',
        },
      },
    ],
  },
];

export const HEADER_COPY: Record<
  Locale,
  {
    servicesButton: string;
    servicesOverview: string;
    contactButton: string;
    mobileNavAria: string;
    openMenuAria: string;
    closeMenuAria: string;
  }
> = {
  es: {
    servicesButton: 'Servicios',
    servicesOverview: 'Ver resumen en inicio',
    contactButton: 'Contacto',
    mobileNavAria: 'Navegación móvil',
    openMenuAria: 'Abrir menú',
    closeMenuAria: 'Cerrar menú',
  },
  en: {
    servicesButton: 'Services',
    servicesOverview: 'View overview on home',
    contactButton: 'Contact',
    mobileNavAria: 'Mobile navigation',
    openMenuAria: 'Open menu',
    closeMenuAria: 'Close menu',
  },
  pt: {
    servicesButton: 'Serviços',
    servicesOverview: 'Ver resumo no início',
    contactButton: 'Contato',
    mobileNavAria: 'Navegação móvel',
    openMenuAria: 'Abrir menu',
    closeMenuAria: 'Fechar menu',
  },
};

export const FOOTER_COPY: Record<
  Locale,
  {
    tagline: string;
    companyTitle: string;
    servicesTitle: string;
    talkTitle: string;
    talkSubtitle: string;
    whatsappCta: string;
    rightsReserved: string;
    trustEngineering: string;
  }
> = {
  es: {
    tagline: 'Ingeniería de software de alta precisión para un mundo interconectado.',
    companyTitle: 'Empresa',
    servicesTitle: 'Servicios',
    talkTitle: 'Hablemos',
    talkSubtitle: 'Cuéntenos qué necesita construir, mejorar o automatizar.',
    whatsappCta: 'Escribir por WhatsApp',
    rightsReserved: 'Todos los derechos reservados.',
    trustEngineering: 'Ingeniería de confianza.',
  },
  en: {
    tagline: 'High-precision software engineering for an interconnected world.',
    companyTitle: 'Company',
    servicesTitle: 'Services',
    talkTitle: "Let's Talk",
    talkSubtitle: 'Tell us what you need to build, optimize, or automate.',
    whatsappCta: 'Message on WhatsApp',
    rightsReserved: 'All rights reserved.',
    trustEngineering: 'Engineering you can trust.',
  },
  pt: {
    tagline: 'Engenharia de software de alta precisão para um mundo interconectado.',
    companyTitle: 'Empresa',
    servicesTitle: 'Serviços',
    talkTitle: 'Vamos Conversar',
    talkSubtitle: 'Conte-nos o que você precisa construir, melhorar ou automatizar.',
    whatsappCta: 'Falar no WhatsApp',
    rightsReserved: 'Todos os direitos reservados.',
    trustEngineering: 'Engenharia de confiança.',
  },
};

