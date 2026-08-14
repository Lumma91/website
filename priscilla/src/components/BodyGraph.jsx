import { useCallback, useMemo, useRef, useState } from 'react'
import CenterDetail from './CenterDetail'
import useMediaQuery from '../hooks/useMediaQuery'
import { centers, channels } from '../data/humanDesign'
import {
  VIEW,
  allChannels,
  centerOrder,
  centerShapes,
  gatePoints,
  visibleGateLabels,
} from '../data/bodygraphGeometry'

/** Puertas que forman parte de un canal definido. */
const definedGates = new Set(channels.flatMap((channel) => channel.gates))

/** Clave "a-b" normalizada, para comparar canales sin depender del orden. */
const key = (a, b) => [a, b].sort((x, y) => x - y).join('-')
const definedKeys = new Set(channels.map((channel) => key(...channel.gates)))

export default function BodyGraph({ compact = false }) {
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const lastTrigger = useRef(null)

  const active = hovered || selected

  const activeItem = useMemo(() => {
    if (!active) return null
    if (active.kind === 'center') {
      const center = centers[active.id]
      return { kind: 'center', defined: center.defined, name: center.name, title: center.title, text: center.text }
    }
    const channel = channels.find((c) => c.id === active.id)
    return {
      kind: 'channel',
      defined: true,
      name: `${channel.id} · ${channel.title}`,
      title: channel.titleEs,
      text: channel.text,
    }
  }, [active])

  const open = useCallback((kind, id, event) => {
    lastTrigger.current = event?.currentTarget || null
    setSelected((current) => (current && current.kind === kind && current.id === id ? null : { kind, id }))
  }, [])

  const close = useCallback(() => {
    setSelected(null)
    setHovered(null)
    lastTrigger.current?.focus?.()
  }, [])

  const isActive = (kind, id) => active?.kind === kind && active.id === id

  return (
    <div className={`bodygraph ${compact ? 'bodygraph--compact' : ''}`}>
      <div className="bodygraph__stage">
        <svg
          className="bodygraph__svg"
          viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
          role="img"
          aria-label="BodyGraph de Priscilla. Centros definidos: Ajna, Garganta, Bazo y Raíz. Canales definidos: 17–62 y 18–58."
          focusable="false"
        >
          {/* --- Canales no definidos: esqueleto en hairline --- */}
          <g className="bg__channels">
            {allChannels.map(([a, b]) => {
              if (definedKeys.has(key(a, b))) return null
              const [x1, y1] = gatePoints[a]
              const [x2, y2] = gatePoints[b]
              return <line key={key(a, b)} x1={x1} y1={y1} x2={x2} y2={y2} className="bg__channel" />
            })}
          </g>

          {/* --- Canales definidos --- */}
          <g className="bg__channels-defined">
            {channels.map((channel) => {
              const [a, b] = channel.gates
              const [x1, y1] = gatePoints[a]
              const [x2, y2] = gatePoints[b]
              return (
                <line
                  key={channel.id}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  className={`bg__channel-defined ${isActive('channel', channel.id) ? 'is-active' : ''}`}
                />
              )
            })}
          </g>

          {/* --- Centros --- */}
          <g className="bg__centers">
            {centerOrder.map((id) => {
              const shape = centerShapes[id]
              const state = `${centers[id].defined ? 'is-defined' : 'is-open'} ${
                isActive('center', id) ? 'is-active' : ''
              }`
              return shape.kind === 'rect' ? (
                <rect
                  key={id}
                  x={shape.x}
                  y={shape.y}
                  width={shape.w}
                  height={shape.h}
                  rx="5"
                  className={`bg__center ${state}`}
                />
              ) : (
                <polygon key={id} points={shape.points} className={`bg__center ${state}`} />
              )
            })}
          </g>

          {/* --- Puntos de puerta de los canales definidos --- */}
          <g className="bg__gates">
            {[...definedGates].map((gate) => {
              const [x, y] = gatePoints[gate]
              return <circle key={gate} cx={x} cy={y} r="3.4" className="bg__gate" />
            })}
            {Object.entries(visibleGateLabels).map(([gate, pos]) => {
              const [x, y] = gatePoints[gate]
              return (
                <text
                  key={gate}
                  x={x + pos.dx}
                  y={y + pos.dy}
                  textAnchor={pos.anchor}
                  className="bg__gate-label"
                >
                  {gate}
                </text>
              )
            })}
          </g>
        </svg>

        {/* Botones reales superpuestos: foco, teclado y área táctil de verdad. */}
        {!compact && <div className="bodygraph__hits">
          {centerOrder.map((id) => {
            const { hit } = centerShapes[id]
            const center = centers[id]
            return (
              <button
                key={id}
                type="button"
                className={`bg__hit ${isActive('center', id) ? 'is-active' : ''}`}
                style={{
                  left: `${(hit.x / VIEW.width) * 100}%`,
                  top: `${(hit.y / VIEW.height) * 100}%`,
                  width: `${(hit.w / VIEW.width) * 100}%`,
                  height: `${(hit.h / VIEW.height) * 100}%`,
                }}
                aria-pressed={selected?.kind === 'center' && selected.id === id}
                onClick={(event) => open('center', id, event)}
                onMouseEnter={() => isDesktop && setHovered({ kind: 'center', id })}
                onMouseLeave={() => isDesktop && setHovered(null)}
                onFocus={() => isDesktop && setHovered({ kind: 'center', id })}
                onBlur={() => isDesktop && setHovered(null)}
              >
                <span className="visually-hidden">
                  {center.name} · centro {center.defined ? 'definido' : 'indefinido'}
                </span>
              </button>
            )
          })}
        </div>}
      </div>

      {compact ? null : <>
      <p className="bodygraph__hint muted">
        {isDesktop ? 'Pasa por encima de los centros' : 'Toca los centros'} para explorar tu diseño.
      </p>

      <ul className="bodygraph__channels">
        {channels.map((channel) => (
          <li key={channel.id}>
            <button
              type="button"
              className={`chip ${isActive('channel', channel.id) ? 'is-active' : ''}`}
              aria-pressed={selected?.kind === 'channel' && selected.id === channel.id}
              onClick={(event) => open('channel', channel.id, event)}
              onMouseEnter={() => isDesktop && setHovered({ kind: 'channel', id: channel.id })}
              onMouseLeave={() => isDesktop && setHovered(null)}
              onFocus={() => isDesktop && setHovered({ kind: 'channel', id: channel.id })}
              onBlur={() => isDesktop && setHovered(null)}
            >
              <span className="chip__id">{channel.id}</span>
              <span className="chip__text">{channel.shortDescription}</span>
            </button>
          </li>
        ))}
      </ul>

      <ul className="bodygraph__legend" aria-hidden="true">
        <li>
          <span className="legend__swatch legend__swatch--defined" /> Definido
        </li>
        <li>
          <span className="legend__swatch" /> Indefinido
        </li>
      </ul>

      {/* Desktop: tarjeta en flujo. Móvil: bottom sheet sólo al tocar. */}
      {isDesktop ? (
        <div className="bodygraph__detail">
          <CenterDetail item={activeItem} onClose={close} asSheet={false} />
        </div>
      ) : (
        <CenterDetail item={selected ? activeItem : null} onClose={close} asSheet />
      )}
      </>}
    </div>
  )
}
