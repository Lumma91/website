import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { FigureConverge } from '../components/Figures'

const synthesis = [
  {
    title: 'Tu cuerpo suele saber antes que tu mente',
    text: 'Tu intuición no siempre llega con argumentos. Llega como sensación. Darle unos segundos antes de responder suele ahorrarte muchas explicaciones después.',
  },
  {
    title: 'No estás aquí para convencer a nadie de tu valor',
    text: 'Cuando hay reconocimiento, lo que ves se recibe distinto. Cuando no lo hay, casi ningún argumento consigue abrir esa puerta. Y eso dice más del momento que de ti.',
  },
  {
    title: 'Has aprendido mucho viviendo',
    text: 'Tu experiencia no es un desvío del camino: es el camino. Lo que probaste, lo que salió mal y lo que corregiste se convirtió en un criterio que pocas personas tienen.',
  },
  {
    title: 'No necesitas ser perfecta para ayudar',
    text: 'Tu mirada ya sirve estando a medias, en duda o cansada. La utilidad de lo que ves no depende de que tú tengas todo resuelto.',
  },
  {
    title: 'Eres sensible a las personas que te rodean',
    text: 'Recoges emociones, presiones y preguntas del entorno. Saber cuáles son tuyas y cuáles no es una de las habilidades que más paz puede darte.',
  },
  {
    title: 'Tu energía merece cuidado',
    text: 'No tienes una batería infinita, y no hace falta que la tengas. Elegir dónde poner tu atención es parte del trabajo, no una falta de compromiso.',
  },
  {
    title: 'En el amor y en la amistad',
    text: 'Los vínculos que te sostienen son aquellos donde también te ven a ti. No solamente donde tú comprendes al otro.',
  },
]

const words = ['Observadora', 'Intuitiva', 'Analítica', 'Adaptable', 'Profunda']

export default function Essence() {
  return (
    <section id="esencia" className="section essence" aria-labelledby="essence-title">
      <div className="shell">
        <SectionHead index="08" label="Tu esencia" />

        <Reveal>
          <h2 className="h2 essence__title" id="essence-title">
            Si tuviera que resumirte todo esto en una sola página…
          </h2>
        </Reveal>

        <div className="essence__opening">
          <Reveal delay={80} className="stack measure">
            <p className="lead">Priscilla, eres una persona que ve mucho.</p>
            <p className="body">
              Ves detalles.
              <br />
              Ves patrones.
              <br />
              Ves lo que funciona y lo que no.
              <br />
              Y muchas veces también ves en las personas cosas que ellas todavía no alcanzan a ver de
              sí mismas.
            </p>
          </Reveal>

          <Reveal delay={140} className="essence__pivot">
            <p className="essence__pivot-a">Tu fortaleza no está en hacer más que todo el mundo.</p>
            <p className="essence__pivot-b serif">Está en observar mejor.</p>
          </Reveal>

          <Reveal delay={80} className="stack measure essence__opening-close">
            <p className="body">
              En entender.
              <br />
              En detectar.
              <br />
              En ordenar.
              <br />
              En encontrar una manera más clara, más eficiente o más honesta de hacer las cosas.
            </p>
            <p className="body">Pero no todo lo que ves necesita ser corregido.</p>
            <p className="body">Y no toda persona necesita recibir tu mirada.</p>
            <p className="lead">
              Una parte importante de tu camino consiste en aprender dónde sí vale la pena colocar tu
              energía.
            </p>
          </Reveal>
        </div>

        {/* --- Bloques de síntesis --- */}
        <div className="essence__blocks">
          {synthesis.map((block, i) => (
            <Reveal key={block.title} delay={(i % 2) * 80} className="essence__block">
              <h3 className="h4 essence__block-title">{block.title}</h3>
              <p className="body essence__block-text">{block.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60} className="essence__figure">
          <FigureConverge />
        </Reveal>

        {/* --- Resumen final --- */}
        <Reveal className="essence__summary">
          <p className="label">Si hubiera que resumirte en pocas palabras</p>
          <ul className="essence__words">
            {words.map((word, i) => (
              <Reveal as="li" key={word} delay={140 + i * 130} className="essence__word">
                {word}
              </Reveal>
            ))}
          </ul>
          <p className="body essence__summary-text">
            Capaz de convertir experiencia en conocimiento.
          </p>
          <p className="body essence__summary-text">
            Especialmente buena viendo posibilidades de mejora donde otros todavía solamente ven un
            problema.
          </p>
        </Reveal>
      </div>

      {/* --- Tu diseño en una frase --- */}
      <div className="essence__oneline">
        <div className="shell shell--narrow">
          <Reveal>
            <p className="label essence__oneline-label">Todo en una frase</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="essence__oneline-text">
              Viniste a mirar hondo, a fiarte de lo que tu cuerpo sabe antes que tú, y a poner esa
              mirada donde de verdad la estén esperando.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
