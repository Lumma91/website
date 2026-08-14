/**
 * Fotografías personales.
 *
 * Coloca los archivos en  public/photos/  con estos nombres exactos.
 * Mientras no existan, cada hueco muestra un panel neutro en su lugar
 * (el sitio no se rompe y las proporciones se mantienen).
 *
 * Formatos recomendados: .jpg de buena calidad, lado largo ≈ 1600 px.
 */

export const photos = {
  /** Apertura · la más reciente, en exterior, con luz natural. */
  opening: {
    src: '/photos/apertura.jpg',
    alt: 'Sonia y Priscilla juntas al aire libre, con luz natural.',
    ratio: '4 / 5',
    focal: '50% 40%',
  },
  /** Collage · orden narrativo: antes → siempre → ahora. */
  collage: [
    {
      src: '/photos/antes.jpg',
      alt: 'Sonia y Priscilla en una fotografía de hace años.',
      caption: 'Antes',
      ratio: '4 / 5',
      focal: '50% 38%',
    },
    {
      src: '/photos/siempre.jpg',
      alt: 'Sonia y Priscilla en una fotografía intermedia en el tiempo.',
      caption: 'Siempre',
      ratio: '1 / 1',
      focal: '50% 42%',
    },
    {
      src: '/photos/ahora.jpg',
      alt: 'Sonia y Priscilla en una fotografía reciente.',
      caption: 'Ahora',
      ratio: '3 / 4',
      focal: '50% 40%',
    },
  ],
  /** Cierre · la más íntima y cercana de ambas. */
  letter: {
    src: '/photos/carta.jpg',
    alt: 'Sonia y Priscilla sonriendo muy juntas.',
    ratio: '4 / 5',
    focal: '50% 38%',
  },
}
