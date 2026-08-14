import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

/**
 * Detalle de un centro o canal.
 * En desktop se muestra como tarjeta junto al gráfico; en móvil, como
 * bottom sheet (con portal, para que `position: fixed` no dependa del árbol).
 */
export default function CenterDetail({ item, onClose, asSheet }) {
  const sheetRef = useRef(null)

  useEffect(() => {
    if (!asSheet || !item) return

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Foco al panel para que el lector de pantalla anuncie el contenido.
    sheetRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [asSheet, item, onClose])

  if (!item) {
    return asSheet ? null : (
      <div className="detail detail--empty" aria-hidden="true">
        <p className="muted">Selecciona un centro del gráfico para leer qué significa.</p>
      </div>
    )
  }

  const body = (
    <>
      <div className="detail__head">
        <span className={`detail__badge ${item.defined ? 'is-defined' : ''}`}>
          {item.kind === 'channel' ? 'Canal definido' : item.defined ? 'Definido' : 'Indefinido'}
        </span>
        <h3 className="detail__name">{item.name}</h3>
      </div>
      <p className="detail__title serif">{item.title}</p>
      <p className="detail__text body">{item.text}</p>
    </>
  )

  if (!asSheet) {
    return (
      <div className="detail" role="status" aria-live="polite">
        {body}
        <button type="button" className="detail__clear" onClick={onClose}>
          Cerrar
        </button>
      </div>
    )
  }

  return createPortal(
    <div className="sheet-layer">
      <button
        type="button"
        className="sheet__backdrop"
        aria-label="Cerrar detalle"
        onClick={onClose}
      />
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalle: ${item.name}`}
        tabIndex={-1}
        ref={sheetRef}
      >
        <span className="sheet__grip" aria-hidden="true" />
        <div className="detail">{body}</div>
        <button type="button" className="sheet__close btn" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>,
    document.body
  )
}
