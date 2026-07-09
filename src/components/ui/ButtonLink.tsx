import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon } from '@/components/Icon';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  className?: string;
  icon?: string;
};

const variants = {
  primary:
    'bg-primary text-on-primary font-label-md text-label-md font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all inline-flex items-center justify-center gap-sm',
  outline:
    'border-2 border-primary text-primary font-label-md text-label-md font-bold rounded-lg hover:bg-primary hover:text-on-primary active:scale-95 transition-all inline-flex items-center justify-center',
  secondary:
    'bg-secondary text-on-secondary font-label-md text-label-md px-xl py-md rounded-full hover:opacity-90 transition-all inline-flex items-center justify-center gap-xs',
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  icon,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
      {icon ? <Icon name={icon} /> : null}
    </Link>
  );
}
