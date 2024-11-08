import { useEffect, useState } from 'react';
import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

const useBreakpoint = (breakpoint: Breakpoint) => {
  const [state, setState] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only(breakpoint));

  useEffect(() => {
    setState(matches);
    return () => {
      setState(false);
    };
  }, [matches]);

  return state;
};

export default useBreakpoint;
