
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    features: []
}


const featureSlice = createSlice({
    name: 'feature',
    initialState,
    reducers: {
        loadfeature: (state, action) => {
            state.features = action.payload
        }
    }
})

export default featureSlice.reducer;
export const {loadfeature} = featureSlice.actions