import { useMemo, useState } from 'react'

/**
 * Extensiones que se prueban si la declarada no existe.
 *
 * Los móviles y los editores exportan la misma foto como .jpg, .jpeg, .png o
 * .PNG sin avisar, y una extensión que no cuadra deja el hueco vacío sin más
 * pista que un 404. Probarlas en orden evita tener que renombrar archivos a
 * mano cada vez que se cambia una foto.
 */
const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP']

/**
 * Fotografía con proporción fija y encuadre controlado.
 * Si no existe con ninguna extensión conocida, muestra un panel neutro con el
 * nombre esperado en lugar de romper la maqueta.
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
  const [attempt, setAttempt] = useState(0)

  const candidates = useMemo(() => {
    const base = src.replace(/\.[^./]+$/, '')
    const list = [src]
    EXTENSIONS.forEach((ext) => {
      const candidate = `${base}.${ext}`
      if (!list.includes(candidate)) list.push(candidate)
    })
    return list
  }, [src])

  const exhausted = attempt >= candidates.length
  const filename = src.split('/').pop()

  return (
    <div
      className={`photo ${exhausted ? 'photo--empty' : ''} ${className}`.trim()}
      style={{ '--photo-ratio': ratio, ...style }}
    >
      {exhausted ? (
        <div className="photo__placeholder" role="img" aria-label={alt}>
          <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false">
            <circle cx="16" cy="20" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="24" cy="20" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span className="photo__hint">{filename}</span>
        </div>
      ) : (
        <img
          key={candidates[attempt]}
          src={candidates[attempt]}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          style={{ objectPosition: focal }}
          onError={() => setAttempt((value) => value + 1)}
        />
      )}
    </div>
  )
}
