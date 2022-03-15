import { Menu, MenuItem } from '@mui/material';
import { Image } from '../../../../infrastructure/components/index';
import { constants } from '../../../../application/constants/constant';
import { collapsiblePopup } from '../../../../application/hooks/collapsiblePopupHooks';
import logo from '../../../../application/images/Sunrise-Diamonds-only-white-logo.png';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

const ManageProfile = () => {
  const { menuProps, openMenu, closeMenu } = collapsiblePopup();

  const { changePassword, manageProfile } = constants.profile;

  return (
    <div className='right-menu-header'>
      <div onClick={openMenu}>
        <div className='admin_icon'>
          <Image src={logo} />
        </div>
        <div className='admin_info'>
          <h3>Thomas Rolfe</h3>
          <p>Admin</p>
        </div>
        <ExpandCircleDownOutlinedIcon />

        {/* name and role will get from api here...*/}
      </div>
      <Menu {...menuProps}>
        <MenuItem id='menu' onClick={closeMenu} disableRipple>
          {manageProfile}
        </MenuItem>
        <MenuItem onClick={closeMenu} disableRipple>
          {changePassword}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ManageProfile;
