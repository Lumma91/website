import OpenCenters from '../components/OpenCenters'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { FigureGrid } from '../components/Figures'
import { centers, definedCenters } from '../data/humanDesign'

export default function Energy() {
  return (
    <section id="energia" className="section energy" aria-labelledby="energy-title">
      <div className="shell">
        <SectionHead index="08" label="Lo que absorbes" />

        <Reveal>
          <h2 className="h2 energy__title" id="energy-title">
            A veces lo que sientes
            <span className="serif energy__title-serif"> no empezó en ti.</span>
          </h2>
        </Reveal>

        <div className="split energy__intro">
          <Reveal delay={70} className="stack measure">
            <p className="body">
              Sales de una comida familiar agotada y de mal humor, y por el camino te preguntas de
              dónde ha salido eso, si tú llegaste bien.
            </p>
            <p className="body">
              Hay partes de ti que funcionan casi siempre igual, estés donde estés y con quien estés.
              Y hay otras que son como una antena: recogen lo que hay alrededor y lo amplifican.
            </p>
            <p className="lead">
              Lo interesante es que las antenas no son un defecto. Son justo donde acabas siendo más
              sabia.
            </p>
            <p className="body">
              Porque quien tiene algo fijo lo da por hecho y no lo piensa nunca. Tú, en cambio,
              llevas toda la vida observando ese terreno desde fuera. Terminas entendiéndolo mejor que
              quien lo tiene puesto.
            </p>
          </Reveal>

          <Reveal delay={120} className="energy__figure">
            <FigureGrid />
            <ul className="energy__legend">
              <li>
                <span className="energy__dot energy__dot--defined" aria-hidden="true" />
                Cuatro partes tuyas son estables.
              </li>
              <li>
                <span className="energy__dot" aria-hidden="true" />
                Cinco recogen lo de fuera.
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="energy__group">
          <Reveal>
            <p className="eyebrow">Lo que en ti es estable</p>
            <p className="body energy__group-intro measure">
              Con esto puedes contar casi siempre. No cambia según quién tengas delante.
            </p>
          </Reveal>

          <div className="energy__cards">
            {definedCenters.map((id, i) => (
              <Reveal key={id} delay={i * 70} className="energy__card">
                <p className="energy__card-title">{centers[id].title}</p>
                <p className="body energy__card-text">{centers[id].plain}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="energy__group">
          <Reveal>
            <p className="eyebrow">Lo que recoges de fuera</p>
            <p className="body energy__group-intro measure">
              Aquí es donde más te contagias del ambiente. Cada uno lleva una pregunta que te puede
              devolver a ti misma cuando te notes rara y no sepas por qué.
            </p>
          </Reveal>

          <Reveal delay={90} className="energy__accordion">
            <OpenCenters />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
