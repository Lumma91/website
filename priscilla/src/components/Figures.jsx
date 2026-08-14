/**
 * Lenguaje gráfico del sitio.
 *
 * Cada figura dice lo mismo que el texto que acompaña, pero en forma. No son
 * adornos: si tapas el texto, la figura sigue explicando la idea.
 *
 * Todas se construyen con las mismas primitivas — círculos llenos, círculos
 * abiertos, líneas finas y arcos — para que se lean como una familia, y usan
 * sólo la paleta. Coordenadas fijas, nada aleatorio.
 *
 * Son decorativas a efectos de lectura (`aria-hidden`) salvo cuando aportan un
 * dato que el texto no dice; en ese caso llevan `role="img"` y descripción.
 */

/* Campo de puntos del "alcance": pocos sólidos, muchos abiertos. */
const REACH_DOTS = [
  [214, 52], [268, 34], [318, 62], [360, 40],
  [200, 104], [252, 88], [306, 112], [354, 92],
  [212, 152], [262, 140], [316, 160], [362, 144],
  [232, 198], [286, 206], [338, 196], [376, 178],
]

/** 02 · Poca masa, mucho alcance. */
export function FigureReach() {
  return (
    <svg className="fig" viewBox="0 0 400 240" aria-hidden="true" focusable="false">
      {/* El cono de mirada */}
      <path
        d="M56 120 L392 18 L392 222 Z"
        fill="var(--accent-soft)"
        stroke="none"
      />
      {/* Rayos hacia algunos puntos */}
      {[REACH_DOTS[1], REACH_DOTS[6], REACH_DOTS[10], REACH_DOTS[14]].map(([x, y]) => (
        <line key={`${x}-${y}`} x1="56" y1="120" x2={x} y2={y} className="fig__ray" />
      ))}
      {REACH_DOTS.map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={i % 5 === 0 ? 5 : 3.5} className="fig__dot-open" />
      ))}
      {/* Quien mira */}
      <circle cx="56" cy="120" r="11" className="fig__dot-solid" />
      <circle cx="56" cy="120" r="21" className="fig__halo" />
    </svg>
  )
}

/** 03 · El cuerpo responde antes que la mente. */
export function FigureSignal() {
  const ticks = [186, 212, 238, 264, 290, 316, 342, 368]
  return (
    <svg className="fig" viewBox="0 0 400 200" aria-hidden="true" focusable="false">
      {/* Carril del cuerpo */}
      <line x1="28" y1="66" x2="380" y2="66" className="fig__lane" />
      <path d="M96 66 L104 40 L112 92 L120 52 L128 66" className="fig__spark" />
      <circle cx="112" cy="66" r="5.5" className="fig__dot-solid" />

      {/* Carril de la mente */}
      <line x1="28" y1="146" x2="380" y2="146" className="fig__lane" />
      {ticks.map((x) => (
        <line key={x} x1={x} y1="136" x2={x} y2="156" className="fig__tick" />
      ))}

      {/* El instante en que ya lo sabías */}
      <line x1="112" y1="30" x2="112" y2="176" className="fig__marker" />
      <circle cx="112" cy="176" r="3.5" className="fig__dot-accent" />
    </svg>
  )
}

/** 04 · Se aprende cayéndose. */
export function FigurePath() {
  return (
    <svg className="fig" viewBox="0 0 400 200" aria-hidden="true" focusable="false">
      <line x1="24" y1="170" x2="380" y2="170" className="fig__lane" />
      <path
        d="M32 152 L82 148 L104 178 L136 120 L188 116 L208 150 L242 86 L296 82 L314 112 L352 44"
        className="fig__route"
      />
      {/* Las caídas */}
      {[[104, 178], [208, 150], [314, 112]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="6" className="fig__dot-open" />
      ))}
      {/* Dónde acaba */}
      <circle cx="352" cy="44" r="9" className="fig__dot-solid" />
    </svg>
  )
}

/** 05a · Ver qué sobra: lo mismo, cada vez más limpio. */
export function FigureRefine() {
  const shapes = [
    'M20 96 L44 40 L62 62 L86 26 L104 74 L128 44 L140 96 L108 118 L74 100 L40 122 Z',
    'M20 92 L48 44 L78 34 L108 52 L134 44 L140 92 L110 116 L74 104 L44 118 Z',
    'M22 88 L52 46 L88 36 L122 52 L138 88 L112 114 L74 106 L46 114 Z',
    'M24 84 L58 48 L96 44 L128 62 L136 90 L108 112 L72 108 L44 108 Z',
  ]
  return (
    <svg className="fig fig--wide" viewBox="0 0 680 160" aria-hidden="true" focusable="false">
      {shapes.map((d, i) => (
        <g key={d} transform={`translate(${i * 172}, 8)`}>
          <path
            d={d}
            className={i === shapes.length - 1 ? 'fig__form fig__form--final' : 'fig__form'}
          />
        </g>
      ))}
    </svg>
  )
}

