import Reveal from '../components/Reveal'

const phrases = [
  'No toda emoción que sientes comenzó en ti.',
  'No toda persona que necesita tu ayuda merece acceso a ti.',
  'No necesitas demostrar tu valor.',
  'No todo necesita tu energía.',
  'Tu cuerpo puede saber algo antes de que tu mente pueda explicarlo.',
]

/** Pausa visual. Cada frase aparece con el scroll, sin carrusel automático. */
export default function Pause() {
  return (
    <section className="pause" aria-label="Cosas para recordar">
      <div className="shell shell--narrow">
        <Reveal>
          <p className="pause__eyebrow">Para recordar</p>
        </Reveal>

        <ul className="pause__list">
          {phrases.map((phrase) => (
            <Reveal as="li" key={phrase} className="pause__item">
              {phrase}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
