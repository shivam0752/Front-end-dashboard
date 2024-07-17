import React from 'react';
import './searchBar.css';
function SearchBar() {
  return (
    <div className='search-bar'>
        <form 
        className='search-form d-flex align-items-center'
        method='POST'
        action="#"
        >
            <input type="text" name='query' placeholder='Search keyword' title='Enter the keyword' />
            <button type='submit' title='Search' >
                <i className='bi bi-search'> </i>
            </button>
        </form>
    </div>
  );
}

export default SearchBar