import { SnackbarMessage, OptionsObject } from 'notistack';
import { createRef } from 'react';

type EnqueueSnackbar = (message: SnackbarMessage, options?: OptionsObject) => void;

export const notistackRef = createRef<{ enqueueSnackbar: EnqueueSnackbar }>();

export const Notifier = {
  success: (message: string, options: OptionsObject = {}) => {
    notistackRef.current?.enqueueSnackbar(message, { variant: 'success', ...options });
  },
  error: (message: string, options: OptionsObject = {}) => {
    notistackRef.current?.enqueueSnackbar(message, { variant: 'error', ...options });
  },
  warning: (message: string, options: OptionsObject = {}) => {
    notistackRef.current?.enqueueSnackbar(message, { variant: 'warning', ...options });
  },
  info: (message: string, options: OptionsObject = {}) => {
    notistackRef.current?.enqueueSnackbar(message, { variant: 'info', ...options });
  }
};
