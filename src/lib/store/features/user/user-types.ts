export type IUserSliceData = {
  displayName?: string;
  email?: string;
  theme?: string;
  role?: string;
};

export type IUserSliceState = {
  access_token?: string;
  data: IUserSliceData;
};
