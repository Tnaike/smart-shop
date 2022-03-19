import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Footer = () => {
  return (
    <div>
      <footer className='mt-5 py-3 bg-dark text-white'>
        <p className='m-0'>
          Copyright ©2022{' '}
          <NavLink className='text-white' to='/'>
            Smart Store
          </NavLink>{' '}
          All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
