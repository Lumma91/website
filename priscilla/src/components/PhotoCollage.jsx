import Photo from './Photo'
import Reveal from './Reveal'
import { photos } from '../data/gallery'

/**
 * Pausa emocional dentro de la lectura: antes → siempre → ahora.
 * Composición editorial (proporciones distintas, aire, ligero desfase),
 * no un álbum ni un scrapbook.
 */
export default function PhotoCollage() {
  const [before, always, now] = photos.collage

  return (
    <figure className="collage">
      <Reveal className="collage__item collage__item--a">
        <Photo {...before} />
        <span className="collage__caption">{before.caption}</span>
      </Reveal>

      <Reveal className="collage__item collage__item--b" delay={110}>
        <Photo {...always} />
        <span className="collage__caption">{always.caption}</span>
      </Reveal>

      <Reveal className="collage__item collage__item--c" delay={220}>
        <Photo {...now} />
        <span className="collage__caption">{now.caption}</span>
      </Reveal>
    </figure>
  )
}
