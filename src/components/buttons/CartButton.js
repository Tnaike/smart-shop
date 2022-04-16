import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartIcon from '../../assets/Cart.png';

const CartButton = () => {
  const state = useSelector((state) => state?.handleCart);
  return (
    <>
      <NavLink to='/cart' className='btn btn-cart a-link pr p-0 ms-3'>
        <span>
          <img src={CartIcon} alt='cart' />
        </span>
        <span className='cart-count'>{state?.length}</span>
      </NavLink>
    </>
  );
};

export default CartButton;
