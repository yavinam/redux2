import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    value: JSON.parse(localStorage.getItem("user")) || [],
  },
  reducers: {
    addUser(state, action) {
      state.value.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.value));
    },
    deleteUser(state, action) {
      const index = state.value.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.value.splice(index, 1);
        localStorage.setItem("user", JSON.stringify(state.value));
      }
    },
    editUser(state, action) {
      const index = state.value.findIndex(
        (user) => user.id == action.payload.id
      );
      if (index !== -1) {
        state.value[index] = action.payload;
        localStorage.setItem("user", JSON.stringify(state.value));
      }
    },
  },
});

export const { addUser, deleteUser, editUser } = usersSlice.actions; // setState
export default usersSlice.reducer; // state
