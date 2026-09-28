import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../../../context/AuthContext'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import '../../styles/layout.css'
import '../../styles/sidebar.css'
import '../../styles/topbar.css'
import '../../styles/ui.css'
import '../../styles/data.css'
import '../../styles/panels.css'
import '../../styles/responsive.css'

/*
 * Shared shell for both dashboards.
 * Holds only layout state (drawer / collapse); the role-specific
 * dashboard component owns the active menu key and the panel content.
 */
function DashboardLayout({
  role = 'admin',
  menu,
  activeKey,
  onSelect,
  user,
  notifications = [],
  sectionLabel = 'Dashboard',
  children,
}) {
  const [collapsed, setCollapsed] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const activeItem = menu.find((item) => item.key === activeKey)

  const handleSelect = (key) => {
    onSelect(key)
    setDrawerOpen(false)
  }

  const handleLogout = async () => {
    try {
      await logout()
      toast.success('Logged out successfully')
    } catch {
      toast.error('Unable to logout, please try again')
    }
    navigate('/login')
  }

  return (
    <div className={`dash ${collapsed ? 'dash--collapsed' : ''}`}>
      <Sidebar
        menu={menu}
        role={role}
        user={user}
        activeKey={activeKey}
        onSelect={handleSelect}
        collapsed={collapsed}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onToggleCollapse={() => setCollapsed((v) => !v)}
        onLogout={handleLogout}
      />

      {drawerOpen && <div className="dash__overlay" onClick={() => setDrawerOpen(false)} />}

      <div className="dash__main">
        <Topbar
          user={user}
          notifications={notifications}
          collapsed={collapsed}
          activeLabel={activeItem?.label || 'Dashboard'}
          sectionLabel={sectionLabel}
          onOpenMenu={() => setDrawerOpen(true)}
          onToggleCollapse={() => setCollapsed((v) => !v)}
        />

        <main className="dash__content">{children}</main>

        <footer className="dash__footer">
          <p>© 2026 ShopVerse · {role === 'admin' ? 'Admin Console' : 'Customer Portal'} — demo data</p>
        </footer>
      </div>
    </div>
  )
}

export default DashboardLayout
