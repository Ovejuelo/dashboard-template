export const sizes = {
  drawerWidth: 250,
  topBarHeight: 64,
  topBarHeightXs: 56
};

export const styles = {
  drawerPermanent: {
    width: sizes.drawerWidth,
    flexShrink: 1,
    display: { xs: 'none', md: 'block' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: sizes.drawerWidth
    }
  },
  drawerTemporary: {
    width: sizes.drawerWidth,
    flexShrink: 1,
    display: { xs: 'block', md: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: sizes.drawerWidth
    }
  },
  mainContent: {
    flexGrow: 1,
    overflow: 'auto',
    position: 'relative',
    height: {
      xs: `calc(100% - ${sizes.topBarHeightXs}px)`,
      md: `calc(100% - ${sizes.topBarHeight}px)`
    },
    maxHeight: {
      xs: `calc(100% - ${sizes.topBarHeightXs}px)`,
      md: `calc(100% - ${sizes.topBarHeight}px)`
    },
    marginTop: { xs: `${sizes.topBarHeightXs}px`, sm: `${sizes.topBarHeight}px` }
  }
};
