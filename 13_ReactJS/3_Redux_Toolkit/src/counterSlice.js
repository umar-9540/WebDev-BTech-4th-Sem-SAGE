import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // Name of the slice
  initialState: {
    // The initial STATE
    value: 0,
  },
  reducers: {
    // The REDUCERS (logic to update state)
    increment: (state) => {
      state.value += 1; // RTK allows "mutating" state safely
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Action with Payload (Event + Add. Info)
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export ACTIONS so components can dispatch them
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export REDUCER so the store can use it
export default counterSlice.reducer;
