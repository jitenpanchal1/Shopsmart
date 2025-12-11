import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchproduct = createAsyncThunk("products/fetch", async () => {
    const response = await axios.get("https://691c6d5e3aaeed735c90cb31.mockapi.io/products");
    return response.data;

})

const ProductSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: null,
        error: null,
        search: "",
        price: [0, 10000000],
    },

    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },

        setPriceRange(state, action) {
            state.price = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchproduct.pending, (state) => {
                state.status = "Loading"
            })
            .addCase(fetchproduct.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.items = action.payload
            })
            .addCase(fetchproduct.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }

})

export const { setSearch, setPriceRange } = ProductSlice.actions;

export default ProductSlice.reducer;