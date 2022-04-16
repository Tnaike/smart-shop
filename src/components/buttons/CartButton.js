import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as CartIcon} from '../../assets/Cart.svg';

const CartButton = () => {
  const state = useSelector((state) => state?.handleCart);
  return (
    <>
      <NavLink to='/cart' className='btn btn-cart a-link pr p-0 ms-3'>
        <CartIcon className='svg-navIcon'/>
        <span className='cart-count'>{state?.length}</span>
      </NavLink>
    </>
  );
};

export default CartButton;
