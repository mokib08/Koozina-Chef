
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    instructor: []
}


const instructorSlice = createSlice({
    name: 'instructor',
    initialState,
    reducers: {
        loadinstructor: (state, action) => {
            state.instructor = action.payload
        }
    }
})

export default instructorSlice.reducer;
export const {loadinstructor} = instructorSlice.actions