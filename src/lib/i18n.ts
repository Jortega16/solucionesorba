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
  if (locale === DEFAULT_LOCALE) return href;
  return href === '/' ? `/${locale}` : `/${locale}${href}`;
}
