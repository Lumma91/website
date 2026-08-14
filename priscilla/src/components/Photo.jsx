import { useState } from 'react'

/**
 * Fotografía con proporción fija y encuadre controlado.
 * Si el archivo todavía no existe en public/photos/, muestra un panel
 * neutro con el nombre esperado en lugar de romper la maqueta.
 */
export default function Photo({
  src,
  alt,
  ratio = '4 / 5',
  focal = '50% 40%',
  priority = false,
  className = '',
  style,
}) {
  const [failed, setFailed] = useState(false)
  const filename = src.split('/').pop()

  return (
    <div
      className={`photo ${failed ? 'photo--empty' : ''} ${className}`.trim()}
      style={{ '--photo-ratio': ratio, ...style }}
    >
      {failed ? (
        <div className="photo__placeholder" role="img" aria-label={alt}>
          <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false">
            <circle cx="16" cy="20" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="24" cy="20" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span className="photo__hint">{filename}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          style={{ objectPosition: focal }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
