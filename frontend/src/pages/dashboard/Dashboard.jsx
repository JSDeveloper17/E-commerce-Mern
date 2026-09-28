import { useState } from 'react'
import DashboardLayout from './components/layout/DashboardLayout'
import UserOverviewPanel from './components/panels/user/UserOverviewPanel'
import UserOrdersPanel from './components/panels/user/UserOrdersPanel'
import WishlistPanel from './components/panels/user/WishlistPanel'
import AddressPanel from './components/panels/user/AddressPanel'
import SettingsPanel from './components/panels/common/SettingsPanel'
import { customerMenu } from './config/sidebarMenu'
import { customerProfile, notifications } from './data/customerData'
import { useAuth } from '../../context/AuthContext'

/* Which panel is rendered for each sidebar menu key. */
const panels = {
  overview: UserOverviewPanel,
  orders: UserOrdersPanel,
  wishlist: WishlistPanel,
  addresses: AddressPanel,
  settings: SettingsPanel,
}

function Dashboard() {
  const [activeKey, setActiveKey] = useState('overview')
  const { user } = useAuth()

  //* Prefer the logged-in customer; fall back to the dummy profile for the static demo.
  const customerUser = {
    name: user?.name || customerProfile.name,
    email: user?.email || customerProfile.email,
    role: user?.role || customerProfile.role,
  }

  const ActivePanel = panels[activeKey] || UserOverviewPanel

  return (
    <DashboardLayout
      role="user"
      menu={customerMenu}
      activeKey={activeKey}
      onSelect={setActiveKey}
      user={customerUser}
      notifications={notifications}
      sectionLabel="My Account"
    >
      {activeKey === 'settings'
        ? <ActivePanel role="user" profile={customerUser} />
        : <ActivePanel />}
    </DashboardLayout>
  )
}

export default Dashboard
