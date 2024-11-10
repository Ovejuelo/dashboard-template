'use client';

import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { AccountMenu } from './account-menu';
import { SwitchDarkMode } from './switch-dark-mode';

export interface ToolbarLayoutProps {
  handleDrawerToggle: () => void;
  drawerWidth: number;
}

const ToolbarLayout: React.FC<ToolbarLayoutProps> = props => {
  const theme = useTheme();

  return (
    <AppBar
      elevation={0}
      color="transparent"
      sx={{
        width: {
          md: `calc(100% - ${props.drawerWidth}px)`,
          borderBottom: `solid 1px ${theme.palette.divider}`,
          background: theme.palette.background.paper
        }
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
          <Typography variant="h5">Dashboard UI</Typography>
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
