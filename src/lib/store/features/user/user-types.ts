export type IUserSliceData = {
  displayName?: string;
  email?: string;
  theme?: string;
  role?: string;
  access_token?: string;
};

export type IUserSliceState = {
  data: IUserSliceData;
};
