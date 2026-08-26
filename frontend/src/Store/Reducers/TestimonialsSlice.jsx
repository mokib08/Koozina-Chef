
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    testimonials: []
}


const testimonialsSlice = createSlice({
    name: 'testimonial',
    initialState,
    reducers: {
        loadtestimonials: (state, action) => {
            state.testimonials = action.payload
        }
    }
})

export default testimonialsSlice.reducer;
export const {loadtestimonials} = testimonialsSlice.actions