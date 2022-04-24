import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';
import SearchPanel from '../searchPanel/SearchPanel';

const SearchButton = () => {
  const [openSearchModal, setOpenSearchModal] = useState(false);

  return (
    <>
      <NavLink
        to='/'
        className='btn btn-cart a-link pr order-sm-1'
        onClick={() => setOpenSearchModal(!openSearchModal)}
      >
        <SearchIcon className='svg-navIcon' />
        <span className='icon-title d-line d-sm-none'>Search</span>
      </NavLink>

      {openSearchModal && (
        <SearchPanel
          showSearchModal={openSearchModal}
          setShowSearchModal={setOpenSearchModal}
        />
      )}
    </>
  );
};

export default SearchButton;
