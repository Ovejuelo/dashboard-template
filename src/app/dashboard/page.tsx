'use client';

import { setUserLogout } from '@/lib/store/features/user/user-slice';
import { useAppDispatch } from '@/lib/store/hooks';
import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  const logoutUser = () => {
    dispatch(setUserLogout());
  };

  return (
    <Box>
      <Typography>This is the Dashboard</Typography>
      <Button onClick={logoutUser}>Logout</Button>
    </Box>
  );
};

export default Dashboard;
