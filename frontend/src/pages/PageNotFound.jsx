import { Link, useNavigate } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import './PageNotFound.css'

function PageNotFound() {
	const navigate = useNavigate()

	return (
		<main className="not-found">
			<div className="not-found__inner">
				<section className="not-found__content" aria-labelledby="not-found-title">
					<p className="not-found__eyebrow"><span /> Error 404</p>
					<h1 id="not-found-title">Looks like this page is <em>out of stock.</em></h1>
					<p className="not-found__message">
						The link may be old, or the page may have moved. Let’s get you back to something good.
					</p>
					<div className="not-found__actions">
						<Link to="/" className="not-found__button not-found__button--primary">
							Back to home
							<span aria-hidden="true">&#8594;</span>
						</Link>
						<button className="not-found__button not-found__button--secondary" onClick={() => navigate(-1)}>
							Go back
						</button>
					</div>
					<p className="not-found__help">Need a hand? <Link to="/">Visit ShopVerse home</Link></p>
				</section>

				<div className="not-found__visual" aria-hidden="true">
					<span className="not-found__orbit not-found__orbit--outer" />
					<span className="not-found__orbit not-found__orbit--inner" />
					<span className="not-found__number">404</span>
					<img src={heroImage} alt="" className="not-found__image" />
					<span className="not-found__caption">PAGE NOT FOUND</span>
				</div>
			</div>
		</main>
	)
}

export default PageNotFound
