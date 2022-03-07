import React from 'react';
import { Input } from '../../../../infrastructure/components/index';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

  return (
    <div>
      <Input
      type='text'
      placeholder='Search' 
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