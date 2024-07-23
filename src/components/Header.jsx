import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import phoneIcon from '../assets/phone-icon.png';
import emailIcon from '../assets/email-icon.png';
import infoIcon from '../assets/info-icon.png';
import searchIcon from '../assets/search-icon.png';
import helpIcon from '../assets/help-icon.png';
import userIcon from '../assets/user-icon.png';
import cartIcon from '../assets/cart-icon.png';
import PopupLogin from './PopupLogin'; // Import the PopupLogin component

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="contact-info">
          <img src={phoneIcon} alt="Phone Icon" className="icon" />
          <span className="phone">xxxxxxxxxxxxxx</span>
          <span className="separator">|</span>
          <img src={emailIcon} alt="Email Icon" className="icon" />
          <span className="email">xxxxxxxxxxxxxxxx</span>
        </div>
        <div className="shipping-info">
          Orders of $500+ Get Free Shipping <img src={infoIcon} alt="Info Icon" className="icon" />
        </div>
      </div>
      <div className="main-bar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit"><img src={searchIcon} alt="Search Icon" /></button>
        </div>
        <div className="user-options">
          <div className="help-center">
            <img src={helpIcon} alt="Help Icon" className="icon" /> 
            <a href="/help-center">Help Center</a>
          </div>
          <div className="login-signup" onClick={togglePopup}>
            <img src={userIcon} alt="User Icon" className="icon" /> 
            Login / Signup
          </div>
          <div className="cart">
            <img src={cartIcon} alt="Cart Icon" className="icon" /> <span className="cart-count">0</span>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
      <div className={`navigation-bar ${menuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li>All Products</li>
            <li>Business Cards</li>
            <li>Flyers</li>
            <li>Stickers</li>
            <li>Stationary</li>
            <li>Documents</li>
            <li>Packaging</li>
            <li>Books</li>
            <li>Other Prints</li>
          </ul>
        </nav>
      </div>
      {showPopup && <PopupLogin closePopup={togglePopup} />}
    </header>
  );
};

export default Header;
