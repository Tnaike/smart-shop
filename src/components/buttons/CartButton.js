import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as CartIcon} from '../../assets/Cart.svg';

const CartButton = () => {
  const state = useSelector((state) => state?.handleCart);
  return (
    <>
      <NavLink to='/cart' className='btn btn-cart a-link pr order-sm-4'>
        <CartIcon className='svg-navIcon'/>
        <span className='cart-count d-none d-sm-block'>{state?.length}</span>
        <span className='icon-title d-line d-sm-none'>Cart</span>
      </NavLink>
    </>
  );
};

export default CartButton;
