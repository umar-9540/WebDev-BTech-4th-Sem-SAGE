import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function Counter() {
  // Read STATE from store using useSelector
  const count = useSelector((state) => state.counter.value);

  // useDispatch allows us to send actions to the reducers
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Global Count: {count}</h2>
      {/* Dispatching ACTIONS */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
    </div>
  );
}
export default Counter;
