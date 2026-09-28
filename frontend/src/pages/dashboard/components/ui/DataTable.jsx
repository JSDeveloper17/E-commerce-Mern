/*
 * Generic, responsive data table.
 *
 * columns: [{ key, label, align?, render?(row) }]
 * rows:    array of objects (dummy data for now)
 */
function DataTable({ columns, rows, footer }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={col.align ? `is-${col.align}` : undefined}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={col.key} data-label={col.label} className={col.align ? `is-${col.align}` : undefined}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {footer && <div className="table-foot">{footer}</div>}
    </div>
  )
}

export default DataTable
