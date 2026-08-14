import Reveal from './Reveal'

/** Cabecera común: número de sección + rótulo. */
export default function SectionHead({ index, label, className = '' }) {
  return (
    <Reveal className={`section-head ${className}`.trim()}>
      {/* Las secciones fuera del recorrido numerado no muestran índice */}
      {index !== '—' && <span className="section-head__index">{index}</span>}
      <span className="section-head__label">{label}</span>
    </Reveal>
  )
}
