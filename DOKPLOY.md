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
RESEND_API_KEY=...
CONTACT_FROM_EMAIL=contacto@solucionesorba.com
CONTACT_TO_EMAIL=jortega@solucionesorba.com
NEXT_PUBLIC_SITE_URL=https://solucionesorba.com
NEXT_PUBLIC_CONTACT_EMAIL=jortega@solucionesorba.com
```

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
