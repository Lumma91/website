import BodyGraph from '../components/BodyGraph'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { identity, profile } from '../data/humanDesign'
import { scrollToSection } from '../hooks/useScrollState'

/**
 * El carné: qué es Priscilla, en tres palabras y tres frases llanas.
 * Responde "¿qué soy?" al principio, sin el muro de vocabulario. El mapa
 * completo, con todos los términos, sigue estando al final.
 */
export default function Card() {
  return (
    <section id="quien-eres" className="section card-id tone-surface" aria-labelledby="card-title">
      <div className="shell">
        <SectionHead index="02" label="Quién eres" />

        <div className="card-id__grid">
          <div className="card-id__main">
            <Reveal>
              <h2 className="h2 card-id__title" id="card-title">
                {profile.name}
              </h2>
            </Reveal>

            <dl className="card-id__list">
              {identity.map((item, i) => (
                <Reveal as="div" key={item.label} delay={i * 90} className="card-id__row">
                  <dt>
                    <span className="card-id__label">{item.label}</span>
                    <span className="card-id__term">{item.term}</span>
                  </dt>
                  <dd>{item.plain}</dd>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={280}>
              <p className="card-id__note">
                Estas tres palabras son todo lo técnico que necesitas. A partir de aquí te cuento qué
                significa cada una, sin nombres raros. Y si al final quieres ver de dónde sale,{' '}
                <button type="button" className="card-id__link" onClick={() => scrollToSection('mapa')}>
                  el mapa completo está abajo
                </button>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={140} className="card-id__graph">
            <BodyGraph compact />
            <p className="card-id__graph-note muted">Así se dibuja tu diseño.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
