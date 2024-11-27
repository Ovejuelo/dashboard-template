'use client';

import React from 'react';
import { Box, Drawer, Toolbar } from '@mui/material';

import ToolbarLayout from './components/toolbar';
import { sizes, styles } from './styles';
import { NavbarLayout } from './components/navbar';
import { MainDialog } from '@/components/dialog';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle: () => void = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }} height="100vh" width={1} display="flex">
      <ToolbarLayout handleDrawerToggle={handleDrawerToggle} drawerWidth={sizes.drawerWidth} />
      <Drawer open variant="permanent" sx={styles.drawerPermanent}>
        <Toolbar />
        <NavbarLayout />
      </Drawer>
      <Drawer
        anchor="left"
        open={mobileOpen}
        variant="temporary"
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={styles.drawerTemporary}
      >
        <NavbarLayout />
      </Drawer>
      <Box component="main" sx={styles.mainContent}>
        {children}
      </Box>

      {/* COMMON COMPONENTS */}
      <MainDialog />
    </Box>
  );
};
