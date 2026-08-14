import { useId, useState } from 'react'
import { technicalDetails } from '../data/humanDesign'

/**
 * Accordion secundario. La narrativa principal se entiende sin abrirlo:
 * está aquí para quien quiera el detalle técnico.
 */
export default function TechnicalDetails() {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className={`tech ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="tech__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>Ver detalles de mi diseño</span>
        <span className="tech__chevron" aria-hidden="true">
          <svg viewBox="0 0 16 16" focusable="false">
            <path
              d="M4 6.5 8 10.5 12 6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className="tech__panel" id={panelId} hidden={!open}>
        <dl className="tech__list">
          {technicalDetails.map((row) => (
            <div className="tech__row" key={row.label}>
              <dt className="tech__label">{row.label}</dt>
              <dd className="tech__value">
                {row.value}
                <span className="tech__note">{row.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
