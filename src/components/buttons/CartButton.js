import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartButton = () => {
  const state = useSelector((state) => state.addItem);
  return (
    <>
      <NavLink to='/cart' className='btn btn-cart a-link pos-res ms-4'>
        <span className='fa fa-shopping-cart me-1'></span> Cart
        <span className='cart-count'>{state.length}</span>
      </NavLink>
    </>
  );
};

export default CartButton;
