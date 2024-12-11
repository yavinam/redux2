import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: null,
  },
  reducers: {
    addToken(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addToken } = tokenSlice.actions; // setState
export default tokenSlice.reducer; // state
