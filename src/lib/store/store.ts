import {
  Action,
  combineReducers,
  configureStore,
  createAction,
  ThunkAction
} from '@reduxjs/toolkit';

import { userSlice } from './features/user/user-slice';
import { authSlice } from './features/auth/auth-slice';
import { dialogSlice } from './features/dialog/dialog-slice';

export const resetState = createAction('RESET_STATE');

const rootReducer = (state: any, action: any) => {
  if (action.type === resetState.type) {
    state = undefined;
  }
  return combineReducers({
    user: userSlice.reducer,
    auth: authSlice.reducer,
    dialog: dialogSlice.reducer
  })(state, action);
};

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['dialog/openDialog'],
          ignoredPaths: ['dialog.options.children']
        }
      })
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
