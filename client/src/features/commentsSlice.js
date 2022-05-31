import { createSlice } from "@reduxjs/toolkit";
const initialState =  {productId: '', commentsArr: []};
const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        getComments: (state, action) => {
            if(state.productId !== action.payload.productId) {
                state.productId = action.payload.productId;                
            }
            state.commentsArr = action.payload.commentsArr;
            console.log(state.commentsArr[0]);
        },
        addComment: (state, action) => {
            state.commentsArr.push(action.payload.comment);
        },
        deleteComment: (state, action) => {
            let index = state.commentsArr.indexOf(action.payload._id);

            state.commentsArr.splice(index, 1);
        }
    }  
})

export const { getComments, addComment, deleteComment } = commentsSlice.actions;
export default commentsSlice.reducer;