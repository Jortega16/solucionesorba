import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { Footer } from '@/components/Footer';
import { SITE } from '@/lib/site';
import './globals.css';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-YZBDRVFXEX';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['500'],
});

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description:
    'Desarrollo de software, inteligencia artificial e IoT para automatizar y hacer crecer empresas.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://solucionesorba.com'),
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    siteName: SITE.name,
    title: 'Soluciones Orba | Ingeniería de confianza',
    description: 'Software, inteligencia artificial e IoT para transformar operaciones empresariales.',
    url: 'https://solucionesorba.com',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-background text-on-background font-body-md selection:bg-secondary selection:text-white antialiased"
        suppressHydrationWarning
      >
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE.name,
              url: 'https://solucionesorba.com',
              email: SITE.email,
              telephone: SITE.phone,
              foundingDate: '2015',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'El Guarco',
                addressRegion: 'Cartago',
                addressCountry: 'CR',
              },
            }),
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
