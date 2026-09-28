import { toast } from 'react-toastify'
import PageHeader from '../../ui/PageHeader'
import { CartIcon, HeartIcon, StarIcon, TrashIcon } from '../../Icons'
import { wishlistItems } from '../../../data/customerData'

/* Customer → Wishlist: saved products as cards. */
function WishlistPanel() {
  return (
    <div className="panel">
      <PageHeader
        eyebrow="My Account"
        title="My Wishlist"
        description={`${wishlistItems.length} saved products`}
        showSearch={false}
        onAction={() => toast.info('Refreshed (demo)')}
      />

      <div className="wish-grid">
        {wishlistItems.map((item) => (
          <article className="wish-card" key={item.id}>
            <div className="wish-card__media">
              <img src={item.image} alt={item.name} />
              {item.tag && <span className="wish-card__tag">{item.tag}</span>}
              <button type="button" className="wish-card__remove" aria-label="Remove from wishlist" onClick={() => toast.warn(`Removed ${item.name} (demo)`)}>
                <TrashIcon />
              </button>
            </div>

            <div className="wish-card__body">
              <h3>{item.name}</h3>
              <span className="wish-card__rating"><StarIcon /> {item.rating}</span>

              <div className="wish-card__prices">
                <strong>${item.price.toFixed(2)}</strong>
                {item.oldPrice && <s>${item.oldPrice.toFixed(2)}</s>}
              </div>

              <button type="button" className="dash-btn dash-btn--primary" onClick={() => toast.success(`Added ${item.name} to cart (demo)`)}>
                <CartIcon />
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>

      <p className="wish-note">
        <HeartIcon /> Items in your wishlist are saved to your account (static demo data).
      </p>
    </div>
  )
}

export default WishlistPanel
