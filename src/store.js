import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './assets/features/cart/cartSlice';
import userReducer from './assets/features/user/userSlice'

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});