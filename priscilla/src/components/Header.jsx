import { useEffect, useRef } from 'react'
import { scrollToSection } from '../hooks/useScrollState'
import { sections } from '../data/humanDesign'

export default function Header({ activeId, progress, scrolled }) {
  const listRef = useRef(null)
  const active = sections.find((s) => s.id === activeId) || sections[0]
  // La carta final queda fuera del recorrido numerado: su índice es "—".
  const total = sections.filter((s) => s.index !== '—').length

  // Mantiene visible la pill activa dentro del carril horizontal (móvil).
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const pill = list.querySelector('[data-active="true"]')
    if (!pill) return

    const listBox = list.getBoundingClientRect()
    const pillBox = pill.getBoundingClientRect()
    const overflows = pillBox.left < listBox.left + 8 || pillBox.right > listBox.right - 8
    if (!overflows) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    list.scrollTo({
      left: pill.offsetLeft - list.clientWidth / 2 + pill.clientWidth / 2,
      behavior: reduce ? 'auto' : 'smooth',
    })
  }, [activeId])

  return (
    <header className={`header ${scrolled ? 'is-compact' : ''}`}>
      <div className="header__inner shell">
        <a
          className="header__mark"
          href="#inicio"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('inicio')
          }}
        >
          <span className="header__mark-icon" aria-hidden="true">
            <svg viewBox="0 0 34 20" focusable="false">
              <circle cx="12" cy="10" r="7.4" fill="none" stroke="var(--deep-koamaru)" strokeWidth="1.6" />
              <circle cx="22" cy="10" r="7.4" fill="none" stroke="var(--light-cobalt-blue)" strokeWidth="1.6" />
            </svg>
          </span>
          <span className="header__mark-text">Para Priscilla</span>
        </a>

        <p className="header__progress" aria-hidden="true">
          <span className="header__progress-num">{active.index}</span>
          <span className="header__progress-sep">/</span>
          <span className="header__progress-total">{String(total).padStart(2, '0')}</span>
        </p>

        <nav className="header__nav" aria-label="Secciones del recorrido">
          <ul className="header__list" ref={listRef}>
            {sections.map((section) => {
              const isActive = section.id === activeId
              return (
                <li key={section.id}>
                  <button
                    type="button"
                    className="pill"
                    data-active={isActive}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.nav}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className="header__line" role="presentation">
        <span className="header__line-fill" style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  )
}
