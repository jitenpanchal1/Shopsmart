import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isauth: false,
        userdetail: null
    },
    reducers: {
        Login(state, action) {
            state.isauth = true;
            state.userdetail = action.payload
        },
        Logout(state) {
            state.isauth = false;
            state.userdetail = null
        }
    }
})

export const { Login, Logout } = authSlice.actions;
export default authSlice.reducer;