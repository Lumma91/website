# Registry de medios · Home V1

Rutas esperadas por el Home. Los archivos que faltan se muestran como
**placeholder explícito** en la página (bloque etiquetado "Media pendiente"),
nunca sustituidos por stock ni por imágenes generadas.

El intercambio es directo: subir el archivo con el nombre exacto de la columna
"Ruta esperada" y el placeholder desaparece solo. No hay que tocar el HTML.

---

## Milos Pro · caso destacado

Origen: Google Drive de Sonia. No se pudieron descargar en la sesión de
implementación porque el proxy de red del entorno bloquea `drive.google.com`
y la descarga vía conector devolvería el archivo dentro del contexto del
modelo, lo cual no es viable para archivos de 1–2 MB.

| Ruta esperada | Archivo original en Drive | Uso | Prioridad |
|---|---|---|---|
| `assets/images/milos/poster.jpg` | `356b788f-35d2-4ad2-b9ac-b5e0621eff6b.JPG` | Poster principal del caso. Portón terminado Casa Cayos, encuadre frontal | 1 |
| `assets/images/milos/marca-operacion.jpg` | `a08711cd-191c-4e14-8455-f72ec8b1ff91.jpg` | Uniforme y marca en operación | 2 |
| `assets/images/milos/equipo.jpg` | `dcbc5789-618b-4d24-8359-2f202d4c31cf.JPG` | Equipo trabajando sobre barandales | 3 |
| `assets/images/milos/escala.jpg` | `ef3ed1f0-205e-4140-b001-b6c6a83fcd95.JPG` | Escala arquitectónica, North Miami Beach | 4 |
| `assets/images/milos/material.jpg` | `IMG_8931.jpg` | Textura de metal cepillado. Transición, nunca hero | 5 |
| `assets/images/milos/acceso.jpg` | `46187513-440f-441f-b5c0-2915d3e0a9ce.JPG` | Keypad y acceso peatonal | 6 |

### Video del caso

| Ruta esperada | Uso |
|---|---|
| `assets/video/milos-montaje.mp4` | Montaje silencioso de 10–12 s según la secuencia del Case Study Brief §15 |

Mientras no exista, el componente usa `milos/poster.jpg` como imagen fija.
**No subir el MOV original**: exportar comprimido para web (H.264, ~2–4 Mbps,
sin audio) antes de publicarlo.

---

## Hero · composición modular

El hero necesita 3–4 capas de trabajo y proceso, no una sola fotografía.

| Ruta esperada | Uso |
|---|---|
| `assets/images/hero/capa-1.jpg` | Fragmento de un proyecto real |
| `assets/images/hero/capa-2.jpg` | Captura de una interfaz o pieza de contenido |
| `assets/images/hero/capa-3.jpg` | Textura o detalle material |

El isotipo Dual Light se dibuja en SVG dentro de la página; no requiere archivo.

---

## Studio · retrato de Sonia

| Ruta esperada | Uso |
|---|---|
| `assets/images/studio/sonia.jpg` | Retrato con luz natural y ambiente de trabajo |

Pendiente de sesión. El spec prohíbe explícitamente stock o retrato generado
con IA en este bloque: hasta que exista, se muestra una composición de proceso
con el espacio reservado y rotulado.

---

## Films

| Ruta esperada | Uso |
|---|---|
| `assets/video/films-reel.mp4` | Reel o montaje de proceso, silenciado, con controles |
| `assets/images/films/poster.jpg` | Poster del reel |

---

## Logo

El logotipo se dibuja en SVG dentro de las páginas: isotipo Dual Light
(círculo verde a la izquierda, rosa a la derecha, intersección central) más
el wordmark LUMMA en Plus Jakarta Sans Bold.

No se usa la "a" serif separada en ninguna parte del sitio.

Los PNG oficiales de fondo transparente están en Drive
(`Logos-Lumma-fondo-transparente`) por si hacen falta para OpenGraph o para
piezas fuera del sitio; el sitio no los necesita porque el SVG escala mejor.
