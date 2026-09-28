import { toast } from 'react-toastify'
import PageHeader from '../../ui/PageHeader'
import StatCard from '../../ui/StatCard'
import PanelCard from '../../ui/PanelCard'
import DataTable from '../../ui/DataTable'
import StatusBadge from '../../ui/StatusBadge'
import { StarIcon, TruckIcon } from '../../Icons'
import { addressList, customerStats, myOrders, notifications, wishlistItems } from '../../../data/customerData'

/* Customer → Overview: stats, latest orders, delivery and wishlist preview. */
function UserOverviewPanel() {
  const columns = [
    { key: 'id', label: 'Order', render: (row) => <strong>{row.id}</strong> },
    { key: 'date', label: 'Date' },
    { key: 'items', label: 'Items', align: 'center' },
    { key: 'total', label: 'Total', align: 'right', render: (row) => `$${row.total.toFixed(2)}` },
    { key: 'status', label: 'Status', render: (row) => <StatusBadge value={row.status} /> },
  ]

  const defaultAddress = addressList.find((item) => item.isDefault) || addressList[0]
  const activeOrder = myOrders.find((order) => order.status === 'Shipped') || myOrders[0]

  return (
    <div className="panel">
      <PageHeader
        eyebrow="My Account"
        title="Welcome back, Priya 👋"
        description="Here is a quick look at your orders, deliveries and saved items."
        showSearch={false}
        onAction={() => toast.info('Refreshed (demo)')}
      />

      <div className="dash__stats">
        {customerStats.map((stat) => (
          <StatCard key={stat.key} {...stat} />
        ))}
      </div>

      <div className="dash__grid dash__grid--split">
        <PanelCard
          title="Recent Orders"
          subtitle="Your last 5 purchases"
          action={<button type="button" className="dash-btn dash-btn--ghost" onClick={() => toast.info('Open order history (demo)')}>View all</button>}
        >
          <DataTable columns={columns} rows={myOrders} footer={<span>Showing {myOrders.length} orders</span>} />
        </PanelCard>

        <div className="dash__stack">
          <PanelCard title="Active Delivery" subtitle="On the way to you">
            <div className="delivery">
              <span className="delivery__icon"><TruckIcon /></span>
              <div className="delivery__body">
                <strong>{activeOrder.id}</strong>
                <p>{activeOrder.items} items · ${activeOrder.total.toFixed(2)}</p>
                <div className="delivery__track">
                  <span className="delivery__bar" style={{ width: '68%' }} />
                </div>
                <span className="delivery__eta">Expected in 2 days</span>
              </div>
            </div>
          </PanelCard>

          <PanelCard title="Shipping Address" subtitle="Default delivery address">
            <div className="address-mini">
              <span className="address-mini__tag">{defaultAddress.label}</span>
              <strong>{defaultAddress.name}</strong>
              <p>{defaultAddress.line1}</p>
              <p>{defaultAddress.city}, {defaultAddress.state} — {defaultAddress.zip}</p>
              <p>{defaultAddress.phone}</p>
            </div>
          </PanelCard>
        </div>
      </div>

      <div className="dash__grid dash__grid--split">
        <PanelCard
          title="Wishlist Preview"
          subtitle="Saved for later"
          action={<button type="button" className="dash-btn dash-btn--ghost" onClick={() => toast.info('Open wishlist (demo)')}>Manage</button>}
        >
          <ul className="wish-mini">
            {wishlistItems.map((item) => (
              <li className="wish-mini__item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <span className="wish-mini__rating"><StarIcon /> {item.rating}</span>
                </div>
                <span className="wish-mini__price">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </PanelCard>

        <PanelCard title="Notifications" subtitle="Latest account updates">
          <ul className="notice">
            {notifications.map((note) => (
              <li className={`notice__item ${note.unread ? 'is-unread' : ''}`} key={note.id}>
                <span className="notice__dot" />
                <div>
                  <strong>{note.title}</strong>
                  <span>{note.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </PanelCard>
      </div>
    </div>
  )
}

export default UserOverviewPanel
