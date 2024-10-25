"use client"

import { decrement, increment, selectCount } from "@/lib/features/counter/counter-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount)

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <span>{count}</span>
    </div>
  );
}
