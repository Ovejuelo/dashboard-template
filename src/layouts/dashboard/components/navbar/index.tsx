import { sidebarMenu } from '@/constants/sidebar-menu';
import {
  Box,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavbarLayout: React.FC = () => {
  const pathname = usePathname();

  return (
    <Box overflow="auto">
      <List sx={{ paddingX: 1 }}>
        {sidebarMenu.map(item => (
          <ListItem key={item.id} dense disableGutters>
            <ListItemButton
              sx={{ borderRadius: 2 }}
              selected={pathname === item.path}
              component={Link}
              href={item.path}
            >
              <ListItemIcon>
                <Icon className="material-icons-outlined">{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export { NavbarLayout };
