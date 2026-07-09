import type { ReactNode } from 'react';
import { Header } from './Header';

type SiteShellProps = {
  children: ReactNode;
  mainClassName?: string;
};

export function SiteShell({ children, mainClassName = 'pt-20' }: SiteShellProps) {
  return (
    <>
      <Header />
      <main className={mainClassName}>{children}</main>
    </>
  );
}
