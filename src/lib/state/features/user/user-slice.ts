import { createAppSlice } from '@/lib/state/create-app-slice';
import { PayloadAction } from '@reduxjs/toolkit';

export type UserSliceData = {
  displayName?: string;
  email?: string;
  darkTheme?: boolean;
};

export type UserSliceState = {
  isLogged: boolean;
  data: UserSliceData;
};

const initialState: UserSliceState = {
  isLogged: false,
  data: {
    displayName: '',
    email: '',
    darkTheme: true
  }
};

export const userSlice = createAppSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserSliceData>) => {
      state.data = { ...action.payload };
    }
  },
  selectors: {
    selectUserData: counter => counter.data
  }
});

export const { setUserData } = userSlice.actions;
export const { selectUserData } = userSlice.selectors;
