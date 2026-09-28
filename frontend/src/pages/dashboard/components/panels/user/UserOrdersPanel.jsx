import { useState } from 'react'
import { toast } from 'react-toastify'
import PageHeader from '../../ui/PageHeader'
import PanelCard from '../../ui/PanelCard'
import DataTable from '../../ui/DataTable'
import StatusBadge from '../../ui/StatusBadge'
import { EyeIcon, RefreshIcon } from '../../Icons'
import { myOrders } from '../../../data/customerData'

const filters = ['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

/* Customer → My Orders: order history with status filter. */
function UserOrdersPanel() {
  const [filter, setFilter] = useState('All')

  const rows = filter === 'All' ? myOrders : myOrders.filter((row) => row.status === filter)

  const columns = [
    { key: 'id', label: 'Order ID', render: (row) => <strong>{row.id}</strong> },
    { key: 'date', label: 'Ordered On' },
    { key: 'items', label: 'Items', align: 'center' },
    { key: 'total', label: 'Total', align: 'right', render: (row) => `$${row.total.toFixed(2)}` },
    { key: 'payment', label: 'Payment', render: (row) => <StatusBadge value={row.payment} /> },
    { key: 'status', label: 'Status', render: (row) => <StatusBadge value={row.status} /> },
    {
      key: 'actions',
      label: 'Actions',
      align: 'right',
      render: (row) => (
        <div className="row-actions">
          <button type="button" className="row-actions__btn" aria-label="View order" onClick={() => toast.info(`Order ${row.id} details — API wiring next`)}>
            <EyeIcon />
          </button>
          <button type="button" className="row-actions__btn" aria-label="Reorder" onClick={() => toast.success(`Reorder ${row.id} (demo)`)}>
            <RefreshIcon />
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="panel">
      <PageHeader
        eyebrow="My Account"
        title="My Orders"
        description={`${myOrders.length} orders in your history`}
        showSearch={false}
        onAction={() => toast.info('Refreshed (demo)')}
      />

      <PanelCard
        title="Order History"
        subtitle="Filter by status"
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
          footer={<span>Showing {rows.length} of {myOrders.length} orders</span>}
        />
      </PanelCard>
    </div>
  )
}

export default UserOrdersPanel
