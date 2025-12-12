import { createSlice } from "@reduxjs/toolkit";

const localstore = () => {
    try {

        const data = localStorage.getItem("cart")
        return data ? JSON.parse(data) : []

    } catch (error) {
        return []
    }
}

const initialState = {
    item: localstore()
}

const addtoCartSlice = createSlice({
    name: "cart-items",
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const product = action.payload
            const existing = state.item.find((p) => p.id === product.id)

            if (existing) {
                existing.qty += 1,
                    existing.total = existing.qty * existing.price
            } else {
                state.item.push({
                    ...product,
                    qty: 1,
                    total: product.price
                });
                localStorage.setItem("cart", JSON.stringify(state.item))
            }
        },

        removeCart: (state, action) => {
            state.item = state.item.filter((p) => p.id !== action.payload)
            localStorage.setItem("cart", JSON.stringify(state.item))
        },

        clearCard: (state) => {
            state.item = [],
                localStorage.setItem("cart", JSON.stringify(state.item))
        },

        incQty: (state, action) => {
            const iteme = state.item.find((p) => p.id === action.payload)
            if (iteme) {
                iteme.qty++,
                    iteme.total = iteme.qty * iteme.price,
                    localStorage.setItem("cart", JSON.stringify(state.item))
            }
        },

        decQty: (state, action) => {
            const iteme = state.item.find((p) => p.id === action.payload)
            if (iteme && iteme.qty > 1) {
                iteme.qty--,
                    iteme.total = iteme.qty * iteme.price,
                    localStorage.setItem("cart", JSON.stringify(state.item))
            }

        }

    }
})

export const { addToCart, removeCart, clearCard, incQty, decQty } = addtoCartSlice.actions
export default addtoCartSlice.reducer