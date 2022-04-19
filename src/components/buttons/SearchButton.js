import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';
import SearchPage from '../SearchPage';

const SearchButton = () => {
  const [openSearchModal, setOpenSearchModal] = useState(false);
console.log(openSearchModal);
  return (
    <>
      <NavLink
        to='/'
        className='btn btn-cart a-link pr p-0 ms-3'
        onClick={() => setOpenSearchModal(!openSearchModal)}
      >
        <SearchIcon className='svg-navIcon' />
      </NavLink>

      {openSearchModal && (
        <SearchPage
          showSearchModal={openSearchModal}
          setShowSearchModal={setOpenSearchModal}
        />
      )}
    </>
  );
};

export default SearchButton;
