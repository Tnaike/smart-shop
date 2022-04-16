import React from 'react';
import { NavLink } from 'react-router-dom';

const WishListButton = () => {
  return (
    <>
      <NavLink to='/' className='btn btn-cart a-link pr p-0 ms-3'>
        <span className='fa fa-heart-o me-1 font-20'></span>
        <span className='fav-count'>0</span>
      </NavLink>
    </>
  );
};

export default WishListButton;
