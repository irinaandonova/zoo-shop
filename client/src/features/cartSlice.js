import { createSlice } from "@reduxjs/toolkit";
const initialState =  {cartItems: [], totalPrice: 0.00 };
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let indexOfItem = state.cartItems.findIndex(x => x._id === action.payload._id);
            if(indexOfItem > -1) {
                state.cartItems[indexOfItem].quantity += action.payload.quantity;
            }
            else {
                state.cartItems.push(action.payload);
            }
            state.totalPrice += action.payload.price * action.payload.quantity;
        },
        changeQuantity: (state, action) => {
            let indexOfItem = state.cartItems.findIndex(x => x._id === action.payload._id);

            let item = state.cartItems[indexOfItem];
            let difference = action.payload.newQuantity - item.quantity;
            item.quantity = action.payload.newQuantity;
            state.totalPrice += Number(item.price) * difference;

            if(item.quantity === 0) {
                state.cartItems.splice(indexOfItem, 1);
            }

console.log(action.payload)
        }
    }  
})

export const { addToCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;