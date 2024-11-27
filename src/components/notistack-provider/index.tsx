'use client';

import { RefObject } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { closeSnackbar, SnackbarKey, SnackbarProvider } from 'notistack';

import { notistackRef } from '@/utils/notistack-helper';

const notistackAction = (key: SnackbarKey) => (
  <IconButton color="inherit" onClick={() => closeSnackbar(key)} aria-label="close">
    <CloseIcon fontSize="small" />
  </IconButton>
);

export function NotistackProvider({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      action={notistackAction}
      preventDuplicate
      ref={
        notistackRef as RefObject<SnackbarProvider> &
          ((instance: SnackbarProvider | null) => void | (() => void))
      }
    >
      {children}
    </SnackbarProvider>
  );
}
