import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import { IconButton, Tooltip } from '@mui/material';
import { useMenu } from '../../../../application/hooks/useMenu';
import { useNavigate } from 'react-router-dom';
import { constants } from '../../../../application/constants/constant';


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
           <NotificationsIcon />
          </IconButton>
        </Tooltip>
    
    <Menu {...menuProps}>
        <div 
        onClick={handleRoute} >
            {user}
        </div>
        <div 
        onClick={closeMenu} >
            {notification}
        </div>
        </Menu>
        
    </div>
  );
};

export default Notification;


