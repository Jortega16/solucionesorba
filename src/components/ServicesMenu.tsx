'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { Icon } from '@/components/Icon';
import { SERVICE_PATHS, SERVICES_MENU } from '@/lib/site';

function isServicePath(pathname: string) {
  return SERVICE_PATHS.some((path) => pathname.startsWith(path));
}

export function ServicesMenu({ className = '' }: { className?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const active = isServicePath(pathname);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        id={`${menuId}-trigger`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={`${menuId}-panel`}
        onClick={() => setOpen((value) => !value)}
        className={`font-label-md text-label-md h-20 flex items-center gap-1 transition-colors duration-200 ${
          active
            ? 'text-secondary font-bold border-b-2 border-secondary'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        Servicios
        <Icon
          name="expand_more"
          className={`text-lg transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open ? (
        <div
          id={`${menuId}-panel`}
          role="menu"
          aria-labelledby={`${menuId}-trigger`}
          className="absolute left-0 top-full z-50 mt-0 w-[min(100vw-2rem,42rem)] rounded-xl border border-outline-variant bg-surface-container-lowest shadow-lg"
        >
          <div className="grid sm:grid-cols-2 gap-0 p-sm">
            {SERVICES_MENU.map((group) => (
              <div key={group.title} className="p-sm">
                <p className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-sm px-xs">
                  {group.title}
                </p>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        role="menuitem"
                        className={`block rounded-lg px-sm py-xs transition-colors hover:bg-surface-container ${
                          pathname.startsWith(item.href)
                            ? 'bg-secondary-fixed text-on-secondary-fixed'
                            : 'text-on-surface'
                        }`}
                      >
                        <span className="font-label-md text-label-md font-bold block">
                          {item.label}
                        </span>
                        {item.description ? (
                          <span className="font-caption text-caption text-on-surface-variant block mt-0.5">
                            {item.description}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-outline-variant px-md py-sm">
            <Link
              href="/#servicios"
              role="menuitem"
              className="font-label-md text-label-md text-secondary hover:underline inline-flex items-center gap-1"
            >
              Ver resumen en inicio
              <Icon name="arrow_forward" className="text-sm" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function ServicesMenuMobile({
  open,
  onNavigate,
}: {
  open: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);

  if (!open) return null;

  return (
    <div className="border-t border-outline-variant py-sm">
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="w-full flex items-center justify-between font-label-md text-label-md text-primary font-bold px-sm py-xs"
      >
        Servicios
        <Icon
          name="expand_more"
          className={`text-lg transition-transform ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {expanded ? (
        <div className="mt-sm space-y-md px-sm">
          {SERVICES_MENU.map((group) => (
            <div key={group.title}>
              <p className="font-caption text-caption text-secondary uppercase tracking-wider mb-xs">
                {group.title}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={`block py-xs font-label-md text-label-md ${
                        pathname.startsWith(item.href)
                          ? 'text-secondary font-bold'
                          : 'text-on-surface-variant hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/#servicios"
            onClick={onNavigate}
            className="font-label-md text-label-md text-secondary inline-flex items-center gap-1"
          >
            Ver resumen en inicio
            <Icon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
