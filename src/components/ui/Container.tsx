import type { ReactNode } from 'react';

export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop ${className}`}>
      {children}
    </div>
  );
}
