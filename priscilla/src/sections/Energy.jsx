import OpenCenters from '../components/OpenCenters'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { centers, definedCenters } from '../data/humanDesign'

export default function Energy() {
  return (
    <section id="energia" className="section energy" aria-labelledby="energy-title">
      <div className="shell">
        <SectionHead index="07" label="Tu energía y el mundo" />

        <Reveal>
          <h2 className="h2 energy__title" id="energy-title">
            A veces lo que sientes
            <span className="serif energy__title-serif"> no empezó en ti.</span>
          </h2>
        </Reveal>

        <Reveal delay={90} className="energy__legend">
          <div className="energy__legend-item">
            <span className="energy__dot energy__dot--defined" aria-hidden="true" />
            <p>
              <strong>Centros definidos.</strong> Áreas relativamente consistentes: funcionan de
              forma parecida casi siempre.
            </p>
          </div>
          <div className="energy__legend-item">
            <span className="energy__dot" aria-hidden="true" />
            <p>
              <strong>Centros indefinidos.</strong> Áreas más receptivas al entorno: absorben,
              amplifican y también aprenden mucho.
            </p>
          </div>
        </Reveal>

        <div className="energy__group">
          <Reveal>
            <p className="eyebrow">Tus centros definidos</p>
          </Reveal>

          <div className="energy__cards">
            {definedCenters.map((id, i) => (
              <Reveal key={id} delay={i * 70} className="energy__card">
                <p className="energy__card-name">{centers[id].name}</p>
                <p className="energy__card-title serif">{centers[id].title}</p>
                <p className="body energy__card-text">{centers[id].text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="energy__group">
          <Reveal>
            <p className="eyebrow">Tus centros indefinidos</p>
            <p className="body energy__group-intro measure">
              Aquí es donde más absorbes de los demás. También es donde puedes volverte
              especialmente sabia, porque acabas conociendo muy bien un terreno que no es fijo en ti.
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
