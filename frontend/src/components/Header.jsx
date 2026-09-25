import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Header.css'
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/categories', label: 'Categories' },
  { to: '/deals', label: 'Deals' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const {isAuthenticated, logout} = useAuth()

    const handleLogout = async () => {
      await logout()
      setMobileOpen(false)
      navigate('/login')
    }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
      setMobileOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      {/* Announcement bar */}
      <div className="header__announce">
        <p>🎉 Grand Opening Sale — Get up to <strong>50% OFF</strong> + Free Shipping on orders over $99</p>
      </div>

      {/* Main bar */}
      <div className="header__main container">
        <Link to="/" className="header__logo">
          <span className="header__logo-badge">S</span>
          <span className="header__logo-text">Shop<em>Verse</em></span>
        </Link>

        <form className="header__search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for products, brands and more…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search products"
          />
          <button type="submit" aria-label="Search">
            <SearchIcon />
          </button>
        </form>

        <div className="header__actions">
          <Link to="/wishlist" className="header__icon-btn" aria-label="Wishlist">
            <HeartIcon />
            <span className="header__badge header__badge--accent">2</span>
          </Link>
          <Link to="/cart" className="header__icon-btn" aria-label="Cart">
            <CartIcon />
            <span className="header__badge">3</span>
          </Link>
          <Link to="/account" className="header__icon-btn header__icon-btn--desktop" aria-label="Account">
            <UserIcon />
          </Link>
          <div className="header__auth">
              {isAuthenticated ? (
                <button onClick={handleLogout} className="header__btn header__btn--solid">Logout</button>
              ) : (
                <>
                  <Link to="/login" className="header__btn header__btn--ghost">Login</Link>
                  <Link to="/register" className="header__btn header__btn--solid">Sign Up</Link>
                </>
              )}
          </div>
          <button
            className="header__hamburger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Nav bar */}
      <nav className={`header__nav ${mobileOpen ? 'header__nav--open' : ''}`}>
        <div className="container header__nav-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="header__nav-auth">
              {isAuthenticated ? (
                <button onClick={handleLogout} className="header__btn header__btn--solid">Logout</button>
            ) :(<>
            <NavLink to="/login" className="header__btn header__btn--ghost" onClick={() => setMobileOpen(false)}>Login</NavLink>
            <NavLink to="/register" className="header__btn header__btn--solid" onClick={() => setMobileOpen(false)}>Sign Up</NavLink>
            </>
            )
          }  </div>
        </div>
      </nav>
    </header>
  )
}

export default Header