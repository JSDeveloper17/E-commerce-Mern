import { Link } from 'react-router-dom'
import { ChevronLeftIcon, CloseIcon, LogoutIcon, ShieldIcon, UserIcon } from '../Icons'

/*
 * Left sidebar: brand, role chip, menu list and logout.
 * `collapsed` -> icons only (desktop), `open` -> off-canvas drawer (mobile).
 */
function Sidebar({ menu, activeKey, onSelect, role, user, collapsed, open, onClose, onToggleCollapse, onLogout }) {
  const isAdmin = role === 'admin'
  const RoleIcon = isAdmin ? ShieldIcon : UserIcon

  return (
    <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''} ${open ? 'sidebar--open' : ''}`}>
      <div className="sidebar__brand">
        <Link to="/" className="sidebar__logo" onClick={onClose}>
          <span className="sidebar__logo-badge">S</span>
          <span className="sidebar__logo-text">
            Shop<em>Verse</em>
          </span>
        </Link>
        <button type="button" className="sidebar__close" onClick={onClose} aria-label="Close menu">
          <CloseIcon />
        </button>
      </div>

      <div className="sidebar__role">
        <span className="sidebar__role-icon">
          <RoleIcon />
        </span>
        <div>
          <strong>{isAdmin ? 'Admin Panel' : 'My Account'}</strong>
          <span>{user?.role || (isAdmin ? 'Super Admin' : 'Customer')}</span>
        </div>
      </div>

      <nav className="sidebar__nav">
        <span className="sidebar__nav-title">Menu</span>
        <ul>
          {menu.map((item) => (
            <li key={item.key}>
              <button
                type="button"
                className={`sidebar__link ${activeKey === item.key ? 'sidebar__link--active' : ''}`}
                onClick={() => onSelect(item.key)}
                title={item.label}
              >
                <span className="sidebar__link-icon">{item.icon}</span>
                <span className="sidebar__link-text">
                  <strong>{item.label}</strong>
                  <small>{item.hint}</small>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__footer">
        <button type="button" className="sidebar__logout" onClick={onLogout} title="Logout">
          <LogoutIcon />
          <span>Logout</span>
        </button>
        <button type="button" className="sidebar__collapse" onClick={onToggleCollapse} aria-label="Collapse sidebar">
          <ChevronLeftIcon />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
