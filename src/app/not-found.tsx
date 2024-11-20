import { Box, Typography, Link as MuiLink, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={'center'}
      alignItems={'center'}
      width="100vw"
      height="100vh"
      p={{ xs: 1, md: 2 }}
    >
      <Box
        width={1}
        maxWidth={512}
        display="flex"
        flexDirection="column"
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography variant="h1" color="inherit" mb={3}>
          404
        </Typography>
        <Typography variant="h5" color="textSecondary" mb={3} align="center">
          Sorry but we could not find the page you are looking for
        </Typography>
        <TextField
          placeholder="Search for anything"
          name="search"
          variant="outlined"
          type="text"
          fullWidth
          sx={{ marginBottom: 3 }}
          autoComplete="off"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }
          }}
        />
        <MuiLink component={Link} href="/dashboard" underline="none">
          Go back to dashboard
        </MuiLink>
      </Box>
    </Box>
  );
}
