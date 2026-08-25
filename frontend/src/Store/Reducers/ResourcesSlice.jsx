
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    resources: []
}


const resourcesSlice = createSlice({
    name: 'resource',
    initialState,
    reducers: {
        loadresources: (state, action) => {
            state.resources = action.payload
        }
    }
})

export default resourcesSlice.reducer;
export const {loadresources} = resourcesSlice.actions