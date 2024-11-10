import { createSession } from '@/lib/session';
import { createAppSlice } from '../../create-app-slice';
import { createUser, userLogin } from './auth-api';
import { IAuthInitialState, ILoginData, ISignupData } from './auth-types';

const initialState: IAuthInitialState = {
  success: true,
  error: {
    email: '',
    password: ''
  }
};

export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: create => ({
    createUserSlice: create.asyncThunk(
      async (data: ISignupData) => {
        const response = await createUser(data);
        if (response?.access_token) createSession(response.access_token);
        return response;
      },
      {
        fulfilled: state => {
          state.success = true;
        },
        rejected: state => {
          state.success = false;
        }
      }
    ),
    userLoginSlice: create.asyncThunk(
      async (data: ILoginData) => {
        const response = await userLogin(data);
        if (response.access_token) createSession(response.access_token);
        return response;
      },
      {
        fulfilled: state => {
          state.success = true;
        },
        rejected: state => {
          state.success = false;
        }
      }
    )
  })
});

export const { createUserSlice, userLoginSlice } = authSlice.actions;
