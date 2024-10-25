'use client';

import { Box, FormControlLabel, Switch } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setUserData, selectUserData } from '@/lib/features/user/user-slice';

export default function Home() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserData({ darkTheme: event.target.checked }));
  };

  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={userData.darkTheme} onChange={handleChange} />}
        label="Dark theme"
      />
    </Box>
  );
}
