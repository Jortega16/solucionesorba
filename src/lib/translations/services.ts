import type { Locale } from '../i18n';

export const SERVICES_TRANSLATIONS: Record<
  Locale,
  {
    desarrolloWeb: {
      badge: string;
      title: string;
      titleAccent: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      solutionsTitle: string;
      cards: {
        corporateTitle: string;
        corporateDesc: string;
        corporateBullets: string[];
        landingTitle: string;
        landingDesc: string;
        ecommerceTitle: string;
        ecommerceDesc: string;
        responsiveTitle: string;
        responsiveDesc: string;
      };
      ctaTitle: string;
      ctaDesc: string;
      ctaButton: string;
    };
    inteligenciaArtificial: {
      badge: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      sectionTitle: string;
      cards: {
        agentsTitle: string;
        agentsDesc: string;
        chatbotsTitle: string;
        chatbotsDesc: string;
        nlpTitle: string;
        nlpDesc: string;
        integrationTitle: string;
        integrationDesc: string;
      };
      ctaTitle: string;
      ctaDesc: string;
      ctaButton: string;
    };
    sistemasCiberfisicos: {
      badge: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      sectionTitle: string;
      cards: {
        telemetryTitle: string;
        telemetryDesc: string;
        iotTitle: string;
        iotDesc: string;
        scadaTitle: string;
        scadaDesc: string;
      };
      ctaTitle: string;
      ctaDesc: string;
      ctaButton: string;
    };
    hosting: {
      badge: string;
      title: string;
      description: string;
      sectionTitle: string;
      features: { title: string; desc: string }[];
      ctaTitle: string;
      ctaDesc: string;
      ctaButton: string;
    };
    soporte: {
      title: string;
      description: string;
      sectionTitle: string;
      features: { title: string; desc: string }[];
      ctaTitle: string;
      ctaDesc: string;
      ctaButton: string;
    };
    plataformas: {
      badge: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      sectionTitle: string;
      features: { title: string; desc: string }[];
      ctaTitle: string;
      ctaDesc: string;
      ctaButton: string;
    };
    cienciaDeDatos: {
      badge: string;
      title: string;
      titleAccent: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      sectionTitle: string;
      items: { icon: string; title: string; text: string }[];
      ctaTitle: string;
      ctaDesc: string;
      ctaButton: string;
    };
    controlAutomatizacion: {
      title: string;
      description: string;
      primaryCta: string;
      sectionTitle: string;
      items: string[];
      ctaTitle: string;
      ctaDesc: string;
      ctaButton: string;
    };
    pluginsWordpress: {
      badge: string;
      title: string;
      description: string;
      primaryCta: string;
      sectionTitle: string;
      items: { title: string; desc: string }[];
      ctaTitle: string;
      ctaDesc: string;
      ctaButton: string;
    };
    prototipado: {
      badge: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      sectionTitle: string;
      items: { title: string; text: string }[];
      ctaTitle: string;
      ctaDesc: string;
      ctaButton: string;
    };
  }
