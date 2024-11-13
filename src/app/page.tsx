'use client';

import Link from 'next/link';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';

import { Box, Link as MuiLink, Typography } from '@mui/material';
import { SwitchDarkMode } from '@/layouts/dashboard/components/toolbar/switch-dark-mode';

export default function Page() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      width="100vw"
      bgcolor="background.paper"
    >
      <DesktopMacOutlinedIcon color="primary" sx={{ fontSize: 150, marginBottom: 2 }} />
      <SwitchDarkMode />
      <Typography variant="h1" align="center" mt={1} mb={1}>
        Dashboard template
      </Typography>
      <Typography align="center" maxWidth={380}>
        Dashboard skeleton template with a simple authentication and light/dark mode
      </Typography>
      <Box mt={2}>
        <MuiLink
          component={Link}
          href="/login"
          sx={{ marginRight: 4 }}
          underline="none"
          color="secondary"
        >
          Login
        </MuiLink>
        <MuiLink component={Link} href="/signup" underline="none" color="secondary">
          Signup
        </MuiLink>
      </Box>
    </Box>
  );
}
