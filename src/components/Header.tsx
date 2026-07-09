'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Icon } from '@/components/Icon';
import { ServicesMenu, ServicesMenuMobile } from '@/components/ServicesMenu';
import { MAIN_NAV, NAV_AFTER_SERVICES, SITE, type NavItem } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
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

  const isActive = (item: NavItem) =>
    item.match?.some((m) => (m === '/' ? pathname === '/' : pathname.startsWith(m))) ??
    pathname === item.href;

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
      <div className="flex justify-between items-center max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full gap-sm">
        <Link href="/" className="flex items-center shrink-0" aria-label={SITE.name}>
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
          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(isActive(item))}>
              {item.label}
            </Link>
          ))}
          <ServicesMenu />
          {NAV_AFTER_SERVICES.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(isActive(item))}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-sm">
          <Link
            href="/contacto"
            className="bg-primary text-on-primary px-lg py-xs font-label-md text-label-md font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all"
          >
            Contacto
          </Link>
          <button
            type="button"
            className="lg:hidden p-xs text-primary"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} className="text-2xl" />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="lg:hidden absolute top-20 left-0 right-0 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-outline-variant bg-surface shadow-lg">
          <nav className="max-w-7xl mx-auto px-margin-mobile py-sm" aria-label="Móvil">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block font-label-md text-label-md py-sm ${
                  isActive(item) ? 'text-secondary font-bold' : 'text-on-surface-variant'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ServicesMenuMobile open onNavigate={() => setMobileOpen(false)} />
            {NAV_AFTER_SERVICES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block font-label-md text-label-md py-sm ${
                  isActive(item) ? 'text-secondary font-bold' : 'text-on-surface-variant'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
