import BodyGraph from '../components/BodyGraph'
import DesignSnapshot from '../components/DesignSnapshot'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import TechnicalDetails from '../components/TechnicalDetails'
import { profile } from '../data/humanDesign'

export default function Design() {
  return (
    <section id="diseno" className="section design" aria-labelledby="design-title">
      <div className="shell">
        <SectionHead index="02" label="Este es tu diseño" />

        <div className="design__cover">
          <Reveal>
            <h2 className="design__name" id="design-title">
              {profile.name}
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <p className="design__label-en">{profile.labelEn}</p>
            <p className="design__label-es serif">{profile.labelEs}</p>
          </Reveal>

          <Reveal delay={160}>
            <dl className="design__birth">
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
          </Reveal>

          <Reveal delay={220}>
            <p className="design__note">{profile.note}</p>
          </Reveal>
        </div>

        <div className="design__body">
          <Reveal className="design__graph">
            <BodyGraph />
          </Reveal>

          <div className="design__aside">
            <Reveal>
              <h3 className="h4 design__aside-title">Tu diseño de un vistazo</h3>
            </Reveal>
            <DesignSnapshot />
            <Reveal delay={120} className="design__tech">
              <TechnicalDetails />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
