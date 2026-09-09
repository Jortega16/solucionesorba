import Image from 'next/image';
import Link from 'next/link';
import { Icon } from './Icon';
import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin-desktop py-xl grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="space-y-md">
          <Link href="/" className="inline-block">
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={SITE.logoWidth}
              height={SITE.logoHeight}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Ingeniería de software de alta precisión para un mundo interconectado.
          </p>
        </div>

        <div className="space-y-md">
          <h4 className="font-label-md text-label-md font-bold text-primary uppercase">
            Empresa
          </h4>
          <nav className="flex flex-col gap-xs">
            <Link
              href="/"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/proyectos"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="/blog"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contacto"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav>
        </div>

        <div className="space-y-md">
          <h4 className="font-label-md text-label-md font-bold text-primary uppercase">
            Servicios
          </h4>
          <nav className="flex flex-col gap-xs">
            <Link
              href="/desarrollo-web"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              Desarrollo web
            </Link>
            <Link
              href="/inteligencia-artificial"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              IA y datos
            </Link>
            <Link
              href="/sistemas-ciberfisicos"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              Sistemas ciberfísicos
            </Link>
            <Link
              href="/hosting"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              Hosting y soporte
            </Link>
          </nav>
        </div>

        <div className="space-y-md">
          <h4 className="font-label-md text-label-md font-bold text-primary uppercase">
            Hablemos
          </h4>
          <p className="font-body-md text-body-md text-on-surface-variant">Cuéntenos qué necesita construir, mejorar o automatizar.</p>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-xs bg-primary text-on-primary px-md py-xs rounded hover:opacity-90 transition-opacity">
            <Icon name="chat" className="text-sm" /> Escribir por WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-margin-desktop py-md border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md">
        <span className="font-body-md text-body-md text-on-surface-variant opacity-80">
          © {new Date().getFullYear()} Soluciones Orba. Todos los derechos reservados.
          Ingeniería de confianza.
        </span>
        <div className="flex gap-lg">
          <a className="text-on-surface-variant hover:text-primary transition-all" href="https://solucionesorba.com" aria-label="Sitio web">
            <Icon name="public" />
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-all" href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon name="chat" /></a>
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
