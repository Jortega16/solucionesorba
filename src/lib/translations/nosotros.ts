import type { Locale } from '../i18n';

export interface NosotrosTranslation {
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  pillars: {
    responsibleTitle: string;
    responsibleDescription: string;
    responsibleBadge: string;
    customTitle: string;
    purposeTitle: string;
    purposeDescription: string;
    supportTitle: string;
    supportDescription: string;
  };
  quote: {
    text: string;
    author: string;
  };
}

export const NOSOTROS_TRANSLATIONS: Record<Locale, NosotrosTranslation> = {
  es: {
    eyebrow: 'Trayectoria',
    heroTitle: 'Experiencia tecnológica desde 2015',
    heroDescription:
      'Desde 2015, hemos acompañado a empresas, emprendedores y organizaciones en el desarrollo de soluciones tecnológicas orientadas a resultados.',
    pillars: {
      responsibleTitle: 'Ingeniería responsable',
      responsibleDescription:
        'Diseñamos soluciones con criterios técnicos claros, documentación y atención a la estabilidad de su operación.',
      responsibleBadge: 'Más de 11 años de trayectoria',
      customTitle: 'Ingeniería a Medida',
      purposeTitle: 'Innovación con propósito',
      purposeDescription:
        'No adoptamos tecnologías por moda: seleccionamos herramientas probadas, eficientes y seguras que generen valor real.',
      supportTitle: 'Acompañamiento continuo',
      supportDescription:
        'No nos limitamos a entregar código: nos involucramos en el mantenimiento, la evolución y el rendimiento de cada sistema.',
    },
    quote: {
      text: 'Creemos en la ingeniería honesta: software bien construido, datos transparentes y tecnología que realmente solucione problemas.',
      author: '— Equipo de Soluciones Orba',
    },
  },
  en: {
    eyebrow: 'Track Record',
    heroTitle: 'Engineering excellence since 2015',
    heroDescription:
      'Since 2015, we have partnered with enterprises, fast-growing companies, and organizations to engineer software and data platforms focused on tangible results.',
    pillars: {
      responsibleTitle: 'Responsible Engineering',
      responsibleDescription:
        'We design systems with clear technical benchmarks, comprehensive documentation, and unwavering operational reliability.',
      responsibleBadge: 'Over 11 years of experience',
      customTitle: 'Tailored Engineering',
      purposeTitle: 'Purposeful Innovation',
      purposeDescription:
        'We never chase tech hype: we select field-tested, robust, and secure tools that deliver measurable enterprise value.',
      supportTitle: 'Continuous Partnership',
      supportDescription:
        'We go far beyond delivering code: we remain actively involved in maintaining, scaling, and optimizing every system.',
    },
    quote: {
      text: 'We believe in honest engineering: cleanly constructed software, verifiable data, and technology that truly solves real problems.',
      author: '— The Soluciones Orba Team',
    },
  },
  pt: {
    eyebrow: 'Trajetória',
    heroTitle: 'Experiência tecnológica desde 2015',
    heroDescription:
      'Desde 2015, acompanhamos empresas, empreendedores e organizações no desenvolvimento de soluções tecnológicas orientadas a resultados.',
    pillars: {
      responsibleTitle: 'Engenharia Responsável',
      responsibleDescription:
        'Projetamos soluções com critérios técnicos rigorosos, documentação completa e foco na estabilidade da sua operação.',
      responsibleBadge: 'Mais de 11 anos de trajetória',
      customTitle: 'Engenharia sob Medida',
      purposeTitle: 'Inovação com Propósito',
      purposeDescription:
        'Não adotamos tecnologias por modismos: escolhemos ferramentas consolidadas, eficientes e seguras que geram valor real.',
      supportTitle: 'Acompanhamento Contínuo',
      supportDescription:
        'Não nos limitamos a entregar código: envolvemo-nos na manutenção, evolução contínua e performance de cada sistema.',
    },
    quote: {
      text: 'Acreditamos em uma engenharia honesta: software bem estruturado, dados transparentes e tecnologia que realmente resolve problemas.',
      author: '— Equipe Soluciones Orba',
    },
  },
};

