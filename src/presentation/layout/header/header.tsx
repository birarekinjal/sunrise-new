/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { setCollapse, setCollapseData } from './redux/action-creators';
import { RootState } from '../../reducer/rootReducer';
import Notification from './notification/notification';
import SearchBar from './searchBar/searchBar';
import ManageProfile from './profile/manageProfile';
import './header.scss';

function Header(props: any) {

  const dispatch = useDispatch();
  const headerData = useSelector((state: RootState) => state.header);
  const { collapseData } = headerData;


  const handleDrawerToggle = () => {
    dispatch(setCollapse(true));
  };

  const handleDrawerCollapse = () => {
    dispatch(setCollapseData(false));
    document.body.classList.remove('collapse-menu');
  };

  const drawerWidth = collapseData === false ? 300 : 80;
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>

          {/* for chrome  */}
          <span className='menuIconClose'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => handleDrawerToggle()}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            {collapseData == true ?
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => handleDrawerCollapse()}>
                <ArrowForwardIcon />
              </IconButton>
              :
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => handleDrawerCollapse()}>
                <MenuIcon />
              </IconButton>
            }
          </span>
          <Typography variant="h6" noWrap component="div">
            <ManageProfile />
            <SearchBar />
            Responsive drawer
            <Notification />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;



