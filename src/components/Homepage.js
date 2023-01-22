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

<div className="homepage-text-container">

        <p>
          Basel Retirement Home and Care Center is a nonprofit home and community care provider in the
          northwestern city of Basel. We serve the inhabitants of the Basel-Stadt area. The Center’s staff,
          volunteers, and partners are committed to supporting retirees and the elderly to lead independent
          lives instead of relying on their families. The organization also offers this population care
          services to enhance their quality of life. Presently, the retirement home provides a myriad of
          living options. All our residences offer invaluable supportive services, including community, at-
          home, social work, and specialized care and services. We also offer the residents an inviting
          community, nutritious meals, and housekeeping services. The care center provides 24/7
          assistance to ensure the residents live comfortably as they reach the end of life phase.
        </p>
      </div>
    </div>
  );
}

export default Homepage;