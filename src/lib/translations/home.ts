import type { Locale } from '../i18n';

export interface HomeTranslation {
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  capacities: {
    title: string;
    subtitle: string;
    cards: {
      digital: {
        category: string;
        title: string;
        description: string;
        features: string[];
        cta: string;
      };
      ai: {
        category: string;
        title: string;
        description: string;
        features: string[];
        cta: string;
      };
      cyberphysical: {
        category: string;
        title: string;
        description: string;
        features: string[];
        cta: string;
      };
      infrastructure: {
        category: string;
        title: string;
        description: string;
        features: string[];
        cta: string;
      };
    };
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      description: string;
    }[];
  };
  stats: { value: string; label: string }[];
  ctaBanner: {
    title: string;
    description: string;
    button: string;
  };
}

export const HOME_TRANSLATIONS: Record<Locale, HomeTranslation> = {
  es: {
    hero: {
      badge: 'Ingeniería de confianza desde 2015',
      title: 'Software, inteligencia artificial e IoT para transformar su operación',
      description:
        'Diseñamos plataformas SaaS, aplicaciones web, automatizaciones con IA y sistemas conectados con hardware. Acompañamos cada proyecto desde la idea hasta su operación.',
      primaryCta: 'Solicitar una consulta',
      secondaryCta: 'Ver servicios',
      imageAlt: 'Soluciones digitales empresariales',
    },
    capacities: {
      title: 'Capacidades para resolver retos reales',
      subtitle:
        'Integramos software, datos e ingeniería para construir soluciones útiles, seguras y preparadas para crecer.',
      cards: {
        digital: {
          category: 'Desarrollo digital',
          title: 'Plataformas web y sistemas a la medida',
          description:
            'Aplicaciones web rápidas, portales empresariales y plataformas SaaS diseñadas para escalar con su negocio.',
          features: [
            'Sistemas SaaS y aplicaciones web',
            'Arquitectura escalable en la nube',
            'Integración con APIs y pasarelas',
            'Código limpio y mantenible',
          ],
          cta: 'Ver desarrollo web',
        },
        ai: {
          category: 'IA y datos',
          title: 'Modelos aplicados a operaciones reales',
          description:
            'Automatización de procesos, agentes inteligentes y analítica predictiva para optimizar la toma de decisiones.',
          features: [
            'Agentes autónomos y chatbots',
            'Procesamiento de documentos y texto',
            'Automatización de flujos repetitivos',
            'Seguridad y privacidad de datos',
          ],
          cta: 'Ver soluciones de IA',
        },
        cyberphysical: {
          category: 'Sistemas ciberfísicos',
          title: 'Integración con sensores, hardware y planta',
          description:
            'Puentes entre el mundo digital y físico: telemetría, monitoreo industrial y control en tiempo real.',
          features: [
            'Adquisición de datos en tiempo real',
            'Telemetría y monitoreo remoto',
            'Integración con PLCs y controladores',
            'Diseño de interfaces operativas',
          ],
          cta: 'Ver sistemas ciberfísicos',
        },
        infrastructure: {
          category: 'Infraestructura y soporte',
          title: 'Disponibilidad, seguridad y evolución continua',
          description:
            'Alojamiento optimizado, monitoreo proactivo y respaldo técnico para mantener sus plataformas siempre operativas.',
          features: [
            'Hosting gestionado de alta disponibilidad',
            'Copias de seguridad automatizadas',
            'Monitoreo 24/7 de servicios',
            'Soporte técnico y mantenimiento',
          ],
          cta: 'Ver planes de hosting',
        },
      },
    },
    process: {
      eyebrow: 'Metodología',
      title: 'Cómo trabajamos: rigor técnico y entregas claras',
      subtitle:
        'Un proceso transparente y disciplinado que minimiza riesgos técnicos y asegura resultados medibles.',
      steps: [
        {
          step: '01',
          title: 'Diagnóstico y arquitectura',
          description:
            'Analizamos el reto técnico, definimos requerimientos claros y trazamos una ruta técnica viable con entregables periódicos.',
        },
        {
          step: '02',
          title: 'Desarrollo iterativo',
          description:
            'Construimos la solución en ciclos cortos con entregas verificables, pruebas rigurosas y comunicación transparente.',
        },
        {
          step: '03',
          title: 'Despliegue y acompañamiento',
          description:
            'Ponemos la solución en producción, capacitamos a su equipo y brindamos monitoreo continuo para garantizar estabilidad.',
        },
      ],
    },
    stats: [
      { value: '+11', label: 'Años de trayectoria' },
      { value: '100%', label: 'Código propietario' },
      { value: '+40', label: 'Soluciones implementadas' },
      { value: '24/7', label: 'Monitoreo de infraestructura' },
    ],
    ctaBanner: {
      title: '¿Tiene un reto técnico o una idea por desarrollar?',
      description:
        'Cuéntenos su proyecto. Analizaremos su viabilidad técnica y le presentaremos una propuesta clara sin compromiso.',
      button: 'Conversar con un ingeniero',
    },
  },
  en: {
    hero: {
      badge: 'Engineering you can trust since 2015',
      title: 'Software, artificial intelligence, and IoT to transform your operations',
      description:
        'We engineer SaaS platforms, modern web applications, AI automation, and hardware-connected systems. We partner with you from initial idea to live operation.',
      primaryCta: 'Request a consultation',
      secondaryCta: 'Explore services',
      imageAlt: 'Enterprise digital engineering solutions',
    },
    capacities: {
      title: 'Capabilities built for real-world challenges',
      subtitle:
        'We bring together software, data, and engineering discipline to build practical, secure, and future-ready platforms.',
      cards: {
        digital: {
          category: 'Digital Development',
          title: 'Web platforms and custom systems',
          description:
            'Ultra-fast web applications, enterprise portals, and SaaS platforms engineered to scale seamlessly with your organization.',
          features: [
            'SaaS platforms and web apps',
            'Scalable cloud architecture',
            'API and payment gateway integration',
            'Clean, maintainable source code',
          ],
          cta: 'Explore web development',
        },
        ai: {
          category: 'AI & Data',
          title: 'Applied models for real-world operations',
          description:
            'Workflow automation, intelligent autonomous agents, and predictive analytics to enhance decision-making.',
          features: [
            'Autonomous agents and chatbots',
            'Document and NLP processing',
            'Automated repetitive pipelines',
            'Enterprise privacy and data security',
          ],
          cta: 'Explore AI solutions',
        },
        cyberphysical: {
          category: 'Cyber-Physical Systems',
          title: 'Sensors, hardware, and shop-floor integration',
          description:
            'Bridging the physical and digital worlds: telemetry, industrial monitoring, and real-time operational control.',
          features: [
            'Real-time data acquisition',
            'Remote telemetry and monitoring',
            'PLC and controller integration',
            'Custom SCADA and operational UI',
          ],
          cta: 'Explore cyber-physical systems',
        },
        infrastructure: {
          category: 'Infrastructure & Support',
          title: 'High availability, security, and continuous evolution',
          description:
            'Optimized hosting, proactive monitoring, and expert technical support to keep your platforms running smoothly.',
          features: [
            'High-availability managed hosting',
            'Automated redundant backups',
            '24/7 service uptime monitoring',
            'Dedicated maintenance and SLA support',
          ],
          cta: 'Explore hosting plans',
        },
      },
    },
    process: {
      eyebrow: 'Methodology',
      title: 'How we work: technical rigor and clear milestones',
      subtitle:
        'A disciplined and transparent delivery process designed to minimize technical risk and guarantee measurable outcomes.',
      steps: [
        {
          step: '01',
          title: 'Diagnosis & Architecture',
          description:
            'We assess technical requirements, scope business needs, and design a viable roadmap with well-defined delivery milestones.',
        },
        {
          step: '02',
          title: 'Iterative Development',
          description:
            'We build solutions in rapid agile cycles featuring verifiable deliverables, rigorous testing, and continuous feedback.',
        },
        {
          step: '03',
          title: 'Deployment & Support',
          description:
            'We launch into production, train your key team members, and provide proactive monitoring to ensure ongoing stability.',
        },
      ],
    },
    stats: [
      { value: '+11', label: 'Years of experience' },
      { value: '100%', label: 'Proprietary codebase' },
      { value: '+40', label: 'Implemented solutions' },
      { value: '24/7', label: 'Infrastructure monitoring' },
    ],
    ctaBanner: {
      title: 'Do you have a technical challenge or an idea to build?',
      description:
        'Tell us about your project. We will evaluate technical feasibility and provide a transparent roadmap without obligation.',
      button: 'Speak with an engineer',
    },
  },
  pt: {
    hero: {
      badge: 'Engenharia de confiança desde 2015',
      title: 'Software, inteligência artificial e IoT para transformar sua operação',
      description:
        'Projetamos plataformas SaaS, aplicações web modernas, automação com IA e sistemas integrados com hardware. Acompanhamos cada projeto da ideia à operação.',
      primaryCta: 'Solicitar uma consulta',
      secondaryCta: 'Ver serviços',
      imageAlt: 'Soluções digitais empresariais',
    },
    capacities: {
      title: 'Capacidades desenvolvidas para desafios reais',
      subtitle:
        'Unimos software, dados e engenharia para construir soluções úteis, seguras e preparadas para crescer.',
      cards: {
        digital: {
          category: 'Desenvolvimento digital',
          title: 'Plataformas web e sistemas sob medida',
          description:
            'Aplicações web rápidas, portais corporativos e plataformas SaaS projetadas para escalar com seu negócio.',
          features: [
            'Sistemas SaaS e aplicações web',
            'Arquitetura em nuvem escalável',
            'Integração com APIs e gateways',
            'Código limpo e sustentável',
          ],
          cta: 'Ver desenvolvimento web',
        },
        ai: {
          category: 'IA e dados',
          title: 'Modelos aplicados a operações reais',
          description:
            'Automação de processos, agentes inteligentes e análise preditiva para otimizar tomadas de decisão.',
          features: [
            'Agentes autônomos e chatbots',
            'Processamento de documentos e textos',
            'Automação de fluxos repetitivos',
            'Segurança e privacidade de dados',
          ],
          cta: 'Ver soluções de IA',
        },
        cyberphysical: {
          category: 'Sistemas ciberfísicos',
          title: 'Integração com sensores, hardware e chão de fábrica',
          description:
            'Pontes entre o mundo digital e físico: telemetria, monitoramento industrial e controle em tempo real.',
          features: [
            'Aquisição de dados em tempo real',
            'Telemetria e monitoramento remoto',
            'Integração com PLCs e controladores',
            'Design de interfaces operacionais',
          ],
          cta: 'Ver sistemas ciberfísicos',
        },
        infrastructure: {
          category: 'Infraestrutura e suporte',
          title: 'Disponibilidade, segurança e evolução contínua',
          description:
            'Hospedagem otimizada, monitoramento proativo e suporte técnico contínuo para manter suas plataformas ativas.',
          features: [
            'Hospedagem gerenciada de alta disponibilidade',
            'Backups automatizados e redundantes',
            'Monitoramento 24/7 de serviços',
            'Suporte técnico e manutenção contínua',
          ],
          cta: 'Ver planos de hospedagem',
        },
      },
    },
    process: {
      eyebrow: 'Metodologia',
      title: 'Como trabalhamos: rigor técnico e entregas claras',
      subtitle:
        'Um processo transparente e disciplinado que reduz riscos técnicos e assegura resultados mensuráveis.',
      steps: [
        {
          step: '01',
          title: 'Diagnóstico e arquitetura',
          description:
            'Analisamos os desafios técnicos, definimos requisitos claros e traçamos um roteiro viável com marcos periódicos.',
        },
        {
          step: '02',
          title: 'Desenvolvimento iterativo',
          description:
            'Construímos a solução em ciclos curtos com entregas verificáveis, testes rigorosos e comunicação transparente.',
        },
        {
          step: '03',
          title: 'Implantação e acompanhamento',
          description:
            'Colocamos a solução em produção, treinamos sua equipe e fornecemos monitoramento contínuo para garantir estabilidade.',
        },
      ],
    },
    stats: [
      { value: '+11', label: 'Anos de trajetória' },
      { value: '100%', label: 'Código proprietário' },
      { value: '+40', label: 'Soluções implementadas' },
      { value: '24/7', label: 'Monitoramento de infraestrutura' },
    ],
    ctaBanner: {
      title: 'Você tem um desafio técnico ou uma ideia para desenvolver?',
      description:
        'Conte-nos sobre o seu projeto. Avaliaremos a viabilidade técnica e apresentaremos uma proposta clara e sem compromisso.',
      button: 'Conversar com um engenheiro',
    },
  },
};

