'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Icon } from '@/components/Icon';
import { ServicesMenu, ServicesMenuMobile } from '@/components/ServicesMenu';
import { localeFromPathname, withLocale, LOCALES, type Locale } from '@/lib/i18n';
import { SITE } from '@/lib/site';
import {
  NAV_ITEMS_MAIN,
  NAV_ITEMS_AFTER_SERVICES,
  HEADER_COPY,
  type LocalizedNavItem,
} from '@/lib/translations/common';

function stripLocale(pathname: string) {
  const segment = pathname.split('/').filter(Boolean)[0];
  if (!(LOCALES as readonly string[]).includes(segment)) return pathname;
  const stripped = pathname.replace(`/${segment}`, '') || '/';
  return stripped;
}

export function Header() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const activePathname = stripLocale(pathname);
  const copy = HEADER_COPY[locale];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (item: LocalizedNavItem) =>
    item.match?.some((m) => (m === '/' ? activePathname === '/' : activePathname.startsWith(m))) ??
    activePathname === item.href;

  const navLinkClass = (active: boolean) =>
    `font-label-md text-label-md h-20 flex items-center transition-colors duration-200 ${
      active
        ? 'text-secondary font-bold border-b-2 border-secondary'
        : 'text-on-surface-variant hover:text-primary'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-outline-variant h-20 flex items-center transition-shadow ${
        scrolled ? 'shadow-sm bg-surface/95 backdrop-blur-md' : 'bg-surface'
      }`}
    >
      <div className="flex justify-between items-center w-[92%] lg:w-[80%] mx-auto w-full gap-sm">
        <Link href={withLocale('/', locale)} className="flex items-center shrink-0" aria-label={SITE.name}>
          <Image
            src={SITE.logo}
            alt={SITE.name}
            width={SITE.logoWidth}
            height={SITE.logoHeight}
            className="h-10 w-auto object-contain md:h-14"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-lg" aria-label="Principal">
          {NAV_ITEMS_MAIN.map((item) => (
            <Link key={item.href} href={withLocale(item.href, locale)} className={navLinkClass(isActive(item))}>
              {item.label[locale]}
            </Link>
          ))}
          <ServicesMenu />
          {NAV_ITEMS_AFTER_SERVICES.map((item) => (
            <Link key={item.href} href={withLocale(item.href, locale)} className={navLinkClass(isActive(item))}>
              {item.label[locale]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-sm">
          <Link
            href={withLocale('/contacto', locale)}
            className="bg-primary text-on-primary px-lg py-xs font-label-md text-label-md font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all"
          >
            {copy.contactButton}
          </Link>
          <div className="hidden md:flex items-center gap-xs font-label-md text-label-md">
            {LOCALES.map((item) => (
              <Link
                key={item}
                href={withLocale(activePathname, item)}
                className={item === locale ? 'text-secondary font-bold' : 'text-on-surface-variant'}
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
          <button
            type="button"
            className="lg:hidden p-xs text-primary"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? copy.closeMenuAria : copy.openMenuAria}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} className="text-2xl" />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="lg:hidden absolute top-20 left-0 right-0 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-outline-variant bg-surface shadow-lg">
          <nav className="w-[92%] mx-auto py-sm" aria-label={copy.mobileNavAria}>
            {NAV_ITEMS_MAIN.map((item) => (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                className={`block font-label-md text-label-md py-sm ${
                  isActive(item) ? 'text-secondary font-bold' : 'text-on-surface-variant'
                }`}
              >
                {item.label[locale]}
              </Link>
            ))}
            <ServicesMenuMobile open onNavigate={() => setMobileOpen(false)} />
            {NAV_ITEMS_AFTER_SERVICES.map((item) => (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                className={`block font-label-md text-label-md py-sm ${
                  isActive(item) ? 'text-secondary font-bold' : 'text-on-surface-variant'
                }`}
              >
                {item.label[locale]}
              </Link>
            ))}
            <div className="flex gap-sm py-sm font-label-md text-label-md">
              {LOCALES.map((item) => (
                <Link
                  key={item}
                  href={withLocale(activePathname, item)}
                  className={item === locale ? 'text-secondary font-bold' : 'text-on-surface-variant'}
                >
                  {item.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
