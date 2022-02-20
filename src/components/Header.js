import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/smartshop-logo.png';
import Login from './auth/Login';
import Signup from './auth/Signup';
import CartButton from './buttons/CartButton';
import ResetPassword from './auth/ResetPassword';

import './style.css';

const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container'>
          <NavLink className='navbar-brand' to='/'>
            <img src={Logo} alt='SmartShop' />
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-center'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link' aria-current='page'>
                  Shop
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/categories'
                  className='nav-link'
                  aria-current='page'
                >
                  Categories
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className='nav-link'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/products' className='nav-link'>
                  Product
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/contact' className='nav-link'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Login />
          <Signup />
          <CartButton />
          <ResetPassword />
        </div>
      </nav>
    </>
  );
};

export default Header;
