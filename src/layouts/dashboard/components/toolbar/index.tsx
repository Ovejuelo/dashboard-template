'use client';

import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import JavascriptIcon from '@mui/icons-material/Javascript';
import MenuIcon from '@mui/icons-material/Menu';

import { AccountMenu } from './account-menu';
import { SwitchDarkMode } from './switch-dark-mode';

export interface ToolbarLayoutProps {
  handleDrawerToggle: () => void;
  drawerWidth: number;
}

const ToolbarLayout: React.FC<ToolbarLayoutProps> = props => {
  return (
    <AppBar
      elevation={0}
      color="transparent"
      position="fixed"
      sx={{
        borderBottom: theme => `solid 1px ${theme.palette.divider}`,
        background: theme => theme.palette.background.paper,
        zIndex: theme => ({ md: theme.zIndex.drawer + 1 })
      }}
    >
      <Toolbar sx={{ padding: '0 1rem', display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <IconButton
            onClick={props.handleDrawerToggle}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Box display="flex" alignItems="center">
            <JavascriptIcon fontSize="large" color="primary" />
            <Typography variant="h6" ml={1}>
              Dashboard UI
            </Typography>
          </Box>
        </Box>

        <Box display="flex">
          <SwitchDarkMode />
          <AccountMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarLayout;
