import axios from 'axios';
import { ILoginData, ISignupData } from './auth-types';

export const createUser = async (data: ISignupData) => {
  try {
    const response = await axios.post('/api/signup', data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const userLogin = async (data: ILoginData) => {
  try {
    const response = await axios.post('/api/login', data);
    return response.data;
  } catch (error) {
    return error;
  }
};
