import PhotoCollage from '../components/PhotoCollage'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import SplitDefinition from '../components/SplitDefinition'

const blocks = [
  {
    title: 'Necesitas sentirte vista',
    text: 'No basta con que alguien quiera tu compañía. Tus vínculos más nutritivos aparecen cuando sientes reconocimiento, escucha y respeto por tu manera de ser.',
  },
  {
    title: 'Tu intuición también habla de personas',
    text: 'Algunas personas pueden sentirse correctas inmediatamente. Otras pueden despertar una pequeña alerta que tu mente todavía no comprende.',
  },
  {
    title: 'No eres responsable de solucionar a todos',
    text: 'Ver lo que a alguien podría funcionarle mejor no te convierte en la encargada de arreglarlo. A veces acompañar vale más que corregir.',
  },
]

export default function Relationships() {
  return (
    <section id="vinculos" className="section rel" aria-labelledby="rel-title">
      <div className="shell">
        <SectionHead index="06" label="Tú con los demás" />

        <Reveal>
          <h2 className="h2 rel__title" id="rel-title">
            Ver profundamente también cambia la forma en que te relacionas.
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
          <p className="highlight highlight--lg">Amar a alguien no significa optimizarlo.</p>
        </Reveal>

        {/* --- Perfil 3/5 en relaciones --- */}
        <div className="rel__projection">
          <Reveal>
            <p className="eyebrow">Perfil 3/5 en tus relaciones</p>
          </Reveal>
          <Reveal delay={80} className="stack measure rel__projection-text">
            <p className="body">
              A veces otras personas pueden esperar que tengas respuestas, soluciones o que seas
              determinada versión de ti.
            </p>
            <p className="body">
              Pero no tienes que convertirte en aquello que otros proyectaron sobre ti.
            </p>
          </Reveal>
          <Reveal delay={140} className="rel__projection-highlight">
            <p className="highlight">
              Puedes ayudar sin convertirte en la solucionadora de todo.
            </p>
          </Reveal>
        </div>

        {/* --- Collage de amistad --- */}
        <div className="rel__memory">
          <Reveal className="rel__memory-intro">
            <p className="serif-line">Hay cosas que ningún diseño necesita explicarte.</p>
            <p className="lead rel__memory-sub">
              Algunas personas simplemente forman parte de quién eres.
            </p>
          </Reveal>

          <PhotoCollage />
        </div>

        {/* --- Split definition --- */}
        <div className="rel__split">
          <Reveal>
            <p className="eyebrow">Split definition</p>
            <h3 className="serif-line rel__split-title">
              Hay personas con las que algo simplemente conecta.
            </h3>
          </Reveal>

          <div className="split rel__split-body">
            <Reveal delay={90}>
              <SplitDefinition />
            </Reveal>

            <Reveal delay={140} className="stack measure">
              <p className="body">
                Algunas personas pueden generar una sensación muy particular de conexión interna.
              </p>
              <p className="body">
                Pero sentir conexión no significa automáticamente compatibilidad.
              </p>
              <p className="highlight rel__split-highlight">
                No decidas solamente por cuánto te atrae alguien. Escucha también cómo se siente tu
                cuerpo cuando estás a su lado.
              </p>
            </Reveal>
          </div>
        </div>

        {/* --- Amor y amistad --- */}
        <div className="rel__cards">
          <Reveal className="rel__card">
            <p className="label">En el amor</p>
            <ul className="keywords rel__card-words">
              {['Reconocimiento', 'Seguridad', 'Respeto', 'Espacio'].map((word) => (
                <li key={word}>
                  <span className="keyword">{word}</span>
                </li>
              ))}
            </ul>
            <p className="body rel__card-text">
              El vínculo correcto probablemente no será solamente aquel donde tú comprendas
              profundamente al otro.
            </p>
            <p className="body">Será aquel donde tú también puedas sentir:</p>
            <p className="serif rel__card-quote">“A mí también me ven.”</p>
          </Reveal>

          <Reveal delay={110} className="rel__card">
            <p className="label">En la amistad</p>
            <p className="body rel__card-text">
              Puedes ser esa amiga que nota cuando algo cambió aunque nadie lo diga.
            </p>
            <p className="body">La que recuerda pequeños detalles.</p>
            <p className="body">
              La que encuentra una perspectiva diferente cuando todo parece confuso.
            </p>
            <p className="body">
              Pero no todas las personas necesitan acceso a la misma profundidad de ti.
            </p>
            <p className="serif rel__card-quote">
              Aprender quién merece acceso a qué parte de ti también es autocuidado.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
