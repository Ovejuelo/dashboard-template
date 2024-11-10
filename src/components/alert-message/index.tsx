'use client';

import React from 'react';
import { Box, IconButton, Snackbar, SnackbarContent, Typography, useTheme } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import {
  hideMessage,
  selectMessageState
} from '@/lib/store/features/alert-message/alert-message-slice';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';

const getVarianIcon = (variant: string) => {
  switch (variant) {
    case 'success':
      return <CheckCircleOutlineIcon />;
    case 'warning':
      return <WarningAmberIcon />;
    case 'error':
      return <ErrorOutlineIcon />;
    case 'info':
      return <InfoOutlinedIcon />;
    default:
      return null;
  }
};

const AlertMessage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { state, options } = useAppSelector(selectMessageState);
  const theme = useTheme();

  const handleClose = (): void => {
    dispatch(hideMessage());
  };

  return (
    <Snackbar {...options} open={state} onClose={handleClose}>
      <SnackbarContent
        sx={{ background: theme.palette[options.variant].main, color: '#FFF', maxWidth: 500 }}
        message={
          <Box display="flex" alignItems="center">
            {getVarianIcon(options.variant) && getVarianIcon(options.variant)}
            <Typography ml={2} p={0}>
              {options.message}
            </Typography>
          </Box>
        }
        action={[
          <IconButton
            key="close"
            size="small"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

export { AlertMessage };
