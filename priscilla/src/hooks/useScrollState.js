import { useEffect, useState } from 'react'

/**
 * Sección activa según scroll + progreso general del recorrido.
 * Un único IntersectionObserver para la navegación y un listener
 * de scroll pasivo (rAF) para la línea de progreso.
 */
export function useScrollState(ids) {
  const [activeId, setActiveId] = useState(ids[0])
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!nodes.length || typeof IntersectionObserver === 'undefined') return

    // Guardamos la visibilidad de cada sección y elegimos la más visible.
    const ratios = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target.id, entry.intersectionRatio))

        let best = null
        let bestRatio = 0
        nodes.forEach((node) => {
          const ratio = ratios.get(node.id) || 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = node.id
          }
        })

        if (best) setActiveId(best)
      },
      {
        // Ignoramos la franja bajo el header sticky.
        rootMargin: '-120px 0px -45% 0px',
        threshold: [0, 0.15, 0.35, 0.6, 0.85, 1],
      }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [ids])

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const y = window.scrollY || doc.scrollTop || 0
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0)
      setScrolled(y > 24)
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return { activeId, progress, scrolled }
}

/** Scroll suave respetando prefers-reduced-motion. */
export function scrollToSection(id) {
  const node = document.getElementById(id)
  if (!node) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const header = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '104',
    10
  )
  const top = node.getBoundingClientRect().top + window.scrollY - (header + 8)
  window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
}
