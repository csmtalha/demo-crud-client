/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPost } from '../store/actions/postActions';

export const Search = () => {
  const dispatch = useDispatch();

  const [searchKey, setSearchkey] = useState('');

  const handleSearch = () => {
    dispatch(searchPost(searchKey));
  };

  return (
    <div className='row'>
      <div className='col-75'>
        <input
          type='text'
          placeholder='Search...'
          value={searchKey}
          onChange={(e) => setSearchkey(e.target.value)}
        />
      </div>
      <div className='col-25'>
        <button
          onClick={handleSearch}
          type='submit'
          className='submit-btn'
        >
          Search
        </button>
      </div>
    </div>
  );
};
