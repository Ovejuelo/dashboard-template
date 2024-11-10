'use client';

import React from 'react';
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { AvatarName } from '@/components/avatar';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { selectUserData, setUserLogout } from '@/lib/store/features/user/user-slice';

const AccountMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUserData);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    dispatch(setUserLogout());
  };

  return (
    <>
      <IconButton onClick={handleClick} size="small">
        <AvatarName name={user.displayName as string} />
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar sx={{ marginRight: 2, width: 32, height: 32 }} /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ marginRight: 2, width: 32, height: 32 }} /> Account business
        </MenuItem>
        <Divider />
        <MenuItem onClick={logoutUser}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export { AccountMenu };
