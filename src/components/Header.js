import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Homepage</Link>
      <Link to="/about">About Us</Link>
      <Link to="/products">Products and Services</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Header;
