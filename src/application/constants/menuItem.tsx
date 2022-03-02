import InboxIcon from '@mui/icons-material/MoveToInbox';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';

export const data = [
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
      url: '/layout',
      icon: <InboxIcon />,
    }, {
      name: 'Add new user',
      navigation: 'add-new-user',
      id: 3,
      url: '/layout',
      icon: <InboxIcon />,
      childrens: [{
        name: 'ListTodo',
        navigation: 'listTodo',
        id: 4,
        url: '/layout',
        icon: <InboxIcon />,
      }, {
        name: 'All Mail',
        navigation: 'allmail',
        id: 5,
        url: '/layout',
        icon: <InboxIcon />,
      }],
    }],
  },
  {
    name: 'Memo Management',
    navigation: 'memo-management',
    id: 6,
    url: '/layout',
    icon: <InboxIcon />,
  },
];
