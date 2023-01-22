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
      position: 'absolute',
      opacity: 0.7
    }}>
      <div className='contact-text-container'>
      <h1>Schedule a Visit</h1>
      <p>There are Basel Retirement Home and Care Centers in 10 locations in the greater Basel-Stadt
area. There is a higher likelihood that you are a few minutes away from us. Reach out to us today
to learn about our elderly care services. Contact our main office at +41 61 342 75 00 or email us
at info@baselretirementhome.com.</p>
      </div>
      
    </div>
  );
}

export default Contact;
