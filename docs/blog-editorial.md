# Publicación editorial automática

El blog reúne los artículos del CMS y los de `src/content/blog/posts.json`.
Los artículos del repositorio se publican con un commit a `main` y el despliegue
normal. No requieren credenciales del administrador ni una clave de IA dentro del sitio.
La investigación y redacción las ejecuta la tarea programada de ChatGPT; este
repositorio no contiene un cron ni llama por sí solo a un modelo.

## Formato de cada entrada

El archivo es un arreglo JSON. Cada objeto contiene `slug`, `locale` (`es`),
`title`, `description` (SEO), `category`, `excerpt`, `content` (Markdown),
`status` (`PUBLISHED` o `DRAFT`), `publishedAt`, `updatedAt` (ISO 8601 con zona)
y `sourceUrls` (enlaces oficiales consultados). `publicationMode` distingue
`scheduled` de `manual`; si se omite, se considera `scheduled`. Las fuentes también deben
aparecer como enlaces Markdown al final del contenido para el lector.
La portada se declara como primera imagen Markdown del contenido; guarde el
archivo en `public/images/blog/` y use su ruta pública `/images/blog/...`.

Una entrada publicada y con fecha alcanzada aparece automáticamente en listado,
filtros, detalle y sitemap. Un registro del CMS con el mismo idioma y slug tiene
prioridad; si está en borrador, oculta la entrada equivalente del repositorio.
Para editar o retirar un artículo automático puede modificar el JSON (DRAFT para
retirarlo) o crear ese registro equivalente en el CMS.

## Política editorial

- Una publicación automática por fecha local en America/Costa_Rica como máximo.
  Si el usuario ejecuta manualmente la tarea o pide una publicación manual,
  publicar un artículo nuevo aunque ya exista uno de hoy. Marcarlo con
  `publicationMode: "manual"`; usar `"scheduled"` en ejecuciones automáticas.
  Cada orden manual autoriza un artículo nuevo, no duplicados por reintentos.
  Antes de publicar, comprobar el blog público y el JSON.
- Rotar IA y datos, Desarrollo digital, Automatización e integraciones,
  Facturación y gestión empresarial, Comercio electrónico, Ingeniería,
  e Infraestructura. Evitar repetir el tema o el enfoque de artículos recientes.
- Priorizar novedades verificadas en documentación oficial y notas de versión.
  Conectar cada tema con un problema empresarial y una aplicación concreta.
- Si no hay noticia relevante, publicar una guía práctica con documentación
  vigente e identificarla como guía; no inventar un anuncio ni una fecha.
- Escribir en español, con ejemplos claros, 600–1000 palabras orientativas,
  sin promesas de ahorro, estadísticas o resultados sin respaldo.
- Se permite mencionar nombres de proyectos y productos propios de Soluciones
  Orba y enlazarlos cuando sean pertinentes, por ejemplo Facturación Orba.
  Verificar titularidad y funcionalidades disponibles; no presentar funciones
  planeadas como implementadas ni inventar resultados.
- Usar ejemplos ficticios identificados como tales o situaciones prácticas de
  nuestro nicho: pymes, facturación, inventario, ventas, automatización, datos,
  SaaS e IoT. Pueden relacionarse con productos propios y capacidades comprobadas,
  sin presentarlos como casos reales de clientes.
- No mencionar clientes, nombres de proyectos o productos de terceros como
  trabajos realizados, relaciones comerciales ni desarrollos para terceros.
  No publicar casos identificables de terceros, testimonios ni resultados
  atribuidos a esos trabajos. La marca Soluciones Orba puede aparecer en el texto
  y en el CTA. Se pueden citar tecnologías y proveedores como fuentes técnicas,
  nunca como clientes. No revelar detalles internos.
- Añadir título, slug único, categoría consistente, extracto, descripción SEO,
  fecha, fuentes enlazadas, portada pertinente y CTA a `/contacto`.
- Ejecutar `npm run build` antes de enviar a `main`; incluye validación del JSON,
  fuentes enlazadas, slugs únicos y máximo un artículo automático por fecha e idioma. Las publicaciones manuales
  adicionales no consumen ese cupo; los slugs siempre deben ser únicos.
  Confirmar despliegue y URL pública; informar bloqueos sin afirmar publicación.

La tarea puede publicar y desplegar los artículos sin confirmación adicional,
según autorización del usuario. No debe cambiar otros servicios, credenciales,
permisos ni código de la aplicación para publicar contenido rutinario.
