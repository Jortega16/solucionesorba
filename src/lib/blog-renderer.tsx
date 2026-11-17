import React from 'react';

/**
 * Normaliza el contenido Markdown para corregir textos pegados,
 * encabezados sin saltos dobles de línea, etc.
 */
export function normalizeBlogContent(raw: string): string {
  if (!raw) return '';

  let res = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Asegura que antes de cualquier encabezado ## o ### haya un salto doble
  res = res.replace(/([^\n])\s*(#{2,4}\s+)/g, '$1\n\n$2');

  // Separa títulos de encabezado del párrafo siguiente si quedaron en la misma línea
  res = res
    .split('\n')
    .map((line) => {
      const match = line.match(/^(#{2,4}\s+)(.*)$/);
      if (!match) return line;
      const prefix = match[1];
      const rest = match[2].trim();

      // Caso 1: Título con signo de interrogación (ej: ## ¿Qué es X? Texto siguiente)
      const qMatch = rest.match(/^([^?]+\?)\s+([A-ZÁÉÍÓÚ¿¡].+)$/);
      if (qMatch) {
        return `${prefix}${qMatch[1]}\n\n${qMatch[2]}`;
      }

      // Caso 2: Título numerado (ej: ## 1. Empezar por un problema concreto Antes de elegir...)
      const numMatch = rest.match(/^(\d+\.\s+[^\n.]+?\b)\s+([A-ZÁÉÍÓÚ"'][a-záéíóú].*)$/);
      if (numMatch && numMatch[1].split(' ').length <= 10) {
        return `${prefix}${numMatch[1]}\n\n${numMatch[2]}`;
      }

      // Caso 3: Título frase seguido de mayúscula (ej: ## La complejidad debe resolverse en el diseño Una solución...)
      if (rest.length > 40) {
        const titleMatch = rest.match(/^([A-ZÁÉÍÓÚ¿¡0-9][^.!?\n]{8,60}?)\s+([A-ZÁÉÍÓÚ][a-záéíóú]+(?:\s+[a-záéíóú]+){2,}.*)$/);
        if (titleMatch) {
          return `${prefix}${titleMatch[1]}\n\n${titleMatch[2]}`;
        }
      }

      return line;
    })
    .join('\n');

  return res;
}

/**
 * Extrae la primera imagen encontrada en el contenido para usarla como portada.
 */
export function extractCoverImage(content: string): { coverUrl: string | null; coverAlt: string | null; remainingContent: string } {
  const normalized = normalizeBlogContent(content);
  const match = normalized.match(/!\[(.*?)\]\((.*?)\)/);

  if (!match) {
    return { coverUrl: null, coverAlt: null, remainingContent: normalized };
  }

  const coverAlt = match[1] || null;
  const coverUrl = match[2] || null;

  // Si la imagen está en las primeras líneas del post, la removemos del cuerpo para no duplicarla
  const firstBlock = normalized.trim().split(/\n{2,}/)[0] || '';
  const isAtTop = firstBlock.includes(match[0]);
  const remainingContent = isAtTop ? normalized.replace(match[0], '').trim() : normalized;

  return { coverUrl, coverAlt, remainingContent };
}

/**
 * Estima el tiempo de lectura en minutos.
 */
export function estimateReadTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Renderiza texto inline con soporte para **negrita**, *cursiva*, `código`, [enlaces](url)
 * y destacados de términos con dos puntos (ej: "Inventario: ...").
 */
export function renderInline(text: string): React.ReactNode {
  if (!text) return null;

  // Regex combinada para tokens markdown inline
  const tokenRegex = /(\*\*.*?\*\*|\*.*?\*|`.*?`|\[.*?\]\(.*?\))/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Negrita **texto**
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={index} className="font-semibold text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Cursiva *texto*
    if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      return (
        <em key={index} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }

    // Código `código`
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      return (
        <code
          key={index}
          className="rounded bg-surface-container px-1.5 py-0.5 text-xs font-mono text-primary border border-outline-variant/40"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    // Enlace [texto](url)
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const isExternal = linkMatch[2].startsWith('http');
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-secondary font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          {linkMatch[1]}
        </a>
      );
    }

    // Si una frase al inicio del texto tiene formato "Término: detalle", resaltamos el término
    if (index === 0) {
      const termMatch = part.match(/^([A-ZÁÉÍÓÚ][a-záéíóúA-ZÁÉÍÓÚ\s]{2,25}:)(\s+.*)$/);
      if (termMatch) {
        return (
          <React.Fragment key={index}>
            <strong className="font-semibold text-primary">{termMatch[1]}</strong>
            {termMatch[2]}
          </React.Fragment>
        );
      }
    }

    return part;
  });
}

/**
 * Componente principal que renderiza el contenido estructurado del blog con tipografía profesional.
 */
export function BlogContentRenderer({ content, className = '' }: { content: string; className?: string }) {
  const normalized = normalizeBlogContent(content);
  const blocks = normalized
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className={`space-y-6 ${className}`}>
      {blocks.map((block, idx) => {
        // 1. Imagen en bloque: ![Alt text](url)
        const imgMatch = block.match(/^!\[(.*?)\]\((.*?)\)$/);
        if (imgMatch) {
          const alt = imgMatch[1];
          const src = imgMatch[2];
          return (
            <figure
              key={`img-${idx}`}
              className="my-8 overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low shadow-sm"
            >
              <img
                src={src}
                alt={alt || 'Ilustración del artículo'}
                loading="lazy"
                className="w-full max-h-[520px] object-cover"
              />
              {alt && (
                <figcaption className="py-2.5 px-4 text-center text-xs text-on-surface-variant/80 italic border-t border-outline-variant/30 bg-surface-container-lowest">
                  {alt}
                </figcaption>
              )}
            </figure>
          );
        }

        // 2. Encabezado H2: ## Título
        if (block.startsWith('## ')) {
          const title = block.replace(/^## /, '').trim();
          return (
            <h2
              key={`h2-${idx}`}
              className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-4 tracking-tight pb-3 border-b border-outline-variant/50 flex items-center gap-3"
            >
              <span className="w-2 h-6 rounded-full bg-secondary inline-block shrink-0" />
              <span>{title}</span>
            </h2>
          );
        }

        // 3. Encabezado H3: ### Título
        if (block.startsWith('### ')) {
          const title = block.replace(/^### /, '').trim();
          return (
            <h3
              key={`h3-${idx}`}
              className="text-xl md:text-2xl font-semibold text-primary mt-8 mb-3 tracking-tight"
            >
              {title}
            </h3>
          );
        }

        // 4. Encabezado H4: #### Título
        if (block.startsWith('#### ')) {
          const title = block.replace(/^#### /, '').trim();
          return (
            <h4
              key={`h4-${idx}`}
              className="text-lg md:text-xl font-medium text-primary mt-6 mb-2 tracking-tight"
            >
              {title}
            </h4>
          );
        }

        // 5. Cita / Blockquote: > Cita
        if (block.startsWith('>')) {
          const quoteLines = block
            .split('\n')
            .map((l) => l.replace(/^>\s?/, '').trim())
            .join(' ');
          return (
            <blockquote
              key={`quote-${idx}`}
              className="my-6 border-l-4 border-secondary bg-secondary/5 py-4 px-6 rounded-r-2xl italic text-body-lg text-on-surface shadow-xs"
            >
              {renderInline(quoteLines)}
            </blockquote>
          );
        }

        // 6. Separador horizontal: ---
        if (/^---+$/.test(block)) {
          return <hr key={`hr-${idx}`} className="my-10 border-outline-variant/60" />;
        }

        // 7. Lista numerada (ej: 1. Elemento)
        if (/^\d+\.\s+/m.test(block)) {
          const items = block.split('\n').filter((l) => /^\d+\.\s+/.test(l));
          if (items.length > 0) {
            return (
              <ol key={`ol-${idx}`} className="my-5 space-y-3 list-none">
                {items.map((item, itemIdx) => {
                  const cleaned = item.replace(/^\d+\.\s+/, '').trim();
                  return (
                    <li key={itemIdx} className="flex items-start gap-3 text-body-lg text-on-surface-variant">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/10 text-secondary text-xs font-bold shrink-0 mt-0.5">
                        {itemIdx + 1}
                      </span>
                      <span className="flex-1 leading-relaxed">{renderInline(cleaned)}</span>
                    </li>
                  );
                })}
              </ol>
            );
          }
        }

        // 8. Lista con viñetas (ej: - Elemento o * Elemento)
        if (/^[-*]\s+/m.test(block)) {
          const items = block.split('\n').filter((l) => /^[-*]\s+/.test(l));
          if (items.length > 0) {
            return (
              <ul key={`ul-${idx}`} className="my-5 space-y-2.5 list-none">
                {items.map((item, itemIdx) => {
                  const cleaned = item.replace(/^[-*]\s+/, '').trim();
                  return (
                    <li key={itemIdx} className="flex items-start gap-3 text-body-lg text-on-surface-variant">
                      <span className="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0" />
                      <span className="flex-1 leading-relaxed">{renderInline(cleaned)}</span>
                    </li>
                  );
                })}
              </ul>
            );
          }
        }

        // 9. Párrafo estándar
        return (
          <p
            key={`p-${idx}`}
            className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6 font-normal"
          >
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}
