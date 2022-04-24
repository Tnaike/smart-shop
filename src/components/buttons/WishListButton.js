import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as WishIcon } from '../../assets/Wish.svg';

const WishListButton = () => {
  return (
    <>
      <NavLink to='/' className='btn btn-cart a-link pr order-sm-3'>
        <WishIcon className='svg-navIcon-s' />
        <span className='fav-count d-none d-sm-block'>0</span>
        <span className='icon-title d-line d-sm-none'>Wishlist</span>
      </NavLink>
    </>
  );
};

export default WishListButton;
