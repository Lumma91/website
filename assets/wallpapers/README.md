# Fondos de pantalla · Lumma

Cuatro fondos para celular construidos con el mismo sistema visual del sitio:
tinta `#080808`, lima `#CCFF00`, magenta `#E6007E`, rosa pastel `#FF7EB3`,
hueso `#F8F7F2`, Plus Jakarta Sans + Instrument Serif itálica y grano.

Cada uno viene en dos medidas, ambas con la misma relación de aspecto:

| Archivo | Medida | Para |
|---|---|---|
| `*-iphone.png` | 1290 × 2796 | iPhone Pro Max; el sistema reescala al resto de modelos |
| `*-android.png` | 1440 × 3120 | Pixel, Samsung y equivalentes |

## Las cuatro piezas

- **`lumma-dual-light`** — el gesto de la marca a escala de pantalla: los dos
  campos de luz se solapan y la intersección es el núcleo. Titular del sitio
  abajo. Pensado para la pantalla de bloqueo.
- **`lumma-halo`** — las cuatro etapas de Halo como anillos concéntricos, cada
  una con su color (Encendido lima, Construcción rosa, Activación magenta,
  Evolución crema). Callado a propósito: es el que mejor aguanta los iconos
  encima, así que va en la pantalla de inicio.
- **`lumma-hueso`** — la superficie clara del sitio, editorial y de día.
  «Dar forma al *potencial*». El reloj cae sobre la zona de color.
- **`lumma-sello`** — el sello giratorio del hero, detenido.

## Zonas seguras

La composición reserva el tercio superior para el reloj y los widgets, y deja
libre el 12 % inferior, donde iOS pone linterna y cámara. Por eso los titulares
viven entre el 60 % y el 85 % de la altura.

## Regenerar

La fuente está en `_fuente/`. Las tipografías no se versionan; se descargan de
Google Fonts a `_fuente/fonts/` antes de renderizar:

    cd assets/wallpapers/_fuente && mkdir -p fonts
    curl -o fonts/is-italic.ttf https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATiw.ttf
    curl -o fonts/pjs-400.ttf https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NSg.ttf
    curl -o fonts/pjs-700.ttf https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNSg.ttf
    curl -o fonts/pjs-800.ttf https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_KUnNSg.ttf
    node render.js   # necesita playwright

`wallpaper.html?d=1..4` abre cada diseño en el navegador. Todo está en unidades
relativas: para una medida nueva basta con añadirla a la lista `sizes` de
`render.js`.
