/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconButton } from '@mui/material';
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { dispatch } from 'react-hot-toast/dist/core/store';
// import { setCollapse } from './redux/headerReducer';
// import { useHeadersHooks } from './hooks/useHeaderHooks';

function Header() {
  // const [state, { setSideMenuCollapse }] = useHeadersHooks();

  // console.log(state, 'state');

  const handleDrawerClose = () => {
    alert('hi');

    // dispatch(setCollapse('SET_COLLAPSE', true));
    // setSideMenuCollapse();
  };

  return (
    <div className="header">
      header
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
  );
}

export default Header;
