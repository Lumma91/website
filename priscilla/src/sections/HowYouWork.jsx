import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'

export default function HowYouWork() {
  return (
    <section id="como-funcionas" className="section how" aria-labelledby="how-title">
      <div className="shell">
        <SectionHead index="03" label="Cómo funcionas" />

        <div className="how__intro">
          <Reveal>
            <h2 className="h2 how__title" id="how-title">
              No viniste a hacer más.
              <span className="serif how__title-serif"> Viniste a ver mejor.</span>
            </h2>
          </Reveal>
        </div>

        <div className="split how__split">
          <div className="how__col">
            <Reveal className="stack measure">
              <p className="body">
                Priscilla, tu energía no está diseñada para vivir intentando hacer más, producir más
                o seguir constantemente el ritmo de todo el mundo.
              </p>
              <p className="lead">Tu gran fortaleza está en ver.</p>
              <p className="body">
                Ver a las personas. Ver cómo funcionan las cosas. Detectar qué podría hacerse mejor.
                Encontrar patrones, errores y soluciones que quizá otros todavía no han visto.
              </p>
              <p className="body">
                Tu valor no depende únicamente de cuánto haces, sino de la calidad de lo que eres
                capaz de observar.
              </p>
            </Reveal>
          </div>

          <div className="how__col">
            <Reveal delay={80}>
              <div className="callout">
                <p className="label">Tu estrategia</p>
                <p className="h3 callout__title">Esperar la invitación</p>
                <p className="body callout__text">
                  No significa quedarte esperando que la vida ocurra. Significa permitir que exista
                  reconocimiento antes de intentar convencer.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160} className="how__highlight">
              <p className="highlight">Deja que te reconozcan antes de intentar demostrar.</p>
            </Reveal>
          </div>
        </div>

        {/* --- Autoridad esplénica --- */}
        <div className="how__authority">
          <Reveal>
            <p className="eyebrow">Autoridad esplénica</p>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="serif-line how__authority-title">
              Tu cuerpo suele saberlo antes que tu mente.
            </h3>
          </Reveal>

          <div className="how__authority-grid">
            <Reveal delay={120} className="stack measure">
              <p className="body">Tu brújula funciona de una manera rápida, corporal e intuitiva.</p>
              <p className="body">
                A veces será una sensación.
                <br />
                Una pequeña alerta.
                <br />
                Un “sí”.
                <br />
                Un “no”.
              </p>
              <p className="body">Quizá todavía no puedas explicarlo racionalmente.</p>
              <p className="lead">Pero tu cuerpo ya respondió.</p>
            </Reveal>

            <Reveal delay={180} className="how__sequence">
              <ol className="flow" aria-label="Secuencia de tu autoridad">
                <li className="flow__step">Invitación</li>
                <li className="flow__arrow" aria-hidden="true">
                  →
                </li>
                <li className="flow__step flow__step--accent">Intuición</li>
                <li className="flow__arrow" aria-hidden="true">
                  →
                </li>
                <li className="flow__step">Decisión</li>
              </ol>
              <p className="how__sequence-note body">
                Tu mente puede elaborar veinte argumentos después.
                <br />
                Tu intuición normalmente habló primero.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
