import type { Locale } from '../i18n';

export interface ContactoTranslation {
  heroTitle: string;
  heroDescription: string;
  cards: {
    emailTitle: string;
    locationTitle: string;
    whatsappTitle: string;
  };
  form: {
    successTitle: string;
    successMessage: string;
    sendAnother: string;
    errorDefault: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    projectTypeLabel: string;
    projectTypePlaceholder: string;
    projectTypes: {
      web: string;
      software: string;
      ai: string;
      iot: string;
      other: string;
    };
    budgetLabel: string;
    budgetTbd: string;
    budgetTiers: string[];
    startDateLabel: string;
    startDateTbd: string;
    startDateOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    termsPrefix: string;
    privacyLink: string;
    termsSuffix: string;
    submitting: string;
    submit: string;
  };
}

export const CONTACTO_TRANSLATIONS: Record<Locale, ContactoTranslation> = {
  es: {
    heroTitle: 'Hablemos de su proyecto',
    heroDescription:
      'Cuéntenos qué necesita desarrollar, mejorar o automatizar. Revisaremos su solicitud y le responderemos en un plazo máximo de un día hábil.',
    cards: {
      emailTitle: 'Correo Electrónico',
      locationTitle: 'Sede Central',
      whatsappTitle: 'WhatsApp',
    },
    form: {
      successTitle: 'Mensaje enviado',
      successMessage:
        'Gracias por contactarnos. Responderemos en un plazo máximo de un día hábil a la dirección indicada.',
      sendAnother: 'Enviar otro mensaje',
      errorDefault: 'No se pudo enviar el mensaje.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Su nombre completo',
      companyLabel: 'Empresa',
      companyPlaceholder: 'Nombre de la empresa',
      emailLabel: 'Correo',
      emailPlaceholder: 'correo@ejemplo.com',
      phoneLabel: 'Teléfono',
      phonePlaceholder: '+506 8000-0000',
      projectTypeLabel: 'Tipo de proyecto',
      projectTypePlaceholder: 'Seleccione una opción',
      projectTypes: {
        web: 'Desarrollo web',
        software: 'Software a medida',
        ai: 'IA y análisis de datos',
        iot: 'Sistemas ciberfísicos',
        other: 'Otro / Consultoría',
      },
      budgetLabel: 'Presupuesto aproximado',
      budgetTbd: 'Por definir',
      budgetTiers: [
        'Menos de $2,500',
        '$2,500 a $7,500',
        '$7,500 a $20,000',
        'Más de $20,000',
      ],
      startDateLabel: 'Inicio estimado',
      startDateTbd: 'Por definir',
      startDateOptions: [
        'Lo antes posible',
        'En 1 a 3 meses',
        'En 3 a 6 meses',
        'Más adelante',
      ],
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Describa brevemente su necesidad, objetivo o proceso actual...',
      termsPrefix: 'Acepto la ',
      privacyLink: 'Política de Privacidad',
      termsSuffix: ' y el tratamiento de mis datos.',
      submitting: 'Enviando…',
      submit: 'Enviar solicitud',
    },
  },
  en: {
    heroTitle: "Let's discuss your project",
    heroDescription:
      'Tell us what you need to build, scale, or automate. We will review your requirements and respond within one business day.',
    cards: {
      emailTitle: 'Email Address',
      locationTitle: 'Headquarters',
      whatsappTitle: 'WhatsApp',
    },
    form: {
      successTitle: 'Message sent successfully',
      successMessage:
        'Thank you for reaching out. An engineer will follow up within one business day.',
      sendAnother: 'Send another message',
      errorDefault: 'Could not send message. Please try again.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your full name',
      companyLabel: 'Company / Organization',
      companyPlaceholder: 'Company name',
      emailLabel: 'Business Email',
      emailPlaceholder: 'name@company.com',
      phoneLabel: 'Phone / WhatsApp',
      phonePlaceholder: '+1 (555) 000-0000',
      projectTypeLabel: 'Project Type',
      projectTypePlaceholder: 'Select an option',
      projectTypes: {
        web: 'Web Development',
        software: 'Custom Software & SaaS',
        ai: 'AI & Data Science',
        iot: 'Cyber-Physical Systems & IoT',
        other: 'Other / Technical Advisory',
      },
      budgetLabel: 'Estimated Budget',
      budgetTbd: 'To be determined',
      budgetTiers: [
        'Under $2,500',
        '$2,500 to $7,500',
        '$7,500 to $20,000',
        'Above $20,000',
      ],
      startDateLabel: 'Target Start Date',
      startDateTbd: 'To be determined',
      startDateOptions: [
        'Immediately / As soon as possible',
        'In 1 to 3 months',
        'In 3 to 6 months',
        'Later / Planning stage',
      ],
      messageLabel: 'Project Overview',
      messagePlaceholder: 'Briefly describe your objectives, requirements, or current process...',
      termsPrefix: 'I accept the ',
      privacyLink: 'Privacy Policy',
      termsSuffix: ' and consent to the processing of my data.',
      submitting: 'Sending…',
      submit: 'Submit Request',
    },
  },
  pt: {
    heroTitle: 'Vamos conversar sobre o seu projeto',
    heroDescription:
      'Conte-nos o que você precisa desenvolver, otimizar ou automatizar. Analisaremos sua solicitação e responderemos em até um dia útil.',
    cards: {
      emailTitle: 'E-mail',
      locationTitle: 'Sede Principal',
      whatsappTitle: 'WhatsApp',
    },
    form: {
      successTitle: 'Mensagem enviada com sucesso',
      successMessage:
        'Obrigado pelo contato. Responderemos em até um dia útil para o e-mail informado.',
      sendAnother: 'Enviar outra mensagem',
      errorDefault: 'Não foi possível enviar a mensagem.',
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome completo',
      companyLabel: 'Empresa / Organização',
      companyPlaceholder: 'Nome da empresa',
      emailLabel: 'E-mail Corporativo',
      emailPlaceholder: 'nome@empresa.com',
      phoneLabel: 'Telefone / WhatsApp',
      phonePlaceholder: '+55 (11) 90000-0000',
      projectTypeLabel: 'Tipo de projeto',
      projectTypePlaceholder: 'Selecione uma opção',
      projectTypes: {
        web: 'Desenvolvimento Web',
        software: 'Software sob Medida e SaaS',
        ai: 'IA e Análise de Dados',
        iot: 'Sistemas Ciberfísicos e IoT',
        other: 'Outro / Consultoria',
      },
      budgetLabel: 'Orçamento aproximado',
      budgetTbd: 'A definir',
      budgetTiers: [
        'Menos de $2,500',
        '$2,500 a $7,500',
        '$7,500 a $20,000',
        'Mais de $20,000',
      ],
      startDateLabel: 'Início estimado',
      startDateTbd: 'A definir',
      startDateOptions: [
        'O quanto antes',
        'Em 1 a 3 meses',
        'Em 3 a 6 meses',
        'Mais adiante',
      ],
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Descreva brevemente sua necessidade, objetivo ou processo atual...',
      termsPrefix: 'Aceito a ',
      privacyLink: 'Política de Privacidade',
      termsSuffix: ' e o tratamento dos meus dados.',
      submitting: 'Enviando…',
      submit: 'Enviar solicitação',
    },
  },
};

