import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, Tooltip } from '@mui/material';


const Notification = () => {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };



  return (
    <div>
      <Tooltip title="Notification">
          <IconButton
            onClick={handleClose}
            size='medium'
            sx={{ ml: 2 }}
          >
           <NotificationsIcon />
          </IconButton>
        </Tooltip>
    
    <Menu 
    id='menu'
    open={open}
    onClose={handleClose}
    >
        <MenuItem 
        id='menu'
        onClick={handleClose} disableRipple>
            Notification
        </MenuItem>
        </Menu>
    </div>
  );
};

export default Notification;


