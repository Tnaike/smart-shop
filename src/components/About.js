import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h1>About Us</h1>
            <p className='lead'>Lorem ipenrj</p>
            <NavLink to='/contact' className='btn btn-outline-primary'>Contact Us</NavLink>
          </div>
          <div className='col-md-6'>
            <img src='/assets/images/about.png' alt='About Us' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
