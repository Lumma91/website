import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { FigureReach } from '../components/Figures'

export default function HowYouWork() {
  return (
    <section id="como-funcionas" className="section how" aria-labelledby="how-title">
      <div className="shell">
        <SectionHead index="03" label="Cómo funcionas" />

        <Reveal>
          <h2 className="h2 how__title" id="how-title">
            No viniste a hacer más.
            <span className="serif how__title-serif"> Viniste a ver mejor.</span>
          </h2>
        </Reveal>

        <div className="split how__split">
          <div className="how__col">
            <Reveal className="stack measure">
              <p className="body">
                Entras a un lugar y en cinco minutos ya sabes quién manda de verdad, quién está
                incómodo y qué se está haciendo mal.
              </p>
              <p className="body">
                A ti eso te pasa sin esforzarte. Y probablemente lleves años pensando que no tiene
                mérito, precisamente porque no te cuesta.
              </p>
              <p className="lead">Tiene muchísimo mérito. Es lo que mejor haces.</p>
              <p className="body">
                Hay personas que están hechas para empujar: mucha energía, mucho hacer, mucho
                resistencia. Tú funcionas de otra manera. Tu fuerza no está en la cantidad de cosas
                que haces, sino en la calidad de lo que eres capaz de notar.
              </p>
            </Reveal>
          </div>

          <Reveal delay={80} className="how__figure">
            <FigureReach />
            <p className="how__figure-note muted">
              Poca masa, mucho alcance. Ves mucho más terreno del que pisas.
            </p>
          </Reveal>
        </div>

        {/* --- Lo que lo complica, y cómo se resuelve --- */}
        <div className="how__catch">
          <Reveal>
            <h3 className="serif-line how__catch-title">Pero hay algo que lo complica.</h3>
          </Reveal>

          <div className="split how__catch-body">
            <Reveal delay={70} className="stack measure">
              <p className="body">
                Lo que tú ves solo aterriza cuando alguien lo ha pedido.
              </p>
              <p className="body">
                Si lo ofreces sin que nadie lo pida, se recibe como crítica, aunque lo digas con todo
                el cariño del mundo. Si llega cuando te preguntan, se recibe como oro.
              </p>
              <p className="body">
                Es la diferencia entre empujar una puerta y que te la abran. La misma puerta, y un
                esfuerzo completamente distinto.
              </p>
              <p className="body">
                Por eso, cuando insistes donde no te han llamado, terminas agotada y con una sensación
                amarga. No es que estuvieras equivocada. Es que no era tu puerta.
              </p>
            </Reveal>

            <Reveal delay={130}>
              <div className="callout">
                <p className="label">Lo que sí funciona</p>
                <p className="h3 callout__title">Esperar a que te abran</p>
                <p className="body callout__text">
                  No significa quedarte quieta esperando que la vida pase. Significa poner tu mirada
                  donde ya la están queriendo, y no gastarla en convencer a quien todavía no la ha
                  pedido.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80} className="how__highlight">
            <p className="highlight">Deja que te reconozcan antes de intentar demostrar.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
