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
