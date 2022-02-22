import React from 'react';
// import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import { Box, Toolbar } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducer/rootReducer';
import { setCollapse, setCollapseData } from '../header/redux/action-creators';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { leftBarBgSvg } from '../../../application/constants/svgConstants';

import './sidebar.scss';
import logo from '../../../application/images/Sunrise-Diamonds-only-white-logo.png';

const Sidebar = () => {
  const dispatch = useDispatch();
  const headerData = useSelector((state: RootState) => state.header);

  // This method for responsive
  const handleDrawerToggle = () => {
    dispatch(setCollapse(false));
  };

  // this method for tablet
  const handleDrawerCollapse = () => {
    document.body.classList.add('collapse-menu');
    dispatch(setCollapseData(true));
  };

  const drawerWidth = headerData.collapseData === false ? 300 : 80;
  const drawer = (
    <div className='aside-drawer-left-Menu'>
      <div className='content'>
        <a href="#" className="aside-drawer-header-logo">
          <img
            alt="Sunrise Diamonds Ltd."
            className="logo"
            src={logo}
          />
          {headerData.collapseData === false ?
            <small>Sunrise Diamonds Ltd.</small>
            :
            <small>Sunrise Diamonds Ltd.</small>
          }
        </a>
        <span className='menuIcon'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerCollapse}
          // sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </span>
        <Toolbar />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
      <span className='aside-drawer-top-bg'>{leftBarBgSvg}</span>
      <span className='aside-drawer-bottom-bg'>{leftBarBgSvg}</span>
    </div>
  );

  return (

    <Box
      className="nav-container"
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* Responsive Header */}
      <Drawer
        // container={container}
        variant="temporary"
        open={headerData?.collapse}
        onClose={handleDrawerToggle}
        className={'mobile-menu-drawer'}
        ModalProps={{
          keepMounted: true,   // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
        }}
      >
        {drawer}
      </Drawer>
      {/* Responsive header close */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;