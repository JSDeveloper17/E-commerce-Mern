import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import heroImage from '../assets/hero.png'

const API_URL = 'http://localhost:4000'

const fallbackProducts = [
  { _id: 'd1', name: 'React Developer Hoodie', price: 49.99, oldPrice: 79.99, rating: 4.8, tag: 'Best Seller', image: '/image/react.png', category: { name: 'Apparel' } },
  { _id: 'd2', name: 'JavaScript Pro Course', price: 29.99, oldPrice: 59.99, rating: 4.9, tag: 'Hot', image: '/image/javascript.jpg', category: { name: 'Courses' } },
  { _id: 'd3', name: 'MongoDB Data Masterclass', price: 39.99, oldPrice: 69.99, rating: 4.7, tag: 'New', image: '/image/mongodb.jpg', category: { name: 'Courses' } },
  { _id: 'd4', name: 'Node.js Backend Kit', price: 59.99, oldPrice: 99.99, rating: 4.6, tag: 'Limited', image: '/image/node.png', category: { name: 'Software' } },
]

const categories = [
  { name: 'Web Development', count: '120+ items', image: '/image/html.jpg' },
  { name: 'Programming', count: '85+ items', image: '/image/python.jpg' },
  { name: 'DevOps & Cloud', count: '60+ items', image: '/image/docker.jpg' },
  { name: 'Databases', count: '45+ items', image: '/image/postgresql.png' },
  { name: 'AI & ML', count: '70+ items', image: '/image/ai.jpg' },
  { name: 'Version Control', count: '25+ items', image: '/image/git.jpg' },
]

const features = [
  {
    title: 'Free Shipping',
    text: 'On all orders over $99',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Secure Payments',
    text: '100% protected checkout',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Easy Returns',
    text: '30-day money back guarantee',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    text: 'Dedicated customer care',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '500+', label: 'Products' },
  { value: '50+', label: 'Top Brands' },
  { value: '4.9★', label: 'Average Rating' },
]

function Home() {
  const [products, setProducts] = useState(fallbackProducts)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function loadProducts() {
      try {
        const res = await fetch(`${API_URL}/products`)
        if (!res.ok) throw new Error('API error')
        const data = await res.json()
        if (!cancelled && Array.isArray(data.allProduct) && data.allProduct.length > 0) {
          setProducts(
            data.allProduct.map((p) => ({
              ...p,
              image: `${API_URL}/products/image/${p._id}`,
            }))
          )
        }
      } catch(err) {
        // Backend offline or CORS not enabled yet — curated demo products are shown
        console.log("api not added till now", err.message)
      }
    }
    loadProducts()
    return () => {
      cancelled = true
    }
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <main className="home">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="hero__eyebrow">✦ New Season Collection 2026</span>
            <h1 className="hero__title">
              Discover Tech Gear That <span className="hero__title-gradient">Powers Your Passion</span>
            </h1>
            <p className="hero__subtitle">
              Shop the latest courses, developer gear and digital tools — curated for builders,
              creators and lifelong learners. Quality guaranteed, prices you'll love.
            </p>
            <div className="hero__cta">
              <Link to="/shop" className="hero__btn hero__btn--primary">
                Shop Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/categories" className="hero__btn hero__btn--outline">Browse Categories</Link>
            </div>
            <div className="hero__stats">
              {stats.map((s) => (
                <div className="hero__stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__blob" />
            <img src={heroImage} alt="Featured products" className="hero__image" />
            <div className="hero__card hero__card--one">
              <span className="hero__card-icon">🚚</span>
              <div>
                <strong>Free Delivery</strong>
                <span>Orders over $99</span>
              </div>
            </div>
            <div className="hero__card hero__card--two">
              <span className="hero__card-icon">🔥</span>
              <div>
                <strong>50% OFF</strong>
                <span>Grand opening sale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">
        <div className="container features__grid">
          {features.map((f) => (
            <div className="features__item" key={f.title}>
              <span className="features__icon">{f.icon}</span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <span className="section__eyebrow">Top Categories</span>
              <h2 className="section__title">Shop by Category</h2>
            </div>
            <Link to="/categories" className="section__link">
              View all
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
          <div className="categories__grid">
            {categories.map((cat) => (
              <Link to="/categories" className="categories__card" key={cat.name}>
                <div className="categories__img-wrap">
                  <img src={cat.image} alt={cat.name} loading="lazy" />
                </div>
                <div className="categories__info">
                  <h3>{cat.name}</h3>
                  <span>{cat.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <div>
              <span className="section__eyebrow">Handpicked For You</span>
              <h2 className="section__title">Featured Products</h2>
            </div>
            <Link to="/shop" className="section__link">
              View all
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
          <div className="products__grid">
            {products.map((p) => (
              <article className="product-card" key={p._id}>
                <div className="product-card__media">
                  {p.tag && <span className="product-card__tag">{p.tag}</span>}
                  <button className="product-card__wish" aria-label="Add to wishlist">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="product-card__body">
                  <span className="product-card__category">{p.category?.name || 'Featured'}</span>
                  <h3 className="product-card__name">{p.name}</h3>
                  {p.rating && (
                    <div className="product-card__rating">
                      {'★'.repeat(Math.round(p.rating))}
                      {'☆'.repeat(5 - Math.round(p.rating))}
                      <span>({p.rating})</span>
                    </div>
                  )}
                  <div className="product-card__footer">
                    <div className="product-card__price">
                      <strong>${Number(p.price).toFixed(2)}</strong>
                      {p.oldPrice && <s>${Number(p.oldPrice).toFixed(2)}</s>}
                    </div>
                    <button className="product-card__cart" aria-label="Add to cart">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROMO BANNER ================= */}
      <section className="promo">
        <div className="container promo__inner">
          <div className="promo__content">
            <span className="promo__eyebrow">Limited Time Offer</span>
            <h2>Up to 50% Off on Bestsellers</h2>
            <p>Don't miss out — grab your favorites before the grand opening sale ends.</p>
            <Link to="/deals" className="promo__btn">Grab the Deal</Link>
          </div>
          <div className="promo__timer">
            <div className="promo__time"><strong>02</strong><span>Days</span></div>
            <div className="promo__time"><strong>14</strong><span>Hours</span></div>
            <div className="promo__time"><strong>36</strong><span>Mins</span></div>
            <div className="promo__time"><strong>52</strong><span>Secs</span></div>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="newsletter">
        <div className="container newsletter__inner">
          <div className="newsletter__text">
            <h2>Join Our Newsletter 💌</h2>
            <p>Subscribe to get special offers, free giveaways and once-in-a-lifetime deals.</p>
          </div>
          <form className="newsletter__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {subscribed && <p className="newsletter__success">✅ Thanks for subscribing!</p>}
        </div>
      </section>
    </main>
  )
}

export default Home

