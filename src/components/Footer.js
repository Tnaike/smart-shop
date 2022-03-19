import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return (
    <>
      <footer className='footer_wrap pr pt__60 pb__30 text-white'>
        <div className='container'>
          <div className='row'>
            <div clclass='col-lg-3 col-md-6 col-12 mb__30 order-lg-1'>
              <div className='widget_footer'>
                <h3 className='widget_title flex al_center fl_between fs__16 mg__0 mb__30'>
                  <span className='txt_title'>GET IN TOUCH</span>
                  <span className='nav_link_icon ml__5'></span>
                </h3>
              </div>
            </div>
            <p className='m-0'>
              Copyright ©2022{' '}
              <NavLink className='text-white' to='/'>
                Smart Store
              </NavLink>{' '}
              All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
