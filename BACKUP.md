# Puntos de restauración · lummacreative.com

Registro de versiones estables del sitio, para poder volver atrás si hace falta.

> **Estado actual: v8.** El sitio parte de v2 (`e973288`, restaurado el 23 de
> agosto) y sobre esa base se aplicaron las Fases 0 y 1 del documento de copy
> aprobado por Sonia. Todo el trabajo intermedio (v3, v4 y v5) sigue recuperable
> por hash; no se borró nada del historial. Para volver a la versión híbrida:
> `git read-tree --reset -u eb0d28c && git commit`.

## v8 · Fase 3 · servicios, Content Day, Founding Partner y fotografía propia

- **Commit:** `dcd4b59` — "Rehacer el caso Milos Pro con la fotografía nueva"
- **Fecha:** 28 de agosto de 2026
- **Origen:** documento `LUMMA · Copy nuevo, Fase 3` en Drive, con las tres
  decisiones de Sonia: Founding Partner va en `/analisis` y no en el home,
  longitud opción B (entran las dos secciones y «el equilibrio» se funde en
  Halo), y la reducción se enuncia como porcentaje.
- **Contenido nuevo en el home:** sección de servicios sobre fondo crema, Content
  Day con la escalera de cinco niveles de exposición y una banda de cuatro
  fotos, y el caso de Milos Pro con cifras de antes y después. FAQ recortada de
  diecisiete preguntas a siete, en la página y en el JSON-LD a la vez.
- **Ritmo visual:** la monotonía de bandas oscuras seguidas se rompe pasando
  servicios a crema; se añadieron `--pink-ink` y `--lime-ink` porque el verde y
  el rosa de marca no alcanzan 4.5:1 sobre fondo claro.
- **Fotografía:** entra fotografía propia y de cliente, sin stock. Estudio y
  Content Day en `assets/images/estudio/`; obra de Milos Pro en
  `assets/images/milos/` (taller, portón automático, detalle ornamental,
  instalación y la casa al anochecer).
- **Pendiente de decisión:** `assets/images/hero.jpg` sigue siendo stock y es
  además la tarjeta para compartir del sitio.
- **Condicionado:** el caso de Milos Pro se publica con su autorización y debe
  enviarse a revisión antes de salir a producción. La banda de Founding Partner
  en `/analisis` se retira, junto con su entrada en `llms.txt`, el día que se
  llenen los tres lugares.

## v7 · Fase 2 · la página de diagnóstico

- **Fecha:** 27 de agosto de 2026
- **Origen:** documento `LUMMA · Copy nuevo, Fase 2` en Drive, aprobado por Sonia
  en sus tres decisiones: se publica «Para quién no es», las configuraciones se
  nombran por forma y no con Focus/Growth/Ecosystem, y el hero queda aprobado.
- **Contenido:** `/analisis` deja de ser un análisis gratis y pasa a ser el Fit &
  Scope Diagnostic. Nueve secciones: hero nuevo, qué es esta conversación, las
  seis áreas del diagnóstico publicadas por adelantado, las cinco salidas
  posibles —incluida «este no es el momento»—, las tres configuraciones de Halo
  sin publicar cifras, la banda oscura de «para quién no es», Sobre Lumma, ocho
  preguntas de FAQ y el cierre. Marquee y datos estructurados alineados.
- **Fuente:** `02 · LUMMA Fit & Scope Diagnostic v1.0` y
  `09 · HALO Scope & Pricing Architecture v1.0`, ambos en Drive.

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
