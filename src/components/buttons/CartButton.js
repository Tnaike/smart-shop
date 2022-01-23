import React from 'react';
import { NavLink } from 'react-router-dom';

const CartButton = () => {
  return (
    <>
      <NavLink to='/' className='a-link pos-res ms-4'>
        <span className='fa fa-shopping-cart me-1'></span> Cart
        <span className='cart-count'>0</span>
      </NavLink>
    </>
  );
};

export default CartButton;
