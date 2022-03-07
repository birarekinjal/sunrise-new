import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { Image } from '../../../../infrastructure/components/index';

const ManageProfile = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleAlert = () => {
    alert('this');
  };

  return (
    <div>
      <div onClick={handleClick}>
      <Image src='./img/favicon.png' />
      <h1>Name</h1>
      <h6>Role</h6>
      </div>
      <Menu 
    id='menu'
    open={open}
    onClose={handleClick}
    >
        <MenuItem 
        id='menu'
        onClick={handleAlert} disableRipple>
            Manage profile
        </MenuItem>
        <MenuItem 
        onClick={handleAlert} disableRipple>
           Change Password
        </MenuItem>
        </Menu>
    </div>
  );
};

export default ManageProfile;