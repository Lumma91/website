# Para Priscilla · Tu Human Design

Una experiencia web editorial e interactiva creada como regalo personal para
Priscilla Oliva Leal.

React + Vite, sin backend, sin base de datos y sin dependencias más allá de
React. Todo el contenido vive separado de la presentación, en `src/data/`.

---

## 1. Antes de publicar: añadir las fotografías

**Este es el único paso pendiente.** El sitio funciona y se ve bien sin las
fotos (cada hueco muestra un panel neutro con el nombre del archivo que
espera), pero las dos fotografías son parte de la narrativa.

Son **dos archivos** en `public/photos/`, con estos nombres exactos:

| Archivo | Qué foto es | Dónde aparece |
| --- | --- | --- |
| `paseo.jpg` | En la calle, con luz natural y cielo azul | Sección 01 · la apertura |
| `habana.jpg` | Mejilla con mejilla, ante el mural de La Habana | El cierre · *De mí para ti* |

Aparecen una sola vez cada una, en los dos únicos momentos en que Sonia toma
la palabra. Todo lo que hay en medio es gráfico: al ser escasas, pesan más.

Recomendaciones:

- `.jpg` de buena calidad, lado largo ≈ 1600 px (suficiente para retina sin
  penalizar la carga).
- **No hace falta recortarlas ni retocarlas.** Cada hueco tiene su proporción,
  usa `object-fit: cover` y ya lleva calculado el punto focal sobre estas
  fotos concretas para que las caras nunca queden fuera.
- Si cambias alguna por otra y el encuadre corta mal, ajusta el campo `focal`
  en `src/data/gallery.js`: el primer número mueve el recorte en horizontal y
  el segundo en vertical (`'50% 30%'` sube el encuadre, por ejemplo).

El texto alternativo de cada foto también está en `src/data/gallery.js`, ya
escrito y descriptivo.

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

## 3. Publicar

Sirve cualquiera de las dos plataformas. **Vercel es la recomendada**, porque
lummacreative.com ya vive ahí: una sola cuenta, un solo panel, y el mismo
*Instant Rollback* que ya está documentado en `BACKUP.md`.

### Opción A · Vercel, desde el repositorio (recomendada)

En Vercel → *Add New…* → *Project* → elige este repositorio, y ajusta:

| Campo | Valor |
| --- | --- |
| **Root Directory** | `priscilla` ← **el único que hay que tocar a mano** |
| Framework Preset | Vite *(se detecta solo)* |
| Build Command | `npm run build` *(se detecta solo)* |
| Output Directory | `dist` *(se detecta solo)* |
| **Production Branch** | `claude/priscilla-human-design-site-w8ocfs` |

`vercel.json` (dentro de `priscilla/`) ya deja escritas las cabeceras de caché
de fuentes y assets, y un `X-Robots-Tag: noindex` para que el regalo no acabe
indexado en Google.

> **Importante: no fusiones `priscilla/` en la rama de producción de Lumma**
> (`claude/lumma-website-redesign-qe2hzt`).
>
> El proyecto de lummacreative.com publica el repositorio *tal cual*, sin
> build. Si esta carpeta llegara a esa rama, `lummacreative.com/priscilla`
> pasaría a servir el `index.html` de Vite **sin compilar** — una página rota,
> pública, colgando del dominio del negocio.
>
> Manteniendo este proyecto en su propia rama, el problema no existe: son dos
> proyectos de Vercel independientes leyendo ramas distintas del mismo
> repositorio.

### Opción B · Netlify arrastrando la carpeta (la más simple, sin tocar nada)

Es la vía sin riesgo: no conecta el repositorio, no comparte nada con el sitio
del negocio y **no requiere instalar Node ni ejecutar ningún build**.

1. `npm run build` (o usa la carpeta ya construida que se entregó aparte).
2. Copia las dos fotos dentro de **`dist/photos/`**.
3. Arrastra la carpeta `dist/` entera a https://app.netlify.com/drop

El paso 2 funciona **después** de compilar porque las fotos viven en
`public/`: Vite las copia tal cual y el navegador las pide en tiempo de
ejecución por su ruta absoluta (`/photos/habana.jpg`). No se empaquetan en el
JS, así que añadirlas a la carpeta ya construida es suficiente. Comprobado:
los huecos cargan desde los archivos sueltos, sin recompilar.

Para cambiar una foto más adelante, sustitúyela y vuelve a arrastrar la
carpeta. Y si falta alguna, ese hueco simplemente se ve como un panel neutro:
no se rompe nada.

### Opción C · Netlify desde GitHub

*Add new site* → *Import an existing project*, con **base** `priscilla`,
**build** `npm run build` y **publish** `priscilla/dist`. Todo eso ya está
escrito en `netlify.toml`.

---

`public/_headers` lleva el caché de fuentes y assets y el `noindex`, y Netlify
lo lee tanto conectando el repositorio como arrastrando la carpeta.

No hay enrutado en cliente, así que no hace falta `_redirects` ni reglas de
*rewrite* en ninguna de las opciones.

---

## 4. Cómo está organizado

```
src/
  components/     piezas reutilizables (BodyGraph, figuras, accordions…)
  sections/       las secciones del recorrido, en orden
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
  respetado en todo el sitio.

- **La historia va delante, el mapa detrás.** El vocabulario de Human Design
  vive en una sola sección, *El mapa*, colocada al final y marcada como
  saltable. El resto del recorrido no nombra un solo centro ni canal: cuenta
  lo mismo con escenas cotidianas. Alguien que no sepa nada del sistema puede
  leerlo entero sin encontrarse un término que no entienda.

- **Ocho figuras SVG en lugar de adorno.** `src/components/Figures.jsx`. Cada
  una dice lo mismo que su sección pero en forma: si tapas el texto, la figura
  sigue explicando la idea. Se construyen todas con las mismas primitivas
  —círculo lleno, círculo abierto, línea fina, arco— para que se lean como una
  familia, y se adaptan solas al fondo oscuro.

- **Tres tonos de fondo alternándose** (`.tone-surface`, `.tone-dark` y el
  fondo base) para que el scroll tenga pulso y no se lea como un documento
  plano. Todo lo que cambia con el tono se declara en un único bloque de
  `globals.css`.

---

Creado para Priscilla, con cariño. · Sonia · 2026
