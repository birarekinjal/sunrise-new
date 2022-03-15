import React from 'react';
import { MenuProps } from '@mui/material/Menu';

export const collapsiblePopup = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const openMenu = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  }, []);

  const closeMenu = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  }, []);

  const menuProps = React.useMemo((): MenuProps => {
    return {
      anchorEl,
      open: Boolean(anchorEl),
      onClose: closeMenu,
    };
  }, [anchorEl, closeMenu]);

  return {
    openMenu,
    closeMenu,
    menuProps,
  };
};