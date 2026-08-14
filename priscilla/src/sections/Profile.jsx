import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { FigurePath } from '../components/Figures'

export default function Profile() {
  return (
    <section id="como-aprendes" className="section profile" aria-labelledby="profile-title">
      <div className="shell">
        <SectionHead index="04" label="Cómo aprendes" />

        <Reveal>
          <h2 className="h2 profile__title" id="profile-title">
            Hay gente que aprende leyendo.
            <span className="serif profile__title-serif"> Tú aprendiste chocándote.</span>
          </h2>
        </Reveal>

        <Reveal delay={80} className="profile__figure">
          <FigurePath />
        </Reveal>

        <div className="split profile__split">
          <Reveal className="stack measure">
            <p className="body">
              Probaste. Salió mal. Entendiste por qué. Y eso que entendiste ya no te lo quita nadie,
              porque no te lo contaron: lo viviste.
            </p>
            <p className="body">
              Por eso a veces sientes que tu camino ha sido más accidentado que el de otros. Más
              vueltas, más cosas empezadas y dejadas, más veces volviendo a empezar.
            </p>
            <p className="lead">No es que te hayas equivocado más que nadie. Es que ese es tu método.</p>
            <p className="body">
              Lo que a otros les sirve de teoría, a ti solo te sirve después de haberlo tocado. No es
              un defecto de carácter: es la única forma en que a ti te entra de verdad.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="callout profile__callout">
              <p className="highlight highlight--plain">
                Tu vida no necesita ser perfecta para tener sentido.
              </p>
            </div>
          </Reveal>
        </div>

        {/* --- La segunda mitad: lo que haces con lo aprendido --- */}
        <div className="profile__second">
          <Reveal>
            <h3 className="serif-line profile__second-title">Y luego está la segunda parte.</h3>
          </Reveal>

          <Reveal delay={70} className="stack measure profile__second-text">
            <p className="body">
              Todo eso que aprendiste a golpes no se queda en ti. Lo conviertes en algo que le sirve
              a otra gente.
            </p>
            <p className="body">
              Por eso acaban viniendo a preguntarte. No porque lo tengas todo resuelto, sino porque
              tú ya pasaste por ahí y sabes dónde están los baches.
            </p>
            <p className="body">
              Eso hace que la gente se haga una idea de ti bastante antes de conocerte. A veces te
              favorece muchísimo. Y a veces esperan una versión tuya que no eres.
            </p>
          </Reveal>

          <Reveal delay={120} className="profile__second-highlight">
            <p className="highlight">
              No tienes que convertirte en lo que otros imaginaron que eras.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
