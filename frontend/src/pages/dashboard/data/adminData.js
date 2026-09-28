/*
 * Static / dummy data for the ADMIN dashboard.
 * Later, replace each export with real API responses — panels only consume these shapes.
 */

export const adminProfile = {
  name: 'Arjun Mehta',
  email: 'admin@shopverse.com',
  role: 'Super Admin',
}

export const adminStats = [
  { key: 'revenue', label: 'Total Revenue', value: '$48,920', delta: '+12.5%', trend: 'up', accent: 'purple', icon: 'revenue' },
  { key: 'orders', label: 'Total Orders', value: '1,284', delta: '+8.2%', trend: 'up', accent: 'teal', icon: 'orders' },
  { key: 'customers', label: 'Customers', value: '3,942', delta: '+5.1%', trend: 'up', accent: 'blue', icon: 'customers' },
  { key: 'stock', label: 'Low Stock Items', value: '17', delta: '-3.4%', trend: 'down', accent: 'rose', icon: 'stock' },
]

export const salesOverview = [
  { label: 'Jan', value: 38, orders: 22 },
  { label: 'Feb', value: 52, orders: 30 },
  { label: 'Mar', value: 44, orders: 26 },
  { label: 'Apr', value: 68, orders: 41 },
  { label: 'May', value: 59, orders: 35 },
  { label: 'Jun', value: 78, orders: 47 },
  { label: 'Jul', value: 92, orders: 56 },
  { label: 'Aug', value: 71, orders: 43 },
]

export const categoryRows = [
  { id: 1, name: 'React', slug: 'react', products: 42, status: 'Active', updated: '2 days ago' },
  { id: 2, name: 'JavaScript', slug: 'javascript', products: 38, status: 'Active', updated: '5 days ago' },
  { id: 3, name: 'Node.js', slug: 'nodejs', products: 27, status: 'Active', updated: '1 week ago' },
  { id: 4, name: 'MongoDB', slug: 'mongodb', products: 19, status: 'Active', updated: '1 week ago' },
  { id: 5, name: 'Docker', slug: 'docker', products: 14, status: 'Inactive', updated: '2 weeks ago' },
  { id: 6, name: 'Next.js', slug: 'nextjs', products: 23, status: 'Active', updated: '3 weeks ago' },
  { id: 7, name: 'Python', slug: 'python', products: 31, status: 'Active', updated: '3 weeks ago' },
  { id: 8, name: 'PostgreSQL', slug: 'postgresql', products: 12, status: 'Inactive', updated: '1 month ago' },
]

export const topCategories = [
  { id: 1, name: 'React', share: 32, orders: 412 },
  { id: 2, name: 'JavaScript', share: 24, orders: 308 },
  { id: 3, name: 'Node.js', share: 18, orders: 231 },
  { id: 4, name: 'MongoDB', share: 15, orders: 192 },
  { id: 5, name: 'Next.js', share: 11, orders: 141 },
]

export const activityFeed = [
  { id: 1, type: 'order', title: 'New order #SV-10482', meta: 'Priya Sharma · $249.75', time: '4 min ago' },
  { id: 2, type: 'user', title: 'New customer registered', meta: 'sofia.r@example.com', time: '32 min ago' },
  { id: 3, type: 'stock', title: 'Docker for Developers is out of stock', meta: 'Needs restocking', time: '1 hr ago' },
  { id: 4, type: 'review', title: 'New 5★ review on React Masterclass', meta: 'by Daniel Okafor', time: '3 hrs ago' },
  { id: 5, type: 'refund', title: 'Refund issued for #SV-10478', meta: '$64.25 · Meera Nair', time: 'Yesterday' },
]


