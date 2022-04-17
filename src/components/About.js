import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AboutImg } from '../assets/abt.svg';
import PageBanner from './pageBanner';

const About = () => {
  return (
    <div>
      <PageBanner />
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h2 className='text-primary fw-bold mb-4'>About Us</h2>
            <p className='lead mb-4'>
              Smart Shop is Nigeria’s number one online Shopping destination.We
              pride ourselves in having everything you could possibly need for
              life and living at the best prices than anywhere else. Our access
              to Original Equipment Manufacturers and premium sellers gives us a
              wide range of products at very low prices. Some of our popular
              categories include electronics, mobile phones, computers, fashion,
              beauty products, home and kitchen, Building and construction
              materials and a whole lot more from premium brands.
            </p>
            <NavLink to='/contact' className='btn btn-outline-primary px-3'>
              Contact Us
            </NavLink>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <AboutImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
