import React from 'react';
import homepage from '../images/homepage.jpg'

const Homepage = () => {
  return (
    <div style={{
      backgroundImage: `url(${homepage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute'
    }}>
      <h1>Welcome to our organization!</h1>
      <p>Here is some information about us...</p>
    </div>
  );
}

export default Homepage;