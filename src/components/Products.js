import React from 'react';
import Prod from '../images/Prod.jpg'

const Products = () => {
  return (
    <div style={{
      backgroundImage: `url(${Prod})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute'
    }}>
      <h1>Our Products</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  );
}

export default Products;