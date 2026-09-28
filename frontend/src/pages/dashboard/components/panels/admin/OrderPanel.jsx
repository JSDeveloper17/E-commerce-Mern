import { useState } from 'react'
import { toast } from 'react-toastify'
import PageHeader from '../../ui/PageHeader'
import PanelCard from '../../ui/PanelCard'
import DataTable from '../../ui/DataTable'
import StatusBadge from '../../ui/StatusBadge'
import { EyeIcon, TruckIcon } from '../../Icons'
import { orderRows } from '../../../data/adminData'

const filters = ['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

/* Admin → Orders: filterable order list. */
function OrderPanel() {
  const [filter, setFilter] = useState('All')

  const rows = filter === 'All' ? orderRows : orderRows.filter((row) => row.status === filter)

  const columns = [
    { key: 'id', label: 'Order ID', render: (row) => <strong>{row.id}</strong> },
    {
      key: 'customer',
      label: 'Customer',
      render: (row) => (
        <div className="table-user">
          <strong>{row.customer}</strong>
          <span>{row.email}</span>
        </div>
      ),
    },
    { key: 'date', label: 'Date' },
    { key: 'items', label: 'Items', align: 'center' },
    { key: 'total', label: 'Total', align: 'right', render: (row) => `$${row.total.toFixed(2)}` },
    { key: 'payment', label: 'Payment', render: (row) => <StatusBadge value={row.payment} /> },
    { key: 'status', label: 'Status', render: (row) => <StatusBadge value={row.status} /> },
    {
      key: 'actions',
      label: 'Actions',
      align: 'right',
      render: () => (
        <div className="row-actions">
          <button type="button" className="row-actions__btn" aria-label="View order" onClick={() => toast.info('Order details — API wiring next')}>
            <EyeIcon />
          </button>
          <button type="button" className="row-actions__btn" aria-label="Update shipment" onClick={() => toast.info('Update shipment — API wiring next')}>
            <TruckIcon />
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="panel">
      <PageHeader
        eyebrow="Sales"
        title="All Orders"
        description={`${orderRows.length} orders · revenue $48,920`}
        searchPlaceholder="Search by order ID or customer…"
        onAction={() => toast.info('Export CSV — API wiring next')}
      />

      <PanelCard
        title="Order List"
        subtitle="Filter by current status"
        action={
          <div className="chips">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                className={`chip ${filter === item ? 'chip--active' : ''}`}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        }
      >
        <DataTable
          columns={columns}
          rows={rows}
          footer={<span>Showing {rows.length} of {orderRows.length} orders</span>}
        />
      </PanelCard>
    </div>
  )
}

export default OrderPanel
