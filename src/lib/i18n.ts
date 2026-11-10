export const LOCALES = ['es', 'en', 'pt'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

export const LOCALE_LABELS: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function localizedPath(locale: Locale, path: string) {
  const normalized = path === '/' ? '' : path;
  return `/${locale}${normalized}`;
}

export function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

export function withLocale(href: string, locale: Locale) {
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return href;

  let cleanHref = href;
  for (const loc of LOCALES) {
    if (cleanHref === `/${loc}`) {
      cleanHref = '/';
      break;
    } else if (cleanHref.startsWith(`/${loc}/`)) {
      cleanHref = cleanHref.slice(loc.length + 1);
      break;
    }
  }

  if (locale === DEFAULT_LOCALE) return cleanHref;
  return cleanHref === '/' ? `/${locale}` : `/${locale}${cleanHref}`;
}
