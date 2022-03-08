import React from 'react';
import { Input } from '../../../../infrastructure/components/index';
import SearchIcon from '@mui/icons-material/Search';
import { constants } from '../../../../application/constants/constant';
import './searchBar.scss';

const SearchBar = () => {

  const { searchPlaceholder } = constants.searchBar;

  return (
    <div className='search-input'>
      <Input
      type='text'
      placeholder={searchPlaceholder}
      inputProps={{
        startAdornment: (
          <SearchIcon />
        ),
      }}
      
      />
    </div>
  );
};

export default SearchBar;