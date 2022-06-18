import { createSlice } from "@reduxjs/toolkit";

const initialState = { productId: '', rating: [], finalRating: 1 };

const ratingSlice = createSlice({
    name: "rating",
    initialState,
    reducers: {
            getRating: (state, action) => {    
                state.productId = action.payload.productId;
                state.rating = action.payload.rating;
                let allRatings = 0;
                
                for (const rate of state.rating) {
                    allRatings += Number(rate.rating);
                }
                
                state.finalRating = allRatings / state.rating.length;
            },
            addRating: (state, action) => {
                let userId = action.payload.userId;
                let index = state.rating.findIndex(x => x.userId.toString() === userId);
                let allRatings = 0;
                if(index === -1) {
                    state.rating.push(action.payload);
                }
                else {
                    state.rating[index].rating = action.payload.rating;
                }
                for (const rate of state.rating) {
                    allRatings += Number(rate.rating);
                }
                state.finalRating = allRatings / state.rating.length;
            }
    }  
})

export const { getRating, addRating} = ratingSlice.actions;
export default ratingSlice.reducer;