> = {
  es: {
    desarrolloWeb: {
      badge: 'Experiencia digital',
      title: 'Desarrollo de páginas web',
      titleAccent: 'modernas y funcionales',
      description:
        'Diseñamos y desarrollamos páginas web profesionales, rápidas, seguras y adaptadas a todo tipo de dispositivos para fortalecer su presencia digital.',
      primaryCta: 'Empezar proyecto',
      secondaryCta: 'Ver portafolio',
      solutionsTitle: 'Soluciones Especializadas',
      cards: {
        corporateTitle: 'Sitios Corporativos',
        corporateDesc:
          'Arquitecturas robustas diseñadas para representar la identidad de su empresa con profesionalismo y escalabilidad.',
        corporateBullets: ['Multi-idioma', 'SEO Optimizado', 'CMS Intuitivo', 'Seguridad SSL'],
        landingTitle: 'Páginas de aterrizaje',
        landingDesc:
          'Diseñadas específicamente para la conversión y el retorno de inversión publicitaria.',
        ecommerceTitle: 'Comercio electrónico',
        ecommerceDesc:
          'Tiendas online con pasarelas de pago integradas y gestión de inventario eficiente.',
        responsiveTitle: 'Diseño Responsivo e Integración',
        responsiveDesc:
          'Adaptabilidad total en smartphones, tablets y ordenadores. Integración perfecta con sus herramientas de CRM y analítica.',
      },
      ctaTitle: '¿Listo para transformar su presencia en línea?',
      ctaDesc:
        'Solicite una auditoría gratuita de su sitio actual o una cotización para su nuevo proyecto.',
      ctaButton: 'Consultoría Gratuita',
    },
    inteligenciaArtificial: {
      badge: 'Inteligencia Artificial',
      title: 'Agentes de inteligencia artificial para automatizar procesos',
      description:
        'Implementamos soluciones de inteligencia artificial que ayudan a automatizar tareas, mejorar la atención al cliente, procesar información y optimizar operaciones internas.',
      primaryCta: 'Solicitar demo',
      secondaryCta: 'Ver proyectos',
      sectionTitle: 'Capacidades de IA Aplicada',
      cards: {
        agentsTitle: 'Agentes Autónomos',
        agentsDesc:
          'Sistemas capaces de ejecutar flujos de trabajo de múltiples pasos de forma independiente.',
        chatbotsTitle: 'Chatbots Inteligentes',
        chatbotsDesc:
          'Atención al cliente 24/7 con entendimiento contextual y respuestas fundamentadas.',
        nlpTitle: 'Procesamiento de Documentos',
        nlpDesc:
          'Extracción y análisis automatizado de facturas, contratos y expedientes.',
        integrationTitle: 'Integración Empresarial',
        integrationDesc:
          'Conexión segura con ERPs, CRMs y bases de datos corporativas con estricto control de acceso.',
      },
      ctaTitle: '¿Desea incorporar inteligencia artificial en su negocio?',
      ctaDesc:
        'Evaluemos juntos los casos de uso con mayor impacto operativo y retorno de inversión.',
      ctaButton: 'Agendar Sesión Técnica',
    },
    sistemasCiberfisicos: {
      badge: 'Sistemas Ciberfísicos e IoT',
      title: 'Integración de hardware, sensores y software en tiempo real',
      description:
        'Conectamos el mundo físico con plataformas digitales para monitoreo industrial, telemetría y control automatizado de infraestructura.',
      primaryCta: 'Consultar viabilidad',
      secondaryCta: 'Ver soluciones',
      sectionTitle: 'Integración Industrial Confiable',
      cards: {
        telemetryTitle: 'Telemetría y Adquisición',
        telemetryDesc:
          'Lectura continua de variables críticas: temperatura, presión, energía y estado operativo.',
        iotTitle: 'Dispositivos Conectados',
        iotDesc:
          'Diseño de firmware y conectividad segura mediante MQTT, HTTP y protocolos industriales.',
        scadaTitle: 'Paneles de Supervisión SCADA',
        scadaDesc:
          'Visualización intuitiva en tiempo real con alertas tempranas y registro histórico auditado.',
      },
      ctaTitle: '¿Busca conectar maquinaria o infraestructura a la nube?',
      ctaDesc:
        'Diseñamos soluciones robustas preparadas para condiciones operativas exigentes.',
      ctaButton: 'Solicitar Asesoría de Hardware',
    },
    hosting: {
      badge: 'Infraestructura y estabilidad',
      title: 'Hosting confiable para sitios web y plataformas',
      description:
        'Ofrecemos infraestructura administrada, certificados SSL, respaldos y acompañamiento técnico para mantener sitios web y plataformas estables y protegidos.',
      sectionTitle: 'Infraestructura Diseñada para la Disponibilidad',
      features: [
        { title: 'Alta Disponibilidad', desc: 'Servidores con redundancia y monitoreo continuo de uptime.' },
        { title: 'Copias de Seguridad Diarias', desc: 'Respaldos automatizados para garantizar recuperación inmediata.' },
        { title: 'Certificados SSL y Blindaje', desc: 'Protección con HTTPS, cortafuegos web y mitigación de ataques.' },
        { title: 'Soporte Técnico Directo', desc: 'Atención personalizada sin intermediarios ni sistemas de tickets lentos.' },
      ],
      ctaTitle: '¿Necesita migrar o mejorar su infraestructura actual?',
      ctaDesc:
        'Nos encargamos de la migración completa con cero tiempo de inactividad garantizado.',
      ctaButton: 'Solicitar Migración Gratuita',
    },
    soporte: {
      title: 'Soporte técnico especializado',
      description:
        'Mantenimiento, actualizaciones y resolución de incidencias para sitios web, plataformas e infraestructura crítica de su negocio.',
      sectionTitle: 'Planes de Soporte y Continuidad Operativa',
      features: [
        { title: 'Mantenimiento Preventivo', desc: 'Actualización periódica de dependencias, parches de seguridad y auditorías.' },
        { title: 'Resolución Rápida de Incidencias', desc: 'Tiempos de respuesta garantizados por acuerdo de nivel de servicio (SLA).' },
        { title: 'Optimización Continua', desc: 'Monitoreo de rendimiento, consumo de recursos y tiempos de carga.' },
        { title: 'Asistencia y Capacitación', desc: 'Acompañamiento a su equipo operativo en el uso de las plataformas.' },
      ],
      ctaTitle: 'Mantenga sus plataformas seguras y actualizadas',
      ctaDesc:
        'Diseñamos esquemas de soporte adaptados a las necesidades reales de su organización.',
      ctaButton: 'Consultar Planes de Soporte',
    },
    plataformas: {
      badge: 'EFICIENCIA DISEÑADA',
      title: 'Desarrollo de plataformas personalizadas para su empresa',
      description:
        'Construimos plataformas digitales adaptadas a los procesos, necesidades y objetivos específicos de cada negocio. Transformamos la complejidad técnica en fluidez operativa.',
      primaryCta: 'Cotizar plataforma',
      secondaryCta: 'Ver proyectos',
      sectionTitle: 'Ingeniería de Software a Medida',
      features: [
        { title: 'Portales y Herramientas B2B', desc: 'Gestión centralizada de clientes, pedidos, cotizaciones y flujos comerciales.' },
        { title: 'Arquitectura SaaS Multi-inquilino', desc: 'Diseño preparado para comercializar su software como servicio con alta escalabilidad.' },
        { title: 'Integración de Procesos Internos', desc: 'Automatización entre departamentos eliminando tareas manuales y hojas de cálculo desactualizadas.' },
        { title: 'Seguridad y Trazabilidad Total', desc: 'Control granular de permisos por roles, registro de auditoría y cifrado de datos.' },
      ],
      ctaTitle: '¿Tiene un proceso que necesita su propio sistema?',
      ctaDesc:
        'Revisemos juntos los requerimientos técnicos y preparemos un prototipo inicial.',
      ctaButton: 'Iniciar Conversación',
    },
    cienciaDeDatos: {
      badge: 'CIENCIA DE DATOS',
      title: 'Ciencia de datos y analítica para tomar',
      titleAccent: 'mejores decisiones',
      description:
        'Transformamos datos dispersos en paneles claros, modelos predictivos y métricas operativas accionables para la dirección de su negocio.',
      primaryCta: 'Solicitar diagnóstico de datos',
      secondaryCta: 'Ver casos de uso',
      sectionTitle: 'Capacidades Analíticas',
      items: [
        { icon: 'monitoring', title: 'Dashboards en Tiempo Real', text: 'Visualización clara de KPIs críticos.' },
        { icon: 'model_training', title: 'Modelos Predictivos', text: 'Anticipamos tendencias y comportamientos de demanda.' },
        { icon: 'description', title: 'Reportes Automatizados', text: 'Información lista para tomar decisiones sin esfuerzo manual.' },
        { icon: 'bubble_chart', title: 'Visualización de Datos', text: 'Transformamos datos complejos en insights comprensibles.' },
      ],
      ctaTitle: '¿Sus datos están listos para generar valor?',
      ctaDesc:
        'Conectemos sus fuentes de información y descubramos oportunidades de optimización.',
      ctaButton: 'Analizar Fuentes de Datos',
    },
    controlAutomatizacion: {
      title: 'Sistemas de control y automatización',
      description:
        'Diseñamos e implementamos sistemas de control industrial, automatización de procesos y monitoreo remoto para optimizar la producción y reducir errores operativos.',
      primaryCta: 'Solicitar evaluación',
      sectionTitle: 'Especialidades de Automatización',
      items: [
        'Automatización de procesos industriales',
        'Sistemas SCADA y supervisión de planta',
        'Control de variables críticas en tiempo real',
        'Integración con PLCs y sensores industriales',
      ],
      ctaTitle: 'Automatice su operación con respaldo de ingeniería',
      ctaDesc:
        'Evaluamos sus procesos en planta o instalaciones para proponer la solución más costo-eficiente.',
      ctaButton: 'Agendar Visita Técnica',
    },
    pluginsWordpress: {
      badge: 'Arquitectura WordPress',
      title: 'Desarrollo de plugins personalizados para WordPress',
      description:
        'Desarrollamos plugins personalizados para WordPress que permiten ampliar las funcionalidades de sitios web, tiendas en línea y plataformas digitales con enfoque en rendimiento y escalabilidad.',
      primaryCta: 'Cotizar plugin',
      sectionTitle: 'Nuestras Soluciones de Ingeniería',
      items: [
        { title: 'Extensiones y Funcionalidades a Medida', desc: 'Módulos únicos adaptados a su modelo de negocio sin sobrecargar el CMS.' },
        { title: 'Integración con Pasarelas y APIs', desc: 'Conexión con sistemas de facturación, CRMs y procesadores de pago locales.' },
        { title: 'Optimización de Rendimiento', desc: 'Código optimizado que respeta los estándares del Core de WordPress.' },
        { title: 'Mantenimiento y Compatibilidad', desc: 'Garantía de compatibilidad continua ante actualizaciones de WordPress y PHP.' },
      ],
      ctaTitle: '¿Necesita una función que ningún plugin existente ofrece?',
      ctaDesc:
        'Desarrollamos el plugin exacto que su negocio requiere, con código 100% propietario.',
      ctaButton: 'Solicitar Desarrollo de Plugin',
    },
    prototipado: {
      badge: 'Centro de innovación',
      title: 'Prototipado tecnológico para validar ideas',
      description:
        'Convertimos ideas en prototipos funcionales que permiten validar conceptos, probar tecnologías y evaluar soluciones antes de llevarlas a producción.',
      primaryCta: 'Solicitar consultoría I+D',
      secondaryCta: 'Ver casos de éxito',
      sectionTitle: 'Nuestros Servicios de I+D',
      items: [
        { title: 'Prototipos funcionales', text: 'Versiones operativas para validar mecánica, electrónica y experiencia de usuario.' },
        { title: 'Pruebas de concepto (PoC)', text: 'Validación técnica rápida de viabilidad de algoritmos, sensores y arquitecturas.' },
        { title: 'Diseño para manufactura', text: 'Preparación de esquemáticos, PCBs y especificaciones para producción en serie.' },
      ],
      ctaTitle: 'Valide su idea tecnológica con un prototipo real',
      ctaDesc:
        'Reduzca la incertidumbre técnica y acelere su llegada al mercado con entregables tangibles.',
      ctaButton: 'Iniciar Prototipo',
    },
  },
  en: {
    desarrolloWeb: {
      badge: 'Digital Experience',
      title: 'Web development with',
      titleAccent: 'modern performance and purpose',
      description:
        'We design and build secure, fast, and responsive corporate websites and web applications engineered to elevate your digital presence.',
      primaryCta: 'Start a project',
      secondaryCta: 'View portfolio',
      solutionsTitle: 'Specialized Solutions',
      cards: {
        corporateTitle: 'Corporate Websites',
        corporateDesc:
          'Robust digital architectures built to project your company identity with professionalism, elegance, and scale.',
        corporateBullets: ['Multilingual', 'SEO Optimized', 'Intuitive CMS', 'SSL Security'],
        landingTitle: 'High-Conversion Landing Pages',
        landingDesc:
          'Engineered specifically for campaign conversion and high marketing return on investment.',
        ecommerceTitle: 'E-Commerce Solutions',
        ecommerceDesc:
          'Digital stores with seamlessly integrated payment gateways and real-time inventory synchronization.',
        responsiveTitle: 'Responsive Design & API Integration',
        responsiveDesc:
          'Full adaptability across mobile, tablet, and desktop devices with seamless CRM and analytics integrations.',
      },
      ctaTitle: 'Ready to elevate your online presence?',
      ctaDesc:
        'Request a technical review of your existing site or an estimate for your upcoming digital project.',
      ctaButton: 'Free Technical Consultation',
    },
    inteligenciaArtificial: {
      badge: 'Artificial Intelligence',
      title: 'AI agents and automated pipelines to optimize your operations',
      description:
        'We implement applied artificial intelligence solutions that automate repetitive workflows, enhance customer support, and streamline internal operations.',
      primaryCta: 'Request a demo',
      secondaryCta: 'View projects',
      sectionTitle: 'Applied AI Capabilities',
      cards: {
        agentsTitle: 'Autonomous Agents',
        agentsDesc:
          'Intelligent systems capable of independently executing complex multi-step workflows.',
        chatbotsTitle: 'Grounded Enterprise Chatbots',
        chatbotsDesc:
          '24/7 intelligent assistance with verified domain context and natural language understanding.',
        nlpTitle: 'Automated Document Intelligence',
        nlpDesc:
          'Automated data extraction and semantic indexing of invoices, contracts, and legal files.',
        integrationTitle: 'Enterprise Integration',
        integrationDesc:
          'Secure connections with ERPs, CRMs, and internal databases with strict departmental governance.',
      },
      ctaTitle: 'Looking to incorporate AI into your business?',
      ctaDesc:
        "Let's identify the operational use cases with the highest return on investment and feasibility.",
      ctaButton: 'Schedule Technical Session',
    },
    sistemasCiberfisicos: {
      badge: 'Cyber-Physical Systems & IoT',
      title: 'Real-time hardware, sensors, and software integration',
      description:
        'We bridge the physical and digital worlds: industrial telemetry, real-time monitoring, and automated hardware control.',
      primaryCta: 'Check feasibility',
      secondaryCta: 'Explore solutions',
      sectionTitle: 'Industrial-Grade Integration',
      cards: {
        telemetryTitle: 'Telemetry & Data Acquisition',
        telemetryDesc:
          'Continuous monitoring of critical industrial variables: temperature, pressure, vibration, and power.',
        iotTitle: 'Connected Edge Devices',
        iotDesc:
          'Custom firmware development and secure protocols: MQTT, HTTP, and fieldbus standards.',
        scadaTitle: 'SCADA & Supervision Dashboards',
        scadaDesc:
          'Intuitive live dashboards with automated alerting and verifiable historical auditing.',
      },
      ctaTitle: 'Need to connect machinery or facility hardware to the cloud?',
      ctaDesc:
        'We build resilient systems designed to operate under demanding physical conditions.',
      ctaButton: 'Request Hardware Consultation',
    },
    hosting: {
      badge: 'Infrastructure & Resilience',
      title: 'Reliable cloud hosting for websites and mission-critical platforms',
      description:
        'We provide managed cloud infrastructure, automated SSL certificates, redundant backups, and hands-on technical support.',
      sectionTitle: 'Engineered for High Availability',
      features: [
        { title: 'High Availability', desc: 'Redundant infrastructure with 24/7 continuous uptime monitoring.' },
        { title: 'Automated Daily Backups', desc: 'Secure off-site backups ensuring immediate disaster recovery.' },
        { title: 'SSL Security & Hardening', desc: 'Automated HTTPS, enterprise Web Application Firewalls, and threat mitigation.' },
        { title: 'Direct Engineer Support', desc: 'Direct access to senior engineers without ticketing delays or bureaucracy.' },
      ],
      ctaTitle: 'Need to migrate or optimize your infrastructure?',
      ctaDesc:
        'We handle end-to-end zero-downtime migrations with guaranteed stability.',
      ctaButton: 'Request Free Migration',
    },
    soporte: {
      title: 'Specialized technical maintenance and support',
      description:
        'Continuous maintenance, security patching, and proactive incident resolution for mission-critical web applications.',
      sectionTitle: 'Support Plans & Operational Continuity',
      features: [
        { title: 'Preventive Maintenance', desc: 'Periodic dependency updates, vulnerability audits, and security patches.' },
        { title: 'Rapid Incident Response', desc: 'Guaranteed response times backed by Service Level Agreements (SLAs).' },
        { title: 'Continuous Performance Tuning', desc: 'Ongoing database optimization, asset caching, and load time monitoring.' },
        { title: 'Staff Training & Guidance', desc: 'Hands-on technical onboarding for your internal team members.' },
      ],
      ctaTitle: 'Keep your platforms secure, fast, and updated',
      ctaDesc:
        'We design personalized maintenance plans tailored to your operational requirements.',
      ctaButton: 'Inquire About Support Plans',
    },
    plataformas: {
      badge: 'ENGINEERED EFFICIENCY',
      title: 'Tailored software platforms built for enterprise operations',
      description:
        'We engineer custom digital platforms aligned with your business processes, team workflows, and strategic goals.',
      primaryCta: 'Request platform proposal',
      secondaryCta: 'View projects',
      sectionTitle: 'Custom Software Engineering',
      features: [
        { title: 'B2B Enterprise Portals', desc: 'Centralized management of orders, quotes, inventory, and partner workflows.' },
        { title: 'Multi-Tenant SaaS Architecture', desc: 'Built from the ground up for software monetization with cloud scalability.' },
        { title: 'Departmental Process Automation', desc: 'Automating cross-department workflows, eliminating error-prone manual spreadsheets.' },
        { title: 'Enterprise Security & Auditability', desc: 'Role-based access control (RBAC), end-to-end encryption, and comprehensive audit logs.' },
      ],
      ctaTitle: 'Have an internal process that needs its own platform?',
      ctaDesc:
        "Let's review your technical requirements and construct an initial architecture prototype.",
      ctaButton: 'Start Discussion',
    },
    cienciaDeDatos: {
      badge: 'DATA SCIENCE',
      title: 'Data science and analytics to drive',
      titleAccent: 'better business decisions',
      description:
        'We turn fragmented operational data into actionable dashboards, predictive models, and strategic performance metrics.',
      primaryCta: 'Request data assessment',
      secondaryCta: 'View use cases',
      sectionTitle: 'Analytics Capabilities',
      items: [
        { icon: 'monitoring', title: 'Real-Time Dashboards', text: 'Clear visual tracking of mission-critical business KPIs.' },
        { icon: 'model_training', title: 'Predictive Modeling', text: 'Anticipate customer demand and operational trends.' },
        { icon: 'description', title: 'Automated Reporting', text: 'Actionable executive reports delivered without manual effort.' },
        { icon: 'bubble_chart', title: 'Advanced Visualization', text: 'Transform complex raw data into understandable strategic insights.' },
      ],
      ctaTitle: 'Is your company data ready to generate real value?',
      ctaDesc:
        'Let us connect your data sources and identify high-impact optimization opportunities.',
      ctaButton: 'Evaluate Data Sources',
    },
    controlAutomatizacion: {
      title: 'Industrial control and process automation',
      description:
        'We design and deploy industrial control systems, process automation, and remote telemetry to increase throughput and reduce operational errors.',
      primaryCta: 'Request technical evaluation',
      sectionTitle: 'Automation Core Competencies',
      items: [
        'Industrial process automation and sequencing',
        'SCADA systems and shop-floor plant supervision',
        'Real-time monitoring of critical process variables',
        'Integration with PLCs and industrial sensors',
      ],
      ctaTitle: 'Automate your operation with engineering precision',
      ctaDesc:
        'We evaluate your plant or facility processes to design the most cost-effective automation architecture.',
      ctaButton: 'Schedule Technical Visit',
    },
    pluginsWordpress: {
      badge: 'WordPress Architecture',
      title: 'Custom WordPress plugin engineering',
      description:
        'We engineer tailored WordPress plugins to extend digital stores, enterprise portals, and websites with uncompromised speed and scalability.',
      primaryCta: 'Quote custom plugin',
      sectionTitle: 'Engineering Capabilities',
      items: [
        { title: 'Bespoke Features & Modules', desc: 'Unique business logic engineered specifically for your business model.' },
        { title: 'Gateway & API Integration', desc: 'Direct connection to local tax authorities, CRMs, and payment gateways.' },
        { title: 'Performance Optimization', desc: 'Lean, non-blocking code built to official WordPress Core standards.' },
        { title: 'Long-Term Compatibility', desc: 'Guaranteed compatibility with future WordPress and PHP major releases.' },
      ],
      ctaTitle: 'Need a feature that no off-the-shelf plugin provides?',
      ctaDesc:
        'We build the exact plugin your business demands, delivered with 100% proprietary code.',
      ctaButton: 'Request Plugin Development',
    },
    prototipado: {
      badge: 'Innovation Lab',
      title: 'Technological prototyping to validate ideas',
      description:
        'We transform concepts into tangible functional prototypes that enable fast technical validation before committing to mass production.',
      primaryCta: 'Request R&D consultation',
      secondaryCta: 'View case studies',
      sectionTitle: 'R&D Capabilities',
      items: [
        { title: 'Functional Prototypes', text: 'Working operational versions validating mechanical, electronic, and user experience feasibility.' },
        { title: 'Proof of Concept (PoC)', text: 'Rapid technical validation of algorithms, sensor combinations, and system architectures.' },
        { title: 'Design for Manufacturing', text: 'Schematics, PCB layout preparation, and bill of materials (BOM) ready for production.' },
      ],
      ctaTitle: 'Validate your technology idea with a real prototype',
      ctaDesc:
        'Eliminate technical uncertainty and accelerate your time-to-market with tangible deliverables.',
      ctaButton: 'Initiate Prototype',
    },
  },
  pt: {
    desarrolloWeb: {
      badge: 'Experiência Digital',
      title: 'Desenvolvimento de sites',
      titleAccent: 'modernos e funcionais',
      description:
        'Projetamos e desenvolvemos sites profissionais, rápidos, seguros e adaptados a qualquer dispositivo para fortalecer sua presença digital.',
      primaryCta: 'Iniciar projeto',
      secondaryCta: 'Ver portfólio',
      solutionsTitle: 'Soluções Especializadas',
      cards: {
        corporateTitle: 'Sites Corporativos',
        corporateDesc:
          'Arquiteturas robustas desenvolvidas para representar a identidade da sua empresa com profissionalismo e escala.',
        corporateBullets: ['Multilíngue', 'Otimizado para SEO', 'CMS Intuitivo', 'Segurança SSL'],
        landingTitle: 'Páginas de Alta Conversão',
        landingDesc:
          'Projetadas especificamente para maximizar conversões e o retorno sobre investimentos em anúncios.',
        ecommerceTitle: 'Comércio Eletrônico',
        ecommerceDesc:
          'Lojas virtuais com gateways de pagamento integrados e gestão eficiente de estoque.',
        responsiveTitle: 'Design Responsivo e Integrações',
        responsiveDesc:
          'Total adaptabilidade em smartphones, tablets e computadores. Integração perfeita com ferramentas de CRM e análise.',
      },
      ctaTitle: 'Pronto para transformar sua presença digital?',
      ctaDesc:
        'Solicite uma auditoria gratuita do seu site atual ou uma proposta para o seu novo projeto.',
      ctaButton: 'Consultoria Gratuita',
    },
    inteligenciaArtificial: {
      badge: 'Inteligência Artificial',
      title: 'Agentes de inteligência artificial para automação de processos',
      description:
        'Implementamos soluções de inteligência artificial aplicada que automatizam tarefas repetitivas, aprimoram o atendimento e otimizam operações.',
      primaryCta: 'Solicitar demonstração',
      secondaryCta: 'Ver projetos',
      sectionTitle: 'Capacidades de IA Aplicada',
      cards: {
        agentsTitle: 'Agentes Autônomos',
        agentsDesc:
          'Sistemas capazes de executar fluxos de trabalho de múltiplos passos de forma independente.',
        chatbotsTitle: 'Chatbots Inteligentes',
        chatbotsDesc:
          'Atendimento 24/7 com entendimento contextual avançado e respostas verificáveis.',
        nlpTitle: 'Processamento de Documentos',
        nlpDesc:
          'Extração e indexação automatizada de dados em faturas, contratos e relatórios.',
        integrationTitle: 'Integração Corporativa',
        integrationDesc:
          'Conexão segura com ERPs, CRMs e bancos de dados corporativos com controle rigoroso de acessos.',
      },
      ctaTitle: 'Deseja incorporar inteligência artificial no seu negócio?',
      ctaDesc:
        'Vamos avaliar juntos os casos de uso com maior impacto operacional e retorno sobre o investimento.',
      ctaButton: 'Agendar Sessão Técnica',
    },
    sistemasCiberfisicos: {
      badge: 'Sistemas Ciberfísicos e IoT',
      title: 'Integração de hardware, sensores e software em tempo real',
      description:
        'Conectamos o mundo físico a plataformas digitais para telemetria industrial, monitoramento contínuo e controle automatizado.',
      primaryCta: 'Consultar viabilidade',
      secondaryCta: 'Ver soluções',
      sectionTitle: 'Integração Industrial Confiável',
      cards: {
        telemetryTitle: 'Telemetria e Aquisição de Dados',
        telemetryDesc:
          'Monitoramento contínuo de variáveis críticas: temperatura, pressão, vibração e consumo de energia.',
        iotTitle: 'Dispositivos Conectados',
        iotDesc:
          'Desenvolvimento de firmware e conectividade segura através de MQTT, HTTP e protocolos industriais.',
        scadaTitle: 'Painéis de Supervisão SCADA',
        scadaDesc:
          'Visualização intuitiva em tempo real com alertas antecipados e histórico de auditoria confiável.',
      },
      ctaTitle: 'Deseja conectar máquinas ou instalações à nuvem?',
      ctaDesc:
        'Projetamos soluções robustas preparadas para condições operacionais exigentes.',
      ctaButton: 'Solicitar Consultoria de Hardware',
    },
    hosting: {
      badge: 'Infraestrutura e Estabilidade',
      title: 'Hospedagem em nuvem confiável para sites e plataformas críticas',
      description:
        'Oferecemos infraestrutura gerenciada, certificados SSL automatizados, backups redundantes e suporte técnico próximo.',
      sectionTitle: 'Infraestrutura com Foco em Disponibilidade',
      features: [
        { title: 'Alta Disponibilidade', desc: 'Servidores redundantes com monitoramento 24/7 de estabilidade.' },
        { title: 'Backups Diários Automatizados', desc: 'Cópias de segurança externas para garantir restauração imediata.' },
        { title: 'Segurança SSL e Proteção', desc: 'Proteção HTTPS, firewall de aplicações web e mitigação de ameaças.' },
        { title: 'Suporte Técnico Direto', desc: 'Atendimento direto com engenheiros especializados sem burocracias.' },
      ],
      ctaTitle: 'Precisa migrar ou otimizar sua infraestrutura?',
      ctaDesc:
        'Realizamos a migração completa com garantia de zero tempo de inatividade.',
      ctaButton: 'Solicitar Migração Gratuita',
    },
    soporte: {
      title: 'Suporte técnico especializado',
      description:
        'Manutenção contínua, atualizações e resolução rápida de incidentes para sites, plataformas e infraestruturas críticas.',
      sectionTitle: 'Planos de Suporte e Continuidade Operacional',
      features: [
        { title: 'Manutenção Preventiva', desc: 'Atualizações periódicas de dependências, auditorias e correções de segurança.' },
        { title: 'Resolução Ágil de Incidentes', desc: 'Prazos de atendimento garantidos por Acordos de Nível de Serviço (SLA).' },
        { title: 'Otimização Contínua', desc: 'Monitoramento constante de performance, uso de recursos e tempo de carregamento.' },
        { title: 'Treinamento e Acompanhamento', desc: 'Capacitação prática para a equipe da sua empresa no uso das ferramentas.' },
      ],
      ctaTitle: 'Mantenha suas plataformas seguras e operacionais',
      ctaDesc:
        'Criamos esquemas de suporte técnico ajustados às reais necessidades da sua empresa.',
      ctaButton: 'Consultar Planos de Suporte',
    },
    plataformas: {
      badge: 'EFICIÊNCIA PROJETADA',
      title: 'Desenvolvimento de plataformas personalizadas para sua empresa',
      description:
        'Construímos plataformas digitais sob medida alinhadas aos processos, fluxos de trabalho e metas do seu negócio.',
      primaryCta: 'Cotar plataforma',
      secondaryCta: 'Ver projetos',
      sectionTitle: 'Engenharia de Software sob Medida',
      features: [
        { title: 'Portais Corporativos B2B', desc: 'Gestão unificada de pedidos, cotações, clientes e operações comerciais.' },
        { title: 'Arquitetura SaaS Multitenant', desc: 'Estrutura preparada para comercializar software como serviço com escala.' },
        { title: 'Automação de Processos Internos', desc: 'Integração entre setores que elimina planilhas manuais e tarefas repetitivas.' },
        { title: 'Segurança e Auditoria Completa', desc: 'Controle de permissões por perfil, registros de auditoria e criptografia de ponta.' },
      ],
      ctaTitle: 'Tem um processo interno que necessita de um sistema próprio?',
      ctaDesc:
        'Vamos analisar juntos os requisitos técnicos e desenvolver um protótipo inicial.',
      ctaButton: 'Iniciar Conversa',
    },
    cienciaDeDatos: {
      badge: 'CIÊNCIA DE DADOS',
      title: 'Ciência de dados e analytics para tomar',
      titleAccent: 'melhores decisões',
      description:
        'Transformamos dados corporativos dispersos em painéis claros, modelos preditivos e métricas operacionais para a liderança.',
      primaryCta: 'Solicitar diagnóstico de dados',
      secondaryCta: 'Ver casos de uso',
      sectionTitle: 'Capacidades Analíticas',
      items: [
        { icon: 'monitoring', title: 'Dashboards em Tempo Real', text: 'Acompanhamento visual e claro dos KPIs mais críticos.' },
        { icon: 'model_training', title: 'Modelos Preditivos', text: 'Previsão de demanda, tendências e comportamentos operacionais.' },
        { icon: 'description', title: 'Relatórios Automatizados', text: 'Informações prontas para tomadas de decisão sem esforço manual.' },
        { icon: 'bubble_chart', title: 'Visualização Avançada', text: 'Transformação de dados complexos em insights visuais e claros.' },
      ],
      ctaTitle: 'Seus dados estão prontos para gerar valor?',
      ctaDesc:
        'Vamos conectar suas fontes de informação e identificar oportunidades reais de otimização.',
      ctaButton: 'Analisar Fontes de Dados',
    },
    controlAutomatizacion: {
      title: 'Sistemas de controle e automação industrial',
      description:
        'Projetamos e implementamos sistemas de controle industrial, automação de processos e telemetria para otimizar a produtividade e eliminar falhas operacionais.',
      primaryCta: 'Solicitar avaliação técnica',
      sectionTitle: 'Especialidades de Automação',
      items: [
        'Automação de processos industriais e de manufatura',
        'Sistemas SCADA e supervisão de chão de fábrica',
        'Monitoramento de variáveis críticas em tempo real',
        'Integração com controladores PLCs e sensores industriais',
      ],
      ctaTitle: 'Automatize sua operação com precisão de engenharia',
      ctaDesc:
        'Avaliamos suas instalações e processos para propor a solução com a melhor relação custo-benefício.',
      ctaButton: 'Agendar Visita Técnica',
    },
    pluginsWordpress: {
      badge: 'Arquitetura WordPress',
      title: 'Desenvolvimento de plugins sob medida para WordPress',
      description:
        'Desenvolvemos plugins personalizados para WordPress que expandem lojas virtuais e plataformas com alto desempenho e segurança.',
      primaryCta: 'Solicitar proposta de plugin',
      sectionTitle: 'Nossas Soluções de Engenharia',
      items: [
        { title: 'Funcionalidades Exclusivas', desc: 'Módulos sob medida criados para seu modelo de negócio sem sobrecarregar o CMS.' },
        { title: 'Integrações com APIs e Gateways', desc: 'Conexão direta com sistemas fiscais, CRMs e meios de pagamento locais.' },
        { title: 'Otimização Extrema de Performance', desc: 'Código limpo seguindo estritamente as diretrizes do WordPress Core.' },
        { title: 'Compatibilidade de Longo Prazo', desc: 'Garantia de funcionamento em atualizações futuras do WordPress e PHP.' },
      ],
      ctaTitle: 'Precisa de um recurso que nenhum plugin existente oferece?',
      ctaDesc:
        'Criamos o plugin exato que seu negócio exige, com código 100% proprietário.',
      ctaButton: 'Solicitar Desenvolvimento',
    },
    prototipado: {
      badge: 'Laboratório de Inovação',
      title: 'Prototipagem tecnológica para validação de ideias',
      description:
        'Transformamos conceitos em protótipos funcionais para validar viabilidade técnica e experiência antes de investir na produção em escala.',
      primaryCta: 'Solicitar consultoria de P&D',
      secondaryCta: 'Ver casos de sucesso',
      sectionTitle: 'Nossos Serviços de P&D',
      items: [
        { title: 'Protótipos Funcionais', text: 'Versões operacionais para validação mecânica, eletrônica e de usabilidade.' },
        { title: 'Provas de Conceito (PoC)', text: 'Validação técnica rápida de viabilidade de algoritmos e sensores.' },
        { title: 'Design para Fabricação', text: 'Esquemáticos, desenvolvimento de PCBs e lista de componentes para produção.' },
      ],
      ctaTitle: 'Valide sua ideia tecnológica com um protótipo real',
      ctaDesc:
        'Elimine incertezas técnicas e acelere seu lançamento no mercado com entregas tangíveis.',
      ctaButton: 'Iniciar Protótipo',
    },
  },
};

