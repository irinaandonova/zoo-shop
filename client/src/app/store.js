import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice.js';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})