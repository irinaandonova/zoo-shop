import { createSlice } from "@reduxjs/toolkit";
const initialState =  {productId: '', comments: []};
const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        
    }  
})

export default commentsSlice.reducer;