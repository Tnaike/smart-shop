import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';
import SearchPanel from '../SearchPanel';

const SearchButton = () => {
  const [openSearchModal, setOpenSearchModal] = useState(false);

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
        <SearchPanel
          showSearchModal={openSearchModal}
          setShowSearchModal={setOpenSearchModal}
        />
      )}
    </>
  );
};

export default SearchButton;
