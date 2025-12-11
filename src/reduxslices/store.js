import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./user.jsx";
import productReducer from "./ProductSlice.jsx";  

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});
