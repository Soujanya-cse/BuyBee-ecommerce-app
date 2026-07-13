import { useEffect, useState } from 'react';

const categories = [
  { name: 'Home', icon: '🏡' },
  { name: 'Fashion', icon: '👗' },
  { name: 'Tech', icon: '📱' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Wellness', icon: '🧘' },
];

const deals = [
  {
    title: 'Cozy Lantern Set',
    price: '$29',
    badge: 'Hot deal',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Noise-Canceling Headphones',
    price: '$89',
    badge: 'Save 40%',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Signature Candle Trio',
    price: '$24',
    badge: 'New drop',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80',
  },
];

const reviews = [
  {
    name: 'Amelia R.',
    text: 'The unboxing feels like a gift from a friend. Everything I ordered was top-tier.',
  },
  {
    name: 'Rohan S.',
    text: 'I stopped scrolling through five apps. BuyBee makes the best picks feel effortless.',
  },
  {
    name: 'Mika T.',
    text: 'Warm, thoughtful, and beautifully curated. It feels personal and polished.',
  },
];

function App() {
  const [timeLeft, setTimeLeft] = useState({ h: 5, m: 42, s: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { h, m, s } = prev;
        s -= 1;
        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        if (h < 0) {
          h = 23;
        }
        return { h, m, s };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#">
          <span className="brand-mark">🍯</span>
          <span>BuyBee</span>
        </a>
        <nav className="nav-links">
          <a href="#deals">Deals</a>
          <a href="#categories">Categories</a>
          <a href="#reviews">Reviews</a>
          <a href="#newsletter">Newsletter</a>
        </nav>
      </header>

      <main>
        <section className="hero-card">
          <div className="hero-copy">
            <p className="eyebrow">Buzzing with the best deals</p>
            <h1>Find sweet savings in every scroll.</h1>
            <p>
              Discover curated products, limited-time offers, and everyday essentials with honey-glazed pricing.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#deals">Shop deals</a>
              <a className="btn btn-secondary" href="#categories">Browse categories</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-highlight">Free shipping over $49</div>
            <div className="panel-highlight">365-day returns</div>
            <div className="panel-highlight">Curated by style experts</div>
          </div>
        </section>

        <section id="categories" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Shop by category</p>
            <h2>Fresh picks for every favorite corner of your life.</h2>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <article key={category.name} className="card category-card">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="deals" className="section-block">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Flash deals</p>
              <h2>Sweet savings, sold fast.</h2>
            </div>
            <div className="countdown">
              {[['h', timeLeft.h], ['m', timeLeft.m], ['s', timeLeft.s]].map(([label, value], index) => (
                <div key={label} className="countdown-box">
                  <strong>{String(value).padStart(2, '0')}</strong>
                  <span>{label}</span>
                  {index < 2 && <em>:</em>}
                </div>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {deals.map((deal) => (
              <article key={deal.title} className="card deal-card">
                <img src={deal.image} alt={deal.title} />
                <div className="deal-content">
                  <span className="deal-badge">{deal.badge}</span>
                  <h3>{deal.title}</h3>
                  <div className="deal-footer">
                    <strong>{deal.price}</strong>
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Loved by the swarm</p>
            <h2>Real words from real BuyBee members.</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article key={review.name} className="card review-card">
                <p>“{review.text}”</p>
                <strong>{review.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="newsletter" className="newsletter-card">
          <h2>Join the hive newsletter</h2>
          <p>Weekly finds, member-only deals, and zero spam.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="you@buybee.co" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 BuyBee. Crafted for the sweet side of shopping.</p>
      </footer>
    </div>
  );
}

export default App;
