# Puntos de restauración · lummacreative.com

Registro de versiones estables del sitio, para poder volver atrás si hace falta.

> **Estado actual: v6.** El sitio parte de v2 (`e973288`, restaurado el 23 de
> agosto) y sobre esa base se aplicaron las Fases 0 y 1 del documento de copy
> aprobado por Sonia. Todo el trabajo intermedio (v3, v4 y v5) sigue recuperable
> por hash; no se borró nada del historial. Para volver a la versión híbrida:
> `git read-tree --reset -u eb0d28c && git commit`.

## v6 · Fases 0 y 1 del copy nuevo · sobre la base de v2

- **Fecha:** 27 de agosto de 2026
- **Origen:** documento `LUMMA · Copy nuevo, Fases 0 y 1` en Drive, editado y
  aprobado por Sonia (tramo de USD 8,000 se queda; hero aprobado; redacción de
  «Sobre Lumma» reescrita por ella).
- **Fase 0 — correcciones factuales:** marquee con Brand System · Halo Content ·
  Films · Miami, FL · *Light your brand*. Formulario de `/analisis` con el ICP
  real y el filtro de inversión por proyecto de 90 días, más dos preguntas de
  capacidad. Rol de Sonia como Founder & Business Lead. Fuera los tres reels de
  Instagram y la barra de estadísticas. JSON-LD con los tres servicios reales y
  `llms.txt` reescrito.
- **Fase 1 — marco narrativo:** hero nuevo, las tres fases de Halo con las
  definiciones del playbook, «Encendido» pasa a llamarse Halo y se presenta como
  proyecto cerrado de 90 días, la sección del equilibrio invierte su argumento,
  cuatro respuestas de FAQ reescritas y el cierre pasa a «La luz ya está en tu
  marca» con el botón «Solicitar diagnóstico». «Empieza gratis» sale del sitio.
- **Pendiente:** Fase 2 (la página `/analisis` completa como Fit & Scope
  Diagnostic), Fase 3 (Brand System, Content Day, Founding Partner) y Fase 4
  (Milos Pro como caso real, bloqueado por el acceso a los archivos).

> **Nota sobre tags y ramas de respaldo.** La credencial de las sesiones de
> Claude Code sólo puede escribir en la rama designada, así que no es posible
> publicar ramas ni tags de respaldo. No hace falta: cada commit publicado en
> `origin/claude/lumma-website-redesign-qe2hzt` es un punto de restauración
> permanente y recuperable. Los hashes de abajo son ese respaldo.

## v5 · Intervención híbrida · APROBADA

- **Commit:** `eb0d28c` — "Complete the home and correct Signal Scan, the founder role and the hero"
- **Fecha:** agosto 2026
- **Contenido:** el sistema oscuro de v4 más superficies de hueso (#F8F7F2) en
  capacidades, punto de vista, estudio, ideas y FAQ. Hero con la lógica del
  header de Films y fondo Dual Light. Caso Milos Pro como recorrido de cuatro
  pasos, sin placeholder. Signal Scan sobre hueso con panel de lectura en tinta
  y el verde reducido a señal. Halo con riel de continuidad y una sola
  numeración. **Rol de Sonia corregido a Founder** en ES y EN. Altura de
  desktop 9.927 px.
- **Copia descargable:** `lumma-respaldo-v5-hibrida.zip` (58 archivos),
  entregada por chat el 23 de agosto de 2026.

## v4 · Sistema visual anterior con la estructura nueva

- **Commit:** `6f5b3eb` — "Move the placeholder pages onto the approved visual system"
- **Fecha:** agosto 2026
- **Contenido:** home de trece secciones con el sistema visual del sitio anterior
  (fondo tinta, grano, blobs, sello giratorio, banda verde, tarjetas Halo con
  numerales fantasma) y los copies y la arquitectura de la versión nueva.
  Las cinco páginas marcador, `/films` y `/analisis` comparten el mismo sistema.

## v3 · Home Luminous Matter 2.0 · descartada

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
