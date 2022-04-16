import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';

const SearchButton = () => {
  return (
    <>
      <NavLink to='/' className='btn btn-cart a-link pr p-0 ms-3'>
        <SearchIcon className='svg-navIcon'/>
      </NavLink>
    </>
  );
};

export default SearchButton;
