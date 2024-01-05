import { createSlice } from "@reduxjs/toolkit";
const bookMarkSlice = createSlice({
    name: "bookmark",
    initialState: {
        value: "",
    },
    reducers: {
        removeBookmark: ( state,action ) =>{
            state.value = action.payload;
        }
        , addBookmark: ( state,action ) =>{
            state.value = action.payload;
        },
        update: ( state,action ) =>{
            state.value = action.payload;
        }

    }
})
export const { removeBookmark,update,addBookmark} = bookMarkSlice.actions;
export default bookMarkSlice.reducer;