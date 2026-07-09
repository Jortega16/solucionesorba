# Despliegue en Dokploy — Soluciones Orba

## Opción recomendada: imagen desde GitHub Actions (GHCR)

El workflow `publish.yml` construye y publica la imagen en cada push a `main`.

En Dokploy:

| Campo | Valor |
|-------|--------|
| **Source Type** | Docker |
| **Image** | `ghcr.io/jortega16/solucionesorba:latest` |
| **Registry** | GHCR (usuario + PAT con `read:packages` si el paquete es privado) |

Variables de entorno en Dokploy (runtime):

```env
# Postgres en Dokploy: usa el hostname interno del servicio, no localhost
DATABASE_URL=postgresql://usuario:clave@nombre-servicio-postgres:5432/soluciones_orba?schema=public
ADMIN_EMAIL=admin@solucionesorba.com
ADMIN_PASSWORD=...
ADMIN_SESSION_SECRET=...
RESEND_API_KEY=...
CONTACT_FROM_EMAIL=contacto@solucionesorba.com
CONTACT_TO_EMAIL=jortega@solucionesorba.com
NEXT_PUBLIC_SITE_URL=https://solucionesorba.com
NEXT_PUBLIC_CONTACT_EMAIL=jortega@solucionesorba.com
```

### Postgres + CMS (`/admin`)

1. Crea un servicio **Postgres** en Dokploy (misma red que la app).
2. En `DATABASE_URL` usa el **hostname interno** del contenedor Postgres (ej. `solucionesorba-db`), no `localhost`.
3. Al arrancar, el contenedor ejecuta `prisma migrate deploy` automáticamente.
4. Entra a `/admin`, inicia sesión y pulsa **Sincronizar páginas actuales**.

Si ves error 500 en `/admin/pages`, revisa los logs del contenedor: casi siempre es `DATABASE_URL` incorrecta o Postgres inaccesible.

Errores frecuentes de `DATABASE_URL`:

- `localhost` dentro del contenedor web → apunta al propio contenedor, no a Postgres
- Postgres en otra red Docker → la app no puede resolver el host
- Migraciones sin aplicar → el entrypoint las aplica al iniciar si la URL es válida

Secrets en GitHub (para auto-deploy): `DOKPLOY_URL`, `DOKPLOY_API_KEY`, `DOKPLOY_APPLICATION_ID`.

---

## Opción alternativa: build desde GitHub en Dokploy

Si construyes en el servidor (no GHCR), usa **exactamente** estos valores:

| Campo | Valor |
|-------|--------|
| **Repository** | `Jortega16/solucionesorba` |
| **Branch** | `main` |
| **Build Path** | vacío o `/` |
| **Build Type** | Dockerfile |
| **Dockerfile Path** | `Dockerfile` (D mayúscula) |
| **Docker Context Path** | `.` |
| **Docker Build Stage** | `production` |

Errores frecuentes:

- `dockerfile` en minúsculas → debe ser `Dockerfile`
- Build Path en subcarpeta incorrecta → dejar vacío (raíz del repo)
- Multi-stage sin etapa → poner `production` en Docker Build Stage

El `Dockerfile` está en la raíz del repositorio: https://github.com/Jortega16/solucionesorba/blob/main/Dockerfile
