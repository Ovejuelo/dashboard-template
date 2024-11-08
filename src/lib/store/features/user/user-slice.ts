import { createAppSlice } from '@/lib/store/create-app-slice';
import { PayloadAction } from '@reduxjs/toolkit';

import { IUserSliceState } from './user-types';
import { deleteSession } from '@/lib/session';

const initialState: IUserSliceState = {
  access_token: '',
  data: {
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
      state.data = { ...action.payload.data };
      state.access_token = action.payload.access_token;
    },
    setUserLogout: state => {
      state.access_token = initialState.access_token;
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
