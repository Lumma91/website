import BodyGraph from '../components/BodyGraph'
import DesignSnapshot from '../components/DesignSnapshot'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import TechnicalDetails from '../components/TechnicalDetails'
import { profile } from '../data/humanDesign'

/**
 * Apéndice opcional. Todo el vocabulario técnico vive aquí y sólo aquí:
 * el recorrido se entiende entero sin llegar a esta sección.
 */
export default function Map() {
  return (
    <section id="mapa" className="section map" aria-labelledby="map-title">
      <div className="shell">
        <SectionHead index="—" label="El mapa" />

        <div className="map__intro">
          <Reveal>
            <h2 className="h2 map__title" id="map-title">
              ¿Y de dónde sale todo esto?
            </h2>
          </Reveal>

          <Reveal delay={80} className="stack measure map__text">
            <p className="body">
              De aquí. Esto se llama Human Design, y es un sistema que dibuja un mapa a partir del
              día, la hora y el lugar en que naciste.
            </p>
            <p className="body">
              No es ciencia y no predice nada. Es una forma de mirar, como lo son el eneagrama o
              cualquier otro mapa de personalidad: sirve si te ayuda a entenderte, y no sirve de nada
              si te lo tomas como una sentencia.
            </p>
            <p className="lead">
              Si te da curiosidad, aquí está. Y si no, puedes saltártelo entero: lo importante ya lo
              has leído.
            </p>
          </Reveal>
        </div>

        <div className="map__body">
          <Reveal className="map__graph">
            <BodyGraph />
          </Reveal>

          <div className="map__aside">
            <Reveal>
              <p className="map__name">{profile.name}</p>
              <p className="map__label">{profile.labelEs}</p>
              <dl className="map__birth">
                <div>
                  <dt>Fecha</dt>
                  <dd>{profile.birthDate}</dd>
                </div>
                <div>
                  <dt>Lugar</dt>
                  <dd>{profile.birthPlace}</dd>
                </div>
                <div>
                  <dt>Hora</dt>
                  <dd>{profile.birthTime}</dd>
                </div>
              </dl>
              <p className="map__note">{profile.note}</p>
            </Reveal>

            <Reveal delay={90} className="map__snapshot">
              <h3 className="h4 map__snapshot-title">Los nombres técnicos</h3>
              <DesignSnapshot />
            </Reveal>

            <Reveal delay={140} className="map__tech">
              <TechnicalDetails />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
