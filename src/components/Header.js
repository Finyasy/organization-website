import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../images/logo2.png'

const Header = () => {
    return (
      <div className="header">
        <div className="header-title">
          Basel Retirement Home and Care Center
          <img src={logo2} alt="Logo" className="header-logo" />
        </div>
        <div className="header-links">
          <Link className="header-link" to="/">Homepage</Link>
          <Link className="header-link" to="/about">About Us</Link>
          <Link className="header-link" to="/products">Products and Services</Link>
          <Link className="header-link" to="/contact">Contact</Link>
        </div>
      </div>
    );
  }
  
  export default Header;