import React from 'react';
import Prod2 from '../images/Prod2.jpg'

const Products = () => {
  return (
    <div className='background-image' style={{
      backgroundImage: `url(${Prod2})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: 0.7,
      zIndex: -1
    }}>
    <div className='content-container' style={{zIndex: 1, position: 'relative'}}>
      <div className='product-text-container'>
      <p>At Basel Retirement Home and Care Center, we deliver services that help our residents live
      happy, comfortable, independent, and fulfilling lives. These services and programs are grouped
      into five categories: at-home, community, food and nutrition, social work, and specialized care.
      </p>

      <h2>At-Home Services</h2>
      <ul>
        <li>Personal Support: While acknowledging our residents’ sicknesses and frailty, our staff
            and volunteers provide personal support to ease the residents’ daily routines and make
            them manageable. Examples of personal support include grooming, dressing, bathing,light cleaning, 
            and shopping.
        </li>
        <li>
        Friendly Visiting: We match our lonely residents with volunteer visitors every weekend
        to foster social connection, healthy aging, and provide peace of mind to residents and
        their families.
        </li>
      </ul>

      <h2>Community Activities and Services</h2>
      <ul>
        <li>Exercise and Falls Prevention: Our therapists and fitness professionals provide group
            exercise and fall prevention classes to residents to keep them strong, safe, and improve
            their balance.
        </li>
        <li>
        Social Activities: Our dedicated staff help the residents to make new friends and connect
        with them in-person or virtually through social media.
        </li>
      </ul>

      <h2>Food and Nutrition</h2>
      <ul>
        <li>
        Healthy Eating: We provide our residents with a healthy and balanced diet to ensure they
        get the needed nutrients. We believe that good nutrition will give them energy, enable
        them to control their weight, and help them prevent such ailments as high blood pressure,
        type 2 diabetes, and osteoporosis, among others.
        </li>
      </ul>

      <h2>Social Work Services</h2>
      <ul>
        <li>
        Counselling: Basel Retirement Home and Care Center offers both client and family
counselling to our residents and their families. This support gives them peace of mind
and connects them with professionals who can assist them in addressing or overcome
complex challenges relating to their aging and personal lives.
        </li>
        <li>
        Bereavement Support: We provide emotional support to help them transition from
difficult circumstances of losing their loved ones. This support also helps them to
overcome negative emotions, such as shock, sadness, and guilt.
        </li>
      </ul>

      <h2> Specialized Care</h2>
      <ul>
        <li>
        Hospice Care: Our committed clinical staff help to improve the quality of life of our
residents who are living with terminal illnesses and their families. We match the residents
with professionals who provide spiritual, social, and psychological care.
        </li>
        <li>
        Cognitive Behavioral Therapy (CBT): We provide CBT to residents experiencing
depression, anxiety, and other mental disorders.
        </li>
      </ul>
      </div>
      </div>
      </div>
  );
}

export default Products;