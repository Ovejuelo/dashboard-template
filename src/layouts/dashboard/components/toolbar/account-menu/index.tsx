'use client';

import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
import { Logout } from '@mui/icons-material';
import { AvatarName } from '@/components/avatar';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { selectUserData, setUserLogout } from '@/lib/store/features/user/user-slice';
import { closeDialog, openDialog } from '@/lib/store/features/dialog/dialog-slice';
import { resetState } from '@/lib/store/store';

const ConfirmLogout: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Box p={3} maxWidth={512}>
      <Typography variant="h4" mb={1}>
        Do you want to log out now?
      </Typography>
      <Typography color="textSecondary" mb={4}>
        After logging out, you’ll need to enter your credentials again to access your account.
      </Typography>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Button
          fullWidth
          color="primary"
          onClick={() => dispatch(closeDialog())}
          variant="contained"
          sx={{ marginRight: 1 }}
        >
          Cancel
        </Button>
        <Button
          fullWidth
          color="secondary"
          onClick={() => {
            dispatch(setUserLogout());
            dispatch(resetState());
          }}
          variant="contained"
          sx={{ marginLeft: 1 }}
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

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
    dispatch(
      openDialog({
        children: <ConfirmLogout />,
        permanent: true
      })
    );
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
