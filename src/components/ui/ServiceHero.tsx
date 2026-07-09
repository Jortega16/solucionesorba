import type { ReactNode } from 'react';
import { Container } from './Container';
import { PageImage } from './PageImage';
import { ButtonLink } from './ButtonLink';
import { Icon } from '@/components/Icon';

type ServiceHeroProps = {
  badge?: { icon: string; text: string };
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta?: { href: string; label: string; icon?: string };
  secondaryCta?: { href: string; label: string };
  className?: string;
  imageClassName?: string;
};

export function ServiceHero({
  badge,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  className = 'relative bg-surface-container-low py-xl overflow-hidden',
  imageClassName = 'w-full h-auto object-cover',
}: ServiceHeroProps) {
  return (
    <section className={className}>
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative z-10">
        <div className="space-y-md">
          {badge ? (
            <div className="inline-flex items-center gap-xs bg-secondary-fixed text-on-secondary-fixed px-sm py-1 rounded-full">
              <Icon name={badge.icon} className="text-[18px]" />
              <span className="font-label-md text-[12px] uppercase tracking-wider">
                {badge.text}
              </span>
            </div>
          ) : null}
          <h1 className="font-display-lg text-display-lg text-primary leading-tight">{title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-sm pt-base">
              {primaryCta ? (
                <ButtonLink href={primaryCta.href} icon={primaryCta.icon} className="px-lg py-md rounded">
                  {primaryCta.label}
                </ButtonLink>
              ) : null}
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="outline" className="px-lg py-md rounded">
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          )}
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-secondary/10 rounded-xl blur-3xl group-hover:bg-secondary/20 transition-all duration-500" />
          <div className="relative rounded-xl overflow-hidden border border-outline-variant shadow-xl bg-surface-container-lowest">
            <PageImage src={image} alt={imageAlt} className={imageClassName} />
          </div>
        </div>
      </Container>
    </section>
  );
}
