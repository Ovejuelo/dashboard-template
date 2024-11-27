import { createAppSlice } from '@/lib/store/create-app-slice';
import { PayloadAction } from '@reduxjs/toolkit';

import { DialogOptionsType, IDialogState } from './dialog-types';

const initialState: IDialogState = {
  state: false,
  options: {
    children: ''
  }
};

export const dialogSlice = createAppSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<DialogOptionsType>) => {
      state.state = true;
      state.options = action.payload as any;
    },
    closeDialog: state => {
      state.state = false;
      state.options = initialState.options as any;
    }
  },
  selectors: {
    selectDialogState: state => state
  }
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export const { selectDialogState } = dialogSlice.selectors;
