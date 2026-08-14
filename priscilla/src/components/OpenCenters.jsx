import { useId, useState } from 'react'
import { openCenters } from '../data/humanDesign'

/** Accordion de centros indefinidos. Abre uno a la vez. */
export default function OpenCenters() {
  const [openId, setOpenId] = useState(openCenters[0].id)
  const baseId = useId()

  return (
    <div className="open-centers">
      {openCenters.map((center) => {
        const isOpen = openId === center.id
        const panelId = `${baseId}-${center.id}`
        return (
          <div className={`open-center ${isOpen ? 'is-open' : ''}`} key={center.id}>
            <h4 className="open-center__heading">
              <button
                type="button"
                className="open-center__toggle"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : center.id)}
              >
                <span className="open-center__name">{center.name}</span>
                <span className="open-center__concept">{center.concept}</span>
                <span className="open-center__icon" aria-hidden="true">
                  <svg viewBox="0 0 16 16" focusable="false">
                    <path d="M8 3.5v9M3.5 8h9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h4>

            <div className="open-center__panel" id={panelId} hidden={!isOpen}>
              <p className="body open-center__text">{center.text}</p>
              <p className="open-center__question-label label">Una pregunta útil</p>
              <p className="open-center__question serif">{center.question}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
