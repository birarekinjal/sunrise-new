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

  // const drawerWidth = 300;
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
        <Toolbar className='top-header'>
          <div className='left-panel'>
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
                  onClick={() => handleDrawerCollapse()}
                // sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <ArrowForwardIcon />
                </IconButton>
                : 
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={() => handleDrawerCollapse()}
                sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
              }
            </span>
            {/* for chrome */}
            <SearchBar />
          </div>
          
          <Typography variant="h6" noWrap component="div" className="right-panel">
          <div className='noti-icon'><Notification /></div>
            <ManageProfile />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;



