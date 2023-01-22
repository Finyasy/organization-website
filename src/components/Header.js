import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header">
        <div className="header-title">Basel Retirement Home and Care Center</div>
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