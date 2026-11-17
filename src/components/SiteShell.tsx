import type { ReactNode } from 'react';
import { Header } from './Header';
import { isHolidaySeason } from '@/lib/theme/season';

type SiteShellProps = {
  children: ReactNode;
  mainClassName?: string;
};

export function SiteShell({ children, mainClassName }: SiteShellProps) {
  const isHoliday = isHolidaySeason();
  const defaultPadding = isHoliday ? 'pt-[112px]' : 'pt-20';

  return (
    <>
      <Header />
      <main className={mainClassName ?? defaultPadding}>{children}</main>
    </>
  );
}
