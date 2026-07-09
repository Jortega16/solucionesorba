import Link from 'next/link';
import type { ReactNode } from 'react';
import { logoutAction } from './actions';

export function AdminChrome({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-surface text-on-surface">
      <header className="border-b border-outline-variant bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop h-20 flex items-center justify-between gap-md">
          <Link href="/admin" className="font-headline-md text-headline-md text-primary">
            Backoffice
          </Link>
          <nav className="flex items-center gap-md font-label-md text-label-md">
            <Link href="/admin/pages" className="hover:text-secondary">
              Páginas
            </Link>
            <Link href="/admin/blog" className="hover:text-secondary">
              Blog
            </Link>
            <Link href="/" className="hover:text-secondary">
              Sitio
            </Link>
            <form action={logoutAction}>
              <button type="submit" className="text-error hover:underline">
                Salir
              </button>
            </form>
          </nav>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        {children}
      </div>
    </main>
  );
}
