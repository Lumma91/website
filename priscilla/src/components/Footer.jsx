export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <span className="footer__mark" aria-hidden="true">
          <svg viewBox="0 0 34 20" focusable="false">
            <circle cx="12" cy="10" r="7.4" fill="none" stroke="var(--deep-koamaru)" strokeWidth="1.4" />
            <circle cx="22" cy="10" r="7.4" fill="none" stroke="var(--light-cobalt-blue)" strokeWidth="1.4" />
          </svg>
        </span>
        <p className="footer__line">Creado para Priscilla, con cariño.</p>
        <p className="footer__meta">Sonia · 2026</p>
      </div>
    </footer>
  )
}
