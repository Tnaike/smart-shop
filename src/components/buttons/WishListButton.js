import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as WishIcon} from '../../assets/Wish.svg';

const WishListButton = () => {
  return (
    <>
      <NavLink to='/' className='btn btn-cart a-link pr p-0 ms-3'>
        <WishIcon className='svg-navIcon-s'/>
        <span className='fav-count'>0</span>
      </NavLink>
    </>
  );
};

export default WishListButton;
