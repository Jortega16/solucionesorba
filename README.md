# Soluciones Orba — Sitio web (Next.js)

Sitio corporativo en **español** con **Next.js 15**, App Router, React y Tailwind CSS 4. El diseño proviene de los mockups en `mokup/`.

## Estructura

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio |
| `/desarrollo-web` | Desarrollo web |
| `/plataformas` | Software a medida |
| `/inteligencia-artificial` | Inteligencia artificial |
| `/ciencia-de-datos` | Ciencia de datos |
| `/sistemas-ciberfisicos` | Sistemas ciberfísicos |
| `/control-automatizacion` | Control y automatización |
| `/prototipado` | Prototipado |
| `/plugins-wordpress` | Plugins WordPress |
| `/hosting` | Hosting |
| `/soporte` | Soporte técnico |
| `/nosotros` | Nosotros |
| `/contacto` | Contacto |
| `/proyectos` | Proyectos |
| `/blog` | Blog |

## Carpetas principales

| Carpeta | Uso |
|---------|-----|
| `src/app/` | Rutas Next.js (App Router) |
| `src/components/pages/` | Componentes React de cada página |
| `src/components/ui/` | Bloques reutilizables (hero, CTA, etc.) |
| `src/lib/` | Navegación, metadatos e imágenes |
| `mokup/` | Mockups HTML originales |
| `web/` | Sitio estático HTML (referencia opcional) |
| `scripts/` | Generación del HTML estático desde mockups |

## Desarrollo

```bash
npm install
npm run dev        # servidor de desarrollo
npm run dev:reset  # si ves errores de chunks/webpack: cierra :3000, limpia y arranca
```

Abre http://localhost:3000

## Build de producción

```bash
npm run build
npm start
```

Las páginas se generan estáticamente (SSG) desde componentes React en `src/components/pages/`.

## Variables de entorno

Copia `.env.example` a `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://tudominio.com
NEXT_PUBLIC_CONTACT_EMAIL=jortega@solucionesorba.com

# Formulario de contacto (Resend)
RESEND_API_KEY=re_xxxxxxxx
CONTACT_FROM_EMAIL=contacto@solucionesorba.com
CONTACT_TO_EMAIL=jortega@solucionesorba.com
```

El formulario en `/contacto` envía correo vía [Resend](https://resend.com). Verifica el dominio `solucionesorba.com` en Resend para que los envíos lleguen a `jortega@solucionesorba.com`.

## Actualizar contenido

Edita los componentes en `src/components/pages/` y los datos en `src/lib/images.ts` y `src/lib/site.ts`. Los mockups en `mokup/` y el script `npm run build:static` siguen disponibles solo como referencia del diseño original.

## Despliegue

Compatible con [Vercel](https://vercel.com), Netlify o cualquier hosting que soporte Next.js.

## Diseño

Tipografía: Hanken Grotesk + JetBrains Mono. Colores de marca en `src/app/globals.css`:

| Uso | HEX |
|-----|-----|
| Texto / contornos | `#000000` |
| Acento rojo | `#DF0110` |
| Acento azul | `#0031E0` |
| Acento verde | `#0E9F25` |
| Acento amarillo | `#FEAC11` |

Clases Tailwind: `text-secondary` / `bg-secondary` (azul), `text-rojo`, `bg-verde`, `text-amarillo`, etc.