export const productRows = [
  { id: 101, name: 'React Masterclass 2026', category: 'React', price: 89.99, stock: 120, sold: 842, status: 'Active', image: '/image/react.png' },
  { id: 102, name: 'JavaScript Deep Dive', category: 'JavaScript', price: 74.5, stock: 96, sold: 731, status: 'Active', image: '/image/javascript.jpg' },
  { id: 103, name: 'Node.js API Bootcamp', category: 'Node.js', price: 99.0, stock: 8, sold: 654, status: 'Low Stock', image: '/image/node.png' },
  { id: 104, name: 'MongoDB Essentials', category: 'MongoDB', price: 64.25, stock: 45, sold: 512, status: 'Active', image: '/image/mongodb.jpg' },
  { id: 105, name: 'Docker for Developers', category: 'Docker', price: 79.99, stock: 0, sold: 398, status: 'Out of Stock', image: '/image/docker.jpg' },
  { id: 106, name: 'Next.js Fullstack Guide', category: 'Next.js', price: 94.75, stock: 63, sold: 361, status: 'Active', image: '/image/nextjs.jpg' },
  { id: 107, name: 'Python Data Toolkit', category: 'Python', price: 84.0, stock: 27, sold: 289, status: 'Active', image: '/image/python.jpg' },
  { id: 108, name: 'PostgreSQL Pro', category: 'PostgreSQL', price: 69.5, stock: 11, sold: 174, status: 'Low Stock', image: '/image/postgresql.png' },
]

export const orderRows = [
  { id: '#SV-10482', customer: 'Priya Sharma', email: 'priya.sharma@example.com', date: 'Sep 26, 2026', items: 3, total: 249.75, payment: 'Paid', status: 'Delivered' },
  { id: '#SV-10481', customer: 'Rahul Verma', email: 'rahul.v@example.com', date: 'Sep 26, 2026', items: 1, total: 89.99, payment: 'Paid', status: 'Shipped' },
  { id: '#SV-10480', customer: 'Ananya Iyer', email: 'ananya@example.com', date: 'Sep 25, 2026', items: 2, total: 154.0, payment: 'Pending', status: 'Processing' },
  { id: '#SV-10479', customer: 'Daniel Okafor', email: 'daniel.o@example.com', date: 'Sep 25, 2026', items: 5, total: 412.4, payment: 'Paid', status: 'Delivered' },
  { id: '#SV-10478', customer: 'Meera Nair', email: 'meera.n@example.com', date: 'Sep 24, 2026', items: 1, total: 64.25, payment: 'Refunded', status: 'Cancelled' },
  { id: '#SV-10477', customer: 'Tomasz Kowalski', email: 'tomasz@example.com', date: 'Sep 24, 2026', items: 4, total: 318.5, payment: 'Paid', status: 'Shipped' },
  { id: '#SV-10476', customer: 'Sofia Rossi', email: 'sofia.r@example.com', date: 'Sep 23, 2026', items: 2, total: 149.5, payment: 'Paid', status: 'Delivered' },
]

export const customerRows = [
  { id: 1, name: 'Priya Sharma', email: 'priya.sharma@example.com', orders: 24, spent: 2140.5, joined: 'Jan 12, 2024', status: 'Active' },
  { id: 2, name: 'Rahul Verma', email: 'rahul.v@example.com', orders: 18, spent: 1580.0, joined: 'Mar 04, 2024', status: 'Active' },
  { id: 3, name: 'Ananya Iyer', email: 'ananya@example.com', orders: 11, spent: 940.75, joined: 'Jun 21, 2024', status: 'Active' },
  { id: 4, name: 'Daniel Okafor', email: 'daniel.o@example.com', orders: 9, spent: 812.25, joined: 'Aug 09, 2024', status: 'Active' },
  { id: 5, name: 'Meera Nair', email: 'meera.n@example.com', orders: 6, spent: 431.0, joined: 'Nov 30, 2024', status: 'Inactive' },
  { id: 6, name: 'Tomasz Kowalski', email: 'tomasz@example.com', orders: 14, spent: 1284.6, joined: 'Feb 14, 2025', status: 'Active' },
]

export const notifications = [
  { id: 1, title: 'New order #SV-10482 received', time: '4 min ago', unread: true },
  { id: 2, title: 'Docker for Developers is out of stock', time: '1 hr ago', unread: true },
  { id: 3, title: 'New 5★ review on React Masterclass', time: '3 hrs ago', unread: false },
]

