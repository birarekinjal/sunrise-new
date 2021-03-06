import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { leftBarBgSvg } from '../../../application/constants/svgConstants';
import './sidebar.scss';
import logo from '../../../application/images/Sunrise-Diamonds-only-white-logo.png';
import Menu from './menu';
import useSetSidebar from './hook/useSetSidebar';
import { constants } from '../../../application/constants/constant';

const Sidebar = () => {
  const { drawerWidth, headerData, handleDrawerCollapse, handleDrawerToggle } =
    useSetSidebar();

  const { companyName } = constants.sideBar;

  const drawer = (
    <div className='aside-drawer-left-Menu'>
      <div className='content'>
        <a href='#' className='aside-drawer-header-logo'>
          <img alt='Sunrise Diamonds Ltd.' className='logo' src={logo} />
          {headerData.collapseData === false ? (
            <small>{companyName}</small>
          ) : (
            <small>{companyName}</small>
          )}
        </a>
        <span className='menuIcon'>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerCollapse}>
            <MenuIcon />
          </IconButton>
        </span>
        <Menu />
      </div>
      <span className='aside-drawer-top-bg'>{leftBarBgSvg}</span>
      <span className='aside-drawer-bottom-bg'>{leftBarBgSvg}</span>
    </div>
  );

  return (
    <Box
      className='nav-container'
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label='mailbox folders'>
      {/* Responsive Header */}
      <Drawer
        // container={container}
        variant='temporary'
        open={headerData?.collapse}
        onClose={handleDrawerToggle}
        className={'mobile-menu-drawer'}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
        }}>
        {drawer}
      </Drawer>
      {/* Responsive header close */}
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open>
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
