import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom'; // Ensure this is imported

export default function HomePage() {
  return (
    <>
      {/* Popular Products Section */}
      <section className="popular-products">
        <h2 className="section-title">Popular Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="image-container">
              <img src="/src/assets/Business cards.png" alt="Business Cards" />
            </div>
            <p className="product-title">Business Cards</p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/apparel-image.jpg" alt="Apparel" />
            </div>
            <p className="product-title">Apparel</p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/corporate-gifts-image.jpg" alt="Corporate Gifts" />
            </div>
            <p className="product-title">Corporate Gifts</p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/drinkware-image.jpg" alt="Drinkware" />
            </div>
            <p className="product-title">Drinkware</p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/mailer-boxes-image.jpg" alt="Mailer Boxes" />
            </div>
            <p className="product-title">Mailer Boxes</p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/awards-image.jpg" alt="Awards" />
            </div>
            <p className="product-title">Awards</p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/stickers-image.jpg" alt="Stickers" />
            </div>
            <p className="product-title">Stickers</p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/name-plates-image.jpg" alt="Name Plates" />
            </div>
            <p className="product-title">Name Plates</p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/backpacks-image.jpg" alt="Backpacks" />
            </div>
            <p className="product-title">Backpacks</p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/labels-image.jpg" alt="Labels" />
            </div>
            <p className="product-title">Labels</p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/courier-poly-bag-image.jpg" alt="Courier Poly Bag" />
            </div>
            <p className="product-title">Courier Poly Bag</p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/posters-image.jpg" alt="Posters" />
            </div>
            <p className="product-title">Posters</p>
          </div>
        </div>
      </section>

      {/* Custom Packaging Section */}
      <section className="custom-packaging">
        <div className="content">
          <h2>Custom packaging designed to fit your business</h2>
          <p>Explore, design and order packaging your customers will love</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="images-grid">
          <img src="path/to/packaging1.jpg" alt="Packaging 1" />
          <img src="path/to/packaging2.jpg" alt="Packaging 2" />
          <img src="path/to/packaging3.jpg" alt="Packaging 3" />
          <img src="path/to/packaging4.jpg" alt="Packaging 4" />
          <img src="path/to/packaging5.jpg" alt="Packaging 5" />
        </div>
      </section>

      {/* Printz Picks Section */}
      <section className="printz-picks">
        <div className="section-header">
          <h2>Printz Picks :</h2>
          <button className="see-all-btn">See All</button>
        </div>
        <p className="sub-title">Popular Product. Unbeatable Value.</p>
        <div className="products-grid">
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/tshirts-image.jpg" alt="T-shirts" />
            </div>
            <p className="product-title">
              <Link to="/tshirts">T-shirts <span className="arrow">→</span></Link>
            </p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <div className="discount">15% off</div>
              <img src="path/to/business-cards-image.jpg" alt="Business Cards" />
            </div>
            <p className="product-title">
              <Link to="/business-cards">Business Cards <span className="arrow">→</span></Link>
            </p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/postcards-image.jpg" alt="Postcards" />
            </div>
            <p className="product-title">
              <Link to="/postcards">Postcards <span className="arrow">→</span></Link>
            </p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <div className="discount">30% off</div>
              <img src="path/to/hats-image.jpg" alt="Hats" />
            </div>
            <p className="product-title">
              <Link to="/hats">Hats <span className="arrow">→</span></Link>
            </p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <img src="path/to/stickers-image.jpg" alt="Stickers" />
            </div>
            <p className="product-title">
              <Link to="/stickers">Stickers <span className="arrow">→</span></Link>
            </p>
          </div>
        </div>
      </section>

      {/* Free Printing Sample Section */}
      <section className="free-sample">
        <div className="sample-content">
          <h2>Request Your Free Printing Sample!</h2>
          <p>See, Touch, and Feel the Excellence of Printshop.</p>
          <button className="request-now-btn">Request Now!</button>
        </div>
      </section>
    </>
  );
}
