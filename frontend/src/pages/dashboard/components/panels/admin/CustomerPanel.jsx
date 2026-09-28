import { toast } from 'react-toastify'
import PageHeader from '../../ui/PageHeader'
import PanelCard from '../../ui/PanelCard'
import DataTable from '../../ui/DataTable'
import StatusBadge from '../../ui/StatusBadge'
import { MailIcon, TrashIcon } from '../../Icons'
import { customerRows } from '../../../data/adminData'

const initialsOf = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

/* Admin → Customers: registered users with their spend. */
function CustomerPanel() {
  const columns = [
    {
      key: 'name',
      label: 'Customer',
      render: (row) => (
        <div className="table-user table-user--avatar">
          <span className="avatar">{initialsOf(row.name)}</span>
          <div>
            <strong>{row.name}</strong>
            <span>{row.email}</span>
          </div>
        </div>
      ),
    },
    { key: 'orders', label: 'Orders', align: 'center' },
    { key: 'spent', label: 'Total Spent', align: 'right', render: (row) => `$${row.spent.toFixed(2)}` },
    { key: 'joined', label: 'Joined' },
    { key: 'status', label: 'Status', render: (row) => <StatusBadge value={row.status} /> },
    {
      key: 'actions',
      label: 'Actions',
      align: 'right',
      render: () => (
        <div className="row-actions">
          <button type="button" className="row-actions__btn" aria-label="Email customer" onClick={() => toast.info('Send email — API wiring next')}>
            <MailIcon />
          </button>
          <button type="button" className="row-actions__btn row-actions__btn--danger" aria-label="Remove customer" onClick={() => toast.warn('Remove customer — API wiring next')}>
            <TrashIcon />
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="panel">
      <PageHeader
        eyebrow="People"
        title="Customers"
        description={`${customerRows.length} registered users shown (3,942 total)`}
        searchPlaceholder="Search customers…"
        onAction={() => toast.info('Customer export — API wiring next')}
      />

      <PanelCard title="Customer List" subtitle="Order count, lifetime value and status">
        <DataTable
          columns={columns}
          rows={customerRows}
          footer={<span>Showing {customerRows.length} of 3,942 customers</span>}
        />
      </PanelCard>
    </div>
  )
}

export default CustomerPanel
