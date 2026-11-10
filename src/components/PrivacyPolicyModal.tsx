'use client';

import { useEffect, useId } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { SITE } from '@/lib/site';
import { localeFromPathname, type Locale } from '@/lib/i18n';

type PrivacyPolicyModalProps = {
  open: boolean;
  onClose: () => void;
};

type PrivacySection = {
  title: string;
  body: string;
};

const PRIVACY_CONTENT: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    sections: PrivacySection[];
    lastUpdated: string;
    closeAria: string;
    understandButton: string;
  }
> = {
  es: {
    eyebrow: 'Legal',
    title: 'Política de Privacidad',
    intro: `En ${SITE.name} respetamos su privacidad. Esta política describe cómo tratamos los datos personales cuando visitas nuestro sitio web o nos contactas.`,
    sections: [
      {
        title: '1. Responsable del tratamiento',
        body: `${SITE.name} es responsable del tratamiento de los datos personales que nos proporciones a través de este sitio web. Para cualquier consulta relacionada con privacidad puedes escribir a ${SITE.email}.`,
      },
      {
        title: '2. Datos que recopilamos',
        body: 'A través del formulario de contacto podemos recopilar: nombre, empresa, correo electrónico, teléfono, tipo de proyecto y el contenido de su mensaje. También recopilamos datos técnicos básicos de navegación (como dirección IP y tipo de navegador) con fines de seguridad y mejora del servicio.',
      },
      {
        title: '3. Finalidad del tratamiento',
        body: 'Utilizamos sus datos para responder solicitudes de información, evaluar proyectos, dar seguimiento comercial y mantener comunicación relacionada con los servicios de Soluciones Orba. No vendemos ni cedemos sus datos a terceros con fines publicitarios.',
      },
      {
        title: '4. Base legal',
        body: 'El tratamiento se basa en su consentimiento al enviar el formulario, en la ejecución de medidas precontractuales cuando solicita una cotización o propuesta, y en el interés legítimo de atender consultas y proteger la seguridad del sitio.',
      },
      {
        title: '5. Conservación de los datos',
        body: 'Conservamos sus datos el tiempo necesario para atender su solicitud y, en su caso, durante la relación comercial. Posteriormente podrán conservarse bloqueados durante los plazos legales aplicables.',
      },
      {
        title: '6. Encargados y transferencias',
        body: 'Para el envío de correos utilizamos proveedores de servicios tecnológicos (por ejemplo, servicios de correo electrónico transaccional). Estos proveedores tratan los datos únicamente siguiendo nuestras instrucciones y con medidas de seguridad adecuadas.',
      },
      {
        title: '7. Tus derechos',
        body: 'Puede solicitar acceso, rectificación, cancelación u oposición al tratamiento de sus datos, así como revocar su consentimiento, escribiendo a nuestro correo de contacto. También tiene derecho a presentar una reclamación ante la autoridad de protección de datos competente.',
      },
      {
        title: '8. Seguridad',
        body: 'Aplicamos medidas técnicas y organizativas razonables para proteger su información contra acceso no autorizado, pérdida o alteración.',
      },
      {
        title: '9. Cambios a esta política',
        body: 'Podemos actualizar esta Política de Privacidad para reflejar cambios legales o en nuestros servicios. La versión vigente estará siempre disponible en este sitio.',
      },
    ],
    lastUpdated: 'Última actualización: julio de 2026',
    closeAria: 'Cerrar política de privacidad',
    understandButton: 'Entendido',
  },
  en: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    intro: `At ${SITE.name}, we respect your privacy. This policy outlines how we handle personal data when you visit our website or get in touch with us.`,
    sections: [
      {
        title: '1. Data Controller',
        body: `${SITE.name} is the controller responsible for the personal data provided through this website. For any privacy-related inquiries, you can reach us at ${SITE.email}.`,
      },
      {
        title: '2. Information We Collect',
        body: 'Through the contact form, we may collect: name, company, email address, phone number, project type, and the contents of your message. We also collect basic technical browsing information (such as IP address and browser type) for security and service enhancement.',
      },
      {
        title: '3. Purpose of Processing',
        body: 'We use your data to answer inquiries, evaluate project scopes, follow up commercially, and maintain communication regarding Soluciones Orba services. We never sell or transfer your data to third parties for advertising purposes.',
      },
      {
        title: '4. Legal Basis',
        body: 'Processing is based on your consent when submitting the form, pre-contractual steps when requesting a proposal, and our legitimate interest in managing inquiries and safeguarding platform security.',
      },
      {
        title: '5. Data Retention',
        body: 'We retain your data for the duration required to address your request and throughout any commercial relationship, and thereafter locked for applicable statutory retention periods.',
      },
      {
        title: '6. Processors and Transfers',
        body: 'For transactional communication and infrastructure, we work with enterprise technology vendors who process data strictly under our instructions and subject to appropriate security safeguards.',
      },
      {
        title: '7. Your Rights',
        body: 'You may request access, correction, deletion, or restriction of processing for your personal data, as well as withdraw consent, by contacting us via email. You also retain the right to lodge a complaint with the relevant data protection authority.',
      },
      {
        title: '8. Security',
        body: 'We maintain reasonable technical and organizational standards to safeguard your data against unauthorized access, loss, or alteration.',
      },
      {
        title: '9. Policy Revisions',
        body: 'We may update this Privacy Policy to reflect statutory updates or operational adjustments. The latest version is always accessible on this website.',
      },
    ],
    lastUpdated: 'Last updated: July 2026',
    closeAria: 'Close privacy policy',
    understandButton: 'Understood',
  },
  pt: {
    eyebrow: 'Legal',
    title: 'Política de Privacidade',
    intro: `Na ${SITE.name}, respeitamos sua privacidade. Esta política descreve como tratamos os dados pessoais quando você visita nosso site ou entra em contato conosco.`,
    sections: [
      {
        title: '1. Responsável pelo tratamento',
        body: `A ${SITE.name} é a responsável pelo tratamento dos dados pessoais coletados por este site. Para qualquer dúvida sobre privacidade, entre em contato através de ${SITE.email}.`,
      },
      {
        title: '2. Dados coletados',
        body: 'Através do formulário de contato, podemos coletar: nome, empresa, e-mail, telefone, tipo de projeto e conteúdo da mensagem. Também coletamos dados técnicos de navegação (como endereço IP e navegador) para segurança e aprimoramento da plataforma.',
      },
      {
        title: '3. Finalidade do tratamento',
        body: 'Utilizamos seus dados para responder solicitações, avaliar escopos de projeto, dar acompanhamento comercial e manter comunicação institucional sobre as soluções da Soluciones Orba. Não vendemos nem cedemos seus dados a terceiros para publicidade.',
      },
      {
        title: '4. Base legal',
        body: 'O tratamento fundamenta-se no seu consentimento ao enviar o formulário, na execução de medidas pré-contratuais ao solicitar uma proposta, e no interesse legítimo de gerir atendimentos e proteger o ambiente técnico.',
      },
      {
        title: '5. Retenção dos dados',
        body: 'Mantemos seus dados pelo período necessário para atender sua solicitação e durante a relação comercial, sendo mantidos resguardados pelos prazos legais aplicáveis.',
      },
      {
        title: '6. Operadores e transferências',
        body: 'Para o envio de e-mails e infraestrutura, utilizamos fornecedores de tecnologia que tratam os dados exclusivamente sob nossas diretrizes e com salvaguardas adequadas de segurança.',
      },
      {
        title: '7. Seus direitos',
        body: 'Você pode solicitar acesso, retificação, exclusão ou oposição ao tratamento de seus dados, bem como revogar o consentimento, escrevendo para nosso e-mail de contato. Você também tem direito a contatar a autoridade competente de proteção de dados.',
      },
      {
        title: '8. Segurança',
        body: 'Aplicamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acessos não autorizados, perdas ou alterações.',
      },
      {
        title: '9. Alterações nesta política',
        body: 'Podemos atualizar esta Política de Privacidade para refletir alterações legislativas ou operacionais. A versão em vigor estará sempre disponível neste site.',
      },
    ],
    lastUpdated: 'Última atualização: julho de 2026',
    closeAria: 'Fechar política de privacidade',
    understandButton: 'Entendido',
  },
};

