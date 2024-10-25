import { createTheme } from '@mui/material/styles';
import baseConfig from './config';
import { darkPalette } from './config/palette';

const darkTheme = createTheme({
  ...baseConfig,
  palette: {
    mode: 'dark',
    ...darkPalette
  }
});

export default darkTheme;
