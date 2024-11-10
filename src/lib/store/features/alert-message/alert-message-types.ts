import { SnackbarProps } from '@mui/material';

export interface IMessageOptionsType extends SnackbarProps {
  variant: 'success' | 'warning' | 'info' | 'error';
}

export interface IMessageStateType {
  state?: boolean;
  options: IMessageOptionsType;
}
