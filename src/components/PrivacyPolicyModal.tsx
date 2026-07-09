'use client';

import { Icon } from '@/components/Icon';
import { SITE } from '@/lib/site';
import { useEffect, useId } from 'react';

type PrivacyPolicyModalProps = {
  open: boolean;
  onClose: () => void;
};

const SECTIONS = [
  {
    title: '1. Responsable del tratamiento',
    body: `${SITE.name} es responsable del tratamiento de los datos personales que nos proporciones a través de este sitio web. Para cualquier consulta relacionada con privacidad puedes escribir a ${SITE.email}.`,
  },
  {
    title: '2. Datos que recopilamos',
    body: 'A través del formulario de contacto podemos recopilar: nombre, empresa, correo electrónico, teléfono, tipo de proyecto y el contenido de tu mensaje. También recopilamos datos técnicos básicos de navegación (como dirección IP y tipo de navegador) con fines de seguridad y mejora del servicio.',
  },
  {
    title: '3. Finalidad del tratamiento',
    body: 'Utilizamos tus datos para responder solicitudes de información, evaluar proyectos, dar seguimiento comercial y mantener comunicación relacionada con los servicios de Soluciones Orba. No vendemos ni cedemos tus datos a terceros con fines publicitarios.',
  },
  {
    title: '4. Base legal',
    body: 'El tratamiento se basa en tu consentimiento al enviar el formulario, en la ejecución de medidas precontractuales cuando solicitas una cotización o propuesta, y en el interés legítimo de atender consultas y proteger la seguridad del sitio.',
  },
  {
    title: '5. Conservación de los datos',
    body: 'Conservamos tus datos el tiempo necesario para atender tu solicitud y, en su caso, durante la relación comercial. Posteriormente podrán conservarse bloqueados durante los plazos legales aplicables.',
  },
  {
    title: '6. Encargados y transferencias',
    body: 'Para el envío de correos utilizamos proveedores de servicios tecnológicos (por ejemplo, servicios de correo electrónico transaccional). Estos proveedores tratan los datos únicamente siguiendo nuestras instrucciones y con medidas de seguridad adecuadas.',
  },
  {
    title: '7. Tus derechos',
    body: 'Puedes solicitar acceso, rectificación, cancelación u oposición al tratamiento de tus datos, así como revocar tu consentimiento, escribiendo a nuestro correo de contacto. También tienes derecho a presentar una reclamación ante la autoridad de protección de datos competente.',
  },
  {
    title: '8. Seguridad',
    body: 'Aplicamos medidas técnicas y organizativas razonables para proteger tu información contra acceso no autorizado, pérdida o alteración.',
  },
  {
    title: '9. Cambios a esta política',
    body: 'Podemos actualizar esta Política de Privacidad para reflejar cambios legales o en nuestros servicios. La versión vigente estará siempre disponible en este sitio.',
  },
];

export function PrivacyPolicyModal({ open, onClose }: PrivacyPolicyModalProps) {
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
        aria-label="Cerrar política de privacidad"
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
              Legal
            </p>
            <h2 id={titleId} className="font-headline-md text-headline-md text-primary">
              Política de Privacidad
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-xs text-on-surface-variant hover:text-primary transition-colors rounded-lg"
            aria-label="Cerrar"
          >
            <Icon name="close" className="text-2xl" />
          </button>
        </div>

        <div className="overflow-y-auto px-lg py-md space-y-md font-body-md text-body-md text-on-surface-variant">
          <p>
            En <strong className="text-primary">{SITE.name}</strong> respetamos tu privacidad. Esta
            política describe cómo tratamos los datos personales cuando visitas nuestro sitio web o
            nos contactas.
          </p>

          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h3 className="font-label-md text-label-md text-primary mb-xs">{section.title}</h3>
              <p>{section.body}</p>
            </section>
          ))}

          <p className="font-caption text-caption text-on-surface-variant pt-sm border-t border-outline-variant">
            Última actualización: julio de 2026
          </p>
        </div>

        <div className="border-t border-outline-variant px-lg py-md shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-md text-label-md font-bold hover:opacity-90 transition-opacity"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
