import { AppBar } from '@mui/material';

const NavbarLayout: React.FC = () => {
  return (
    <AppBar
      color="primary"
      position="static"
      elevation={0}
      sx={{
        alignItems: 'center',
        flexShrink: 1
      }}
    ></AppBar>
  );
};

export { NavbarLayout };
