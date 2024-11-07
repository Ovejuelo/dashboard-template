import axios from 'axios';

import { createAppSlice } from '../../create-app-slice';
import { createSession } from '@/lib/session';

const createUser = async (data: any) => {
  try {
    const response = await axios.post('/api/signup', data);
    createSession(response.data.access_token);
    return response.data;
  } catch (error) {
    return error;
  }
};

const initialState = {
  loading: false,
  success: true,
  error: {
    username: '',
    password: ''
  }
};

export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: create => ({
    createNewUser: create.asyncThunk(
      async (data: any) => {
        const response = await createUser(data);
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

export const { createNewUser } = authSlice.actions;
