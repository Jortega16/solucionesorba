import Image from 'next/image';

type PageImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function PageImage({ src, alt, className = '', priority = false }: PageImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      priority={priority}
      className={className}
      sizes="(max-width: 768px) 100vw, 50vw"
      style={{ width: '100%', height: 'auto' }}
    />
  );
}
