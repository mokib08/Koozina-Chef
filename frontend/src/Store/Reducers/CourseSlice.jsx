import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses : []
}

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        loadcourse : (state, action) => {
            state.courses = action.payload
        }
    }
})



export default courseSlice.reducer;
export const {loadcourse} = courseSlice.actions