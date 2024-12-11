import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import wishlist from "./slices/wishlist-slice";
import user from "./slices/user-slice";
import token from "./slices/token-slice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist,
    user,
    token,
  },
});

export default store;
