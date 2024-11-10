'use client';

import React from 'react';
import { Box, Drawer } from '@mui/material';

import ToolbarLayout from './components/toolbar';
import { sizes, styles } from './styles';
import { AlertMessage } from '@/components/alert-message';

export const DashboardLayout1 = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle: () => void = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }} height="100vh" width={1} display="flex">
      <ToolbarLayout handleDrawerToggle={handleDrawerToggle} drawerWidth={sizes.drawerWidth} />
      <Box component="nav" sx={{ width: { md: sizes.drawerWidth } }} borderRight={{ md: 1 }}>
        <Drawer
          anchor="left"
          open={mobileOpen}
          variant="temporary"
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={styles.drawerTemporary}
        ></Drawer>
        <Drawer open variant="permanent" sx={styles.drawerPermanent}></Drawer>
      </Box>
      <Box component="main" sx={styles.mainContent}>
        {children}
      </Box>
      <AlertMessage />
    </Box>
  );
};
