import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';

const SearchPanel = ({ showSearchModal, setShowSearchModal }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue({ value: event.target.value });
  };

  const handleSubmit = (e) => {
    console.log(searchValue);
    e.preventDefault();
  };

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
            <form onSubmit={handleSubmit} className='search-form'>
              <input
                type='text'
                className='search-field'
                placeholder='Enter Search...'
                name='searchField'
                autoComplete='off'
                defaultValue={searchValue.value}
                onChange={handleChange}
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
