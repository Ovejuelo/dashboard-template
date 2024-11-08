import { createSession } from '@/lib/session';
import { createAppSlice } from '../../create-app-slice';
import { createUser, userLogin } from './auth-api';
import { IAuthInitialState, ILoginData, ISignupData } from './auth-types';

const initialState: IAuthInitialState = {
  loading: false,
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
        createSession(response.access_token);
        return response;
      },
      {
        pending: state => {
          state.loading = true;
        },
        fulfilled: state => {
          state.loading = false;
          state.success = true;
        },
        rejected: state => {
          state.loading = false;
        }
      }
    ),
    userLoginSlice: create.asyncThunk(
      async (data: ILoginData) => {
        const response = await userLogin(data);
        createSession(response.access_token);
        return response;
      },
      {
        pending: state => {
          state.loading = true;
        },
        fulfilled: state => {
          state.loading = false;
          state.success = true;
        },
        rejected: state => {
          state.loading = false;
        }
      }
    )
  })
});

export const { createUserSlice, userLoginSlice } = authSlice.actions;
