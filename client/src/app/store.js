import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice.js';
import commentsSlice from '../features/commentsSlice.js';
import ratingSlice from '../features/ratingSlice.js';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        comments: commentsSlice,
        rating: ratingSlice
    }
})