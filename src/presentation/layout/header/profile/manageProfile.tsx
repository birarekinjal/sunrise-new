import { Menu, MenuItem } from '@mui/material';
import { Image } from '../../../../infrastructure/components/index';
import { constants } from '../../../../application/constants/constant';
import { useMenu } from '../../../../application/hooks/useMenu';

const ManageProfile = () => {
  const { menuProps, openMenu, closeMenu } = useMenu();

  const { changePassword, manageProfile } = constants.profile;

  return (
    <div>
      <div onClick={openMenu}>
      <Image src='./img/favicon.png' />
      {/* name and role will get from api here...*/}
      <h1>Name</h1>
      <h6>Role</h6>
      </div>
      <Menu {...menuProps} >
        <MenuItem 
        id='menu'
        onClick={closeMenu} disableRipple>
            { manageProfile }
        </MenuItem>
        <MenuItem 
        onClick={closeMenu} disableRipple>
           { changePassword }
        </MenuItem>
        </Menu>
    </div>
  );
};

export default ManageProfile;