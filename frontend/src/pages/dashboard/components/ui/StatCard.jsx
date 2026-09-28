import {
  BoxIcon,
  CartIcon,
  DollarIcon,
  HeartIcon,
  TrendDownIcon,
  TrendUpIcon,
  TruckIcon,
  UsersIcon,
  WalletIcon,
} from '../Icons'

/* Maps a stat's `icon` string to an actual icon component. */
const iconMap = {
  revenue: <DollarIcon />,
  orders: <CartIcon />,
  customers: <UsersIcon />,
  stock: <BoxIcon />,
  transit: <TruckIcon />,
  wishlist: <HeartIcon />,
  spent: <WalletIcon />,
}

function StatCard({ label, value, delta, trend = 'up', accent = 'purple', icon }) {
  return (
    <article className={`stat-card stat-card--${accent}`}>
      <div className="stat-card__top">
        <span className="stat-card__icon">{iconMap[icon] || <BoxIcon />}</span>
        <span className={`stat-card__delta stat-card__delta--${trend}`}>
          {trend === 'up' ? <TrendUpIcon /> : <TrendDownIcon />}
          {delta}
        </span>
      </div>

      <h3 className="stat-card__value">{value}</h3>
      <p className="stat-card__label">{label}</p>
    </article>
  )
}

export default StatCard
