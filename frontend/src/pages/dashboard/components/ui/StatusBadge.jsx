/* Small coloured pill used for order/product/user statuses. */
const toneMap = {
  Active: 'success',
  Delivered: 'success',
  Paid: 'success',
  Shipped: 'info',
  Processing: 'warning',
  Pending: 'warning',
  'Low Stock': 'warning',
  Inactive: 'muted',
  'Out of Stock': 'danger',
  Cancelled: 'danger',
  Refunded: 'danger',
}

function StatusBadge({ value }) {
  const tone = toneMap[value] || 'muted'
  return <span className={`badge badge--${tone}`}>{value}</span>
}

export default StatusBadge
