# Para Priscilla · Tu Human Design

Una experiencia web editorial e interactiva creada como regalo personal para
Priscilla Oliva Leal.

React + Vite, sin backend, sin base de datos y sin dependencias más allá de
React. Todo el contenido vive separado de la presentación, en `src/data/`.

---

## 1. Antes de publicar: añadir las fotografías

**Este es el único paso pendiente.** El sitio funciona y se ve bien sin las
fotos (cada hueco muestra un panel neutro con el nombre del archivo que
espera), pero las tres fotografías son parte de la narrativa.

Copia los archivos en `public/photos/` con **estos nombres exactos**:

| Archivo | Dónde aparece | Qué foto va aquí |
| --- | --- | --- |
| `apertura.jpg` | Sección 01 · apertura | La más reciente en exterior, con luz natural |
| `antes.jpg` | Collage de amistad | La más antigua |
| `siempre.jpg` | Collage de amistad | La intermedia en el tiempo |
| `ahora.jpg` | Collage de amistad | La más reciente |
| `carta.jpg` | Cierre · De mí para ti | La más íntima y cercana de ambas |

Recomendaciones:

- `.jpg` de buena calidad, lado largo ≈ 1600 px (suficiente para retina sin
  penalizar la carga).
- No hace falta recortarlas: cada hueco tiene su proporción y usa
  `object-fit: cover`.
- Si en alguna el encuadre corta mal las caras, ajusta el punto focal en
  `src/data/gallery.js` (campo `focal`, por ejemplo `'50% 30%'` para subir el
  encuadre).

El texto alternativo de cada foto también está en `src/data/gallery.js`.

---

## 2. Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
npm run preview  # sirve /dist en local
```

Node 20 o superior.

---

## 3. Publicar en Netlify

**Opción A · arrastrar y soltar**

1. `npm run build`
2. Arrastra la carpeta `dist/` a https://app.netlify.com/drop

**Opción B · conectar el repositorio de GitHub**

En Netlify → *Add new site* → *Import an existing project*, y usa:

- **Base directory:** `priscilla`
- **Build command:** `npm run build`
- **Publish directory:** `priscilla/dist`

`netlify.toml` ya deja esta configuración escrita, junto con las cabeceras de
caché de fuentes y assets.

No hay enrutado en cliente, así que no hace falta `_redirects`.

---

## 4. Cómo está organizado

```
src/
  components/     piezas reutilizables (BodyGraph, collage, accordions…)
  sections/       las nueve secciones del recorrido, en orden
  data/
    humanDesign.js      centros, canales, snapshot, detalles técnicos, navegación
    bodygraphGeometry.js coordenadas del SVG (36 canales, 64 puertas)
    gallery.js          fotografías: rutas, alt y encuadre
  hooks/          sección activa + progreso de scroll, media queries
  styles/         variables (design system) y estilos globales
```

**Para cambiar textos**, casi todo está en `src/data/humanDesign.js` y en el
JSX de cada sección (`src/sections/`). El BodyGraph no hay que tocarlo: lee
qué centros y canales están definidos desde `humanDesign.js`.

---

## 5. Decisiones que conviene conocer

- **BodyGraph propio.** Es un SVG recreado desde cero (viewBox 340×560) con la
  geometría clásica: los nueve centros, las 64 puertas y los 36 canales. Los
  canales no definidos se dibujan en hairline para que el gráfico se lea
  auténtico; sólo destacan los dos definidos, 17–62 y 18–58. Los centros son
  botones HTML reales superpuestos al SVG, para que funcionen con teclado y
  tengan un área táctil de 44 px de verdad.

- **Fuentes auto-alojadas.** Manrope (variable, 400–700) e Instrument Serif
  viven en `public/fonts/`, en subconjuntos latin y latin-ext. Evita una
  petición bloqueante a Google Fonts y hace que el sitio siga viéndose igual
  dentro de años.

- **Dos colores ajustados respecto a la paleta original**, para cumplir
  contraste WCAG AA en texto pequeño (ambos documentados en
  `src/styles/variables.css`):
  - `--text-muted`: `#81838D` → `#616470` (3.2:1 → 5.0:1)
  - texto en cobalto: `#7F96E4` → `--accent-text: #4F60B0` (2.4:1 → 4.9:1)

  `#7F96E4` se mantiene intacto en gráficos, fondos y bordes, que es donde
  ocupa superficie.

- **Animación sin librerías.** Todo es CSS + IntersectionObserver. El bundle
  no lleva Framer Motion ni equivalentes, y `prefers-reduced-motion` está
  respetado en todo el sitio, incluido el desfase del collage.

---

Creado para Priscilla, con cariño. · Sonia · 2026
