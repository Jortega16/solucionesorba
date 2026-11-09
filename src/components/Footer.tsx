'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from './Icon';
import { SITE } from '@/lib/site';
import { localeFromPathname, withLocale } from '@/lib/i18n';
import {
  FOOTER_COPY,
  NAV_ITEMS_MAIN,
  NAV_ITEMS_AFTER_SERVICES,
  LOCALIZED_SERVICES_MENU,
} from '@/lib/translations/common';

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = FOOTER_COPY[locale];

  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant">
      <div className="w-[92%] lg:w-[80%] mx-auto py-xl grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="space-y-md">
          <Link href={withLocale('/', locale)} className="inline-block">
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={SITE.logoWidth}
              height={SITE.logoHeight}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {copy.tagline}
          </p>
        </div>

        <div className="space-y-md">
          <h4 className="font-label-md text-label-md font-bold text-primary uppercase">
            {copy.companyTitle}
          </h4>
          <nav className="flex flex-col gap-xs">
            {NAV_ITEMS_MAIN.map((item) => (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {item.label[locale]}
              </Link>
            ))}
            {NAV_ITEMS_AFTER_SERVICES.map((item) => (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {item.label[locale]}
              </Link>
            ))}
            <Link
              href={withLocale('/contacto', locale)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              {locale === 'es' ? 'Contacto' : locale === 'en' ? 'Contact' : 'Contato'}
            </Link>
          </nav>
        </div>

        <div className="space-y-md">
          <h4 className="font-label-md text-label-md font-bold text-primary uppercase">
            {copy.servicesTitle}
          </h4>
          <nav className="flex flex-col gap-xs">
            {LOCALIZED_SERVICES_MENU.map((group) => {
              const firstItem = group.items[0];
              return firstItem ? (
                <Link
                  key={firstItem.href}
                  href={withLocale(firstItem.href, locale)}
                  className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  {firstItem.label[locale]}
                </Link>
              ) : null;
            })}
          </nav>
        </div>

        <div className="space-y-md">
          <h4 className="font-label-md text-label-md font-bold text-primary uppercase">
            {copy.talkTitle}
          </h4>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {copy.talkSubtitle}
          </p>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-xs bg-primary text-on-primary px-md py-xs rounded hover:opacity-90 transition-opacity"
          >
            <Icon name="chat" className="text-sm" /> {copy.whatsappCta}
          </a>
        </div>
      </div>

      <div className="w-[92%] lg:w-[80%] mx-auto py-md border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md">
        <span className="font-body-md text-body-md text-on-surface-variant opacity-80">
          © {new Date().getFullYear()} Soluciones Orba. {copy.rightsReserved} {copy.trustEngineering}
        </span>
        <div className="flex gap-lg">
          <a
            className="text-on-surface-variant hover:text-primary transition-all"
            href="https://solucionesorba.com"
            aria-label="Sitio web"
          >
            <Icon name="public" />
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-all"
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <Icon name="chat" />
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-all"
            href={`mailto:${SITE.email}`}
            aria-label="Correo"
          >
            <Icon name="alternate_email" />
          </a>
        </div>
      </div>
    </footer>
  );
}
