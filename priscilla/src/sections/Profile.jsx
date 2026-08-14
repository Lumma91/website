import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'

const steps = ['Experimento', 'Descubro', 'Corrijo', 'Comprendo', 'Comparto']

export default function Profile() {
  return (
    <section id="como-aprendes" className="section profile" aria-labelledby="profile-title">
      <div className="shell">
        <SectionHead index="04" label="Cómo aprendes" />

        <div className="profile__head">
          <Reveal>
            <h2 className="h2" id="profile-title">
              Perfil 3/5
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="serif-line profile__sub">Aprender viviendo.</p>
          </Reveal>
        </div>

        <div className="profile__lines">
          <Reveal className="profile__line">
            <span className="profile__line-num">Línea 3</span>
            <p className="profile__line-text">Experimenta.</p>
          </Reveal>
          <Reveal delay={90} className="profile__line">
            <span className="profile__line-num">Línea 5</span>
            <p className="profile__line-text">Transforma experiencia en soluciones.</p>
          </Reveal>
        </div>

        <Reveal delay={60} className="profile__flow">
          <ol className="flow" aria-label="Cómo aprendes, paso a paso">
            {steps.map((step, i) => (
              <li key={step} className="profile__flow-item">
                <span className={`flow__step ${i === steps.length - 1 ? 'flow__step--accent' : ''}`}>
                  {step}
                </span>
                {i < steps.length - 1 && (
                  <span className="flow__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="split profile__split">
          <Reveal className="stack measure">
            <p className="body">
              Algunas de tus mayores enseñanzas probablemente no llegaron porque alguien te explicó
              cómo funcionaba la vida.
            </p>
            <p className="lead">Llegaron porque la viviste.</p>
            <p className="body">Lo que no funcionó también te enseñó algo.</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="callout profile__callout">
              <p className="highlight highlight--plain">
                Tu vida no necesita ser perfecta para tener sentido.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
