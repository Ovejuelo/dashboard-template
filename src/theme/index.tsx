'use client';

import { ReactNode } from 'react';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';

import { useAppSelector } from '@/lib/hooks';
import { selectUserData } from '@/lib/features/user/user-slice';
import lightTheme from './light';
import darkTheme from './dark';

type Theme = {
  children: ReactNode;
};

const Theme: React.FC<Theme> = ({ children }) => {
  const userData = useAppSelector(selectUserData);
  const theme = userData.darkTheme ? darkTheme : lightTheme;

  // Override MUI components
  theme.components = {
    ...theme.components
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
    </ThemeProvider>
  );
};

export { Theme };
