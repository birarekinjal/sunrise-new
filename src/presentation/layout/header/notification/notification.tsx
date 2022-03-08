import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import { IconButton, MenuItem, Tooltip } from '@mui/material';
import { useMenu } from '../../../../application/hooks/useMenu';
import { useNavigate } from 'react-router-dom';
import { constants } from '../../../../application/constants/constant';
import Badge from '@mui/material/Badge';


const Notification = () => {
  const { menuProps, openMenu, closeMenu } = useMenu();

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate('/user');
  };

  const { user, notification } = constants.notifications;

  return (
    <div>
      <Tooltip title="Notification">
          <IconButton
            onClick={openMenu}
            size='medium'
            sx={{ ml: 2 }}
          >
            <Badge badgeContent={5} color='success'>
           <NotificationsIcon />
           </Badge>
          </IconButton>
        </Tooltip>
    
    <Menu {...menuProps}>
        <MenuItem onClick={handleRoute} >
            {user}
        </MenuItem>
        <MenuItem onClick={closeMenu} >
            {notification}
        </MenuItem>
      </Menu>
        
    </div>
  );
};

export default Notification;


