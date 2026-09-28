import {
  BoxIcon,
  CartIcon,
  GridIcon,
  HeartIcon,
  MapPinIcon,
  SettingsIcon,
  TagIcon,
  UsersIcon,
} from '../components/Icons'

/*
 * Sidebar menu configuration per role.
 * `key` is what the dashboard uses to decide which panel to render.
 */

export const adminMenu = [
  { key: 'overview', label: 'Dashboard', hint: 'Store overview', icon: <GridIcon /> },
  { key: 'categories', label: 'Categories', hint: 'Manage categories', icon: <TagIcon /> },
  { key: 'products', label: 'Products', hint: 'Manage products', icon: <BoxIcon /> },
  { key: 'orders', label: 'Orders', hint: 'Track all orders', icon: <CartIcon /> },
  { key: 'customers', label: 'Customers', hint: 'Registered users', icon: <UsersIcon /> },
  { key: 'settings', label: 'Settings', hint: 'Store settings', icon: <SettingsIcon /> },
]

export const customerMenu = [
  { key: 'overview', label: 'Overview', hint: 'Your activity', icon: <GridIcon /> },
  { key: 'orders', label: 'My Orders', hint: 'Order history', icon: <CartIcon /> },
  { key: 'wishlist', label: 'Wishlist', hint: 'Saved products', icon: <HeartIcon /> },
  { key: 'addresses', label: 'Addresses', hint: 'Shipping details', icon: <MapPinIcon /> },
  { key: 'settings', label: 'Settings', hint: 'Profile & security', icon: <SettingsIcon /> },
]
