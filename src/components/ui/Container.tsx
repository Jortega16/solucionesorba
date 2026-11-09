import type { ReactNode } from 'react';

export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-[92%] lg:w-[80%] mx-auto ${className}`}>
      {children}
    </div>
  );
}
