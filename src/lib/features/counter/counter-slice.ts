import { createAppSlice } from "@/lib/create-app-slice";

export interface CounterSliceState {
  value: number;
}

const initialState: CounterSliceState = {
  value: 0
}

export const counterSlice = createAppSlice({
  name: "counter",
  initialState,
  reducers: (create) => ({
    increment: create.reducer(state => {
      state.value += 1
    }),
    decrement: create.reducer(state => {
      state.value -= 1
    }),
    reStart: create.reducer(state => {
      state.value = initialState.value
    })
  }),
  selectors: {
    selectCount: counter => counter.value
  }
})

export const {increment, decrement, reStart} = counterSlice.actions
export const {selectCount} = counterSlice.selectors