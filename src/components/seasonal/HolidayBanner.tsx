'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { localeFromPathname, type Locale } from '@/lib/i18n';
import { Icon } from '@/components/Icon';

const HOLIDAY_COPY: Record<
  Locale,
  {
    greeting: string;
    subtext: string;
    closeAria: string;
  }
> = {
  es: {
    greeting: '🎄 ¡Felices Fiestas de parte de Soluciones Orba!',
    subtext: 'Que el 2027 impulse nuevos retos, innovación y proyectos exitosos.',
    closeAria: 'Cerrar saludo navideño',
  },
  en: {
    greeting: "🎄 Season's Greetings from Soluciones Orba!",
    subtext: 'Wishing you breakthrough innovation and great success in the upcoming year.',
    closeAria: 'Close holiday greeting',
  },
  pt: {
    greeting: '🎄 Boas Festas da equipe Soluciones Orba!',
    subtext: 'Que o novo ano traga inovação contínua e grandes conquistas para sua empresa.',
    closeAria: 'Fechar saudação natalina',
  },
};

export function HolidayBanner() {
  const [closed, setClosed] = useState(false);
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = HOLIDAY_COPY[locale] ?? HOLIDAY_COPY.es;

  if (closed) return null;

  return (
    <aside
      aria-label="Mensaje de temporada navideña"
      className="bg-gradient-to-r from-[#991b1b] via-[#15803d] to-[#991b1b] text-white py-1.5 px-4 text-[12px] md:text-[13px] font-medium flex items-center justify-center relative shadow-sm border-b border-white/10"
    >
      <div className="flex items-center gap-2 text-center truncate pr-6">
        <span className="font-bold">{copy.greeting}</span>
        <span className="hidden sm:inline text-white/90">· {copy.subtext}</span>
      </div>
      <button
        type="button"
        onClick={() => setClosed(true)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1 rounded transition-colors"
        aria-label={copy.closeAria}
      >
        <Icon name="close" className="text-base" />
      </button>
    </aside>
  );
}

