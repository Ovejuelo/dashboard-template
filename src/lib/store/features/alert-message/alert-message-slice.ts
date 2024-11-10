import { PayloadAction } from '@reduxjs/toolkit';

import { IMessageOptionsType, IMessageStateType } from './alert-message-types';
import { createAppSlice } from '../../create-app-slice';

const initialState: IMessageStateType = {
  state: false,
  options: {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    autoHideDuration: 4000,
    variant: 'success',
    message: ''
  }
};

export const alertMessageSlice = createAppSlice({
  name: 'alert message',
  initialState,
  reducers: {
    showMessage: (state, action: PayloadAction<IMessageOptionsType>) => {
      state.state = true;
      state.options = { ...state.options, ...action.payload } as any;
    },
    hideMessage: state => {
      state.state = false;
    }
  },
  selectors: {
    selectMessageState: state => state
  }
});

export const { showMessage, hideMessage } = alertMessageSlice.actions;
export const { selectMessageState } = alertMessageSlice.selectors;
