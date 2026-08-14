import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { FigureOrder, FigureRefine } from '../components/Figures'

export default function Talents() {
  return (
    <section id="talentos" className="section talents tone-surface" aria-labelledby="talents-title">
      <div className="shell">
        <SectionHead index="05" label="Lo que ves" />

        <Reveal>
          <h2 className="h2 talents__title" id="talents-title">
            Si hay algo que se repite en ti es esto:
            <span className="serif talents__title-serif"> ves cómo algo podría estar mejor.</span>
          </h2>
        </Reveal>

        {/* --- Detectar --- */}
        <article className="talents__block">
          <Reveal>
            <h3 className="h3">Ves lo que falla</h3>
          </Reveal>

          <Reveal delay={60} className="stack measure talents__text">
            <p className="body">
              Entras a un sitio y ves el detalle que chirría. Lees un texto y ves la frase que sobra.
              Escuchas un plan y ves por dónde se va a romper.
            </p>
            <p className="body">No lo buscas. Aparece solo.</p>
          </Reveal>

          <Reveal delay={100} className="talents__figure">
            <FigureRefine />
            <p className="talents__figure-note muted">
              Lo mismo, cada vez más limpio. Eso es lo que tu cabeza hace sin permiso.
            </p>
          </Reveal>

          <Reveal delay={60} className="stack measure talents__text">
            <p className="body">
              Y aquí está lo difícil de aprender, lo que probablemente te ha costado algún disgusto:
              que algo pueda mejorar no significa que te toque a ti arreglarlo.
            </p>
            <p className="body">
              Ni que sea el momento. Ni que la otra persona lo esté pidiendo. Tener razón y ser
              oportuna son dos cosas distintas, y tú casi siempre tienes lo primero.
            </p>
          </Reveal>

          <Reveal delay={80} className="talents__highlight">
            <p className="highlight">No todo lo que ves necesita ser corregido.</p>
          </Reveal>
        </article>

        {/* --- Ordenar --- */}
        <article className="talents__block">
          <Reveal>
            <h3 className="h3">Y luego lo ordenas</h3>
          </Reveal>

          <div className="split talents__body">
            <Reveal delay={60} className="stack measure">
              <p className="body">
                La otra mitad de lo tuyo es lo que haces después de ver: coges algo confuso, lo
                desmontas, encuentras el patrón y lo cuentas de forma que se entienda.
              </p>
              <p className="body">
                Donde otros ven un lío, tú ves tres cosas que no encajan y una que sobra.
              </p>
              <p className="lead">
                Es esa frase tan tuya: “espera, déjame ordenar esto y te lo explico”.
              </p>
            </Reveal>

            <Reveal delay={110} className="talents__figure">
              <FigureOrder />
            </Reveal>
          </div>

          <Reveal delay={80} className="talents__highlight">
            <div className="callout talents__quote">
              <p className="serif talents__quote-text">
                Ver lo que falla es común. Saber explicarlo para que otro lo entienda, mucho menos.
              </p>
            </div>
          </Reveal>
        </article>

        {/* --- Las dos cosas juntas --- */}
        <div className="talents__together">
          <Reveal>
            <p className="eyebrow">Las dos cosas juntas</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="serif-line talents__together-line">
              Tu talento no está solo en ver lo que hay. Está en ver lo que podría llegar a ser.
            </p>
          </Reveal>
          <Reveal delay={130} className="stack measure talents__together-text">
            <p className="body">
              Detectar y ordenar por separado ya sirven. Juntas son otra cosa: son la persona a la
              que acudes cuando algo no funciona y nadie sabe explicar por qué.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
