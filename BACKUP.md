# Puntos de restauración · lummacreative.com

Registro de versiones estables del sitio, para poder volver atrás si hace falta.

> **Nota sobre tags y ramas de respaldo.** La credencial de las sesiones de
> Claude Code sólo puede escribir en la rama designada, así que no es posible
> publicar ramas ni tags de respaldo. No hace falta: cada commit publicado en
> `origin/claude/lumma-website-redesign-qe2hzt` es un punto de restauración
> permanente y recuperable. Los hashes de abajo son ese respaldo.

## v3 · Home Luminous Matter 2.0

- **Commit:** `d386f7e` — "Rebuild the home as Luminous Matter 2.0"
- **Fecha:** agosto 2026
- **Contenido:** home de trece secciones con el sistema Luminous Matter,
  marcadores de ruta en `/work`, `/work/milos-pro`, `/capabilities`,
  `/studio` e `/insights`, y `/films`, `/analisis` y `/gracias` sin cambios
  de diseño.

## v2 · Marco Halo, antes del rediseño Luminous Matter 2.0

- **Commit:** `e973288` — "Set the Sobre Lumma image on /analisis and fix the circular crop"
- **Fecha:** agosto 2026
- **Contenido:** home con marco Halo (situación, método, Encendido, equilibrio,
  trabajo, nosotros, análisis, FAQ de 17 preguntas), `/analisis`, `/films`,
  `/gracias`. Bilingüe ES/EN, Meta Pixel + GA4 + HubSpot, robots.txt,
  sitemap.xml, llms.txt, JSON-LD y menú móvil.

## v1 · Oferta de 4 servicios

- **Commit:** `5fbe378` — "Scope the reduced-motion rule to looping animations only"
- **Contenido:** home con 4 servicios, testimonios y proceso de 4 pasos.

## Cómo volver a cualquiera de estos puntos

Opción A — revertir el repositorio:

    git checkout claude/lumma-website-redesign-qe2hzt
    git revert --no-commit <hash>..HEAD && git commit -m "Restore <hash>"
    # o de forma directa:
    git reset --hard <hash> && git push --force-with-lease

Opción B — rollback instantáneo en Vercel, sin tocar git:
Dashboard → Deployments → elegir el deployment anterior → "Instant Rollback".
Vercel conserva todos los deployments previos.

## Recuperar un archivo suelto

    git show <hash>:index.html > index.html