export function PrivacyPolicyModal({ open, onClose }: PrivacyPolicyModalProps) {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = PRIVACY_CONTENT[locale];
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-sm md:p-md">
      <button
        type="button"
        className="absolute inset-0 bg-primary/50 backdrop-blur-sm"
        aria-label={copy.closeAria}
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-2xl max-h-[min(90vh,720px)] overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-xl flex flex-col"
      >
        <div className="flex items-start justify-between gap-md border-b border-outline-variant px-lg py-md shrink-0">
          <div>
            <p className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-xs">
              {copy.eyebrow}
            </p>
            <h2 id={titleId} className="font-headline-md text-headline-md text-primary">
              {copy.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-xs text-on-surface-variant hover:text-primary transition-colors rounded-lg"
            aria-label={copy.closeAria}
          >
            <Icon name="close" className="text-2xl" />
          </button>
        </div>

        <div className="overflow-y-auto px-lg py-md space-y-md font-body-md text-body-md text-on-surface-variant">
          <p>{copy.intro}</p>

          {copy.sections.map((section) => (
            <section key={section.title}>
              <h3 className="font-label-md text-label-md text-primary mb-xs">{section.title}</h3>
              <p>{section.body}</p>
            </section>
          ))}

          <p className="font-caption text-caption text-on-surface-variant pt-sm border-t border-outline-variant">
            {copy.lastUpdated}
          </p>
        </div>

        <div className="border-t border-outline-variant px-lg py-md shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-md text-label-md font-bold hover:opacity-90 transition-opacity"
          >
            {copy.understandButton}
          </button>
        </div>
      </div>
    </div>
  );
}
