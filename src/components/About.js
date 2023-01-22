import React from 'react';
import AboutUs from '../images/AboutUs.jpg'

const About = () => {
  return (
    <div style={{
      backgroundImage: `url(${AboutUs})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute'
    }}>
      <h1>About our organization</h1>
      <p>We are a team of dedicated individuals working towards a common goal...</p>
    </div>
  );
}

export default About;
