import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { FigureSignal } from '../components/Figures'

export default function Decide() {
  return (
    <section id="como-decides" className="section decide tone-dark" aria-labelledby="decide-title">
      <div className="shell">
        <SectionHead index="03" label="Cómo decides" className="section-head--light" />

        <Reveal>
          <h2 className="serif-line decide__title" id="decide-title">
            Tu cuerpo suele saberlo antes que tu mente.
          </h2>
        </Reveal>

        <div className="split decide__body">
          <Reveal delay={70} className="stack measure">
            <p className="body">
              Te presentan a alguien y algo dentro de ti dice <em>no</em>. No ha pasado nada. Esa
              persona ha sido encantadora. Y aun así, algo dice no.
            </p>
            <p className="body">
              Como no puedes explicarlo, te lo discutes. Buscas razones. Te dices que estás siendo
              injusta, que hay que darle una oportunidad, que seguro son cosas tuyas.
            </p>
            <p className="body">Y meses después entiendes por qué era que no.</p>
            <p className="lead">Esa señal rápida, que llega antes que cualquier razonamiento, es tu brújula.</p>
          </Reveal>

          <Reveal delay={130} className="decide__figure">
            <FigureSignal />
            <div className="decide__legend">
              <p>
                <span className="decide__legend-key">Arriba</span>
                Tu cuerpo: responde una vez, enseguida.
              </p>
              <p>
                <span className="decide__legend-key">Abajo</span>
                Tu mente: sigue dando vueltas mucho después.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="decide__note">
          <Reveal>
            <h3 className="h3 decide__note-title">Tiene una particularidad</h3>
          </Reveal>
          <Reveal delay={70} className="stack measure decide__note-text">
            <p className="body">
              Habla una sola vez. No insiste, no repite y no discute. Aparece, dice lo que tiene que
              decir y se va.
            </p>
            <p className="body">
              Por eso, si la dejas pasar mientras le buscas argumentos, la pierdes. Y entonces
              decides con la cabeza, que es justo lo que peor se te da para esto.
            </p>
          </Reveal>
          <Reveal delay={120} className="decide__highlight">
            <p className="highlight">
              Tu mente puede construir veinte razones después. Tu cuerpo ya había contestado.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
