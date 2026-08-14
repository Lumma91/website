import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { photos } from '../data/gallery'
import { scrollToSection } from '../hooks/useScrollState'

export default function Intro() {
  return (
    <section id="inicio" className="section intro" aria-labelledby="intro-title">
      <div className="shell intro__grid">
        <div className="intro__text">
          <Reveal>
            <p className="intro__to">Para Priscilla</p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="intro__headline" id="intro-title">
              Hay cosas de nosotros que conocemos.
              <span className="serif"> Y otras que necesitamos que alguien nos ayude a mirar.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="intro__lead lead">
              Este es un pequeño recorrido para conocerte un poco más.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <p className="intro__sign">— Sonia</p>
          </Reveal>

          <Reveal delay={340}>
            <button type="button" className="btn intro__cta" onClick={() => scrollToSection('diseno')}>
              Comenzar
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </button>
          </Reveal>
        </div>

        <Reveal delay={140} className="intro__media">
          <Photo {...photos.opening} priority />
        </Reveal>
      </div>
    </section>
  )
}
