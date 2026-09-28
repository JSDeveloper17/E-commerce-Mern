/* Generic white card with a title row — wraps every block of dashboard content. */
function PanelCard({ title, subtitle, action, children, className = '' }) {
  return (
    <section className={`panel-card ${className}`}>
      {(title || action) && (
        <div className="panel-card__head">
          <div>
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
          {action && <div className="panel-card__action">{action}</div>}
        </div>
      )}
      {children}
    </section>
  )
}

export default PanelCard
