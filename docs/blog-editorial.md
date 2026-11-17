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
y `sourceUrls` (enlaces oficiales consultados). Las fuentes también deben
aparecer como enlaces Markdown al final del contenido para el lector.
La portada se declara como primera imagen Markdown del contenido; guarde el
archivo en `public/images/blog/` y use su ruta pública `/images/blog/...`.

Una entrada publicada y con fecha alcanzada aparece automáticamente en listado,
filtros, detalle y sitemap. Un registro del CMS con el mismo idioma y slug tiene
prioridad; si está en borrador, oculta la entrada equivalente del repositorio.
Para editar o retirar un artículo automático puede modificar el JSON (DRAFT para
retirarlo) o crear ese registro equivalente en el CMS.

## Política editorial

- Una publicación nueva por fecha local en America/Costa_Rica como máximo.
  Antes de publicar, comprobar el blog público y el JSON, incluso tras un reintento.
- Rotar IA y datos, Desarrollo digital, Automatización e integraciones,
  Facturación y gestión empresarial, Comercio electrónico, Ingeniería,
  e Infraestructura. Evitar repetir el tema o el enfoque de artículos recientes.
- Priorizar novedades verificadas en documentación oficial y notas de versión.
  Conectar cada tema con un problema empresarial y una aplicación concreta.
- Si no hay noticia relevante, publicar una guía práctica con documentación
  vigente e identificarla como guía; no inventar un anuncio ni una fecha.
- Escribir en español, con ejemplos claros, 600–1000 palabras orientativas,
  sin promesas de ahorro, estadísticas o resultados sin respaldo.
- Usar la experiencia técnica únicamente para orientar los temas: conocimiento
  empresarial con IA, gobierno de datos, SaaS, integraciones de inventario y
  ventas, facturación, comercio electrónico y conexión de hardware con software.
  No mencionar clientes, nombres de proyectos o productos propios o de terceros,
  relaciones comerciales ni trabajos realizados para terceros. No publicar casos
  que permitan identificar al cliente ni atribuirse resultados de esos proyectos.
  Explicar solo problemas generales, conceptos y aplicaciones prácticas mediante
  ejemplos ficticios. La marca Soluciones Orba puede aparecer en el CTA.
  Los nombres de tecnologías y proveedores de documentación pueden citarse
  como fuentes técnicas, nunca como clientes. No revelar detalles internos ni
  presentar propuestas como implementaciones terminadas.
- Añadir título, slug único, categoría consistente, extracto, descripción SEO,
  fecha, fuentes enlazadas, portada pertinente y CTA a `/contacto`.
- Ejecutar `npm run build` antes de enviar a `main`; incluye validación del JSON,
  fuentes enlazadas, slugs únicos y máximo un artículo por fecha e idioma.
  Confirmar despliegue y URL pública; informar bloqueos sin afirmar publicación.

La tarea puede publicar y desplegar los artículos sin confirmación adicional,
según autorización del usuario. No debe cambiar otros servicios, credenciales,
permisos ni código de la aplicación para publicar contenido rutinario.
