/*
 * Lightweight CSS bar chart — no charting library needed.
 * data: [{ label, value, orders }]
 */
function SalesChart({ data, title = 'Revenue Overview', subtitle = 'Last 8 months' }) {
  const max = Math.max(...data.map((d) => d.value))

  return (
    <section className="panel-card chart-card">
      <div className="panel-card__head">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="chart-card__legend">
          <span className="chart-card__dot chart-card__dot--sales" /> Sales
          <span className="chart-card__dot chart-card__dot--orders" /> Orders
        </div>
      </div>

      <div className="chart">
        {data.map((item) => (
          <div className="chart__col" key={item.label}>
            <div className="chart__bars">
              <span
                className="chart__bar chart__bar--orders"
                style={{ height: `${(item.orders / max) * 100}%` }}
                title={`Orders: ${item.orders}`}
              />
              <span
                className="chart__bar chart__bar--sales"
                style={{ height: `${(item.value / max) * 100}%` }}
                title={`Sales: $${item.value}k`}
              />
            </div>
            <span className="chart__label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SalesChart
