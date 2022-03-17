import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Footer = () => {
  return (
    <div>
      <footer>
      <p className='m-0'>
        Copyright ©2022{' '}
        <NavLink className='text-white' to='/'>
          impex.com.ng
        </NavLink>{' '}
        All rights reserved
      </p>
      </footer>
    </div>
  );
};

export default Footer;
