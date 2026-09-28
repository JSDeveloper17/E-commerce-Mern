import { useEffect, useState } from 'react'
import { BellIcon, ChevronLeftIcon, MenuIcon, SearchIcon } from '../Icons'

const initialsOf = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

/* Sticky top bar: mobile menu button, breadcrumb, search, notifications and user chip. */
function Topbar({ activeLabel, sectionLabel, user, collapsed, onToggleCollapse, onOpenMenu, notifications = [] }) {
  const [showBell, setShowBell] = useState(false)
  const unread = notifications.filter((n) => n.unread).length

  /* Close the notification dropdown when clicking anywhere else. */
  useEffect(() => {
    if (!showBell) return
    const close = () => setShowBell(false)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [showBell])

  return (
    <header className="topbar">
      <div className="topbar__left">
        <button type="button" className="topbar__icon-btn topbar__icon-btn--menu" onClick={onOpenMenu} aria-label="Open menu">
          <MenuIcon />
        </button>

        <button
          type="button"
          className={`topbar__icon-btn topbar__icon-btn--collapse ${collapsed ? 'is-rotated' : ''}`}
          onClick={onToggleCollapse}
          aria-label="Toggle sidebar"
        >
          <ChevronLeftIcon />
        </button>

        <div className="topbar__breadcrumb">
          <span>{sectionLabel}</span>
          <strong>{activeLabel}</strong>
        </div>
      </div>

      <div className="topbar__right">
        <form className="topbar__search" onSubmit={(e) => e.preventDefault()}>
          <SearchIcon />
          <input type="text" placeholder="Search orders, products…" aria-label="Search dashboard" />
        </form>

        <div className="topbar__bell-wrap">
          <button
            type="button"
            className="topbar__icon-btn"
            aria-label="Notifications"
            onClick={(e) => {
              e.stopPropagation()
              setShowBell((v) => !v)
            }}
          >
            <BellIcon />
            {unread > 0 && <span className="topbar__dot">{unread}</span>}
          </button>

          {showBell && (
            <div className="topbar__dropdown">
              <h3>Notifications</h3>
              <ul>
                {notifications.map((note) => (
                  <li key={note.id} className={note.unread ? 'is-unread' : undefined}>
                    <strong>{note.title}</strong>
                    <span>{note.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="topbar__user">
          <span className="topbar__avatar">{initialsOf(user?.name) || 'SV'}</span>
          <div className="topbar__user-info">
            <strong>{user?.name || 'Guest User'}</strong>
            <span>{user?.email || 'guest@shopverse.com'}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar
