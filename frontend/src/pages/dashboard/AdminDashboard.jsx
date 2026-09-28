import { useState } from 'react'
import DashboardLayout from './components/layout/DashboardLayout'
import OverviewPanel from './components/panels/admin/OverviewPanel'
import CategoryPanel from './components/panels/admin/CategoryPanel'
import ProductPanel from './components/panels/admin/ProductPanel'
import OrderPanel from './components/panels/admin/OrderPanel'
import CustomerPanel from './components/panels/admin/CustomerPanel'
import SettingsPanel from './components/panels/common/SettingsPanel'
import { adminMenu } from './config/sidebarMenu'
import { adminProfile, notifications as adminNotifications } from './data/adminData'
import { useAuth } from '../../context/AuthContext'

/* Which panel is rendered for each sidebar menu key. */
const panels = {
  overview: OverviewPanel,
  categories: CategoryPanel,
  products: ProductPanel,
  orders: OrderPanel,
  customers: CustomerPanel,
  settings: SettingsPanel,
}

function AdminDashboard() {
  const [activeKey, setActiveKey] = useState('overview')
  const { user } = useAuth()

  //* Prefer the logged-in admin; fall back to the dummy profile for the static demo.
  const adminUser = {
    name: user?.name || adminProfile.name,
    email: user?.email || adminProfile.email,
    role: user?.role || adminProfile.role,
  }

  const ActivePanel = panels[activeKey] || OverviewPanel

  return (
    <DashboardLayout
      role="admin"
      menu={adminMenu}
      activeKey={activeKey}
      onSelect={setActiveKey}
      user={adminUser}
      notifications={adminNotifications}
      sectionLabel="Admin"
    >
      {activeKey === 'settings'
        ? <ActivePanel role="admin" profile={adminUser} />
        : <ActivePanel />}
    </DashboardLayout>
  )
}

export default AdminDashboard
