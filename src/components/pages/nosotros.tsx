'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Container';
import { PageImage } from '@/components/ui/PageImage';
import { IMAGES } from '@/lib/images';
import { localeFromPathname, type Locale } from '@/lib/i18n';
import { NOSOTROS_TRANSLATIONS } from '@/lib/translations/nosotros';

export function NosotrosPage({ locale: propLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = propLocale ?? localeFromPathname(pathname);
  const copy = NOSOTROS_TRANSLATIONS[locale] ?? NOSOTROS_TRANSLATIONS.es;

  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const quotes = copy.quotes;

  useEffect(() => {
    if (isPaused || quotes.length <= 1) return;
    const timer = setInterval(() => {
      setActiveQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, quotes.length]);

  return (
    <>
      <section className="relative py-xl md:py-32 overflow-hidden border-b border-outline-variant">
        <Container className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
          <div className="md:col-span-8">
            <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-sm block">
              {copy.eyebrow}
            </span>
            <h1 className="font-display-lg text-display-lg text-primary mb-md leading-tight">
              {copy.heroTitle}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              {copy.heroDescription}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-xl bg-surface-container-low">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="md:col-span-2 bg-surface-container-lowest p-lg border border-outline-variant rounded-lg">
              <Icon name="verified_user" className="text-secondary text-4xl mb-md" />
              <h3 className="font-headline-md text-headline-md text-primary mb-sm">
                {copy.pillars.responsibleTitle}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {copy.pillars.responsibleDescription}
              </p>
              <p className="font-label-md text-primary mt-xl">{copy.pillars.responsibleBadge}</p>
            </div>
            <div className="md:col-span-2 relative min-h-[300px] overflow-hidden rounded-lg border border-outline-variant group">
              <PageImage
                src={IMAGES.nosotrosServer}
                alt="Infraestructura tecnológica"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-lg left-lg text-white">
                <h4 className="font-headline-md text-headline-md">{copy.pillars.customTitle}</h4>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-highest p-lg border border-outline-variant rounded-lg flex items-center">
              <div className="grid grid-cols-2 gap-md w-full">
                <div>
                  <h5 className="font-headline-md text-primary mb-base">Ing. Josué Ortega</h5>
                  <p className="font-label-md text-on-surface-variant">
                    {locale === 'es'
                      ? 'CEO · Dirección tecnológica'
                      : locale === 'en'
                      ? 'CEO · Technology Lead'
                      : 'CEO · Direção Tecnológica'}
                  </p>
                </div>
                <div>
                  <h5 className="font-headline-md text-primary mb-base">Ing. Jorge Ortega</h5>
                  <p className="font-label-md text-on-surface-variant">
                    {locale === 'es'
                      ? 'COO · Dirección operativa'
                      : locale === 'en'
                      ? 'COO · Operations Lead'
                      : 'COO · Direção Operacional'}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 bg-primary text-on-primary p-lg rounded-lg flex flex-col items-center text-center justify-center">
              <Icon name="settings_suggest" className="text-4xl mb-sm" />
              <h4 className="font-headline-md mb-xs">
                {locale === 'es' ? 'Procesos' : locale === 'en' ? 'Processes' : 'Processos'}
              </h4>
              <p className="font-label-md opacity-80">
                {locale === 'es'
                  ? 'Metodología Ágil'
                  : locale === 'en'
                  ? 'Agile Methodology'
                  : 'Metodologia Ágil'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quote Slider */}
      <section className="py-xl bg-white" aria-roledescription="carousel" aria-label="Filosofía y lemas de Soluciones Orba">
        <Container className="text-center">
          <div
            className="relative inline-block border-y border-outline-variant py-xl w-full max-w-4xl px-8 md:px-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              type="button"
              onClick={() => setActiveQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length)}
              className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
              aria-label={locale === 'es' ? 'Lema anterior' : locale === 'en' ? 'Previous quote' : 'Lema anterior'}
            >
              <Icon name="chevron_left" className="text-2xl" />
            </button>

            <div className="min-h-[140px] md:min-h-[120px] flex flex-col justify-center transition-all duration-500 ease-in-out">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-md italic">
                &ldquo;{quotes[activeQuoteIndex].text}&rdquo;
              </h2>
              <p className="font-label-md text-label-md text-secondary tracking-[0.2em] uppercase">
                {quotes[activeQuoteIndex].author}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveQuoteIndex((prev) => (prev + 1) % quotes.length)}
              className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
              aria-label={locale === 'es' ? 'Siguiente lema' : locale === 'en' ? 'Next quote' : 'Próximo lema'}
            >
              <Icon name="chevron_right" className="text-2xl" />
            </button>

            {/* Indicator dots */}
            <div className="flex items-center justify-center gap-2 mt-md">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveQuoteIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeQuoteIndex === idx
                      ? 'w-8 bg-secondary'
                      : 'w-2.5 bg-outline-variant hover:bg-on-surface-variant'
                  }`}
                  aria-label={`${locale === 'es' ? 'Ver lema' : locale === 'en' ? 'View quote' : 'Ver lema'} ${idx + 1}`}
                  aria-current={activeQuoteIndex === idx ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
