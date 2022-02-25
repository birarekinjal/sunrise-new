/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';
// import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Collapse, List } from '@mui/material';
import { data } from '../../../application/constants/menuItem';
import { number } from 'yup/lib/locale';

const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState<number[]>([]);

  const handleClick = (ids: number[], currentId: number) => {

    if (currentMenu.includes(currentId)) {
      if (currentMenu.length > 1) {
        // let index = currentMenu.findIndex(0: nu currentId: number);
        const position = currentMenu.findIndex((id) => {
          return id === currentId;
        });
        let updateArray = currentMenu.slice(position);
        setCurrentMenu(updateArray);
      } else {
        setCurrentMenu([]);
      }

    } else {
      setCurrentMenu(ids);
    }
  };

  const handler = (MenuItemData: any[], parentIDs: number[]) => {
    return MenuItemData && MenuItemData.length > 0 && MenuItemData.map((subOption: any) => {
      if (!subOption.childrens) {
        return (
          <div key={subOption.id}>
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
              <ExpandLess /> :
              <ExpandMore />
            }
          </ListItem>
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
      <List>
        {handler(data, [])}
      </List>
    </div>
  );
};

export default Menu;