import React from 'react';
import Cont from '../images/Cont.png'

const Contact = () => {
  return (
    <div style={{
      backgroundImage: `url(${Cont})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute'
    }}>
      <h1>Contact Us</h1>
      <p>Email: info@ourorganization.com</p>
      <p>Phone: 555-555-5555</p>
      <p>Address: 123 Main St, City, State</p>
    </div>
  );
}

export default Contact;
