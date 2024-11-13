import { sidebarMenu } from '@/constants/sidebar-menu';
import { AppBar, Box, Icon, List, MenuItem, Typography, useTheme } from '@mui/material';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface INavbarLayoutProps {
  appBarHeight: number;
}

const NavbarLayout: React.FC<INavbarLayoutProps> = ({ appBarHeight }) => {
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" height={1}>
      <AppBar
        color="transparent"
        position="static"
        elevation={0}
        sx={{
          alignItems: 'center',
          flexShrink: 1,
          minHeight: appBarHeight,
          background: theme.palette.background.paper
        }}
      >
        <Box display="flex" px="1rem" alignItems="center" flex={1}>
          <JavascriptIcon sx={{ fontSize: 60 }} />
        </Box>
      </AppBar>
      <Box height={1} bgcolor="background.paper">
        <List sx={{ padding: 1, paddingTop: 0 }}>
          {sidebarMenu.map(item => (
            <MenuItem
              key={item.id}
              sx={{ borderRadius: 2, marginBottom: 0.4 }}
              selected={pathname === item.path}
              component={Link}
              href={item.path}
            >
              <Icon className="material-icons-outlined" sx={{ fontSize: '20px !important' }}>
                {item.icon}
              </Icon>
              <Typography ml={2}>{item.name}</Typography>
            </MenuItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export { NavbarLayout };
