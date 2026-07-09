import Link from 'next/link';
import type { ReactNode } from 'react';

type CtaBannerProps = {
  title: string;
  description: string;
  action: { href: string; label: string };
  dark?: boolean;
  className?: string;
  children?: ReactNode;
};

export function CtaBanner({
  title,
  description,
  action,
  dark = false,
  className = 'py-xl',
  children,
}: CtaBannerProps) {
  const inner = dark ? (
    <div className="bg-primary p-xl text-center space-y-md rounded-lg">
      <h2 className="font-headline-lg text-headline-lg text-white">{title}</h2>
      <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl mx-auto">
        {description}
      </p>
      <div className="pt-md">
        <Link
          href={action.href}
          className="bg-white text-primary font-label-md text-label-md px-xl py-md hover:bg-surface-dim transition-colors inline-block"
        >
          {action.label}
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex flex-col md:flex-row items-center justify-between gap-lg">
      <div className="max-w-2xl">
        <h2 className="font-headline-lg text-headline-lg mb-xs text-primary">{title}</h2>
        <p className="font-body-md text-on-surface-variant">{description}</p>
      </div>
      <Link
        href={action.href}
        className="bg-secondary text-on-secondary font-label-md text-label-md px-xl py-md rounded-full hover:opacity-90 transition-all shrink-0 inline-flex items-center gap-xs"
      >
        {action.label}
      </Link>
    </div>
  );

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        {inner}
        {children}
      </div>
    </section>
  );
}
