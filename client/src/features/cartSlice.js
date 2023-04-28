import { createSlice } from "@reduxjs/toolkit";
const initialState = { cartItems: [], totalPrice: 0.00, };
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let indexOfItem = state.cartItems.findIndex(x => x._id === action.payload._id);

            if (indexOfItem >= 0) {
                state.cartItems[indexOfItem].quantity += action.payload.quantity;
            }
            else {
                state.cartItems.push(action.payload);
            }
            state.totalPrice += action.payload.price * action.payload.quantity;
        },
        increment: (state, action) => {
            let indexOfItem = state.cartItems.findIndex(x => x._id === action.payload._id);
            let item = state.cartItems[indexOfItem];
            item.quantity++;
            state.totalPrice += Number(item.price);
        },
        decrement: (state, action) => {
            let indexOfItem = state.cartItems.findIndex(x => x._id === action.payload._id);
            let item = state.cartItems[indexOfItem];
            item.quantity--;
            state.totalPrice -= Number(item.price);

            if (item.quantity === 0) {
                state.cartItems.splice(indexOfItem, 1);
            }
        },
        clearCart: (state, action) => {
            state.cartItems = [];
            state.totalPrice = 0.00;
        }
    }
});

export const { addToCart, increment, decrement, clearCart } = cartSlice.actions;
export default cartSlice.reducer;