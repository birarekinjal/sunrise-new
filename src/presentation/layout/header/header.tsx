/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Toolbar from '@mui/material/Toolbar';
import useSetHeader from './hook/useSetHeader';
import './header.scss';
import ManageProfile from './profile/manageProfile';
import SearchBar from './searchBar/searchBar';
import Notification from './notification/notification';

function Header(props: any) {
  const {
    collapseData,
    drawerWidth,
    handleDrawerCollapse,
    handleDrawerToggle,
  } = useSetHeader();

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}>
        <Toolbar>
          {/* for chrome  */}
          <span className='menuIconClose'>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={() => handleDrawerToggle()}
              sx={{ display: { md: 'none' } }}>
              <MenuIcon />
            </IconButton>
            {collapseData == true ? (
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={() => handleDrawerCollapse()}>
                <ArrowForwardIcon />
              </IconButton>
            ) : (
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={() => handleDrawerCollapse()}>
                <MenuIcon />
              </IconButton>
            )}
          </span>
          {/* for chrome */}
          <Typography variant='h6' noWrap component='div'>
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
