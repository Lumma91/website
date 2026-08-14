/**
 * Fotografías personales.
 *
 * Sólo hacen falta DOS archivos en  public/photos/  :
 *
 *   paseo.jpeg  · en la calle, con luz natural  → abre el recorrido
 *   habana.png  · mejilla con mejilla           → lo cierra
 *
 * La extensión da igual: si no encuentra la declarada, Photo prueba .jpg,
 * .jpeg, .png y .webp (y en mayúsculas) antes de darse por vencido.
 *
 * Aparecen una sola vez cada una, en los dos momentos donde Sonia toma la
 * palabra. En medio, el recorrido es gráfico.
 *
 * Mientras no existan, cada hueco muestra un panel neutro con el nombre del
 * archivo que espera: el sitio no se rompe y las proporciones se mantienen.
 *
 * Formato recomendado: .jpg de buena calidad, lado largo ≈ 1600 px y como
 * mucho 1 MB por archivo. Un PNG de cámara puede pesar más de 10 MB y tarda
 * una eternidad en móvil.
 *
 * `ratio` es la proporción del hueco y `focal` el punto que nunca se recorta
 * (`object-position`). Ambos están calculados sobre las fotos reales para que
 * las caras queden siempre dentro del encuadre; si cambias una foto por otra,
 * ajusta el `focal`: el primer número mueve el recorte en horizontal y el
 * segundo en vertical, de 0% a 100%.
 */

const HABANA = '/photos/habana.png'
const PASEO = '/photos/paseo.jpeg'

const ALT = {
  habana:
    'Priscilla y Sonia mejilla con mejilla, sonriendo a cámara, ante un gran mural de la Plaza Vieja de La Habana.',
  paseo:
    'Priscilla y Sonia sentadas en una terraza al aire libre, con luz natural y el cielo azul detrás.',
}

export const photos = {
  /** Apertura · la más reciente, en exterior, con luz natural. */
  opening: {
    src: PASEO,
    alt: ALT.paseo,
    ratio: '4 / 5',
    // Vertical 3:4 dentro de un hueco 4:5: recorta un poco por arriba y abajo.
    focal: '50% 34%',
  },

  /** Cierre · la más íntima y cercana de ambas. */
  letter: {
    src: HABANA,
    alt: ALT.habana,
    ratio: '4 / 5',
    // Cuadrada dentro de un hueco vertical: recorta por los lados. Las dos
    // caras quedan algo a la izquierda del centro, de ahí el 43%.
    focal: '43% 48%',
  },
}
