import type { Locale } from '../i18n';
import type { PageSlug } from '../site';

export interface LocalizedMeta {
  title: string;
  description: string;
}

export const LOCALIZED_PAGE_META: Record<PageSlug, Record<Locale, LocalizedMeta>> = {
  inicio: {
    es: {
      title: 'Ingeniería de confianza',
      description:
        'Desarrollo de software, inteligencia artificial e IoT para automatizar y hacer crecer empresas en Costa Rica y Latinoamérica.',
    },
    en: {
      title: 'Engineering You Can Trust',
      description:
        'Custom software development, artificial intelligence, and IoT to automate and scale enterprise operations.',
    },
    pt: {
      title: 'Engenharia de Confiança',
      description:
        'Desenvolvimento de software, inteligência artificial e IoT para automatizar e expandir operações empresariais.',
    },
  },
  'desarrollo-web': {
    es: {
      title: 'Desarrollo web',
      description: 'Páginas web modernas, rápidas y seguras para fortalecer su presencia digital.',
    },
    en: {
      title: 'Web Development',
      description: 'Modern, high-performance, and secure web applications to elevate your digital presence.',
    },
    pt: {
      title: 'Desenvolvimento Web',
      description: 'Páginas web modernas, rápidas e seguras para fortalecer sua presença digital.',
    },
  },
  plataformas: {
    es: {
      title: 'Plataformas a la medida',
      description: 'Plataformas personalizadas para empresas: portales, herramientas internas y más.',
    },
    en: {
      title: 'Custom Software Platforms',
      description: 'Tailored enterprise platforms: portals, internal management tools, and SaaS architectures.',
    },
    pt: {
      title: 'Plataformas sob Medida',
      description: 'Plataformas empresariais personalizadas: portais, ferramentas internas e sistemas de gestão.',
    },
  },
  'inteligencia-artificial': {
    es: {
      title: 'Inteligencia artificial',
      description: 'Agentes de IA, chatbots y automatización para optimizar su operación.',
    },
    en: {
      title: 'Artificial Intelligence',
      description: 'Autonomous AI agents, chatbots, and pipeline automation to streamline operations.',
    },
    pt: {
      title: 'Inteligência Artificial',
      description: 'Agentes autônomos de IA, chatbots e automação inteligente para otimizar operações.',
    },
  },
  'ciencia-de-datos': {
    es: {
      title: 'Ciencia de datos',
      description: 'Analítica y modelos predictivos para mejores decisiones de negocio.',
    },
    en: {
      title: 'Data Science & Analytics',
      description: 'Advanced analytics, predictive modeling, and executive intelligence dashboards.',
    },
    pt: {
      title: 'Ciência de Dados',
      description: 'Análise avançada e modelos preditivos para decisões estratégicas embasadas.',
    },
  },
  'sistemas-ciberfisicos': {
    es: {
      title: 'Sistemas ciberfísicos',
      description: 'Integración de software, hardware, sensores e IoT industrial.',
    },
    en: {
      title: 'Cyber-Physical Systems',
      description: 'Industrial IoT integration bridging hardware sensors, telemetry, and software control.',
    },
    pt: {
      title: 'Sistemas Ciberfísicos',
      description: 'Integração de software, sensores conectados, hardware e IoT industrial.',
    },
  },
  'control-automatizacion': {
    es: {
      title: 'Control y automatización',
      description: 'Automatización de procesos, control de variables y monitoreo remoto.',
    },
    en: {
      title: 'Control & Automation',
      description: 'Process automation, SCADA systems, variable control, and 24/7 remote monitoring.',
    },
    pt: {
      title: 'Controle e Automação',
      description: 'Automação industrial, controle de processos e monitoramento remoto em tempo real.',
    },
  },
  prototipado: {
    es: {
      title: 'Prototipado tecnológico',
      description: 'Prototipos funcionales y pruebas de concepto para validar ideas.',
    },
    en: {
      title: 'Prototyping & MVPs',
      description: 'Functional proof of concepts and rapid prototyping to validate technological ideas.',
    },
    pt: {
      title: 'Prototipagem Tecnológica',
      description: 'Protótipos funcionais e provas de conceito para validação rápida de soluções.',
    },
  },
  'plugins-wordpress': {
    es: {
      title: 'Plugins para WordPress',
      description: 'Plugins personalizados para WordPress con rendimiento y escalabilidad.',
    },
    en: {
      title: 'WordPress Plugin Development',
      description: 'High-performance, secure, and custom WordPress plugins engineered for scale.',
    },
    pt: {
      title: 'Plugins para WordPress',
      description: 'Plugins sob medida para WordPress com foco em alto desempenho e segurança.',
    },
  },
  hosting: {
    es: {
      title: 'Hosting administrado',
      description: 'Hosting administrado para sitios web y plataformas con soporte especializado.',
    },
    en: {
      title: 'Managed Cloud Hosting',
      description: 'Resilient cloud hosting for mission-critical web applications with proactive management.',
    },
    pt: {
      title: 'Hospedagem Gerenciada',
      description: 'Hospedagem em nuvem de alta confiabilidade para sites e plataformas com suporte técnico.',
    },
  },
  soporte: {
    es: {
      title: 'Soporte técnico',
      description: 'Soporte técnico especializado para web, plataformas e infraestructura.',
    },
    en: {
      title: 'Technical Support & SLA',
      description: 'Specialized enterprise maintenance, security patching, and ongoing platform support.',
    },
    pt: {
      title: 'Suporte Técnico',
      description: 'Manutenção técnica especializada, atualizações e assistência contínua.',
    },
  },
  nosotros: {
    es: {
      title: 'Nosotros',
      description: 'Experiencia tecnológica desde 2015. Conozca al equipo de Soluciones Orba.',
    },
    en: {
      title: 'About Us',
      description: 'Technological engineering excellence since 2015. Meet the team behind Soluciones Orba.',
    },
    pt: {
      title: 'Sobre Nós',
      description: 'Trajetória e excelência técnica desde 2015. Conheça a Soluciones Orba.',
    },
  },
  contacto: {
    es: {
      title: 'Contacto',
      description: 'Cuéntenos qué necesita desarrollar, mejorar o automatizar. Respondemos en un día hábil.',
    },
    en: {
      title: 'Contact Us',
      description: 'Tell us about your project requirements. An engineer will follow up within one business day.',
    },
    pt: {
      title: 'Contato',
      description: 'Conte-nos o que você precisa construir ou automatizar. Retornamos em até um dia útil.',
    },
  },
  proyectos: {
    es: {
      title: 'Proyectos',
      description: 'Casos de éxito y soluciones desarrolladas para nuestros clientes.',
    },
    en: {
      title: 'Projects Portfolio',
      description: 'Case studies, proprietary platforms, and delivered engineering solutions.',
    },
    pt: {
      title: 'Portfólio de Projetos',
      description: 'Casos de sucesso, soluções próprias e plataformas desenvolvidas.',
    },
  },
  blog: {
    es: {
      title: 'Blog',
      description:
        'Artículos sobre desarrollo web, IA, automatización y tecnología para empresas.',
    },
    en: {
      title: 'Insights & Blog',
      description:
        'Articles on modern software architecture, AI automation, and technology trends for enterprises.',
    },
    pt: {
      title: 'Blog & Artigos',
      description:
        'Artigos sobre engenharia de software, IA, automação e tendências tecnológicas.',
    },
  },
};

