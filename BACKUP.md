# Puntos de restauración · lummacreative.com

Registro de versiones estables del sitio, para poder volver atrás si hace falta.

## v1 · Oferta de 4 servicios (antes de la reestructura "Halo")

- **Commit:** `5fbe378` — "Scope the reduced-motion rule to looping animations only"
- **Fecha:** julio 2026
- **Contenido:** home con 4 servicios (Branding, Social Media, Publicidad Digital,
  Lumma Films), testimonios, proceso de 4 pasos, landing /analisis, /gracias,
  bilingüe ES/EN, Pixel de Meta + HubSpot integrados.

### Cómo volver a esta versión

Opción A — revertir el repositorio (desde una terminal con permisos):

    git checkout claude/lumma-website-redesign-qe2hzt
    git revert --no-commit 5fbe378..HEAD && git commit -m "Restore v1"
    # o de forma directa:
    git reset --hard 5fbe378 && git push --force-with-lease

Opción B — rollback instantáneo en Vercel (sin tocar git):
Dashboard → Deployments → elegir el deployment anterior → "Instant Rollback".
Vercel conserva todos los deployments previos.
