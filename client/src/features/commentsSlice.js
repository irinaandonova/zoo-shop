import { createSlice } from "@reduxjs/toolkit";
const initialState =  {productId: '', comments: []};
const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        getComments: (state, action) => {
            if(state.productId !== action.payload.productId) {
                state.productId = action.payload.productId;                
            }
            state.comments = action.payload.comments;
            console.log(state.comments);
        },
        addComment: (state, action) => {
            if(state.productId !== action.payload.productId) {
                getComments({productId: action.payload.productId, comments:action.payload.comments})
            }
            console.log(state.comments);
            state.comments.push(action.payload.comment);
        },
    }  
})

export const { getComments, addComment } = commentsSlice.actions;
export default commentsSlice.reducer;