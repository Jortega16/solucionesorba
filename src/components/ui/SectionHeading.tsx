type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  accent = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-xl space-y-sm ${centered ? 'text-center' : ''}`}>
      <h2 className="font-headline-lg text-headline-lg text-primary">{title}</h2>
      {accent ? <div className="w-20 h-1 bg-secondary mx-auto" /> : null}
      {subtitle ? (
        <p
          className={`font-body-md text-body-md text-on-surface-variant ${
            centered ? 'max-w-2xl mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
