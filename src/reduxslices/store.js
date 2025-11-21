import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./user.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
