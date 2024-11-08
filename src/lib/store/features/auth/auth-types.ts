export interface ISignupData {
  username: string;
  email: string;
  password: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IAuthInitialState {
  loading: boolean;
  success: boolean;
  error: {
    email: string | null;
    password: string | null;
  };
}
