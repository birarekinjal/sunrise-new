import InboxIcon from '@mui/icons-material/MoveToInbox';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';

export const menuItem = [
  {
    name: 'User Management',
    navigation: 'user-management',
    id: 1,
    url: '/user',
    icon: <PeopleOutlineOutlinedIcon />,
    childrens: [{
      name: 'User listing',
      navigation: 'user-listing',
      id: 2,
      url: '/user',
      icon: <InboxIcon />,
    }, {
      name: 'Add new user',
      navigation: 'add-new-user',
      id: 3,
      url: '/add-user',
      icon: <InboxIcon />,
    }],
  },
];
