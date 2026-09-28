import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import PageHeader from '../../ui/PageHeader'
import StatCard from '../../ui/StatCard'
import SalesChart from '../../ui/SalesChart'
import PanelCard from '../../ui/PanelCard'
import DataTable from '../../ui/DataTable'
import StatusBadge from '../../ui/StatusBadge'
import { activityFeed, adminStats, orderRows, salesOverview, topCategories } from '../../../data/adminData'

const activityTone = { order: 'purple', user: 'teal', stock: 'rose', review: 'amber', refund: 'blue' }

function OverviewPanel() {
  const handleAction = (label) => toast.info(`${label} — static demo, API wiring comes next`)

  const columns = [
    { key: 'id', label: 'Order', render: (row) => <strong>{row.id}</strong> },
    { key: 'customer', label: 'Customer' },
    { key: 'date', label: 'Date' },
    { key: 'total', label: 'Total', align: 'right', render: (row) => `$${row.total.toFixed(2)}` },
    { key: 'status', label: 'Status', render: (row) => <StatusBadge value={row.status} /> },
  ]

  return (
    <div className="panel">
      <PageHeader
        eyebrow="Admin Console"
        title="Store Overview"
        description="Track revenue, orders and inventory performance at a glance."
        actionLabel="Add Product"
        onAction={() => handleAction('Quick actions')}
      />

      <div className="dash__stats">
        {adminStats.map((stat) => (
          <StatCard key={stat.key} {...stat} />
        ))}
      </div>

      <div className="dash__grid dash__grid--chart">
        <SalesChart data={salesOverview} />

        <PanelCard title="Recent Activity" subtitle="Live store events" className="activity-card">
          <ul className="activity">
            {activityFeed.map((item) => (
              <li className="activity__item" key={item.id}>
                <span className={`activity__dot activity__dot--${activityTone[item.type] || 'purple'}`} />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.meta}</p>
                </div>
                <time>{item.time}</time>
              </li>
            ))}
          </ul>
        </PanelCard>
      </div>

      <div className="dash__grid dash__grid--split">
        <PanelCard
          title="Top Categories"
          subtitle="Share of total orders"
          action={
            <Link to="/dashboard/admin" className="dash-link" onClick={() => handleAction('View all categories')}>
              View all
            </Link>
          }
        >
          <ul className="rank">
            {topCategories.map((cat) => (
              <li className="rank__item" key={cat.id}>
                <div className="rank__head">
                  <strong>{cat.name}</strong>
                  <span>
                    {cat.orders} orders · {cat.share}%
                  </span>
                </div>
                <div className="rank__track">
                  <span className="rank__bar" style={{ width: `${cat.share * 2.6}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </PanelCard>

        <PanelCard
          title="Latest Orders"
          subtitle="Most recent 7 orders"
          action={
            <Link to="/dashboard/admin" className="dash-link" onClick={() => handleAction('Open orders')}>
              Manage
            </Link>
          }
        >
          <DataTable
            columns={columns}
            rows={orderRows}
            footer={<span>Showing {orderRows.length} of 1,284 orders</span>}
          />
        </PanelCard>
      </div>
    </div>
  )
}

export default OverviewPanel
