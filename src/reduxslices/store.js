import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./user.jsx";
import productReducer from "./ProductSlice.jsx";
import addtoCartReducer from "./AddtoCart.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: addtoCartReducer,
  },
});
