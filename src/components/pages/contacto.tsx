import { Icon } from '@/components/Icon';
import { ContactForm } from '@/components/ContactForm';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { SITE } from '@/lib/site';
import { IMAGES } from '@/lib/images';

export function ContactoPage() {
  return (
    <Container className="py-xl grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
      <div className="lg:col-span-5 space-y-lg">
        <div className="space-y-sm">
          <h1 className="font-display-lg text-display-lg text-primary tracking-tight">
            Hablemos de tu proyecto
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            Cuéntanos qué necesitas desarrollar, mejorar o automatizar. Nuestro equipo de
            ingenieros diseñará la solución técnica que tu negocio requiere.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-md pt-lg">
          <div className="flex items-start gap-sm p-md bg-surface-container-low rounded-xl border border-outline-variant">
            <Icon name="mail" className="text-secondary" filled />
            <div>
              <p className="font-label-md text-label-md text-primary">Correo Electrónico</p>
              <p className="font-body-md text-body-md text-on-surface-variant">{SITE.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-sm p-md bg-surface-container-low rounded-xl border border-outline-variant">
            <Icon name="location_on" className="text-secondary" filled />
            <div>
              <p className="font-label-md text-label-md text-primary">Sede Central</p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Parque Tecnológico, Edificio 4A, CDMX
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full rounded-xl overflow-hidden border border-outline-variant">
          <PageImage
            src={IMAGES.contactoOffice}
            alt="Oficina moderna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>
      </div>
      <div className="lg:col-span-7 bg-surface-container-lowest p-lg md:p-xl border border-outline-variant rounded-xl shadow-sm">
        <ContactForm />
      </div>
    </Container>
  );
}
