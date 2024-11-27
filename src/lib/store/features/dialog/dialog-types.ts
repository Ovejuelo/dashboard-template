import { DialogProps } from '@mui/material';

export type DialogOptionsType = Partial<Omit<DialogProps, 'open'>> & {
  permanent?: boolean;
};

export interface IDialogState {
  state: boolean;
  options: DialogOptionsType;
}
