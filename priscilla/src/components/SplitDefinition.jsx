/**
 * Visualización de la definición dividida: dos grupos de centros definidos
 * que no se tocan, y el puente que ciertas personas pueden crear entre ellos.
 */
export default function SplitDefinition() {
  return (
    <figure className="splitdef">
      <div className="splitdef__group">
        <span className="splitdef__tag">Grupo 1</span>
        <p className="splitdef__centers">Ajna · Garganta</p>
        <p className="splitdef__note">Ordenar ideas y ponerles palabras.</p>
      </div>

      <div className="splitdef__bridge" aria-hidden="true">
        <span className="splitdef__bridge-line" />
        <span className="splitdef__bridge-label">Puente</span>
        <span className="splitdef__bridge-line" />
      </div>

      <div className="splitdef__group">
        <span className="splitdef__tag">Grupo 2</span>
        <p className="splitdef__centers">Bazo · Raíz</p>
        <p className="splitdef__note">Intuición del momento y respuesta a la presión.</p>
      </div>

      <figcaption className="splitdef__caption muted">
        Tus dos grupos de centros definidos no se tocan entre sí. Algunas personas los conectan
        temporalmente cuando están cerca de ti.
      </figcaption>
    </figure>
  )
}
