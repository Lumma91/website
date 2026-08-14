/**
 * Fotografías personales.
 *
 * Sólo hacen falta TRES archivos en  public/photos/  (dos de ellos aparecen
 * en dos sitios distintos del recorrido, con encuadres diferentes):
 *
 *   noche.jpg   · la más antigua, de noche, con flash
 *   habana.jpg  · mejilla con mejilla, ante el mural de La Habana
 *   paseo.jpg   · en la calle, con luz natural, la más reciente
 *
 * Mientras no existan, cada hueco muestra un panel neutro con el nombre del
 * archivo que espera: el sitio no se rompe y las proporciones se mantienen.
 *
 * Formato recomendado: .jpg de buena calidad, lado largo ≈ 1600 px.
 *
 * `ratio` es la proporción del hueco y `focal` el punto que nunca se recorta
 * (`object-position`). Ambos están calculados sobre las fotos reales para que
 * las caras queden siempre dentro del encuadre; si cambias una foto por otra,
 * ajusta el `focal`: el primer número mueve el recorte en horizontal y el
 * segundo en vertical, de 0% a 100%.
 */

const HABANA = '/photos/habana.jpg'
const PASEO = '/photos/paseo.jpg'
const NOCHE = '/photos/noche.jpg'

const ALT = {
  habana:
    'Priscilla y Sonia mejilla con mejilla, sonriendo a cámara, ante un gran mural de la Plaza Vieja de La Habana.',
  paseo:
    'Priscilla y Sonia sentadas en una terraza al aire libre, con luz natural y el cielo azul detrás.',
  noche:
    'Priscilla y Sonia muy juntas y sonrientes en una fiesta, hace unos cuantos años.',
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

  /** Collage · orden narrativo: antes → siempre → ahora. */
  collage: [
    {
      src: NOCHE,
      alt: ALT.noche,
      caption: 'Antes',
      ratio: '4 / 5',
      focal: '50% 34%',
    },
    {
      src: HABANA,
      alt: ALT.habana,
      caption: 'Siempre',
      // La foto ya es cuadrada: en este hueco no se recorta nada.
      ratio: '1 / 1',
      focal: '50% 50%',
    },
    {
      src: PASEO,
      alt: ALT.paseo,
      caption: 'Ahora',
      // 3:4 en un hueco 3:4: tampoco se recorta.
      ratio: '3 / 4',
      focal: '50% 50%',
    },
  ],

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
