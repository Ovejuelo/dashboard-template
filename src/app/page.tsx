'use client';

import { Box, FormControlLabel, Switch, Link as MuiLink } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { setUserData, selectUserData } from '@/lib/store/features/user/user-slice';
import Link from 'next/link';

export default function Home() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const theme = event.target.checked ? 'dark' : 'licht';
    dispatch(setUserData({ data: { theme } }));
  };

  return (
    <Box p={2}>
      <FormControlLabel
        control={
          <Switch checked={userData.theme === 'dark' ? true : false} onChange={handleChange} />
        }
        label="Dark theme"
      />
      <Box>
        <MuiLink component={Link} href="/signup">
          Register
        </MuiLink>
      </Box>
      <Box>
        <MuiLink component={Link} href="/login">
          Login
        </MuiLink>
      </Box>
      <Box>
        <MuiLink component={Link} href="/dashboard">
          Enter dashboard
        </MuiLink>
      </Box>
    </Box>
  );
}
