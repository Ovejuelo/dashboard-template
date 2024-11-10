import { createAppSlice } from '@/lib/store/create-app-slice';
import { PayloadAction } from '@reduxjs/toolkit';

import { IUserSliceState } from './user-types';
import { deleteSession } from '@/lib/session';

const initialState: IUserSliceState = {
  data: {
    access_token: '',
    displayName: '',
    theme: 'dark',
    email: '',
    role: ''
  }
};

export const userSlice = createAppSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserSliceState>) => {
      state.data = { ...state.data, ...action.payload.data };
    },
    setUserLogout: state => {
      state.data = initialState.data;
      deleteSession();
    }
  },
  selectors: {
    selectUserData: counter => counter.data
  }
});

export const { setUserData, setUserLogout } = userSlice.actions;
export const { selectUserData } = userSlice.selectors;
