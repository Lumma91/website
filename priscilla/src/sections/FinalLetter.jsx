import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { photos } from '../data/gallery'

export default function FinalLetter() {
  return (
    <section id="para-ti" className="letter" aria-labelledby="letter-title">
      <div className="shell letter__grid">
        <Reveal className="letter__media">
          <Photo {...photos.letter} />
        </Reveal>

        <div className="letter__body">
          <Reveal>
            <p className="letter__eyebrow">Y por último</p>
            <h2 className="letter__title serif" id="letter-title">
              De mí para ti.
            </h2>
          </Reveal>

          <Reveal delay={90} className="letter__text">
            <p className="letter__greeting">Priscilla,</p>
            <p>
              Este es un regalo para que puedas conocerte un poquito más. Para que reconozcas tus
              fortalezas, entiendas mejor todo eso que te hace ser tú y aprendas a confiar cada vez
              más en lo que ya existe dentro de ti.
            </p>
            <p>
              Pero, sobre todo, quiero que estas páginas te sirvan como un recordatorio de tu
              potencial, de todo lo que eres capaz de construir y del camino que puedes elegir para
              ti.
            </p>
            <p>
              No para decirte quién tienes que ser, sino para ayudarte a mirar con otros ojos quién
              ya eres.
            </p>
            <p>
              Y espero que, de alguna manera, cada vez que vuelvas a leerlo, te recuerde algo que
              quiero que nunca olvides:
            </p>
          </Reveal>

          <Reveal delay={140} className="letter__closing">
            <p className="letter__closing-text serif">Cree muchísimo en ti. Siempre.</p>
          </Reveal>

          <Reveal delay={200} className="letter__sign">
            <p>Con cariño,</p>
            <p className="letter__sign-name serif">Sonia</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