/** 05b · Del desorden al orden. */
export function FigureOrder() {
  const scattered = [
    [34, 44], [82, 22], [58, 88], [110, 66], [30, 120], [92, 130], [126, 106], [66, 150],
    [18, 76], [116, 30], [140, 142], [86, 60],
  ]
  const ordered = []
  for (let r = 0; r < 3; r += 1) {
    for (let c = 0; c < 4; c += 1) {
      ordered.push([292 + c * 34, 46 + r * 40])
    }
  }
  return (
    <svg className="fig" viewBox="0 0 440 190" aria-hidden="true" focusable="false">
      {scattered.map(([x, y]) => (
        <circle key={`s${x}-${y}`} cx={x} cy={y} r="5" className="fig__dot-open" />
      ))}

      <path d="M186 92 L242 92" className="fig__arrow" />
      <path d="M234 84 L244 92 L234 100" className="fig__arrow" />

      {ordered.map(([x, y], i) => (
        <circle
          key={`o${x}-${y}`}
          cx={x}
          cy={y}
          r="5"
          className={i % 5 === 0 ? 'fig__dot-accent' : 'fig__dot-solid'}
        />
      ))}
    </svg>
  )
}

/** 06 · Dos grupos que sólo se tocan cuando llega alguien. */
export function FigureBridge() {
  const left = [[52, 60], [96, 40], [88, 96], [40, 112]]
  const right = [[318, 62], [366, 46], [356, 104], [308, 118]]
  return (
    <svg className="fig" viewBox="0 0 420 170" aria-hidden="true" focusable="false">
      {/* Grupo A */}
      <path d="M52 60 L96 40 M52 60 L88 96 M88 96 L40 112" className="fig__link" />
      {left.map(([x, y]) => (
        <circle key={`l${x}`} cx={x} cy={y} r="7" className="fig__dot-solid" />
      ))}

      {/* Grupo B */}
      <path d="M318 62 L366 46 M318 62 L356 104 M356 104 L308 118" className="fig__link" />
      {right.map(([x, y]) => (
        <circle key={`r${x}`} cx={x} cy={y} r="7" className="fig__dot-solid" />
      ))}

      {/* El puente que aparece con ciertas personas */}
      <path d="M104 78 L306 84" className="fig__bridge" />
      <circle cx="205" cy="81" r="10" className="fig__dot-bridge" />
    </svg>
  )
}

/** 07 · Cuatro partes fijas, cinco antenas. */
export function FigureGrid() {
  const solid = [0, 2, 4, 7]
  return (
    <svg
      className="fig fig--grid"
      viewBox="0 0 300 300"
      role="img"
      aria-label="Nueve partes: cuatro se comportan casi siempre igual, cinco recogen lo que hay alrededor."
      focusable="false"
    >
      {Array.from({ length: 9 }, (_, i) => {
        const x = 26 + (i % 3) * 88
        const y = 26 + Math.floor(i / 3) * 88
        const isSolid = solid.includes(i)
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width="60"
              height="60"
              rx="14"
              className={isSolid ? 'fig__cell fig__cell--solid' : 'fig__cell'}
            />
            {!isSolid && (
              <>
                <circle cx={x + 30} cy={y + 30} r="15" className="fig__antenna" />
                <circle cx={x + 30} cy={y + 30} r="24" className="fig__antenna fig__antenna--far" />
              </>
            )}
          </g>
        )
      })}
    </svg>
  )
}

/** 08 · Todo converge en una sola cosa. */
export function FigureConverge() {
  return (
    <svg className="fig" viewBox="0 0 400 220" aria-hidden="true" focusable="false">
      {[150, 120, 90, 60].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="110"
          r={r}
          className="fig__ring"
          style={{ opacity: 0.22 + i * 0.16 }}
        />
      ))}
      <circle cx="200" cy="110" r="30" className="fig__ring fig__ring--near" />
      <circle cx="200" cy="110" r="13" className="fig__dot-solid" />
    </svg>
  )
}
