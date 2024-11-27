import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid2';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ flexGrow: 1 }} height="100vh" width={1}>
      <Grid container height={1}>
        <Grid
          size={{ xs: 12, md: 5, lg: 4 }}
          display={{ xs: 'none', md: 'flex' }}
          alignItems="center"
          bgcolor="primary.dark"
          color="#FFF"
        >
          <Box p={4} px={8}>
            <GitHubIcon sx={{ fontSize: 50 }} />
            <Typography variant="h1">Welcome to my awesome page</Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iusto sint
              officiis beatae enim possimus?
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7, lg: 8 }} p={{ sm: 2 }}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
