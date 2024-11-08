'use client';

import { Box, FormControlLabel, Switch, Link as MuiLink } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/lib/state/hooks';
import { setUserData, selectUserData } from '@/lib/state/features/user/user-slice';
import Link from 'next/link';

export default function Home() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserData({ darkTheme: event.target.checked }));
  };

  return (
    <Box p={2}>
      <FormControlLabel
        control={<Switch checked={userData.darkTheme} onChange={handleChange} />}
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
