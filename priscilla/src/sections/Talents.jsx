import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'

const judgmentWords = ['Detectar', 'Evaluar', 'Corregir', 'Optimizar', 'Elevar']

export default function Talents() {
  return (
    <section id="talentos" className="section talents" aria-labelledby="talents-title">
      <div className="shell">
        <SectionHead index="05" label="Lo que ves que otros no siempre ven" />

        <Reveal>
          <h2 className="h2 talents__title" id="talents-title">
            Hay algo que se repite en tu diseño:
            <span className="serif talents__title-serif"> ver cómo algo puede funcionar mejor.</span>
          </h2>
        </Reveal>

        {/* --- Canal 18–58 --- */}
        <article className="talents__channel">
          <Reveal className="talents__channel-head">
            <span className="talents__id">18 — 58</span>
            <h3 className="h3">El talento para mejorar</h3>
          </Reveal>

          <div className="split talents__channel-body">
            <Reveal delay={70}>
              <ul className="keywords talents__keywords">
                {judgmentWords.map((word) => (
                  <li key={word}>
                    <span className="keyword">{word}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="stack measure">
              <p className="body">Puedes percibir con facilidad dónde existe margen de mejora.</p>
              <p className="body">
                Pero tu verdadera sabiduría no consiste únicamente en saber qué corregir.
              </p>
              <p className="lead">También consiste en aprender cuándo intervenir.</p>
            </Reveal>
          </div>

          <Reveal delay={80} className="talents__highlight">
            <p className="highlight">No todo necesita ser corregido.</p>
          </Reveal>
        </article>

        {/* --- Canal 17–62 --- */}
        <article className="talents__channel">
          <Reveal className="talents__channel-head">
            <span className="talents__id">17 — 62</span>
            <h3 className="h3">Convertir ideas en claridad</h3>
          </Reveal>

          <div className="split talents__channel-body">
            <Reveal delay={70}>
              <ol className="flow talents__flow" aria-label="Cómo conviertes ideas en claridad">
                <li className="flow__step">Observar</li>
                <li className="flow__arrow" aria-hidden="true">
                  →
                </li>
                <li className="flow__step">Ordenar</li>
                <li className="flow__arrow" aria-hidden="true">
                  →
                </li>
                <li className="flow__step flow__step--accent">Explicar</li>
              </ol>
            </Reveal>

            <Reveal delay={120} className="stack measure">
              <p className="body">
                Tu mente tiene capacidad para encontrar estructura donde aparentemente hay desorden.
              </p>
              <p className="body">
                Puedes organizar información, detectar patrones y encontrar palabras para
                explicarlos.
              </p>
            </Reveal>
          </div>

          <Reveal delay={80} className="talents__highlight">
            <div className="callout talents__quote">
              <p className="serif talents__quote-text">
                “Déjame organizar esto y te explico qué está pasando.”
              </p>
            </div>
          </Reveal>
        </article>

        {/* --- Cruz de Encarnación --- */}
        <div className="talents__cross">
          <Reveal>
            <p className="eyebrow">Cruz de encarnación</p>
            <p className="talents__cross-name">
              Right Angle Cross of Service
              <span className="talents__cross-gates">52/58 | 17/18</span>
            </p>
          </Reveal>

          <Reveal delay={90}>
            <ul className="talents__cross-words">
              <li>Observar.</li>
              <li>Concentrarte.</li>
              <li>Evaluar.</li>
              <li>Mejorar.</li>
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <p className="serif-line talents__cross-line">
              Tu talento no está solamente en ver lo que es. Está en percibir lo que podría llegar a
              ser.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
