import React from 'react';
import AboutUs from '../images/AboutUs.jpg'

const About = () => {
  return (
    <div className='background-image' style={{
      backgroundImage: `url(${AboutUs})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute',
    }}>

      <div className="about-text-container">
        <h2>Who We Are</h2>
        <p>
          Basel Retirement Home and Care Center was established in 2006 to provide assisted living
          services to retirees and seniors in the Basel-Stadt area. Ever since, we have offered our residents
          affordable, quality care and services ranging from at-home care and specialized care services.
          The organization derives its success from adhering to empathetic, quality care to offer peace of
          mind to its clients and their loved ones.</p>
          <p>
           Our experienced and devoted personnel and volunteers
          employ their elderly care, social work, and community services expertise to ensure the residents
          live comfortably and independently.We are committed to pushing boundaries to become the best elderly 
          care service provider in the Basel-Stadt area by fostering healthy aging for retirees and older adults
          with specialized care needs.
        </p>

        <h2>Mission</h2>
        <p>
        As a nonprofit organization, Basel Retirement Home and Care Center provides residents quality
        care as they reach their end of life phase. We provide our clients with nutritious meals, clinical
        care, and an inviting community where they can live happily, comfortably, and independently.
        </p>
       

       <h2>Our Core Values</h2>
       <ul>
          <li>Clinical Excellence: We provide quality care to sustain the health and wellbeing of our residents.</li>
          <li>Compassion: We approach and care for residents through three components: noticing, feeling, and responding.</li>
          <li>Life Enrichment: We offer access to amenities, activities, and promote lasting relationships that inspire gratifying and worthwhile life experiences for our clients.</li>
          <li>Integrity: We demonstrate honesty when working with our residents and their families.</li>
          <li>Dignity: We treat all our residents and their families with utmost respect and privacy.</li>
        </ul>
        </div>
    </div>
  );
}

export default About;
