import { snapshot } from '../data/humanDesign'
import Reveal from './Reveal'

export default function DesignSnapshot() {
  return (
    <ul className="snapshot">
      {snapshot.map((item, i) => (
        <Reveal as="li" key={item.label} delay={i * 55} className="snapshot__item">
          <span className="snapshot__label">{item.label}</span>
          <span className="snapshot__value">{item.value}</span>
        </Reveal>
      ))}
    </ul>
  )
}
