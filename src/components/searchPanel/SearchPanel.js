import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';

const SearchPanel = ({ showSearchModal, setShowSearchModal }) => {
  console.log(showSearchModal);
  return (
    <>
      <div className='search-panel-wrap activeSearch'>
        <div className='topSearch-row'>
          <div className='topSearch-cell'>
            <div
              className='topSearch_close'
              onClick={() => setShowSearchModal(!showSearchModal)}
            >
              X
            </div>
            <form method='get' action='/' role='search' className='search-form'>
              <input
                type='text'
                className='search-field'
                placeholder='Enter Search...'
                name='searchField'
              />
              <button type='submit' className='topSearch-submit'>
              <SearchIcon className='svg-navIcon' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPanel;
