
import Seperator from '../assets/seperator.svg'
import Client1 from '../assets/Logo Client 1.svg'
import Client2 from '../assets/Logo Client 2.svg'
import Client3 from '../assets/Logo Client 3.svg'
import Client4 from '../assets/Logo Client 4.svg'
import QualityIcon from '../assets/quality-icon.png';
import SecurePaymentIcon from '../assets/secure-payment-icon.png';
import QuickDeliveryIcon from '../assets/quick-delivery-icon.png';
import SupportIcon from '../assets/support-icon.png';

import About from '../assets/Replace This.svg'
import '../styles/HomePage.css';
import { Link } from 'react-router-dom'; // Ensure this is imported


export default function HomePage(){
   const products = [
      { id: 1, name: 'Matt Paper Stickers', img: '/src/assets/matt-paper-stickers.png', rating: 4 },
      { id: 2, name: 'Matt PVC Stickers', img: '/src/assets/matt-pvc-stickers.png', rating: 3 },
      { id: 3, name: 'A6 Flyers Printing', img: '/src/assets/a6-flyers-printing.png', rating: 3.5 },
      { id: 4, name: 'Special Paper Business Cards', img: '/src/assets/special-paper-business-cards.png', rating: 3.4 },
      { id: 5, name: 'Special Paper Business Cards', img: '/src/assets/special-paper-business-cards.png', rating: 5 },
      { id: 6, name: 'Special Paper Business Cards', img: '/src/assets/special-paper-business-cards.png', rating: 2.5 },
      { id: 7, name: 'Special Paper Business Cards', img: '/src/assets/special-paper-business-cards.png', rating: 4.5 },
    ];
  
    const features = [
      { id: 1, icon: QualityIcon, description: 'Best Quality Products' },
      { id: 2, icon: SecurePaymentIcon, description: '100% Secured Payments' },
      { id: 3, icon: QuickDeliveryIcon, description: 'Quick Delivery' },
      { id: 4, icon: SupportIcon, description: '365 Days Support' },
    ];
  return <>
       <div className="hero-section">
        <div className="hero-top-container">
        <div className="get-started-section">
            <h1>Premium Printing Solutions</h1>
            <h3>Sociis varius nisl eu ipsum faucibus. Ac semper nisl turpis diam libero id ante nullam. Tellus.</h3>
            <button className="get-started-btn">Get started</button>
        </div>
        <div className="ratings-section">
            <div className="ratings">
             <div className="ratings-card"></div>
             <div className="bar-container"></div>
             </div>
             <div className="delivery">
             <div className="bar-container"></div>
             <div className="delivered-count">
                <h1>100+</h1>
                <h3>Items Delivered</h3>
             </div>
             </div>
        </div>
        </div>
        <div className="category-section">
           <h1 className="category-title">Category</h1>
           <div className="categories">
               <div className="category">
                <h1>BUSINESS CARD</h1>

                </div>
                <img src={Seperator}/>
                <div className="category">
                <h1>BUSINESS CARD</h1>

                </div>
                <img src={Seperator}/>
                <div className="category">
                <h1>BUSINESS CARD</h1>

                </div>
                <img src={Seperator}/>
                <div className="category">
                <h1>BUSINESS CARD</h1>

                </div>
                <img src={Seperator}/>
                <div className="category">
                <h1>BUSINESS CARD</h1>

                </div>
                <img src={Seperator}/>
                <div className="category">
                <h1>BUSINESS CARD</h1>

                </div>
                <img src={Seperator}/>
           </div>
        </div>
       </div>
       <div className="about-us-section">
          <div className="about-us">
            <div className="image">
              <img src={About}/>
           
            </div>
            <div className="about-content">
                <h3>About Us</h3>
                <h1>Crafting Excellence Through Every Print</h1>
                 <p>Odio at elit mauris neque nisl odio elementum viverra sollicitudin. Ante sed aliquam et duis eu mauris. Tristique quisque amet turpis sed interdum non sollicitudin vulputate mi.Odio at elit mauris neque nisl odio elementum viverra sollicitudin. Ante sed aliquam et duis eu mauris. Tristique quisque amet turpis sed interdum non sollicitudin vulputate mi.Odio at elit mauris neque nisl odio elementum viverra sollicitudin. Ante sed aliquam et duis eu mauris. Tristique quisque amet turpis sed interdum non sollicitudin vulputate mi.</p>
                <div className="divider"></div>
            
            </div>
          </div>
       
          <div className="partners-section">
          <h1>Our Partners :</h1>
          <div className="partners-logo">
               <img src={Client1}/>
               <img src={Client2}/>
               <img src={Client3}/>
               <img src={Client4}/>
             </div>
          
          </div>
       </div>

    <div className="home-page">
      <div className="best-selling">
        <h2>Best Selling</h2>
        <div className="product-list-wrapper">
          <div className="product-list">
            {products.map(product => (
              <div key={product.id} className="product-item">
                <img src={product.img} alt={product.name} />
                <div className="product-info">
                  <div className="product-rating">
                    {'★'.repeat(product.rating) + '☆'.repeat(5 - product.rating)}
                  </div>
                  <div className="product-name">{product.name}</div>
                </div>
              </div>
            ))}
            {products.map(product => (
              <div key={`${product.id}-duplicate`} className="product-item">
                <img src={product.img} alt={product.name} />
                <div className="product-info">
                  <div className="product-rating">
                    {'★'.repeat(product.rating) + '☆'.repeat(5 - product.rating)}
                  </div>
                  <div className="product-name">{product.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="features">
        {features.map(feature => (
          <div key={feature.id} className="feature-item">
            <img src={feature.icon} alt={feature.title} />
            <div className="feature-title">{feature.title}</div>
            <div className="feature-description">{feature.description}</div>
          </div>
        ))}
     
    </div>


</div>
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

      <div className="company-stats-section">
         <div className="upper-stats-section">
             <div className="stats-title">
               <h3>Statistic</h3>
               <h1>Printz in Number</h1>
             </div>
             <div className="stats-content">
               <p>Odio at elit mauris neque nisl odio elementum viverra sollicitudin. Ante sed aliquam et duis eu mauris. Tristique quisque amet turpis sed interdum non sollicitudin vulputate mi. Interdum in et ut sed semper ornare fames.</p>
               <button className="learn-more-btn">
                 Learn More
               </button>
             </div>
         </div>
         <div className="lower-stats-section">
            <div className="stat">
               <h1>15+</h1>
               <h3>Years of Experience</h3>
            </div>

            <div className="stat">
               <h1>98%</h1>
               <h3>Satisfaction Rate</h3>
            </div>

            <div className="stat">
               <h1>50+</h1>
               <h3>Diverse Product</h3>
            </div>

            <div className="stat">
               <h1>10K</h1>
               <h3>Printing Capacity</h3>
            </div>
         </div>
       </div>


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
  
}

