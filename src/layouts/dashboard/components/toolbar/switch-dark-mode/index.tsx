import React from 'react';
import { Box, Tooltip } from '@mui/material';

import { CustomSwitch } from './style';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { selectUserData, setUserData } from '@/lib/store/features/user/user-slice';

const SwitchDarkMode: React.FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const theme = event.target.checked ? 'dark' : 'light';
    dispatch(setUserData({ data: { theme } }));
  };

  return (
    <Box display="flex" alignItems="center" mr={1}>
      <Tooltip title={`Toggle ${userData.theme === 'dark' ? 'light' : 'dark'} mode`}>
        <CustomSwitch
          size="small"
          checked={userData.theme === 'dark' ? true : false}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Tooltip>
    </Box>
  );
};

export { SwitchDarkMode };
