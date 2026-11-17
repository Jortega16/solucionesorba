'use client';

import React, { useState, useRef } from 'react';
import type { BlogPost } from '@prisma/client';
import { LOCALES } from '@/lib/i18n';
import { BlogContentRenderer, normalizeBlogContent, estimateReadTime, extractCoverImage } from '@/lib/blog-renderer';

type PostFormProps = {
  action: (formData: FormData) => void | Promise<void>;
  post?: BlogPost;
  submitLabel: string;
};

export function PostForm({ action, post, submitLabel }: PostFormProps) {
  const [content, setContent] = useState<string>(post?.content ?? '');
  const [title, setTitle] = useState<string>(post?.title ?? '');
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isCoverUploadRef = useRef<boolean>(false);

  // Inserta texto en la posición actual del cursor dentro del textarea
  const insertAtCursor = (prefix: string, suffix: string = '', defaultText: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setContent((prev) => prev + prefix + defaultText + suffix);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentText = textarea.value;
    const selectedText = currentText.substring(start, end) || defaultText;
    const replacement = prefix + selectedText + suffix;

    const newContent = currentText.substring(0, start) + replacement + currentText.substring(end);
    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + selectedText.length);
    }, 50);
  };

  // Manejador de subida de archivos de imagen
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadMessage('Subiendo imagen...');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Error al subir la imagen');
      }

      const imageUrl = data.url;
      const altText = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');

      if (isCoverUploadRef.current) {
        // Se coloca como portada al inicio del contenido
        setContent((prev) => `![${altText}](${imageUrl})\n\n` + prev);
        setUploadMessage('¡Imagen de portada agregada exitosamente!');
      } else {
        // Se inserta en la posición del cursor
        insertAtCursor(`\n\n![${altText}](`, ')\n\n', imageUrl);
        setUploadMessage('¡Imagen agregada al contenido exitosamente!');
      }
    } catch (err: any) {
      setUploadMessage(`Error: ${err.message || 'No se pudo subir'}`);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setTimeout(() => setUploadMessage(null), 4000);
    }
  };

  // Auto-formatear y arreglar textos pegados (ej. encabezados juntos, párrafos sin separar)
  const handleAutoFormat = () => {
    const cleaned = normalizeBlogContent(content);
    setContent(cleaned);
    setUploadMessage('✨ Contenido normalizado y formateado correctamente.');
    setTimeout(() => setUploadMessage(null), 3000);
  };

  const detectedCover = extractCoverImage(content);
  const readTime = estimateReadTime(content);

  return (
    <form action={action} className="space-y-6 max-w-5xl">
      {post ? <input type="hidden" name="id" value={post.id} /> : null}

      {/* Input oculto para subir imágenes */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml"
        className="hidden"
        onChange={handleFileUpload}
      />

      {/* Idioma y Estado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block space-y-1">
          <span className="text-sm font-semibold text-gray-700">Idioma</span>
          <select
            name="locale"
            defaultValue={post?.locale ?? 'es'}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {LOCALES.map((locale) => (
              <option key={locale} value={locale}>
                {locale.toUpperCase()}
              </option>
            ))}
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-semibold text-gray-700">Estado</span>
          <select
            name="status"
            defaultValue={post?.status ?? 'DRAFT'}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="DRAFT">Borrador (DRAFT)</option>
            <option value="PUBLISHED">Publicado (PUBLISHED)</option>
          </select>
        </label>
      </div>

      {/* Título */}
      <label className="block space-y-1">
        <span className="text-sm font-semibold text-gray-700">Título del Artículo</span>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ej: Sistemas ciberfísicos sin complicar su operación"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </label>

      {/* Slug y Categoría */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block space-y-1">
          <span className="text-sm font-semibold text-gray-700">Slug (URL amigable)</span>
          <input
            name="slug"
            defaultValue={post?.slug ?? ''}
            placeholder="sistemas-ciberfisicos-sin-complicar"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-semibold text-gray-700">Categoría</span>
          <input
            name="category"
            defaultValue={post?.category ?? 'Ingeniería'}
            placeholder="Ej: Ingeniería, Negocios, Ciberfísicos..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>

      {/* Resumen y SEO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block space-y-1">
          <span className="text-sm font-semibold text-gray-700">Resumen visible (Excerpt)</span>
          <textarea
            name="excerpt"
            defaultValue={post?.excerpt ?? ''}
            placeholder="Breve descripción que aparece en las tarjetas del blog y encabezado..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 min-h-20 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-semibold text-gray-700">Descripción SEO</span>
          <textarea
            name="description"
            defaultValue={post?.description ?? ''}
            placeholder="Descripción para motores de búsqueda (Google) y redes sociales..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 min-h-20 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>

      {/* Fecha de publicación */}
      <label className="block space-y-1">
        <span className="text-sm font-semibold text-gray-700">Fecha de Publicación</span>
        <input
          name="publishedAt"
          type="datetime-local"
          defaultValue={post?.publishedAt ? post.publishedAt.toISOString().slice(0, 16) : ''}
          className="w-full md:w-80 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      {/* Banner de Portada Detectada */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {detectedCover.coverUrl ? (
            <div className="relative w-20 h-14 rounded-lg overflow-hidden border border-slate-300 shrink-0 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={detectedCover.coverUrl}
                alt={detectedCover.coverAlt || 'Portada'}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center text-slate-500 text-xl shrink-0">
              🖼️
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {detectedCover.coverUrl ? 'Imagen de portada detectada' : 'Sin imagen de portada principal'}
            </p>
            <p className="text-xs text-slate-500">
              {detectedCover.coverUrl
                ? detectedCover.coverAlt || 'La primera imagen del contenido se usa como hero banner.'
                : 'La primera imagen que agregues en el artículo se convertirá automáticamente en la portada.'}
            </p>
          </div>
        </div>

        <button
          type="button"
          disabled={uploading}
          onClick={() => {
            isCoverUploadRef.current = true;
            fileInputRef.current?.click();
          }}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors disabled:opacity-50"
        >
          {uploading ? 'Subiendo...' : '🌟 Subir Imagen de Portada'}
        </button>
      </div>

      {/* Mensaje de feedback de subida o formateo */}
      {uploadMessage && (
        <div className="p-3 text-sm rounded-lg bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-2">
          <span>ℹ️</span> {uploadMessage}
        </div>
      )}

      {/* Sección de Contenido con Tabs y Barra de Herramientas */}
      <div className="border border-slate-300 rounded-xl overflow-hidden shadow-sm bg-white">
        {/* Cabecera de Tabs */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('edit')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'edit'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ✏️ Editor
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'preview'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              👁️ Vista Previa en Vivo
            </button>
          </div>

          <div className="text-xs text-slate-500 hidden sm:block">
            {readTime} min de lectura · {content.length} caracteres
          </div>
        </div>

        {/* Toolbar de formato rápido */}
        {activeTab === 'edit' && (
          <div className="flex flex-wrap items-center gap-1.5 p-2 border-b border-slate-200 bg-slate-50/70 text-xs">
            <button
              type="button"
              title="Encabezado H2"
              onClick={() => insertAtCursor('\n\n## ', '\n\n', 'Título de Sección')}
              className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 font-bold text-slate-700"
            >
              H2
            </button>
            <button
              type="button"
              title="Encabezado H3"
              onClick={() => insertAtCursor('\n\n### ', '\n\n', 'Subtítulo')}
              className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 font-semibold text-slate-700"
            >
              H3
            </button>
            <span className="w-px h-5 bg-slate-300 mx-1" />
            <button
              type="button"
              title="Negrita"
              onClick={() => insertAtCursor('**', '**', 'texto en negrita')}
              className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 font-bold text-slate-800"
            >
              B
            </button>
            <button
              type="button"
              title="Cursiva"
              onClick={() => insertAtCursor('*', '*', 'texto en cursiva')}
              className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 italic text-slate-800"
            >
              I
            </button>
            <button
              type="button"
              title="Cita destacada"
              onClick={() => insertAtCursor('\n> ', '\n\n', 'Idea o cita destacada importante')}
              className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700"
            >
              &ldquo; Cita
            </button>
            <span className="w-px h-5 bg-slate-300 mx-1" />
            <button
              type="button"
              title="Lista de viñetas"
              onClick={() => insertAtCursor('\n- ', '\n- Segundo punto\n', 'Primer punto')}
              className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700"
            >
              • Lista
            </button>
            <button
              type="button"
              title="Lista numerada"
              onClick={() => insertAtCursor('\n1. ', '\n2. Segundo paso\n', 'Primer paso')}
              className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700"
            >
              1. Pasos
            </button>
            <span className="w-px h-5 bg-slate-300 mx-1" />
            <button
              type="button"
              disabled={uploading}
              title="Subir e insertar imagen en el texto"
              onClick={() => {
                isCoverUploadRef.current = false;
                fileInputRef.current?.click();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              📷 Subir Imagen
            </button>
            <button
              type="button"
              title="Insertar enlace o imagen por URL"
              onClick={() => {
                const url = prompt('Ingresa la URL de la imagen:');
                if (url) {
                  const alt = prompt('Descripción / Pie de foto (opcional):') || 'Imagen';
                  insertAtCursor(`\n\n![${alt}](`, ')\n\n', url);
                }
              }}
              className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700"
            >
              🔗 URL
            </button>
            <div className="ml-auto">
              <button
                type="button"
                onClick={handleAutoFormat}
                title="Corrige automáticamente títulos pegados a párrafos y espacios"
                className="inline-flex items-center gap-1 px-3 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 font-medium transition-colors"
              >
                ✨ Arreglar Formato
              </button>
            </div>
          </div>
        )}

        {/* Área del editor o de la vista previa */}
        {activeTab === 'edit' ? (
          <div>
            <textarea
              ref={textareaRef}
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Escribe o pega aquí el contenido de tu artículo en formato Markdown..."
              className="w-full p-4 min-h-[500px] font-mono text-sm leading-relaxed border-none focus:outline-none resize-y"
              required
            />
            <div className="bg-slate-50 px-4 py-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <p>
                💡 Tip: Usa <code className="bg-slate-200 px-1 rounded">## Título</code> para subtítulos y{' '}
                <code className="bg-slate-200 px-1 rounded">![Pie de foto](url)</code> para insertar imágenes.
              </p>
              <p>
                Líneas: {content ? content.split('\n').length : 0} · Palabras:{' '}
                {content ? content.trim().split(/\s+/).filter(Boolean).length : 0}
              </p>
            </div>
          </div>
        ) : (
          <div className="p-6 md:p-10 bg-slate-50/50 min-h-[500px]">
            {/* Simulación del lector real */}
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200 space-y-6">
              <div className="space-y-3 pb-6 border-b border-slate-100">
                <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Vista Previa
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  {title || 'Título del artículo'}
                </h1>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span>⏱️ {readTime} min de lectura</span>
                  <span>📅 Hoy</span>
                </div>
              </div>

              {detectedCover.coverUrl && (
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={detectedCover.coverUrl}
                    alt={detectedCover.coverAlt || 'Portada'}
                    className="w-full h-72 object-cover"
                  />
                  {detectedCover.coverAlt && (
                    <p className="p-2 text-center text-xs text-slate-500 italic bg-slate-50 border-t border-slate-100">
                      {detectedCover.coverAlt}
                    </p>
                  )}
                </div>
              )}

              <div className="pt-2">
                <BlogContentRenderer content={detectedCover.remainingContent} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Botón de Enviar */}
      <div className="flex items-center justify-end gap-3 pt-4">
        <button
          type="submit"
          className="bg-slate-900 hover:bg-black text-white font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-colors"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
