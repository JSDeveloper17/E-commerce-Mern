/*
 * Static / dummy data for the CUSTOMER (user) dashboard.
 * Later, replace each export with real API responses — panels only consume these shapes.
 */

export const customerProfile = {
  name: 'Priya Sharma',
  email: 'priya.sharma@example.com',
  role: 'Customer',
  memberSince: 'Jan 2024',
}

export const customerStats = [
  { key: 'orders', label: 'My Orders', value: '24', delta: '+2 this month', trend: 'up', accent: 'purple', icon: 'orders' },
  { key: 'transit', label: 'In Transit', value: '3', delta: 'Arriving soon', trend: 'up', accent: 'teal', icon: 'transit' },
  { key: 'wishlist', label: 'Wishlist Items', value: '12', delta: '4 on sale', trend: 'up', accent: 'rose', icon: 'wishlist' },
  { key: 'spent', label: 'Total Spent', value: '$2,140', delta: '+6.4%', trend: 'up', accent: 'blue', icon: 'spent' },
]

export const myOrders = [
  { id: '#SV-10482', date: 'Sep 26, 2026', items: 3, total: 249.75, payment: 'Paid', status: 'Delivered' },
  { id: '#SV-10461', date: 'Sep 18, 2026', items: 1, total: 89.99, payment: 'Paid', status: 'Shipped' },
  { id: '#SV-10437', date: 'Sep 05, 2026', items: 2, total: 154.0, payment: 'Paid', status: 'Processing' },
  { id: '#SV-10398', date: 'Aug 22, 2026', items: 4, total: 318.5, payment: 'Paid', status: 'Delivered' },
  { id: '#SV-10355', date: 'Aug 09, 2026', items: 1, total: 64.25, payment: 'Refunded', status: 'Cancelled' },
]

export const wishlistItems = [
  { id: 101, name: 'React Masterclass 2026', price: 89.99, oldPrice: 129.99, rating: 4.9, image: '/image/react.png', tag: 'Best Seller' },
  { id: 103, name: 'Node.js API Bootcamp', price: 99.0, oldPrice: null, rating: 4.7, image: '/image/node.png', tag: null },
  { id: 106, name: 'Next.js Fullstack Guide', price: 94.75, oldPrice: 119.0, rating: 4.8, image: '/image/nextjs.jpg', tag: '-20%' },
  { id: 107, name: 'Python Data Toolkit', price: 84.0, oldPrice: null, rating: 4.6, image: '/image/python.jpg', tag: null },
]

export const addressList = [
  { id: 1, label: 'Home', name: 'Priya Sharma', line1: '221B Lakeview Residency', city: 'Pune', state: 'Maharashtra', zip: '411001', phone: '+91 98765 43210', isDefault: true },
  { id: 2, label: 'Office', name: 'Priya Sharma', line1: '4th Floor, Tech Park One', city: 'Pune', state: 'Maharashtra', zip: '411014', phone: '+91 98765 43210', isDefault: false },
]

export const notifications = [
  { id: 1, title: 'Your order #SV-10482 was delivered', time: '4 min ago', unread: true },
  { id: 2, title: 'React Masterclass is 30% off today', time: '2 hrs ago', unread: true },
  { id: 3, title: 'Payment received for #SV-10461', time: 'Yesterday', unread: false },
]
