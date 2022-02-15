/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { setCollapse, setCollapseData } from './redux/action-creators';
import { RootState } from '../../reducer/rootReducer';

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

  // const drawerWidth = 240;
  const drawerWidth = collapseData === false ? 240 : 60;
  return (
    <div className="header">
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => handleDrawerToggle()}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* for chrome  */}
          {collapseData == true ?
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => handleDrawerCollapse()}
            // sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            : ''}
          {/* for chrome */}
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;



