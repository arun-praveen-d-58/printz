import React, { useState } from 'react';
import '../styles/PopupLogin.css';
import googleIcon from '../assets/google-icon.png';

const PopupLogin = ({ closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>×</button>
        <div className="popup-header">
          <img src="src/assets/logo.png" alt="Logo" className="popup-logo" />
          <h2>Login/Sign up</h2>
        </div>
        <div className="popup-body">
          <button className="google-signin">
            <img src={googleIcon} alt="Google Icon" /> Sign-in with Google
          </button>
          <p>Login or Sign up via OTP</p>
          <label>Email/ Mobile Number</label>
          <input type="text" placeholder="Enter Your email or mobile" />
          <button className="continue-btn">Continue</button>
          <p>Already Have An Account? <a href="/login">Login Now</a></p>
        </div>
      </div>
    </div>
  );
};

export default PopupLogin;
