/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';
// import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Collapse } from '@mui/material';
import { menuItem } from '../../../application/constants/menuItem';
import './menu.scss';

const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState<number[]>([]);

  const handleClick = (ids: number[], currentId: number) => {

    if (currentMenu.includes(currentId)) {
      const position = currentMenu.findIndex((id) => {
        return id === currentId;
      });
      let updateArray = currentMenu.slice(0, position);
      setCurrentMenu(updateArray);
    } else {
      setCurrentMenu(ids);
    }
  };

  const handler = (MenuItemData: any[], parentIDs: number[]) => {
    return MenuItemData && MenuItemData.length > 0 && MenuItemData.map((subOption: any) => {
      if (!subOption.childrens) {
        return (
          <div key={subOption.id}
            onClick={() => handleClick([...parentIDs, subOption?.id], subOption?.id)}
            className={currentMenu.includes(subOption.id) ? 'menu active' : 'menu'}
          >
            <ListItemIcon>
              {subOption.icon}
            </ListItemIcon>
            <ListItem
              button
              key={subOption.id}>
              <Link
                to={subOption.url}
              >
                <ListItemText
                  inset
                  primary={subOption.name}
                />
              </Link>
            </ListItem>
          </div>
        );
      }
      return (
        <div key={subOption?.id}>
          <div
            className={currentMenu.includes(subOption.id) ? 'menu active' : 'menu'}>
            <ListItemIcon>
              {subOption.icon}
            </ListItemIcon>
            <ListItem
              button
              onClick={() => handleClick([...parentIDs, subOption?.id], subOption?.id)}>
              <ListItemText
                inset
                primary={subOption?.name} />
              {currentMenu.includes(subOption.id) ?
                <ExpandLess className='arrow' /> :
                <ExpandMore className='arrow' />
              }
            </ListItem>
          </div>
          <Collapse
            in={currentMenu.includes(subOption.id)}
            timeout="auto"
            unmountOnExit
          >
            {handler(subOption.childrens, [...parentIDs, subOption.id])}
          </Collapse>
        </div>
      );
    });
  };

  return (
    <div className="left-menu">
      {handler(menuItem, [])}
    </div>
  );
};

export default Menu;