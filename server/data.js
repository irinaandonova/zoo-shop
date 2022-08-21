import { createSlice } from "@reduxjs/toolkit";
const initialState =  {productId: '', comments: []};
const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        getComments: (state, action) => {
            //Фиг. 44
        },
        addComment: (state, action) => {
            //Фиг.46
        },
        deleteComment: (state, action) => {
            //Фиг. 47
        }
    }  
})

export const { getComments, addComment, deleteComment } = commentsSlice.actions;
export default commentsSlice.reducer;