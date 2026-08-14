/**
 * Geometría del BodyGraph, recreada como SVG limpio y escalable.
 * Sistema de coordenadas: viewBox 0 0 340 560.
 *
 * `shape`  → forma dibujada del centro
 * `hit`    → caja rectangular para el botón táctil superpuesto (mín. 44 px reales)
 * `gates`  → anclaje de cada puerta en el perímetro del centro
 */

export const VIEW = { width: 340, height: 560 }

export const centerShapes = {
  head: {
    kind: 'polygon',
    points: '170,16 212,76 128,76',
    hit: { x: 126, y: 12, w: 88, h: 68 },
    labelAt: { x: 170, y: 62 },
  },
  ajna: {
    kind: 'polygon',
    points: '128,90 212,90 170,150',
    hit: { x: 126, y: 86, w: 88, h: 68 },
    labelAt: { x: 170, y: 112 },
  },
  throat: {
    kind: 'rect',
    x: 136,
    y: 166,
    w: 68,
    h: 68,
    hit: { x: 132, y: 162, w: 76, h: 76 },
    labelAt: { x: 170, y: 200 },
  },
  g: {
    kind: 'polygon',
    points: '170,262 214,306 170,350 126,306',
    hit: { x: 122, y: 258, w: 96, h: 96 },
    labelAt: { x: 170, y: 306 },
  },
  ego: {
    kind: 'polygon',
    points: '228,300 272,274 272,326',
    hit: { x: 224, y: 268, w: 54, h: 64 },
    labelAt: { x: 256, y: 300 },
  },
  spleen: {
    kind: 'polygon',
    points: '40,368 120,410 40,452',
    hit: { x: 36, y: 364, w: 88, h: 92 },
    labelAt: { x: 68, y: 410 },
  },
  sacral: {
    kind: 'rect',
    x: 136,
    y: 376,
    w: 68,
    h: 68,
    hit: { x: 132, y: 372, w: 76, h: 76 },
    labelAt: { x: 170, y: 410 },
  },
  solarPlexus: {
    kind: 'polygon',
    points: '300,368 220,410 300,452',
    hit: { x: 216, y: 364, w: 88, h: 92 },
    labelAt: { x: 272, y: 410 },
  },
  root: {
    kind: 'rect',
    x: 136,
    y: 476,
    w: 68,
    h: 68,
    hit: { x: 132, y: 472, w: 76, h: 76 },
    labelAt: { x: 170, y: 510 },
  },
}

/** Anclaje de las 64 puertas usadas por los 36 canales. */
export const gatePoints = {
  // Cabeza
  64: [142, 76], 61: [170, 76], 63: [198, 76],
  // Ajna
  47: [142, 90], 24: [170, 90], 4: [198, 90],
  17: [150, 122], 43: [170, 150], 11: [190, 122],
  // Garganta
  62: [150, 166], 23: [170, 166], 56: [190, 166],
  16: [136, 186], 20: [136, 210],
  35: [204, 182], 12: [204, 206], 45: [204, 228],
  31: [146, 234], 8: [170, 234], 33: [194, 234],
  // Centro G
  7: [148, 284], 1: [170, 262], 13: [192, 284],
  10: [126, 306], 15: [146, 326], 2: [170, 350], 46: [194, 326], 25: [214, 306],
  // Ego
  51: [228, 300], 21: [250, 287], 26: [250, 313], 40: [272, 313],
  // Bazo
  57: [120, 410], 48: [64, 381], 44: [88, 393],
  50: [104, 418], 32: [88, 427], 28: [72, 436], 18: [56, 444],
  // Sacral
  5: [150, 376], 14: [170, 376], 29: [190, 376],
  34: [136, 390], 27: [136, 412], 59: [204, 412],
  42: [150, 444], 3: [170, 444], 9: [190, 444],
  // Plexo Solar
  6: [220, 410], 36: [252, 393], 22: [268, 385], 37: [284, 376],
  49: [244, 423], 55: [264, 433], 30: [284, 444],
  // Raíz
  53: [150, 476], 60: [170, 476], 52: [190, 476],
  54: [136, 490], 38: [136, 510], 58: [136, 530],
  19: [204, 490], 39: [204, 508], 41: [204, 526],
}

/**
 * Los 36 canales del BodyGraph. Se dibujan todos en hairline para que el
 * gráfico se lea auténtico; sólo los definidos se destacan.
 */
export const allChannels = [
  [64, 47], [61, 24], [63, 4],
  [17, 62], [43, 23], [11, 56],
  [31, 7], [8, 1], [33, 13], [20, 10],
  [16, 48], [20, 57], [20, 34], [45, 21], [35, 36], [12, 22],
  [15, 5], [2, 14], [46, 29], [10, 34], [10, 57], [25, 51],
  [26, 44], [40, 37],
  [50, 27], [57, 34], [18, 58], [28, 38], [32, 54],
  [42, 53], [3, 60], [9, 52], [59, 6],
  [49, 19], [55, 39], [30, 41],
]

/** Etiquetas de puerta visibles: sólo las de los canales definidos. */
export const visibleGateLabels = {
  17: { anchor: 'end', dx: -7, dy: 4 },
  62: { anchor: 'end', dx: -7, dy: 4 },
  18: { anchor: 'end', dx: -6, dy: -4 },
  58: { anchor: 'end', dx: -7, dy: 4 },
}

export const centerOrder = [
  'head',
  'ajna',
  'throat',
  'g',
  'ego',
  'spleen',
  'sacral',
  'solarPlexus',
  'root',
]
