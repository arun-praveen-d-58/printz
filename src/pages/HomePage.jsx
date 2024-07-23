import React from 'react';
import '../styles/HomePage.css';
import QualityIcon from '../assets/quality-icon.png';
import SecurePaymentIcon from '../assets/secure-payment-icon.png';
import QuickDeliveryIcon from '../assets/quick-delivery-icon.png';
import SupportIcon from '../assets/support-icon.png';

const HomePage = () => {
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

  return (
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
  );
};

export default HomePage;
