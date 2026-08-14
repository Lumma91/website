import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { FigureBridge } from '../components/Figures'

const blocks = [
  {
    title: 'Necesitas notar que te ven',
    text: 'No te basta con que alguien quiera estar contigo. Necesitas notar que se dan cuenta de lo que aportas, que te escuchan, que no te dan por hecha. Cuando eso falta, te apagas mucho antes de decir nada.',
  },
  {
    title: 'Tu radar también funciona con la gente',
    text: 'Hay personas que desde el minuto uno encajan. Y hay otras que te dejan una sensación rara que no sabrías explicar. Esa sensación rara suele acabar teniendo razón.',
  },
  {
    title: 'No eres la encargada de arreglar a nadie',
    text: 'Ves lo que a la gente le vendría bien cambiar, y casi siempre aciertas. Aun así, decirlo sin que te lo pidan rara vez funciona: se recibe como un reproche, no como ayuda.',
  },
]

export default function Relationships() {
  return (
    <section id="vinculos" className="section rel" aria-labelledby="rel-title">
      <div className="shell">
        <SectionHead index="06" label="Con los demás" />

        <Reveal>
          <h2 className="h2 rel__title" id="rel-title">
            Ver tanto también cambia la forma en que quieres.
          </h2>
        </Reveal>

        <div className="rel__blocks">
          {blocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 90} className="rel__block">
              <h3 className="h4">{block.title}</h3>
              <p className="body rel__block-text">{block.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="rel__highlight">
          <p className="highlight highlight--lg">Querer a alguien no es mejorarlo.</p>
        </Reveal>

        {/* --- La conexión que confunde --- */}
        <div className="rel__split">
          <Reveal>
            <h3 className="serif-line rel__split-title">
              Hay gente con la que te sientes más completa.
            </h3>
          </Reveal>

          <div className="split rel__split-body">
            <Reveal delay={90} className="rel__figure">
              <FigureBridge />
              <p className="rel__figure-note muted">
                Hay dos partes de ti que funcionan por separado. Ciertas personas, al estar cerca,
                las conectan. Por eso a su lado te sientes distinta.
              </p>
            </Reveal>

            <Reveal delay={140} className="stack measure">
              <p className="body">
                Con algunas personas notas algo difícil de explicar: como si a su lado encajaras
                mejor, como si algo tuyo terminara de cerrarse.
              </p>
              <p className="body">
                Es real y es bonito. Pero conviene saber una cosa: esa sensación es tan fuerte que se
                confunde muy fácilmente con que esa persona te conviene.
              </p>
              <p className="body">
                Y no son lo mismo. Hay gente que te hace sentir completa y aun así te hace daño.
              </p>
              <p className="highlight rel__split-highlight">
                Que alguien te haga sentir completa no significa que te haga bien.
              </p>
            </Reveal>
          </div>
        </div>

        {/* --- Amor y amistad --- */}
        <div className="rel__cards">
          <Reveal className="rel__card">
            <p className="label">En el amor</p>
            <p className="body rel__card-text">
              El vínculo que te va a sostener no es aquel donde tú entiendes al otro profundamente.
              Eso lo haces con todo el mundo, incluso con quien no te conviene.
            </p>
            <p className="body">Es aquel donde alguna vez, sin buscarlo, piensas:</p>
            <p className="serif rel__card-quote">“A mí también me ven.”</p>
          </Reveal>

          <Reveal delay={110} className="rel__card">
            <p className="label">En la amistad</p>
            <p className="body rel__card-text">
              Eres esa amiga que nota que algo va mal antes de que nadie lo diga. La que se acuerda
              de los detalles pequeños. La que ordena el lío cuando todo parece confuso.
            </p>
            <p className="body">
              Pero no todo el mundo merece esa versión tuya, y darla entera desde el principio te ha
              salido caro alguna vez.
            </p>
            <p className="serif rel__card-quote">
              Elegir quién tiene acceso a qué parte de ti también es quererte.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
