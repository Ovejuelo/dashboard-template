import { Action, combineSlices, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { counterSlice } from './features/counter/counter-slice'

const rootReducer = combineSlices(counterSlice)

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>