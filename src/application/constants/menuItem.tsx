import InboxIcon from '@mui/icons-material/MoveToInbox';

export const data = [
  {
    name: 'User',
    navigation: 'user',
    id: 1,
    url: '/user',
    icon: <InboxIcon />,
    childrens: [{
      name: 'ListTodo',
      navigation: 'listTodo',
      id: 2,
      url: '/layout',
      icon: <InboxIcon />,
    }, {
      name: 'All Mail',
      navigation: 'allmail',
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
    name: 'Layout',
    navigation: 'layout',
    id: 6,
    url: '/layout',
    icon: <InboxIcon />,
  },
];
